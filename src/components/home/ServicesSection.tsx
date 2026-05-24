import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/lib/constants";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[#F7F8FC]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="خدماتنا"
            title="خدماتنا الرقمية التي تدعم نجاحك"
            description="نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدة مشروعك على النمو والتميز في السوق."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.04}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
