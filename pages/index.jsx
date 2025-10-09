import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/footer";
import Loader from "../components/Loader/Loader";
import AdBanner from "../components/banner/AdBanner";
import Meta from "../public/Profile/meta.png";
import ClientComponent from '../components/client/ClientComponent';
import particleOptions from "../utils/particles.json";

const Particles = dynamic(() => import('react-tsparticles'), { ssr: false });

export async function getStaticProps() {
  let response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@satkurikailash`
  );
  response = await response.json();
  let blogs = response.items.slice(0, 3);
  blogs[0].image = "/work/quantum.png";

  return { props: { blogs } };
}

export default function Home({ blogs }) {
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowParticles(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Head>
          <title>Satkuri Kailash - Full Stack Developer</title>
          <meta
            name="description"
            content="Welcome to the portfolio of Satkuri Kailash, a passionate Full Stack Developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience."
          />
          <meta property="og:title" content="Satkuri Kailash - Full Stack Developer" />
          <meta
            property="keywords"
            content="Satkuri Kailash, Full Stack Developer, Portfolio, Web Developer, React, Node.js, JavaScript"
          />
          <meta property="og:image" content={Meta} />
        </Head>

        {showParticles && (
          <Particles
            id="tsparticles"
            options={particleOptions}
            style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1 }}
          />
        )}

        <Navbar />
        <Profile />
        <AdBanner />
        <Skills />
        <Experience />
        <Projects />
        <AdBanner />
        <Blogs blogs={blogs} />
        <ClientComponent /> {/* Hypertune flags used here */}
        <Footer />
      </div>
    </>
  );
}
