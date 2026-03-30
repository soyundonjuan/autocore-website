import AppIcon from "../components/AppIcon";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import { contactChannels, demoLink } from "../data/siteData";

const demoBenefits = [
  {
    title: "Diagnóstico de flujo actual",
    body: "Revisión de cómo cobras hoy y dónde existen fricciones entre reservas, pagos y operación.",
    icon: "search",
  },
  {
    title: "Mapa de integración",
    body: "Validación inicial del stack del hotel y del encaje con banca, pasarelas y sistemas internos.",
    icon: "integration",
  },
  {
    title: "Ruta de implementación",
    body: "Visibilidad del tiempo estimado de activación, alcances y modelo comercial.",
    icon: "route",
  },
];

const contactIcons = {
  Teléfono: "phone",
  Email: "mail",
};

function ContactPage() {
  return (
    <section className="bg-[var(--color-brand-50)] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <Reveal
          as="section"
          variant="left"
          className="rounded-[2.5rem] bg-[var(--color-brand-900)] px-8 py-12 text-white shadow-[0_24px_80px_rgba(4,2,59,0.18)] lg:px-10"
        >
          <SectionIntro
            eyebrow="Contacto comercial"
            title="Agenda una demo y revisa el encaje con tu operación hotelera."
            description="Si buscas automatizar cobros, reducir tareas manuales y mejorar flujo de caja, este es el punto de inicio."
            dark
          />
          <dl className="mt-10 space-y-6">
            {contactChannels.map((item) => (
              <div key={item.label}>
                <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[var(--color-accent-300)]">
                  <AppIcon name={contactIcons[item.label]} className="h-5 w-5" />
                </div>
                <dt className="text-sm uppercase tracking-[0.24em] text-[var(--color-brand-100)]">{item.label}</dt>
                <dd className="mt-2 text-lg font-medium">
                  <a href={item.href}>{item.value}</a>
                </dd>
              </div>
            ))}
            <div>
              <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[var(--color-accent-300)]">
                <AppIcon name="chat" className="h-5 w-5" />
              </div>
              <dt className="text-sm uppercase tracking-[0.24em] text-[var(--color-brand-100)]">Demo</dt>
              <dd className="mt-2 text-lg font-medium">
                <a href={demoLink} target="_blank" rel="noreferrer">
                  Formulario oficial de Autocore
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal
          as="section"
          variant="right"
          delay={120}
          className="rounded-[2.5rem] bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:p-10"
        >
          <SectionIntro eyebrow="Qué obtienes en la demo" title="Una conversación comercial con enfoque operativo." />
          <div className="mt-8 grid gap-5">
            {demoBenefits.map((item, index) => (
              <Reveal key={item.title} as="article" delay={index * 90} className="rounded-3xl border border-slate-200 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
                  <AppIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-brand-900)]">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
            >
              Solicitar demo
            </a>
            <a
              href="mailto:info@autocore.pro"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-200)] px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:bg-[var(--color-accent-50)]"
            >
              Escribir por email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactPage;
