import '../styles/globals.css'
import CookieBanner from '../components/CookieBanner/CookieBanner'
import Particles from '../components/Particles/Particles'
import particlesConfig from '../utils/particles.json'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Head from 'next/head'
import AppHypertuneProvider from '../components/client/HypertuneProvider'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	// Define routes where ads should NOT load
	const excludedRoutes = ['/loading', '/404', '/maintenance']

	const shouldShowAds = !excludedRoutes.includes(router.pathname)

	return (
		<AppHypertuneProvider>
			<Head>
				{shouldShowAds && (
					<script
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872384661755732"
						crossOrigin="anonymous"
					/>
				)}
			</Head>

			<Particles options={particlesConfig} />
			<Component {...pageProps} />
			<CookieBanner />
		</AppHypertuneProvider>
	)
}

export default MyApp
