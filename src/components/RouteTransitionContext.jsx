import { createContext, useContext } from "react";

const RouteTransitionContext = createContext({
  isRouteReady: true,
  startVisualTransition: () => {},
});

export function RouteTransitionProvider({ value, children }) {
  return <RouteTransitionContext.Provider value={value}>{children}</RouteTransitionContext.Provider>;
}

export function useRouteTransition() {
  return useContext(RouteTransitionContext);
}
