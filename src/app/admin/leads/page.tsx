import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FileWarning } from "lucide-react";

export const metadata: Metadata = {
  title: "إدارة طلبات التواصل | Prominent Experts",
  robots: { index: false, follow: false },
};

export default function LeadsPage() {
  const token = process.env.ADMIN_LEADS_TOKEN;
  const hasAccess = token && token.length > 0;

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F4F0FF] via-white to-white">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
              <FileWarning className="h-10 w-10 text-red-400" />
            </div>
            <h1 className="text-3xl font-bold text-brand-text">غير مصرح بالوصول</h1>
            <p className="mt-3 text-brand-muted">لوحة التحكم غير نشطة حالياً. يلزم تفعيلها عبر متغيرات البيئة.</p>
            <p className="mt-6 rounded-2xl bg-[#F4F0FF] p-4 text-right text-sm leading-7 text-brand-muted">
              <strong className="text-brand-text">لتفعيل لوحة التحكم:</strong><br />
              1. أضف <code className="rounded bg-white px-2 py-0.5 font-mono text-brand-primary">ADMIN_LEADS_TOKEN</code> في ملف البيئة.<br />
              2. افتح <code className="rounded bg-white px-2 py-0.5 font-mono text-brand-primary">/admin/leads?token=YOUR_TOKEN</code><br />
              3. قم بتوصيل قاعدة بيانات لحفظ الطلبات.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="bg-white border-b border-[#f0edff]">
        <Container className="py-6">
          <h1 className="text-2xl font-bold text-brand-text">طلبات التواصل</h1>
          <p className="mt-1 text-brand-muted">لوحة عرض طلبات التواصل — يحتاج قاعدة بيانات للتخزين الفعلي</p>
        </Container>
      </div>

      <Container className="py-10">
        <div className="rounded-3xl bg-white p-8 shadow-apple text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4F0FF]">
            <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-brand-text">قاعدة البيانات غير متصلة</h2>
          <p className="mx-auto mt-3 max-w-lg text-brand-muted">
            لعرض طلبات التواصل بشكل فعلي، يلزم ربط قاعدة بيانات (مثل Supabase أو PostgreSQL).
            الواجهة جاهزة للعرض بعد التوصيل.
          </p>

          <div className="mt-8 rounded-2xl bg-[#F4F0FF] p-6 text-right">
            <h3 className="font-bold text-brand-text">البيانات المتوقعة:</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["الاسم", "الجوال", "البريد", "الخدمة", "الرسالة", "التاريخ", "الحالة"].map((field) => (
                <div key={field} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  <span className="text-brand-muted">{field}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-sm text-brand-muted">
            <p>بعد توصيل قاعدة البيانات، سيتم عرض الطلبات هنا مع إمكانية الفلترة والبحث والتحديث.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
