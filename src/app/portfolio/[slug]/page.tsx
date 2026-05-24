import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { projects } from "@/lib/constants";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Prominent Experts`,
    description: project.description,
    openGraph: { title: `${project.name} | Prominent Experts`, description: project.description },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "أعمالنا", href: "/portfolio" }, { label: project.name }]} />
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">{project.category}</span>
            <h1 className="text-4xl leading-tight text-brand-text sm:text-5xl">{project.name}</h1>
            <p className="mt-5 text-lg leading-8 text-brand-muted">{project.description}</p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="mx-auto mb-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-primary/10">
                  <svg className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-brand-muted">صورة المشروع</p>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "العميل", value: project.client },
              { label: "المجال", value: project.field },
              { label: "الخدمة", value: project.service },
              { label: "السنة", value: project.year },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-[#f0edff] bg-white p-4 text-center shadow-brand-card">
                <p className="text-xs font-bold text-brand-primary">{item.label}</p>
                <p className="mt-1 font-semibold text-brand-text">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F8FC]">
        <Container className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-brand-text">التحدي</h2>
              <p className="mt-4 leading-8 text-brand-muted">{project.challenge}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-bold text-brand-text">الحل</h2>
              <p className="mt-4 leading-8 text-brand-muted">{project.solution}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-brand-text">النتائج</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {project.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-brand-card">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-cyan" />
                    <span className="text-sm font-semibold text-brand-text">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="section-padding bg-white">
          <Container>
            <Reveal>
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-brand-text">مشاريع مشابهة</h2>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link href={`/portfolio/${r.slug}`} className="group block">
                    <div className="rounded-2xl border border-[#f0edff] bg-white p-5 shadow-brand-card transition hover:shadow-brand-card-hover">
                      <span className="text-xs font-bold text-brand-primary">{r.category}</span>
                      <h3 className="mt-2 text-lg font-bold text-brand-text">{r.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-brand-muted line-clamp-2">{r.description}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="section-padding bg-[#F7F8FC]">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-brand-text">اطلب مشروع مشابه</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-muted">نحن هنا لمساعدتك في بناء مشروعك الرقمي</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/contact">تواصل معنا</CTAButton>
              <CTAButton href="https://wa.me/966595394940" target="_blank" rel="noreferrer" variant="cyan">
                <MessageCircle className="h-4 w-4" /> واتساب
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
