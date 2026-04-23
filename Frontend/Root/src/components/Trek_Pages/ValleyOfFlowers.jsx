import React from 'react';
import Footer from '../Footer';
import EnquirySection from '../EnquirySection';
import { 
  Tent, Coffee, Utensils, ShieldCheck, Award, Map as MapIcon, 
  ChevronRight, Info, CheckCircle2, AlertCircle, 
  Bus, Sunset, Sunrise, Mountain, Compass, ArrowLeft,
  ArrowUpDown, Signal, Route, Clock,
  MapPin, Star, Waves, Flower2, Snowflake
} from 'lucide-react';
import { sahyadriTreks, himalayanTreks } from '../constants';
import { getTheme } from '../theme';

export default function ValleyOfFlowers({ darkMode, setDarkMode, theme }) {
  // Defensive check for theme
  const currentTheme = theme || getTheme(darkMode);
  
  const valleyHero = "https://www.thevalleyofflowers.com/wp-content/uploads/2025/11/Valley-of-Flowers-with-Badrinath-Tour.jpg";

  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '90vh', width: '100%' }}>
        {/* Background Image Container with Overflow Hidden */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: `url(${valleyHero})`,
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
          color: '#faf2ee',
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900,
            lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '900px',
            marginBottom: '1.5rem',
          }}>
            Valley of Flowers & Hemkund Sahib Trek
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.9, maxWidth: '700px',
            lineHeight: 1.6, marginBottom: '2.5rem',
          }}>
            Explore the UNESCO World Heritage site where nature blooms in thousands of colors, combined with the spiritual serenity of Hemkund Sahib.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#enquiry" style={{
              background: '#3d7a4f', color: '#faf2ee', padding: '14px 32px',
              borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(61, 122, 79, 0.3)', transition: 'transform 0.2s',
            }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              Book Now
            </a>
            <a href="https://wa.me/9209548856" target="_blank" rel="noopener noreferrer" style={{
              background: 'rgba(250, 242, 238,0.1)', color: '#faf2ee', padding: '14px 32px',
              borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
              backdropFilter: 'blur(10px)', border: '1px solid rgba(250, 242, 238,0.2)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              WhatsApp 9209548856
            </a>
          </div>
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
              { label: 'MAX ALTITUDE', value: '14,400 ft', icon: <ArrowUpDown size={22} /> },
              { label: 'DIFFICULTY', value: 'Moderate', icon: <Signal size={22} /> },
              { label: 'DISTANCE', value: '38 km', icon: <Route size={22} /> },
              { label: 'DURATION', value: '7 Days', icon: <Clock size={22} /> },
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
      <section style={{ padding: '10rem 1.5rem 2.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, 
              lineHeight: 1, letterSpacing: '-0.05em', color: '#3d7a4f', 
              marginBottom: '1.5rem' 
            }}>
              A Symphony of <span style={{ color: currentTheme.text }}>Nature & Spirituality</span>
            </h2>
            <p style={{ color: currentTheme.subtext, lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2rem' }}>
              Nestled in the West Himalayas, the Valley of Flowers is a vibrant landscape of alpine meadows. Complemented by the sacred Hemkund Sahib—a high-altitude Sikh pilgrimage site—this trek offers a perfect blend of breathtaking adventure and deep spiritual peace.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'UNESCO Heritage Site', desc: 'Wander through a valley that comes alive with over 500 species of wild flowers including the rare Blue Poppy.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
                { title: 'Sacred Hemkund Lake', desc: 'Reach the highest gurudwara in the world at 14,330 ft, surrounded by seven snow-capped peaks.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
                { title: 'Badrinath Temple', desc: 'Conclude your journey with a visit to one of the most sacred Char Dham temples in India.', icon: <CheckCircle2 size={20} color="#3d7a4f" /> },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ marginTop: '0.25rem' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontWeight: 800, marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: currentTheme.subtext, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative', display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1, paddingTop: '4rem' }}>
              <img src="https://pbs.twimg.com/media/EShMsITX0AAPzTQ.jpg" alt="Himalayan Flowers" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80" alt="Hemkund Sahib Gurudwara" style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Package Cost Section */}
      <section style={{ 
        padding: '2.5rem 1.5rem', 
        background: darkMode ? '#282828ff' : '#FFF8F0',
        margin: '2rem 0'
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, 
            lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '3rem' 
          }}>
            Package <span style={{ color: '#3d7a4f' }}>Pricing</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {[
              { title: 'Rishikesh to Rishikesh', price: '₹9,499/-', sub: 'Standard Package (6 Nights / 7 Days)' },
              { title: 'Haridwar to Haridwar', price: '₹9,999/-', sub: 'Complete package with pickup' },
            ].map(plan => (
              <div key={plan.title} style={{ 
                background: currentTheme.cardBg, padding: '2.5rem', borderRadius: '1.5rem',
                minWidth: '280px', flex: '1', maxWidth: '400px',
                border: `1px solid ${currentTheme.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
                <div style={{ color: '#3d7a4f', fontWeight: 700, marginBottom: '1rem' }}>{plan.title}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>{plan.price}</div>
                <div style={{ color: currentTheme.subtext, fontSize: '0.9rem', marginBottom: '1.5rem' }}>{plan.sub}</div>
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
      <section style={{ padding: '2.5rem 1.5rem', background: currentTheme.bg, position: 'relative', overflow: 'hidden' }}>
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
          <div className="timeline-line" style={{ 
            position: 'absolute', left: '50%', transform: 'translateX(-50%)', 
            top: 0, bottom: 0, width: '2px', borderLeft: '2px dashed #3d7a4f',
            opacity: 0.3, zIndex: 0 
          }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {[
              { 
                day: 'DAY 01', 
                title: 'Drive to Joshimath', 
                desc: 'Departure from Haridwar/Rishikesh. Scenic drive through the mountains to reach Joshimath, the gateway to Badrinath.',
                points: [{ label: 'Drive from Haridwar (8-9 hrs)', icon: <Bus size={16} /> }, { label: 'Overnight in Joshimath', icon: <Tent size={16} /> }],
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
                reverse: false 
              },
              { 
                day: 'DAY 02', 
                title: 'Trek to Ghangaria', 
                desc: 'Drive to Govindghat and start the 13km trek to Ghangaria. Follow the Lakshman Ganga river through lush forests.',
                points: [{ label: 'Drive to Govindghat (1 hr)', icon: <Route size={16} /> }, { label: 'Trek to Ghangaria (13 km)', icon: <Mountain size={16} /> }],
                image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=600&q=80',
                reverse: true 
              },
              { 
                day: 'DAY 03', 
                title: 'Valley of Flowers', 
                desc: 'A dreamlike 4km trek to the Valley. Spend the day exploring the endless meadows of blooming flowers.',
                points: [{ label: 'Trek to Valley (4 km)', icon: <Flower2 size={16} /> }, { label: 'Explore the Meadows', icon: <Compass size={16} /> }],
                image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/68247dca18c1c7001d0cda9a.jpg',
                reverse: false 
              },
              { 
                day: 'DAY 04', 
                title: 'Hemkund Sahib', 
                desc: 'A challenging 6km uphill trek to the sacred Hemkund Sahib Gurudwara and the crystal clear lake.',
                points: [{ label: 'Steep Trek (6 km)', icon: <ArrowUpDown size={16} /> }, { label: 'Visit Gurudwara & Lake', icon: <Sunrise size={16} /> }],
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
                reverse: true 
              },
              { 
                day: 'DAY 05', 
                title: 'Badrinath Visit', 
                desc: 'Trek back to Govindghat and drive to Badrinath. Visit the holy temple and Mana Village.',
                points: [{ label: 'Descend to Govindghat', icon: <ArrowLeft size={16} /> }, { label: 'Temple Darshan', icon: <MapPin size={16} /> }],
                image: 'https://travelchardham.com/sites/default/files/2024-12/Photo%20of%20Badrinath%20Dham%20Temple.jpg',
                reverse: false 
              },
              { 
                day: 'DAY 06 & 07', 
                title: 'Return Journey', 
                desc: 'Morning drive to Auli for exploration, followed by the return journey to Haridwar/Rishikesh.',
                points: [{ label: 'Explore Auli', icon: <Snowflake size={16} /> }, { label: 'Return to Rishikesh', icon: <Bus size={16} /> }],
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
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
                      <p style={{ color: currentTheme.subtext, lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '400px', marginLeft: 'auto' }}>
                        {item.desc}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
                        {item.points.map(point => (
                          <div key={point.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: currentTheme.subtext }}>{point.label}</span>
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
                      <p style={{ color: currentTheme.subtext, lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', maxWidth: '400px' }}>
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
                            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: currentTheme.subtext }}>{point.label}</span>
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

      {/* Preparation & Inclusions */}
      <section style={{ padding: '3.5rem 1.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Essentials Column */}
          <div style={{ background: darkMode ? 'rgba(250, 242, 238,0.03)' : '#faf2ee', padding: '2.5rem', borderRadius: '1.5rem', border: `1px solid ${currentTheme.border}` }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Info size={24} color="#3d7a4f" /> Trek Essentials
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '1rem', color: '#3d7a4f' }}>WHAT TO PACK</div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Sturdy Trekking Shoes with Good Grip',
                    'Woolen Clothes & Raincoat/Poncho',
                    '2L Water Bottle & Energy Snacks',
                    'Personal Medical Kit & ID Proof',
                    'Sunscreen, Cap & Sunglasses'
                  ].map(e => (
                    <li key={e} style={{ fontSize: '0.9rem', display: 'flex', gap: '0.75rem' }}>
                       <div style={{ minWidth: '20px' }}>•</div> {e}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '1rem', color: '#3d7a4f' }}>PREPARATION TIPS</div>
                <p style={{ fontSize: '0.9rem', color: currentTheme.subtext, lineHeight: 1.6 }}>
                  High altitude acclimatization is key. Build your stamina with cardio exercises at least 15 days prior. Keep yourself hydrated and avoid alcohol during the trek.
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
                {['Transport', 'Guesthouse/Tent Stay', 'All Meals', 'Forest Permits', 'Experienced Guide', 'First Aid', 'Trek Certificate'].map(inc => (
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
                {['Personal Expenses', 'Pony/Porter Charges', 'Mineral Water', 'Tips', 'Insurance', 'Anything not mentioned'].map(exc => (
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
              <p style={{ fontSize: '0.85rem', color: currentTheme.subtext }}>
                🚫 Plastic-free zone. Please do not litter. 🙏 Respect the sanctity of Hemkund Sahib and local traditions.
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
              The flowers are blooming. Don't miss this once-a-year opportunity to witness the Himalayan magic.
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

      {/* Enquiry Section */}
      <EnquirySection
        theme={currentTheme}
        darkMode={darkMode}
        sahyadriTreks={sahyadriTreks}
        himalayanTreks={himalayanTreks}
        showGridPattern="ltr"
      />

      <Footer theme={currentTheme} darkMode={darkMode} />

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
