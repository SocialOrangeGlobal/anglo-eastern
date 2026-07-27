import React from 'react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.subtitle}>GET IN TOUCH</span>
          <h2 className={styles.title}>Benefit from our experience and scale</h2>
          <button className={styles.button}>
            TALK TO US TODAY
          </button>
        </div>
      </div>
    </section>
  );
}
