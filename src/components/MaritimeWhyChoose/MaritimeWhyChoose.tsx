import React from 'react';
import styles from './MaritimeWhyChoose.module.css';

export default function MaritimeWhyChoose() {
  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why choose Anglo-Eastern for maritime training?</h2>
        <p className={styles.description}>
          Choosing Anglo-Eastern means joining a legacy of excellence recognised by industry awards and certifications, with 
          a strong focus on safety, environmental stewardship, and professional development to empower maritime career 
          success and positive contributions to global shipping.
        </p>
      </div>
    </section>
  );
}
