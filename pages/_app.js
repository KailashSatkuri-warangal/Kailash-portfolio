import '../styles/globals.css'
import CookieBanner from '../components/CookieBanner/CookieBanner'
import Particles from '../components/Particles/Particles'
import particlesConfig from '../utils/particles.json'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Head from "next/head"
import { useEffect, useState } from "react"
import { HypertuneProvider } from '@/generated/hypertune.react'
import getHypertune from '@/lib/getHypertune'

function MyApp({ Component, pageProps }) {
	const [hypertuneState, setHypertuneState] = useState(null)
	const [rootArgs, setRootArgs] = useState(null)

	useEffect(() => {
		console.log("Hypertune Connected ✅")
		console.log("Config Key:", process.env.EXPERIMENTATION_EXPERIMENTATION_CONFIG_ITEM_KEY)
		console.log("Token:", process.env.EXPERIMENTATION_NEXT_PUBLIC_HYPERTUNE_TOKEN)

		async function initHypertune() {
			const hypertune = await getHypertune()
			setHypertuneState(hypertune.dehydrate())
			setRootArgs(hypertune.getRootArgs())
		}

		initHypertune()
	}, [])

	// Wait until Hypertune is initialized
	if (!hypertuneState || !rootArgs) return null

	return (
		<HypertuneProvider
			createSourceOptions={{
				token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN || process.env.EXPERIMENTATION_NEXT_PUBLIC_HYPERTUNE_TOKEN,
			}}
			dehydratedState={hypertuneState}
			rootArgs={rootArgs}
		>
			<>
				<Head>
					<script
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872384661755732"
						crossOrigin="anonymous"
					></script>
				</Head>
				<Particles options={particlesConfig} />
				<Component {...pageProps} />
				<CookieBanner />
			</>
		</HypertuneProvider>
	)
}

export default MyApp
