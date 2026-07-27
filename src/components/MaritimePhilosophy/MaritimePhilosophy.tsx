import React from 'react';
import styles from './MaritimePhilosophy.module.css';

export default function MaritimePhilosophy() {
  return (
    <section className={styles.philosophySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our philosophy</h2>
          <p className={styles.description}>
            We see comprehensive training as key to safe, efficient, and eco-friendly shipping. Our 
            programmes blend practical skills with real-world case studies, created with input from 
            shipboard officers, maritime experts, and regulators. This ensures every graduate is 
            ready to handle the toughest vessel operations worldwide.
          </p>
        </div>

        <div className={styles.statGrid}>
          <div className={styles.statItem}>
            <h3 className={styles.statValue}>500+</h3>
            <p className={styles.statLabel}>
              Cadets pass out of 
              Anglo-Eastern 
              Maritime Academy 
              (AEMA) every year
            </p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statValue}>15+</h3>
            <p className={styles.statLabel}>
              Years of established 
              maritime training 
              processes
            </p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statValue}>50+</h3>
            <p className={styles.statLabel}>
              Accredited Anglo-
              Eastern training 
              courses for 
              seafarers
            </p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statValue}>100%</h3>
            <p className={styles.statLabel}>
              Anglo-Eastern 
              Maritime Academy 
              placement record
            </p>
            <p className={styles.statSubLabel}>
              (Subject to the successful 
              completion of the course 
              and medical fitness)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
