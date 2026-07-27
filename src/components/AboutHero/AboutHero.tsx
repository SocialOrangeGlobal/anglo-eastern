import React from 'react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Pioneers in global ship management</h1>
          <p className={styles.subtitle}>
            Anglo-Eastern is a leading global provider of independent ship management services, with 50 years of experience and a track record of consistently setting the standard for the industry.
          </p>
        </div>
      </div>
    </section>
  );
}
