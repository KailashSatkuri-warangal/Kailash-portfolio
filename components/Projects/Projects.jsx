import Card from './Card/Card'
import styles from '../../styles/Projects.module.css'
import {ProjectsList} from '../../data/Projects'

function Projects() {

    return (
        <div className={styles.projects} id="projects">
            <h1>Projects</h1>
            <p>These are the projects I have worked on, both independently and as part of my university work, over the past few months.</p>
            <div className={styles.projects_section}>
            {ProjectsList.map((project,index) =>
                <Card
                    key = {index}
                    index = {index}
                    name = {project.name}
                    description = {project.description}
                    image = {project.image}
                    github = {project.github}
                    hosted = {project.hosted}
                    host_link = {project.host_link || ''}                
                />)}
            </div>
            <div className={styles.more_button_container}>
                <a href="https://github.com/KailashSatkuri-warangal" title="Kailash" target="_blank" without rel="noreferrer" className={styles.more_button} >See All Projects</a>
            </div>
        </div>
    )
}

export default Projects
