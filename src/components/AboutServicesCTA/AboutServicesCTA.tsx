import React from 'react';
import Link from 'next/link';
import styles from './AboutServicesCTA.module.css';

export default function AboutServicesCTA() {
  const buttons = [
    { label: "Ship Management", href: "/our-services" },
    { label: "Crew Management", href: "/our-services" },
    { label: "Marine Training", href: "/maritime-training" },
    { label: "New Building & Technical Services", href: "/our-services" }
  ];

  return (
    <section className={`section-padding ${styles.ctaSection}`}>
      <div className="container">
        <div className={styles.ctaBox}>
          <span className={styles.subtitle}>OUR SERVICES</span>
          <h2 className={styles.title}>
            See how we can tailor our service offerings around the needs of your fleet. Select from below or contact us to begin a conversation.
          </h2>
          <div className={styles.buttonsGroup}>
            {buttons.map((btn, index) => (
              <Link key={index} href={btn.href} className={styles.btn}>
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
