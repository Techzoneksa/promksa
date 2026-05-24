import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { ContactForm } from "@/components/home/ContactForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HeroSection } from "@/components/home/HeroSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsBar } from "@/components/home/StatsBar";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { TechnologyStrip } from "@/components/home/TechnologyStrip";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechnologyStrip />
      <StatsBar />
      <AboutTeaser />
      <ServicesSection />
      <PortfolioPreview />
      <ClientsMarquee />
      <WhyUsSection />
      <TestimonialsSection />
      <TechnologiesSection />
      <ContactForm />
      <FinalCTA />
    </>
  );
}
