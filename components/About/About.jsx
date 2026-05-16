import styles from '../../styles/About.module.css';

function About() {
	return (
		<div className={`${styles.page_container} section-spacing`}>
			<div id="about" className={`${styles.about} glass-panel`} style={{ padding: '2rem', width: '100%' }}>
				<h1>About Me</h1>
				
				<p className={styles.intro}>
					Full Stack Developer & AI/ML Enthusiast from Warangal, Telangana. I build end-to-end web apps and intelligent systems — from AI recruitment platforms to cybersecurity frameworks. 17+ projects deployed in production.
				</p>

				<div className={styles.grid}>
					{/* Education */}
					<div className={styles.card}>
						<h3><i className="fas fa-graduation-cap" /> Education</h3>
						<div className={styles.timeline}>
							<div className={styles.timelineItem}>
								<span className={styles.year}>2022 – 2026</span>
								<strong>B.Tech – CSE (CGPA: 8.5)</strong>
								<span className={styles.school}>SR University, Warangal</span>
							</div>
							<div className={styles.timelineItem}>
								<span className={styles.year}>2020 – 2022</span>
								<strong>Intermediate – MPC (70%)</strong>
								<span className={styles.school}>Sri Chaitanya Jr Kalasala, Ranga Reddy</span>
							</div>
							<div className={styles.timelineItem}>
								<span className={styles.year}>2020</span>
								<strong>SSC – 10th Standard (CGPA: 10)</strong>
								<span className={styles.school}>Sree Chaitanya High School, Warangal</span>
							</div>
						</div>
					</div>

					{/* Quick Facts */}
					<div className={styles.card}>
						<h3><i className="fas fa-bolt" /> Quick Facts</h3>
						<ul className={styles.facts}>
							<li><i className="fas fa-code" /> React, Next.js, Django, Node.js, Python</li>
							<li><i className="fas fa-cloud" /> AWS & Azure certified</li>
							<li><i className="fas fa-brain" /> Machine Learning & Generative AI</li>
							<li><i className="fas fa-shield-alt" /> LLM Security & Red Teaming</li>
							<li><i className="fas fa-pen-fancy" /> Technical writer on Medium</li>
							<li><i className="fas fa-briefcase" /> Open for opportunities</li>
						</ul>
					</div>
				</div>

				{/* Links */}
				<div className={styles.links}>
					<a href="https://github.com/KailashSatkuri-warangal" target="_blank" rel="noreferrer"><i className="fab fa-github" /> GitHub</a>
					<a href="https://medium.com/@satkurikailash" target="_blank" rel="noreferrer"><i className="fab fa-medium" /> Medium</a>
					<a href="https://leetcode.com/u/satkuri_Kailash/" target="_blank" rel="noreferrer"><i className="fas fa-code" /> LeetCode</a>
					<a href="https://www.linkedin.com/in/satkuri-kailash/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /> LinkedIn</a>
				</div>
			</div>
		</div>
	);
}

export default About;
