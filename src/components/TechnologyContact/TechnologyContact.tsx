import React from 'react';
import styles from './TechnologyContact.module.css';

export default function TechnologyContact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.flexContainer}>
          <div className={styles.formColumn}>
            <h2 className={styles.title}>Get in touch</h2>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First name *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last name *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone number *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">Company name</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={4} required></textarea>
              </div>
              <div className={styles.checkboxGroup}>
                <input type="checkbox" id="consent" name="consent" required />
                <label htmlFor="consent">
                  By submitting this form, you consent to allow Anglo-Eastern to store and process the personal information submitted above to provide you the content requested.
                </label>
              </div>
              <button type="submit" className={styles.submitBtn}>Submit</button>
            </form>
          </div>
          
          <div className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>Speak with our team</h3>
            <a href="mailto:careers@angloeastern.com" className={styles.infoLink}>careers@angloeastern.com</a>
            
            <h3 className={styles.infoTitle}>Global office locations</h3>
            <a href="/contact-us" className={styles.infoLink}>View offices</a>
          </div>
        </div>
      </div>
    </section>
  );
}
