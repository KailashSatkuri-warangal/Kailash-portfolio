import styles from '../../styles/Profile.module.css'
import ProfileImage from './ProfileImage/ProfileImage'
import ProfileText from './ProfileText/ProfileText'

function Profile() {
    return (
        <div className={styles.profile} id="profile">
            <div className={styles.profileContent}>
                <ProfileImage></ProfileImage>
                <ProfileText></ProfileText>
            </div>
        </div>
    )
}

export default Profile;
