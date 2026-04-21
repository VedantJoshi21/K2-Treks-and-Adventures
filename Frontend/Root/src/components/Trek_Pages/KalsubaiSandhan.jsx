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
      <section style={{ position: 'relative', height: '90vh', width: '100%' }}>
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
          color: '#fff', zIndex: 10
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: '#3d7a4f', color: '#fff',
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
                background: '#fff', color: '#3d7a4f', padding: '16px 40px',
                borderRadius: '999px', fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)', transition: 'all 0.3s',
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Join the Expedition
              </a>
              <a href="https://wa.me/9209548856" target="_blank" rel="noopener noreferrer" style={{
                background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '16px 40px',
                borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                Travel Details
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div style={{
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

      {/* Narrative Section */}
      <section style={{ padding: '12rem 1.5rem 6rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img 
              src="https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/Kalsubai-Trek.jpeg?resize=1024%2C573&ssl=1" 
              alt="Himalayan View" 
              style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }} 
            />
            {/* <div style={{ 
              position: 'absolute', top: '-2rem', left: '-2rem', 
              background: '#3d7a4f', color: '#fff', padding: '1rem 2rem', 
              borderRadius: '999px', fontWeight: 800, boxShadow: '0 10px 20px rgba(61,122,79,0.3)' 
            }}>
              Highest Peak in Maharashtra
            </div> */}
          </div>
          
          <div>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em', color: '#3d7a4f' }}>
              The Ultimate Sahyadri Duo
            </h2>
            <p style={{ color: theme.subtext, lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Kalsubai Peak offers a commanding view of the entire Bhandardara region, while Sandhan Valley presents a thrilling challenge through its deep rock-cut canyons. This 2-day experience is the perfect blend of high-altitude trekking and valley exploration.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {[
                { title: 'The Peak', desc: 'Summiting at 1,646 meters with the divine temple.', icon: <Mountain color="#3d7a4f" /> },
                { title: 'The Valley', desc: 'Asia\'s shadow valley with its unique rock formations.', icon: <Route color="#3d7a4f" /> },
                { title: 'The Stay', desc: 'Authentic homestays with local Maharashtrian hospitality.', icon: <Tent color="#3d7a4f" /> },
                { title: 'The View', desc: 'Breathtaking Bhandardara backwaters from the top.', icon: <Sunrise color="#3d7a4f" /> },
              ].map(item => (
                <div key={item.title}>
                  <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
                  <h4 style={{ fontWeight: 800, marginBottom: '0.4rem', fontSize: '1.1rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: theme.subtext, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section style={{ padding: '6rem 1.5rem', background: darkMode ? 'rgba(0,0,0,0.2)' : '#f8f9fa' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>Pricing & Packages</h2>
            <p style={{ color: theme.subtext }}>Choose the pickup that suits your location</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
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
                background: theme.cardBg, padding: '3.5rem', borderRadius: '2.5rem',
                flex: '1', minWidth: '320px', maxWidth: '450px',
                border: plan.highlight ? '2px solid #3d7a4f' : `1px solid ${theme.border}`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                position: 'relative'
              }}>
                {plan.highlight && (
                  <div style={{ 
                    position: 'absolute', top: '-15px', background: '#3d7a4f', 
                    color: '#fff', padding: '6px 20px', borderRadius: '999px',
                    fontSize: '0.8rem', fontWeight: 800
                  }}>MOST POPULAR</div>
                )}
                <h3 style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '0.1em', color: theme.subtext, marginBottom: '1.5rem' }}>{plan.title}</h3>
                <div style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2.5rem' }}>{plan.price}<span style={{ fontSize: '1rem', fontWeight: 500 }}>/-</span></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', marginBottom: '3rem' }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle2 size={18} color="#3d7a4f" />
                      <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{f}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#enquiry" style={{ 
                  width: '100%', textAlign: 'center', background: plan.highlight ? '#3d7a4f' : 'transparent',
                  color: plan.highlight ? '#fff' : '#3d7a4f', padding: '1rem', borderRadius: '1rem',
                  fontWeight: 800, textDecoration: 'none', border: plan.highlight ? 'none' : '2px solid #3d7a4f',
                  transition: 'all 0.3s'
                }}>Book My Spot</a>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '4rem', textAlign: 'center', padding: '1.5rem', 
            background: 'rgba(61,122,79,0.1)', borderRadius: '1rem', maxWidth: '600px', margin: '4rem auto 0'
          }}>
            <Gem size={24} color="#3d7a4f" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Special Offer</h4>
            <p style={{ color: theme.subtext }}>Exclusive discounts available for Defence Personnel & NCC Cadets. Contact us with your ID for details.</p>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '4rem' }}>The Journey Plan</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ 
              minWidth: '60px', height: '60px', background: '#3d7a4f', color: '#fff', 
              borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              fontSize: '1.25rem', fontWeight: 900
            }}>01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>Day 1 – Kalsubai Summit Trek</h3>
              <p style={{ color: theme.subtext, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Arrival & base village briefing. Early morning / night trek start to Kalsubai Peak (6.5 km | 3–4 hrs). Visit the Kalsubai Temple at the summit, enjoy the sunrise and scenic views. Descend for lunch and transfer to stay (Homestay) to relax.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['6.5 km Trek', '5,400 ft altitude', 'Sunrise View'].map(t => (
                  <span key={t} style={{ background: theme.border, padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ 
              minWidth: '60px', height: '60px', background: '#3d7a4f', color: '#fff', 
              borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              fontSize: '1.25rem', fontWeight: 900
            }}>02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>Day 2 – Sandhan Valley Adventure</h3>
              <p style={{ color: theme.subtext, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Morning breakfast followed by a trek through Sandhan Valley (3 km | 2–3 hrs). Explore the canyon and rock formations. Lunch during/after the trek, then begin the return journey with amazing memories.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['Canyon Trail', '3 km Adventure', 'Rock Formations'].map(t => (
                  <span key={t} style={{ background: theme.border, padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Safety */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          <div style={{ background: theme.cardBg, padding: '3rem', borderRadius: '2rem', border: `1px solid ${theme.border}` }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck color="#3d7a4f" /> Inclusions
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Travel', 'Local Transport', 'Meals (2B, 2L, 1D)', 'Stay (Tent / Homestay)', 'Forest Entry', 'Trek Leader', 'First Aid', 'Trek Certificate'].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#3d7a4f" /> {i}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(220, 38, 38, 0.05)', padding: '3rem', borderRadius: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#dc2626' }}>
              <AlertCircle size={22} /> Exclusions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Bottled Water', 'Personal Expenses', 'Rappelling / Zipline', 'Unmentions'].map(i => (
                <div key={i} style={{ fontSize: '0.95rem', opacity: 0.8 }}>• {i}</div>
              ))}
            </div>
          </div>

          <div style={{ background: '#1c1917', color: '#fff', padding: '3rem', borderRadius: '2rem' }}>
            <h4 style={{ fontWeight: 800, fontSize: '0.9rem', color: '#4ade80', marginBottom: '1rem', letterSpacing: '0.1em' }}>GUIDELINES</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '2rem' }}>
              🚫 No alcohol or smoking allowed during the trek. 
              <br/><br/>
              🙏 Respect nature and local traditions. Carry personal medicines if required.
            </p>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>Seats: 9209548856</div>
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
    </>
  );
}
