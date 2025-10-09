// components/ClientComponent.jsx
'use client'

import React from 'react'
import { useHypertune } from '@/generated/hypertune.react'

export default function ClientComponent() {
	const hypertune = useHypertune()

	// Replace 'showNewSection' with your actual flag key
	const showNewSection = hypertune.showNewSection({ fallback: false })

	return (
		<div>
			<h2>Feature Flag Demo</h2>
			<p>Flag value: {String(showNewSection)}</p>

			{showNewSection && (
				<div className="new-section">
					<h3>🚀 New Section Activated!</h3>
					<p>This section appears because the Hypertune flag is ON.</p>
				</div>
			)}
		</div>
	)
}
