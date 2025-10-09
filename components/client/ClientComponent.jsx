import { useContext } from 'react';
import { HypertuneContext } from './HypertuneProvider';

export default function ClientComponent() {
  const flags = useContext(HypertuneContext);

  if (!flags) return null;

  return (
    <div>
      <p>Show New Section: {String(flags.showNewSection)}</p>
      {flags.showNewSection && <p>🎉 New Section Enabled!</p>}
    </div>
  );
}