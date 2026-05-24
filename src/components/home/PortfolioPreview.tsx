import { CTAButton } from "@/components/ui/CTAButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/lib/constants";
import { ProjectCard } from "./ProjectCard";

const filters = ["الكل", "مواقع", "متاجر", "تطبيقات", "هوية"];

export function PortfolioPreview() {
  return (
    <section id="portfolio" className="section-padding bg-[#F7F8FC]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="الأعمال"
            title="شاهد آخر مشاريعنا"
            description="نفخر بتقديم مجموعة من مشاريعنا المميزة في مختلف المجالات الرقمية."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 hide-scrollbar md:justify-center">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-bold transition duration-300 ${
                  index === 0
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-[#f0edff] bg-white text-brand-muted hover:border-brand-primary/30 hover:text-brand-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.04}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-12 text-center">
            <CTAButton href="#contact" variant="outline">
              عرض كل الأعمال
            </CTAButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
