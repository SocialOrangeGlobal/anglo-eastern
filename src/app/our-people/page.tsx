import React from 'react';
import type { Metadata } from 'next';
import PeopleHero from '@/components/PeopleHero/PeopleHero';
import PeopleCards from '@/components/PeopleCards/PeopleCards';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our People | Anglo-Eastern',
  description: 'Our people are at the heart of our operations.',
};

export default function OurPeoplePage() {
  return (
    <div className={styles.peoplePage}>
      <PeopleHero />
      <PeopleCards />
      <Footer />
    </div>
  );
}
