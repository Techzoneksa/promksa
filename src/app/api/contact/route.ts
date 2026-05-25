import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    const errors: string[] = [];

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.push("الاسم مطلوب");
    }
    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      errors.push("رقم الجوال مطلوب");
    }
    if (!service || typeof service !== "string") {
      errors.push("الخدمة المطلوبة مطلوبة");
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.push("الرسالة يجب أن تحتوي على 10 أحرف على الأقل");
    }
    if (email && typeof email === "string" && email.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push("البريد الإلكتروني غير صحيح");
      }
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, message: errors.join("، ") }, { status: 400 });
    }

    const sanitized = {
      name: name.trim().slice(0, 100),
      email: email?.trim().slice(0, 200) || "",
      phone: phone.trim().slice(0, 20),
      service: service.trim().slice(0, 100),
      message: message.trim().slice(0, 2000),
    };

    console.log("[Contact] New submission:", sanitized);

    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      // SMTP integration would go here
      // Not implemented - requires SMTP credentials via env
    }

    return NextResponse.json({
      success: true,
      message: "تم استلام طلبك بنجاح، وسنتواصل معك قريباً.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "تعذر إرسال الطلب حالياً، يمكنك المحاولة مرة أخرى أو التواصل معنا عبر واتساب." },
      { status: 500 }
    );
  }
}
