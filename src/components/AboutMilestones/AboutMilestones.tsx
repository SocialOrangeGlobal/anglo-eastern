'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './AboutMilestones.module.css';

export default function AboutMilestones() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const milestones = [
    { date: "Aug 1974", description: "Anglo-Eastern is incorporated in Hong Kong." },
    { date: "Dec 1994", description: "Anglo-Eastern rolls out cadet training under management." },
    { date: "Aug 1998", description: "Peter Cremers assumes management buyout of the company." },
    { date: "Nov 2000", description: "Omi Inc of US & Anglo-Eastern form a joint venture crew Member." },
    { date: "Jan 2007", description: "Launch of Anglo-Eastern Maritime Academy (AEMA) in Karjat, India." },
    { date: "Aug 2015", description: "Merger with Univan Ship Management creates one of the world's largest ship managers." },
    { date: "May 2024", description: "Euronav NV announces acquisition of Anglo-Eastern." },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Approximate width of one card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`section-padding ${styles.milestonesSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className="h2">Key Milestones</h2>
            <p className={styles.intro}>
              Our rich maritime heritage spans over 50 years. Throughout which we have built a long and deep connection with our shipowner clients, consistently delivering market leading technical and crew management services across all classes and types.
            </p>
          </div>
          <div className={styles.navButtons}>
            <button 
              className={styles.navBtn} 
              onClick={() => scroll('left')} 
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              &lt;
            </button>
            <button 
              className={styles.navBtn} 
              onClick={() => scroll('right')} 
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              &gt;
            </button>
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <div 
            className={styles.carousel} 
            ref={scrollRef} 
            onScroll={handleScroll}
          >
            {milestones.map((item, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.date}>{item.date}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
