import React from 'react';

export default function WhyUsSection({ theme, features, showGridPattern }) {
  return (
    <section id="whyus" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '6rem 1.5rem', background: theme.bg }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem 2.5rem',
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="why-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '60%',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                background: '#000',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ 
                  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', 
                  color: '#3d7a4f', textTransform: 'uppercase' 
                }}>
                  {feature.eyebrow}
                </div>
                
                <h3 style={{ 
                  fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.02em', 
                  color: theme.text, textTransform: 'uppercase', margin: 0 
                }}>
                  {feature.title}
                </h3>
                
                <p style={{ 
                  fontSize: '0.95rem', color: theme.subtext, lineHeight: 1.7, 
                  margin: 0, maxWidth: '90%' 
                }}>
                  {feature.desc}
                </p>

                <a 
                  href="#enquiry" 
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontSize: '0.85rem', fontWeight: 800, color: '#3d7a4f', 
                    textDecoration: 'none', marginTop: '0.5rem', letterSpacing: '0.05em'
                  }}
                  className="why-cta"
                >
                  {feature.cta} 
                  <span style={{ transition: 'transform 0.3s ease' }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card:hover .why-image {
          transform: scale(1.05);
        }
        .why-card:hover {
          transform: translateY(-8px);
        }
        .why-cta:hover span {
          transform: translateX(5px);
        }
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
