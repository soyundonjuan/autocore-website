import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import Navbar from "./Navbar";
import { RouteTransitionProvider } from "./RouteTransitionContext";
import SiteLoader from "./SiteLoader";

function Layout({ children }) {
  const location = useLocation();
  const [isLoadingRoute, setIsLoadingRoute] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  useEffect(() => {
    setIsLoadingRoute(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setIsLoadingRoute(false);
    }, 950);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [location.pathname]);

  return (
    <RouteTransitionProvider value={{ isRouteReady: !isLoadingRoute }}>
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
