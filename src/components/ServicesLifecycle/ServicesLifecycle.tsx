import React from 'react';
import styles from './ServicesLifecycle.module.css';

export default function ServicesLifecycle() {
  const cards = [
    {
      title: 'Technical ship management',
      subtitle: 'Maximise availability. Stay audit-ready. Reduce operational surprises.',
      description: 'Full technical ship management across major vessel types, supported by structured processes, integrity-first reporting, and continuous optimisation.',
      link: '#',
    },
    {
      title: 'Crew management',
      subtitle: 'Future ready crews trained at award-winning facilities.',
      description: 'A global talent pool of 39,000+ seafarers trained to provide reliable performance at sea - with high retention rates affording more stability and reassurance.',
      link: '#',
    },
    {
      title: 'Newbuilding supervision',
      subtitle: 'Reduce delivery risk and protect lifecycle value.',
      description: 'Newbuilding supervision and technical services from \'plan approval and supervision\' to \'retrofit and modification consultancy\', and \'end-to-end project management\'.',
      link: '#',
    },
    {
      title: 'Cruise and leisure management',
      subtitle: 'Specialised management for passenger and leisure operations.',
      description: 'Cruise and leisure management services designed for the safety, operational efficiency, and regulatory needs of passenger operations.',
      link: '#',
    },
    {
      title: 'Sustainability and performance services (SAPS)',
      subtitle: 'Practical and specialist decarbonisation support, anchored by data.',
      description: 'Services include voyage and machinery optimisation, benchmarking, advisory and compliance support, and digital upskilling that helps owners make stronger operational and regulatory decisions.',
      link: '#',
    },
  ];

  return (
    <section className={`section-padding ${styles.lifecycleSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="h2">Delivering excellence across the full vessel lifecycle</h2>
          <p className="p-large">
            Anglo-Eastern operates as a single, integrated partner across technical management, crewing, newbuilding, and specialised services, helping owners and ship operators optimise performance, reduce risk, and protect long-term asset value throughout the vessel lifecycle.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {cards.slice(0, 3).map((card, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.divider}></div>
              <p className={styles.cardSubtitle}>{card.subtitle}</p>
              <p className={styles.cardDescription}>{card.description}</p>
              <div className={styles.cardFooter}>
                <a href={card.link} className={styles.cardLink}>LEARN MORE &raquo;</a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cardsGridBottom}>
          {cards.slice(3).map((card, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.divider}></div>
              <p className={styles.cardSubtitle}>{card.subtitle}</p>
              <p className={styles.cardDescription}>{card.description}</p>
              <div className={styles.cardFooter}>
                <a href={card.link} className={styles.cardLink}>LEARN MORE &raquo;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
