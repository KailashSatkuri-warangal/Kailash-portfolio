import '../styles/globals.css';
import CookieBanner from '../components/CookieBanner/CookieBanner';
import Particles from '../components/Particles/Particles';
import particlesConfig from '../utils/particles.json';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from "next/head";
import { useEffect, useState } from "react";
import getHypertune from '../lib/getHypertune.client';

function MyApp({ Component, pageProps }) {
  const [flags, setFlags] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initHypertune() {
      try {
        const hypertuneFlags = await getHypertune();
        setFlags(hypertuneFlags);
      } catch (err) {
        console.error("Hypertune initialization failed:", err);
      } finally {
        setLoading(false);
      }
    }
    initHypertune();
  }, []);

  if (loading) return <div>Loading portfolio...</div>;

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
  );
}

export default MyApp;
