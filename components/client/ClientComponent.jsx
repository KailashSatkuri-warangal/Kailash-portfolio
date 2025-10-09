'use client';
import { useContext } from 'react';
import { HypertuneContext } from './HypertuneProvider';

export default function ClientComponent() {
  const flags = useContext(HypertuneContext);

  if (!flags) return <div>Loading flags...</div>;

  return <div>Show New Section: {String(flags.showNewSection)}</div>;
}
