import React from 'react';
import type { Metadata } from 'next';
import AboutHero from '@/components/AboutHero/AboutHero';
import AboutStatsText from '@/components/AboutStatsText/AboutStatsText';
import AboutValues from '@/components/AboutValues/AboutValues';
import AboutMilestones from '@/components/AboutMilestones/AboutMilestones';
import AboutServicesCTA from '@/components/AboutServicesCTA/AboutServicesCTA';
import AboutRelated from '@/components/AboutRelated/AboutRelated';
import NewsNewsletter from '@/components/NewsNewsletter/NewsNewsletter';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us | Anglo-Eastern',
  description: 'Anglo-Eastern is a leading global provider of independent ship management services.',
};

export default function AboutUsPage() {
  return (
    <div className={styles.aboutPage}>
      <AboutHero />
      <AboutStatsText />
      <AboutValues />
      <AboutMilestones />
      <AboutServicesCTA />
      <AboutRelated />
      <NewsNewsletter bgImage="https://assets.angloeastern.com/assets/2024/05/homepage-navigating-waves-of-change-202311.webp" />
      <Footer />
    </div>
  );
}
