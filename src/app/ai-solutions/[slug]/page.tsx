import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle, Bot, Headphones, Zap, BarChart3, FileText, BrainCircuit, Cable, Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { aiSolutions } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Bot, Headphones, Zap, BarChart3, FileText, BrainCircuit, Cable, Sparkles,
};

export function generateStaticParams() {
  return aiSolutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = aiSolutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | Prominent Experts AI`,
    description: solution.shortDescription,
    openGraph: { title: `${solution.title} | Prominent Experts AI`, description: solution.shortDescription },
  };
}

export default async function AIDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = aiSolutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const Icon = iconMap[solution.icon] || Sparkles;
  const related = solution.relatedSolutions.map((rs) => aiSolutions.find((s) => s.slug === rs)).filter(Boolean);

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "حلول الذكاء الاصطناعي", href: "/ai-solutions" }, { label: solution.title }]} />
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-ai-gradient text-white shadow-soft-glow-ai">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="text-4xl leading-tight text-brand-text sm:text-5xl">{solution.title}</h1>
            <p className="mt-5 text-lg leading-8 text-brand-muted">{solution.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-3 text-sm font-bold text-white transition hover:shadow-apple-hover hover:-translate-y-0.5">تواصل معنا</Link>
              <Link href="https://wa.me/966595394940" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-ai-gradient px-6 py-3 text-sm font-bold text-white shadow-soft-glow-ai transition hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" /> واتساب</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold text-brand-text">المميزات</h2>
              <div className="mt-6 space-y-4">
                {solution.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                    <span className="font-semibold text-brand-text">{f}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold text-brand-text">حالات الاستخدام</h2>
              <div className="mt-6 space-y-4">
                {solution.useCases.map((uc) => (
                  <div key={uc.title} className="rounded-2xl bg-[#F4F0FF] p-5">
                    <h3 className="font-bold text-brand-text">{uc.title}</h3>
                    <p className="mt-1 text-sm text-brand-muted">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F8FC]">
        <Container>
          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-bold text-brand-text">طريقة التنفيذ</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-5">
            {solution.process.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-2xl bg-white p-6 text-center shadow-apple">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ai-gradient text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-sm font-bold text-brand-text">{p.step}</h3>
                  <p className="mt-2 text-xs leading-5 text-brand-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {solution.requirements.length > 0 ? (
        <section className="section-padding bg-white">
          <Container>
            <Reveal>
              <h2 className="mb-6 text-center text-3xl font-bold text-brand-text">المتطلبات</h2>
              <div className="mx-auto grid max-w-2xl gap-3">
                {solution.requirements.map((r) => (
                  <div key={r} className="flex items-center gap-3 rounded-2xl bg-[#F4F0FF] p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary" />
                    <span className="font-semibold text-brand-text">{r}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="section-padding bg-[#F7F8FC]">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="mb-6 text-center text-3xl font-bold text-brand-text">الأسئلة الشائعة</h2>
          </Reveal>
          <FAQAccordion items={solution.faq} />
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="section-padding bg-white">
          <Container>
            <Reveal>
              <h2 className="mb-8 text-center text-3xl font-bold text-brand-text">حلول ذات صلة</h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((r, i) => r ? (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link href={`/ai-solutions/${r.slug}`} className="group block">
                    <div className="rounded-2xl bg-white p-6 shadow-apple border border-[#f0edff] transition hover:shadow-apple-ai">
                      <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-ai-blue">{r.title}</h3>
                      <p className="mt-2 text-sm text-brand-muted">{r.shortDescription}</p>
                    </div>
                  </Link>
                </Reveal>
              ) : null)}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section-padding bg-ai-gradient">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">جاهز لتطبيق حلول AI في مشروعك؟</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">تواصل معنا للحصول على استشارة مجانية</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-8 py-3 text-sm font-bold text-brand-primary transition hover:shadow-xl hover:-translate-y-0.5">تواصل معنا</Link>
            <Link href="https://wa.me/966595394940" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20 hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" /> واتساب</Link>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: solution.title,
            description: solution.description,
            provider: { "@type": "Organization", name: "Prominent Experts" },
          }),
        }}
      />
    </>
  );
}
