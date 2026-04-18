import React, { useState, useEffect } from 'react';
import { MountainIcon, SunIcon, MoonIcon, MenuIcon, CloseIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from './Icons';

export default function Navbar({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  navLinks,
  theme
}) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      
      // Find the last section that has its top passed or near the top of the viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
            break;
          }
        }
      }
      
      // If we're at the very top, set the first element as active
      if (window.scrollY < 50 && sections.length > 0) {
        current = sections[0];
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Add a slight delay to the initial check to make sure DOM is painted
    setTimeout(handleScroll, 100); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks, activeSection]);

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: theme.navBg, backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${theme.border}`,
        padding: '0 1.5rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: theme.text }}>
          <MountainIcon className="w-8 h-8" style={{ color: '#3d7a4f', width: '2rem', height: '2rem' }} />
          <span style={{ fontSize: '1.3rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
            K2 <span style={{ color: '#3d7a4f' }}>Treks & Adventures</span>
          </span>
        </a>

        {/* Desktop Nav — hidden on mobile via .nav-desktop-links class */}
        <div
          className="nav-desktop-links"
          style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}
        >
          {navLinks.map(link => {
            const linkId = link.href.substring(1);
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{
                  color: isActive ? '#3d7a4f' : theme.subtext, 
                  textDecoration: 'none', 
                  fontWeight: isActive ? 600 : 500, 
                  fontSize: '0.9rem',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-btn"
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: `1px solid ${theme.border}`,
              background: theme.cardBg, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: theme.text,
            }}
            aria-label="Toggle dark mode"
            id="dark-mode-toggle"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Social Icons Desktop */}
          <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="https://www.instagram.com/k2_treks_adventure/" style={{ color: theme.text, display: 'flex', paddingLeft: '20px', alignItems: 'center', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#e1306c'} onMouseLeave={e => e.currentTarget.style.color = theme.text}><InstagramIcon /></a>
            <a href="https://www.youtube.com/@rakeshkale2381/" style={{ color: theme.text, display: 'flex', alignItems: 'center', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#ff0000'} onMouseLeave={e => e.currentTarget.style.color = theme.text}><YouTubeIcon /></a>
            <a href="#" style={{ color: theme.text, display: 'flex', alignItems: 'center', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#1877F2'} onMouseLeave={e => e.currentTarget.style.color = theme.text}><FacebookIcon /></a>
          </div>

          {/* Mobile hamburger — shown on mobile via .nav-hamburger class */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-hamburger"
            style={{
              display: 'none', /* overridden to flex by responsive.css on mobile */
              background: 'none', border: 'none', cursor: 'pointer',
              color: theme.text, alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px',
            }}
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: theme.navBg, backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${theme.border}`, zIndex: 99, padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {navLinks.map(link => {
            const linkId = link.href.substring(1);
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  color: isActive ? '#3d7a4f' : theme.text, 
                  textDecoration: 'none', 
                  fontWeight: isActive ? 700 : 600, 
                  fontSize: '1.1rem' 
                }}
              >
                {link.label}
              </a>
            );
          })}
          {/* Show "Book a Trek" inside the mobile menu */}
          <a
            href="#enquiry"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: '#3d7a4f', color: '#fff',
              padding: '12px 22px', borderRadius: '999px',
              fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', textAlign: 'center',
              marginTop: '0.5rem',
            }}
          >
            Book a Trek
          </a>
          
          {/* Social Icons Mobile */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '1rem' }}>
            <a href="#" style={{ color: theme.text }}><InstagramIcon /></a>
            <a href="#" style={{ color: theme.text }}><YouTubeIcon /></a>
            <a href="#" style={{ color: theme.text }}><FacebookIcon /></a>
          </div>
        </div>
      )}

      {/* Navigation effects styles */}
      <style>{`
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background-color: #3d7a4f;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link.active::after {
          width: 100%;
        }
        
        .nav-link:hover {
          color: #3d7a4f !important;
        }

        .theme-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .theme-btn:hover {
          transform: rotate(15deg) scale(1.1);
          border-color: #3d7a4f !important;
          color: #3d7a4f !important;
          box-shadow: 0 4px 12px rgba(61, 122, 79, 0.15);
        }
      `}</style>
    </>
  );
}
