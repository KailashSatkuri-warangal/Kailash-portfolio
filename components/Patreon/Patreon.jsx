import React from 'react'
import styles from "../../styles/Patreon.module.css"
import {SiPatreon} from "react-icons/si"

function Patreon() {



    return (
        <>
            <a href="https://www.patreon.com/c/kailash524" className={styles.patreon} data-patreon-widget-type="become-patron-button" target="_blank"  without rel="noreferrer" title="Support me by becoming a Patron" >
                <SiPatreon/> 
                Become a Patron!
            </a>
            <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
        </>
    )
}

export default Patreon
