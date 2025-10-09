// lib/getHypertune.js
import 'server-only'
import { unstable_noStore as noStore } from 'next/cache'
import { createSource } from '@/generated/hypertune'

const hypertuneSource = createSource({
	token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN,
})

export default async function getHypertune(options = {}) {
	const { isRouteHandler = false } = options

	noStore() // ensures no caching on server

	await hypertuneSource.initIfNeeded()

	// Set remote logging mode
	hypertuneSource.setRemoteLoggingMode(isRouteHandler ? 'normal' : 'off')

	// Return root with context
	return hypertuneSource.root({
		args: {
			context: {
				environment: process.env.NODE_ENV,
				user: {
					id: 'kailash-portfolio',      // unique id for your portfolio
					name: 'Kailash Satkuri',     // your name
					email: 'satkurikailash@gmail.com', // your email
				},
			},
		},
	})
}
