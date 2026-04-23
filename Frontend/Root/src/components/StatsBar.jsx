import React from 'react';

export default function StatsBar({ darkMode }) {
  return (
    <div className="stats-bar" style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1px',
      background: darkMode ? '#282828ff' : '#e7e5e4',
      borderRadius: '1rem', overflow: 'hidden',
      margin: '1.5rem 0',
    }}>
      {[
        { number: '15+', label: 'Years of Experience' },
        { number: '450+', label: 'Treks Conducted' },
        { number: '12,000+', label: 'Happy Trekkers' },
        { number: 'PAN-India', label: 'Operations' },
      ].map((stat, i) => (
        <div key={i} style={{
          padding: '2rem 1.5rem', textAlign: 'center',
          background: darkMode ? '#282828ff' : '#FFF8F0',
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#3d7a4f', lineHeight: 1 }}>{stat.number}</div>
          <div style={{ fontSize: '13px', color: darkMode ? '#a8c4ae' : '#78716c', marginTop: '6px', fontWeight: 500 }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
