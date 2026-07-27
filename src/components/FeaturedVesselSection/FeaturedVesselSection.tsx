import React from 'react';
import styles from './FeaturedVesselSection.module.css';

const FeaturedVesselSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
        <span className={styles.subtitle}>FEATURED VESSEL</span>
        <h2 className={styles.heading}>MV Ubuntu Empathy: Our First LNG Fueled Bulker Under Management</h2>
        <p className={styles.paragraph}>
          The Capesize+ LNG dual-fuel bulk carrier and its twin, MV Ubuntu Humanity were both newbuilds supervised by the Anglo-Eastern Technical Services (AETS) team. They weigh in at around 190K dwt each with an expanded carrying capacity exceeding 200K m3 and a 35% reduced carbon footprint.
        </p>
        <button className={styles.ctaButton}>
          VIEW MORE NEWS AND STORIES
        </button>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <span className={styles.badge}>VESSELS</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://assets.angloeastern.com/assets/2023/06/MV-Ubuntu-Empathy-1-1-768x320.webp" 
              alt="MV Ubuntu Empathy" 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardText}>
            <h3 className={styles.cardTitle}>Our first LNG fueled bulker...</h3>
            <p className={styles.cardExcerpt}>
              We are excited to extend a very warm welcome to MV Ubuntu Empathy, which joins the Angl...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVesselSection;
