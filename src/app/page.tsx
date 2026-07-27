import Hero from '@/components/Hero/Hero';
import ExpertsSection from '@/components/ExpertsSection/ExpertsSection';
import StatsSection from '@/components/StatsSection/StatsSection';
import CTABanner from '@/components/CTABanner/CTABanner';
import PillNav from '@/components/PillNav/PillNav';

import InnovationSection from '@/components/InnovationSection/InnovationSection';
import DigitalisationSection from '@/components/DigitalisationSection/DigitalisationSection';
import SustainabilitySection from '@/components/SustainabilitySection/SustainabilitySection';
import FeaturedVesselSection from '@/components/FeaturedVesselSection/FeaturedVesselSection';
import LatestInsightsSection from '@/components/LatestInsightsSection/LatestInsightsSection';
import NewsletterSection from '@/components/NewsletterSection/NewsletterSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ExpertsSection />
      <StatsSection />
      <CTABanner />
      <PillNav />
      <InnovationSection />
      <DigitalisationSection />
      <SustainabilitySection />
      <FeaturedVesselSection />
      <LatestInsightsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
