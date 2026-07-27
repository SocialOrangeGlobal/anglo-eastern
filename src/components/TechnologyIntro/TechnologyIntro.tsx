import React from 'react';
import styles from './TechnologyIntro.module.css';

export default function TechnologyIntro() {
  return (
    <section className={styles.introSection}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.text}>
            Anglo-Eastern pioneers digital ship management by bringing together shipboard and shore-based systems into a connected ecosystem powered by advanced analytics, cloud platforms, and cyber-secure connectivity.
          </p>
          <p className={styles.text}>
            Across the fleet, these solutions are actively deployed - delivering real-time visibility, enabling predictive maintenance, and supporting safer, more efficient and sustainable vessel performance.
          </p>
        </div>
      </div>
    </section>
  );
}
