"use client";

import React, { useState } from 'react';
import styles from './CareersValues.module.css';

const valuesData = [
  {
    title: 'Spirited',
    content: 'We are enthusiastic and determined, our energy, passion and zest inspire those around us.',
  },
  {
    title: 'Genuine',
    content: 'We are sincere and trustworthy in our intentions, actions and interactions. We act with integrity and uphold the highest standards in all that we do.',
  },
  {
    title: 'Practical',
    content: 'We take a pragmatic approach to problem-solving, focusing on effective solutions that work in real-world scenarios and add tangible value.',
  },
  {
    title: 'Empathetic',
    content: 'We care for our people and respect diverse perspectives. We listen actively and support each other to foster a collaborative environment.',
  },
];

export default function CareersValues() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <p className={styles.subtitle}>OUR VALUES</p>
          <h2 className={styles.title}>Our values & culture</h2>
          <p className={styles.description}>
            At Anglo-Eastern, we prioritise integrity and uphold the 
            highest standards for the benefit of our clients and seafarers 
            alike. We provide diverse opportunities, spanning both long 
            and short-term commitments, in collaboration with shipowners 
            worldwide. We seek authentic individuals who possess a true 
            passion for ships and share the following qualities:
          </p>

          <div className={styles.accordion}>
            {valuesData.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
              >
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className={styles.icon}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={styles.accordionContent}
                  style={{ maxHeight: openIndex === index ? '200px' : '0' }}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightContent}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://assets.angloeastern.com/assets/2024/10/Flag-man-1-v2.webp" 
            alt="Anglo-Eastern Flag man" 
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
