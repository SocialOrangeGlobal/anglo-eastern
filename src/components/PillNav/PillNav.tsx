import React from 'react';
import styles from './PillNav.module.css';

export default function PillNav() {
  const pills = [
    { label: 'Ship management', active: false },
    { label: 'Newbuilding supervision', active: false },
    { label: 'Crew management', active: true },
    { label: 'Cruise and leisure management', active: false },
    { label: 'Fleet optimisation', active: false },
    { label: 'Technology', active: false },
    { label: 'Sustainability', active: false },
    { label: 'Latest news', active: false },
    { label: 'Maritime training', active: false },
    { label: 'Careers', active: false },
    { label: 'Leadership', active: false },
    { label: 'Contact us', active: false },
    { label: 'Request a proposal', active: false }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>WE'RE HERE TO HELP!</span>
          <h2 className={styles.title}>How can we assist you today?</h2>
        </div>
        
        <div className={styles.pillContainer}>
          {pills.map((pill, index) => (
            <button 
              key={index} 
              className={`${styles.pill} ${pill.active ? styles.active : ''}`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
