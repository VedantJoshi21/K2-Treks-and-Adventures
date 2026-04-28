import React, { useRef, useEffect } from 'react';
import { StarIcon } from './Icons';

export default function ReviewsSection({ theme, darkMode, reviews, showGridPattern }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const cardWidth = sliderRef.current.firstElementChild?.offsetWidth || 350;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews]);

  return (
    <section id="reviews" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{
      padding: '3.5rem 1rem', background: theme.bg,
    }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1, letterSpacing: '-0.05em', color: theme.text,
          }}>
            Words from <span style={{ color: '#3d7a4f' }}>the Trail</span>
          </h2>
        </div>

        <style>{`
          .reviews-slider::-webkit-scrollbar {
            display: none;
          }
          .reviews-slider {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>

        <div ref={sliderRef} className="reviews-slider" style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '1rem 0 2rem',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          
        }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: theme.cardBg, border: `1px solid ${theme.border}`,
                borderRadius: '1rem', padding: '1.75rem',
                flex: '0 0 auto',
                width: 'clamp(300px, 80vw, 400px)',
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= r.rating} />)}
                </div>
                <p style={{ color: theme.text, lineHeight: 1.75, marginBottom: '1.25rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  "{r.text}"
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: '#3d7a4f', color: '#fee5c7ff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.1rem',
                  flexShrink: 0
                }}>
                  {r.name.charAt(0)}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: theme.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: theme.subtext, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.trek} · {r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
