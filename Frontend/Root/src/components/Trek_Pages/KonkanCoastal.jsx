import React from 'react';
import Footer from '../Footer';
import EnquirySection from '../EnquirySection';
import { 
  Tent, Coffee, Utensils, ShieldCheck, Award, Map as MapIcon, 
  ChevronRight, Info, CheckCircle2, AlertCircle, 
  Bus, Sunset, Mountain, Compass, ArrowLeft,
  ArrowUpDown, Signal, Route, Clock, Waves, Palmtree, Camera, Ship, Music
} from 'lucide-react';
import { sahyadriTreks, himalayanTreks } from '../constants';
import { motion } from 'framer-motion';

// Import images
import konkanHero from '../../assets/konkan_hero.png';

export default function KonkanCoastal({ darkMode, setDarkMode, theme }) {
  
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '90vh', width: '100%' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <motion.div 
            initial={{ scale: 1.1, filter: 'brightness(0.4)' }}
            animate={{ scale: 1, filter: 'brightness(0.7)' }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `url(${konkanHero})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }}
          />
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
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
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
              padding: '6px 16px', borderRadius: '999px', marginBottom: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: 600
            }}>
              <Palmtree size={16} color="#4ade80" /> BEYOND THE SHORELINE
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '900px',
              marginBottom: '1.5rem',
            }}>
              Konkan Coastal Tour: <br/>Beaches, Temples & Adventure
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.9, maxWidth: '650px',
              lineHeight: 1.6, marginBottom: '2.5rem',
            }}>
              Explore the pristine white sands of Tarkarli, witness the spiritual aura of Ganpatipule, and dive into the crystal clear waters of Malvan.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#enquiry" style={{
                background: '#3d7a4f', color: '#fff', padding: '16px 36px',
                borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(61, 122, 79, 0.3)', transition: 'all 0.3s',
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Secure Your Spot
              </a>
              <a href="https://wa.me/9209548856" target="_blank" rel="noopener noreferrer" style={{
                background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '16px 36px',
                borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                Consult an Expert
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
              { label: 'DESTINATION', value: 'Malvan & Tarkarli', icon: <Waves size={22} /> },
              { label: 'DURATION', value: '7 Days Voyage', icon: <Clock size={22} /> },
              { label: 'DIFFICULTY', value: 'Easy / Relaxing', icon: <Ship size={22} /> },
              { label: 'ROUTE', value: 'Wardha - Kolhapur - Malvan', icon: <Route size={22} /> },
            ].map(stat => (
              <div key={stat.label} style={{ 
                background: '#fdfbf7', padding: '1.75rem 1rem', borderRadius: '1.25rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.03)'
              }}>
                <div style={{ color: '#155e35', marginBottom: '0.75rem' }}>{stat.icon}</div>
                <div style={{ color: '#78716c', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{stat.label}</div>
                <div style={{ color: '#1c1917', fontSize: '1.1rem', fontWeight: 900 }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section style={{ padding: '12rem 1.5rem 6rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#3d7a4f', marginBottom: '2rem' }}>
              Coastal Magic & Spiritual Serenity
            </h2>
            <p style={{ color: theme.subtext, lineHeight: 1.8, fontSize: '1.15rem', marginBottom: '2.5rem' }}>
              Experience the best of Konkan with our curated 7-day tour. From the historic Mahalaxmi Temple in Kolhapur to the turquoise waters of Devbag Sangam, this journey is designed to rejuvenate your soul.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { title: 'Beaches & Sunsets', desc: 'Visit Ganpatipule, Aare Ware Beach, and Tarkarli for pristine sands and breathtaking orange horizons.', icon: <Sunset size={24} /> },
                { title: 'Water Sports & Scuba', desc: 'Dive into the Arabian Sea with included Scuba Diving and optional jet ski adventures at Malvan.', icon: <Waves size={24} /> },
                { title: 'Cultural Immersion', desc: 'Seek blessings at Mahalaxmi Temple and Ganpatipule Temple while enjoying authentic local cuisine.', icon: <Compass size={24} /> },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ 
                    minWidth: '48px', height: '48px', background: 'rgba(61,122,79,0.1)', 
                    borderRadius: '12px', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', color: '#3d7a4f' 
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '1rem', color: theme.subtext, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', 
              background: 'rgba(61,122,79,0.1)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', 
              zIndex: -1 
            }}></div>
            <img 
              src="https://images.unsplash.com/photo-1544735038-17546e0443d6?auto=format&fit=crop&w=800&q=80" 
              alt="Konkan Coast" 
              style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }} 
            />
            <div style={{ 
              position: 'absolute', bottom: '-2rem', right: '2rem', 
              background: '#3d7a4f', color: '#fff', padding: '1.5rem', 
              borderRadius: '1rem', boxShadow: '0 20px 40px rgba(61,122,79,0.3)',
              maxWidth: '200px'
            }}>
              <StarIcon size={24} />
              <div style={{ fontWeight: 800, marginTop: '0.5rem' }}>4.8/5 Rating</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>from 120+ happy travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ 
        padding: '6rem 1.5rem', 
        background: darkMode ? 'rgba(61,122,79,0.1)' : 'rgba(61,122,79,0.03)',
        margin: '4rem 0',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem', letterSpacing: '-0.02em' }}>Investment for Memories</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              background: theme.cardBg, padding: '3.5rem', borderRadius: '2rem',
              width: '100%', maxWidth: '500px',
              border: `1px solid ${theme.border}`, boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute', top: '2rem', right: '-2.5rem', 
                background: '#dc2626', color: '#fff', padding: '8px 40px', 
                transform: 'rotate(45deg)', fontSize: '0.8rem', fontWeight: 900,
                letterSpacing: '0.1em'
              }}>Special Offer</div>
              
              <h3 style={{ color: '#3d7a4f', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>COST OF INVESTMENT</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', color: theme.subtext, textDecoration: 'line-through' }}>₹11,599</span>
                <span style={{ fontSize: '4.5rem', fontWeight: 900, color: theme.text }}>₹10,999</span>
              </div>
              <p style={{ color: theme.subtext, marginBottom: '2.5rem' }}>per person (Offer Price)</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {['Sleeper Train Tickets Included', 'All Road Transfers', 'Accommodation (Triple/Quad)', 'Scuba Diving Experience'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                    <CheckCircle2 size={18} color="#3d7a4f" />
                    <span style={{ fontWeight: 600 }}>{f}</span>
                  </div>
                ))}
              </div>
              
              <a href="#enquiry" style={{ 
                display: 'block', background: '#3d7a4f', color: '#fff', 
                padding: '1.25rem', borderRadius: '1rem', fontWeight: 800, 
                textDecoration: 'none', transition: 'all 0.3s'
              }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                Book Now with 70% Deposit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>The 7-Day Voyage</h2>
          <p style={{ color: theme.subtext, fontSize: '1.1rem' }}>A day-by-day breakdown of your coastal adventure</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { day: 'Day 1', title: 'Wardha → Kolhapur', desc: 'Departure by sleeper train for an overnight journey.', icon: <Bus /> },
            { day: 'Day 2', title: 'Kolhapur Sightseeing', desc: 'Arrival & hotel check-in. Visit Mahalaxmi Temple & Rankala Lake. Night stay at Kolhapur.', icon: <Compass /> },
            { day: 'Day 3', title: 'Kolhapur → Ganpatipule', desc: 'Travel by Non-AC bus. Visit Ganpatipule Temple, Aare Ware Beach & Table Point. Sunset view. Night stay at Ganpatipule.', icon: <Sunset /> },
            { day: 'Day 4', title: 'Ganpatipule → Malvan', desc: 'Travel to Malvan, hotel check-in, and leisure time for beach walks. Night stay at Malvan.', icon: <Waves /> },
            { day: 'Day 5', title: 'Tarkarli & Devbag', desc: 'Visit Tarkarli Beach & Devbag Sangam. Scuba Diving experience included. Night departure for Kolhapur.', icon: <Waves /> },
            { day: 'Day 6', title: 'Kolhapur → Wardha', desc: 'Arrival at Kolhapur & board return train for overnight journey.', icon: <Ship /> },
            { day: 'Day 7', title: 'Arrival at Wardha', desc: 'Tour ends with happy memories.', icon: <ArrowLeft /> },
          ].map((item, idx) => (
            <motion.div 
              key={item.day}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', gap: '2rem', background: theme.cardBg, 
                padding: '2rem', borderRadius: '1.5rem', border: `1px solid ${theme.border}`,
                alignItems: 'center'
              }}
            >
              <div style={{ 
                fontSize: '1.5rem', fontWeight: 900, color: '#3d7a4f', 
                minWidth: '80px', textAlign: 'center' 
              }}>
                {item.day}
              </div>
              <div style={{ width: '2px', height: '50px', background: 'rgba(61,122,79,0.2)' }}></div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: theme.subtext, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          <div style={{ background: 'rgba(61,122,79,0.05)', padding: '3rem', borderRadius: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 color="#3d7a4f" /> What's Included
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Sleeper Train Travel (Wardha–Kolhapur–Wardha)',
                'Road Transport (Complete Tour)',
                'Professional Tour Manager',
                'Meals: Day 2 (B&D), Day 3-6 (B&L)',
                'Accommodation (Triple/Quad Sharing)',
                'Scuba Diving Experience 🤿',
                'First Aid Facility',
                'Campfire & DJ Night 🎶🔥'
              ].map(i => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '1.05rem' }}>
                  <div style={{ color: '#3d7a4f' }}>•</div> {i}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(220, 38, 38, 0.05)', padding: '3rem', borderRadius: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <AlertCircle color="#dc2626" /> What's Excluded
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Mineral Water & Beverages',
                'Personal Expenses',
                'Optional Water Sports (Jet Ski, Banana Ride, etc.)',
                'Sindhudurg Fort Entry & Ferry Charges',
                'Anything not mentioned in Inclusions'
              ].map(i => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '1.05rem' }}>
                  <div style={{ color: '#dc2626' }}>•</div> {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Policies */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', marginTop: '3rem' 
        }}>
          <div style={{ background: theme.cardBg, padding: '2rem', borderRadius: '1.5rem', border: `1px solid ${theme.border}` }}>
            <h4 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem', color: '#3d7a4f' }}>PAYMENT TERMS</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ fontWeight: 600 }}>• 70% at booking time</li>
              <li style={{ fontWeight: 600 }}>• 30% before departure</li>
            </ul>
          </div>
          <div style={{ background: theme.cardBg, padding: '2rem', borderRadius: '1.5rem', border: `1px solid ${theme.border}` }}>
            <h4 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem', color: '#dc2626' }}>CANCELLATION POLICY</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <li>• 20 days before: 60% refund</li>
              <li>• 10 days before: 45% refund</li>
              <li>• 7 days before: 30% refund</li>
              <li>• Less than 7 days: No refund</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Special CTA */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ 
          maxWidth: '1200px', margin: '0 auto', background: '#1c1917', 
          color: '#fff', borderRadius: '3rem', padding: '5rem 3rem',
          textAlign: 'center', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(61,122,79,0.3) 0%, transparent 40%)',
            zIndex: 0
          }} />
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
            Limited Seats for Konkan Batch
          </h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', position: 'relative', zIndex: 1 }}>
            The coastline is calling. Secure your spot on Asia's most beautiful coastal route before the batch is full.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <a href="#enquiry" style={{ background: '#3d7a4f', color: '#fff', padding: '16px 48px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none' }}>
              Book Now: 9209548856
            </a>
            <a href="https://wa.me/9209548856" style={{ background: 'transparent', color: '#fff', padding: '16px 48px', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)' }}>
              WhatsApp Enquiry
            </a>
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

function StarIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}
