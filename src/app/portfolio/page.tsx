"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Search, X } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { projects } from "@/lib/constants";

const filters = ["الكل", "مواقع", "متاجر", "تطبيقات", "هوية بصرية", "ذكاء اصطناعي"];

export default function PortfolioPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("الكل");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleSearch = useCallback((value: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setSearch(value), 200);
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      const matchCat = activeFilter === "الكل" || p.category === activeFilter;
      const matchSearch = !q || p.name.includes(q) || p.category.includes(q) || p.client.includes(q) || p.description.includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeFilter]);

  return (
    <>
      <PageHero title="أعمالنا" subtitle="نماذج من مشاريع ساعدنا فيها عملاءنا على الظهور بشكل احترافي." />

      <section className="section-padding">
        <Container>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => { setActiveFilter(f); setSearch(""); }}
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

            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
                <input
                  type="text"
                  onChange={(e) => handleSearch(e.target.value)}
                  defaultValue={search}
                placeholder="بحث في المشاريع..."
                className="w-full rounded-xl border border-[#f0edff] bg-white py-2.5 pr-10 pl-10 text-sm text-brand-text placeholder-brand-muted/60 transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              />
              {search ? (
                <button type="button" onClick={() => setSearch("")} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-text">
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl bg-white p-12 text-center shadow-apple">
              <Search className="mx-auto h-10 w-10 text-brand-muted/40" />
              <h3 className="mt-4 text-xl font-bold text-brand-text">لا توجد نتائج مطابقة</h3>
              <p className="mt-2 text-brand-muted">حاول تغيير كلمات البحث أو اختر تصنيفاً آخر.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block" style={{ animationDelay: `${i * 40}ms` }}>
                  <div className="overflow-hidden rounded-2xl border border-[#f0edff] bg-white shadow-apple transition hover:shadow-apple-hover">
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
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
