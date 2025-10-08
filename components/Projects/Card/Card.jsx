import React from 'react';
import styles from '../../../styles/Card.module.css';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';

const Card = ({ index, name, description, image, github, hosted, host_link }) => {
	return (
		<div className={styles.card_container}>
			<div className={styles.card}>
				<div className={styles.card_front}>
					<Image src={image} alt={name} className={styles.card_image} width={400} height={300} />
					<div className={styles.card_name}>{name}</div>
				</div>
				<div className={styles.card_back}>
					<p>{description}</p>
					<div className={styles.card_links}>
						{github && (
							<a href={github} target="_blank" rel="noreferrer" aria-label={`${name} GitHub`}>
								<FaGithub />
							</a>
						)}
						{hosted && host_link && (
							<a href={host_link} target="_blank" rel="noreferrer" aria-label={`${name} Live`}>
								<FaLink />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
