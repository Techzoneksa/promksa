"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Cpu, BarChart3, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F4F0FF] via-white to-white pt-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-primary/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-48 h-80 w-80 rounded-full bg-brand-cyan/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-64 h-80 w-80 rounded-full bg-brand-ai-blue/5 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-16 pb-10 lg:grid-cols-2 lg:pb-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7448F5] via-[#3B82F6] to-[#41C7D7] px-4 py-2 text-xs font-bold text-white shadow-lg"
            >
              <Sparkles className="h-3.5 w-3.5" />
              بروميننت اكسبيرتس — حلول رقمية ذكية
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl leading-[1.15] text-brand-text sm:text-5xl lg:text-6xl"
            >
              نحوّل أفكارك إلى{" "}
              <span className="text-gradient-ai">حلول رقمية ذكية</span>
              {" "}تنمو معك
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className="mt-6 max-w-2xl text-lg leading-9 text-brand-muted sm:text-xl"
            >
              بروميننت اكسبيرتس شركة برمجية تبني مواقع، متاجر، تطبيقات، أنظمة،
              وحلول ذكاء اصطناعي تساعد مشروعك على النمو والمنافسة.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-brand-primary px-8 py-3.5 text-sm font-bold text-white transition duration-300 hover:shadow-apple-hover hover:-translate-y-0.5"
              >
                ابدأ مشروعك <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border-2 border-[#f0edff] bg-white px-8 py-3.5 text-sm font-bold text-brand-text transition duration-300 hover:border-brand-primary/30 hover:bg-[#F4F0FF] hover:-translate-y-0.5"
              >
                استعرض خدماتنا
              </Link>
              <Link
                href="/ai-solutions"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-ai-gradient px-8 py-3.5 text-sm font-bold text-white shadow-soft-glow-ai transition duration-300 hover:shadow-apple-ai hover:-translate-y-0.5"
              >
                <Cpu className="h-4 w-4" /> حلول AI
              </Link>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className="mt-10 flex items-center gap-6 text-sm text-brand-muted"
            >
              <span className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-brand-primary" /> 4.7 تقييم
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-brand-primary" /> +129 عميل
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-primary" /> +376 مشروع
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative mx-auto w-full max-w-[580px]"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -right-6 top-12 h-32 w-32 rounded-full bg-brand-primary/10 blur-3xl animate-float" />
      <div className="absolute -left-8 bottom-20 h-40 w-40 rounded-full bg-brand-cyan/10 blur-3xl animate-float-slow" />

      <div className="relative rounded-3xl bg-white shadow-luxe border border-[#f0edff] overflow-hidden">
        <div className="p-5">
          <div className="flex items-center justify-between border-b border-[#f0edff] pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="rounded-full bg-[#F4F0FF] px-3 py-1 text-xs font-bold text-brand-primary">Live Dashboard</span>
          </div>

          <div className="grid gap-4 pt-5 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-muted">المبيعات</p>
                  <p className="mt-1 font-mono text-2xl font-bold text-brand-text">+38%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="mt-4 flex h-32 items-end gap-2">
                {[35, 58, 42, 78, 64, 92, 74].map((h, i) => (
                  <span key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-brand-primary to-brand-cyan" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-brand-primary/5 to-white p-4">
                <div className="flex items-center justify-between">
                  <Cpu className="h-5 w-5 text-brand-primary" />
                  <span className="font-mono text-lg font-bold text-brand-text">96%</span>
                </div>
                <p className="mt-2 text-xs text-brand-muted">دقة الذكاء الاصطناعي</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-brand-cyan/5 to-white p-4">
                <div className="flex items-center justify-between">
                  <MessageCircle className="h-5 w-5 text-brand-cyan" />
                  <span className="font-mono text-lg font-bold text-brand-text">24/7</span>
                </div>
                <p className="mt-2 text-xs text-brand-muted">دعم عملاء آلي</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["مواقع", "متاجر", "AI"].map((item) => (
              <div key={item} className="rounded-2xl bg-white border border-[#f0edff] p-3">
                <Sparkles className={`h-4 w-4 ${item === "AI" ? "text-brand-ai-blue" : "text-brand-primary"}`} />
                <span className="mt-2 block text-xs font-bold text-brand-muted">{item === "AI" ? "حلول ذكية" : item}</span>
                <span className="mt-2 block h-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-cyan/20" />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-4 hidden w-44 rounded-2xl border border-brand-cyan/20 bg-white/95 p-4 shadow-apple backdrop-blur-xl sm:block"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-brand-muted">ردود آلية</span>
            <MessageCircle className="h-4 w-4 text-brand-cyan" />
          </div>
          <p className="mt-2 font-mono text-xl font-bold text-brand-text">1,284</p>
          <p className="text-xs text-brand-muted">محادثة اليوم</p>
        </motion.div>
      </div>
    </div>
  );
}
