import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/constants";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#F7F8FC]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="التقييمات"
            title="تقييمات عملائنا"
            description="نفخر بثقة عملائنا ونسعى دائماً لتقديم الأفضل."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
