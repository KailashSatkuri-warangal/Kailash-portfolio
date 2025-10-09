'use client';

import { useState, useEffect } from 'react';
import getHypertune from '../../lib/getHypertune.client';

export default function ClientComponent() {
	const [showNewSection, setShowNewSection] = useState(null);

	useEffect(() => {
		async function fetchFlag() {
			try {
				const hypertune = await getHypertune();
				const flags = hypertune.get(); // get all flags
				setShowNewSection(flags.showNewSection || false);
			} catch (err) {
				console.error('Hypertune fetch failed:', err);
				setShowNewSection(false);
			}
		}
		fetchFlag();
	}, []);

	if (showNewSection === null) return <div>Loading...</div>;

	return (
		<div>
			Show New Section: {showNewSection ? 'true' : 'false'}
			{showNewSection && <p>🎉 New Section Enabled!</p>}
		</div>
	);
}
