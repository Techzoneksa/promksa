import { MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white p-8 text-center shadow-brand-card sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-cyan/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">
                طموحك الرقمي يبدأ من هنا مع بروميننت اكسبيرتس، مشروعك يستحق المنافسة.
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CTAButton href="#contact">
                  تواصل معنا
                </CTAButton>
                <CTAButton
                  href="https://wa.me/966595394940"
                  target="_blank"
                  rel="noreferrer"
                  variant="cyan"
                >
                  <MessageCircle className="h-4 w-4" />
                  واتساب
                </CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
