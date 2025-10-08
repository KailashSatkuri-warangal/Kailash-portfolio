import React from 'react'
import styles from '../../../styles/Profile.module.css'
import Image from 'next/image'

function ProfileImage() {
    return (
        <div className={styles.profileImageFrame}>
            <div className={styles.profileImage} >
                <Image src="/Profile/profile-image2.jpeg" height={320} width={300} alt="Profile Image"/>
            </div>
        </div>
    )
}

export default ProfileImage