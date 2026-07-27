import React from 'react';
import styles from './NewsNewsletter.module.css';

interface NewsNewsletterProps {
  bgImage?: string;
}

export default function NewsNewsletter({ bgImage = 'https://assets.angloeastern.com/assets/2024/05/contact-us-bg.jpg' }: NewsNewsletterProps) {
  return (
    <section 
      className={styles.newsletterSection}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Get the latest news and insights in your inbox</h2>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="First Name" required className={styles.input} />
              <input type="text" placeholder="Last Name" required className={styles.input} />
              <input type="email" placeholder="Email" required className={styles.input} />
            </div>
            
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="newsletterConsent" required />
              <label htmlFor="newsletterConsent">
                I agree to receive communications from Anglo-Eastern.
              </label>
            </div>
            
            <button type="submit" className={styles.submitBtn}>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  );
}
