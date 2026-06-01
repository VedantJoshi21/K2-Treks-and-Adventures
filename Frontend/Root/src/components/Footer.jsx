import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, YouTubeIcon, FacebookIcon, PhoneIcon, MailIcon, MapPinIcon } from './Icons';
import logo from '../assets/Company_Logo_Transparent_BG.png';

export default function Footer({ theme, darkMode }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer style={{
      borderTop: `1px solid ${theme.border}`,
      padding: '5rem 2rem 2rem',
      background: theme.bg,
      color: theme.text,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle, ${darkMode ? 'rgba(61, 122, 79, 0.05)' : 'rgba(61, 122, 79, 0.03)'} 0%, transparent 70%)`,
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img src={logo} alt="K2 Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              <span style={{
                fontSize: '1.4rem',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: theme.text,
                textTransform: 'uppercase'
              }}>
                K2 Treks <span style={{ color: '#3d7a4f' }}>&</span> Adventures
              </span>
            </div>
            <p style={{
              color: theme.subtext,
              fontSize: '15px',
              lineHeight: 1.8,
              marginBottom: '24px',
              maxWidth: '320px'
            }}>
              Founded by a Proud IAF Veteran and Owned by a Women Enterprenuer. Bringing military-grade discipline, safety, and passion to every adventure across India.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <InstagramIcon />, href: "https://www.instagram.com/k2_treks_adventure/", color: '#E1306C' },
                { icon: <YouTubeIcon />, href: "https://www.youtube.com/@rakeshkale2381/", color: '#FF0000' },
                { icon: <FacebookIcon />, href: "#", color: '#1877F2' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.text,
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = social.color}
                  onMouseLeave={e => e.currentTarget.style.color = theme.text}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', color: '#3d7a4f' }}>Explore</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Sahyadri Treks', href: '#treks' },
                  { label: 'Himalayan Treks', href: '#treks' },
                  { label: 'Special Programs', href: '#programs' },
                  { label: 'Our Story', href: '#about' }
                ].map(link => (
                  <li key={link.label} style={{ marginBottom: '12px' }}>
                    <a href={link.href} style={{
                      color: theme.subtext,
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.2s ease'
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = theme.text;
                        e.currentTarget.style.paddingLeft = '4px';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = theme.subtext;
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', color: '#3d7a4f' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Reviews', href: '#reviews' },
                  { label: 'Enquiry', href: '#enquiry' },
                  { label: 'Contact Us', href: '#contact' },
                  { label: 'Privacy Policy', href: '#' }
                ].map(link => (
                  <li key={link.label} style={{ marginBottom: '12px' }}>
                    <a href={link.href} style={{
                      color: theme.subtext,
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.2s ease'
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = theme.text;
                        e.currentTarget.style.paddingLeft = '4px';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = theme.subtext;
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 style={{ fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', color: '#3d7a4f' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ color: '#3d7a4f', marginTop: '2px' }}><PhoneIcon /></div>
                <div>
                  <div style={{ fontSize: '14px', color: theme.text, fontWeight: 600 }}>Call Us</div>
                  <div style={{ fontSize: '14px', color: theme.subtext }}>+91 9209548856</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ color: '#3d7a4f', marginTop: '2px' }}><MailIcon /></div>
                <div>
                  <div style={{ fontSize: '14px', color: theme.text, fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: '14px', color: theme.subtext }}>k2enterprises03009@gmail.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ color: '#3d7a4f', marginTop: '2px' }}><MapPinIcon /></div>
                <div>
                  <div style={{ fontSize: '14px', color: theme.text, fontWeight: 600 }}>Location</div>
                  <div style={{ fontSize: '14px', color: theme.subtext }}>Central Maharashtra, India</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: `1px solid ${theme.border}`,
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p style={{ color: theme.subtext, fontSize: '14px', margin: 0 }}>
              © {new Date().getFullYear()} <span style={{ fontWeight: 700, color: theme.text }}>K2 Treks & Adventures</span>.
            </p>
            <p style={{ color: theme.subtext, fontSize: '12px', margin: 0 }}>
              Safety. Discipline. Adventure.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: theme.subtext, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3d7a4f' }} />
              IAF Veteran Founded
            </span>
            <span style={{ fontSize: '12px', color: theme.subtext, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3d7a4f' }} />
              Women Enterpreneur Owned
            </span>
            <span style={{ fontSize: '12px', color: theme.subtext, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3d7a4f' }} />
              PAN-India Operations
            </span>
            <span style={{ fontSize: '12px', color: theme.subtext, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3d7a4f' }} />
              Active on GeM
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

