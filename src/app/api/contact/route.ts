import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/services-data";

async function sendInquiryEmail(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.log("Contact form submission (email not configured):", {
      to: siteConfig.email,
      ...data,
      timestamp: new Date().toISOString(),
    });
    return;
  }

  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.default.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: SMTP_USER,
    to: siteConfig.email,
    replyTo: data.email,
    subject: `New inquiry from ${data.name} — ${data.service}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendInquiryEmail({ name, email, phone, service, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
