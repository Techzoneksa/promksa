import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "cyan";
  showIcon?: boolean;
};

const variants = {
  primary:
    "bg-brand-primary text-white shadow-brand-card hover:bg-brand-primary/90 hover:shadow-brand-card-hover hover:-translate-y-0.5",
  outline:
    "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-brand-primary hover:bg-[#F4F0FF] hover:-translate-y-0.5",
  cyan:
    "bg-brand-cyan text-white shadow-brand-cyan hover:bg-brand-cyan/90 hover:-translate-y-0.5",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  showIcon = true,
  ...props
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-brand px-5 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:ring-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? <ArrowLeft className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}
