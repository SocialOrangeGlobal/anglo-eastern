'use client';

import React, { useState } from 'react';
import styles from './NewsGrid.module.css';

const categories = ["All", "Press releases", "News", "Foresights", "Company", "People", "Life at sea", "Technology", "Events"];

const mockArticles = [
  {
    id: 1,
    category: "Foresights",
    title: "Anglo-Eastern July 2026 Foresights: Embracing the future of maritime",
    excerpt: "In this issue, we explore the latest advancements in digital ship management and how they are reshaping our industry.",
    date: "July 15, 2026",
    image: "https://assets.angloeastern.com/assets/2026/07/Anglo-Eastern_July-2026-foresights-cover-1920X942-copy-3-1000x486.jpg"
  },
  {
    id: 2,
    category: "News",
    title: "Global Maritime Summit: Key takeaways and future directions",
    excerpt: "Leaders gather to discuss sustainability and the path forward for global shipping.",
    date: "July 10, 2026",
    image: "https://assets.angloeastern.com/assets/2026/07/1920X942-1000x491.jpg"
  },
  {
    id: 3,
    category: "Company",
    title: "Expanding our offshore fleet capabilities",
    excerpt: "Anglo-Eastern announces strategic expansion into new offshore energy markets with specialized vessels.",
    date: "July 5, 2026",
    image: "https://assets.angloeastern.com/assets/2026/07/1920X942-offshorejpg-1000x491.jpg"
  },
  {
    id: 4,
    category: "Press releases",
    title: "New sustainability initiatives launched across the fleet",
    excerpt: "Committing to a greener future with advanced fuel monitoring and emission reduction targets.",
    date: "June 28, 2026",
    image: "https://assets.angloeastern.com/assets/2026/06/1920X942-website-cover-1000x491.jpg"
  },
  {
    id: 5,
    category: "People",
    title: "Celebrating our seafarers on the Day of the Seafarer",
    excerpt: "Honoring the dedication and hard work of the men and women who keep our supply chains moving.",
    date: "June 25, 2026",
    image: "https://assets.angloeastern.com/assets/2026/06/1920X942-article-cover-1000x491.jpg"
  },
  {
    id: 6,
    category: "Technology",
    title: "Digitising the fleet with Starlink connectivity",
    excerpt: "Rolling out high-speed internet across our vessels to enhance crew welfare and operational efficiency.",
    date: "June 20, 2026",
    image: "https://assets.angloeastern.com/assets/2026/06/1920X942-6a2a0d3b15f94-1000x491.webp"
  },
  {
    id: 7,
    category: "Technology",
    title: "Embracing the drone revolution for vessel inspections",
    excerpt: "How unmanned aerial vehicles are making enclosed space inspections safer and faster.",
    date: "June 15, 2026",
    image: "https://assets.angloeastern.com/assets/2026/06/1920X942-6a277847bf7bf-1000x491.webp"
  },
  {
    id: 8,
    category: "Life at sea",
    title: "A day in the life of a Chief Engineer",
    excerpt: "Insights into the daily challenges and rewards of managing complex shipboard machinery.",
    date: "June 10, 2026",
    image: "https://assets.angloeastern.com/assets/2026/06/1920X942-1000x491.webp"
  },
  {
    id: 9,
    category: "Events",
    title: "Anglo-Eastern participates in Posidonia 2026",
    excerpt: "Showcasing our latest digital solutions and networking with industry partners in Greece.",
    date: "May 25, 2026",
    image: "https://assets.angloeastern.com/assets/2026/05/1940X942-1000x486.webp"
  },
  {
    id: 10,
    category: "Foresights",
    title: "Anglo-Eastern April 2026 Foresights: Navigating compliance",
    excerpt: "A deep dive into upcoming regulatory changes and how shipowners can prepare effectively.",
    date: "April 15, 2026",
    image: "https://assets.angloeastern.com/assets/2026/05/Anglo-Eastern_April-2026-foresights-cover-1920X942-copy-2-1000x486.webp"
  },
  {
    id: 11,
    category: "News",
    title: "Safety milestone achieved on major shipping route",
    excerpt: "Our commitment to safety First is reflected in our latest fleet performance statistics.",
    date: "April 10, 2026",
    image: "https://assets.angloeastern.com/assets/2026/07/1920X942-1000x491.jpg"
  },
  {
    id: 12,
    category: "Company",
    title: "New training center opens in Manila",
    excerpt: "Expanding our global training footprint to ensure the highest standards for our crew.",
    date: "April 5, 2026",
    image: "https://assets.angloeastern.com/assets/2026/06/1920X942-website-cover-1000x491.jpg"
  }
];

export default function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? mockArticles 
    : mockArticles.filter(article => article.category === activeCategory);

  return (
    <section className={`section-padding ${styles.newsSection}`}>
      <div className="container">
        {/* Filter Bar */}
        <div className={styles.filterBar}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filteredArticles.map((article) => (
            <a href="#" key={article.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={article.image} alt={article.title} className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{article.category}</span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{article.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
