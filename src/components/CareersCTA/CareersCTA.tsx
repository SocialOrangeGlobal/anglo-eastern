import React from 'react';
import styles from './CareersCTA.module.css';

export default function CareersCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <p className={styles.subtitle}>ABOUT US</p>
        <h2 className={styles.title}>Understand who we are and what we stand for</h2>
        <a href="#about" className={styles.ctaButton}>
          VIEW DETAILS
        </a>
      </div>
    </section>
  );
}
