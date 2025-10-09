'use client';

import { HypertuneProvider } from '../generated/hypertune.react';

export default function AppHypertuneProvider({ children }) {
	return (
		<HypertuneProvider
			createSourceOptions={{
				token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN,
			}}
			rootArgs={{
				context: {
					environment: process.env.NODE_ENV,
					user: {
						id: 'kailash-portfolio',
						name: 'Kailash Satkuri',
						email: 'satkurikailash@gmail.com',
					},
				},
			}}
		>
			{children}
		</HypertuneProvider>
	);
}
