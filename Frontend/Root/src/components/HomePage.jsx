import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhyUsSection from './WhyUsSection';
import TreksSection from './TreksSection';
import ProgramsSection from './ProgramsSection';
import ReviewsSection from './ReviewsSection';
import EnquirySection from './EnquirySection';
import ContactSection from './ContactSection';
import Footer from './Footer';

import { getTheme } from './theme';
import {
  sahyadriTreks,
  himalayanTreks,
  programs,
  corporatePrograms,
  whyUsFeatures,
  reviews,
} from './constants';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('sahyadri');

  // Apply theme to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Treks', href: '#treks' },
    { label: 'Speicalized Programs', href: '#programs' },
    { label: 'Corporate Trainings', href: '#corporate' },
    { label: 'Our Story', href: '#about' },
    { label: 'Why Us', href: '#whyus' },
    { label: 'Trekker Stories', href: '#reviews' },
    { label: 'Book a Trek', href: '#enquiry' },
  ];

  const theme = getTheme(darkMode);

  return (
    <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navLinks={navLinks}
        theme={theme}
      />
      <HeroSection darkMode={darkMode} />
      <TreksSection
        theme={theme}
        darkMode={darkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sahyadriTreks={sahyadriTreks}
        himalayanTreks={himalayanTreks}
        showGridPattern="ltr"
      />
      <ProgramsSection 
        theme={theme} 
        programs={programs} 
        id="programs" 
        title="Specialized Programs" 
        description="Expert-led high-altitude mountaineering and specialized adventure training programs." 
        showGridPattern="rtl"
      />
      <ProgramsSection 
        theme={theme} 
        programs={corporatePrograms} 
        id="corporate" 
        title="Corporate & Institutional Programs" 
        description="Structured leadership, team-building, and survival programs designed with military-grade structure." 
        showGridPattern="ltr"
        variant="corporate"
      />
      <AboutSection theme={theme} darkMode={darkMode} showGridPattern="rtl" />
      <WhyUsSection theme={theme} features={whyUsFeatures} showGridPattern="ltr" />
      <ReviewsSection theme={theme} darkMode={darkMode} reviews={reviews} showGridPattern="rtl" />
      <EnquirySection
        theme={theme}
        darkMode={darkMode}
        sahyadriTreks={sahyadriTreks}
        himalayanTreks={himalayanTreks}
        showGridPattern="ltr"
      />
      <ContactSection theme={theme} darkMode={darkMode} showGridPattern="rtl" />
      <Footer theme={theme} darkMode={darkMode} />

      {/* Bounce animation for scroll arrow */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @media (max-width: 768px) {
          .hidden { display: flex !important; }
          .md\\:hidden-hamburger { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
