import React from 'react';
import { CheckIcon } from './Icons';

export default function ProgramsSection({ theme, programs, id = "programs", subtitle = "Specialized Programs", title = "Specialized Programs", description = "Corporate, institutional, and specialized adventure training programs \u2014 designed with military-grade structure.", showGridPattern }) {
  return (
    <section id={id} className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '6rem 1.5rem' }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: '#fdf0e4', color: '#c8722a',
            padding: '4px 14px', borderRadius: '999px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
            marginBottom: '1rem', textTransform: 'uppercase',
          }}>
            {subtitle}
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: theme.text,
          }}>
            {title}
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '520px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            {description}
          </p>
        </div>

        <div className="programs-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '1.5rem',
        }}>
          {programs.map((prog, i) => (
            <div
              key={i}
              className="program-card"
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.border}`,
                borderRadius: '1rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%'
              }}
            >
              <div className="icon-wrapper" style={{ fontSize: '3rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center', color: 'var(--color-brand)' }}>{prog.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.75rem', color: theme.text }}>{prog.title}</h3>
              <p style={{ color: theme.subtext, lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.25rem' }}>{prog.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                {prog.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#3d7a4f', fontWeight: 600 }}>
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
