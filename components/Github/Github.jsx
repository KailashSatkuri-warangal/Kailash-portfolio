import React from 'react'
import styles from "../../styles/github.module.css"
import {SiGithub} from "react-icons/si"

function Github() {



    return (
        <>
            <a href="https://github.com/KailashSatkuri-warangal" className={styles.Github} 
            data-patreon-widget-type="become-patron-button" target="_blank"  without rel="noreferrer" 
            title="GitHub Visit Now!" >
                <SiGithub/> 
                GitHub!
            </a>
            <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
        </>
    )
}

export default Github
