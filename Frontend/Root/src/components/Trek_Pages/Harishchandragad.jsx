import React from 'react';
import Footer from '../Footer';
import EnquirySection from '../EnquirySection';
import { ClockIcon, MapPinIcon, StarIcon } from '../Icons';
import { 
  Tent, Coffee, Utensils, ShieldCheck, Award, Map as MapIcon, 
  ChevronRight, Info, CheckCircle2, AlertCircle, 
  Bus, Sunset, Mountain, Compass, ArrowLeft,
  ArrowUpDown, Signal, Route, Clock
} from 'lucide-react';
import { sahyadriTreks, himalayanTreks } from '../constants';

// Import images
import harishHero from '../../assets/harish_hero.png';
import harishTemple from '../../assets/harish_temple.png';
import harishPeak from '../../assets/harish_peak.png';
import harishTents from '../../assets/harish_tents.png';


export default function Harishchandragad({ darkMode, setDarkMode, theme }) {
  
  return (

    <>


      {/* Hero Section */}
      <section style={{ position: 'relative', height: '90vh', width: '100%' }}>
        {/* Background Image Container with Overflow Hidden */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: `url(${harishHero})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            transform: 'scale(1.05)', filter: 'brightness(0.7)',
          }}></div>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          }}></div>
        </div>
        
        <div style={{
          position: 'relative', height: '100%', maxWidth: '1440px', margin: '0 auto',
          padding: '0 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          color: '#fff',
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900,
            lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '800px',
            marginBottom: '1.5rem',
          }}>
            Harishchandragad Trek - A Divine Trekking Experience
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.9, maxWidth: '600px',
            lineHeight: 1.6, marginBottom: '2.5rem',
          }}>
            Conquer the legendary Kokankada, explore ancient subterranean temples, and witness the sunrise from the Sahyadri's highest peaks.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#enquiry" style={{
              background: '#3d7a4f', color: '#fff', padding: '14px 32px',
              borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(61, 122, 79, 0.3)', transition: 'transform 0.2s',
            }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Book Now
            </a>
            <a href="https://wa.me/9209548856" target="_blank" rel="noopener noreferrer" style={{
              background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '14px 32px',
              borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
              backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              WhatsApp 9209548856
            </a>
          </div>
        </div>

        {/* CTA Buttons & Floating Stats Cards */}
        <div style={{
          position: 'absolute', bottom: '-120px', left: '50%', transform: 'translateX(-50%)',
          width: 'calc(100% - 3rem)', maxWidth: '1100px', zIndex: 30
        }}>
          {/* CTA Row */}



          {/* Stats Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '0.75rem', width: '100%'
          }}>
            {[
              { label: 'HEIGHT', value: '4,671 ft', icon: <ArrowUpDown size={22} /> },
              { label: 'DIFFICULTY', value: 'Moderate', icon: <Signal size={22} /> },
              { label: 'DISTANCE', value: '4.5 km', icon: <Route size={22} /> },
              { label: 'DURATION', value: '2-3 hrs', icon: <Clock size={22} /> },
            ].map(stat => (
              <div key={stat.label} style={{ 
                background: '#fdfbf7', padding: '1.75rem 1rem', borderRadius: '1.25rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.03)'
              }}>
                <div style={{ color: '#155e35', marginBottom: '0.75rem' }}>{stat.icon}</div>
                <div style={{ color: '#78716c', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{stat.label}</div>
                <div style={{ color: '#1c1917', fontSize: '1.25rem', fontWeight: 900 }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: '8rem 1.5rem 4rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#3d7a4f', marginBottom: '1.5rem' }}>
              The Crown Jewel of Sahyadris
            </h2>
            <p style={{ color: theme.subtext, lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
              Harishchandragad is more than just a trek; it's a pilgrimage through history and nature. From the ancient 6th-century carvings to the terrifyingly beautiful cliff of Kokankada, every step reveals a new chapter of Maharashtra's rugged heritage.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Kokankada Cliff', desc: 'Experience a vertical drop of over 1,700 feet with breathtaking sunset views over the Konkan valley.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
                { title: 'Ancient Shiva Temple', desc: 'Explore the Harishchandreshwar Temple, an architectural marvel with intricately carved pillars and caves.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
                { title: 'Kedareshwar Cave', desc: 'A massive cave holding a Shivalinga surrounded by ice-cold water, supported by a single remaining pillar.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ marginTop: '0.25rem' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontWeight: 800, marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: theme.subtext, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative', display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1, paddingTop: '4rem' }}>
              <img src={harishTemple} alt="Harishchandreshwar Temple" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <img src={harishPeak} alt="Sahyadri View" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Package Cost Section */}
      <section style={{ 
        padding: '4rem 1.5rem', 
        background: darkMode ? 'rgba(61,122,79,0.1)' : 'rgba(61,122,79,0.05)',
        margin: '4rem 0'
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '3rem' }}>Pricing</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {[
              { title: 'Nagpur / Wardha / Amravati', price: '₹4,199/-', sub: 'Complete package with pickup' },
              { title: 'Igatpuri to Igatpuri', price: '₹2,999/-', sub: 'Base package excluding main travel' },
            ].map(plan => (
              <div key={plan.title} style={{ 
                background: theme.cardBg, padding: '2.5rem', borderRadius: '1.5rem',
                minWidth: '280px', flex: '1', maxWidth: '400px',
                border: `1px solid ${theme.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
                <div style={{ color: '#3d7a4f', fontWeight: 700, marginBottom: '1rem' }}>{plan.title}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>{plan.price}</div>
                <div style={{ color: theme.subtext, fontSize: '0.9rem', marginBottom: '1.5rem' }}>{plan.sub}</div>
                <div style={{ 
                  background: 'rgba(61,122,79,0.1)', color: '#3d7a4f', fontSize: '0.8rem', 
                  fontWeight: 800, padding: '4px 12px', borderRadius: '999px' 
                }}>
                  SPECIAL DISCOUNT FOR DEFENCE & NCC
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section style={{ padding: '4rem 1.5rem', background: theme.bg, position: 'relative', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ color: '#3d7a4f', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>THE PATH FORWARD</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>Curated Itinerary</h2>
        </div>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          {/* Central Vertical Line (Desktop Only) */}
          <div className="timeline-line" style={{ 
            position: 'absolute', left: '50%', transform: 'translateX(-50%)', 
            top: 0, bottom: 0, width: '2px', borderLeft: '2px dashed #3d7a4f',
            opacity: 0.3, zIndex: 0 
          }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* Day 01 - Left Content, Right Image */}
            <div style={{ 
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', 
              gap: '2rem', position: 'relative', zIndex: 1 
            }}>
              {/* Day Marker */}
              <div style={{ 
                position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                width: '10px', height: '10px', borderRadius: '50%', background: '#3d7a4f',
                boxShadow: '0 0 0 6px rgba(61,122,79,0.1)', top: '10px'
              }} className="timeline-marker"></div>

              <div style={{ flex: '1 1 350px', textAlign: 'right', paddingRight: 'clamp(1rem, 3vw, 2rem)' }} className="itinerary-text-side">
                <div style={{ 
                  display: 'inline-block', background: '#3d7a4f', color: '#fff', 
                  fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', 
                  borderRadius: '999px', marginBottom: '1rem' 
                }}>DAY 01</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>Arrival & The Ridge</h3>
                <p style={{ color: theme.subtext, lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '400px', marginLeft: 'auto' }}>
                  Your journey begins in the heart of nature, setting camp under a canopy of stars after an authentic local experience.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
                  {[
                    { label: 'Travel & Reach Base Village', icon: <Bus size={16} /> },
                    { label: 'Authentic Local Lunch', icon: <Utensils size={16} /> },
                    { label: 'Sunset Exploration Session', icon: <Sunset size={16} /> },
                  ].map(point => (
                    <div key={point.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: theme.subtext }}>{point.label}</span>
                      <div style={{ 
                        width: '32px', height: '32px', background: 'rgba(61,122,79,0.1)', 
                        borderRadius: '6px', display: 'flex', alignItems: 'center', 
                        justifyContent: 'center', color: '#3d7a4f' 
                      }}>
                        {point.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ flex: '1 1 350px', paddingLeft: 'clamp(1rem, 3vw, 2rem)' }} className="itinerary-image-side">
                <div style={{ position: 'relative' }}>
                  <img src={harishTents} alt="Night Camping" style={{ 
                    width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                    transform: 'rotate(1.5deg)'
                  }} />
                </div>
              </div>
            </div>

            {/* Day 02 - Left Image, Right Content */}
            <div style={{ 
              display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', 
              gap: '2rem', position: 'relative', zIndex: 1 
            }}>
              {/* Day Marker */}
              <div style={{ 
                position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                width: '10px', height: '10px', borderRadius: '50%', background: '#3d7a4f',
                boxShadow: '0 0 0 6px rgba(61,122,79,0.1)', top: '10px'
              }} className="timeline-marker"></div>

              <div style={{ flex: '1 1 350px', paddingRight: 'clamp(1rem, 3vw, 2rem)' }} className="itinerary-image-side">
                <div style={{ position: 'relative' }}>
                  <img src={harishPeak} alt="Taramati Peak" style={{ 
                    width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                    transform: 'rotate(-1.5deg)'
                  }} />
                </div>
              </div>

              <div style={{ flex: '1 1 350px', textAlign: 'left', paddingLeft: 'clamp(1rem, 3vw, 2rem)' }} className="itinerary-text-side">
                <div style={{ 
                  display: 'inline-block', background: '#3d7a4f', color: '#fff', 
                  fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', 
                  borderRadius: '999px', marginBottom: '1rem' 
                }}>DAY 02</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>The Summit Pursuit</h3>
                <p style={{ color: theme.subtext, lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '400px' }}>
                  The final push to the crest, exploring monolithic temples and the grand Kokankada vertical before the descent.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                  {[
                    { label: 'Trek to Harishchandragad Peak', icon: <Mountain size={16} /> },
                    { label: 'Visit Ancient Caves & Temple', icon: <Compass size={16} /> },
                    { label: 'Final Lunch & Return Journey', icon: <ArrowLeft size={16} /> },
                  ].map(point => (
                    <div key={point.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ 
                        width: '32px', height: '32px', background: 'rgba(61,122,79,0.1)', 
                        borderRadius: '6px', display: 'flex', alignItems: 'center', 
                        justifyContent: 'center', color: '#3d7a4f' 
                      }}>
                        {point.icon}
                      </div>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: theme.subtext }}>{point.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation & Inclusions */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Essentials Column */}
          <div style={{ background: darkMode ? 'rgba(255,255,255,0.03)' : '#fff', padding: '2.5rem', borderRadius: '1.5rem', border: `1px solid ${theme.border}` }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Info size={24} color="#3d7a4f" /> Trek Essentials
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '1rem', color: '#3d7a4f' }}>WHAT TO PACK</div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Trekking Shoes (High Ankle Preferred)',
                    '2L Water Bottle / Hydration Pack',
                    'Torch / Headlamp with Extra Batteries',
                    'Personal Medications & Basic First Aid',
                    'Weather-appropriate Clothing (Layers)'
                  ].map(e => (
                    <li key={e} style={{ fontSize: '0.9rem', display: 'flex', gap: '0.75rem' }}>
                       <div style={{ minWidth: '20px' }}>•</div> {e}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '1rem', color: '#3d7a4f' }}>PREPARATION TIPS</div>
                <p style={{ fontSize: '0.9rem', color: theme.subtext, lineHeight: 1.6 }}>
                  Start cardio exercises (running, jogging) 2 weeks prior to build stamina. Keep yourself hydrated 2-3 days before the trek starts. Respect local customs and maintain the sanctity of the caves.
                </p>
              </div>
            </div>
          </div>

          {/* Inclusions / Exclusions Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ background: darkMode ? 'rgba(61,122,79,0.1)' : 'rgba(61,122,79,0.05)', padding: '2rem', borderRadius: '1.5rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#3d7a4f' }}>
                <CheckCircle2 size={22} /> Inclusions
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Travel', 'Local Transport', 'Meals (2B, 2L, 1D)', 'Tent Stay', 'Forest Entry Fees', 'First Aid', 'Trek Certificate'].map(inc => (
                  <span key={inc} style={{ 
                    background: '#fff', color: '#333', padding: '6px 14px', 
                    borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}>
                    {inc}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: darkMode ? 'rgba(220, 38, 38, 0.1)' : 'rgba(220, 38, 38, 0.05)', padding: '2rem', borderRadius: '1.5rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#dc2626' }}>
                <AlertCircle size={22} /> Exclusions
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Bottled water', 'Personal expenses', 'Backpack offloading', 'Unmentioned items'].map(exc => (
                  <span key={exc} style={{ 
                    background: '#fff', color: '#333', padding: '6px 14px', 
                    borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}>
                    {exc}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ padding: '1.5rem', border: '1px dashed #3d7a4f', borderRadius: '1rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#3d7a4f', marginBottom: '0.5rem' }}>IMPORTANT GUIDELINES</div>
              <p style={{ fontSize: '0.85rem', color: theme.subtext }}>
                🚫 No alcohol / smoking allowed during the trek. 🙏 Respect nature & spiritual importance of the site.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ 
          maxWidth: '1000px', margin: '0 auto', background: '#3d7a4f', 
          color: '#fff', padding: '4rem 2rem', borderRadius: '2.5rem',
          boxShadow: '0 30px 60px rgba(61,122,79,0.3)',
          position: 'relative', overflow: 'hidden'
        }}>
          {/* Decorative background shape */}
          <div style={{ 
            position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px',
            background: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 0
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1.5rem' }}>Limited Seats Available</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Join us for an unforgettable journey to the top of the world. Ready to start your adventure?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="#enquiry" style={{ 
                background: '#fff', color: '#3d7a4f', padding: '16px 40px', 
                borderRadius: '999px', fontWeight: 800, textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Book Your Spot Now</a>
              <a href="https://wa.me/9209548856" style={{ 
                background: 'transparent', color: '#fff', padding: '16px 40px', 
                borderRadius: '999px', fontWeight: 800, textDecoration: 'none',
                fontSize: '1.1rem', border: '2px solid rgba(255,255,255,0.3)'
              }}>Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <EnquirySection
        theme={theme}
        darkMode={darkMode}
        sahyadriTreks={sahyadriTreks}
        himalayanTreks={himalayanTreks}
        showGridPattern="ltr"
      />

      <Footer theme={theme} darkMode={darkMode} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .timeline-line, .timeline-marker { display: none !important; }
          .itinerary-text-side { text-align: left !important; padding: 0 !important; }
          .itinerary-text-side p { margin-left: 0 !important; }
          .itinerary-text-side div { align-items: flex-start !important; }
          .itinerary-image-side { padding: 0 !important; margin-top: 1rem; }
        }
      `}</style>
    </>
  );
}


const MountainIcon = ({ style, className }) => (
  <svg style={style} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
  </svg>
);
