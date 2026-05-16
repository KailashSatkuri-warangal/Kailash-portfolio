import styles from '../../styles/Profile.module.css'
import ProfileImage from './ProfileImage/ProfileImage'
import ProfileText from './ProfileText/ProfileText'

function Profile() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.profile} id="profile">
            <div className={styles.profileContent}>
                <div className={styles.imageWrapper}>
                    <ProfileImage />
                    <span className={styles.statusBadge}>
                        <span className={styles.statusDot}></span>
                        Open to Work
                    </span>
                </div>
                <ProfileText />
            </div>
            <button className={styles.scrollIndicator} onClick={scrollToAbout} aria-label="Scroll down">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>
    )
}

export default Profile;
