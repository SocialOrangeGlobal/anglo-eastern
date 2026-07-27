"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const filterTabs = ['ALL', 'ASIA', 'EUROPE', 'INDIA', 'NORTH AMERICA'];

export default function ContactUsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  return (
    <>
      {/* ─── Hero: Get in Touch ─── */}
      <section className={styles.heroSection}>
        {/* Left: Form */}
        <div className={styles.formColumn}>
          <h1 className={styles.formTitle}>Get in touch</h1>
          <p className={styles.formSubtitle}>
            Fill in the form below and a member of the team will reach out to discuss your needs.
          </p>

          <form className={styles.form}>
            <div className={styles.formRow}>
              <input type="text" placeholder="First name*" className={styles.input} required />
              <input type="text" placeholder="Last name*" className={styles.input} required />
            </div>

            <div className={styles.formRow}>
              <input type="email" placeholder="Email*" className={styles.input} required />
              <input type="text" placeholder="Company name*" className={styles.input} required />
            </div>

            <div className={styles.formRow}>
              <input type="text" placeholder="Job title*" className={styles.input} required />
              <select className={styles.select} defaultValue="">
                <option value="" disabled>Country*</option>
                <option value="hk">Hong Kong</option>
                <option value="in">India</option>
                <option value="sg">Singapore</option>
                <option value="uk">United Kingdom</option>
                <option value="us">United States</option>
                <option value="de">Germany</option>
                <option value="jp">Japan</option>
              </select>
            </div>

            <select className={styles.select} defaultValue="">
              <option value="" disabled>Select nature of enquiry*</option>
              <option value="ship-management">Ship Management</option>
              <option value="crew-management">Crew Management</option>
              <option value="newbuilding">Newbuilding Supervision</option>
              <option value="technical">Technical Services</option>
              <option value="other">Other</option>
            </select>

            <textarea
              placeholder="Message*"
              className={styles.textarea}
              required
            />

            <div className={styles.checkboxContainer}>
              <input type="checkbox" id="comms" className={styles.checkbox} />
              <label htmlFor="comms" className={styles.checkboxText}>
                I agree to receive other communications from Anglo-Eastern.
              </label>
            </div>

            <p className={styles.privacyNote}>
              Anglo-Eastern is committed to protecting and respecting your privacy in line with our{' '}
              <a href="#" className={styles.privacyLink}>Privacy Policy</a>.
              You may unsubscribe from our communications at any time.
              <br />
              By clicking submit below, you consent to allow Anglo-Eastern to store and process the
              personal information submitted above to provide you the content requested.
            </p>

            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right: CTAs */}
        <div className={styles.ctaColumn}>
          <div className={styles.ctaBlock}>
            <h3 className={styles.ctaTitle}>Looking to further your career?</h3>
            <p className={styles.ctaSubtitle}>Visit our current job listing and apply today</p>
            <button className={styles.ctaBtn}>JOIN US</button>
          </div>

          <div className={styles.ctaBlock}>
            <h3 className={styles.ctaTitle}>Request a ship management proposal</h3>
            <button className={styles.ctaBtn}>GET QUOTE</button>
          </div>
        </div>
      </section>

      {/* ─── Our Locations ─── */}
      <section className={styles.locationsSection}>
        <h2 className={styles.locationsTitle}>Our Locations</h2>
        <p className={styles.locationsSubtitle}>
          Anglo-Eastern operates all around the world, with our head office in{' '}
          <span className={styles.textHighlight}>Hong Kong</span> and over 29 office locations in{' '}
          <span className={styles.textHighlight}>Asia-Pacific</span>,{' '}
          <span className={styles.textHighlight}>Europe</span> and the{' '}
          <span className={styles.textHighlight}>Americas</span>. Interact with the map below to view
          our addresses or get in touch{' '}
          <a href="#">here</a>.
        </p>

        <div className={styles.filterTabs}>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.filterTab} ${activeFilter === tab ? styles.activeTab : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.mapContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://assets.angloeastern.com/assets/2023/07/our-office-map-v3.webp"
            alt="Anglo-Eastern office locations world map"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
