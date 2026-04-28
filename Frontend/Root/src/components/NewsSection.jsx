import React from 'react';

// Import all 14 images from News_Articles
import news1 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.53 PM.jpeg';
import news2 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.54 PM (1).jpeg';
import news3 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.54 PM (2).jpeg';
import news4 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.54 PM.jpeg';
import news5 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.55 PM (1).jpeg';
import news6 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.55 PM.jpeg';
import news7 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.56 PM (1).jpeg';
import news8 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.56 PM.jpeg';
import news9 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.57 PM (1).jpeg';
import news10 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.57 PM.jpeg';
import news11 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.58 PM (1).jpeg';
import news12 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.58 PM.jpeg';
import news13 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.59 PM (1).jpeg';
import news14 from '../assets/News_Articles/WhatsApp Image 2026-04-25 at 3.38.59 PM.jpeg';

const newsImages = [
  { src: news1, span: 'span 4', row: 'span 2' },
  { src: news2, span: 'span 3', row: 'span 1' },
  { src: news9, span: 'span 5', row: 'span 2' },
  { src: news11, span: 'span 3', row: 'span 2' },
  { src: news5, span: 'span 5', row: 'span 1' },
  { src: news8, span: 'span 4', row: 'span 3' },
  { src: news7, span: 'span 3', row: 'span 1' },
  { src: news14, span: 'span 5', row: 'span 2' },
  // { src: news8, span: 'span 4', row: 'span 2' },
  { src: news4, span: 'span 3', row: 'span 1' }
  // { src: news10, span: 'span 5', row: 'span 2' },
  // { src: news12, span: 'span 3', row: 'span 3' },
  // { src: news13, span: 'span 4', row: 'span 1' },
  // { src: news3, span: 'span 5', row: 'span 2' },
];

export default function NewsSection({ theme, darkMode, showGridPattern }) {
  return (
    <section id="news" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '4rem 1rem', background: theme.bg, overflow: 'hidden' }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 8vw, 4rem)', padding: '0 1rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.25rem, 6vw, 3.5rem)', 
            fontWeight: 900,
            lineHeight: 1.1, 
            letterSpacing: '-0.04em', 
            color: theme.text,
            margin: '0 0 1rem 0'
          }}>
            <span style={{ color: '#3d7a4f' }}>K2 Treks & Adventures</span> in the <span style={{ color: '#3d7a4f', fontStyle: 'italic' }}>Headlines..</span>
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: '#3d7a4f', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Artistic Mosaic Grid with Unified Tighter Spacing */}
        <div className="news-mosaic-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '140px',
          gridAutoFlow: 'dense',
          gap: '0.75rem',
        }}>
          {newsImages.map((item, index) => (
            <div 
              key={index} 
              className="news-mosaic-card"
              style={{
                gridColumn: item.span,
                gridRow: item.row,
                background: theme.cardBg,
                borderRadius: '0.6rem',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <img 
                src={item.src} 
                alt={`News Article ${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block',
                  filter: darkMode ? 'brightness(0.8) contrast(1.1)' : 'none',
                  transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
                }} 
              />
              <div className="card-overlay" style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(61, 122, 79, 0.1)',
                opacity: 0,
                transition: 'opacity 0.4s ease'
              }}></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .news-mosaic-grid {
            grid-template-columns: repeat(6, 1fr) !important;
            grid-auto-rows: 120px !important;
            gap: 0.6rem !important;
          }
          .news-mosaic-card {
            grid-column: span 3 !important;
            grid-row: span 2 !important;
          }
          .news-mosaic-card:nth-child(3n) {
             grid-column: span 3 !important;
             grid-row: span 3 !important;
          }
        }
        
        @media (max-width: 768px) {
          #news {
            padding: 3rem 1.25rem !important;
          }
          .news-mosaic-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 150px !important;
            gap: 0.5rem !important;
          }
          .news-mosaic-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .news-mosaic-card:nth-child(3n) {
             grid-column: span 2 !important;
             grid-row: span 2 !important;
          }
        }

        @media (max-width: 480px) {
          .news-mosaic-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto !important;
          }
          .news-mosaic-card {
            grid-column: span 1 !important;
            grid-row: auto !important;
            aspect-ratio: 4/3;
          }
        }

        .news-mosaic-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
          z-index: 20;
        }
        .news-mosaic-card:hover img {
          transform: scale(1.06);
        }
        .news-mosaic-card:hover .card-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
