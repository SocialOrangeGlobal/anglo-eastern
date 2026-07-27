import React from 'react';
import type { Metadata } from 'next';
import TechnologyHero from '@/components/TechnologyHero/TechnologyHero';
import TechnologyIntro from '@/components/TechnologyIntro/TechnologyIntro';
import TechnologyPlatforms from '@/components/TechnologyPlatforms/TechnologyPlatforms';
import TechnologyBackbone from '@/components/TechnologyBackbone/TechnologyBackbone';
import TechnologyPerformance from '@/components/TechnologyPerformance/TechnologyPerformance';
import TechnologySolutions from '@/components/TechnologySolutions/TechnologySolutions';
import TechnologyCTA from '@/components/TechnologyCTA/TechnologyCTA';
import TechnologySplitSections from '@/components/TechnologySplitSections/TechnologySplitSections';
import TechnologyPartners from '@/components/TechnologyPartners/TechnologyPartners';
import TechnologyContact from '@/components/TechnologyContact/TechnologyContact';
import TechnologyInsights from '@/components/TechnologyInsights/TechnologyInsights';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Technology | Anglo-Eastern',
  description: 'Ship management technology solutions.',
};

export default function OurTechnologyPage() {
  return (
    <div className={styles.technologyPage}>
      <TechnologyHero />
      <TechnologyIntro />
      <TechnologyPlatforms />
      <TechnologyBackbone />
      <TechnologyPerformance />
      <TechnologySolutions />
      <TechnologyCTA />
      <TechnologySplitSections />
      <TechnologyPartners />
      <TechnologyContact />
      <TechnologyInsights />
      <Footer />
    </div>
  );
}
