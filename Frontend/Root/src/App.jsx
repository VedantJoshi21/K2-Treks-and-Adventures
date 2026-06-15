import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SiteLoader from './components/SiteLoader';
import ScrollToTop from './components/ScrollToTop';
import Harishchandragad from './components/Trek_Pages/Harishchandragad';
import KonkanCoastal from './components/Trek_Pages/KonkanCoastal';
import KalsubaiSandhan from './components/Trek_Pages/KalsubaiSandhan';
import RatangadSandhan from './components/Trek_Pages/RatangadSandhan';
import ValleyOfFlowers from './components/Trek_Pages/ValleyOfFlowers';
import Kedarnath from './components/Trek_Pages/Kedarnath';
import DayaraBugyal from './components/Trek_Pages/DayaraBugyal';
import Navbar from './components/Navbar';
import { getTheme } from './components/theme';

// Ensure page starts at top on reload and prevent browser scroll restoration
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);


  // Apply theme to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [isLoading]);



  if (isLoading) {
    return <SiteLoader />;
  }

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Treks', href: '#treks' },
    { label: 'Upcoming Events', href: '#upcoming' },
    { label: 'Speicalized Programs', href: '#programs' },
    { label: 'Corporate Trainings', href: '#corporate' },
    { label: 'Our Story', href: '#about' },
    { label: 'Why Us', href: '#whyus' },
    { label: 'Success Stories', href: '#success-stories' },
    { label: 'Trekker Stories', href: '#reviews' },
    { label: 'Get in Touch', href: '#enquiry' },
  ];

  const theme = getTheme(darkMode);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          navLinks={navLinks}
          theme={theme}
        />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />} />
          <Route path="/trek/harishchandragad" element={<Harishchandragad darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />} />
          <Route path="/trek/konkan-coastal-tour" element={<KonkanCoastal darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />} />
          <Route path="/trek/kalsubai-sandhan-valley" element={<KalsubaiSandhan darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />} />
          <Route path="/trek/ratangad-sandhan-valley" element={<RatangadSandhan darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />} />
          <Route path="/trek/valley-of-flowers" element={<ValleyOfFlowers darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />} />
          <Route path="/trek/kedarnath" element={<Kedarnath darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />} />
          <Route path="/trek/dayara-bugyal" element={<DayaraBugyal darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

