import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/lib/constants";

export function ClientsMarquee() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <Reveal>
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-[#F4F0FF] px-4 py-2 text-xs font-bold text-brand-primary">
              عملاؤنا
            </span>
            <h2 className="text-3xl leading-tight text-brand-text sm:text-4xl">
              عملاؤنا وشركاء النجاح
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-muted">
              نفخر بنجاحات صنعناها مع شركائنا في كل إنجاز
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-24 items-center justify-center rounded-xl border border-[#f0edff] bg-white px-4 transition duration-300 hover:border-brand-primary/30 hover:shadow-brand-card"
              >
                <span className="text-center text-lg font-bold text-brand-muted transition duration-300 hover:text-brand-primary">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
