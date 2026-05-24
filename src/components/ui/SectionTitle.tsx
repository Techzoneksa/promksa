import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      )}
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-brand-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
