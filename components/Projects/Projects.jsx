import { useState } from 'react';
import Card from './Card/Card';
import ProjectModal from './ProjectModal/ProjectModal';
import styles from '../../styles/Projects.module.css';
import { ProjectsList } from '../../data/Projects';

function Projects() {
	const [filter, setFilter] = useState('ml');
	const [selectedProject, setSelectedProject] = useState(null);

	const handleFilterChange = (newFilter) => setFilter(newFilter);
	const handleProjectClick = (project) => setSelectedProject(project);
	const handleCloseModal = () => setSelectedProject(null);

	const filteredProjects = ProjectsList.filter((project) =>
		filter === 'all' ? true : project.type === filter
	);

	return (
		<div className={styles.projects} id="projects">
			<h1>Projects</h1>
			<p>
				These are the projects I&apos;ve worked on, both independently and as part of my university work, over the past few months.
			</p>

			<div className={styles.filter_buttons}>
				{['all', 'frontend', 'ml', 'android'].map((type) => (
					<button
						key={type}
						onClick={() => handleFilterChange(type)}
						className={filter === type ? styles.active : ''}
					>
						{type === 'ml' ? 'ML' : type.charAt(0).toUpperCase() + type.slice(1)}
					</button>
				))}
			</div>

			<div className={styles.projects_section}>
				{filteredProjects.map((project, index) => (
					<div key={index} onClick={() => handleProjectClick(project)}>
						<Card
							index={index}
							name={project.name}
							description={project.description}
							image={project.image}
							github={project.github}
							hosted={project.hosted}
							host_link={project.host_link || ''}
						/>
					</div>
				))}
			</div>

			<div className={styles.more_button_container}>
				<a
					href="https://github.com/KailashSatkuri-warangal"
					title="Kailash"
					target="_blank"
					rel="noreferrer"
					className={styles.more_button}
				>
					See All Projects
				</a>
			</div>

			{selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
		</div>
	);
}

export default Projects;
