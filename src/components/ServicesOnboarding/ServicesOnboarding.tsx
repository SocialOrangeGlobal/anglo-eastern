import React from 'react';
import styles from './ServicesOnboarding.module.css';

export default function ServicesOnboarding() {
  return (
    <section className={styles.onboardingSection}>
      <div className="container">
        <h2 className={styles.title}>A structured onboarding designed to minimize disruption</h2>
        <p className={styles.description}>
          Our global ship takeover team handles the entire vessel takeover process to ensure seamless transition, regardless of the vessel's current location, ownership, or management status.
        </p>
      </div>
    </section>
  );
}
