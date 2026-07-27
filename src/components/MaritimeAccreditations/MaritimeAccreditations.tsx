import React from 'react';
import styles from './MaritimeAccreditations.module.css';

const logos = [
  {
    name: 'DNV',
    image: 'https://assets.angloeastern.com/assets/2026/05/DNV_New-logo.webp',
  },
  {
    name: 'DG Shipping',
    image: 'https://assets.angloeastern.com/assets/2026/05/DG-Shipping_New-logo-scaled.webp',
  },
  {
    name: 'UK MCA',
    image: 'https://assets.angloeastern.com/assets/2026/05/UK-MCA_New-logo.webp',
  }
];

export default function MaritimeAccreditations() {
  return (
    <section className={styles.accreditationsSection}>
      <div className={styles.container}>
        <div className={styles.logos}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo.image} alt={logo.name} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
