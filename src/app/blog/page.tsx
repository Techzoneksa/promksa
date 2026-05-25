"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Search, X } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/lib/constants";

const categories = ["الكل", "تصميم المواقع", "المتاجر الإلكترونية", "التسويق الرقمي", "الهوية البصرية", "التطبيقات", "ذكاء اصطناعي"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("الكل");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const matchCat = activeCat === "الكل" || p.category === activeCat;
      const matchSearch = !q || p.title.includes(q) || p.category.includes(q) || p.description.includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCat]);

  return (
    <>
      <PageHero title="المدونة" subtitle="مقالات ونصائح في التصميم، المتاجر، التطبيقات، والتسويق الرقمي." />

      <section className="section-padding">
        <Container>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => { setActiveCat(cat); setSearch(""); }}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                    activeCat === cat
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-[#f0edff] bg-white text-brand-muted hover:border-brand-primary/30 hover:text-brand-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="بحث في المقالات..."
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
              {filtered.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block" style={{ animationDelay: `${i * 40}ms` }}>
                  <div className="overflow-hidden rounded-2xl border border-[#f0edff] bg-white shadow-apple transition hover:shadow-apple-hover">
                    <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[#F4F0FF] to-white">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary/10">
                        <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-brand-muted">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                        <span className="mr-2 rounded-full bg-[#F4F0FF] px-2 py-0.5 text-xs font-semibold text-brand-primary">{post.category}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-7 text-brand-text transition group-hover:text-brand-primary">{post.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-brand-muted line-clamp-2">{post.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-primary transition group-hover:gap-2">
                        قراءة المزيد <ArrowLeft className="h-4 w-4" />
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
