import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Loader.module.css'

function Loader() {
    return (
        <div className={styles.loader}>
            <Image src="/Loader/loader.svg" width={100} height={100} ></Image>
        </div>
    )
}

export default Loader
