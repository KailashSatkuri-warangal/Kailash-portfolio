'use client';

import { useState, useEffect } from 'react';
import getHypertune from '../../lib/getHypertune.client';

export default function ClientComponent() {
	const [flags, setFlags] = useState(null);

	useEffect(() => {
		async function fetchFlags() {
			const hypertuneData = await getHypertune();
			setFlags(hypertuneData);
		}
		fetchFlags();
	}, []);

	if (!flags) return <div>Waiting for flag evaluation...</div>;

	return (
		<div>
			🎉 New Section Enabled! <br />
			Flag: {String(flags.showNewSection)} <br />
			User: {flags.context.user.name} ({flags.context.user.email})
		</div>
	);
}
