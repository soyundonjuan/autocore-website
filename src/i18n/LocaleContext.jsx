import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTranslatedText, normalizeTranslationKey } from "./translations";

const LocaleContext = createContext(null);
const STORAGE_KEY = "autocore-locale";
const supportedLocales = ["es", "en", "pt"];

const textNodeOriginals = new WeakMap();
const attributeOriginals = new WeakMap();

function translateElementTree(root, locale) {
  if (!root) {
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const original = textNodeOriginals.get(node) ?? node.textContent;
    textNodeOriginals.set(node, original);
    const normalized = normalizeTranslationKey(original);

    if (!normalized) {
      return;
    }

    node.textContent = getTranslatedText(locale, original);
  });

  root.querySelectorAll("*").forEach((element) => {
    const tracked = attributeOriginals.get(element) ?? {};

    ["placeholder", "aria-label", "title"].forEach((attributeName) => {
      if (!element.hasAttribute(attributeName)) {
        return;
      }

      if (!tracked[attributeName]) {
        tracked[attributeName] = element.getAttribute(attributeName);
      }

      element.setAttribute(attributeName, getTranslatedText(locale, tracked[attributeName]));
    });

    if (element.tagName === "OPTION") {
      if (!tracked.textContent) {
        tracked.textContent = element.textContent;
      }

      element.textContent = getTranslatedText(locale, tracked.textContent);
    }

    attributeOriginals.set(element, tracked);
  });
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    return supportedLocales.includes(stored) ? stored : "es";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) {
      return undefined;
    }

    let frameId = 0;
    const syncTranslations = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        translateElementTree(root, locale);
      });
    };

    syncTranslations();

    const observer = new MutationObserver(() => {
      syncTranslations();
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      translate: (valueToTranslate) => getTranslatedText(locale, valueToTranslate),
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
