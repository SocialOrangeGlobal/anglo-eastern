import React from 'react';
import styles from './CareersStats.module.css';

export default function CareersStats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <p className={styles.subtitle}>GROW YOUR CAREER</p>
          <h2 className={styles.title}>
            Join us in shaping a better<br />
            maritime future
          </h2>
          <p className={styles.description}>
            From on shore to offshore, our people are the core of Anglo-Eastern 
            and we take great pride in our ability to work together to 
            progressively set the standard in an industry as dynamic as ours. 
            Interested to start your voyage with us?
          </p>
          <a href="#openings" className={styles.ctaButton}>
            VIEW CURRENT OPENINGS
          </a>
        </div>
        
        <div className={styles.rightContent}>
          <div className={styles.statGrid}>
            <div className={styles.statItem}>
              <h3 className={styles.statValue}>30</h3>
              <p className={styles.statLabel}>Offices Globally</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statValue}>65+</h3>
              <p className={styles.statLabel}>Nationalities</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statValue}>2.2K+</h3>
              <p className={styles.statLabel}>On shore employees<br/>worldwide</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statValue}>39K+</h3>
              <p className={styles.statLabel}>Active seafarers<br/>worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
