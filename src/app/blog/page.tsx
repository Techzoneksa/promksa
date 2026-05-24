import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/constants";

export const metadata: Metadata = {
  title: "المدونة | Prominent Experts",
  description: "مقالات ونصائح في التصميم، المتاجر، التطبيقات، والتسويق الرقمي.",
  openGraph: { title: "المدونة | Prominent Experts", description: "مقالات ونصائح رقمية." },
};

const categories = ["الكل", "تصميم المواقع", "المتاجر الإلكترونية", "التسويق الرقمي", "الهوية البصرية", "التطبيقات"];

export default function BlogPage() {
  return (
    <>
      <PageHero title="المدونة" subtitle="مقالات ونصائح في التصميم، المتاجر، التطبيقات، والتسويق الرقمي." />

      <section className="section-padding">
        <Container>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "الكل" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                  cat === "الكل"
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#f0edff] bg-white text-brand-muted hover:border-brand-primary/30 hover:text-brand-primary"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.04}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl border border-[#f0edff] bg-white shadow-brand-card transition hover:shadow-brand-card-hover">
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
