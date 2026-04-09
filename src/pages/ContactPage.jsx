import AppIcon from "../components/AppIcon";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import { countryDialCodeOptions, countryOptions, propertyTypeOptions } from "../data/formOptions";
import { contactChannels, demoLink } from "../data/siteData";
import { handleDigitsOnlyInput } from "../utils/formFields";
import { submitContactEmail } from "../utils/contactEmail";

const contactIcons = {
  Teléfono: "phone",
  Email: "mail",
};

function ContactPage() {
  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal className="max-w-4xl" variant="left">
            <span className="eyebrow">Contacto</span>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.04] tracking-tight text-[var(--color-brand-900)] md:text-6xl">
              Hablemos de cómo mejorar los pagos de tu hotel.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Cuéntanos cómo operas hoy, qué retos tienes con cobros, reservas o conciliación, y revisamos contigo el mejor camino para activar Autocore.
            </p>
          </Reveal>
        </div>
      </section>

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
            <form className="space-y-10" onSubmit={(event) => submitContactEmail(event, "Contacto")}>
              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="contact-company-website">Sitio web</label>
                <input id="contact-company-website" type="text" name="_honey" tabIndex="-1" autoComplete="off" />
              </div>
              <input type="hidden" name="_form_started_at" value={String(Date.now())} readOnly />

              <div>
                <p className="text-xl font-medium text-[var(--color-brand-900)]">Información de alojamiento</p>
                <div className="mt-6 grid gap-4">
                  <input className="contact-input" type="text" name="Nombre comercial" placeholder="Nombre comercial" required />
                  <select className="contact-input contact-select" name="Tipo de propiedad" defaultValue="" required>
                    <option value="" disabled>
                      Tipo de propiedad
                    </option>
                    {propertyTypeOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <input
                    className="contact-input"
                    type="number"
                    name="Cantidad de habitaciones"
                    inputMode="numeric"
                    min="1"
                    step="1"
                    placeholder="Cantidad de habitaciones"
                    required
                  />
                </div>
              </div>

              <div>
                <p className="text-xl font-medium text-[var(--color-brand-900)]">Datos de contacto</p>
                <div className="mt-6 grid gap-4">
                  <input className="contact-input" type="text" name="Nombre completo" placeholder="Nombre completo" required />
                  <select className="contact-input contact-select" name="Pais" defaultValue="" required>
                    <option value="" disabled>
                      País
                    </option>
                    {countryOptions.map((country) => (
                      <option key={country}>{country}</option>
                    ))}
                  </select>
                  <div className="grid gap-4 sm:grid-cols-[11rem_1fr]">
                    <select className="contact-input contact-select" name="Codigo de pais" defaultValue="+57" required>
                      {countryDialCodeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <input
                      className="contact-input"
                      type="tel"
                      name="Whatsapp o Telefono"
                      placeholder="Whatsapp/Teléfono"
                      inputMode="numeric"
                      pattern="[0-9]+"
                      onInput={handleDigitsOnlyInput}
                      autoComplete="tel-national"
                      required
                    />
                  </div>
                  <input
                    className="contact-input"
                    type="email"
                    name="Correo electronico"
                    placeholder="Correo electrónico"
                    autoComplete="email"
                    required
                  />
                  <textarea
                    name="Mensaje"
                    className="contact-input min-h-[8rem] resize-none rounded-[1.75rem] py-5"
                    placeholder='Mensaje corto Ej: "Tenemos problemas cobrando OTAs"'
                    required
                  />
                </div>
              </div>

              <label className="contact-checkbox">
                <input type="checkbox" name="Acepta terminos" value="Sí" required />
                <span>
                  Acepto los{" "}
                  <a href="/terminos-y-condiciones" target="_blank" rel="noreferrer">
                    términos y condiciones
                  </a>
                  .
                </span>
              </label>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
                >
                  Enviar
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
