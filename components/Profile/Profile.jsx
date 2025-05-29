import styles from '../../styles/Profile.module.css'
import ProfileImage from './ProfileImage/ProfileImage'
import ProfileText from './ProfileText/ProfileText'

function Profile() {
    return (
        <div className={styles.profile} id="profile">
            <ProfileImage></ProfileImage>
            <ProfileText></ProfileText>
        </div>
    )
}

export default Profile;
