import '../styles/globals.css';
import CookieBanner from '../components/CookieBanner/CookieBanner';
import Particles from '../components/Particles/Particles';
import particlesConfig from '../utils/particles.json';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';
import AppHypertuneProvider from '../components/client/HypertuneProvider';

function MyApp({ Component, pageProps }) {
	return (
		<AppHypertuneProvider>
			<Head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872384661755732"
					crossOrigin="anonymous"
				/>
			</Head>

			<Particles options={particlesConfig} />
			<Component {...pageProps} />
			<CookieBanner />
		</AppHypertuneProvider>
	);
}

export default MyApp;
