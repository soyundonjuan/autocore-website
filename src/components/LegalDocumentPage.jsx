import Reveal from "./Reveal";

function LegalDocumentPage({ eyebrow, title, updatedAt, intro, sections }) {
  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal className="max-w-4xl" variant="left">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-7 text-5xl font-black leading-[1.04] tracking-tight text-[var(--color-brand-900)] md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-7 text-slate-500">Última actualización: {updatedAt}</p>
            {intro ? <p className="mt-6 text-lg leading-8 text-slate-600">{intro}</p> : null}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(4,2,59,0.06)] lg:p-10">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 40}>
                <article className="legal-section">
                  <h2 className="text-2xl font-black text-[var(--color-brand-900)]">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul className="space-y-3 pl-5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="list-disc">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.items ? (
                      <div className="space-y-6">
                        {section.items.map((item) => (
                          <div key={item.label}>
                            <h3 className="text-lg font-bold text-[var(--color-brand-900)]">{item.label}</h3>
                            {item.paragraphs?.map((paragraph) => (
                              <p key={paragraph} className="mt-2">
                                {paragraph}
                              </p>
                            ))}
                            {item.bullets ? (
                              <ul className="mt-3 space-y-3 pl-5">
                                {item.bullets.map((bullet) => (
                                  <li key={bullet} className="list-disc">
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalDocumentPage;
