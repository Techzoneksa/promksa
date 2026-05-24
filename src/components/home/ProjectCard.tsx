"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  name: string;
  category: string;
};

export function ProjectCard({ name, category }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-[#f0edff] bg-white shadow-brand-card transition duration-300 hover:shadow-brand-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F4F0FF] to-white p-5">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary/10">
              <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-brand-muted">معاينة المشروع</p>
          </div>
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-brand-primary/80 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-primary transition hover:bg-[#F4F0FF]"
          >
            عرض المشروع
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="p-5">
        <span className="text-xs font-bold text-brand-primary">{category}</span>
        <h3 className="mt-2 text-lg font-bold text-brand-text">{name}</h3>
      </div>
    </motion.article>
  );
}
