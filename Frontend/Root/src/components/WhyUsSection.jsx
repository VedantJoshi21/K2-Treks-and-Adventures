import React from 'react';

export default function WhyUsSection({ theme, features, showGridPattern }) {
  return (
    <section id="whyus" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '6rem 1.5rem', background: theme.bg }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: '#fdf0e4', color: '#c8722a',
            padding: '4px 14px', borderRadius: '999px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
            marginBottom: '1rem', textTransform: 'uppercase',
          }}>
            Why Us
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: theme.text,
          }}>
            Why Partner With K2 Treks?
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.border}`,
                borderRadius: '1rem',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', 
                background: '#3d7a4f', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' 
              }}></div>
              
              <h3 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '1.25rem', color: theme.text, paddingLeft: '8px' }}>
                {feature.title}
              </h3>
              
              <ul style={{ listStyle: 'none', padding: '0 0 0 8px', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {feature.points.map((point, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: theme.subtext, lineHeight: 1.6 }}>
                    <span style={{ color: '#3d7a4f', fontSize: '1rem', lineHeight: '1.6', marginTop: '-2px' }}>•</span> 
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
