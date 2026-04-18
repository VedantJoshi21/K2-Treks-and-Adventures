import React from 'react';
import DifficultyBadge from './DifficultyBadge';
import { MapPinIcon, ClockIcon, StarIcon } from './Icons';

export default function TrekCard({ trek, darkMode }) {
  return (
    <div
      style={{
        background: darkMode ? 'rgba(255,255,255,0.04)' : '#ffffff',
        border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e7e5e4',
        borderRadius: '1rem',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={trek.image}
          alt={trek.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end',
        }}>
          {trek.tags.map(tag => (
            <span key={tag} style={{
              background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
              color: '#fff', fontSize: '11px', fontWeight: 600,
              padding: '3px 10px', borderRadius: '999px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', height: 'calc(100% - 200px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.3, color: darkMode ? '#f0f4f1' : '#1c1917' }}>
            {trek.title}
          </h3>
          <DifficultyBadge level={trek.difficulty} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: darkMode ? '#a8c4ae' : '#78716c', marginBottom: '10px' }}>
          <MapPinIcon />
          <span>{trek.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: darkMode ? '#a8c4ae' : '#78716c', marginBottom: '14px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <ClockIcon />{trek.duration}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(trek.rating)} />)}
            <span style={{ marginLeft: '4px' }}>{trek.rating} ({trek.reviews})</span>
          </span>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '0.25rem' }}>
          <a href="#enquiry" style={{
            background: '#3d7a4f', color: '#fff', padding: '8px 18px',
            borderRadius: '999px', fontSize: '13px', fontWeight: 600,
            textDecoration: 'none', transition: 'background 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#2d5c3b'}
            onMouseLeave={e => e.currentTarget.style.background = '#3d7a4f'}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}
