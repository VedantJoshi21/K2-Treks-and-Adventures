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
          color: '#faf2ee', zIndex: 10
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: 'rgba(250, 242, 238,0.1)', backdropFilter: 'blur(10px)',
              padding: '6px 16px', borderRadius: '999px', marginBottom: '1.5rem',
              border: '1px solid rgba(250, 242, 238,0.2)', fontSize: '0.9rem', fontWeight: 600
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
                background: '#3d7a4f', color: '#faf2ee', padding: '16px 36px',
                borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(61, 122, 79, 0.3)', transition: 'all 0.3s',
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Secure Your Spot
              </a>
              <a href="https://wa.me/9209548856" target="_blank" rel="noopener noreferrer" style={{
                background: 'rgba(250, 242, 238,0.1)', color: '#faf2ee', padding: '16px 36px',
                borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(250, 242, 238,0.2)',
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
                background: '#FFF8F0', padding: '1.75rem 1rem', borderRadius: '1.25rem',
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

      {/* Intro Section */}
      <section style={{ padding: '10rem 1.5rem 2.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, 
              lineHeight: 1, letterSpacing: '-0.05em', color: '#3d7a4f', 
              marginBottom: '1.5rem' 
            }}>
              Coastal Magic & <span style={{ color: theme.text }}>Spiritual Serenity</span>
            </h2>
            <p style={{ color: theme.subtext, lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
              Experience the best of Konkan with our curated 7-day tour. From the historic Mahalaxmi Temple in Kolhapur to the turquoise waters of Devbag Sangam, this journey is designed to rejuvenate your soul through sun, sand, and spirituality.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Beaches & Sunsets', desc: 'Visit Ganpatipule, Aare Ware Beach, and Tarkarli for pristine sands and breathtaking orange horizons.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
                { title: 'Water Sports & Scuba', desc: 'Dive into the Arabian Sea with included Scuba Diving and witness the vibrant marine life of Malvan.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
                { title: 'Cultural Immersion', desc: 'Seek blessings at the ancient Mahalaxmi and Ganpatipule temples while enjoying authentic local Malvani cuisine.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
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
              <img src="https://www.traveltrendstoday.in/storage/posts/8337c9a3a911760255c845b8b563ed95.jpg" alt="Konkan Coast" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <img src="https://www.ganpatipule.co.in/images/slider/7.jpg" alt="Ganpatipule Temple" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ 
        padding: '2.5rem 1.5rem', 
        background: darkMode ? '#282828ff' : '#FFF8F0',
        margin: '1.5rem 0',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, 
            lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '2.5rem' 
          }}>
            Investment <span style={{ color: '#3d7a4f' }}>for Memories</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              background: 'theme.cardBg', padding: '2.2rem', borderRadius: '2rem',
              width: '100%', maxWidth: '320px',
              border: `1px solid ${theme.border}`, boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute', top: '1.3rem', right: '-1.6rem', 
                background: '#dc2626', color: '#faf2ee', padding: '5px 26px', 
                transform: 'rotate(45deg)', fontSize: '0.55rem', fontWeight: 900,
                letterSpacing: '0.1em'
              }}>Special Offer</div>
              
              <h3 style={{ color: '#3d7a4f', fontWeight: 800, fontSize: '0.75rem', marginBottom: '0.95rem', letterSpacing: '0.1em' }}>COST OF INVESTMENT</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '0.8rem', color: theme.subtext, textDecoration: 'line-through' }}>₹11,599</span>
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: theme.text }}>₹10,999</span>
              </div>
              <p style={{ color: theme.subtext, fontSize: '0.85rem', marginBottom: '0.8rem' }}>per person (Offer Price)</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.6rem' }}>
                {['Sleeper Train Tickets Included', 'All Road Transfers', 'Accommodation (Triple/Quad)', 'Scuba Diving Experience'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    <CheckCircle2 size={14} color="#3d7a4f" />
                    <span style={{ fontWeight: 600, fontSize: '0.8rem' }}>{f}</span>
                  </div>
                ))}
              </div>
              
              <a href="#enquiry" style={{ 
                display: 'block', background: '#3d7a4f', color: '#faf2ee', 
                padding: '0.8rem', borderRadius: '0.65rem', fontWeight: 800, 
                textDecoration: 'none', transition: 'all 0.3s'
              }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                Book Now with 70% Deposit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section style={{ padding: '2.5rem 1.5rem', background: theme.bg, position: 'relative', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            {[
              { 
                day: 'DAY 01', 
                title: 'Wardha → Kolhapur', 
                desc: 'Departure by sleeper train for an overnight journey towards the historic city of Kolhapur.',
                points: [{ label: 'Board Sleeper Train', icon: <Bus size={16} /> }],
                image: 'https://www.railway-technology.com/wp-content/uploads/sites/13/2023/08/Don-Mammoser-Jaipur.jpg',
                reverse: false 
              },
              { 
                day: 'DAY 02', 
                title: 'Kolhapur Sightseeing', 
                desc: 'Arrival at Kolhapur. Visit the legendary Mahalaxmi Temple & relax by Rankala Lake.',
                points: [{ label: 'Mahalaxmi Temple Visit', icon: <Compass size={16} /> }, { label: 'Evening at Rankala Lake', icon: <Sunset size={16} /> }],
                image: 'https://tanushreecabs.com/wp-content/uploads/2025/03/Mahalaxmi-Temple-Kolhapur--1024x768.webp',
                reverse: true 
              },
              { 
                day: 'DAY 03', 
                title: 'Kolhapur → Ganpatipule', 
                desc: 'Journey to the coastal town of Ganpatipule via the scenic Aare Ware coastal road.',
                points: [{ label: 'Ganpatipule Temple', icon: <Compass size={16} /> }, { label: 'Sunset at Table Point', icon: <Sunset size={16} /> }],
                image: 'https://www.ganpatipule.co.in/images/slider/7.jpg',
                reverse: false 
              },
              { 
                day: 'DAY 04', 
                title: 'Ganpatipule → Malvan', 
                desc: 'Scenic drive to Malvan, check-in at hotel and enjoy local Malvani cuisine and beach walks.',
                points: [{ label: 'Coastal Road Trip', icon: <Route size={16} /> }, { label: 'Leisure at Malvan Beach', icon: <Waves size={16} /> }],
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
                reverse: true 
              },
              { 
                day: 'DAY 05', 
                title: 'Tarkarli & Scuba Adventure', 
                desc: 'Dive into the Arabian Sea with included Scuba Diving. Visit Tarkarli Beach and Devbag Sangam.',
                points: [{ label: 'Scuba Diving (Included)', icon: <Waves size={16} /> }, { label: 'Tarkarli Beach Activities', icon: <Ship size={16} /> }],
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
                reverse: false 
              },
              { 
                day: 'DAY 06 & 07', 
                title: 'Return Journey', 
                desc: 'Board return train from Kolhapur. Arrival at Wardha with happy coastal memories.',
                points: [{ label: 'Board Return Train', icon: <Ship size={16} /> }, { label: 'Tours Ends at Wardha', icon: <ArrowLeft size={16} /> }],
                image: 'https://thumbs.dreamstime.com/b/mumbai-india-october-suburban-train-cst-station-railway-chhatrapati-shivaji-terminus-415025614.jpg',
                reverse: true 
              },
            ].map((item, idx) => (
              <div key={item.day} style={{ 
                display: 'flex', flexWrap: item.reverse ? 'wrap-reverse' : 'wrap', alignItems: 'center', 
                gap: '2rem', position: 'relative', zIndex: 1 
              }}>
                {/* Day Marker */}
                <div style={{ 
                  position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                  width: '10px', height: '10px', borderRadius: '50%', background: '#3d7a4f',
                  boxShadow: '0 0 0 6px rgba(61,122,79,0.1)', top: '10px'
                }} className="timeline-marker"></div>
  
                {!item.reverse ? (
                  <>
                    <div style={{ flex: '1 1 350px', textAlign: 'right', paddingRight: 'clamp(1rem, 3vw, 2rem)' }} className="itinerary-text-side">
                      <div style={{ 
                        display: 'inline-block', background: '#3d7a4f', color: '#faf2ee', 
                        fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', 
                        borderRadius: '999px', marginBottom: '1rem' 
                      }}>{item.day}</div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>{item.title}</h3>
                      <p style={{ color: theme.subtext, lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '400px', marginLeft: 'auto' }}>
                        {item.desc}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
                        {item.points.map(point => (
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
                        <img src={item.image} alt={item.title} style={{ 
                          width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                          transform: 'rotate(1.5deg)'
                        }} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ flex: '1 1 350px', paddingRight: 'clamp(1rem, 3vw, 2rem)' }} className="itinerary-image-side">
                      <div style={{ position: 'relative' }}>
                        <img src={item.image} alt={item.title} style={{ 
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
                      }}>{item.day}</div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>{item.title}</h3>
                      <p style={{ color: theme.subtext, lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '400px' }}>
                        {item.desc}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                        {item.points.map(point => (
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
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Logistics & Essentials */}
      <section style={{ padding: '2.5rem 1.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Essentials Column */}
          <div style={{ background: darkMode ? 'rgba(250, 242, 238,0.03)' : '#faf2ee', padding: '2rem', borderRadius: '1.5rem', border: `1px solid ${theme.border}` }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Info size={24} color="#3d7a4f" /> Tour Essentials
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '1rem', color: '#3d7a4f' }}>WHAT TO PACK</div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Lightweight Cotton Clothes',
                    'Beachwear & Extra Pair of Footwear',
                    'Sunscreen, Sunglasses & Hat',
                    'Personal Toiletries & Medications',
                    'Waterproof Bag for Mobile/Camera'
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
                  Keep your ID cards ready for temple entries. Stay hydrated throughout the coastal journey. Inform the guide beforehand for any specific dietary requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Inclusions / Exclusions Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: darkMode ? 'rgba(61,122,79,0.1)' : '#FFF8F0', padding: '2rem', borderRadius: '1.5rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#3d7a4f' }}>
                <CheckCircle2 size={22} /> What's Included
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {[
                  'Sleeper Train Travel',
                  'Road Transport',
                  'Tour Manager',
                  'Accommodation',
                  'Scuba Diving',
                  'First Aid',
                  'Campfire & DJ Night'
                ].map(inc => (
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
                <AlertCircle size={22} /> What's Excluded
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {[
                  'Mineral Water',
                  'Personal Expenses',
                  'Water Sports',
                  'Fort Entry Fees',
                  'Unmentions'
                ].map(exc => (
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
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#3d7a4f', marginBottom: '0.5rem' }}>TOUR POLICIES</div>
              <p style={{ fontSize: '0.85rem', color: theme.subtext }}>
                💳 70% at booking, 30% before departure.
                <br/>
                🕒 Cancellation: 20 days (60% refund), 10 days (45%), 7 days (30%).
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
              Limited Seats <span style={{ color: '#9dccaa' }}>for Konkan Batch</span>
            </h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              The coastline is calling. Secure your spot on Asia's most beautiful coastal route before the batch is full.
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

function StarIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}
