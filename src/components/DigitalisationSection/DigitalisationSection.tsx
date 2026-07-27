import React from 'react';
import styles from './DigitalisationSection.module.css';

export default function DigitalisationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageColumn}>
        <div className={styles.placeholderImage}></div>
      </div>
      <div className={styles.contentColumn}>
        <span className={styles.subtitle}>DIGITALISATION</span>
        <h2 className={styles.heading}>Providing transparency through technology</h2>
        <p className={styles.paragraph}>
          We are committed to leveraging technology to optimise performance, increase efficiency, drive collaboration and provide transparency. With the my.angloeastern client portal, our clients gain real-time access to a wealth of information, empowering them to stay informed, track fleet information and make data-driven decisions seamlessly.
        </p>
        <button className={styles.ctaButton}>
          LEARN MORE
        </button>
      </div>
    </section>
  );
}
