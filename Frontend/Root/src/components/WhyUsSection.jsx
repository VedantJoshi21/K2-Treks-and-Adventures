import React from 'react';
import { ShieldCheck, Brain, Leaf, Network, AlignCenter } from 'lucide-react';

export default function WhyUsSection({ theme, features, showGridPattern }) {
  // Map index to specific icon to match the image
  const getIcon = (index) => {
    switch (index) {
      case 0: return <ShieldCheck size={24} color="#285c3b" strokeWidth={2.5} />;
      case 1: return <Brain size={24} color="#285c3b" strokeWidth={2.5} />;
      case 2: return <Leaf size={24} color="#285c3b" strokeWidth={2.5} />;
      case 3: return <Network size={24} color="#285c3b" strokeWidth={2.5} />;
      default: return <ShieldCheck size={24} color="#285c3b" strokeWidth={2.5} />;
    }
  };

  return (
    <section id="whyus" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '3.5rem 1rem', background: theme.bg }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1, letterSpacing: '-0.05em', color: theme.text, textAlign: 'center'
          }}>
            Why Partner With <span style={{ color: '#3d7a4f' }}>K2 Treks?</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="why-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: theme.bg === '#181818' ? '#222' : '#faf2ee',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
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
              <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem', flex: 1 }}>
                {/* <div style={{ marginBottom: '1rem' }}>
                  {getIcon(i)}
                </div> */}
                
                <h3 style={{ 
                  fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0', 
                  color: theme.text, textTransform: 'uppercase', margin: '0 0 1rem 0',
                  lineHeight: 1.3, textAlign: 'center'
                }}>
                  {feature.title}
                </h3>
                
                <div style={{ margin: '0 0 2rem 0', flex: 1 }}>
                  {Array.isArray(feature.desc) ? (
                    <ul style={{ 
                      fontSize: '0.9rem', color: theme.subtext, lineHeight: 1.6, 
                      margin: 0, paddingLeft: '1.1rem',
                      listStyleType: 'disc'
                    }}>
                      {feature.desc.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '0.25rem' }}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ 
                      fontSize: '0.9rem', color: theme.subtext, lineHeight: 1.6, 
                      margin: 0
                    }}>
                      {feature.desc}
                    </p>
                  )}
                </div>

                <a 
                  href="#enquiry" 
                  style={{ 
                    display: 'inline-block',
                    fontSize: '0.9rem', fontWeight: 800, color: '#285c3b', 
                    textDecoration: 'none', letterSpacing: '0.05em',
                    textTransform: 'uppercase', marginTop: 'auto', textAlign: 'center'
                  }}
                  className="why-cta"
                >
                  {feature.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card:hover {
          transform: translateY(-5px);
        }
        .why-card:hover .why-image {
          transform: scale(1.03);
        }
        @media (max-width: 1024px) {
           div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 768px) {
           div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
