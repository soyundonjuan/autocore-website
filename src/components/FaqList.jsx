import { useState } from "react";

function FaqList({ items, compact = false }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`space-y-4 ${compact ? "" : "max-w-5xl"}`}>
      {items.map((item, index) => (
        <div
          key={item.question}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(index)}
            className="flex w-full items-start justify-between gap-4 pr-2 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-bold text-[var(--color-brand-900)]">{item.question}</span>
            <span
              className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[var(--color-brand-900)] transition ${
                openIndex === index ? "rotate-45 bg-[var(--color-accent-50)] text-[var(--color-accent-600)]" : ""
              }`}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          <div
            className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
              openIndex === index ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="max-w-4xl text-base leading-7 text-slate-600">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqList;
