import '../styles/globals.css';
import CookieBanner from '../components/CookieBanner/CookieBanner';
import Particles from '../components/Particles/Particles';
import particlesConfig from '../utils/particles.json';
import '@fortawesome/fontawesome-free/css/all.min.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Particles options={particlesConfig} />
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}

export default MyApp;
