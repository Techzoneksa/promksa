import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/home/ContactForm";
import { MessageCircle, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "تواصل معنا | Prominent Experts",
  description: "تواصل مع بروميننت اكسبيرتس لمناقشة مشروعك والحصول على استشارة مجانية.",
  openGraph: { title: "تواصل معنا | Prominent Experts", description: "تواصل معنا لمناقشة مشروعك." },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="تواصل معنا" subtitle="خلّنا نناقش مشروعك ونقترح عليك الحل الأنسب." />

      <ContactForm />

      <section className="section-padding bg-[#F7F8FC]">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#f0edff] bg-white p-6 text-center shadow-brand-card">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F0FF]">
                <MessageCircle className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-brand-text">واتساب</h3>
              <a href="https://wa.me/966595394940" target="_blank" rel="noreferrer" className="mt-2 block text-brand-primary transition hover:text-brand-cyan">+966 59 539 4940</a>
            </div>
            <div className="rounded-2xl border border-[#f0edff] bg-white p-6 text-center shadow-brand-card">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F0FF]">
                <MapPin className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-brand-text">الموقع</h3>
              <p className="mt-2 text-brand-muted">جدة، المملكة العربية السعودية</p>
            </div>
            <div className="rounded-2xl border border-[#f0edff] bg-white p-6 text-center shadow-brand-card">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F0FF]">
                <Clock className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-brand-text">ساعات العمل</h3>
              <p className="mt-2 text-brand-muted">السبت - الخميس</p>
              <p className="text-brand-muted">9 صباحاً - 6 مساءً</p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white p-1">
            <div className="flex aspect-[21/9] items-center justify-center rounded-2xl bg-white">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-brand-primary/40" />
                <p className="mt-3 font-semibold text-brand-muted">جدة، المملكة العربية السعودية</p>
                <p className="text-sm text-brand-muted/60">خريطة الموقع</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
