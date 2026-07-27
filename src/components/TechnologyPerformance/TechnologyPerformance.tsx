import React from 'react';
import styles from './TechnologyPerformance.module.css';

export default function TechnologyPerformance() {
  return (
    <section className={`section-padding ${styles.performanceSection}`}>
      <div className="container">
        <div className={styles.flexContainer}>
          <div className={styles.imageColumn}>
            <img src="https://assets.angloeastern.com/assets/2026/07/Picture-1.svg" alt="Advanced Fleet Performance Diagram" className={styles.diagramImage} />
          </div>
          <div className={styles.textColumn}>
            <h2 className="h2">Advanced fleet performance solutions</h2>
            <p className="p-large">
              Anglo-Eastern has established FOS (Fleet Optimisation Solution) through Wärtsilä as our connected backbone across the managed fleet.
            </p>
            <ul className={styles.featureList}>
              <li>Enhance vessel performance</li>
              <li>Monitor voyages to optimise routes and speeds</li>
              <li>Reduce emissions and meet ESG compliance</li>
            </ul>
            <a href="#" className={styles.learnMoreBtn}>LEARN MORE &raquo;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
