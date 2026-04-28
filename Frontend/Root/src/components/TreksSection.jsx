import React, { useRef, useEffect } from 'react';
import TrekCard from './TrekCard';

const ChevronLeft = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

export default function TreksSection({ theme, darkMode, activeTab, setActiveTab, sahyadriTreks, himalayanTreks, showGridPattern }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const cardWidth = sliderRef.current.firstElementChild?.offsetWidth || 320;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTab]);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.offsetWidth || 320;
      sliderRef.current.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' });
    }
  };

  const treksToDisplay = activeTab === 'sahyadri' ? sahyadriTreks : himalayanTreks;

  return (
    <section id="treks" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{
      padding: '3.5rem 1rem',
      background: theme.bg,
    }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1, letterSpacing: '-0.05em', color: theme.text,
          }}>
            Explore Our <span style={{ color: '#3d7a4f' }}>Treks</span>
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '520px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            Hand-crafted itineraries across the Sahyadri ranges and the mighty Himalayas. Something for every adventurer.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {[
            { id: 'sahyadri', label: '⛰️ Sahyadri Treks' },
            { id: 'himalayan', label: '❄️ Himalayan Treks' },
          ].map(tab => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 24px', borderRadius: '999px',
                fontWeight: 700, fontSize: '14px', cursor: 'pointer',
                border: 'none', transition: 'all 0.2s',
                background: activeTab === tab.id ? '#3d7a4f' : theme.cardBg,
                color: activeTab === tab.id ? '#faf2ee' : theme.subtext,
                boxShadow: activeTab === tab.id ? '0 4px 16px rgba(61,122,79,0.3)' : 'none',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Trek Cards Slider Wrapper */}
        <div className="treks-slider-shell" style={{ position: 'relative', overflow: 'hidden' }}>
          
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll(-1)}
            className="treks-nav-btn treks-nav-btn-prev"
            style={{
              position: 'absolute', top: '40%', left: '1rem', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.7)', color: '#faf2ee', border: 'none',
              width: '40px', height: '40px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <ChevronLeft />
          </button>
          
          <button 
            onClick={() => scroll(1)}
            className="treks-nav-btn treks-nav-btn-next"
            style={{
              position: 'absolute', top: '40%', right: '1rem', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.7)', color: '#faf2ee', border: 'none',
              width: '40px', height: '40px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <ChevronRight />
          </button>

          <style>{`
            .treks-slider::-webkit-scrollbar {
              display: none;
            }
            .treks-slider {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
          
          <div ref={sliderRef} className="treks-slider" style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '1.5rem',
            paddingBottom: '2rem',
            scrollBehavior: 'smooth',
            padding: '1rem 0 2rem',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
            overscrollBehaviorX: 'contain',
          }}>
            {treksToDisplay.map(trek => (
              <div key={trek.id} className="treks-slide" style={{
                flex: '0 0 auto',
                width: 'calc((100% - 3rem) / 3)',
                minWidth: 0,
                scrollSnapAlign: 'start',
              }}>
                <TrekCard trek={trek} darkMode={darkMode} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
