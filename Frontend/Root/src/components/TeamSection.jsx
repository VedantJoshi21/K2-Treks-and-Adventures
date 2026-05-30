import React from 'react';
import { QuoteIcon } from './Icons';
import founderImg from '../assets/Profile 2.jpeg';
import ownerImg from '../assets/owner.png';
import guideImg from '../assets/guide.png';
import operationsImg from '../assets/operations.png';

/**
 * TeamSection Component
 * Displays the team members with alternating layouts and high-impact design.
 */
export default function TeamSection({ theme, darkMode, showGridPattern }) {
  const teamMembers = [
    {
      id: 'founder',
      role: 'Founder',
      name: 'RAKESH KALE',
      title: 'FOUNDER & LEAD EXPEDITION LEADER',
      image: founderImg,
      accentColor: '#3d7a4f',
      description: [
        'With over 20 years of high-altitude experience across the Karakoram and Himalayan ranges, our founder has redefined the intersection of extreme exploration and military-grade precision.',
        'His philosophy of "Disciplined Adventure" treats every expedition not as a survivalist struggle, but as a masterpiece of logistics, psychological preparation, and structured environmental respect.'
      ],
      quote: "Precision is the difference between a trip and a transformation.",
      stats: [
        { label: 'Himalayan Peaks', value: '15+' },
        { label: 'Trainees Impacted', value: '12,000+' }
      ],
      layout: 'image-left'
    // },
    // {
    //   id: 'owner',
    //   role: 'Owner',
    //   name: 'SNEHAL KALE',
    //   title: 'OWNER & STRATEGIC DIRECTOR',
    //   image: ownerImg,
    //   accentColor: '#2d5a3c',
    //   description: [
    //     'A visionary woman entrepreneur, Snehal has been the driving force behind the strategic growth and modern identity of K2 Treks and Adventures.',
    //     'Her commitment to excellence ensures that every client receives a personalized and world-class experience, blending traditional hospitality with modern safety standards.'
    //   ],
    //   quote: "Leadership is about guiding others to peaks they never thought they could reach.",
    //   stats: [
    //     { label: 'Expeditions Led', value: '50+' },
    //     { label: 'Happy Clients', value: '5,000+' }
    //   ],
    //   layout: 'image-right'
    // },
    // {
    //   id: 'guide',
    //   role: 'Lead Guide',
    //   name: 'ARJUN SINGH',
    //   title: 'CHIEF MOUNTAIN GUIDE',
    //   image: guideImg,
    //   accentColor: '#3d7a4f',
    //   description: [
    //     'Arjun is one of the most respected guides in the region, known for his deep knowledge of the terrain and his calm leadership in challenging conditions.',
    //     'His expertise in technical climbing and high-altitude safety makes him an invaluable asset to any expedition team.'
    //   ],
    //   quote: "The mountain doesn't care about your ego; it only respects your preparation.",
    //   stats: [
    //     { label: 'Everest Summits', value: '3' },
    //     { label: 'Safety Record', value: '100%' }
    //   ],
    //   layout: 'image-left'
    // },
    // {
    //   id: 'operations',
    //   role: 'Operations',
    //   name: 'SARAH JENKINS',
    //   title: 'OPERATIONS MANAGER',
    //   image: operationsImg,
    //   accentColor: '#2d5a3c',
    //   description: [
    //     'Sarah manages the complex logistics behind every trek, ensuring that everything from supplies to permits is perfectly organized.',
    //     'Her attention to detail and proactive approach are what make our seamless "military-grade" operations possible.'
    //   ],
    //   quote: "Behind every successful summit is a mountain of meticulous planning.",
    //   stats: [
    //     { label: 'Permits Managed', value: '1,000+' },
    //     { label: 'Logistics Success', value: '99.9%' }
    //   ],
    //   layout: 'image-right'
     }
  ];

  return (
    <section id="team" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '6rem 1rem', background: theme.bg }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      
      <div style={{ maxWidth: '1250px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 7vw, 4rem)', 
            fontWeight: 900,
            lineHeight: 1.1, 
            letterSpacing: '-0.04em',
            color: theme.text,
          }}>
            Meet Our <span style={{ color: '#3d7a4f' }}>Team</span>
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '600px', margin: '0.3rem auto 0', lineHeight: 1.7, fontSize: '1.1rem' }}>
            Meet the experts who transform ordinary trips into extraordinary adventures through precision, discipline, and passion.
          </p>
        </div>

        {/* Team Members List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="team-member-grid" 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: member.layout === 'image-left' ? '0.8fr 1.2fr' : '1.2fr 0.8fr', 
                gap: 'clamp(3rem, 6vw, 8rem)', 
                alignItems: 'center' 
              }}
            >
              {/* Image Column */}
              <div style={{ 
                order: member.layout === 'image-left' ? 1 : 2,
                position: 'relative', 
                width: '100%', 
                height: '100%', 
                minHeight: '300px',
                display: 'flex',
                alignItems: 'stretch'
              }}>
                <div style={{
                  position: 'relative',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: darkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.7)' : '0 25px 50px -12px rgba(61, 122, 79, 0.3)',
                  width: '100%',
                  zIndex: 2,
                  border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block',
                      filter: darkMode ? 'contrast(1.1) brightness(0.85)' : 'none'
                    }} 
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5))',
                    zIndex: 3
                  }}></div>
                </div>
                
                {/* Decorative background accent */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  [member.layout === 'image-left' ? 'left' : 'right']: '-30px',
                  width: '75px',
                  height: '75px',
                  background: `radial-gradient(circle, ${member.accentColor} 0%, transparent 70%)`,
                  opacity: 0.15,
                  zIndex: 1,
                  filter: 'blur(20px)'
                }}></div>
              </div>

              {/* Content Column */}
              <div style={{ order: member.layout === 'image-left' ? 2 : 1 }}>
                <h3 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
                  fontWeight: 900,
                  lineHeight: 1.1, 
                  marginBottom: '1rem', 
                  letterSpacing: '-0.02em',
                  color: theme.text
                }}>
                  {member.role === 'Founder' ? 'Our ' : 'Our '}<span style={{ color: '#3d7a4f' }}>{member.role}</span>
                </h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  {member.description.map((para, i) => (
                    <p key={i} style={{ 
                      color: theme.subtext, 
                      lineHeight: 1.7, 
                      fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                      marginBottom: '1.25rem' 
                    }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Quote */}
                <div style={{ 
                  position: 'relative', 
                  paddingLeft: '2.5rem', 
                  marginBottom: '2.5rem',
                  borderLeft: `4px solid ${member.accentColor}`
                }}>
                  <QuoteIcon style={{ 
                    position: 'absolute', 
                    top: '-10px', 
                    left: '10px', 
                    opacity: 0.1, 
                    width: '60px', 
                    height: '60px',
                    color: member.accentColor
                  }} />
                  <blockquote style={{ 
                    fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', 
                    fontWeight: 700, 
                    fontStyle: 'italic',
                    color: theme.text,
                    lineHeight: 1.4,
                    marginBottom: '0.75rem'
                  }}>
                    "{member.quote}"
                  </blockquote>
                  <cite style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: 600, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    color: theme.subtext,
                    fontStyle: 'normal'
                  }}>
                    — {member.name}, {member.title}
                  </cite>
                </div>

                {/* Stats */}
                <div className="member-stats" style={{ 
                  display: 'flex', 
                  gap: 'clamp(1.5rem, 4vw, 3rem)', 
                  borderTop: `1px solid ${theme.border}`,
                  paddingTop: '2rem'
                }}>
                  {member.stats.map((stat, i) => (
                    <div key={i}>
                      <div style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', fontWeight: 900, color: theme.text }}>{stat.value}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: theme.subtext, letterSpacing: '0.05em' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #team {
            padding: 3rem 1rem !important;
          }
          .team-member-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .team-member-grid > div {
            order: unset !important;
          }
          .member-stats {
            justify-content: flex-start;
          }
        }
        @media (max-width: 480px) {
          .member-stats {
            flex-direction: column;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
