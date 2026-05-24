import { Container } from "@/components/ui/Container";
import { platformTechs } from "@/lib/constants";

export function TechnologyStrip() {
  const items = [...platformTechs, ...platformTechs, ...platformTechs];

  return (
    <section className="bg-brand-primary py-8">
      <Container>
        <p className="mb-4 text-center text-sm font-bold text-white/70">
          التقنيات والمنصات التي نعمل بها
        </p>
      </Container>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex min-w-max animate-marquee items-center gap-8">
          {items.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="inline-flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-white/10 px-6 text-sm font-bold text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
