// lib/getHypertune.js
import { createSource } from '../generated/hypertune' // use relative path
import { unstable_noStore as noStore } from 'next/cache'

const hypertuneSource = createSource({
  token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN,
})

export default async function getHypertune(options = {}) {
  const { isRouteHandler = false } = options
  noStore() // ensures no caching on server
  await hypertuneSource.initIfNeeded()
  hypertuneSource.setRemoteLoggingMode(isRouteHandler ? 'normal' : 'off')

  return hypertuneSource.root({
    args: {
      context: {
        environment: process.env.NODE_ENV,
        user: {
          id: 'kailash-portfolio',
          name: 'Kailash Satkuri',
          email: 'satkurikailash@gmail.com',
        },
      },
    },
  })
}
