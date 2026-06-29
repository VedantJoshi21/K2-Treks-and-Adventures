import React, { useRef, useEffect, useState } from 'react';



// Import July Events (all events from assets/July Events directory)
import julyImg1 from '../assets/July Events/1.jpeg';
import julyImg2 from '../assets/July Events/2.jpeg';
import julyImg4 from '../assets/July Events/4.jpeg';

// Import August Events (all events from assets/August Events directory)
import augustImg1 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.17.15 AM.jpeg';
import augustImg2 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.17.50 AM.jpeg';
import augustImg3 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.18.53 AM.jpeg';
import augustImg4 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.18.54 AM.jpeg';
import augustImg5 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.38.45 AM.jpeg';
import augustImg6 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.39.20 AM.jpeg';
import augustImg7 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.42.05 AM (1).jpeg';
import augustImg8 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.42.05 AM.jpeg';
import augustImg9 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.54.12 AM (1).jpeg';
import augustImg10 from '../assets/August Events/WhatsApp Image 2026-06-29 at 7.54.12 AM.jpeg';

const ChevronLeft = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/**
 * UpcomingEvents Component
 * Renders a horizontal auto-scrolling gallery of event poster cards for upcoming events in July & August.
 * Allows visitors to click any card to view the event poster in a premium full-screen lightbox modal.
 * 
 * @param {Object} props
 * @param {Object} props.theme The active theme configuration object.
 * @param {boolean} props.darkMode Indicates whether dark mode is currently active.
 * @param {string} props.showGridPattern Optional grid overlay pattern direction ('ltr', 'rtl', etc).
 */
export default function UpcomingEvents({ theme, darkMode, showGridPattern }) {
  const sliderRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const images = [
    julyImg1, julyImg2, julyImg4,
    augustImg1, augustImg2, augustImg3, augustImg4, augustImg5, augustImg6, augustImg7, augustImg8, augustImg9, augustImg10
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const cardWidth = sliderRef.current.firstElementChild?.offsetWidth || 300;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
      }
    }, 3000); // 3 seconds interval for smooth viewing

    return () => clearInterval(interval);
  }, []);

  /**
   * Scroll the slider container manually in a specified direction.
   * 
   * @param {number} direction Multiplier for scrolling direction: -1 for left, 1 for right.
   */
  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.offsetWidth || 300;
      sliderRef.current.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' });
    }
  };

  return (
    <section id="upcoming" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{
      padding: '2rem 1rem',
      background: theme.bg,
      position: 'relative',
    }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1, letterSpacing: '-0.05em', color: theme.text,
          }}>
            Upcoming <span style={{ color: '#3d7a4f' }}>Events</span>
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '520px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            Check out our scheduled plans and departures for July & August. Save your spot today!
          </p>
        </div>

        {/* Gallery Slider Wrapper */}
        <div className="upcoming-slider-shell" style={{ position: 'relative', overflow: 'hidden' }}>

          {/* Left Arrow Button */}
          <button
            onClick={() => scroll(-1)}
            className="upcoming-nav-btn upcoming-nav-btn-prev"
            style={{
              position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.7)', color: '#faf2ee', border: 'none',
              width: '44px', height: '44px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(61,122,79,0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.7)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll(1)}
            className="upcoming-nav-btn upcoming-nav-btn-next"
            style={{
              position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.7)', color: '#faf2ee', border: 'none',
              width: '44px', height: '44px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(61,122,79,0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.7)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight />
          </button>

          <style>{`
            .upcoming-slider::-webkit-scrollbar {
              display: none;
            }
            .upcoming-slider {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes scaleIn {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>

          {/* Slides Container */}
          <div ref={sliderRef} className="upcoming-slider" style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '1.5rem',
            scrollBehavior: 'smooth',
            padding: '1rem 0',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y',
            overscrollBehaviorX: 'contain',
          }}>
            {images.map((img, idx) => (
              <div key={idx} className="upcoming-slide" style={{
                flex: '0 0 auto',
                width: '320px',
                scrollSnapAlign: 'start',
              }}>
                <div
                  onClick={() => setActiveImage(img)}
                  style={{
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
                    background: darkMode ? 'rgba(250, 242, 238, 0.04)' : '#faf2ee',
                    border: darkMode ? '1px solid rgba(250, 242, 238, 0.08)' : '1px solid #e7e5e4',
                    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease',
                    cursor: 'pointer',
                    aspectRatio: '3 / 4',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.03) translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 35px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px';
                  }}
                >
                  <img
                    src={img}
                    alt={`Upcoming Event ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox / Image Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            cursor: 'zoom-out',
            animation: 'fadeIn 0.25s ease-out forwards',
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(null);
            }}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(250, 242, 238, 0.15)',
              border: '1px solid rgba(250, 242, 238, 0.25)',
              color: '#faf2ee',
              fontSize: '1.75rem',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(250, 242, 238, 0.3)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(250, 242, 238, 0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            &times;
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '85vh',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
              border: '1px solid rgba(250,242,238,0.1)',
              animation: 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              cursor: 'default',
            }}
          >
            <img
              src={activeImage}
              alt="Opened Event Poster"
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
