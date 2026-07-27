"use client";

import React, { useState } from 'react';
import styles from './MaritimeReasons.module.css';

const reasons = [
  {
    title: 'Gain industry-ready skills',
    content: 'Our hands-on training and real-world simulations ensure you develop the practical expertise that employers worldwide demand, helping you stand out in the competitive maritime job market.',
  },
  {
    title: 'Learn from experienced professionals',
    content: 'Benefit from the guidance of seasoned maritime experts who bring years of at-sea and onshore experience into the classroom.',
  },
  {
    title: 'Train with advanced technology',
    content: 'Utilize state-of-the-art simulators and cutting-edge maritime technologies to prepare for modern shipping operations.',
  },
  {
    title: 'Follow a globally recognised curriculum',
    content: 'Our programs align with international standards, ensuring your qualifications are respected and recognized globally.',
  },
  {
    title: 'Benefit from personalised support',
    content: 'Receive individualized mentoring and support to help you achieve your specific career goals in the maritime industry.',
  },
];

export default function MaritimeReasons() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className={styles.reasonsSection}>
      <div className={styles.contentColumn}>
        <div className={styles.accordionContainer}>
          {reasons.map((reason, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={styles.accordionTitle}>{reason.title}</span>
                  <span className={styles.accordionIcon}>{isActive ? '−' : '+'}</span>
                </button>
                <div 
                  className={styles.accordionContentWrapper}
                  style={{ maxHeight: isActive ? '200px' : '0' }}
                >
                  <div className={styles.accordionContent}>
                    {reason.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.imageColumn}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://assets.angloeastern.com/assets/2025/12/DSC02396.webp" 
          alt="Fire hose training" 
          className={styles.image} 
        />
      </div>
    </section>
  );
}
