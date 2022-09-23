import { createContext, ReactNode, useState } from "react";

interface RouteContextType {
  defineRoute: (route: string) => void;
  defineLoginRoute: (route: string) => void;
  route: string;
  loginRoute: string;
}

export const RoutesContext = createContext({} as RouteContextType);

interface RoutesContextProviderProps {
  children: ReactNode;
}

export function RoutesContextProvider({
  children,
}: RoutesContextProviderProps) {
  const [route, setRoute] = useState<string>("dashboard");
  const [loginRoute, setLoginRoute] = useState<string>("login");

  function defineRoute(route: string) {
    setRoute(route);
  }

  function defineLoginRoute(route: string) {
    setLoginRoute(route);
  }

  return (
    <RoutesContext.Provider
      value={{ defineRoute, defineLoginRoute, route, loginRoute }}
    >
      {children}
    </RoutesContext.Provider>
  );
}
