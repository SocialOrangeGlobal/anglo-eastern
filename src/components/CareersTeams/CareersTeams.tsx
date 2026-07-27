import React from 'react';
import styles from './CareersTeams.module.css';

const teamsData = [
  {
    title: 'Careers Ashore',
    image: 'https://assets.angloeastern.com/assets/2023/08/5-scaled.webp',
    link: '#ashore',
    buttonTheme: 'light'
  },
  {
    title: 'Careers at Sea',
    image: 'https://assets.angloeastern.com/assets/2023/08/Talent-Pool-Our-Difference-Webp.webp',
    link: '#sea',
    buttonTheme: 'dark'
  },
  {
    title: 'AEMA Cadet Programme',
    image: 'https://assets.angloeastern.com/assets/2024/10/AEMA-cadet-6540ab89dd1c1-v2.webp',
    link: '#aema',
    buttonTheme: 'light'
  },
  {
    title: 'UK Cadet Programme',
    image: 'https://assets.angloeastern.com/assets/2023/10/uk-cadet-6540ac5cdccf3.webp',
    link: '#uk',
    buttonTheme: 'light'
  }
];

export default function CareersTeams() {
  return (
    <section className={styles.teamsSection}>
      <div className={styles.grid}>
        {teamsData.map((team, index) => (
          <div 
            key={index} 
            className={styles.teamCard}
            style={{ backgroundImage: `url(${team.image})` }}
          >
            <div className={styles.overlay}>
              <h3 className={styles.title}>{team.title}</h3>
              <a 
                href={team.link} 
                className={`${styles.button} ${team.buttonTheme === 'dark' ? styles.buttonDark : styles.buttonLight}`}
              >
                VIEW DETAILS
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
