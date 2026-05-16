import React from 'react';
import styles from '../../../styles/Card.module.css';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Card = ({ index, name, description, image, github, hosted, host_link }) => {
	return (
		<motion.div
			className={styles.card_container}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: index * 0.08 }}
			viewport={{ once: true }}
		>
			<div className={styles.card}>
				<div className={styles.card_front}>
					<Image
						src={image}
						alt={name}
						className={styles.card_image}
						width={400}
						height={200}
					/>
					<div className={styles.card_name}>{name}</div>
				</div>
				<div className={styles.card_back}>
					<p>{description}</p>
					<div className={styles.card_links}>
						{github && (
							<a href={github} target="_blank" rel="noreferrer" aria-label={`${name} GitHub`} onClick={(e) => e.stopPropagation()}>
								<FaGithub />
							</a>
						)}
						{hosted && host_link && (
							<a href={host_link} target="_blank" rel="noreferrer" aria-label={`${name} Live`} onClick={(e) => e.stopPropagation()}>
								<FaExternalLinkAlt />
							</a>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Card;
