import React from 'react';
import Link from 'next/link';
import styles from './AboutStatsText.module.css';

export default function AboutStatsText() {
  return (
    <section className={`section-padding ${styles.statsSection}`}>
      <div className="container">
        <p className={styles.text}>
          Today, that includes 700+ vessels under full technical management, another 300 ships under crew management, and the project management to date of almost 1,000 newbuildings and conversions. Supporting our fleet are more than 39,000+ seafarers and over 2,200 shore employees, based out of our <Link href="/contact-us" className={styles.link}>Hong Kong</Link> head office and another <Link href="/contact-us" className={styles.link}>29+ locations worldwide</Link>.
        </p>
      </div>
    </section>
  );
}
