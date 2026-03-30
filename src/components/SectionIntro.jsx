function SectionIntro({ eyebrow, title, description, dark = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>
      <h2 className={`section-title ${dark ? "text-white" : "text-[var(--color-brand-900)]"}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 text-base leading-7 ${dark ? "text-[var(--color-brand-100)]" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionIntro;
