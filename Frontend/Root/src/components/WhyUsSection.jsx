import React from 'react';

export default function WhyUsSection({ theme, features, showGridPattern }) {
  return (
    <section id="whyus" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '6rem 1rem', background: theme.bg }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1.1, letterSpacing: '-0.04em', color: theme.text,
            textTransform: 'uppercase'
          }}>
            Why Partner With K2 Treks?
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '5rem 4rem',
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="why-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '65%',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                background: '#000',
              }}>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  style={{ 
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                    objectFit: 'cover', transition: 'transform 0.6s ease' 
                  }}
                  className="why-image"
                />
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ 
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', 
                  color: '#3d7a4f', textTransform: 'uppercase', opacity: 0.9
                }}>
                  {feature.eyebrow}
                </div>
                
                <h3 style={{ 
                  fontWeight: 900, fontSize: '1.75rem', letterSpacing: '-0.01em', 
                  color: theme.text, textTransform: 'uppercase', margin: 0,
                  lineHeight: 1.1
                }}>
                  {feature.title}
                </h3>
                
                <div style={{ margin: 0 }}>
                  {Array.isArray(feature.desc) ? (
                    <ul style={{ 
                      fontSize: '0.95rem', color: theme.subtext, lineHeight: 1.6, 
                      margin: 0, paddingLeft: '1.1rem', maxWidth: '95%',
                      listStyleType: 'disc'
                    }}>
                      {feature.desc.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ 
                      fontSize: '0.95rem', color: theme.subtext, lineHeight: 1.6, 
                      margin: 0, maxWidth: '95%' 
                    }}>
                      {feature.desc}
                    </p>
                  )}
                </div>

                <a 
                  href="#enquiry" 
                  style={{ 
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '0.75rem', fontWeight: 900, color: '#3d7a4f', 
                    textDecoration: 'none', marginTop: '0.5rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                  className="why-cta"
                >
                  {feature.cta} 
                  <span style={{ transition: 'transform 0.3s ease', fontSize: '1.2rem', lineHeight: 1 }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card:hover .why-image {
          transform: scale(1.03);
        }
        .why-cta:hover span {
          transform: translateX(6px);
        }
        @media (max-width: 1024px) {
           div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
