import React from 'react';
import styles from './MaritimeAwards.module.css';

const awards = [
  {
    image: 'https://assets.angloeastern.com/assets/2025/12/DSC02396.webp',
    text: '2024 - Sagar Samman awards AEMA for - Recognition of Outstanding maritime Training Institutes- 1st Rank'
  },
  {
    image: 'https://assets.angloeastern.com/assets/2026/04/ETO-18.JPG-scaled.webp',
    text: '2023 Excellence in Maritime Learning and Development, INMEX SMM India 2023'
  },
  {
    image: 'https://assets.angloeastern.com/assets/2026/04/IMG_9965_2-scaled.webp',
    text: '2023 - NMD award'
  }
];

export default function MaritimeAwards() {
  return (
    <section className={styles.awardsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Awards and achievements</h2>
        
        <div className={styles.grid}>
          {awards.map((award, index) => (
            <div key={index} className={styles.awardCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={award.image} alt={`Award ${index + 1}`} className={styles.awardImage} />
              <div className={styles.overlay}>
                <p className={styles.awardText}>{award.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.buttonContainer}>
          <button className={styles.viewBtn}>VIEW AWARDS GALLERY</button>
        </div>
      </div>
    </section>
  );
}
