type LeadData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  leadId?: string;
};

export async function sendContactLeadEmail(data: LeadData): Promise<boolean> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO_EMAIL;
  const contactFrom = process.env.CONTACT_FROM_EMAIL || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !contactTo) {
    return false;
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: smtpUser, pass: smtpPass },
    });

    const dashboardLink = data.leadId
      ? `<p style="margin-top:16px;font-size:13px;"><a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://promksa.com"}/admin/leads" style="color:#7448F5;">عرض في لوحة التحكم</a></p>`
      : "";

    await transporter.sendMail({
      from: contactFrom || smtpUser,
      to: contactTo,
      subject: "طلب تواصل جديد من موقع Prominent Experts",
      html: `
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
          ${dashboardLink}
          <p style="margin-top:20px;font-size:12px;color:#999;text-align:center;">تم الإرسال عبر promksa.com • ${new Date().toLocaleDateString("ar-SA")}</p>
        </div>
      `,
    });

    return true;
  } catch {
    return false;
  }
}
