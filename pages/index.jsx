import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import Blogs from "../components/Blogs/Blogs";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/footer";
import Loader from "../components/Loader/Loader";
import SpatialBackground from "../components/Canvas/SpatialBackground";

export async function getStaticProps() {
  let blogs = [];
  try {
    let response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@satkurikailash`
    );
    response = await response.json();
    blogs = response.items ? response.items.slice(0, 3) : [];
    if (blogs[0]) blogs[0].image = "/work/quantum.png";
  } catch {
    blogs = [];
  }

  return { props: { blogs }, revalidate: 3600 };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Satkuri Kailash",
  "url": "https://kailash-portfolio.vercel.app",
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://github.com/KailashSatkuri-warangal",
    "https://www.linkedin.com/in/satkuri-kailash/",
    "https://medium.com/@satkurikailash",
    "https://leetcode.com/u/satkuri_Kailash/"
  ],
  "knowsAbout": ["React", "Next.js", "Django", "Python", "Machine Learning", "AI", "Cybersecurity"],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "SR University"
  }
};

export default function Home({ blogs }) {
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowParticles(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, [loading]);

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {loading && <Loader />}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }} ref={containerRef}>
        <Head>
          <title>Satkuri Kailash | Full Stack Developer & AI Engineer</title>
          <meta name="description" content="Portfolio of Satkuri Kailash — Full Stack Developer & AI/ML Engineer from Warangal. 17+ production projects in React, Django, Python, and Machine Learning." />
          <meta name="keywords" content="Satkuri Kailash, Full Stack Developer, AI Engineer, React, Django, Python, Machine Learning, Portfolio, NexHireAI, Cybersecurity" />
          <meta name="author" content="Satkuri Kailash" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Satkuri Kailash | Full Stack Developer & AI Engineer" />
          <meta property="og:description" content="17+ production projects in React, Django, Python, and Machine Learning. Open to opportunities." />
          <meta property="og:url" content="https://kailash-portfolio.vercel.app" />
          <meta property="og:image" content="/Profile/meta.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Satkuri Kailash | Full Stack Developer" />
          <meta name="twitter:description" content="17+ production projects. React, Django, Python, ML." />

          {/* Structured Data */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

          <link rel="canonical" href="https://kailash-portfolio.vercel.app" />
        </Head>

        {showParticles && <SpatialBackground />}

        <Navbar />
        <div className="section-container">
          <Profile />
          <div className="reveal"><About /></div>
          <div className="reveal"><Skills /></div>
          <div className="reveal"><Experience /></div>
          <div className="reveal"><Projects /></div>
          <div className="reveal"><Certifications /></div>
          <div className="reveal"><Blogs blogs={blogs} /></div>
          <div className="reveal"><Contact /></div>
        </div>
        <Footer />

        {/* Back to Top */}
        <button
          className={`back-to-top ${showTop ? 'show' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </>
  );
}
