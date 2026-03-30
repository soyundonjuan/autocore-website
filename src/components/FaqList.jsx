function FaqList({ items, compact = false }) {
  return (
    <div className={`space-y-4 ${compact ? "" : "max-w-5xl"}`}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
          open={index === 0}
        >
          <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[var(--color-brand-900)] marker:hidden">
            {item.question}
          </summary>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default FaqList;
