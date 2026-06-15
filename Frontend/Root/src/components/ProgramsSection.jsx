import React from 'react';

export default function ProgramsSection({ theme, programs, id = "programs", title = "Specialized Programs", description = "Corporate, institutional, and specialized adventure training programs — designed with military-grade structure.", showGridPattern, variant = "specialized" }) {
  const isCorp = variant === 'corporate';
  const sectionBg = isCorp ? theme.bg : 'transparent';

  return (
    <section id={id} className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} 
      style={{ padding: isCorp ? '2.5rem 1rem' : '3.5rem 1rem', background: sectionBg, position: 'relative' }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: isCorp ? '1200px' : '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: isCorp ? '3.5rem' : '5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1, letterSpacing: '-0.05em', color: theme.text,
          }}>
            {title.split(' ').slice(0, -1).join(' ')} <span style={{ color: '#3d7a4f' }}>{title.split(' ').slice(-1)}</span>
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '520px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            {description}
          </p>
        </div>

        <style>{`
          /* ========= SPECIALIZED: Cinematic Full-Bleed Cards ========= */
          .sp-layout { display: flex; flex-direction: column; gap: 2rem; }

          .sp-card {
            position: relative;
            width: 100%;
            min-height: 500px;
            border-radius: 0.75rem;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease;
            box-shadow: 0 20px 60px rgba(0,0,0,0.25);
          }
          .sp-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 40px 80px rgba(0,0,0,0.35);
          }

          .sp-card-bg {
            position: absolute;
            inset: 0;
            width: 100%; height: 100%;
            object-fit: cover;
            object-position: center;
            filter: brightness(1.1) contrast(1.05) saturate(1.1);
            transform: scale(1);
            transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.6s ease;
          }
          .sp-card:hover .sp-card-bg { 
            transform: scale(1.1); 
            filter: brightness(1.2) contrast(1.1) saturate(1.2);
          }

          .sp-card-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(
              110deg,
              rgba(5,15,8,0.85) 0%,
              rgba(5,15,8,0.60) 48%,
              rgba(5,15,8,0.15) 100%
            );
            transition: background 0.5s ease;
          }
          .sp-card:hover .sp-card-overlay {
            background: linear-gradient(
              110deg,
              rgba(5,15,8,0.92) 0%,
              rgba(5,15,8,0.70) 48%,
              rgba(5,15,8,0.25) 100%
            );
          }

          .sp-card-num {
            font-size: clamp(6rem, 12vw, 11rem);
            font-weight: 900;
            line-height: 1;
            letter-spacing: -0.06em;
            color: rgba(250, 242, 238,0.25);
            position: absolute;
            top: 0.5rem; left: 2rem;
            pointer-events: none;
            user-select: none;
            z-index: 1;
          }

          .sp-card-body {
            position: relative;
            z-index: 2;
            min-height: 500px;
            display: grid;
            grid-template-columns: 1fr 1px 1fr;
            align-items: center;
            padding: 4rem;
            gap: 0;
          }

          /* Left column */
          .sp-card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-right: 3.5rem;
          }



          .sp-card-title {
            font-size: clamp(1.8rem, 3.5vw, 2.7rem);
            font-weight: 900;
            color: #C9B194;
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin-bottom: 1.25rem;
            text-shadow: 0 4px 12px rgba(0,0,0,0.5);
          }
          .sp-card-desc {
            color: rgba(250, 242, 238,0.88);
            font-size: 1rem;
            line-height: 1.85;
            max-width: 420px;
            text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          }

          /* Vertical divider */
          .sp-card-divider {
            align-self: stretch;
            width: 1px;
            margin: 3.5rem 0;
            background: linear-gradient(
              to bottom,
              transparent,
              rgba(250, 242, 238,0.14) 20%,
              rgba(250, 242, 238,0.14) 80%,
              transparent
            );
          }

          /* Right column */
          .sp-card-right {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            align-items: flex-start;
            padding-left: 3.5rem;
          }
          .sp-card-features-label {
            color: rgba(250, 242, 238,0.35);
            font-size: 10px; font-weight: 800;
            letter-spacing: 0.15em; text-transform: uppercase;
            margin-bottom: 0.5rem;
          }
          .sp-card-features {
            display: flex; flex-direction: column; gap: 12px;
            width: 100%;
          }
          .sp-feat-item {
            display: flex; align-items: center; gap: 14px;
            background: rgba(250, 242, 238,0.05);
            border: 1px solid rgba(250, 242, 238,0.09);
            backdrop-filter: blur(6px);
            border-radius: 0.875rem;
            padding: 14px 18px;
            transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          }
          .sp-card:hover .sp-feat-item {
            background: rgba(250, 242, 238,0.05);
            border-color: rgba(250, 242, 238,0.15);
          }
          .sp-feat-item:hover {
            transform: translateX(7px);
            background: rgba(250, 242, 238,0.1) !important;
            border-color: rgba(250, 242, 238,0.2) !important;
          }
          .sp-feat-icon {
            width: 32px; height: 32px; border-radius: 50%;
            background: rgba(250, 242, 238,0.1);
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
          }
          .sp-feat-icon svg {
            width: 15px; height: 15px;
            stroke: #faf2ee;
          }
          .sp-feat-text {
            font-size: 13.5px; font-weight: 600;
            color: rgba(250, 242, 238,0.82);
            letter-spacing: 0.01em;
          }

          /* ========= CORPORATE: Editorial Split Layout ========= */
          /* ========= CORPORATE: Staggered Editorial Grid ========= */
          .corp-layout { 
            display: grid; 
            grid-template-columns: repeat(3, 1fr); 
            gap: 2rem; 
            padding: 3rem 0 1.5rem;
            align-items: start;
          }

          .corp-card {
            display: flex;
            flex-direction: column;
            background: transparent;
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          /* Staggered offset for middle card */
          @media (min-width: 901px) {
            .corp-card:nth-child(2) {
              transform: translateY(-2.5rem);
            }
          }

          .corp-img-box {
            width: 100%;
            aspect-ratio: 1 / 1.1;
            border-radius: 0.25rem;
            overflow: hidden;
            margin-bottom: 1.5rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          }
          .corp-img-box img {
            width: 100%; height: 100%; object-fit: cover;
            transition: transform 0.8s ease;
          }
          .corp-card:hover .corp-img-box img {
            transform: scale(1.05);
          }

          .corp-content-box {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            text-align: left;
          }

          .corp-eyebrow {
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #3d7a4f;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .corp-card h3 {
            font-size: clamp(1.2rem, 2vw, 1.6rem);
            font-weight: 800;
            letter-spacing: -0.02em;
            line-height: 1.2;
            color: ${theme.text};
            margin: 0.25rem 0;
          }
          .corp-card p {
            color: ${theme.subtext};
            line-height: 1.7;
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
            opacity: 0.9;
          }

          .corp-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #3d7a4f;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            transition: gap 0.3s ease;
          }
          .corp-cta:hover { gap: 14px; }
          .corp-cta svg {
            width: 18px; height: 18px;
            transition: transform 0.3s ease;
          }
          .corp-cta:hover svg { transform: translateX(4px); }

          /* ========= Responsive ========= */
          @media (max-width: 900px) {
            .corp-layout { 
              grid-template-columns: 1fr; 
              gap: 4rem; 
              padding: 2rem 0;
            }
            .corp-img-box { aspect-ratio: 16/10; }
            .sp-card-body {
              grid-template-columns: 1fr;
              padding: 2.5rem;
              min-height: auto;
              gap: 2rem;
            }
            .sp-card { min-height: auto; }
            .sp-card-left { padding-right: 0; }
            .sp-card-right { padding-left: 0; }
            .sp-card-divider { display: none; }
            .sp-card-num { font-size: 5rem; top: 0.25rem; left: 1.25rem; }
            .sp-card-desc { max-width: 100%; }
          }
        `}</style>

        {variant === 'corporate' ? (
          <div className="corp-layout">
            {programs.map((prog, i) => {
              const categoryLabel = i === 0 ? 'Logistics' : i === 1 ? 'Methodology' : 'Stewardship';
              const ctaLabel = i === 1 ? 'The Science' : i === 2 ? 'Impact Report' : 'Explore Protocols';
              return (
                <div key={i} className="corp-card">
                  <div className="corp-img-box">
                    {prog.image && <img src={prog.image} alt={prog.title} loading="lazy" />}
                  </div>
                  <div className="corp-content-box">
                    <h3>{prog.title}</h3>
                    <p>{prog.desc}</p>
                    <a href="#enquiry" className="corp-cta">
                      {ctaLabel}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="sp-layout">
            {programs.map((prog, i) => (
              <div key={i} className="sp-card">
                {prog.image && (
                  <img className="sp-card-bg" src={prog.image} alt={prog.title} loading="lazy" />
                )}
                <div className="sp-card-overlay" />
                <div className="sp-card-num">{String(i + 1).padStart(2, '0')}</div>

                <div className="sp-card-body">
                  {/* Left: text content */}
                  <div className="sp-card-left">
                    <div className="sp-card-title">{prog.title}</div>
                    <p className="sp-card-desc">{prog.desc}</p>
                  </div>

                  {/* Vertical divider */}
                  <div className="sp-card-divider" />

                  {/* Right: features */}
                  <div className="sp-card-right">
                    <div className="sp-card-features-label">What's included</div>
                    <div className="sp-card-features">
                      {prog.features.map((f, j) => (
                        <div key={j} className="sp-feat-item">
                          <div className="sp-feat-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="sp-feat-text">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
