import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Bot, Headphones, Zap, BarChart3, FileText, BrainCircuit, Cable, Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aiSolutions } from "@/lib/constants";

export const metadata: Metadata = {
  title: "حلول الذكاء الاصطناعي | Prominent Experts",
  description: "خدمات الذكاء الاصطناعي: روبوتات محادثة، أتمتة، تحليل بيانات، توليد محتوى، وأنظمة توصية للمتاجر.",
  openGraph: { title: "حلول الذكاء الاصطناعي | Prominent Experts", description: "حلول AI عملية لتحسين أعمالك." },
};

const iconMap: Record<string, LucideIcon> = {
  Bot, Headphones, Zap, BarChart3, FileText, BrainCircuit, Cable, Sparkles,
};

const useCases = [
  { title: "المطاعم", desc: "أتمتة الطلبات، خدمة العملاء، وتحليل المبيعات.", icon: "UtensilsCrossed" },
  { title: "المتاجر", desc: "توصيات ذكية، تحليل سلوك، وخدمة عملاء آلية.", icon: "ShoppingBag" },
  { title: "العقار", desc: "استفسارات آلية، تحليل السوق، وتوليد تقارير.", icon: "Building2" },
  { title: "التعليم", desc: "تسجيل ذكي، متابعة الطلاب، وتقارير الأداء.", icon: "GraduationCap" },
  { title: "خدمة العملاء", desc: "دعم فوري، تصنيف ذكي، وتحليل رضا العملاء.", icon: "Headphones" },
  { title: "المبيعات", desc: "توقعات المبيعات، تحليل العملاء، وتوصيات.", icon: "TrendingUp" },
];

export default function AISolutionsPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-20 md:pt-36 md:pb-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#7448F5] via-[#3B82F6] to-[#41C7D7] px-4 py-2 text-xs font-bold text-white shadow-lg">
              AI Solutions
            </span>
            <h1 className="text-4xl leading-tight text-brand-text sm:text-5xl lg:text-6xl">
              خدمات <span className="text-gradient-ai">الذكاء الاصطناعي</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-brand-muted">
              حلول AI عملية تساعد شركتك على الأتمتة، التحليل، وخدمة العملاء بذكاء.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiSolutions.map((s, i) => {
              const Icon = iconMap[s.icon] || Sparkles;
              return (
                <Reveal key={s.slug} delay={i * 0.03}>
                  <Link href={`/ai-solutions/${s.slug}`} className="group block h-full">
                    <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-apple border border-[#f0edff] transition-all duration-500 hover:shadow-apple-ai hover:-translate-y-1 group-hover:border-brand-ai-blue/20">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7448F5] via-[#3B82F6] to-[#41C7D7] text-white shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-text">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-brand-muted">{s.shortDescription}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-ai-blue transition group-hover:gap-2">
                        تفاصيل الخدمة <ArrowLeft className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F8FC]">
        <Container>
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-brand-text sm:text-4xl">حالات الاستخدام</h2>
              <p className="mx-auto mt-4 max-w-2xl text-brand-muted">حلول AI تناسب مختلف القطاعات</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 0.04}>
                <div className="rounded-2xl bg-white p-6 shadow-apple border border-[#f0edff]">
                  <h3 className="text-lg font-bold text-brand-text">{uc.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-brand-text sm:text-4xl">كيف نطبق AI</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { step: "01", title: "تحليل العمليات" },
              { step: "02", title: "تحديد فرص الأتمتة" },
              { step: "03", title: "تصميم الحل" },
              { step: "04", title: "ربط البيانات والأنظمة" },
              { step: "05", title: "التدريب والاختبار" },
              { step: "06", title: "الإطلاق والتحسين" },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.04}>
                <div className="rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white p-6 text-center shadow-apple">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ai-gradient text-lg font-bold text-white shadow-lg">{p.step}</span>
                  <h3 className="mt-4 text-sm font-bold text-brand-text">{p.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F8FC]">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-ai-gradient p-10 text-center text-white shadow-soft-glow-ai sm:p-16">
              <h2 className="text-3xl font-bold sm:text-4xl">ابدأ مشروع AI</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/80">تواصل معنا اليوم للحصول على استشارة مجانية حول أفضل حلول الذكاء الاصطناعي لعملك.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-8 py-3 text-sm font-bold text-brand-primary transition hover:shadow-xl hover:-translate-y-0.5">تواصل معنا</Link>
                <Link href="https://wa.me/966595394940" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20 hover:-translate-y-0.5">واتساب</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
