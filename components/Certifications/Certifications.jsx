import { useState } from 'react';
import styles from '../../styles/Certifications.module.css';
import { CertificationsList } from '../../data/Certifications';

function Certifications() {
    const [filter, setFilter] = useState('ai');
    const [selectedBadge, setSelectedBadge] = useState(null);

    const filtered = filter === 'all'
        ? CertificationsList
        : CertificationsList.filter(c => c.category === filter);

    return (
        <div className={`${styles.certifications} glass-panel section-spacing`} id="certifications">
            <h1>Certifications & Badges</h1>
            <p>39 verified professional credentials from Google Cloud, AWS, Cisco, Meta, IBM, Coursera &amp; more.</p>

            <div className={styles.filters}>
                {[
                    ['all', 'All'],
                    ['ai', 'AI / GenAI'],
                    ['dev', 'Development'],
                    ['cloud', 'Cloud'],
                    ['network', 'Networking'],
                    ['security', 'Security'],
                    ['data', 'Data'],
                ].map(([key, label]) => (
                    <button
                        key={key}
                        onClick={() => setFilter(key)}
                        className={filter === key ? styles.activeFilter : ''}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filtered.map((cert, i) => (
                    <div key={i} className={styles.card} onClick={() => setSelectedBadge(cert)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={cert.image} alt={cert.title} className={styles.badgeImg} />
                        <div className={styles.info}>
                            <h3>{cert.title}</h3>
                            <span className={styles.issuer}>{cert.issuer}</span>
                            <span className={styles.date}>{cert.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Preview Modal */}
            {selectedBadge && (
                <div className={styles.modalBackdrop} onClick={() => setSelectedBadge(null)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedBadge(null)}>&times;</button>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={selectedBadge.image} alt={selectedBadge.title} className={styles.modalImg} />
                        <div className={styles.modalBody}>
                            <h2>{selectedBadge.title}</h2>
                            <span className={styles.modalIssuer}>{selectedBadge.issuer} · {selectedBadge.date}</span>
                            <p>{selectedBadge.description}</p>
                            {selectedBadge.link && (
                                <a href={selectedBadge.link} target="_blank" rel="noreferrer" className={styles.viewLink}>
                                    View on Coursera →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Certifications;
