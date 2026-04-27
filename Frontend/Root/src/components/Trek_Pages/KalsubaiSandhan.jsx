import React from 'react';
import Footer from '../Footer';
import EnquirySection from '../EnquirySection';
import { 
  Tent, Coffee, Utensils, ShieldCheck, Award, Map as MapIcon, 
  ChevronRight, Info, CheckCircle2, AlertCircle, 
  Bus, Sunset, Mountain, Compass, ArrowLeft,
  ArrowUpDown, Signal, Route, Clock, CloudRain, Sunrise, Gem
} from 'lucide-react';
import { sahyadriTreks, himalayanTreks } from '../constants';
import { motion } from 'framer-motion';

// Import images
import kalsubaiHero from '../../assets/kalsubai_hero.png';

export default function KalsubaiSandhan({ darkMode, setDarkMode, theme }) {
  
  return (
    <>
      {/* Hero Section */}
      <section className="trek-detail-hero" style={{ position: 'relative', height: '90vh', width: '100%' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <motion.div 
            initial={{ scale: 1.1, filter: 'brightness(0.3)' }}
            animate={{ scale: 1, filter: 'brightness(0.6)' }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `url(${kalsubaiHero})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }}
          />
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
          }} />
        </div>
        
        <div style={{
          position: 'relative', height: '100%', maxWidth: '1440px', margin: '0 auto',
          padding: '0 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          color: '#faf2ee', zIndex: 10
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: '#3d7a4f', color: '#faf2ee',
              padding: '6px 16px', borderRadius: '999px', marginBottom: '1.5rem',
              fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em'
            }}>
              <Mountain size={16} /> EVEREST OF MAHARASHTRA
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '850px',
              marginBottom: '1.5rem',
            }}>
              Kalsubai Peak & <br/>Sandhan Valley Adventure
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.9, maxWidth: '650px',
              lineHeight: 1.6, marginBottom: '2.5rem',
            }}>
              Conquer the highest peak of Maharashtra (5,400 ft) and explore Asia's 2nd largest valley in one power-packed weekend.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#enquiry" style={{
                background: '#faf2ee', color: '#3d7a4f', padding: '16px 40px',
                borderRadius: '999px', fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)', transition: 'all 0.3s',
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Join the Expedition
              </a>
              <a href="https://wa.me/9209548856" target="_blank" rel="noopener noreferrer" style={{
                background: 'rgba(250, 242, 238,0.1)', color: '#faf2ee', padding: '16px 40px',
                borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(250, 242, 238,0.2)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                Travel Details
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="trek-stats-grid" style={{
          position: 'absolute', bottom: '-120px', left: '50%', transform: 'translateX(-50%)',
          width: 'calc(100% - 3rem)', maxWidth: '1100px', zIndex: 30
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '0.75rem', width: '100%'
          }}>
            {[
              { label: 'ALTITUDE', value: '5,400 ft', icon: <ArrowUpDown size={22} /> },
              { label: 'DIFFICULTY', value: 'Moderate', icon: <Signal size={22} /> },
              { label: 'DISTANCE', value: '6.5 km', icon: <Route size={22} /> },
              { label: 'DURATION', value: '3-4 hrs Trek', icon: <Clock size={22} /> },
            ].map(stat => (
              <div key={stat.label} style={{ 
                background: '#FFF8F0', padding: '1.75rem 1rem', borderRadius: '1.25rem',
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
      <section className="trek-intro-section" style={{ padding: '10rem 1.5rem 2.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, 
              lineHeight: 1, letterSpacing: '-0.05em', color: '#3d7a4f', 
              marginBottom: '1.5rem' 
            }}>
              The Everest of <span style={{ color: theme.text }}>Maharashtra</span>
            </h2>
            <p style={{ color: theme.subtext, lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
              Standing tall at 5,400 feet, Kalsubai is the highest peak in Maharashtra. Paired with the breathtaking Sandhan Valley—often called the Shadow Valley—this trek offers an unparalleled mix of high-altitude triumph and deep canyon exploration.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'The Summit Peak', desc: 'Conquer the highest point in the Sahyadris and visit the sacred temple dedicated to Goddess Kalsubai.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
                { title: 'Shadow Valley', desc: 'Explore Asia\'s second-largest valley, a rock-cut canyon that remains shaded by towering cliffs all day.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
                { title: 'Bhandardara Views', desc: 'Enjoy panoramic views of the Arthur Lake and the surrounding Wilson Dam from the peak and campsites.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
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
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/62/d5/74/view-from-sandhan.jpg?w=1200&h=-1&s=1" alt="Kalsubai Temple" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <img src="https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/Kalsubai-Trek.jpeg?resize=1024%2C573&ssl=1" alt="Kalsubai Peak View" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="pricing-grid-section" style={{ padding: '1rem 1.5rem', background: darkMode ? '#282828ff' : '#FFF8F0' }}>
        <div className="pricing-grid-container" style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, 
              lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '0.65rem' 
            }}>
              Pricing & <span style={{ color: '#3d7a4f' }}>Packages</span>
            </h2>
            <p style={{ color: theme.subtext, fontSize: '0.9rem' }}>Choose the pickup that suits your location</p>
          </div>

          <div className="pricing-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.9rem' }}>
            {[
              { 
                title: 'NAGPUR / WARDHA / AMR.', 
                price: '₹4,199', 
                features: ['Sleeper Train Travel', 'Local Pickup & Drop', 'Meals (2B, 2L, 1D)', 'Stay (Tent / Homestay)', 'Trek Certification'],
                highlight: true
              },
              { 
                title: 'IGATPURI PACKAGE', 
                price: '₹2,999', 
                features: ['Local Transport from Igatpuri', 'Meals (2B, 2L, 1D)', 'Stay (Tent / Homestay)', 'Expert Trek Guide'],
                highlight: false
              },
            ].map(plan => (
              <div key={plan.title} style={{ 
                background: theme.cardBg, padding: '2.2rem', borderRadius: '1.6rem',
                flex: '1', minWidth: '320px', maxWidth: '290px',
                border: plan.highlight ? '2px solid #3d7a4f' : `1px solid ${theme.border}`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                position: 'relative'
              }}>
                {plan.highlight && (
                  <div style={{ 
                    position: 'absolute', top: '-10px', background: '#3d7a4f', 
                    color: '#faf2ee', padding: '4px 13px', borderRadius: '999px',
                    fontSize: '0.55rem', fontWeight: 800
                  }}>MOST POPULAR</div>
                )}
                <h3 style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', color: theme.subtext, marginBottom: '0.95rem' }}>{plan.title}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.6rem' }}>{plan.price}<span style={{ fontSize: '0.65rem', fontWeight: 500 }}>/-</span></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', width: '100%', marginBottom: '1.9rem' }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="#3d7a4f" />
                      <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{f}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#enquiry" style={{ 
                  width: '100%', textAlign: 'center', background: plan.highlight ? '#3d7a4f' : 'transparent',
                  color: plan.highlight ? '#faf2ee' : '#3d7a4f', padding: '0.65rem', borderRadius: '0.65rem',
                  fontWeight: 800, textDecoration: 'none', border: plan.highlight ? 'none' : '2px solid #3d7a4f',
                  transition: 'all 0.3s'
                }}>Book My Spot</a>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '2rem', textAlign: 'center', padding: '1rem', 
            background: 'rgba(61,122,79,0.1)', borderRadius: '1rem', maxWidth: '500px', margin: '2rem auto 0'
          }}>
            <Gem size={24} color="#3d7a4f" style={{ marginBottom: '0rem' }} />
            <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Special Offer</h4>
            <p style={{ color: theme.subtext }}>Exclusive discounts available for Defence Personnel & NCC Cadets. Contact us with your ID for details.</p>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section style={{ padding: '2.5rem 1.5rem', background: theme.bg, position: 'relative', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ color: '#3d7a4f', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>THE PATH FORWARD</div>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, 
            lineHeight: 1, letterSpacing: '-0.05em' 
          }}>
            Curated <span style={{ color: '#3d7a4f' }}>Itinerary</span>
          </h2>
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
                  display: 'inline-block', background: '#3d7a4f', color: '#faf2ee', 
                  fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', 
                  borderRadius: '999px', marginBottom: '1rem' 
                }}>DAY 01</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>Kalsubai Summit Trek</h3>
                <p style={{ color: theme.subtext, lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '400px', marginLeft: 'auto' }}>
                  Early morning / night trek start to reach the summit. Experience the divine sunrise and explore the Goddess Kalsubai temple.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
                  {[
                    { label: '6.5 km Midnight/Early Morning Trek', icon: <Mountain size={16} /> },
                    { label: 'Reach 5,400 ft Summit', icon: <ArrowUpDown size={16} /> },
                    { label: 'Temple Visit & Sunrise', icon: <Sunrise size={16} /> },
                    { label: 'Descend to base for Lunch', icon: <Utensils size={16} /> },
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
                  <img src="https://montaxe.com/wp-content/uploads/2024/07/Kalsubai-Trek-Peak-height-Altitude-difficulty-level-best-time-to-visit-1024x536.webp" alt="Mountain View" style={{ 
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
                  <img src="https://www.alltrails.com/mugen/image/trail-app-router?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzc4NzcxNDMvYmI3Nzk4ZmU3YzE4OTZkZGJmYzVjOWU2MTYyZDdiNDkuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMTA4MCIsImhlaWdodCI6IjcwMCIsImZpdCI6ImNvdmVyIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19&w=3840&q=75" alt="Sandhan Valley" style={{ 
                    width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                    transform: 'rotate(-1.5deg)'
                  }} />
                </div>
              </div>
 
              <div style={{ flex: '1 1 350px', textAlign: 'left', paddingLeft: 'clamp(1rem, 3vw, 2rem)' }} className="itinerary-text-side">
                <div style={{ 
                  display: 'inline-block', background: '#3d7a4f', color: '#faf2ee', 
                  fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', 
                  borderRadius: '999px', marginBottom: '1rem' 
                }}>DAY 02</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>Sandhan Valley Adventure</h3>
                <p style={{ color: theme.subtext, lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '400px' }}>
                  Trek through the Shadow Valley, exploring deep rock-cut canyons and stunning rock formations.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                  {[
                    { label: 'Explore Sandhan Valley Canyon', icon: <Compass size={16} /> },
                    { label: '3 km Adventure Trail', icon: <Route size={16} /> },
                    { label: 'Rock Formation Sightseeing', icon: <Gem size={16} /> },
                    { label: 'Group Memories & Return', icon: <ArrowLeft size={16} /> },
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
      <section style={{ padding: '3.5rem 1.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Essentials Column */}
          <div style={{ background: darkMode ? 'rgba(250, 242, 238,0.03)' : '#faf2ee', padding: '2.5rem', borderRadius: '1.5rem', border: `1px solid ${theme.border}` }}>
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
                  Start cardio exercises (running, jogging) 2 weeks prior to build stamina. Keep yourself hydrated 2-3 days before the trek starts. Respect local traditions in the base village.
                </p>
              </div>
            </div>
          </div>

          {/* Inclusions / Exclusions Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ background: darkMode ? 'rgba(61,122,79,0.1)' : '#FFF8F0', padding: '2rem', borderRadius: '1.5rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#3d7a4f' }}>
                <CheckCircle2 size={22} /> Inclusions
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Travel', 'Local Transport', 'Meals (2B, 2L, 1D)', 'Stay (Tent / Homestay)', 'Forest Entry', 'Trek Leader', 'First Aid', 'Trek Certificate'].map(inc => (
                  <span key={inc} style={{ 
                    background: '#faf2ee', color: '#333', padding: '6px 14px', 
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
                {['Bottled Water', 'Personal Expenses', 'Rappelling / Zipline', 'Unmentions'].map(exc => (
                  <span key={exc} style={{ 
                    background: '#faf2ee', color: '#333', padding: '6px 14px', 
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
                🚫 No alcohol / smoking allowed during the trek. 🙏 Respect nature & spiritual importance of the site. Seats: 9209548856
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ 
          maxWidth: '1000px', margin: '0 auto', background: '#3d7a4f', 
          color: '#faf2ee', padding: '2.5rem 2rem', borderRadius: '2.5rem',
          boxShadow: '0 30px 60px rgba(61,122,79,0.3)',
          position: 'relative', overflow: 'hidden'
        }}>
          {/* Decorative background shape */}
          <div style={{ 
            position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px',
            background: 'rgba(250, 242, 238,0.1)', borderRadius: '50%', zIndex: 0
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, 
              lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '1.5rem' 
            }}>
              Limited Seats <span style={{ color: '#9dccaa' }}>Available</span>
            </h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Join us for an unforgettable journey to the top of the world. Ready to start your adventure?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="#enquiry" style={{ 
                background: '#faf2ee', color: '#3d7a4f', padding: '16px 40px', 
                borderRadius: '999px', fontWeight: 800, textDecoration: 'none',
                fontSize: '1.1rem'
              }}>Book Your Spot Now</a>
              <a href="https://wa.me/9209548856" style={{ 
                background: 'transparent', color: '#faf2ee', padding: '16px 40px', 
                borderRadius: '999px', fontWeight: 800, textDecoration: 'none',
                fontSize: '1.1rem', border: '2px solid rgba(250, 242, 238,0.3)'
              }}>Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>

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
