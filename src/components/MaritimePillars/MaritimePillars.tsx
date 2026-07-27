import React from 'react';
import styles from './MaritimePillars.module.css';

const pillars = [
  {
    title: 'Integrity and excellence',
    image: 'https://assets.angloeastern.com/assets/2025/12/Integrity-and-excellence.webp',
  },
  {
    title: 'Innovation',
    image: 'https://assets.angloeastern.com/assets/2025/12/Innovation.webp',
  },
  {
    title: 'Safety and environmental responsibility',
    image: 'https://assets.angloeastern.com/assets/2025/12/Safety-and-environmental-responsibility%E2%80%8B%E2%80%8B.webp',
  },
  {
    title: 'People development',
    image: 'https://assets.angloeastern.com/assets/2025/12/People-development%E2%80%8B.webp',
  }
];

export default function MaritimePillars() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Training pillars at Anglo-Eastern</h2>
        
        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.pillarCard}>
              <div className={styles.imageWrapper}>
                <img src={pillar.image} alt={pillar.title} className={styles.image} />
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
