"use client";

import React from 'react';
import styles from './ServicesContact.module.css';

export default function ServicesContact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.formColumn}>
          <h2 className={styles.title}>Get in touch</h2>
          <p className={styles.subtitle}>Leave us a message, and our ship management experts will get back to you shortly.</p>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="First name" className={styles.input} />
              <input type="text" placeholder="Last name" className={styles.input} />
            </div>
            
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email" className={styles.input} />
              <input type="tel" placeholder="Phone number" className={styles.input} />
            </div>
            
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Company" className={styles.input} />
              <input type="text" placeholder="Job title" className={styles.input} />
            </div>
            
            <div className={styles.fullWidth}>
              <input type="text" placeholder="How can we help you?" className={styles.input} />
            </div>
            
            <div className={styles.fullWidth}>
              <textarea placeholder="Message" className={styles.textarea} rows={4}></textarea>
            </div>
            
            <div className={styles.checkboxGroup}>
              <p className={styles.disclaimer}>
                By submitting this form you consent to our use of your personal data as described in our Privacy Policy.
              </p>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                I agree to receive communications from Anglo-Eastern.
              </label>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Submit
              <span className={styles.arrowIcon}>→</span>
            </button>
          </form>
        </div>

        <div className={styles.infoColumn}>
          <h3 className={styles.infoTitle}>Where do you need us?</h3>
          <ul className={styles.regionList}>
            <li><a href="#">Hong Kong (Head Office)</a></li>
            <li><a href="#">The Americas & Caribbean</a></li>
            <li><a href="#">Europe</a></li>
            <li><a href="#">Middle East & Africa</a></li>
            <li><a href="#">Asia Pacific</a></li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}
