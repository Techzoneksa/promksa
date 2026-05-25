"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { number: "01", title: "تحليل الاحتياجات", desc: "ندرس مشروعك وجمهورك وأهدافك بدقة.", items: ["دراسة السوق", "تحليل المنافسين", "تحديد الأهداف"] },
  { number: "02", title: "التخطيط الاستراتيجي", desc: "نضع خطة عمل واضحة ومتكاملة.", items: ["هيكلة المشروع", "خريطة الطريق", "اختيار التقنيات"] },
  { number: "03", title: "التصميم الإبداعي", desc: "نصمم واجهات عصرية تلهم عملاءك.", items: ["Wireframes", "UI/UX Design", "الهوية البصرية"] },
  { number: "04", title: "التطوير والبرمجة", desc: "نبني حلولاً قوية بأحدث التقنيات.", items: ["تطوير Frontend", "تطوير Backend", "اختبار الجودة"] },
  { number: "05", title: "الإطلاق والتحسين", desc: "نطلق مشروعك ونحسّن أداءه باستمرار.", items: ["نشر المشروع", "متابعة الأداء", "تحسين مستمر"] },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section-padding bg-[#F7F8FC]">
      <Container>
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-4xl leading-tight text-brand-text sm:text-5xl">كيف نعمل</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-muted">منهجية واضحة وخطوات مدروسة لضمان أفضل النتائج</p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            {steps.map((step, i) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`group flex w-full items-center gap-4 rounded-2xl p-5 text-right transition-all duration-300 ${
                  activeStep === i
                    ? "bg-brand-primary text-white shadow-apple-hover"
                    : "bg-white text-brand-text hover:bg-[#F4F0FF] shadow-apple"
                }`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition ${
                  activeStep === i ? "bg-white/20 text-white" : "bg-[#F4F0FF] text-brand-primary"
                }`}>
                  {step.number}
                </span>
                <div className="text-right">
                  <h3 className="font-bold">{step.title}</h3>
                  <p className={`text-sm ${activeStep === i ? "text-white/80" : "text-brand-muted"}`}>{step.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-3xl bg-white p-8 shadow-apple"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7448F5] to-[#41C7D7] text-2xl font-bold text-white shadow-lg">
                  {steps[activeStep].number}
                </span>
                <h3 className="mt-6 text-2xl font-bold text-brand-text">{steps[activeStep].title}</h3>
                <p className="mt-3 text-brand-muted">{steps[activeStep].desc}</p>
                <div className="mt-6 space-y-3">
                  {steps[activeStep].items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-primary" />
                      <span className="font-semibold text-brand-text">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-primary px-8 py-3 text-sm font-bold text-white transition duration-300 hover:shadow-apple-hover hover:-translate-y-0.5"
            >
              ابدأ مشروعك معنا <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
