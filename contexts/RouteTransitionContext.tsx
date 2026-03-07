import React, { createContext, useContext } from 'react';

interface RouteTransitionContextValue {
  isRouteTransitioning: boolean;
  startHomeToNewsTransition: () => Promise<void>;
}

const noopAsync = async () => {};

const RouteTransitionContext = createContext<RouteTransitionContextValue>({
  isRouteTransitioning: false,
  startHomeToNewsTransition: noopAsync,
});

export const RouteTransitionProvider = RouteTransitionContext.Provider;

export const useRouteTransition = (): RouteTransitionContextValue => {
  return useContext(RouteTransitionContext);
};

