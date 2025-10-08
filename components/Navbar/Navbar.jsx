import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import smoothScroll from '../../utils/smoothScroll.js';

function Navbar() {
	const router = useRouter();
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setScrolled] = useState(false);

	async function linkClicked(e) {
		e.preventDefault();
		const url = e.currentTarget.getAttribute('href');
		setMobileMenuOpen(false);

		if (router.pathname !== '/') {
			await router.push('/' + url);
			return;
		}

		try {
			await smoothScroll(url);
		} catch (err) {
			console.warn(err.message);
			const justHash = url.split('#')[1];
			const element = document.getElementById(justHash);
			if (element) element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (router.asPath.includes('#')) {
			const id = router.asPath.split('#')[1];
			const element = document.getElementById(id);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' });
				}, 100);
			}
		}
	}, [router.asPath]);

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [router.pathname]);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
				<span><p>Satkuri Kailash</p></span>

				<button
					className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
					type="button"
					onClick={toggleMobileMenu}
					aria-expanded={isMobileMenuOpen}
					aria-label="Toggle navigation menu"
				>
					<i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
				</button>

				<ul className={`${styles.navList} ${isMobileMenuOpen ? styles.active : ''}`}>
					<li><Link href="/"><a><i className="fas fa-home hidden_in_desktop"></i> Home</a></Link></li>
					<li><Link href="/about"><a><i className="fas fa-info-circle hidden_in_desktop"></i> About</a></Link></li>
					<li><Link href="/contact"><a><i className="fas fa-envelope hidden_in_desktop"></i> Contact</a></Link></li>

					{router.pathname === '/' && (
						<>
							<li><a onClick={linkClicked} href="#profile"><i className="fas fa-user-circle hidden_in_desktop"></i> Profile</a></li>
							<li><a onClick={linkClicked} href="#skills"><i className="fas fa-code hidden_in_desktop"></i> Skills</a></li>
							<li><a onClick={linkClicked} href="#experience"><i className="fas fa-briefcase hidden_in_desktop"></i> Experience</a></li>
							<li><a onClick={linkClicked} href="#projects"><i className="fas fa-cubes hidden_in_desktop"></i> Projects</a></li>
							<li><a onClick={linkClicked} href="#blogs"><i className="fas fa-feather-alt hidden_in_desktop"></i> Blogs</a></li>
						</>
					)}

					<li>
						<a
							href="https://www.patreon.com/c/kailash524"
							className={styles.sponsorButton}
							target="_blank"
							rel="noreferrer"
							title="Support me on Patreon"
						>
							<i className="fas fa-heart"></i> Sponsor
						</a>
					</li>
				</ul>
			</nav>

			{/* Overlay for mobile menu */}
			{isMobileMenuOpen && (
				<div className={`${styles.overlay} ${styles.active}`} onClick={toggleMobileMenu}></div>
			)}
		</>
	);
}

export default Navbar;
