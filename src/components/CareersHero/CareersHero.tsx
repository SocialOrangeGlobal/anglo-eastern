import React from 'react';
import styles from './CareersHero.module.css';

export default function CareersHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={styles.breadcrumb}>HOME</p>
        <h1 className={styles.title}>CAREERS</h1>
      </div>
    </section>
  );
}
