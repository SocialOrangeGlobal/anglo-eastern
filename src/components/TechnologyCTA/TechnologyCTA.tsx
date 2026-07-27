import React from 'react';
import styles from './TechnologyCTA.module.css';

export default function TechnologyCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Optimise your fleet with proven technology</h2>
          <p className={styles.subtitle}>
            Speak to our team to request a proposal today.
          </p>
          <a href="/contact-us" className={styles.btn}>CONTACT US &raquo;</a>
        </div>
      </div>
    </section>
  );
}
