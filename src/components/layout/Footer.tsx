import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services, aiSolutions } from "@/lib/constants";

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "خدماتنا", href: "/services" },
  { label: "الذكاء الاصطناعي", href: "/ai-solutions" },
  { label: "أعمالنا", href: "/portfolio" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل معنا", href: "/contact" },
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/966595394940", icon: MessageCircle },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "X", href: "#", icon: X },
];

export function Footer() {
  return (
    <footer className="bg-[#2B145F]">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image src="/prominent-logo.svg" alt="Prominent Experts" width={190} height={52} className="h-11 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm leading-8 text-white/70">
              وكالة تصميم وتسويق رقمي في السعودية، نصنع حضوراً رقمياً يربط الجمال بالنتائج.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition duration-300 hover:bg-[#41C7D7] hover:text-white" aria-label={label}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">الخدمات</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition duration-300 hover:text-[#41C7D7]">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">الذكاء الاصطناعي</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {aiSolutions.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/ai-solutions/${s.slug}`} className="transition duration-300 hover:text-[#41C7D7]">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">روابط مهمة</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition duration-300 hover:text-[#41C7D7]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">التواصل</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#41C7D7]" aria-hidden="true" />
                <a href="tel:+966595394940" className="transition duration-300 hover:text-[#41C7D7]">+966 59 539 4940</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#41C7D7]" aria-hidden="true" />
                <a href="mailto:hello@promksa.com" className="transition duration-300 hover:text-[#41C7D7]">hello@promksa.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#41C7D7]" aria-hidden="true" />
                <span>المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-[#41C7D7] py-4">
        <Container>
          <div className="flex flex-col items-center justify-between gap-2 text-center text-sm font-semibold text-[#2B145F] md:flex-row">
            <p>© {new Date().getFullYear()} Prominent Experts. جميع الحقوق محفوظة.</p>
            <p>promksa.com</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
