import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	const text = `© ${new Date().getFullYear()} Kailash. All rights reserved.`;
	const links = [
		{
			name: 'Gmail',
			icon: '/Contact/gmail.svg',
			link: 'mailto:satkurikailash@gmail.com'
		},
		{
			name: 'LinkedIn',
			icon: '/Contact/linkedin.svg',
			link: 'https://www.linkedin.com/in/satkuri-kailash/'
		},
		{
			name: 'Medium',
			icon: '/Contact/medium.svg',
			link: 'https://medium.com/@satkurikailash'
		},
		{
			name: 'GitHub',
			icon: '/Contact/github.svg',
			link: 'https://github.com/Kailash-S-Linax'
		},
		{
			name: 'Twitter',
			icon: '/Contact/twitter.svg',
			link: 'https://twitter.com/KailashSatkuri'
		},
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.getInTouch}>
					<h2>Get in touch</h2>
					<p>If you&apos;ve got a project in mind, why not get in touch? Let&apos;s work together.</p>
				</div>
				<div className={styles.socialLinks}>
					{links.map((link, index) => (
						<a href={link.link} key={index} target="_blank" rel="noreferrer" aria-label={link.name}>
							<Image src={link.icon} alt={link.name} width={24} height={24} />
						</a>
					))}
				</div>
				<p className={styles.animatedText}>
					{text.split('').map((char, index) => (
						<span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
							{char === ' ' ? '\u00A0' : char}
						</span>
					))}
				</p>
				<div className={styles.footerLinks}>
					<Link href="/about" passHref><a className={styles.link}>About</a></Link>
					<Link href="/contact" passHref><a className={styles.link}>Contact</a></Link>
					<Link href="/privacy" passHref><a className={styles.link}>Privacy Policy</a></Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
