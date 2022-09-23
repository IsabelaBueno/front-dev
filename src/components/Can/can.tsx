import { ReactNode } from "react";
import { useCan } from "../../hooks/useCan";

interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

export function Can({ children, permissions, roles }: CanProps) {
  const userCanSeeComponent = useCan({ permissions, roles });

  if (!userCanSeeComponent) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <h1>Sorry, you don't have permission</h1>;
  }

  return <>{children}</>;
}
