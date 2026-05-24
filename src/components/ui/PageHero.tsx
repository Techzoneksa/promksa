import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
  return (
    <section className={`bg-hero-gradient pt-32 pb-16 md:pt-36 md:pb-20 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl leading-tight text-brand-text sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle ? (
            <p className="mt-5 text-lg leading-8 text-brand-muted sm:text-xl">{subtitle}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
