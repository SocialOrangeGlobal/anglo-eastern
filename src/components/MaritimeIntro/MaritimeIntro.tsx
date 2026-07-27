import React from 'react';
import styles from './MaritimeIntro.module.css';

export default function MaritimeIntro() {
  return (
    <section id="about" className={styles.introSection}>
      <div className={styles.container}>
        <p className={styles.text}>
          Training has been a strategic pillar of Anglo-Eastern's value proposition since 1995, 
          when our Chairman, Peter Cremers, envisioned it, as a key differentiator in the ship 
          management industry. This initiative was designed to provide shipowners with the 
          confidence of a consistent and reliable pipeline of highly qualified seafarers 
          capable of managing their vessels to the highest standards.
        </p>
        <p className={styles.text}>
          Anglo-Eastern was the pioneer in starting the value addition training for more than 
          three decades to their crew to operate technologically advanced vessels under our 
          management.
        </p>
        <p className={styles.text}>
          At the time – and still today – Anglo-Eastern firmly believes that ship managers bear 
          a professional responsibility to invest in the continuous development and 
          competence of seafarers. This commitment not only upholds industry-wide quality 
          benchmarks but also reinforces our dedication to delivering excellence for our 
          clients.
        </p>
      </div>
    </section>
  );
}
