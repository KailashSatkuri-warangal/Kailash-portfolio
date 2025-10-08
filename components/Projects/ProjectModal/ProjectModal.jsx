import React from 'react';
import styles from '../../../styles/ProjectModal.module.css';
import Image from 'next/image';

const ProjectModal = ({ project, onClose }) => {
	if (!project) return null;

	return (
		<div className={styles.modal_backdrop} onClick={onClose}>
			<div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
				<button className={styles.close_button} onClick={onClose} aria-label="Close Modal">
					&times;
				</button>

				<Image src={project.image} alt={project.name} className={styles.modal_image} width={600} height={400} />

				<div className={styles.modal_body}>
					<div className={styles.modal_grid}>
						{/* Main Content */}
						<div className={styles.main_content}>
							<h2>{project.name}</h2>
							<p>{project.details}</p>
						</div>

						{/* Sidebar */}
						<div className={styles.sidebar}>
							<h3>Skills Used</h3>
							<div className={styles.tags_container}>
								{project.tags && project.tags.map((tag, index) => (
									<span key={index} className={styles.tag}>{tag}</span>
								))}
							</div>
						</div>
					</div>

					{/* Footer */}
					<div className={styles.modal_footer}>
						<div className={styles.rating_section}>
							<div className={styles.stars}>
								{[...Array(5)].map((_, i) => (
									<span key={i} className={i < project.rating ? styles.filled_star : styles.empty_star}>&#9733;</span>
								))}
							</div>
							<span className={styles.likes}>{project.likes} likes</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
