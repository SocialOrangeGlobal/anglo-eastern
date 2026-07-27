import React from 'react';
import type { Metadata } from 'next';
import ServicesHero from '@/components/ServicesHero/ServicesHero';
import ServicesStats from '@/components/ServicesStats/ServicesStats';
import ServicesLifecycle from '@/components/ServicesLifecycle/ServicesLifecycle';
import ServicesPartner from '@/components/ServicesPartner/ServicesPartner';
import ServicesFeature from '@/components/ServicesFeature/ServicesFeature';
import ServicesOnboarding from '@/components/ServicesOnboarding/ServicesOnboarding';
import ServicesContact from '@/components/ServicesContact/ServicesContact';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Services | Anglo-Eastern',
  description: 'Delivering excellence across the full vessel lifecycle.',
};

export default function OurServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <ServicesHero />
      <ServicesStats />
      <ServicesLifecycle />
      <ServicesPartner />
      
      <ServicesFeature 
        title="Scale that benefits owners"
        description={
          <>
            <p>Anglo-Eastern\'s scale and depth of experience across all types of vessels directly benefits our clients.</p>
            <p>Our global presence and strong relationships with yards and suppliers secure the best possible value for our owners, reducing operating costs without compromising on quality.</p>
            <p>Our dedicated experts track and interpret the impact of industry regulations, ensuring our clients are always ahead of the curve.</p>
          </>
        }
        imageUrl="https://assets.angloeastern.com/assets/2026/06/Scale-that-benefits-owners_-1-2048x1151.webp"
        imagePosition="left"
        backgroundColor="#ffffff"
      />
      
      <ServicesFeature 
        title="Structured digital visibility for smarter decisions"
        description={
          <>
            <p>Our operational framework ensures safe and efficient vessel operations, enabled by our comprehensive suite of proprietary digital tools.</p>
            <p>From centralized data architecture that powers our technical and commercial management, to real-time analytics and predictive maintenance, we provide our clients with true actionable insights.</p>
            <p>Dashboard tracking across all key metrics means you have total oversight of your vessel\'s performance, at any time, from anywhere.</p>
          </>
        }
        imageUrl="https://assets.angloeastern.com/assets/2026/06/myangloeastern_with-border-2048x1383.webp"
        imagePosition="right"
        backgroundColor="#f9f9f9"
      />
      
      <ServicesFeature 
        title="Future-readiness"
        description={
          <>
            <p><strong>A structured ESG framework</strong><br/>Our dedicated ESG taskforce manages the escalating reporting and compliance requirements for our clients.</p>
            <p><strong>Decarbonisation and energy transition</strong><br/>From energy-efficient modifications and technical upgrades to dual-fuel engine management, we ensure your assets are future-proofed.</p>
            <p><strong>Green vessel management</strong><br/>We are at the forefront of managing dual-fuel vessels and are pioneers in alternative fuels.</p>
            <p><strong>Your partner in growth</strong><br/>Anglo-Eastern provides bespoke technical advisory and project management services for newbuilding and retrofit programs.</p>
          </>
        }
        imageUrl="https://assets.angloeastern.com/assets/2026/06/Newbuilding.webp"
        imagePosition="left"
        backgroundColor="#ffffff"
      />
      
      <ServicesOnboarding />
      <ServicesContact />
      <Footer />
    </div>
  );
}
