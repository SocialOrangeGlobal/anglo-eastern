"use client";

import React, { useState } from 'react';
import styles from './ExpertsSection.module.css';

export default function ExpertsSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.placeholderImage}></div>
            <button 
              className={styles.playButton} 
              aria-label="Play video"
              onClick={() => setIsVideoOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.contentColumn}>
          <h2 className={styles.heading}>Experts in vessel management solutions</h2>
          <p className={styles.paragraph}>
            Anglo-Eastern is a leading global provider of independent ship management services, with a reputation for excellence and innovation driven by our passion for seafaring and for ships.
          </p>
          <p className={styles.paragraph}>
            We are committed to doing the right things the right way, always challenging ourselves to shape a better and sustainable maritime future.
          </p>
          <button className={styles.ctaButton}>
            LEARN MORE ABOUT US
          </button>
        </div>
        
        {/* Scroll to top button - usually placed fixed, but we add it to page or section for demo */}
        <button className={styles.scrollTop} aria-label="Scroll to top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsVideoOpen(false)}>
          <button className={styles.closeButton} onClick={() => setIsVideoOpen(false)} aria-label="Close video">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
            <video 
              src="https://assets.angloeastern.com/assets/2023/07/2023-07-AE-Overview-Video.mp4" 
              controls 
              autoPlay 
              className={styles.videoPlayer}
            />
          </div>
        </div>
      )}
    </>
  );
}
