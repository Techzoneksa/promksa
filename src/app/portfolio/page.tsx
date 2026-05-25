"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/constants";

const filters = ["الكل", "مواقع", "متاجر", "تطبيقات", "هوية بصرية", "ذكاء اصطناعي"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const filtered = activeFilter === "الكل" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <PageHero title="أعمالنا" subtitle="نماذج من مشاريع ساعدنا فيها عملاءنا على الظهور بشكل احترافي." />

      <section className="section-padding">
        <Container>
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                  activeFilter === f
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#f0edff] bg-white text-brand-muted hover:border-brand-primary/30 hover:text-brand-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <Link href={`/portfolio/${p.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl border border-[#f0edff] bg-white shadow-brand-card transition hover:shadow-brand-card-hover">
                    <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#F4F0FF] to-white">
                      <div className="text-center">
                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary/10">
                          <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-brand-muted">معاينة المشروع</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-bold text-brand-primary">{p.category}</span>
                      <h3 className="mt-2 text-lg font-bold text-brand-text">{p.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-brand-muted line-clamp-2">{p.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-primary transition group-hover:gap-2">
                        عرض التفاصيل <ArrowLeft className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
