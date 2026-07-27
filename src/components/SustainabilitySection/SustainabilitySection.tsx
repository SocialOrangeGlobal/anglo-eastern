import React from 'react';
import styles from './SustainabilitySection.module.css';

const SustainabilitySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentColumn}>
        <span className={styles.subtitle}>SUSTAINABILITY</span>
        <h2 className={styles.heading}>Charting sustainable seas</h2>
        <p className={styles.paragraph}>
          From reduced carbon emissions to higher attention on crew welfare, there are heartening developments re-shaping the industry for which we intend to be stewards of change.
        </p>
        <button className={styles.ctaButton}>
          LEARN MORE ABOUT OUR SUSTAINABLE BEST PRACTICES
        </button>
      </div>
      <div className={styles.imageColumn}>
        <div className={styles.placeholderImage}></div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
