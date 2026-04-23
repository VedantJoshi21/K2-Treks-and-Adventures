import React from 'react';
import { CheckIcon } from './Icons';
import StatsBar from './StatsBar';

export default function AboutSection({ theme, darkMode, showGridPattern }) {
  return (
    <section id="about" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '3.5rem 1rem' }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Text */}
        <div>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1, marginBottom: '1.25rem', letterSpacing: '-0.05em',
            color: theme.text,
          }}>
            Built on <span style={{ color: '#3d7a4f' }}>Discipline,</span><br />
            Driven by <span style={{ color: '#3d7a4f' }}>Passion.</span>
          </h2>
          <p style={{ color: theme.subtext, lineHeight: 1.8, marginBottom: '1rem' }}>
            K2 Treks &amp; Adventures is founded by an <strong style={{ color: '#3d7a4f' }}>Indian Air Force Veteran, Mr. Rakesh Kale</strong> with a vision to bring the discipline, precision, and spirit of service into adventure tourism. Based in Central Maharashtra, we operate <strong>PAN-India</strong>.
          </p>
          <p style={{ color: theme.subtext, lineHeight: 1.8, marginBottom: '2rem' }}>
            Our focus is on <strong style={{ color: theme.text }}>safety, structured training,</strong> and delivering authentic, immersive experiences — whether you're a beginner on your first Sahyadri trail or a seasoned mountaineer heading for a Himalayan summit.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Safety First', 'Military Precision', 'Nature Immersion'].map(tag => (
              <span key={tag} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: '#3d7a4f', fontWeight: 600, fontSize: '14px',
              }}>
                <CheckIcon /> {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div style={{ position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=700&q=80"
            alt="K2 Treks group trekking"
            style={{ width: '100%', borderRadius: '1.5rem', objectFit: 'cover', height: '420px' }}
          />
          <div className="about-rating-badge" style={{
            position: 'absolute', bottom: '-20px', left: '-20px',
            background: '#3d7a4f', color: '#faf2ee',
            padding: '1.25rem 1.75rem', borderRadius: '1rem',
            boxShadow: '0 8px 30px rgba(61,122,79,0.4)',
          }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 900 }}>4.8★</div>
            <div style={{ fontSize: '13px', opacity: 0.85 }}>12,000+ trekkers</div>
          </div>
        </div>
      </div>

      <StatsBar darkMode={darkMode} />
      </div>
    </section>
  );
}
