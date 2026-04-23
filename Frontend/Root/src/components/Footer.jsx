import React from 'react';
import { InstagramIcon, YouTubeIcon, FacebookIcon } from './Icons';

export default function Footer({ theme, darkMode }) {
  return (
    <footer style={{
      borderTop: `1px solid ${theme.border}`,
      padding: '3rem 1rem 2rem',
      background: darkMode ? '#282828ff' : '#FFF8F0',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <svg viewBox="0 0 24 24" fill="#3d7a4f" style={{ width: '28px', height: '28px' }}>
                <path d="M14 6l-4.2 5.6-2.1-1.4L4 16h16L14 6z" />
              </svg>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: theme.text }}>K2 Treks & Adventures</span>
            </div>
            <p style={{ color: theme.subtext, fontSize: '13px', maxWidth: '260px', lineHeight: 1.7, marginBottom: '16px' }}>
              Founded by an IAF Veteran. Adventure, safety & discipline — PAN-India.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <a href="https://www.instagram.com/k2_treks_adventure/" style={{ color: theme.text, display: 'flex', alignItems: 'center', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#e1306c'} onMouseLeave={e => e.currentTarget.style.color = theme.text}><InstagramIcon /></a>
              <a href="https://www.youtube.com/@rakeshkale2381/" style={{ color: theme.text, display: 'flex', alignItems: 'center', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#ff0000'} onMouseLeave={e => e.currentTarget.style.color = theme.text}><YouTubeIcon /></a>
              <a href="#" style={{ color: theme.text, display: 'flex', alignItems: 'center', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#1877F2'} onMouseLeave={e => e.currentTarget.style.color = theme.text}><FacebookIcon /></a>
            </div>
          </div>
          {/* Links */}
          <div className="footer-links" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: theme.text, marginBottom: '12px' }}>Explore</div>
              {[
                { label: 'Sahyadri Treks', href: '#treks' },
                { label: 'Himalayan Treks', href: '#treks' },
                { label: 'Speicalized Programs', href: '#programs' },
              ].map(l => (
                <a key={l.label} href={l.href} style={{ display: 'block', color: theme.subtext, textDecoration: 'none', fontSize: '14px', marginBottom: '8px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#3d7a4f'}
                  onMouseLeave={e => e.currentTarget.style.color = theme.subtext}
                >{l.label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: theme.text, marginBottom: '12px' }}>Company</div>
              {[
                { label: 'Our Story', href: '#about' },
                { label: 'Trekker Stories', href: '#reviews' },
                { label: 'Form', href: '#enquiry' },
              ].map(l => (
                <a key={l.label} href={l.href} style={{ display: 'block', color: theme.subtext, textDecoration: 'none', fontSize: '14px', marginBottom: '8px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#3d7a4f'}
                  onMouseLeave={e => e.currentTarget.style.color = theme.subtext}
                >{l.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{
          borderTop: `1px solid ${theme.border}`, paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ color: theme.subtext, fontSize: '13px' }}>
            © {new Date().getFullYear()} K2 Treks & Adventures. All rights reserved.
          </p>
          <p style={{ color: theme.subtext, fontSize: '12px' }}>
            Based in Central Maharashtra, India · PAN-India Operations
          </p>
        </div>
      </div>
    </footer>
  );
}
