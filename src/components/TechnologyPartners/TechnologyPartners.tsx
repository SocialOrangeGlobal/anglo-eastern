import React from 'react';
import styles from './TechnologyPartners.module.css';

export default function TechnologyPartners() {
  return (
    <section className={`section-padding ${styles.partnersSection}`}>
      <div className="container">
        <div className={styles.partnersGrid}>
          <div className={styles.partnerCard}>
            <div className={styles.logoContainer}>
              <img src="https://assets.angloeastern.com/assets/2023/06/Wartsila-Logo.wine_.svg" alt="Wartsila Logo" className={styles.partnerLogo} />
            </div>
            <p className={styles.partnerText}>
              Through Wärtsilä Fleet Optimisation Solutions (FOS) we have integrated systems and communications between ships, shore offices and ports, monitoring, managing and optimising everyday processes onboard and onshore with cloud-based analytics and AI facilitating intelligent automation.
            </p>
          </div>
          
          <div className={styles.partnerCard}>
            <div className={styles.logoContainer}>
              <img src="https://assets.angloeastern.com/assets/2023/06/Digitisation-JiBe-Logo-Grey-300x126-1.webp" alt="JiBe Logo" className={styles.partnerLogo} />
            </div>
            <p className={styles.partnerText}>
              JiBe is a maritime cloud-based ERP system, covering all aspects of ship management. Data from the full fleet can be leveraged in JiBe for the optimization of each individual vessel. Its machine learning capabilities streamline user interactions, reduce operational risks and optimise costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
