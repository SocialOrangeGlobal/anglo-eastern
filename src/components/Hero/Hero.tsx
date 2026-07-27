import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
        {/* We use a placeholder background color or image for now */}
        <div className={styles.imagePlaceholder}></div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          Pioneers in<br/>ship management<br/>for over 50 years
        </h1>
      </div>

      <div className={styles.bottomNavContainer}>
        <p className={styles.bottomNavText}>
          Select your service of interest below to start your voyage with us
        </p>
        <div className={styles.bottomNav}>
          <a href="#" className={styles.navItem}>
            <span className={styles.icon}>
              {/* Ship Icon Placeholder */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M4 20V8l4-4 4 4v12"/><path d="M12 20V8l4-4 4 4v12"/></svg>
            </span>
            SHIP MΛNΛGEMENT
          </a>
          <a href="#" className={styles.navItem}>
            <span className={styles.icon}>
              {/* Crew Icon Placeholder */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </span>
            CREW MΛNΛGEMENT
          </a>
          <a href="#" className={styles.navItem}>
            <span className={styles.icon}>
              {/* Flag Icon Placeholder */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </span>
            NEWBUILDING SERVICES
          </a>
          <a href="#" className={styles.navItem}>
            <span className={styles.icon}>
              {/* Cruise Icon Placeholder */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3-9L9 3l-3 9H2"/><path d="M12 3v18"/></svg>
            </span>
            CRUISE & LEISURE MΛNΛGEMENT
          </a>
        </div>
      </div>
    </section>
  );
}
