import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { demoLink } from "../data/siteData";
import { useLocale } from "../i18n/LocaleContext";

function ThankYouPage() {
  const [searchParams] = useSearchParams();
  const { locale, translate } = useLocale();

  const propertyType = useMemo(() => {
    const value = searchParams.get("tipo");

    if (!value) {
      return "hotel";
    }

    return value;
  }, [searchParams]);

  const localizedPropertyType = useMemo(() => {
    const labels = {
      es: {
        hotel: "hotel",
        hostal: "hostal",
        "establecimiento de renta corta": "establecimiento de renta corta",
      },
      en: {
        hotel: "hotel",
        hostal: "hostel",
        "establecimiento de renta corta": "short-term rental property",
      },
      pt: {
        hotel: "hotel",
        hostal: "hostel",
        "establecimiento de renta corta": "estabelecimento de aluguel de curta temporada",
      },
    };

    return labels[locale]?.[propertyType] ?? labels.es.hotel;
  }, [locale, propertyType]);

  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">{translate("Gracias")}</span>
            <h1 className="mt-7 text-5xl font-black leading-[1.04] tracking-tight text-[var(--color-brand-900)] md:text-6xl">
              {translate("Bienvenido a Autocore")}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              {locale === "es"
                ? `Estás a pocos pasos de optimizar los cobros en tu ${localizedPropertyType}.`
                : locale === "pt"
                  ? `Você está a poucos passos de otimizar as cobranças no seu ${localizedPropertyType}.`
                  : `You are just a few steps away from optimizing collections at your ${localizedPropertyType}.`}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500">
              {translate(
                "Ya recibimos tu intención de contacto. El siguiente paso es revisar tu operación y validar la mejor forma de activar cobros más simples, seguros y rentables.",
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <Reveal className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(4,2,59,0.08)] lg:p-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.75rem] bg-[var(--color-brand-50)] px-6 py-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent-600)]">{translate("Paso 1")}</p>
              <p className="mt-4 text-xl font-black text-[var(--color-brand-900)]">{translate("Revisión inicial")}</p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {translate("Entendemos cómo vendes, cobras y dónde se están generando pérdidas o fricción operativa.")}
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[var(--color-brand-50)] px-6 py-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent-600)]">{translate("Paso 2")}</p>
              <p className="mt-4 text-xl font-black text-[var(--color-brand-900)]">{translate("Ruta de activación")}</p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {translate("Definimos el camino para conectar banco, canales de venta y operación del alojamiento.")}
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[var(--color-brand-50)] px-6 py-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent-600)]">{translate("Paso 3")}</p>
              <p className="mt-4 text-xl font-black text-[var(--color-brand-900)]">{translate("Inicio de operación")}</p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {translate("Empiezas a cobrar con más control, menos pérdidas y mejor visibilidad financiera.")}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
            >
              {translate("Agendar una demo")}
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-200)] bg-white px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:bg-[var(--color-accent-50)]"
            >
              {translate("Volver al inicio")}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default ThankYouPage;
