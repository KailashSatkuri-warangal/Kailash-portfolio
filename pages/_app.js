import '../styles/globals.css'
import CookieBanner from '../components/CookieBanner/CookieBanner'
import Particles from '../components/Particles/Particles'
import particlesConfig from '../utils/particles.json'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import getHypertune from '../lib/getHypertune.client' // client-side helper

function MyApp({ Component, pageProps }) {
  const [flags, setFlags] = useState(null)

  useEffect(() => {
    async function initHypertune() {
      console.log('Hypertune Connected ✅')
      console.log('Config Key:', process.env.EXPERIMENTATION_EXPERIMENTATION_CONFIG_ITEM_KEY)
      console.log('Token:', process.env.EXPERIMENTATION_NEXT_PUBLIC_HYPERTUNE_TOKEN)

      const hypertuneFlags = await getHypertune()
      setFlags(hypertuneFlags)
    }

    initHypertune()
  }, [])

  // Optional: show loading until flags are fetched
  if (!flags) return <div>Loading portfolio...</div>

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872384661755732"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Particles options={particlesConfig} />
      <Component {...pageProps} hypertuneFlags={flags} />
      <CookieBanner />
    </>
  )
}

export default MyApp
