import styles from '../../../styles/Blogs.module.css';

function Card({ image, name, link, date }) {
	return (
		<div className={styles.card_container}>
			<div className={styles.card}>
				<div className={styles.card_front}>
					<div
						className={styles.image_container}
						style={{ backgroundImage: `url(${image})` }}
					></div>
					<div className={styles.card_name_container}>
						<h3>{name}</h3>
					</div>
				</div>

				<div className={styles.card_back}>
					<div className={styles.text_container}>
						<h3>{name}</h3>
						<p>Published on: {date.split(' ')[0]}</p>
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							className={styles.read_more}
						>
							Read Full Blog
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
