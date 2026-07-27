import React from 'react';
import styles from './NewsletterSection.module.css';

const NewsletterSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Get the latest news and insights in your inbox</h2>
      
      <div className={styles.formContainer}>
        <div className={styles.row}>
          <input type="text" placeholder="First Name*" className={styles.input} />
          <input type="text" placeholder="Last Name*" className={styles.input} />
        </div>
        <input type="email" placeholder="Email*" className={styles.input} />
        
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="privacy-policy" className={styles.checkbox} />
          <label htmlFor="privacy-policy" className={styles.checkboxText}>
            I agree to Anglo-Eastern's <a href="#" className={styles.privacyLink}>Privacy Policy</a>
          </label>
        </div>
        
        <button className={styles.submitBtn}>
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
