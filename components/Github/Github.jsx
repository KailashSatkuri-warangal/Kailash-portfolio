import React, { useState, useEffect } from "react";
import styles from "../../styles/Github.module.css";
import Image from 'next/image';
const Github = ({ username = "KailashSatkuri-warangal" }) => {
	const [flipped, setFlipped] = useState(false);
	const [user, setUser] = useState(null);
	const [repos, setRepos] = useState([]);
	const [topLanguages, setTopLanguages] = useState([]);
	const [totalStars, setTotalStars] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	const handleFlip = () => setFlipped(!flipped);
	const toggleModal = (e) => {
		e.stopPropagation(); // prevent flipping when clicking
		setModalOpen(!modalOpen);
	};

	useEffect(() => {
		const fetchGithubData = async () => {
			try {
				const userRes = await fetch(`https://api.github.com/users/${username}`);
				const userData = await userRes.json();
				setUser(userData);

				const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
				const repoData = await reposRes.json();
				setRepos(repoData);

				// Languages
				const langCount = {};
				let stars = 0;
				repoData.forEach((r) => {
					if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
					stars += r.stargazers_count;
				});
				const sortedLangs = Object.entries(langCount)
					.sort((a, b) => b[1] - a[1])
					.map((l) => l[0])
					.slice(0, 5);
				setTopLanguages(sortedLangs);
				setTotalStars(stars);
			} catch (err) {
				console.error("GitHub fetch error:", err);
			}
		};
		fetchGithubData();
	}, [username]);

	if (!user) return <p className={styles.loading}>Loading GitHub data...</p>;

	// Top 3 repos
	const top3 = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
	const remainingRepos = repos.filter((r) => !top3.includes(r));

	return (
		<section className={styles.githubSection} id="github">
			<h2 className={styles.githubTitle}>
				<i className="fab fa-github"></i> GitHub Dashboard
			</h2>

			<div className={`${styles.githubCard} ${flipped ? styles.flipped : ""}`} onClick={handleFlip}>
				<div className={styles.githubCardInner}>
					{/* Front */}
					<div className={styles.githubCardFront}>
						<Image 
								src={user.avatar_url} 
								alt={user.login} 
								width={150} 
								height={150} 
								className={styles.githubAvatar} 
							/>

						<h3>{user.name || user.login}</h3>
						<p>{user.bio}</p>
						<p>📍 {user.location || "Unknown"}</p>
						<p>Repos: {user.public_repos} | Followers: {user.followers} | Following: {user.following}</p>
						<a href={user.html_url} target="_blank" rel="noreferrer" className={styles.githubProfileLink}>
							View Profile
						</a>
						<p className={styles.githubInstruction}>Click to flip →</p>
					</div>

					{/* Back */}
					<div className={styles.githubCardBack}>
						<h3>Top Languages</h3>
						<ul className={styles.langList}>
							{topLanguages.length === 0 ? <li>None</li> : topLanguages.map((lang) => <li key={lang}>{lang}</li>)}
						</ul>

						<h3>Total Stars ⭐ {totalStars}</h3>
						<h3>Top Repositories</h3>
						<ul className={styles.topRepos}>
							{top3.map((repo) => (
								<li key={repo.id}>
									<a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.repoBtn}>
										{repo.name} ⭐ {repo.stargazers_count}
									</a>
									<a
										href={`https://github.com/${username}/${repo.name}/stargazers`}
										target="_blank"
										rel="noreferrer"
										className={styles.starBtn}
										onClick={(e) => e.stopPropagation()}
									>
										🌟 Star
									</a>
								</li>
							))}
						</ul>
						{remainingRepos.length > 0 && (
							<button className={styles.showMoreBtn} onClick={toggleModal}>
								View More Repos ({remainingRepos.length})
							</button>
						)}
						<p className={styles.githubInstruction}>← Click to flip back</p>
					</div>
				</div>
			</div>

			{/* Modal for all remaining repos */}
			{modalOpen && (
	<div className={styles.modalOverlay} onClick={toggleModal}>
		<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
			<button className={styles.closeModalBtn} onClick={toggleModal}>
				×
			</button>
			<h3>All Repositories</h3>
			<div className={styles.repoGrid}>
				{remainingRepos.map((repo) => (
					<div key={repo.id} className={styles.repoCard}>
						<a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.repoLink}>
							{repo.name}
						</a>
						<p>⭐ {repo.stargazers_count}</p>
						<a
							href={`https://github.com/${username}/${repo.name}/stargazers`}
							target="_blank"
							rel="noreferrer"
							className={styles.starBtn}
						>
							🌟 Star
						</a>
					</div>
				))}
			</div>
		</div>
	</div>
)}

		</section>
	);
};

export default Github;
