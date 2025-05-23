import styles from '../../styles/About.module.css'
import Image from 'next/image'
import Animation from "./Animation"

function About() {
    return (
        <div id="about" className={styles.about}>
            <h1>About Me</h1>
            <div className={styles.about_section}>
                <p>
                I am extremely concerned with the issues to do with Open Source and I actively participate in various projects. At the time of writing this paper, I have created several Pull Requests on the GitHub platform. For more detail about my Open Source contributions you can visit my <a href="https://github.com/KailashSatkuri-warangal" target="_blank" without rel="noreferrer"> GitHub | Satkuri Kailash</a>. 
                    <br/>
                    <br/>In addition to coding, I enjoy technical blogging on current and upcoming technologies. All of my blogs are available on <a href="https://medium.com/@satkurikailash" target="_blank" without rel="noreferrer">Medium | Satkuri Kailash</a>, where I post articles frequently.
                    <br/>
                    <br/>I like to improve my problem solving abilities through code generation by solving questions as part of competitive programming and other questions related to Data Structures and Algorithms. This in turn assists me to get the most out of the applications that I create hence enhancing their performance and capability to cater for large traffic. My LeetCode profile <a href="https://leetcode.com/u/satkuri_Kailash/" target="_blank" without rel="noreferrer">Leetcode | Satkuri Kailash</a> shows my problem-solving ability.
                </p>
                {/* <Animation></Animation> */}
            </div>
        </div>
    )
}

export default About
