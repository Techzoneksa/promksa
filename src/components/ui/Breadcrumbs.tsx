import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="مسار الصفحة" className={cn("mb-6", className)}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-muted">
        <li>
          <Link href="/" className="transition hover:text-brand-primary">الرئيسية</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="transition hover:text-brand-primary">{item.label}</Link>
            ) : (
              <span className="text-brand-text font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
