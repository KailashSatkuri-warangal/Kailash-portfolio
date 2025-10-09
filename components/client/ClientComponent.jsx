'use client'
import React from 'react'

export default function ClientComponent({ flags }) {
  if (!flags) return <div>Loading flags...</div>

  const showNewSection = flags.showNewSection || false

  return (
    <div>
      <p>Flag value: {String(showNewSection)}</p>
      {showNewSection && <p>🎉 New Section Enabled!</p>}
    </div>
  )
}
