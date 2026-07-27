import React from 'react';
import styles from './MaritimeHelp.module.css';

export default function MaritimeHelp() {
  return (
    <section className={styles.helpSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>What can we help you with today?</h2>
        
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Anglo-Eastern Maritime Academy (AEMA)</h3>
            <div className={styles.buttonGroup}>
              <button className={styles.outlinedBtn}>AEMA courses</button>
              <button className={styles.filledBtn}>Latest news</button>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Anglo-Eastern Maritime Training Centre (AEMTC)</h3>
            <div className={styles.buttonGroupCenter}>
              <div className={styles.buttonRow}>
                <button className={styles.outlinedBtn}>AEMTC overview</button>
                <button className={styles.outlinedBtn}>AEMTC - Delhi</button>
                <button className={styles.outlinedBtn}>AEMTC - Mumbai</button>
              </div>
              <div className={styles.buttonRow}>
                <button className={styles.outlinedBtn}>AEMTC - Parañaque</button>
                <button className={styles.outlinedBtn}>AEMTC - Odesa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
