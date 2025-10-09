'use client';

import { useState, useEffect } from 'react';
import getHypertune from '../../lib/getHypertune.client';

export default function ClientComponent() {
	const [flags, setFlags] = useState(null);

	useEffect(() => {
		async function fetchFlags() {
			const hypertuneFlags = await getHypertune();
			setFlags(hypertuneFlags);
		}
		fetchFlags();
	}, []);

	if (!flags) return <div>Loading flags...</div>;

	const showNewSection = flags.showNewSection;

	return <div>Flag: {String(showNewSection)}</div>;
}
