'use client';

import { useState, useEffect, createContext } from 'react';
import getHypertune from '../../lib/getHypertune.client';

// Create a context for flags
export const HypertuneContext = createContext({});

export default function AppHypertuneProvider({ children }) {
  const [flags, setFlags] = useState(null);

  useEffect(() => {
    async function fetchFlags() {
      try {
        const hypertuneFlags = await getHypertune();
        setFlags(hypertuneFlags);
      } catch (err) {
        console.error('Hypertune init failed:', err);
        setFlags({});
      }
    }
    fetchFlags();
  }, []);

  if (!flags) return <div>Loading portfolio...</div>;

  return (
    <HypertuneContext.Provider value={flags}>
      {children}
    </HypertuneContext.Provider>
  );
}
