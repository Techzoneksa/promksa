"use client";

import Link from "next/link";
import { ArrowLeft, Bot, Headphones, Zap, BarChart3, FileText, BrainCircuit, Cable, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aiSolutions } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Bot, Headphones, Zap, BarChart3, FileText, BrainCircuit, Cable, Sparkles,
};

export function AISolutionsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F4F0FF] via-white to-white" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-ai-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-cyan/5 blur-3xl" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#7448F5] via-[#3B82F6] to-[#41C7D7] px-4 py-2 text-xs font-bold text-white shadow-lg">
              الذكاء الاصطناعي
            </span>
            <h2 className="text-4xl leading-tight text-brand-text sm:text-5xl">
              خدمات <span className="text-gradient-ai">الذكاء الاصطناعي</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-brand-muted">
              نساعد الشركات على استخدام الذكاء الاصطناعي لتحسين خدمة العملاء، أتمتة المهام،
              تحليل البيانات، وزيادة الإنتاجية.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aiSolutions.slice(0, 8).map((solution, i) => {
            const Icon = iconMap[solution.icon] || Sparkles;
            return (
              <Reveal key={solution.slug} delay={i * 0.03}>
                <Link href={`/ai-solutions/${solution.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative flex h-full flex-col rounded-3xl bg-white/80 p-6 backdrop-blur-xl border border-white/40 shadow-apple transition-all duration-500 hover:shadow-apple-ai group-hover:border-brand-ai-blue/20"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7448F5] via-[#3B82F6] to-[#41C7D7] text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-text">{solution.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-brand-muted">{solution.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-ai-blue transition group-hover:gap-2">
                      استكشف <ArrowLeft className="h-3.5 w-3.5" />
                    </span>
                  </motion.div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/ai-solutions"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-ai-gradient px-8 py-3 text-sm font-bold text-white shadow-soft-glow-ai transition duration-500 hover:shadow-apple-ai hover:-translate-y-0.5"
            >
              استكشف كل حلول الذكاء الاصطناعي <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
