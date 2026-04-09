import { useState } from "react";
import AppIcon from "./AppIcon";
import { useLocale } from "../i18n/LocaleContext";
import { localeNames } from "../i18n/translations";
import { useRouteTransition } from "./RouteTransitionContext";

const whatsappLink = "https://wa.me/573205406782";

function FloatingActions() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, translate } = useLocale();
  const { startVisualTransition } = useRouteTransition();
  const languages = Object.entries(localeNames);
  const backToTopLabel =
    locale === "en" ? "Back to top" : locale === "pt" ? "Voltar ao topo" : "Volver al inicio";

  return (
    <div className="floating-actions">
      <div className="floating-language-wrap">
        {open ? (
          <div className="floating-language-panel" role="dialog" aria-label={translate("Cambiar idioma")}>
            <p className="floating-language-title">{translate("Idioma")}</p>
            <div className="space-y-2">
              {languages.map(([languageCode, languageLabel]) => (
                <button
                  key={languageCode}
                  type="button"
                  className={`floating-language-option${locale === languageCode ? " is-active" : ""}`}
                  aria-pressed={locale === languageCode}
                  onClick={() => {
                    if (locale === languageCode) {
                      setOpen(false);
                      return;
                    }

                    startVisualTransition(() => {
                      setLocale(languageCode);
                      setOpen(false);
                    });
                  }}
                >
                  {languageLabel}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <button
          type="button"
          className="floating-action-btn floating-action-btn-light"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={translate("Cambiar idioma")}
        >
          <AppIcon name="globe" className="h-5 w-5" />
        </button>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="floating-action-btn floating-action-btn-whatsapp"
        aria-label={translate("Escribir por WhatsApp")}
      >
        <AppIcon name="whatsapp" className="h-5 w-5" />
      </a>

      <button
        type="button"
        className="floating-action-btn floating-action-btn-light"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={backToTopLabel}
      >
        <AppIcon name="arrowUp" className="h-5 w-5" />
      </button>
    </div>
  );
}

export default FloatingActions;
