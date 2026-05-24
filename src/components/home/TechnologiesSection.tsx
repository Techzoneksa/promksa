import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { technologies } from "@/lib/constants";

export function TechnologiesSection() {
  return (
    <section className="section-padding bg-[#F7F8FC]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="التقنيات"
            title="التقنيات المستخدمة"
            description="نستخدم أحدث التقنيات والمنصات لضمان أفضل النتائج لمشاريع عملائنا."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-xl border border-[#f0edff] bg-white px-5 py-3 text-sm font-bold text-brand-muted shadow-brand-card transition duration-300 hover:border-brand-primary/30 hover:text-brand-primary hover:shadow-brand-card-hover"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
