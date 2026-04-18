import React from 'react';
import { StarIcon } from './Icons';

export default function ReviewsSection({ theme, darkMode, reviews, showGridPattern }) {
  return (
    <section id="reviews" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{
      padding: '6rem 1.5rem',
      background: darkMode ? 'rgba(255,255,255,0.02)' : '#f5f5f4',
    }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: '#e8f4ec', color: '#3d7a4f',
            padding: '4px 14px', borderRadius: '999px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
            marginBottom: '1rem', textTransform: 'uppercase',
          }}>
            Trekker Stories
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: theme.text,
          }}>
            Words from the Trail
          </h2>
        </div>

        <div className="reviews-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: theme.cardBg, border: `1px solid ${theme.border}`,
                borderRadius: '1rem', padding: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                {[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= r.rating} />)}
              </div>
              <p style={{ color: theme.text, lineHeight: 1.75, marginBottom: '1.25rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: '#3d7a4f', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.1rem',
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: theme.text }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: theme.subtext }}>{r.trek} · {r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
