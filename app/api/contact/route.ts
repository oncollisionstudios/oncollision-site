import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validate(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;
  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return null;
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || trimmedName.length > 100) return null;
  if (!EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 200) return null;
  if (!trimmedMessage || trimmedMessage.length > 5000) return null;

  return { name: trimmedName, email: trimmedEmail, message: trimmedMessage };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = validate(body);

    if (!payload) {
      return Response.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "oncollisionstudios@gmail.com",
      replyTo: payload.email,
      subject: `OnCollision Contact: ${payload.name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}