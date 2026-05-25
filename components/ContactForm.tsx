"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const EMPTY: FormState = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const isValid =
    form.name.trim() && form.email.trim() && form.message.trim();

  async function sendEmail() {
    if (!isValid) {
      setStatus({ kind: "error", message: "Please fill out every field." });
      return;
    }

    setStatus({ kind: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Server error");

      setStatus({ kind: "success" });
      setForm(EMPTY);
    } catch {
      setStatus({
        kind: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  }

  const isLoading = status.kind === "loading";

  const inputClasses =
    "w-full bg-black/95 border border-gray-700 rounded-lg p-4 focus:border-cyan-500 focus:outline-none transition disabled:opacity-50";

  return (
    <div className="space-y-6">
      <input
        value={form.name}
        onChange={update("name")}
        type="text"
        placeholder="Name"
        disabled={isLoading}
        className={inputClasses}
      />

      <input
        value={form.email}
        onChange={update("email")}
        type="email"
        placeholder="Email"
        disabled={isLoading}
        className={inputClasses}
      />

      <textarea
        value={form.message}
        onChange={update("message")}
        rows={6}
        placeholder="Message"
        disabled={isLoading}
        className={inputClasses}
      />

      <button
        onClick={sendEmail}
        disabled={isLoading}
        className={`
          relative
          px-8 py-4
          rounded-xl
          bg-cyan-500
          btn-glow
          transition
          overflow-hidden
          disabled:cursor-wait
          ${isLoading ? "send-button-loading" : "hover:scale-105"}
        `}
      >
        <span className="relative z-10 inline-flex items-center gap-3">
          {isLoading ? (
            <>
              <SpinnerIcon />
              Transmitting...
            </>
          ) : (
            "Send Message"
          )}
        </span>
      </button>

      {status.kind === "success" && (
        <p className="text-cyan-400">Message sent. We&apos;ll be in touch.</p>
      )}
      {status.kind === "error" && (
        <p className="text-red-400">{status.message}</p>
      )}
    </div>
  );
}

/** Small spinning cyan ring rendered as SVG for crisp animation. */
function SpinnerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="3"
      />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
