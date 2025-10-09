'use client';
import { useState, useEffect, createContext } from 'react';
import getHypertune from '../../lib/getHypertune.client';

export const HypertuneContext = createContext({});

export default function AppHypertuneProvider({ children }) {
  const [flags, setFlags] = useState(null);

  useEffect(() => {
    async function fetchFlags() {
      const hypertuneFlags = await getHypertune();
      setFlags(hypertuneFlags);
    }
    fetchFlags();
  }, []);

  if (!flags) return <div>Loading flags...</div>;

  return (
    <HypertuneContext.Provider value={flags}>
      {children}
    </HypertuneContext.Provider>
  );
}
