import React from 'react';
import styles from './NewsHero.module.css';

export default function NewsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.breadcrumb}>HOME / NEWS AND INSIGHTS</div>
          <h1 className={styles.title}>NEWS AND INSIGHTS</h1>
          <p className={styles.subtitle}>Anglo-Eastern's latest updates and industry perspectives.</p>
        </div>
      </div>
    </section>
  );
}
