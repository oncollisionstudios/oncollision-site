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

  const inputClasses =
    "w-full bg-black border border-gray-700 rounded-lg p-4 focus:border-cyan-500 focus:outline-none transition";

  return (
    <div className="space-y-6">
      <input
        value={form.name}
        onChange={update("name")}
        type="text"
        placeholder="Name"
        className={inputClasses}
      />

      <input
        value={form.email}
        onChange={update("email")}
        type="email"
        placeholder="Email"
        className={inputClasses}
      />

      <textarea
        value={form.message}
        onChange={update("message")}
        rows={6}
        placeholder="Message"
        className={inputClasses}
      />

      <button
        onClick={sendEmail}
        disabled={status.kind === "loading"}
        className="px-8 py-4 rounded-xl bg-cyan-500 btn-glow hover:scale-105 transition disabled:opacity-50 disabled:hover:scale-100"
      >
        {status.kind === "loading" ? "Sending..." : "Send Message"}
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
