import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { StatCounter } from "@/components/ui/StatCounter";
import { aboutStats, values } from "@/lib/constants";

export const metadata: Metadata = {
  title: "من نحن | Prominent Experts",
  description: "بروميننت اكسبيرتس وكالة رقمية تساعد العلامات التجارية على بناء حضور رقمي احترافي في السعودية.",
  openGraph: { title: "من نحن | Prominent Experts", description: "بروميننت اكسبيرتس وكالة رقمية في السعودية." },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="من نحن" subtitle="بروميننت اكسبيرتس وكالة رقمية تساعد العلامات التجارية على بناء حضور رقمي احترافي." />

      <section className="section-padding bg-white">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">قصتنا</span>
            <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">نصنع تجارب رقمية تليق بطموحك</h2>
            <p className="mt-6 text-base leading-8 text-brand-muted sm:text-lg">
              بروميننت اكسبيرتس وكالة رقمية سعودية متخصصة في تصميم وتطوير المواقع والمتاجر الإلكترونية والتطبيقات.
              نعمل بشغف لنقدم لعملائنا حلولاً رقمية مبتكرة تجمع بين الإبداع والتقنية،
              ونساعدهم على بناء حضور رقمي قوي يحقق أهدافهم ويتجاوز توقعاتهم.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F8FC]">
        <Container className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-[#f0edff] bg-white p-8 shadow-brand-card">
              <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">رؤيتنا</span>
              <h3 className="text-2xl font-bold text-brand-text">نكون الشريك الرقمي الأول</h3>
              <p className="mt-4 leading-8 text-brand-muted">نطمح أن نكون الخيار الأول للعلامات التجارية الطموحة في السعودية، ونصنع تأثيراً رقمياً حقيقياً ينعكس على نمو أعمالهم.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[#f0edff] bg-white p-8 shadow-brand-card">
              <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">رسالتنا</span>
              <h3 className="text-2xl font-bold text-brand-text">نحوّل الأفكار إلى واقع رقمي</h3>
              <p className="mt-4 leading-8 text-brand-muted">نقدم حلولاً رقمية مبتكرة تجمع بين الإبداع والتقنية، لنساعد عملاءنا على بناء حضور قوي والنمو في السوق.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <Reveal>
            <div className="mb-10 text-center">
              <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">قيمنا</span>
              <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">ما يميزنا</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-[#f0edff] bg-white p-6 shadow-brand-card text-center transition hover:shadow-brand-card-hover">
                  <h3 className="text-xl font-bold text-brand-primary">{v.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F7F8FC]">
        <Container>
          <Reveal>
            <div className="mb-10 text-center">
              <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">بروميننت في أرقام</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {aboutStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="rounded-2xl bg-white p-6 text-center shadow-brand-card">
                  <StatCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  <p className="mt-2 text-sm font-semibold text-brand-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">ابدأ مشروعك مع بروميننت</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-muted">نحن هنا لمساعدتك في بناء حضورك الرقمي، تواصل معنا اليوم.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/contact">تواصل معنا</CTAButton>
              <CTAButton href="/services" variant="outline">استعرض خدماتنا</CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
