import React, { useState } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FounderSection from './FounderSection';
import WhyUsSection from './WhyUsSection';
import TreksSection from './TreksSection';
import ProgramsSection from './ProgramsSection';
import ReviewsSection from './ReviewsSection';
import EnquirySection from './EnquirySection';
import ContactSection from './ContactSection';
import NewsSection from './NewsSection';
import Footer from './Footer';

import {
  sahyadriTreks,
  himalayanTreks,
  programs,
  corporatePrograms,
  whyUsFeatures,
  reviews,
} from './constants';

export default function HomePage({ darkMode, setDarkMode, theme }) {
  const [activeTab, setActiveTab] = useState('sahyadri');

  return (
    <>

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
      <FounderSection theme={theme} darkMode={darkMode} showGridPattern="ltr" />
      <WhyUsSection theme={theme} features={whyUsFeatures} showGridPattern="ltr" />
      <NewsSection theme={theme} darkMode={darkMode} showGridPattern="rtl" />
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
    </>
  );
}
