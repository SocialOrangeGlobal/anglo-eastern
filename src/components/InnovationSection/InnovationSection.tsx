import React from 'react';
import styles from './InnovationSection.module.css';

export default function InnovationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.contentColumn}>
        <span className={styles.subtitle}>INNOVATION</span>
        <h2 className={styles.heading}>Fueling the future</h2>
        <p className={styles.paragraph}>
          From LNG to LPG, Ammonia-ready and hydrogen, alternative fuel management and deployment of dual-fuel vessels are a key part of decarbonisation efforts and are now an embedded part of our long-term strategy.
        </p>
        <button className={styles.ctaButton}>
          LEARN MORE ABOUT OUR DUAL-FUEL VESSELS
        </button>
      </div>
      <div className={styles.imageColumn}>
        <div className={styles.placeholderImage}></div>
      </div>
    </section>
  );
}
