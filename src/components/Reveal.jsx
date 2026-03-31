import { useEffect, useRef, useState } from "react";
import { useRouteTransition } from "./RouteTransitionContext";

function Reveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  variant = "up",
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { isRouteReady } = useRouteTransition();

  useEffect(() => {
    setVisible(false);
  }, [isRouteReady]);

  useEffect(() => {
    const node = ref.current;

    if (!node || !isRouteReady) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isRouteReady]);

  return (
    <Component
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
