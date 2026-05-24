"use client";

import { ArrowLeft, Megaphone, MonitorSmartphone, ShoppingBag, Smartphone, Sparkles, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

const icons: Record<string, LucideIcon> = {
  MonitorSmartphone,
  ShoppingBag,
  Smartphone,
  Megaphone,
  Sparkles,
  Workflow,
};

export function ServiceCard({ number, title, description, icon }: ServiceCardProps) {
  const Icon = icons[icon] ?? Sparkles;

  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.28, ease: "easeOut" }}>
      <div className="group relative h-full overflow-hidden rounded-2xl bg-brand-primary p-8 text-white transition duration-300 hover:shadow-brand-card-hover">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-3xl font-bold text-white/20">{number}</span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
          <h3 className="text-xl font-bold leading-8">{title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-white/80">{description}</p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white/70 transition duration-300 hover:text-white"
          >
            اطلب الخدمة
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
