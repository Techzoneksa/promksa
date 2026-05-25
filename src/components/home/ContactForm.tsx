"use client";

import { useState } from "react";
import { CheckCircle2, Send, XCircle, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const serviceOptions = [
  "تصميم مواقع",
  "تصميم متاجر",
  "برمجة تطبيقات",
  "هوية بصرية",
  "تسويق رقمي",
  "ذكاء اصطناعي",
  "أخرى",
];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    _hp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setErrorMessage("");

    const { _hp, ...payload } = formData;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, _hp }),
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
      } else {
        setErrorMessage(data.message || "تعذر إرسال الطلب حالياً.");
        setState("error");
      }
    } catch {
      setErrorMessage("تعذر إرسال الطلب حالياً، يمكنك المحاولة مرة أخرى أو التواصل معنا عبر واتساب.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <section id="contact" className="section-padding bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-brand-text">تم استلام طلبك بنجاح</h2>
            <p className="mt-4 text-lg text-brand-muted">
              شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">تواصل</span>
              <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">خلّنا نناقش مشروعك</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-muted">املأ النموذج وسنعود إليك في أقرب وقت لمناقشة فكرة مشروعك.</p>
            </div>
          </Reveal>

          {state === "error" && (
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-red-50 p-4 text-red-700">
              <XCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-brand-text">الاسم</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="اسمك الكريم"
                    className="w-full rounded-xl border border-[#f0edff] bg-white px-4 py-3 text-brand-text placeholder-brand-muted/50 transition duration-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-brand-text">البريد الإلكتروني</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="بريدك الإلكتروني"
                    className="w-full rounded-xl border border-[#f0edff] bg-white px-4 py-3 text-brand-text placeholder-brand-muted/50 transition duration-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-brand-text">رقم الجوال</label>
                  <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="رقم جوالك"
                    className="w-full rounded-xl border border-[#f0edff] bg-white px-4 py-3 text-brand-text placeholder-brand-muted/50 transition duration-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-bold text-brand-text">الخدمة المطلوبة</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange}
                    className="w-full rounded-xl border border-[#f0edff] bg-white px-4 py-3 text-brand-text transition duration-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20">
                    <option value="">اختر الخدمة</option>
                    {serviceOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-brand-text">الرسالة</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="تفاصيل مشروعك"
                  className="w-full rounded-xl border border-[#f0edff] bg-white px-4 py-3 text-brand-text placeholder-brand-muted/50 transition duration-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
              </div>

              <div className="text-center">
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <label htmlFor="_hp">لا تملأ هذا الحقل</label>
                  <input id="_hp" name="_hp" type="text" value={formData._hp} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>
                <button type="submit" disabled={state === "loading"}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-primary px-8 py-3 text-sm font-bold text-white transition duration-300 hover:shadow-apple-hover hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {state === "loading" ? "جاري الإرسال..." : "إرسال"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
