import React from 'react';
import { QuoteIcon } from './Icons';
import profile1 from '../assets/Profile 1.jpeg';
import profile2 from '../assets/Profile 2.jpeg';

export default function FounderSection({ theme, darkMode, showGridPattern }) {
  return (
    <section id="founder" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '4rem 1rem', background: theme.bg }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      
      <div style={{ maxWidth: '1250px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div className="founder-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 1fr', 
            gap: 'clamp(2rem, 6vw, 4rem)', 
            alignItems: 'center' 
          }}>
          
          {/* Founder Images Staggered Layout */}
          <div className="founder-images-wrapper" style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
            <div className="staggered-images" style={{ 
              display: 'flex', 
              gap: 'clamp(1rem, 3vw, 2rem)', 
              alignItems: 'center',
              padding: '2rem 0'
            }}>
              {/* Image 1 - Lower */}
              <div style={{
                position: 'relative',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 25px 50px -12px rgba(61, 122, 79, 0.2)',
                transform: 'translateY(var(--stagger-offset, 15%))',
                flex: 1,
                aspectRatio: '4/5',
                zIndex: 1
              }}
              className="staggered-img-container lower"
              >
                <img 
                  src={profile1} 
                  alt="Founder of K2 Treks" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block',
                    filter: darkMode ? 'contrast(1.05) brightness(0.9)' : 'none'
                  }} 
                />
              </div>

              {/* Image 2 - Higher */}
              <div style={{
                position: 'relative',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 25px 50px -12px rgba(61, 122, 79, 0.2)',
                transform: 'translateY(calc(-1 * var(--stagger-offset, 15%)))',
                flex: 1,
                aspectRatio: '4/5',
                zIndex: 2
              }}
              className="staggered-img-container higher"
              >
                <img 
                  src={profile2} 
                  alt="Founder Experience" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block',
                    filter: darkMode ? 'contrast(1.05) brightness(0.9)' : 'none'
                  }} 
                />
              </div>
            </div>
            
            {/* Decorative background circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: '#3d7a4f',
              opacity: 0.05,
              borderRadius: '50%',
              filter: 'blur(60px)',
              zIndex: -1
            }}></div>
          </div>

          {/* Founder Content */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', 
              fontWeight: 900,
              lineHeight: 1.1, 
              marginBottom: '1.5rem', 
              letterSpacing: '-0.02em',
              color: theme.text,
              fontFamily: "'Playfair Display', serif"
            }}>
              Meet Our <span style={{ color: '#3d7a4f' }}>Founder</span>
            </h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ 
                color: theme.subtext, 
                lineHeight: 1.7, 
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                marginBottom: '1.25rem' 
              }}>
                With over <strong style={{ color: '#3d7a4f' }}>20 years</strong> of high-altitude experience across the Karakoram and Himalayan ranges, our founder has redefined the intersection of extreme exploration and military-grade precision.
              </p>
              <p style={{ 
                color: theme.subtext, 
                lineHeight: 1.7, 
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                marginBottom: '1.25rem' 
              }}>
                His philosophy of <strong style={{ color: '#3d7a4f' }}>"Disciplined Adventure"</strong> treats every expedition not as a survivalist struggle, but as a masterpiece of logistics, psychological preparation, and structured environmental respect. We don't just climb; we design experiences that transform boundaries.
              </p>
            </div>

            {/* Quote */}
            <div style={{ 
              position: 'relative', 
              paddingLeft: '2.5rem', 
              marginBottom: '2.5rem',
              borderLeft: '4px solid #3d7a4f'
            }}>
              <QuoteIcon style={{ 
                position: 'absolute', 
                top: '-10px', 
                left: '10px', 
                opacity: 0.1, 
                width: '60px', 
                height: '60px',
                color: '#3d7a4f'
              }} />
              <blockquote style={{ 
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', 
                fontWeight: 700, 
                fontStyle: 'italic',
                color: theme.text,
                lineHeight: 1.4,
                marginBottom: '0.75rem'
              }}>
                "Precision is the difference between a trip and a transformation."
              </blockquote>
              <cite style={{ 
                fontSize: '0.85rem', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                color: theme.subtext,
                fontStyle: 'normal'
              }}>
                — RAKESH KALE, FOUNDER & LEAD EXPEDITION LEADER
              </cite>
            </div>

            {/* Stats */}
            <div className="founder-stats" style={{ 
              display: 'flex', 
              gap: 'clamp(1.5rem, 4vw, 3rem)', 
              borderTop: `1px solid ${theme.border}`,
              paddingTop: '2rem'
            }}>
              <div>
                <div style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', fontWeight: 900, color: theme.text }}>15+</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: theme.subtext, letterSpacing: '0.05em' }}>Himalayan Peaks</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', fontWeight: 900, color: theme.text }}>12,000+</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: theme.subtext, letterSpacing: '0.05em' }}>Trainees Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .founder-images-wrapper {
          --stagger-offset: 15%;
        }
        @media (max-width: 768px) {
          #founder {
            padding: 3rem 1rem !important;
          }
          .founder-images-wrapper {
            --stagger-offset: 10%;
            margin-bottom: 1rem !important;
          }
          .staggered-images {
            padding: 1.5rem 0 !important;
          }
          .founder-stats {
            justify-content: flex-start;
          }
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .founder-stats {
            flex-direction: column;
            gap: 1.5rem !important;
          }
          .founder-grid {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
