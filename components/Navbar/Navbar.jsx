import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import smoothScroll from '../../utils/smoothScroll.js';

function Navbar() {
	const router = useRouter();
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setScrolled] = useState(false);

	const handleNavClick = () => {
		setMobileMenuOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
					{router.pathname !== '/' && (
						<li><Link href="/" onClick={handleNavClick}><i className="fas fa-home hidden_in_desktop"></i> Home</Link></li>
					)}
					
					{router.pathname === '/' && (
						<>
							<li><a onClick={handleNavClick} href="#profile"><i className="fas fa-home hidden_in_desktop"></i> Home</a></li>
							<li><a onClick={handleNavClick} href="#about"><i className="fas fa-info-circle hidden_in_desktop"></i> About</a></li>
							<li><a onClick={handleNavClick} href="#skills"><i className="fas fa-code hidden_in_desktop"></i> Skills</a></li>
							<li><a onClick={handleNavClick} href="#experience"><i className="fas fa-briefcase hidden_in_desktop"></i> Experience</a></li>
							<li><a onClick={handleNavClick} href="#projects"><i className="fas fa-cubes hidden_in_desktop"></i> Projects</a></li>
							<li><a onClick={handleNavClick} href="#certifications"><i className="fas fa-certificate hidden_in_desktop"></i> Certifications</a></li>
							<li><a onClick={handleNavClick} href="#blogs"><i className="fas fa-feather-alt hidden_in_desktop"></i> Blogs</a></li>
							<li><a onClick={handleNavClick} href="#contact"><i className="fas fa-envelope hidden_in_desktop"></i> Contact</a></li>
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
