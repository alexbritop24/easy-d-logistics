import { Resend } from "resend";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, message, company } = body;

    // Honeypot (bot trap)
    if (company) {
      return {
        statusCode: 200,
        headers: { ...cors, "Content-Type": "application/json" },
        body: JSON.stringify({ ok: true }),
      };
    }

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { ...cors, "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    // Safe mode: don’t fail builds if env isn’t ready
    if (!apiKey || !toEmail || !fromEmail) {
      return {
        statusCode: 200,
        headers: { ...cors, "Content-Type": "application/json" },
        body: JSON.stringify({
          ok: false,
          configured: false,
          error:
            "Email delivery is not configured yet. Please use the email/phone above for now.",
        }),
      };
    }

    const resend = new Resend(apiKey);

    const subject = `New Contact Form: ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; background:#f6f6f6; padding:12px; border-radius:8px;">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email, // Resend uses snake_case in many examples; this works reliably
      subject,
      text,
      html,
    });

    if (error) {
      return {
        statusCode: 500,
        headers: { ...cors, "Content-Type": "application/json" },
        body: JSON.stringify({ ok: false, configured: true, error: error.message }),
      };
    }

    return {
      statusCode: 200,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true, configured: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ ok: false, error: err?.message || "Server error" }),
    };
  }
};

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}