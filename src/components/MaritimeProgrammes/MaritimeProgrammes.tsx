'use client';

import React, { useState } from 'react';
import styles from './MaritimeProgrammes.module.css';

const images = [
  'https://assets.angloeastern.com/assets/2026/04/ETO-18.JPG-scaled.webp',
  'https://assets.angloeastern.com/assets/2026/04/IMG_9965_2-scaled.webp',
  'https://assets.angloeastern.com/assets/2023/10/uk-cadet-6540ac5cdccf3.webp'
];

export default function MaritimeProgrammes() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className={styles.programmesSection}>
      <div className={styles.leftColumn}>
        <div className={styles.carouselContainer}>
          <img src={images[currentSlide]} alt="Training" className={styles.carouselImage} />
          <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
            &#8249;
          </button>
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <h2 className={styles.title}>Our training programmes</h2>
        <p className={styles.description}>
          Anglo-Eastern offers world-class education and skills 
          development for seafarers and maritime professionals. Our 
          comprehensive programmes support every career stage - 
          Cadetship programmes, Onboard operational training, 
          Advanced technical certifications.
        </p>
      </div>
    </section>
  );
}
