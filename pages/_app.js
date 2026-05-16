import '../styles/globals.css'
import CookieBanner from '../components/CookieBanner/CookieBanner'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	// Register Service Worker for PWA
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js').catch(() => {});
		}
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#050505" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icons/icon-192.png" />
			</Head>

			<Component {...pageProps} />
			<CookieBanner />
			<Analytics />
		</>
	)
}

export default MyApp
