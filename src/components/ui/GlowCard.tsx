import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BrandCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function GlowCard({ children, className, ...props }: BrandCardProps) {
  return (
    <div
      className={cn(
        "brand-card relative overflow-hidden transition duration-300 hover:shadow-brand-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
