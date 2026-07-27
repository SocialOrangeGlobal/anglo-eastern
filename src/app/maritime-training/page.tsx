import React from 'react';
import MaritimeSubnav from '@/components/MaritimeSubnav/MaritimeSubnav';
import MaritimeHero from '@/components/MaritimeHero/MaritimeHero';
import MaritimeIntro from '@/components/MaritimeIntro/MaritimeIntro';
import MaritimeProgrammes from '@/components/MaritimeProgrammes/MaritimeProgrammes';
import MaritimePhilosophy from '@/components/MaritimePhilosophy/MaritimePhilosophy';
import MaritimePillars from '@/components/MaritimePillars/MaritimePillars';
import MaritimeHelp from '@/components/MaritimeHelp/MaritimeHelp';
import MaritimeWhyChoose from '@/components/MaritimeWhyChoose/MaritimeWhyChoose';
import MaritimeReasons from '@/components/MaritimeReasons/MaritimeReasons';
import MaritimeAwards from '@/components/MaritimeAwards/MaritimeAwards';
import MaritimeAccreditations from '@/components/MaritimeAccreditations/MaritimeAccreditations';
import styles from './page.module.css';

export const metadata = {
  title: 'Maritime Training - Anglo-Eastern',
  description: 'World-class education and skills development for seafarers and maritime professionals.',
};

export default function MaritimeTrainingPage() {
  return (
    <main className={styles.main}>
      <MaritimeHero />
      <MaritimeIntro />
      <MaritimeHelp />
      <MaritimeWhyChoose />
      <MaritimeReasons />
      <MaritimeProgrammes />
      <MaritimePhilosophy />
      <MaritimePillars />
      <MaritimeAwards />
      <MaritimeAccreditations />
    </main>
  );
}
