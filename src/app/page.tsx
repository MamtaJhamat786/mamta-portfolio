'use client';

import NavBar from './components/NavBar';
import Section from './components/Section';
import HomeSection from '@/app/components/HomeSection';
import ClientOnly from './components/ClientOnly';
import { AboutSection } from '@/app/components/AboutSection';
import { ExperienceSection } from '@/app/components/ExperienceSection';
import { ContactSection } from '@/app/components/ContactSection';

export default function Page() {
  return (
    <ClientOnly>
      <NavBar />
      <Section id="home">
        <HomeSection />
      </Section>
      <Section id="about" >
        <AboutSection />
      </Section>
      <Section id="experience" >
        <ExperienceSection />
      </Section>
      <Section id="contact">
        <ContactSection />
      </Section>
    </ClientOnly>
  );
}
