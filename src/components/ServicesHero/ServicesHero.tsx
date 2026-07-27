import React from 'react';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.breadcrumb}>HOME</p>
          <h1 className={styles.title}>SERVICES</h1>
        </div>
      </div>
    </section>
  );
}
