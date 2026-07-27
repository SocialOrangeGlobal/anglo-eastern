"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './StatsSection.module.css';

const AnimatedStat = ({ valueString }: { valueString: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  
  // Parse the numeric part and the suffix
  const match = valueString.match(/^([0-9.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const isFloat = match && match[1].includes('.');
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // easeOutExpo easing function
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          
          setCount(target * easeProgress);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };
        
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [target]);

  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <h3 ref={ref} className={styles.cardValue}>
      {displayValue}{suffix}
    </h3>
  );
};

export default function StatsSection() {
  const stats = [
    {
      value: '700+',
      text: 'Vessels under Technical Management'
    },
    {
      value: '69M',
      text: "Deadweight tonnage managed in 2025 (2.8% of world's total)"
    },
    {
      value: '99.8%',
      text: 'Fleet availability for the whole year (2025)'
    },
    {
      value: '5/5',
      text: 'RightShip DOC safety score for the majority of our managed ships'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Anglo-Eastern?</h2>
          <p className={styles.description}>
            We continually seek to perform at the highest standards of safety, performance and crew
            wellbeing in our industry, values that are core to who we are. Our numbers reflect why clients
            trust us with their assets.
          </p>
        </div>
        
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.card}>
              <AnimatedStat valueString={stat.value} />
              <p className={styles.cardText}>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
