import React from 'react';
import CareersHero from '@/components/CareersHero/CareersHero';
import CareersStats from '@/components/CareersStats/CareersStats';
import CareersValues from '@/components/CareersValues/CareersValues';
import CareersTeams from '@/components/CareersTeams/CareersTeams';
import CareersCTA from '@/components/CareersCTA/CareersCTA';
import CareersOpenings from '@/components/CareersOpenings/CareersOpenings';
import Footer from '@/components/Footer/Footer';

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersStats />
      <CareersValues />
      <CareersTeams />
      <CareersCTA />
      <CareersOpenings />
      <Footer />
    </>
  );
}
