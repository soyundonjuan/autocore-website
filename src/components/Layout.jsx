import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import Navbar from "./Navbar";
import { RouteTransitionProvider } from "./RouteTransitionContext";
import SiteLoader from "./SiteLoader";

function Layout({ children }) {
  const location = useLocation();
  const [isLoadingRoute, setIsLoadingRoute] = useState(true);
  const transitionRef = useRef({
    completeTimer: null,
    actionTimer: null,
  });

  const clearTransitionTimers = useCallback(() => {
    if (transitionRef.current.actionTimer) {
      clearTimeout(transitionRef.current.actionTimer);
      transitionRef.current.actionTimer = null;
    }

    if (transitionRef.current.completeTimer) {
      clearTimeout(transitionRef.current.completeTimer);
      transitionRef.current.completeTimer = null;
    }
  }, []);

  const startVisualTransition = useCallback((action, options = {}) => {
    const { duration = 950, actionDelay = 150 } = options;

    setIsLoadingRoute(true);
    clearTransitionTimers();

    if (typeof action === "function") {
      transitionRef.current.actionTimer = window.setTimeout(() => {
        action();
      }, actionDelay);
    }

    transitionRef.current.completeTimer = window.setTimeout(() => {
      setIsLoadingRoute(false);
    }, duration);
  }, [clearTransitionTimers]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  useEffect(() => {
    startVisualTransition();

    return () => {
      clearTransitionTimers();
    };
  }, [clearTransitionTimers, location.pathname, startVisualTransition]);

  const transitionValue = useMemo(
    () => ({
      isRouteReady: !isLoadingRoute,
      startVisualTransition,
    }),
    [isLoadingRoute, startVisualTransition],
  );

  return (
    <RouteTransitionProvider value={transitionValue}>
      <div className="min-h-screen bg-white text-slate-900">
        <SiteLoader visible={isLoadingRoute} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--color-brand-900)] focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main-content" key={location.pathname}>
          {children}
        </main>
        <FloatingActions />
        <Footer />
      </div>
    </RouteTransitionProvider>
  );
}

export default Layout;
