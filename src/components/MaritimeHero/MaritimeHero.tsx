import React from 'react';
import styles from './MaritimeHero.module.css';

export default function MaritimeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={styles.breadcrumb}>HOME</p>
        <h1 className={styles.title}>ANGLO-EASTERN MARITIME<br/>TRAINING</h1>
      </div>
    </section>
  );
}
