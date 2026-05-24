import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTAButton } from "@/components/ui/CTAButton";
import { blogPosts } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Prominent Experts`,
    description: post.description,
    openGraph: { title: `${post.title} | Prominent Experts`, description: post.description },
  };
}

function formatContent(content: string) {
  return content.split("\n\n").map((paragraph, i) => {
    if (paragraph.startsWith("## ")) {
      return <h2 key={i} className="mb-4 mt-10 text-2xl font-bold text-brand-text">{paragraph.replace("## ", "")}</h2>;
    }
    if (paragraph.startsWith("- ")) {
      const items = paragraph.split("\n").filter(Boolean);
      return (
        <ul key={i} className="mb-6 list-disc pr-5 space-y-2 text-brand-muted">
          {items.map((item, j) => (
            <li key={j}>{item.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    if (paragraph.startsWith("##")) return null;
    return <p key={i} className="mb-5 leading-8 text-brand-muted">{paragraph}</p>;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="bg-hero-gradient pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "المدونة", href: "/blog" }, { label: post.title }]} />
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-brand-muted">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
              <span className="rounded-full bg-[#F4F0FF] px-3 py-1 text-xs font-semibold text-brand-primary">{post.category}</span>
            </div>
            <h1 className="mt-4 text-4xl leading-tight text-brand-text sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-brand-muted">{post.description}</p>
          </div>
        </Container>
      </section>

      <article className="section-padding bg-white">
        <Container className="mx-auto max-w-3xl">
          <div className="aspect-[16/9] mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white">
            <div className="flex h-full items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-primary/10">
                <svg className="h-10 w-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#F4F0FF] to-white p-8 text-center">
            <h2 className="text-2xl font-bold text-brand-text">تحتاج موقع أو متجر احترافي؟</h2>
            <p className="mt-3 text-brand-muted">تواصل معنا الآن واستفد من استشارة مجانية</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/contact">تواصل معنا</CTAButton>
              <CTAButton href="https://wa.me/966595394940" target="_blank" rel="noreferrer" variant="cyan">
                واتساب
              </CTAButton>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <section className="section-padding bg-[#F7F8FC]">
          <Container>
            <h2 className="mb-8 text-3xl font-bold text-brand-text text-center">مقالات ذات صلة</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <div className="rounded-2xl border border-[#f0edff] bg-white p-6 shadow-brand-card transition hover:shadow-brand-card-hover">
                    <div className="flex items-center gap-2 text-xs text-brand-muted">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{r.date}</span>
                      <span className="mr-2 rounded-full bg-[#F4F0FF] px-2 py-0.5 text-xs font-semibold text-brand-primary">{r.category}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-brand-text transition group-hover:text-brand-primary">{r.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-brand-muted">{r.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
