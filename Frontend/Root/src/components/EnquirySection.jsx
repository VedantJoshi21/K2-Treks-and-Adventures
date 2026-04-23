import React, { useState } from 'react';
import { CheckIcon, SendIcon } from './Icons';

export default function EnquirySection({ theme, darkMode, sahyadriTreks, himalayanTreks, showGridPattern }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', trek: '', message: '', date: '',
  });
  const [formStatus, setFormStatus] = useState(null); // 'loading' | 'success' | 'error' | null

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cbb9eed9-3cde-424c-8ae8-20d90c03debc",
          subject: `New Trek Enquiry: ${formData.trek} from ${formData.name}`,
          from_name: "K2 Treks & Adventures Enquiry",
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', trek: '', message: '', date: '' });
        setTimeout(() => setFormStatus(null), 8000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <section id="enquiry" className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`} style={{ padding: '3.5rem 1rem' }}>
      {showGridPattern && <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`}></div>}
      <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
            lineHeight: 1, letterSpacing: '-0.05em', color: theme.text,
          }}>
            Book <span style={{ color: '#3d7a4f' }}>a Trek</span>
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '480px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            Fill out the form below and our team will get back to you within 24 hours with all the details and availability.
          </p>
        </div>

        {/* Form Messages */}
        {formStatus === 'success' && (
          <div style={{
            background: '#faf2ee', border: '1px solid #3d7a4f',
            borderRadius: '1rem', padding: '1.25rem 1.75rem',
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '2rem', color: '#2d5c3b',
          }}>
            <CheckIcon />
            <span style={{ fontWeight: 600 }}>Enquiry submitted! We'll reach out within 24 hours.</span>
          </div>
        )}

        {formStatus === 'error' && (
          <div style={{
            background: '#fee2e2', border: '1px solid #dc2626',
            borderRadius: '1rem', padding: '1.25rem 1.75rem',
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '2rem', color: '#991b1b',
          }}>
            <span style={{ fontSize: '20px' }}>⚠️</span>
            <span style={{ fontWeight: 600 }}>Something went wrong. Please try again or contact us directly.</span>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleFormSubmit}
          className="enquiry-form-card"
          style={{
            background: theme.cardBg, border: `1px solid ${theme.border}`,
            borderRadius: '0rem', padding: '2.5rem',
            display: 'grid', gap: '1.25rem',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
          }}
          id="enquiry-form"
        >
          <div className="enquiry-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                Full Name *
              </label>
              <input
                id="field-name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={handleFormChange}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '10px',
                  border: `1.5px solid ${theme.border}`, background: theme.bg,
                  color: theme.text, fontSize: '15px', outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#3d7a4f'}
                onBlur={e => e.currentTarget.style.borderColor = theme.border}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                Email Address *
              </label>
              <input
                id="field-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleFormChange}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '10px',
                  border: `1.5px solid ${theme.border}`, background: theme.bg,
                  color: theme.text, fontSize: '15px', outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#3d7a4f'}
                onBlur={e => e.currentTarget.style.borderColor = theme.border}
              />
            </div>
          </div>

          <div className="enquiry-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                Phone Number *
              </label>
              <input
                id="field-phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleFormChange}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '10px',
                  border: `1.5px solid ${theme.border}`, background: theme.bg,
                  color: theme.text, fontSize: '15px', outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#3d7a4f'}
                onBlur={e => e.currentTarget.style.borderColor = theme.border}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                Preferred Date <span style={{ fontWeight: 400, color: theme.subtext }}>(optional)</span>
              </label>
              <input
                id="field-date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleFormChange}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '10px',
                  border: `1.5px solid ${theme.border}`, background: theme.bg,
                  color: theme.text, fontSize: '15px', outline: 'none',
                  transition: 'border-color 0.2s',
                  colorScheme: darkMode ? 'dark' : 'light',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#3d7a4f'}
                onBlur={e => e.currentTarget.style.borderColor = theme.border}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
              Select Trek *
            </label>
            <select
              id="field-trek"
              name="trek"
              required
              value={formData.trek}
              onChange={handleFormChange}
              style={{
                width: '100%', padding: '12px 16px', borderRadius: '10px',
                border: `1.5px solid ${theme.border}`, background: theme.bg,
                color: formData.trek ? theme.text : theme.subtext, fontSize: '15px', outline: 'none',
                transition: 'border-color 0.2s', cursor: 'pointer',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#3d7a4f'}
              onBlur={e => e.currentTarget.style.borderColor = theme.border}
            >
              <option value="" disabled>— Choose your trek —</option>
              <optgroup label="Sahyadri Treks">
                {sahyadriTreks.map(t => <option key={t.id} value={t.title}>{t.title}</option>)}
              </optgroup>
              <optgroup label="Himalayan Treks">
                {himalayanTreks.map(t => <option key={t.id} value={t.title}>{t.title}</option>)}
              </optgroup>
              <option value="Corporate / Group Program">Corporate / Group Program</option>
              <option value="Other / Not Sure">Other / Not Sure</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
              Message / Notes
            </label>
            <textarea
              id="field-message"
              name="message"
              rows={4}
              placeholder="Tell us about your group size, fitness level, any special requirements..."
              value={formData.message}
              onChange={handleFormChange}
              style={{
                width: '100%', padding: '12px 16px', borderRadius: '10px',
                border: `1.5px solid ${theme.border}`, background: theme.bg,
                color: theme.text, fontSize: '15px', outline: 'none',
                resize: 'vertical', transition: 'border-color 0.2s',
                lineHeight: 1.6,
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#3d7a4f'}
              onBlur={e => e.currentTarget.style.borderColor = theme.border}
            />
          </div>

          <button
            type="submit"
            id="enquiry-submit-btn"
            disabled={formStatus === 'loading'}
            style={{
              width: '100%', padding: '15px',
              background: formStatus === 'loading' ? '#6b9e7b' : '#3d7a4f',
              color: '#faf2ee',
              border: 'none', borderRadius: '10px',
              fontWeight: 800, fontSize: '1rem',
              cursor: formStatus === 'loading' ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              transition: 'background 0.2s, transform 0.15s',
              boxShadow: '0 4px 20px rgba(61,122,79,0.35)',
              opacity: formStatus === 'loading' ? 0.8 : 1,
            }}
            onMouseEnter={e => {
              if (formStatus !== 'loading') {
                e.currentTarget.style.background = '#2d5c3b';
                e.currentTarget.style.transform = 'scale(1.01)';
              }
            }}
            onMouseLeave={e => {
              if (formStatus !== 'loading') {
                e.currentTarget.style.background = '#3d7a4f';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            {formStatus === 'loading' ? (
              <>
                <span className="loading-spinner" style={{
                  width: '18px', height: '18px', border: '2px solid #fff',
                  borderTopColor: 'transparent', borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }}></span>
                Sending...
              </>
            ) : (
              <>
                <SendIcon /> Submit Enquiry
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
