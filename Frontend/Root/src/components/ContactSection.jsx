import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from './Icons';

export default function ContactSection({ theme, darkMode, showGridPattern }) {
  return (
    <section id="contact" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{
      padding: '3.5rem 1rem',
      background: darkMode ? '#282828ff' : '#FFF8F0',
    }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1, letterSpacing: '-0.05em', color: theme.text,
          }}>
            Contact <span style={{ color: '#3d7a4f' }}>Us</span>
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '440px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            Have a question? Reach out via call, email, or drop by our base in Central Maharashtra.
          </p>
        </div>

        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px', margin: '0 auto',
        }}>
          {[
            { icon: <PhoneIcon />, label: 'Phone', value: '+91 9209548856', href: 'tel:+919209548856' },
            { icon: <MailIcon />, label: 'Email', value: 'k2enterprises03009@gmail.com', href: 'mailto:k2enterprises03009@gmail.com' },
            { icon: <MapPinIcon />, label: 'Base', value: 'Wardha, Maharashtra, India', href: '#' },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href}
              style={{
                background: theme.cardBg, border: `1px solid ${theme.border}`,
                borderRadius: '1rem', padding: '2rem 1.75rem',
                textDecoration: 'none', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '12px', textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: '#e8f4ec', color: '#3d7a4f',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: theme.subtext, marginBottom: '4px' }}>{c.label}</div>
                <div style={{ fontWeight: 600, color: theme.text, fontSize: '15px' }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
