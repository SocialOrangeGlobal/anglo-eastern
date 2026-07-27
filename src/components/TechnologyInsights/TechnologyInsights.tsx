import React from 'react';
import styles from './TechnologyInsights.module.css';

export default function TechnologyInsights() {
  const insights = [
    {
      category: 'Technology',
      title: 'Digitising the fleet with Starlink',
      description: 'Anglo-Eastern has been at the forefront of trialling and rolling out Starlink maritime connectivity across our managed fleet.',
      imageUrl: 'https://assets.angloeastern.com/assets/2026/06/1920X942-6a2a0d3b15f94-768x377.webp',
      link: '#'
    },
    {
      category: 'Innovation',
      title: 'Embracing the drone revolution',
      description: 'From enclosed space inspections to delivery of urgent spares, drones are rapidly becoming an essential tool for modern ship management.',
      imageUrl: 'https://assets.angloeastern.com/assets/2026/06/1920X942-6a277847bf7bf-768x377.webp',
      link: '#'
    }
  ];

  return (
    <section className={`section-padding ${styles.insightsSection}`}>
      <div className="container">
        <h2 className={`h2 ${styles.sectionTitle}`}>Latest technology insights</h2>
        
        <div className={styles.cardsGrid}>
          {insights.map((insight, index) => (
            <a href={insight.link} key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={insight.imageUrl} alt={insight.title} className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{insight.category}</span>
                <h3 className={styles.cardTitle}>{insight.title}</h3>
                <p className={styles.cardDescription}>{insight.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
