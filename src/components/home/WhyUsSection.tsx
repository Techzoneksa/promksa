import { CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { whyUs } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <section className="section-padding bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionTitle
            align="start"
            eyebrow="لماذا نحن"
            title="لماذا بروميننت اكسبيرتس؟"
            description="لأننا لا نقدم خدمة فقط، بل نبني تجربة رقمية متكاملة تساعد مشروعك على النمو."
            className="mb-0"
          />
          <div className="mt-8 space-y-4">
            {whyUs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" aria-hidden="true" />
                <span className="font-semibold text-brand-text">{item}</span>
              </div>
            ))}
          </div>
          <CTAButton href="#contact" className="mt-8">
            تواصل معنا
          </CTAButton>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white p-8 shadow-brand-card">
            <div className="grid gap-4">
              {[
                { value: "+15", label: "سنة خبرة" },
                { value: "+376", label: "مشروع ناجح" },
                { value: "+129", label: "عميل" },
                { value: "4.7", label: "تقييم" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-brand-card">
                  <span className="text-2xl font-bold text-brand-primary">{stat.value}</span>
                  <span className="font-semibold text-brand-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
