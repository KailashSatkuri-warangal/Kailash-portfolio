import { createContext } from 'react';

export const HypertuneContext = createContext({});

export function HypertuneProvider({ flags, children }) {
  return (
    <HypertuneContext.Provider value={flags}>
      {children}
    </HypertuneContext.Provider>
  );
}
