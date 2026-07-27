import React from 'react';
import Link from 'next/link';
import styles from './AboutRelated.module.css';

export default function AboutRelated() {
  const links = [
    {
      title: "Sustainability & ESG Goals",
      image: "https://assets.angloeastern.com/assets/2023/08/about-us_sustainability-webp-scaled.webp",
      href: "/about-us"
    },
    {
      title: "Digital Innovation",
      image: "https://assets.angloeastern.com/assets/2023/08/about-us_technology-developments-webp.webp",
      href: "/our-technology"
    },
    {
      title: "Our Leadership Team",
      image: "https://assets.angloeastern.com/assets/2023/06/featured-img-leadership-1500-jpg-webp.webp",
      href: "/our-people"
    }
  ];

  return (
    <section className={`section-padding ${styles.relatedSection}`}>
      <div className="container">
        <h2 className={styles.title}>You might also be<br/>interested in...</h2>
        
        <div className={styles.grid}>
          {links.map((link, index) => (
            <Link key={index} href={link.href} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={link.image} alt={link.title} className={styles.image} />
              </div>
              <div className={styles.cardTitleWrapper}>
                <h3 className={styles.cardTitle}>{link.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
