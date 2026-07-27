"use client";

import React, { useState } from 'react';
import styles from './ServicesPartner.module.css';

export default function ServicesPartner() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'Cost-operating model globally applied',
      content: 'Our transparent, non-margin based operational model ensures that you always know what you are getting and what you are paying for.',
    },
    {
      title: 'Full sense of engagement/partnerships',
      content: 'We work closely with our clients to understand their needs and tailor our services accordingly, acting as an extension of their team.',
    },
    {
      title: 'Built on a culture of safety',
      content: 'Safety is at the core of everything we do. We are committed to providing a safe and healthy working environment for our seafarers and staff.',
    },
    {
      title: 'Embedded compliance and safety discipline',
      content: 'Rigorous compliance and safety discipline are embedded in our daily operations, ensuring we meet and exceed industry standards.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.partnerSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentColumn}>
          <h2 className={styles.title}>A partner trusted for always doing a proper job</h2>
          
          <div className={styles.accordion}>
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={styles.accordionTitle}>{item.title}</span>
                  <span className={styles.accordionIcon}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={styles.accordionContent}
                  style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.imageColumn}>
          <img 
            src="https://assets.angloeastern.com/assets/2026/06/LNG-bunkering.webp" 
            alt="LNG Bunkering" 
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
