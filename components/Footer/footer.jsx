import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	const year = new Date().getFullYear();

	const socials = [
		{ name: 'Gmail', icon: '/Contact/gmail.svg', link: 'mailto:satkurikailash@gmail.com' },
		{ name: 'LinkedIn', icon: '/Contact/linkedin.svg', link: 'https://www.linkedin.com/in/satkuri-kailash/' },
		{ name: 'Medium', icon: '/Contact/medium.svg', link: 'https://medium.com/@satkurikailash' },
		{ name: 'GitHub', icon: '/Contact/github.svg', link: 'https://github.com/KailashSatkuri-warangal' },
		{ name: 'Twitter', icon: '/Contact/twitter.svg', link: 'https://twitter.com/KailashSatkuri' },
	];

	const quickLinks = [
		{ label: 'Home', href: '#profile' },
		{ label: 'About', href: '#about' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Contact', href: '#contact' },
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className={styles.footer}>
			{/* Back to top */}
			<button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
				<i className="fas fa-arrow-up" />
			</button>

			<div className={styles.footerGrid}>
				{/* Column 1 - Brand */}
				<div className={styles.brandCol}>
					<h3 className={styles.brandName}>Kailash<span className={styles.dot}>.</span></h3>
					<p className={styles.brandTagline}>
						Full Stack Developer & AI/ML Enthusiast building digital experiences that make a difference.
					</p>
					<div className={styles.socialLinks}>
						{socials.map((s, i) => (
							<a href={s.link} key={i} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}>
								<Image src={s.icon} alt={s.name} width={20} height={20} />
							</a>
						))}
					</div>
				</div>

				{/* Column 2 - Quick Links */}
				<div className={styles.linksCol}>
					<h4 className={styles.colTitle}>Quick Links</h4>
					<ul className={styles.quickLinks}>
						{quickLinks.map((l, i) => (
							<li key={i}><a href={l.href}>{l.label}</a></li>
						))}
					</ul>
				</div>

				{/* Column 3 - Get in Touch */}
				<div className={styles.contactCol}>
					<h4 className={styles.colTitle}>Get in Touch</h4>
					<div className={styles.contactItem}>
						<i className="fas fa-envelope" />
						<a href="mailto:satkurikailash@gmail.com">satkurikailash@gmail.com</a>
					</div>
					<div className={styles.contactItem}>
						<i className="fas fa-map-marker-alt" />
						<span>Warangal, Telangana, India</span>
					</div>
					<div className={styles.contactItem}>
						<i className="fas fa-briefcase" />
						<span>Open for Opportunities</span>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className={styles.bottomBar}>
				<p className={styles.copyright}>© {year} Satkuri Kailash. All rights reserved.</p>
				<div className={styles.bottomLinks}>
					<Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
					<span className={styles.separator}>·</span>
					<a href="#projects" className={styles.bottomLink}>Portfolio</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
