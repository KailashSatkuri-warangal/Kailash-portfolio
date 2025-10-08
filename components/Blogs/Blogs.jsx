import styles from '../../styles/Blogs.module.css';
import Card from './Card/Card';

function Blogs({ blogs }) {
	return (
		<div className={styles.blogs} id="blogs">
			<h1>My Blogs</h1>
			<p>
				I feel so good writing technology related articles. You can find all of my blogs at{' '}
				<a
					href="https://medium.com/@satkurikailash"
					target="_blank"
					rel="noreferrer"
				>
					Medium.com | Satkuri Kailash
				</a>
				.<br />
				These are some of the blogs that I have written.
			</p>

			<div className={styles.blogs_section}>
				{blogs &&
					blogs.map((blog, index) => (
						<Card
							key={index}
							name={blog.title}
							image={blog.image}
							link={blog.link}
							date={blog.pubDate}
						/>
					))}
			</div>
		</div>
	);
}

export default Blogs;
