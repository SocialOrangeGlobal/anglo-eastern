import React from 'react';
import styles from './TechnologyPlatforms.module.css';

export default function TechnologyPlatforms() {
  const platforms = [
    {
      title: 'Operations & technical',
      description: 'Our services are supported by an integrated suite of modern cloud solutions that provide oversight across processes, performance and financials.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="3" width="4" height="4"></rect>
          <path d="M12 7v4"></path>
          <path d="M6 11h12"></path>
          <path d="M6 11v4"></path>
          <path d="M12 11v4"></path>
          <path d="M18 11v4"></path>
          <rect x="4" y="15" width="4" height="4"></rect>
          <rect x="10" y="15" width="4" height="4"></rect>
          <rect x="16" y="15" width="4" height="4"></rect>
        </svg>
      )
    },
    {
      title: 'Crewing & people',
      description: 'Crew management, training records, and wellbeing monitoring.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: 'QHSE & compliance',
      description: 'Safety audits, inspections, incident reporting, and document control dashboards.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c4.97-1.5 9-7.5 9-13V5l-9-3-9 3v4c0 5.5 4.03 11.5 9 13z"></path>
          <path d="M12 8v6"></path>
          <path d="M9 11h6"></path>
        </svg>
      )
    },
    {
      title: 'Procurement & inventory',
      description: 'Digital purchasing, inventory optimisation, and spend analytics.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: 'Performance optimisation',
      description: 'Intelligent voyage optimisation, fuel analytics, and sensor data integration.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 20h12L15 4H9L6 20z"></path>
          <path d="M7 15h10"></path>
          <path d="M8 10h8"></path>
        </svg>
      )
    },
    {
      title: 'Predictive analytics strategy',
      description: 'Forecast fleet optimisation, fuel efficiency, and sustainability metrics using data-driven models.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v15a2.5 2.5 0 0 0 5 0v-15A2.5 2.5 0 0 0 9.5 2z"></path>
          <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 14.5 2z"></path>
          <path d="M19 12h-4"></path>
          <path d="M9 12H5"></path>
        </svg>
      )
    }
  ];

  return (
    <section className={`section-padding ${styles.platformsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2">Integrated digital ship management platforms</h2>
          <p className={styles.subtitle}>
            Through a tightly integrated technology ecosystem, Anglo-Eastern connects data, people and performance to unlock new levels of ship management capability.
          </p>
        </div>

        <div className={styles.grid}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {platform.icon}
              </div>
              <h3 className={styles.cardTitle}>{platform.title}</h3>
              <p className={styles.cardDescription}>{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
