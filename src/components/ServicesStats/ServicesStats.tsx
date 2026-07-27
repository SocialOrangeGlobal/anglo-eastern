import React from 'react';
import styles from './ServicesStats.module.css';

export default function ServicesStats() {
  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.statItem}>
          <h2 className={styles.statValue}>1,200+</h2>
          <p className={styles.statLabel}>Vessels in crew management</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statValue}>100+</h2>
          <p className={styles.statLabel}>Offices worldwide</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statValue}>30+</h2>
          <p className={styles.statLabel}>Training centers</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statValue}>39,000+</h2>
          <p className={styles.statLabel}>Seafarers at sea and ashore</p>
        </div>
      </div>
    </section>
  );
}
