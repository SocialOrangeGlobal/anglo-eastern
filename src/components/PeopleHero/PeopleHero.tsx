import React from 'react';
import styles from './PeopleHero.module.css';

export default function PeopleHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.breadcrumb}>HOME</p>
          <h1 className={styles.title}>OUR PEOPLE</h1>
        </div>
      </div>
    </section>
  );
}
