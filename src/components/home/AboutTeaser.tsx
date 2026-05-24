import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutTeaser() {
  return (
    <section id="about" className="section-padding overflow-hidden bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">
              من نحن
            </span>
            <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">
              بصمات إبداعية تجعل مشروعك مميزاً عن الآخرين
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-muted">
              بروميننت اكسبيرتس تساعد الشركات على بناء حضور رقمي قوي من خلال استراتيجيات مبتكرة
              تجمع بين التصميم الإبداعي والتقنية المتطورة، لنقدم لعملائنا تجربة رقمية متكاملة
              تلبي طموحاتهم وتحقق أهدافهم.
            </p>
            <div className="mt-8">
              <CTAButton href="#contact">
                تواصل معنا
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white p-1 shadow-brand-card-hover">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-primary/10">
                    <svg className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-text">مكتب بروميننت اكسبيرتس</h3>
                  <p className="mt-2 text-sm text-brand-muted">المملكة العربية السعودية</p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["تصميم", "تطوير", "تسويق"].map((label) => (
                      <div key={label} className="rounded-lg bg-[#F4F0FF] px-3 py-2 text-xs font-semibold text-brand-primary">
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
