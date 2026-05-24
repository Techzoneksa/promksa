import { Instagram, Linkedin, MessageCircle, Send, X } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/966595394940", icon: MessageCircle },
  { label: "Instagram", href: "#contact", icon: Instagram },
  { label: "LinkedIn", href: "#contact", icon: Linkedin },
  { label: "X", href: "#contact", icon: X },
];

export function ContactCTA() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-brand border border-brand-gold/20 bg-luxury-mesh px-5 py-12 shadow-gold-glow sm:px-10 lg:px-16 lg:py-16">
            <div className="dot-grid absolute inset-0 opacity-35" />
            <div className="arabic-geometry absolute left-0 top-0 h-full w-1/2 opacity-10" />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <span className="mb-5 inline-flex rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 text-xs font-bold text-brand-blue">
                ابدأ بخطوة واضحة
              </span>
              <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl">
                مشروعك القادم يبدأ هنا
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
                شاركنا فكرتك وسنحوّلها إلى خطة رقمية واضحة، تصميم فاخر، وتنفيذ يخدم نموك.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <CTAButton
                  href="https://wa.me/966595394940"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  تواصل واتساب
                </CTAButton>
                <CTAButton href="mailto:hello@promksa.com" variant="ghost" className="w-full sm:w-auto">
                  أرسل طلبك
                </CTAButton>
              </div>
              <div className="mt-8 flex justify-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-brand border border-white/10 bg-white/[0.045] text-brand-muted transition duration-300 hover:border-brand-gold/45 hover:text-brand-gold"
                    aria-label={label}
                  >
                    {label === "WhatsApp" ? (
                      <Send className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
