import React from 'react';
import styles from './TechnologyBackbone.module.css';

export default function TechnologyBackbone() {
  return (
    <section className={`section-padding ${styles.backboneSection}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>
            Our services are supported by an integrated suite of modern cloud solutions that combine and provide oversight across processes, performance and financials.
          </p>
        </div>

        <div className={styles.diagramContainer}>
          <div className={styles.labelsLeft}>
            <div className={styles.label}>Operations</div>
            <div className={styles.label}>Technical</div>
            <div className={styles.label}>Crew management</div>
            <div className={styles.label}>Reporting</div>
          </div>
          
          <div className={styles.imageContainer}>
            <img src="https://assets.angloeastern.com/assets/2026/07/myangloeastern-image-1000x370.png" alt="My Anglo-Eastern Dashboard" className={styles.mainImage} />
          </div>

          <div className={styles.labelsRight}>
            <div className={styles.label}>QHSE</div>
            <div className={styles.label}>Procurement</div>
            <div className={styles.label}>Performance optimisation</div>
            <div className={styles.label}>Business Intelligence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
