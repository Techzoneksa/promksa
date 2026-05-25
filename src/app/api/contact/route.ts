import { NextRequest, NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str: string, maxLen: number): string {
  return str.trim().replace(/<[^>]*>/g, "").slice(0, maxLen);
}

function buildEmailHtml(data: { name: string; email: string; phone: string; service: string; message: string }): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9;border-radius:16px;">
      <div style="background:linear-gradient(135deg,#7448F5,#41C7D7);padding:20px;border-radius:12px;text-align:center;">
        <h1 style="color:white;margin:0;font-size:20px;">طلب تواصل جديد</h1>
        <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:14px;">Prominent Experts</p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-top:20px;">
        <tr><td style="padding:10px;font-weight:bold;color:#333;width:100px;">الاسم</td><td style="padding:10px;color:#666;">${data.name}</td></tr>
        <tr style="background:#f0f0f0;"><td style="padding:10px;font-weight:bold;color:#333;">البريد</td><td style="padding:10px;color:#666;">${data.email || "—"}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;color:#333;">الجوال</td><td style="padding:10px;color:#666;">${data.phone}</td></tr>
        <tr style="background:#f0f0f0;"><td style="padding:10px;font-weight:bold;color:#333;">الخدمة</td><td style="padding:10px;color:#666;">${data.service}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;color:#333;vertical-align:top;">الرسالة</td><td style="padding:10px;color:#666;">${data.message}</td></tr>
      </table>
      <p style="margin-top:20px;font-size:12px;color:#999;text-align:center;">تم الإرسال عبر موقع promksa.com • ${new Date().toLocaleDateString("ar-SA")}</p>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, _hp } = body;

    if (_hp && typeof _hp === "string" && _hp.length > 0) {
      return NextResponse.json({ success: true, message: "تم استلام طلبك بنجاح، وسنتواصل معك قريباً." });
    }

    const errors: string[] = [];

    if (!name || typeof name !== "string" || name.trim().length < 2) errors.push("الاسم مطلوب");
    if (!phone || typeof phone !== "string" || phone.trim().length < 7) errors.push("رقم الجوال مطلوب");
    if (!service || typeof service !== "string") errors.push("الخدمة المطلوبة مطلوبة");
    if (!message || typeof message !== "string" || message.trim().length < 10) errors.push("الرسالة يجب أن تحتوي على 10 أحرف على الأقل");
    if (email && typeof email === "string" && email.length > 0 && !emailRegex.test(email)) errors.push("البريد الإلكتروني غير صحيح");

    if (errors.length > 0) {
      return NextResponse.json({ success: false, message: errors.join("، ") }, { status: 400 });
    }

    const data = {
      name: sanitize(name, 100),
      email: email ? sanitize(email, 200) : "",
      phone: sanitize(phone, 20),
      service: sanitize(service, 100),
      message: sanitize(message, 2000),
    };

    console.log("[Contact] New submission:", JSON.stringify({ ...data, email: data.email ? "***" : "" }));

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO_EMAIL;
    const contactFrom = process.env.CONTACT_FROM_EMAIL || smtpUser;

    if (smtpHost && smtpUser && smtpPass && contactTo) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.default.createTransport({
          host: smtpHost,
          port: parseInt(process.env.SMTP_PORT || "587", 10),
          secure: process.env.SMTP_SECURE === "true",
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: contactFrom || smtpUser,
          to: contactTo,
          subject: "طلب تواصل جديد من موقع Prominent Experts",
          html: buildEmailHtml(data),
        });

        console.log("[Contact] Email sent successfully");
      } catch (emailErr) {
        console.error("[Contact] Email send failed:", emailErr);
      }
    } else {
      console.log("[Contact] SMTP not configured, skipping email");
    }

    return NextResponse.json({
      success: true,
      message: "تم استلام طلبك بنجاح، وسنتواصل معك قريباً.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "تعذر إرسال الطلب حالياً، يمكنك المحاولة مرة أخرى أو التواصل معنا عبر واتساب." },
      { status: 500 },
    );
  }
}
