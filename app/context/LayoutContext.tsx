'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface LayoutContextType {
  showHeaderFooter: boolean;
  setShowHeaderFooter: (show: boolean) => void;
}

const defaultContext: LayoutContextType = {
  showHeaderFooter: true,
  setShowHeaderFooter: () => {},
};

const LayoutContext = createContext<LayoutContextType>(defaultContext);

export const useLayout = () => useContext(LayoutContext);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [showHeaderFooter, setShowHeaderFooter] = React.useState(true);

  return (
    <LayoutContext.Provider value={{ showHeaderFooter, setShowHeaderFooter }}>
      {children}
    </LayoutContext.Provider>
  );
} 