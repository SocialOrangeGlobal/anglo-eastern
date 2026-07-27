"use client";

import React, { useState } from 'react';
import styles from './CareersOpenings.module.css';

const openingsData = [
  {
    title: 'Account Officer',
    department: 'Accounts',
    location: 'Singapore, Singapore, Singapore',
    date: '2026-07-15'
  },
  {
    title: 'Accountant / Senior Accountant',
    department: 'Accounts',
    location: 'Hong Kong, Hong Kong, Hong Kong',
    date: '2026-06-04'
  },
  {
    title: 'Assistant',
    department: 'Procurement',
    location: 'India, Maharashtra, Mumbai',
    date: '2026-06-04'
  },
  {
    title: 'Assistant Accountant 3',
    department: 'Accounts',
    location: 'Hong Kong, Hong Kong, Hong Kong',
    date: '2026-06-11'
  },
  {
    title: 'Assistant Manager (Nautical) - Sustainability & Performance Services (SAPS)',
    department: 'Sustainability & Performance Services (SAPS)',
    location: 'Hong Kong, Hong Kong, Hong Kong',
    date: '2026-06-11'
  },
];

export default function CareersOpenings() {
  const [activeTab, setActiveTab] = useState<'ashore' | 'sea'>('ashore');

  return (
    <section className={styles.openingsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>CAREER OPPORTUNITIES</p>
          <h2 className={styles.title}>The Latest Openings</h2>
        </div>

        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'ashore' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('ashore')}
          >
            CAREERS ASHORE
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'sea' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('sea')}
          >
            CAREERS AT SEA
          </button>
        </div>

        <div className={styles.textContent}>
          <p>
            Whether you are an experienced professional or just starting your career, we are always looking for talented individuals to 
            strengthen our onshore team. Explore our careers database to discover opportunities that match your skills and aspirations. Join us 
            to make an impact in delivering excellence in ship management and shaping a better maritime future.
          </p>
          <p>
            By submitting your application, you confirm that you have read, understood, and accepted the content of Anglo-Eastern's <u>Privacy Notice</u> and you consent to the processing of your data as part of this application.
          </p>
          <p>
            <strong>Important Notice:</strong> Anglo-Eastern recruits and sponsors candidates strictly based on merit and role suitability. We do not charge 
            any fees at any stage of the hiring process. Any communication suggesting otherwise does not originate from Anglo-Eastern. All 
            official correspondence will come from email addresses ending with @angloeastern.com or @workablemail.com. Please remain 
            vigilant and exercise caution to protect yourself from recruitment scams
          </p>
        </div>

        <div className={styles.filters}>
          <input type="text" placeholder="Search jobs..." className={styles.searchInput} />
          <select className={styles.selectInput}>
            <option>All locations</option>
          </select>
          <select className={styles.selectInput}>
            <option>All departments</option>
          </select>
        </div>

        <div className={styles.jobList}>
          {openingsData.map((job, index) => (
            <div key={index} className={styles.jobCard}>
              <div className={styles.jobInfo}>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <div className={styles.jobMeta}>
                  <span>Department: {job.department}</span>
                  <span className={styles.divider}>|</span>
                  <span>Location: {job.location}</span>
                  <span className={styles.divider}>|</span>
                  <span>Creation date: {job.date}</span>
                </div>
              </div>
              <button className={styles.applyButton}>APPLY NOW</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
