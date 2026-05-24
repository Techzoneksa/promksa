import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle, MonitorSmartphone, ShoppingBag, Smartphone, Sparkles, Megaphone, Workflow, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { services } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone, ShoppingBag, Smartphone, Sparkles, Megaphone, Workflow,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Prominent Experts`,
    description: service.description,
    openGraph: { title: `${service.title} | Prominent Experts`, description: service.description },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "خدماتنا", href: "/services" }, { label: service.title }]} />
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">{service.number}</span>
            <h1 className="text-4xl leading-tight text-brand-text sm:text-5xl">{service.title}</h1>
            <p className="mt-5 text-lg leading-8 text-brand-muted">{service.longDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="https://wa.me/966595394940" target="_blank" rel="noreferrer" variant="cyan">
                <MessageCircle className="h-4 w-4" /> تواصل واتساب
              </CTAButton>
              <CTAButton href="/contact" variant="outline">أرسل طلبك</CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-primary/10">
                <Icon className="h-10 w-10 text-brand-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-brand-text">ماذا نقدم؟</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                    <span className="text-sm leading-7 text-brand-text">{f}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-[#F4F0FF] p-8">
                <h3 className="text-xl font-bold text-brand-text">مراحل تنفيذ الخدمة</h3>
                <div className="mt-6 space-y-5">
                  {service.process.map((p, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-sm font-bold text-white">{i + 1}</span>
                      <div>
                        <h4 className="font-bold text-brand-text">{p.step}</h4>
                        <p className="text-sm text-brand-muted">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F8FC]">
        <Container>
          <Reveal>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-brand-text">مخرجات الخدمة</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.outputs.map((o, i) => (
              <Reveal key={o} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-[#f0edff] bg-white p-4 shadow-brand-card">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-cyan" />
                  <span className="text-sm font-semibold text-brand-text">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <Reveal>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-brand-text">باقات الخدمة</h2>
              <p className="mt-2 text-brand-muted">أسعار تقريبية، التسعير النهائي حسب متطلبات مشروعك</p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {service.packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.06}>
                <div className={`rounded-2xl border p-8 shadow-brand-card ${
                  i === 1 ? "border-brand-primary bg-white" : "border-[#f0edff] bg-white"
                }`}>
                  <h3 className="text-xl font-bold text-brand-text">{pkg.name}</h3>
                  <p className="mt-3 text-2xl font-bold text-brand-primary">{pkg.price}</p>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-brand-muted">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <CTAButton href="/contact" variant={i === 1 ? "primary" : "outline"} className="mt-6 w-full justify-center">
                    اطلب الخدمة
                  </CTAButton>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F8FC]">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-brand-text">الأسئلة الشائعة</h2>
            </div>
          </Reveal>
          <FAQAccordion items={service.faq} />
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-brand-text">جاهز لبدء مشروعك؟</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-muted">تواصل معنا الآن وسنقدم لك استشارة مجانية</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/contact">تواصل معنا</CTAButton>
              <CTAButton href="https://wa.me/966595394940" target="_blank" rel="noreferrer" variant="cyan">
                <MessageCircle className="h-4 w-4" /> واتساب
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@type": "Organization", name: "Prominent Experts" },
          }),
        }}
      />
    </>
  );
}
