import React from 'react';
import styles from './MaritimeSubnav.module.css';
import Link from 'next/link';

export default function MaritimeSubnav() {
  return (
    <div className={styles.subnav}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li><Link href="#about">About us</Link></li>
          <li><Link href="#facilities">Our training facilities</Link></li>
          <li><Link href="#courses">Training and courses</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="#awards">Awards and achievements</Link></li>
          <li className={styles.homeLink}>
            <Link href="/">
              <span className={styles.homeIcon}>⌂</span> Back to main site
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
