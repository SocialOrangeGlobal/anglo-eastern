import React from 'react';
import styles from './TechnologySolutions.module.css';

export default function TechnologySolutions() {
  const images = [
    { src: 'https://assets.angloeastern.com/assets/2026/07/image-offshore-article-768x575.jpeg', caption: 'Vessel tracking and monitoring' },
    { src: 'https://assets.angloeastern.com/assets/2026/06/Anglo-Eastern_Philippines_Cadet-program_5-768x576.webp', caption: 'Predictive maintenance' },
    { src: 'https://assets.angloeastern.com/assets/2026/06/Gavi-Coutinho_M.V-Seoul-Express_Chief-Engineer-2-435x580.webp', caption: 'Digital crew management' },
    { src: 'https://assets.angloeastern.com/assets/2026/05/greece-1000x422.webp', caption: 'Data-driven decision making' },
    { src: 'https://assets.angloeastern.com/assets/2026/04/iStock-1407976043-1000x451.webp', caption: 'Cybersecurity and IT support' },
    { src: 'https://assets.angloeastern.com/assets/2026/04/Four-seasons_2.webp', caption: 'Performance optimisation' },
  ];

  return (
    <section className={`section-padding ${styles.solutionsSection}`}>
      <div className="container">
        <h2 className={`h2 ${styles.sectionTitle}`}>Technology solutions for the modern fleet</h2>
        
        <div className={styles.flexContainer}>
          <div className={styles.gridColumn}>
            <div className={styles.imageGrid}>
              {images.map((img, index) => (
                <div key={index} className={styles.imageCard}>
                  <img src={img.src} alt={img.caption} className={styles.gridImage} />
                  <div className={styles.caption}>{img.caption}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.textColumn}>
            <div className={styles.textBox}>
              <h3 className={styles.boxTitle}>Technology that scales with our industry leading procurement</h3>
              <p className={styles.boxText}>
                Our global scale ensures we can leverage our purchasing power to secure the best technology solutions at highly competitive rates for our partners.
              </p>
              <ul className={styles.boxList}>
                <li><strong>Consolidated IT purchasing</strong> - hardware, software, and connectivity</li>
                <li><strong>Standardised IT infrastructure</strong> - proven systems that increase reliability and reduce downtime</li>
                <li><strong>Dedicated technical support</strong> - 24/7 assistance from our global IT helpdesk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
