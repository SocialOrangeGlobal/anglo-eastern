import React from 'react';
import styles from './TechnologySplitSections.module.css';

export default function TechnologySplitSections() {
  return (
    <div className={styles.splitContainer}>
      {/* Section 1 */}
      <section className={styles.splitSection}>
        <div className={styles.imageHalf}>
          <img src="https://assets.angloeastern.com/assets/2026/04/Bridge-Rm-2_edited.webp-scaled.webp" alt="Training Room" className={styles.image} />
        </div>
        <div className={styles.textHalf}>
          <div className={styles.textContent}>
            <h2 className="h2">Training for technology excellence</h2>
            <p className="p-large">
              Anglo-Eastern is investing in our people, providing access to technology training and development programmes for seafarers to manage highly sophisticated newbuilding tonnage safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={`${styles.splitSection} ${styles.reverse}`}>
        <div className={styles.imageHalf}>
          <img src="https://assets.angloeastern.com/assets/2026/04/Bridge-Rm-2_edited.webp-scaled.webp" alt="Decarbonisation Training" className={styles.image} />
        </div>
        <div className={styles.textHalf}>
          <div className={styles.textContent}>
            <h2 className="h2">Technology for decarbonisation-ready dual-fuel fleet</h2>
            <p className="p-large">
              With 100+ dual-fuel vessels expected to enter Anglo-Eastern's managed fleet by 2027, our focus on integrated digital solutions is ensuring a smooth transition to the fuels of the future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
