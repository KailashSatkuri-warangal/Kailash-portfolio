import React from 'react';
import styles from './SpatialBackground.module.css';

// Only 12 particles instead of 30 — much lighter
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 8.3) % 100}%`,
  top: `${(i * 13.7) % 100}%`,
  size: `${(i % 3) + 1}px`,
  delay: `${i * 1.5}s`,
  duration: `${12 + (i % 5) * 2}s`,
}));

export default function SpatialBackground() {
  return (
    <div className={styles.spatialContainer}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.gridOverlay} />
      <div className={styles.particles}>
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={styles.particle}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
