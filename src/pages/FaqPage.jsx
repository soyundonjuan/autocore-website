import FaqList from "../components/FaqList";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import { faqs } from "../data/siteData";

function FaqPage() {
  return (
    <>
      <section className="bg-[var(--color-brand-900)] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <SectionIntro
            eyebrow="FAQ"
            title="Respuestas concretas para decisiones comerciales y operativas."
            description="Estas preguntas reemplazan el contenido placeholder del sitio original y ordenan la conversación comercial."
            dark
            center
          />
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <Reveal>
          <FaqList items={faqs} />
        </Reveal>
      </section>
    </>
  );
}

export default FaqPage;
