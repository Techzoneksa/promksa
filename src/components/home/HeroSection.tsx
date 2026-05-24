"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-hero-gradient pt-28">
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-brand-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl" />

      <Container className="relative z-10 grid min-h-[calc(90vh-7rem)] items-center gap-10 pb-10 lg:grid-cols-2 lg:pb-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary"
          >
            Prominent Experts — promksa.com
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl leading-[1.3] text-brand-text sm:text-5xl lg:text-6xl"
          >
            منصة تجمع كل{" "}
            <span className="text-brand-primary">احتياجاتك الرقمية</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-2xl text-lg leading-9 text-brand-muted sm:text-xl"
          >
            وكالة تصميم وتسويق رقمي في السعودية، نساعدك في بناء مواقع ومتاجر وتطبيقات وهوية رقمية تليق بطموح مشروعك.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton href="#contact">
              تواصل معنا
            </CTAButton>
            <CTAButton href="#portfolio" variant="outline">
              شاهد أعمالنا
            </CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="relative mx-auto w-full max-w-[500px]"
        >
          <HeroImage />
        </motion.div>
      </Container>
    </section>
  );
}

function HeroImage() {
  return (
    <div className="relative">
      <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-brand-primary/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-brand-cyan/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-brand-card-hover">
        <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-[#F4F0FF] via-white to-[#E8F8FA]">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-brand-primary/10">
                <svg className="h-12 w-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-text">خبير رقمي</h3>
              <p className="mt-2 text-sm text-brand-muted">فريق بروميننت اكسبيرتس</p>
              <div className="mt-6 flex justify-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#F4F0FF] text-xs font-bold text-brand-primary">
                      {["أ", "م", "س"][i - 1]}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-xs font-semibold text-brand-primary">
                <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
                متاحون للتواصل الآن
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-primary/5 to-transparent" />
        </div>

        <div className="flex items-center justify-between border-t border-[#f0edff] bg-white px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-brand-muted">4.7</span>
          </div>
          <span className="text-sm text-brand-muted">+129 عميل</span>
        </div>
      </div>
    </div>
  );
}
