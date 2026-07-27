import React from 'react';
import styles from './TechnologyHero.module.css';

export default function TechnologyHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>SHIP MANAGEMENT TECHNOLOGY SOLUTIONS</h1>
        </div>
      </div>
    </section>
  );
}
