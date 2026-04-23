import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownIcon } from './Icons';
import Scenery1 from '../assets/Scenery_1.jpg';
import Scenery2 from '../assets/Scenery_2.jpg';
import Scenery3 from '../assets/Scenery_3.jpg';
import Scenery4 from '../assets/Scenery_4.jpg';
import Scenery5 from '../assets/Scenery_5.jpg';
import Scenery6 from '../assets/Scenery_6.jpg';

const slides = [
  {
    image: Scenery1,
    title1: "Conquer Every Summit.",
    title2: "Create Lifetime Stories.",
    subtitle: "From the rugged Sahyadri forts to the mighty Himalayas — K2 Treks & Adventures brings disciplined, safe, and unforgettable treks for every kind of explorer."
  },
  {
    image: Scenery2,
    title1: "Find Your Wild.",
    title2: "Forge New Paths.",
    subtitle: "Experience the thrill of the unknown with expertly crafted treks designed to challenge your limits and awaken your spirit of adventure."
  },
  {
    image: Scenery3,
    title1: "Beyond the Horizon.",
    title2: "Where Eagles Dare.",
    subtitle: "Trek through untamed landscapes guided by discipline and expertise — because every great journey begins with a single bold step."
  },
  {
    image: Scenery4,
    title1: "Rise Above.",
    title2: "Breathe the Mountains.",
    subtitle: "High altitudes, higher spirits. Our expertly curated treks offer you a chance to reconnect with nature and rediscover yourself."
  },
  {
    image: Scenery5,
    title1: "The Wild Awaits.",
    title2: "Are You Ready?",
    subtitle: "From beginner day hikes to Himalayan expeditions — every trail is a new story waiting to be written by you."
  },
  {
    image: Scenery6,
    title1: "Live the Adventure.",
    title2: "Own Every Trail.",
    subtitle: "Safety. Discipline. Adventure. K2 Treks & Adventures is your trusted partner for experiences that last a lifetime."
  }
];

export default function HeroSection({ darkMode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToNext();
    }, 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goToNext = () => {
    if (isTransitioning) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setCurrentSlide(index);
    resetTimer();
  };

  const nextSlide = () => { goToNext(); resetTimer(); };
  const prevSlide = () => { goToPrev(); resetTimer(); };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative', minHeight: '92vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Sliding Background Strip */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          display: 'flex',
          width: `${slides.length * 100}%`,
          transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
          transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / slides.length}%`,
              height: '92vh',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              position: 'relative',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: darkMode
                ? 'linear-gradient(to bottom, rgba(24,24,24,0.65) 0%, rgba(24,24,24,0.85) 100%)'
                : 'linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.68) 100%)',
            }} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="hero-prev-btn"
        style={{
          position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
          background: 'rgba(250, 242, 238,0.15)', backdropFilter: 'blur(4px)',
          border: '1px solid rgba(250, 242, 238,0.3)',
          color: '#faf2ee', width: '48px', height: '48px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'all 0.2s',
          fontSize: '20px',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(250, 242, 238,0.3)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(250, 242, 238,0.15)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="hero-next-btn"
        style={{
          position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
          background: 'rgba(250, 242, 238,0.15)', backdropFilter: 'blur(4px)',
          border: '1px solid rgba(250, 242, 238,0.3)',
          color: '#faf2ee', width: '48px', height: '48px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'all 0.2s',
          fontSize: '20px',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(250, 242, 238,0.3)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(250, 242, 238,0.15)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* IAF Badge */}
      <div className="hero-iaf-badge" style={{
        position: 'absolute', top: '2rem', right: '2rem', zIndex: 2,
        background: 'rgba(250, 242, 238,0.1)', backdropFilter: 'blur(8px)',
        border: '1px solid rgba(250, 242, 238,0.2)',
        padding: '8px 16px', borderRadius: '999px',
        color: '#faf2ee', fontSize: '14px', fontWeight: 700,
        display: 'flex', alignItems: 'center', gap: '6px',
      }}>
        <span>✦</span> Founded by an IAF Veteran
      </div>

      {/* Hero Content */}
      <div className="hero-content" style={{
        position: 'relative', zIndex: 1, textAlign: 'center',
        padding: '0 1rem', maxWidth: '1000px', margin: '0 auto',
      }}>
        {/* <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(61,122,79,0.3)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(61,122,79,0.5)',
          padding: '6px 18px', borderRadius: '999px',
          color: '#7ddc9a', fontSize: '13px', fontWeight: 700,
          marginBottom: '1.5rem', letterSpacing: '0.05em',
        }}>
          ðŸ”ï¸ Central Maharashtra's No.1 Adventure Company
        </div> */}

        {/* Text slides — fade in/out for the text overlay */}
        <div className="hero-text-slides" style={{ position: 'relative', minHeight: '200px' }}>
          {slides.map((slide, index) => (
            <div
              key={`text-${index}`}
              style={{
                position: index === 0 ? 'relative' : 'absolute',
                top: 0, left: 0, width: '100%',
                opacity: currentSlide === index ? 1 : 0,
                transform: currentSlide === index ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                pointerEvents: currentSlide === index ? 'auto' : 'none',
              }}
            >
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900,
                color: '#faf2ee', lineHeight: 1.1, marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}>
                {slide.title1}<br />
                <span style={{ color: '#7ddc9a' }}>{slide.title2}</span>
              </h1>
              <p style={{
                fontSize: '1.125rem', color: 'rgba(250, 242, 238,0.82)',
                maxWidth: '600px', margin: '0 auto',
                lineHeight: 1.7,
              }}>
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
          <a
            href="#treks"
            style={{
              background: '#3d7a4f', color: '#faf2ee',
              padding: '14px 32px', borderRadius: '999px',
              fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', transition: 'all 0.2s',
              boxShadow: '0 4px 20px rgba(61,122,79,0.4)',
            }}
            id="hero-explore-btn"
            onMouseEnter={e => { e.currentTarget.style.background = '#2d5c3b'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#3d7a4f'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Explore Treks
          </a>
          <a
            href="#enquiry"
            style={{
              background: 'rgba(250, 242, 238,0.15)', color: '#faf2ee',
              padding: '14px 32px', borderRadius: '999px',
              fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', transition: 'all 0.2s',
              border: '1.5px solid rgba(250, 242, 238,0.4)',
              backdropFilter: 'blur(6px)',
            }}
            id="hero-enquiry-btn"
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(250, 242, 238,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(250, 242, 238,0.15)'; }}
          >
            Book Now
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <a href="#about" style={{ color: 'rgba(250, 242, 238,0.5)', animation: 'bounce 2s infinite' }}>
            <ArrowDownIcon />
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-indicators" style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '0.5rem', zIndex: 10,
        alignItems: 'center',
      }}>
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: currentSlide === index ? '#7ddc9a' : 'rgba(250, 242, 238,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
