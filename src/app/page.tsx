'use client';

import NavBar from './components/NavBar';
import Section from './components/Section';
import HomeSection from '@/app/components/HomeSection';
import ClientOnly from './components/ClientOnly';

export default function Page() {
  return (
    <ClientOnly>
      <NavBar />
      <Section id="home">
        <HomeSection />
      </Section>
      <Section id="about"/>
      <Section id="contact" />
    </ClientOnly>
  );
}
