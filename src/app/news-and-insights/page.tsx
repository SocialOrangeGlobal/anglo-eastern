import React from 'react';
import type { Metadata } from 'next';
import NewsHero from '@/components/NewsHero/NewsHero';
import NewsGrid from '@/components/NewsGrid/NewsGrid';
import NewsNewsletter from '@/components/NewsNewsletter/NewsNewsletter';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'News and Insights | Anglo-Eastern',
  description: 'Anglo-Eastern\'s latest updates and industry perspectives.',
};

export default function NewsAndInsightsPage() {
  return (
    <div className={styles.newsPage}>
      <NewsHero />
      <NewsGrid />
      <NewsNewsletter />
      <Footer />
    </div>
  );
}
