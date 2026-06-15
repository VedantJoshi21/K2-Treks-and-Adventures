import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * SuccessStories Component
 * Renders a list of inspiring success stories in article cards.
 * Styled to match the provided image reference.
 * Supports light/dark themes and responsive views.
 *
 * @param {Object} props - Component props
 * @param {Object} props.theme - The theme configuration (colors, backgrounds)
 * @param {boolean} props.darkMode - Toggle state for dark mode
 * @param {string} props.showGridPattern - Background pattern type ('ltr' or 'rtl')
 */
export default function SuccessStories({ theme, darkMode, showGridPattern }) {
  const stories = [
    {
      id: 'story-01',
      tag: 'STORY 01',
      title: 'Small Feet, Big Dreams',
      paragraphs: [
        <>At just <strong>4 years old</strong>, <strong>Dwiti Ashish Satone</strong> from Wardha achieved an incredible milestone by successfully completing her first-ever trek at <strong>Seven Sister Hills, Chandrapur</strong>, during the <strong>Women's Day Celebration Trek 2026</strong>.</>,
        <>With remarkable enthusiasm and determination, Dwiti embraced the challenge of the trail and inspired everyone around her. Her achievement proves that adventure has no age limit and that confidence, courage, and a love for nature can begin at an early age.</>,
        <>At K2 Treks & Adventure, we are proud to nurture young explorers and create experiences that inspire the next generation of adventurers.</>
      ]
    },
    {
      id: 'story-02',
      tag: 'STORY 02',
      title: 'Courage Beyond Age',
      paragraphs: [
        <>At the age of <strong>55</strong>, <strong>Mrs. Mangla Prashant Ankalwar</strong>, a dedicated teacher from Wardha District, demonstrated extraordinary determination by successfully completing the <strong>Mount Kalsubai Summit Trek</strong> and <strong>Sandhan Valley Trek</strong> during the <strong>Women's Day Special Adventure Expedition 2025</strong>.</>,
        <>Her achievement is a powerful reminder that age should never limit one's dreams or ambitions. By stepping beyond her comfort zone and embracing the challenges of the mountains, she inspired fellow participants and proved that courage, resilience, and determination can conquer any summit.</>,
        <>Her journey continues to motivate women and adventure enthusiasts to pursue new challenges with confidence.</>
      ]
    },
    {
      id: 'story-03',
      tag: 'STORY 03',
      title: 'Today\'s Trekker, Tomorrow\'s Mountaineer',
      paragraphs: [
        <>At just <strong>7 years old</strong>, <strong>Prisha from Nagpur</strong> is already embracing the spirit of adventure and exploring the mountains with confidence and determination. Her enthusiasm, discipline, and love for the outdoors made her a standout participant and an inspiration to fellow trekkers.</>,
        <>By choosing trails over screens and challenges over comfort, Prisha demonstrated that age is no barrier to courage and personal growth. Her journey reflects the values of resilience, curiosity, and a deep connection with nature.</>,
        <>At K2 Treks & Adventure, we are proud to encourage young explorers like Prisha who represent the future generation of trekkers, mountaineers, and outdoor leaders.</>
      ]
    }
  ];

  return (
    <section 
      id="success-stories" 
      className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} 
      style={{ padding: '5rem 1rem', background: theme.bg, position: 'relative' }}
    >
      {showGridPattern && (
        <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>
      )}
      
      <div style={{ maxWidth: '1250px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.25rem, 6vw, 3.5rem)', 
            fontWeight: 900,
            lineHeight: 1.1, 
            letterSpacing: '-0.04em', 
            color: theme.text,
            margin: '0 0 1rem 0'
          }}>
            Our <span style={{ color: '#3d7a4f' }}>Success Stories</span>
          </h2>
          <p style={{
            color: theme.subtext,
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontSize: '1.1rem'
          }}>
            Meet the extraordinary individuals who redefined their limits and inspired us all with their strength, determination, and spirit.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="stories-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          {stories.map((story) => (
            <article 
              key={story.id} 
              className="success-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: theme.cardBg,
                borderRadius: '1rem',
                padding: '2.5rem',
                border: `1px solid ${theme.border}`,
                boxShadow: darkMode 
                  ? '0 10px 30px rgba(0, 0, 0, 0.4)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.03)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Card Top Section */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: '#3d7a4f',
                    textTransform: 'uppercase'
                  }}>
                    {story.tag}
                  </span>
                  <div className="arrow-icon-wrapper" style={{
                    transition: 'transform 0.3s ease',
                    color: theme.subtext,
                    opacity: 0.7
                  }}>
                    <ArrowUpRight size={22} />
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  color: theme.text,
                  marginBottom: '1.5rem'
                }}>
                  {story.title}
                </h3>

                <div style={{ marginBottom: '2rem' }}>
                  {story.paragraphs.map((paragraph, index) => (
                    <p 
                      key={index} 
                      style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        color: theme.subtext,
                        marginBottom: index === story.paragraphs.length - 1 ? 0 : '1rem'
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .success-card:hover {
          transform: translateY(-8px);
          box-shadow: ${darkMode 
            ? '0 20px 40px rgba(0, 0, 0, 0.6)' 
            : '0 20px 40px rgba(61, 122, 79, 0.08)'} !important;
          border-color: ${darkMode ? 'rgba(61, 122, 79, 0.4)' : '#3d7a4f'} !important;
        }
        
        .success-card:hover .arrow-icon-wrapper {
          transform: translate(3px, -3px);
          color: #3d7a4f !important;
          opacity: 1 !important;
        }

        @media (max-width: 1024px) {
          .stories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          #success-stories {
            padding: 4rem 1.25rem !important;
          }
          .stories-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .success-card {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
