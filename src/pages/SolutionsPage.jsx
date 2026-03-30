import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";

const pillars = [
  {
    eyebrow: "Conectividad",
    title: "Integra pagos, banca y software hotelero",
    body: "El objetivo no es sumar otra herramienta aislada, sino cerrar el circuito entre reservas, cobro y conciliación.",
  },
  {
    eyebrow: "Automatización",
    title: "Disminuye tareas repetitivas del equipo",
    body: "Menos intervención humana en confirmaciones y validaciones significa más tiempo para operación y servicio.",
  },
  {
    eyebrow: "Control",
    title: "Opera con mayor trazabilidad",
    body: "Los equipos de finanzas y reservas trabajan sobre un flujo más claro, auditable y alineado con la cuenta bancaria del hotel.",
  },
];

const process = [
  {
    title: "Habilitación del canal de cobro",
    body: "Configuración inicial para que los pagos digitales apunten a la cuenta bancaria y a la operación del hotel con el menor roce posible.",
  },
  {
    title: "Integración con el stack actual",
    body: "Channel Manager, PMS, motor de reservas y pasarela quedan alineados para que el cobro no sea un proceso desconectado del resto del negocio.",
  },
  {
    title: "Operación automatizada y seguimiento",
    body: "El hotel procesa reservas con más velocidad, menos fricción y una base antifraude más sólida.",
  },
];

function SolutionsPage() {
  return (
    <>
      <section className="bg-[var(--color-brand-900)] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionIntro
            eyebrow="Soluciones"
            title="Una capa transaccional para cobrar mejor sin romper tu operación actual."
            description="Autocore conecta el ecosistema de pagos con la lógica operacional del hotel para reducir tareas manuales, acelerar confirmaciones y dar mayor visibilidad financiera."
            dark
          />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <Reveal key={item.title} as="article" delay={index * 90} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(4,2,59,0.08)]">
              <span className="eyebrow">{item.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-bold text-[var(--color-brand-900)]">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-brand-50)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_.95fr] lg:px-8">
          <Reveal variant="left">
            <SectionIntro
            eyebrow="Cómo funciona"
            title="Tres capas de valor para modernizar el recaudo hotelero."
          />
          </Reveal>
          <div className="space-y-5">
            {process.map((item, index) => (
              <Reveal key={item.title} as="article" variant="right" delay={index * 90} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(4,2,59,0.08)]">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-brand-700)]">Paso {index + 1}</p>
                <h3 className="mt-3 text-2xl font-bold text-[var(--color-brand-900)]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default SolutionsPage;
