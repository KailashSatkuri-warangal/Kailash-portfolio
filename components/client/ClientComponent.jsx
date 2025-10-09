'use client'
import React from 'react'

export default function ClientComponent({ flags }) {
  if (!flags) return <div>Loading flags...</div>;

  return (
    <div>
      <p>showNewSection: {String(flags.showNewSection)}</p>
      {flags.showNewSection && <p>🎉 New Section Enabled!</p>}
    </div>
  );
}