import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dbae5b" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="6" y1="12" x2="18" y2="12" />
              <line x1="6" y1="8" x2="18" y2="8" />
              <line x1="6" y1="16" x2="18" y2="16" />
            </svg>
          </div>
          <span className={styles.logoText}>ANGLO-EASTERN</span>
        </div>
      </div>
      
      <div className={styles.mainFooter}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>ABOUT US</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Mission and values</a></li>
            <li><a href="#">News and insights</a></li>
            <li><a href="#">ESG</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>VESSEL TYPES</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Dual-Fuel Vessel</a></li>
            <li><a href="#">Bulk Carrier</a></li>
            <li><a href="#">Oil / Chemical Tanker</a></li>
            <li><a href="#">Container Ship</a></li>
            <li><a href="#">Gas Tanker</a></li>
            <li><a href="#">Ro-Ro Ship</a></li>
            <li><a href="#">Offshore Ship</a></li>
            <li><a href="#">Passenger Ship</a></li>
            <li><a href="#">LNG Carrier</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>SERVICES</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Ship Management</a></li>
            <li><a href="#">Crew Management</a></li>
            <li><a href="#">Newbuilding Supervision</a></li>
            <li><a href="#">Cruise and Leisure Management</a></li>
            <li><a href="#">Sustainability and Performance Services</a></li>
            <li><a href="#">Digital Innovation</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>OTHER</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Legal Notice</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Request a proposal</a></li>
            <li><a href="#">Whistleblower Policy</a></li>
          </ul>
        </div>

        <div className={styles.portalColumn}>
          <h4 className={styles.portalTitle}>Access My Anglo-<br />Eastern Client Portal</h4>
          <button className={styles.loginBtn}>LOGIN</button>
          
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className={styles.iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className={styles.iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="4" x2="20" y2="20"></line><line x1="20" y1="4" x2="4" y2="20"></line></svg>
            </a>
            <a href="#" className={styles.iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
