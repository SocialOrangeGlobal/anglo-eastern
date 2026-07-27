import React from 'react';
import styles from './ServicesFeature.module.css';

interface ServicesFeatureProps {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

export default function ServicesFeature({ 
  title, 
  description, 
  imageUrl, 
  imagePosition = 'right',
  backgroundColor = '#ffffff'
}: ServicesFeatureProps) {
  return (
    <section className={styles.featureSection} style={{ backgroundColor }}>
      <div className={`container ${styles.container} ${imagePosition === 'left' ? styles.reverse : ''}`}>
        <div className={styles.contentColumn}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.imageColumn}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>
      </div>
    </section>
  );
}
