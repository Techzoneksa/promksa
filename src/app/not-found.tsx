import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F4F0FF] via-white to-white">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-[#F4F0FF]">
            <SearchX className="h-12 w-12 text-brand-primary" />
          </div>
          <h1 className="text-5xl font-bold text-brand-text sm:text-6xl">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-brand-text">الصفحة غير موجودة</h2>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
            يبدو أن الصفحة التي تبحث عنها غير متاحة. قد تكون تم إزالتها أو الرابط غير صحيح.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-primary px-8 py-3 text-sm font-bold text-white transition duration-300 hover:shadow-apple-hover hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-4 w-4" /> العودة للرئيسية
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-[#f0edff] bg-white px-8 py-3 text-sm font-bold text-brand-text transition duration-300 hover:border-brand-primary/30 hover:bg-[#F4F0FF]"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
