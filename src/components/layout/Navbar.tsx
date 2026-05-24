"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3">
      <Container>
        <nav
          className={cn(
            "flex h-16 items-center justify-between rounded-brand border px-3 transition duration-300 md:px-4",
            isScrolled || isOpen
              ? "border-[#f0edff] bg-white/90 shadow-brand-card backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
          aria-label="التنقل الرئيسي"
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Prominent Experts">
            <Image
              src="/prominent-logo.svg"
              alt="Prominent Experts"
              width={168}
              height={46}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-brand px-4 py-2 text-sm font-semibold text-brand-muted transition duration-300 hover:bg-[#F4F0FF] hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <CTAButton href="/contact" variant="primary" className="min-h-11 px-5 py-2.5">
              تواصل معنا
            </CTAButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-brand border border-[#f0edff] bg-white text-brand-muted transition duration-300 hover:border-brand-primary/30 hover:text-brand-primary lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden"
          >
            <Container className="pt-3">
              <div className="overflow-hidden rounded-brand border border-[#f0edff] bg-white p-3 shadow-brand-card">
                <div className="grid gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-brand px-4 py-3 text-sm font-bold text-brand-muted transition duration-300 hover:bg-[#F4F0FF] hover:text-brand-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <CTAButton
                  href="/contact"
                  variant="primary"
                  className="mt-3 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  تواصل معنا
                </CTAButton>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
