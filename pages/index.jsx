import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Particles from "react-tsparticles";
import particleOptions from "../utils/particles.json";

import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";
import Github from "../components/Github/Github";
import Footer from "../components/Footer/footer";
import Loader from "../components/Loader/Loader";
import AdBanner from "../components/banner/AdBanner";
import Meta from "../public/Profile/meta.png";

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
	const particlesContainer = useRef(null);

	useEffect(() => {
		setLoading(false);

		// Fade-in effect: start particles after 1 second
		const fadeInTimer = setTimeout(() => {
			if (particlesContainer.current) {
				const container = particlesContainer.current;
				container.options.particles.move.enable = true;
				container.options.particles.opacity.value = 0.7; // visible opacity
				container.options.particles.move.speed = 0.5; // gentle movement
				container.refresh();
			}
		}, 1000);

		return () => clearTimeout(fadeInTimer);
	}, []);

	return !loading ? (
		<>
			<Head>
				<title>Satkuri Kailash</title>
				<meta name="description" content="Hey, a Full Stack Developer here" />
				<meta property="og:title" content="Satkuri Kailash" />
				<meta property="keywords" content="Satkuri Kailash Portfolio" />
				<meta property="og:image" content={Meta} />
			</Head>

			{/* Gentle particles */}
			<Particles
				id="tsparticles"
				options={particleOptions}
				init={(main) => console.log("tsparticles initialized", main)}
				loaded={(container) => {
					particlesContainer.current = container;
				}}
				style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1 }}
			/>

			<Github />
			<Navbar />
			<Profile />
			<About />
			<AdBanner />
			<Skills />
			<Experience />
			<Projects />
			<AdBanner />
			<Blogs blogs={blogs} />
			<Contact />
			<Footer />
		</>
	) : (
		<Loader />
	);
}
