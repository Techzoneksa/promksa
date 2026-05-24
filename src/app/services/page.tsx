import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MonitorSmartphone, ShoppingBag, Smartphone, Sparkles, Megaphone, Workflow, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/lib/constants";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "خدماتنا | Prominent Experts",
  description: "خدمات رقمية متكاملة: تصميم مواقع، متاجر إلكترونية، تطبيقات جوال، هوية بصرية، تسويق رقمي، وربط وتكامل.",
  openGraph: { title: "خدماتنا | Prominent Experts", description: "خدمات رقمية متكاملة لتنمية أعمالك." },
};

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone, ShoppingBag, Smartphone, Sparkles, Megaphone, Workflow,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="خدماتنا الرقمية" subtitle="حلول متكاملة لتصميم وتطوير وتسويق مشروعك." />

      <section className="section-padding">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Sparkles;
              return (
                <Reveal key={s.slug} delay={i * 0.04}>
                  <Link href={`/services/${s.slug}`} className="group block h-full">
                    <div className="flex h-full flex-col rounded-2xl bg-brand-primary p-8 text-white transition duration-300 hover:shadow-brand-card-hover hover:-translate-y-1">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="text-3xl font-bold text-white/20">{s.number}</span>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition group-hover:scale-110 group-hover:bg-white/20">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{s.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-white/80">{s.description}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/70 transition group-hover:text-white">
                        تفاصيل الخدمة <ArrowLeft className="h-4 w-4" />
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
            <div className="mb-10 text-center">
              <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">خطوات العمل</span>
              <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">كيف نعمل</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-brand-muted">نسير وفق منهجية واضحة لضمان أفضل النتائج</p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.06}>
                <div className="rounded-2xl border border-[#f0edff] bg-white p-6 text-center shadow-brand-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-lg font-bold text-white">{step.number}</span>
                  <h3 className="mt-4 text-lg font-bold text-brand-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">اختر الخدمة المناسبة لمشروعك</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-muted">نقدم حلولاً مرنة تناسب مختلف الأحجام والميزانيات</p>
            <div className="mt-8">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-primary px-8 py-3 text-sm font-bold text-white transition hover:bg-brand-primary/90 hover:shadow-brand-card-hover">تواصل معنا</a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
