import React from 'react';
import styles from './LatestInsightsSection.module.css';

const LatestInsightsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subtitle}>FRESH OFF THE PRESS</span>
        <h2 className={styles.heading}>Latest insights from Anglo-Eastern</h2>
      </div>

      <div className={styles.cardsContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <span className={styles.badge}>FEATURED</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://assets.angloeastern.com/assets/2026/07/Anglo-Eastern_July-2026-foresights-cover-1920X942-copy-3-927x450.jpg" 
              alt="Foresights | The changing nature" 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardText}>
            <h3 className={styles.cardTitle}>Foresights | The<br />changing nature ...</h3>
            <p className={styles.cardExcerpt}>
              The purpose of ship management has not changed. The nature of excellence has. In this thought leadership...
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <span className={styles.badge}>STORIES AT SEA</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://assets.angloeastern.com/assets/2026/07/1920X942-917x450.jpg" 
              alt="From classroom to vessel" 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardText}>
            <h3 className={styles.cardTitle}>From classroom to<br />vessel: An intern'...</h3>
            <p className={styles.cardExcerpt}>
              As part of our ongoing commitment to developing future maritime professionals, we provide...
            </p>
          </div>
        </div>
      </div>

      <button className={styles.ctaButton}>
        VIEW MORE ARTICLES
      </button>
    </section>
  );
};

export default LatestInsightsSection;
