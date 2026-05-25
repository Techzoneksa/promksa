import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sendContactLeadEmail } from "@/lib/email/sendContactLeadEmail";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str: string, maxLen: number): string {
  return str.trim().replace(/<[^>]*>/g, "").slice(0, maxLen);
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
    if (!service || typeof service !== "string" || service.trim().length < 1) errors.push("الخدمة المطلوبة مطلوبة");
    if (!message || typeof message !== "string" || message.trim().length < 10) errors.push("الرسالة يجب أن تحتوي على 10 أحرف على الأقل");
    if (email && typeof email === "string" && email.length > 0 && !emailRegex.test(email)) errors.push("البريد الإلكتروني غير صحيح");

    if (errors.length > 0) {
      return NextResponse.json({ success: false, message: errors.join("، ") }, { status: 400 });
    }

    const data = {
      name: sanitize(name, 120),
      email: email ? sanitize(email, 200) : null,
      phone: sanitize(phone, 40),
      service: sanitize(service, 120),
      message: sanitize(message, 3000),
    };

    let leadId: string | undefined;
    const supabase = createServerSupabaseClient();

    if (supabase) {
      const { data: inserted, error } = await supabase
        .from("contact_leads")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          source: "website",
          ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || null,
          user_agent: request.headers.get("user-agent") || null,
        })
        .select("id")
        .single();

      if (error) {
        console.error("[Contact] Supabase insert error:", error.message);
      } else {
        leadId = inserted?.id;
        console.log("[Contact] Lead saved to DB:", leadId);
      }
    } else {
      console.log("[Contact] Supabase not configured, lead not stored in DB");
    }

    const emailSent = await sendContactLeadEmail({ ...data, leadId, email: data.email || "" });
    if (emailSent) {
      console.log("[Contact] Email sent successfully");
    }

    return NextResponse.json({
      success: true,
      message: "تم استلام طلبك بنجاح، وسنتواصل معك قريباً.",
      leadId: leadId || null,
    });
  } catch (err) {
    console.error("[Contact] Error:", err);
    return NextResponse.json(
      { success: false, message: "تعذر إرسال الطلب حالياً، يمكنك المحاولة مرة أخرى أو التواصل معنا عبر واتساب." },
      { status: 500 },
    );
  }
}
