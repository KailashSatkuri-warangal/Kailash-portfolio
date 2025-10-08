import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import particleOptions from "../utils/particles.json";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import styles from "../styles/About.module.css";
import Github from "../components/Github/Github";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

function AboutPage() {
	const [showParticles, setShowParticles] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowParticles(true);
		}, 500); // delay to ensure the page is rendered

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={styles.page_container}>
			{showParticles && (
				<Particles
					id="tsparticles"
					options={particleOptions}
					style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}
				/>
			)}
			<Navbar />
			<div id="about" className={styles.about}>
				<h1>About Me</h1>
				<div className={styles.about_section}>
					<p>
						I&apos;m a passionate Full Stack Developer with a love for building creative and functional web applications. My journey into the world of coding began with a fascination for how technology can be used to solve real-world problems. I thrive on turning complex ideas into simple, elegant solutions.
						<br />
						<br />
						My expertise spans the entire development stack, from crafting beautiful and intuitive user interfaces with modern frontend frameworks like React, to building robust and scalable backend systems with Node.js. I&apos;m a firm believer in the power of open-source and actively contribute to various projects. You can explore my work and contributions on my{" "}
						<a href="https://github.com/KailashSatkuri-warangal" target="_blank" rel="noreferrer">
							GitHub profile
						</a>.
						<br />
						<br />
						When I&apos;m not coding, I enjoy sharing my knowledge and learning from others. I write technical articles on{" "}
						<a href="https://medium.com/@satkurikailash" target="_blank" rel="noreferrer">
							Medium
						</a>, covering topics from the latest web technologies to my personal coding experiences. I&apos;m also an avid problem-solver, constantly honing my skills on platforms like{" "}
						<a href="https://leetcode.com/u/satkuri_Kailash/" target="_blank" rel="noreferrer">
							LeetCode
						</a>. I&apos;m always eager to learn, grow, and take on new challenges.
					</p>
				</div>
			</div>
			<Github />
			<Footer />
		</div>
	);
}

export default AboutPage;
