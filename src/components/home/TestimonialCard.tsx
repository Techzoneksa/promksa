import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  company: string;
};

export function TestimonialCard({ quote, name, company }: TestimonialCardProps) {
  return (
    <div className="h-full rounded-2xl border border-[#f0edff] bg-white p-6 shadow-brand-card transition duration-300 hover:shadow-brand-card-hover">
      <Quote className="mb-4 h-8 w-8 text-brand-primary/20" aria-hidden="true" />
      <p className="text-sm leading-8 text-brand-text">{quote}</p>
      <div className="mt-5 flex items-center gap-1 text-yellow-400" aria-label="تقييم">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <div className="mt-5 border-t border-[#f0edff] pt-5">
        <h3 className="text-base font-bold text-brand-text">{name}</h3>
        <p className="mt-1 text-sm text-brand-muted">{company}</p>
      </div>
    </div>
  );
}
