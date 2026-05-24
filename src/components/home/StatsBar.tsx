import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/lib/constants";

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-px bg-white py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-brand bg-white p-6 text-center shadow-brand-card transition duration-300 hover:shadow-brand-card-hover"
            >
              <StatCounter value={item.value} suffix={item.suffix} decimals={item.decimals} />
              <p className="mt-2 text-sm font-semibold text-brand-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
