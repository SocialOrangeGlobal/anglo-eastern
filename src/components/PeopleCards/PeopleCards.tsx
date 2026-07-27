import React from 'react';
import styles from './PeopleCards.module.css';

export default function PeopleCards() {
  const cards = [
    {
      title: 'Our Teams at Sea',
      imageUrl: 'https://assets.angloeastern.com/assets/2024/10/DSC04741-v2.webp',
      link: '#',
    },
    {
      title: 'Maritime Training',
      imageUrl: 'https://assets.angloeastern.com/assets/2024/10/aema-v2.webp',
      link: '#',
    },
    {
      title: 'Our Team Ashore',
      imageUrl: 'https://assets.angloeastern.com/assets/2024/10/Pic-11-KIC-16F-Workspace-v2.webp',
      link: '#',
    }
  ];

  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <a href={card.link} key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={card.imageUrl} alt={card.title} className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
