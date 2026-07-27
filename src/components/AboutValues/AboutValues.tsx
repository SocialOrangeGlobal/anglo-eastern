import React from 'react';
import styles from './AboutValues.module.css';

export default function AboutValues() {
  const values = [
    {
      title: "Having the courage to do what's right",
      description: "We take ownership for all outcomes, and importantly, for what we believe, even when we have to make tough calls. We always act in our honest ethos to meet our operational needs.",
      image: "https://assets.angloeastern.com/assets/2023/06/Courage-to-do-whats-right-prod-jpg.webp"
    },
    {
      title: "Progressively setting the standard",
      description: "We look beyond the status quo and always strive to be the best we can be. We trust the asset of knowledge and skillset to drive solutions to deliver results.",
      image: "https://assets.angloeastern.com/assets/2023/06/Setting-the-standard-prod-jpg.webp"
    },
    {
      title: "Nurturing our people and communities",
      description: "We focus on a nurturing environment for the ongoing growth and success of our people, and the communities in which we operate.",
      image: "https://assets.angloeastern.com/assets/2023/08/Nurturing-our-communities-webp-1536x1025.webp"
    }
  ];

  return (
    <section className={`section-padding ${styles.valuesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR VALUES</span>
          <h2 className="h2">Shaping a better maritime future</h2>
          <p className={styles.intro}>
            Anglo-Eastern is heavily defined by its core values. We act boldly, courageously, and with focus while challenging ourselves to do the right thing to drive performance and manage behavior in the communities we are committed to building out—driving performance, and making a better maritime future.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <img src={value.image} alt={value.title} className={styles.image} />
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
