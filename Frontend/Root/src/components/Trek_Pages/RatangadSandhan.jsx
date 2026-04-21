import React from 'react';
import Footer from '../Footer';
import EnquirySection from '../EnquirySection';
import { 
  Tent, Coffee, Utensils, ShieldCheck, Award, Map as MapIcon, 
  ChevronRight, Info, CheckCircle2, AlertCircle, 
  Bus, Sunset, Mountain, Compass, ArrowLeft,
  ArrowUpDown, Signal, Route, Clock, Eye, Gem, Waves, Ship
} from 'lucide-react';
import { sahyadriTreks, himalayanTreks } from '../constants';
import { motion } from 'framer-motion';

// Import images
import ratangadHero from '../../assets/ratangad_hero.png';

export default function RatangadSandhan({ darkMode, setDarkMode, theme }) {
  
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '90vh', width: '100%' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <motion.div 
            initial={{ scale: 1.1, filter: 'brightness(0.35)' }}
            animate={{ scale: 1, filter: 'brightness(0.65)' }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `url(${ratangadHero})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }}
          />
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
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
              background: '#854d0e', color: '#fff',
              padding: '6px 16px', borderRadius: '999px', marginBottom: '1.5rem',
              fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em'
            }}>
              <Gem size={16} /> THE JEWEL OF SAHYADRIS
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '850px',
              marginBottom: '1.5rem',
            }}>
              Ratangad Fort & <br/>Sandhan Valley Expedition
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.9, maxWidth: '650px',
              lineHeight: 1.6, marginBottom: '2.5rem',
            }}>
              Discover the natural rock-cut 'Nedhe' or 'Eye of the Needle' and travers the breathtaking canyons of Sandhan Valley.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#enquiry" style={{
                background: '#3d7a4f', color: '#fff', padding: '16px 40px',
                borderRadius: '999px', fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(61, 122, 79, 0.4)', transition: 'all 0.3s',
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Book Expedition
              </a>
              <a href="https://wa.me/9209548856" target="_blank" rel="noopener noreferrer" style={{
                background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '16px 40px',
                borderRadius: '999px', fontWeight: 700, textDecoration: 'none',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                Call +91 9209548856
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
              { label: 'ALTITUDE', value: '4,255 ft', icon: <ArrowUpDown size={22} /> },
              { label: 'DIFFICULTY', value: 'Moderate', icon: <Signal size={22} /> },
              { label: 'DISTANCE', value: '6 km Trek', icon: <Route size={22} /> },
              { label: 'DURATION', value: '4-5 hrs Trek', icon: <Clock size={22} /> },
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
      <section style={{ padding: '12rem 1.5rem 6rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em', color: '#3d7a4f' }}>
              Jewel of the Sahyadris
            </h2>
            <p style={{ color: theme.subtext, lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Ratangad fort has a natural rock peak with a cavity in it at the top which is called 'Nedhe' or 'Eye of the Needle'. The fort is 2000 years old. It was captured by Chhatrapati Shivaji Maharaj and is the origin of the Pravara/Amrutvahini river.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { title: 'The Nedhe Point', desc: 'A natural high altitude window offering a unique perspective of the valley.', icon: <Eye size={24} color="#3d7a4f" /> },
                { title: 'River Origin', desc: 'Witness the starting point of the sacred Pravara river near the base.', icon: <Route size={24} color="#3d7a4f" /> },
                { title: 'Panoramic Views', desc: 'Spot Kalsubai, Alang, Madan, Kulang, and Harishchandragad from the top.', icon: <Sunset size={24} color="#3d7a4f" /> },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ 
                    minWidth: '56px', height: '56px', background: 'rgba(61,122,79,0.1)', 
                    borderRadius: '1rem', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', color: '#3d7a4f' 
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: theme.subtext, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <img 
              src="https://jainsonsumbrella.com/cdn/shop/articles/WhatsApp_Image_2023-07-13_at_5.46.49_PM.jpg?v=1689250637" 
              alt="Ratangad Fort View" 
              style={{ width: '100%', borderRadius: '2.5rem', boxShadow: '0 40px 80px rgba(0,0,0,0.2)' }} 
            />
            <div style={{ 
              position: 'absolute', bottom: '2rem', left: '-2rem', 
              background: theme.cardBg, padding: '2rem', borderRadius: '1.5rem', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: `1px solid ${theme.border}`,
              maxWidth: '220px'
            }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '0.5rem' }}>
                {[1,2,3,4,5].map(i => <Gem key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, fontStyle: 'italic' }}>"The view from Nedhe point is the most spiritual experience I've had in treks."</p>
              <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.7 }}>- Rohan D.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section style={{ padding: '6rem 1.5rem', background: darkMode ? 'rgba(61,122,79,0.05)' : 'rgba(61,122,79,0.03)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>Pricing</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {[
              { title: 'FULL TRIP (WARDHA PICKUP)', price: '₹4,200', sub: 'Nagpur / Wardha / Amravati', active: true },
              { title: 'BASE PACKAGE (IGATPURI)', price: '₹2,999', sub: 'Igatpuri to Igatpuri Package', active: false },
            ].map(p => (
              <div key={p.title} style={{ 
                background: theme.cardBg, padding: '3.5rem 2.5rem', borderRadius: '2rem',
                minWidth: '320px', flex: '1', maxWidth: '450px',
                border: p.active ? '2px solid #3d7a4f' : `1px solid ${theme.border}`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
                <div style={{ color: '#3d7a4f', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{p.title}</div>
                <div style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '0.5rem' }}>{p.price}</div>
                <div style={{ color: theme.subtext, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{p.sub}</div>
                <div style={{ height: '1px', width: '100%', background: theme.border, marginBottom: '1.5rem' }} />
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', textAlign: 'left', display: 'grid', gap: '0.75rem' }}>
                  {['Meals (2B, 2L, 1D)', 'Stay (Tent / Homestay)', 'Forest Entry', 'Trek Certification'].map(i => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="#3d7a4f" /> {i}
                    </li>
                  ))}
                </ul>
                <a href="#enquiry" style={{ 
                  width: '100%', padding: '1rem', borderRadius: '1rem', 
                  background: p.active ? '#3d7a4f' : 'transparent',
                  color: p.active ? '#fff' : '#3d7a4f',
                  border: p.active ? 'none' : '2px solid #3d7a4f',
                  fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s'
                }}>Enquire Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Trek Itinerary */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '5rem' }}>Day-Wise Breakdown</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* Day 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '3rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(61,122,79,0.2)', lineHeight: 0.8 }}>01</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginTop: '0.5rem' }}>DAY ONE</div>
            </div>
            <div style={{ paddingLeft: '2rem', borderLeft: '2px solid #3d7a4f' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>Day 1 – Sandhan Valley Trek</h3>
              <p style={{ color: theme.subtext, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Arrival & group introduction. Trek through Sandhan Valley (3 km | 2–3 hrs). Enjoy lunch during the trek. Reach the campsite to relax, followed by evening tea, activities, dinner, and overnight camping.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[<Waves size={16} />, <Tent size={16} />, <Utensils size={16} />].map((icon, i) => (
                  <div key={i} style={{ width: '40px', height: '40px', background: 'rgba(61,122,79,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3d7a4f' }}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

           {/* Day 2 */}
           <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '3rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(61,122,79,0.2)', lineHeight: 0.8 }}>02</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginTop: '0.5rem' }}>DAY TWO</div>
            </div>
            <div style={{ paddingLeft: '2rem', borderLeft: '2px solid #3d7a4f' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>Day 2 – Ratangad Trek</h3>
              <p style={{ color: theme.subtext, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Early morning breakfast. Trek to Ratangad Fort (6 km | 4–5 hrs). Visit the iconic Nedhe point, explore the fort, and witness the panoramic Sahyadri landscapes. Descend for lunch and begin the return journey.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[<Mountain size={16} />, <Eye size={16} />, <Ship size={16} />].map((icon, i) => (
                  <div key={i} style={{ width: '40px', height: '40px', background: 'rgba(61,122,79,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3d7a4f' }}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines & Logistics */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          <div style={{ background: theme.cardBg, padding: '3.5rem', borderRadius: '2.5rem', border: `1px solid ${theme.border}` }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Info size={24} color="#3d7a4f" /> Trek Logistics
            </h3>
            <div style={{ spaceY: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h5 style={{ fontWeight: 800, fontSize: '0.9rem', color: '#3d7a4f', marginBottom: '0.75rem' }}>INCLUSIONS</h5>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {['Meals (2B, 2L, 1D)', 'Stay (Tent / Homestay)', 'Transport', 'Forest Entry', 'First Aid', 'Certificate'].map(i => (
                    <div key={i} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       <CheckCircle2 size={16} /> {i}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 style={{ fontWeight: 800, fontSize: '0.9rem', color: '#dc2626', marginBottom: '0.75rem' }}>EXCLUSIONS</h5>
                <p style={{ fontSize: '0.9rem', color: theme.subtext }}>Personal expenses, bottled water, rappelling activities, and anything not listed.</p>
              </div>
            </div>
          </div>

          <div style={{ background: '#1c1917', color: '#fff', padding: '3.5rem', borderRadius: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Ready for Adventure?</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '2.5rem' }}>Limited seats for the upcoming batch.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#enquiry" style={{ background: '#3d7a4f', color: '#fff', padding: '1rem', borderRadius: '1rem', fontWeight: 800, textDecoration: 'none' }}>
                Enquire Group Discount
              </a>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, marginTop: '1rem' }}>9209548856</div>
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
    </>
  );
}
