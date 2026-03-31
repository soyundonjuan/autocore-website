import { useEffect, useState } from "react";

function chunkItems(items, size) {
  const groups = [];

  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }

  return groups;
}

function LogoCarousel({ items, ariaLabel, autoplayOffset = 0 }) {
  const slides = chunkItems(items, 3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) {
      return undefined;
    }

    let intervalId;
    const timeoutId = window.setTimeout(() => {
      setCurrentIndex((index) => (index === slides.length - 1 ? 0 : index + 1));

      intervalId = window.setInterval(() => {
        setCurrentIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
      }, 6200);
    }, autoplayOffset);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [autoplayOffset, isPaused, slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const goToNext = () => {
    setCurrentIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  return (
    <div
      className="mt-8"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="grid min-w-full grid-cols-3 gap-4">
              {slide.map((logo) => (
                <div key={logo.src} className="logo-pill">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[92%] w-[92%] max-h-none max-w-none object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {slide.length < 3
                ? Array.from({ length: 3 - slide.length }, (_, index) => (
                    <div key={`empty-${slideIndex}-${index}`} className="logo-pill opacity-0" aria-hidden="true" />
                  ))
                : null}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 ? (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  index === currentIndex ? "w-8 bg-[var(--color-accent-500)]" : "w-2.5 bg-slate-300"
                }`}
                aria-label={`Ir al grupo ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:text-[var(--color-accent-600)]"
              aria-label="Ver logos anteriores"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18 9 12l6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:text-[var(--color-accent-600)]"
              aria-label="Ver logos siguientes"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LogoCarousel;
