import React, { useState, useRef } from 'react';
import { CheckIcon, SendIcon } from './Icons';
import qrCode from '../assets/QR code.png';

/**
 * EnquirySection
 * ─────────────────────────────────────────────────────────────
 * Purpose  : Renders the structured enquiry and booking forms:
 *              1. Section Heading (Enquiry Form) & Enquiry form (Full Width)
 *              2. Section Heading (Book Your Spot)
 *              3. Payment Details Card (Left) + Booking Form (Right) side-by-side
 * Props    :
 *   theme          - Active theme object (text, bg, cardBg, border, subtext)
 *   darkMode       - Boolean for dark/light mode
 *   sahyadriTreks  - Array of Sahyadri trek objects { id, title }
 *   himalayanTreks - Array of Himalayan trek objects { id, title }
 *   showGridPattern- 'ltr' | 'rtl' | falsy — background grid variant
 * ─────────────────────────────────────────────────────────────
 */
export default function EnquirySection({ theme, darkMode, sahyadriTreks, himalayanTreks, showGridPattern }) {

  // ── Enquiry form state (Top form) ──────────────────────
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    trek: '',
    message: '',
    date: '',
  });
  const [enquiryStatus, setEnquiryStatus] = useState(null); // 'loading' | 'success' | 'error' | null

  // ── Booking form state (Bottom-Right form) ──────────────
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    trek: '',
    message: '',
    date: '',
  });
  const [paymentFile, setPaymentFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef(null);
  const [bookingStatus, setBookingStatus] = useState(null); // 'loading' | 'success' | 'error' | null

  // ── Shared input style helper ─────────────────────────────
  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: `1.5px solid ${theme.border}`,
    background: theme.bg,
    color: theme.text,
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  // ── Enquiry form handlers ─────────────────────────────────
  const handleEnquiryChange = (e) => {
    setEnquiryData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setEnquiryStatus('loading');

    try {
      const payload = new FormData();
      payload.append('access_key', 'dd4caefa-3fab-4991-b7a9-405631d4eda3');
      payload.append('subject', `Trek Enquiry: ${enquiryData.trek || 'General'} from ${enquiryData.name}`);
      payload.append('from_name', 'K2 Treks & Adventures Enquiry');
      payload.append('name', enquiryData.name);
      payload.append('email', enquiryData.email);
      payload.append('phone', enquiryData.phone);
      payload.append('date', enquiryData.date);
      payload.append('trek', enquiryData.trek);
      payload.append('message', enquiryData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });
      const result = await response.json();

      if (result.success) {
        setEnquiryStatus('success');
        setEnquiryData({ name: '', email: '', phone: '', trek: '', message: '', date: '' });
        setTimeout(() => setEnquiryStatus(null), 8000);
      } else {
        console.error('Enquiry submission failed:', result);
        setEnquiryStatus('error');
      }
    } catch (err) {
      console.error('Enquiry network error:', err);
      setEnquiryStatus('error');
    }
  };

  // ── Booking form handlers ─────────────────────────────────
  const handleBookingChange = (e) => {
    setBookingData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError('');

    if (!file) {
      setPaymentFile(null);
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      setFileError('Please upload a JPG, JPEG, PNG, or PDF file.');
      setPaymentFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setFileError('File size must be under 10 MB.');
      setPaymentFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setPaymentFile(file);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!paymentFile) {
      setFileError('Please upload your payment screenshot before submitting.');
      return;
    }

    setBookingStatus('loading');

    try {
      const payload = new FormData();
      payload.append('access_key', 'dd4caefa-3fab-4991-b7a9-405631d4eda3');
      payload.append('subject', `New Trek Booking: ${bookingData.trek} from ${bookingData.name}`);
      payload.append('from_name', 'K2 Treks & Adventures Booking');
      payload.append('name', bookingData.name);
      payload.append('email', bookingData.email);
      payload.append('phone', bookingData.phone);
      payload.append('date', bookingData.date);
      payload.append('trek', bookingData.trek);
      payload.append('message', bookingData.message);
      payload.append('attachment', paymentFile);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });
      const result = await response.json();

      if (result.success) {
        setBookingStatus('success');
        setBookingData({ name: '', email: '', phone: '', trek: '', message: '', date: '' });
        setPaymentFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        setTimeout(() => setBookingStatus(null), 8000);
      } else {
        console.error('Booking submission failed:', result);
        setBookingStatus('error');
      }
    } catch (err) {
      console.error('Booking network error:', err);
      setBookingStatus('error');
    }
  };

  // ── Bank details list ─────────────────────────────────────
  const bankDetails = [
    { label: 'Account Name',   value: 'K2 ENTERPRISES' },
    { label: 'Bank Name',      value: 'Punjab National Bank' },
    { label: 'Account Number', value: '5473002100003346' },
    { label: 'IFSC Code',      value: 'PUNB0547300' },
    { label: 'Branch',         value: 'Arvi Naka Road, Wardha, Maharashtra – 442001' },
    { label: 'Account Type',   value: 'Current Account' },
  ];

  // ── Booking steps ─────────────────────────────────────────
  const bookingSteps = [
    'Complete the booking form.',
    'Make the payment via QR Code or bank transfer.',
    'Upload your payment screenshot in the form.',
    'Submit the booking request.',
  ];

  const focusGreen  = (e) => { e.currentTarget.style.borderColor = '#3d7a4f'; };
  const blurDefault = (e) => { e.currentTarget.style.borderColor = theme.border; };

  const TrekSelect = ({ id, name, value, onChange }) => (
    <select
      id={id}
      name={name}
      required
      value={value}
      onChange={onChange}
      style={{ ...inputStyle, color: value ? theme.text : theme.subtext, cursor: 'pointer' }}
      onFocus={focusGreen}
      onBlur={blurDefault}
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
  );

  const StatusBanner = ({ status, successMsg }) => {
    if (status === 'success') return (
      <div style={{
        background: '#f0fdf4', border: '1px solid #3d7a4f', borderRadius: '0.75rem',
        padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '10px',
        marginBottom: '1.25rem', color: '#2d5c3b',
      }}>
        <CheckIcon />
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{successMsg}</span>
      </div>
    );
    if (status === 'error') return (
      <div style={{
        background: '#fee2e2', border: '1px solid #dc2626', borderRadius: '0.75rem',
        padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '10px',
        marginBottom: '1.25rem', color: '#991b1b',
      }}>
        <span style={{ fontSize: '18px' }}>⚠️</span>
        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
          Something went wrong. Please try again or contact us directly.
        </span>
      </div>
    );
    return null;
  };

  const cardStyle = {
    background: theme.cardBg,
    border: `1px solid ${theme.border}`,
    borderRadius: '0rem',
    padding: '2.5rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  };

  return (
    <section
      id="enquiry"
      className={`section-pad ${showGridPattern ? 'grid-wrapper' : ''}`}
      style={{ padding: '3.5rem 1rem' }}
    >
      {showGridPattern && (
        <div className={`grid-background ${showGridPattern === 'ltr' ? 'pattern-ltr' : 'pattern-rtl'}`} />
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* ════════════════════════════════════════════════
            1. SECTION HEADING (ENQUIRY FORM)
            ════════════════════════════════════════════════ */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            color: theme.text,
          }}>
            Have a <span style={{ color: '#3d7a4f' }}>Question?</span>
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '560px', margin: '0.75rem auto 0', lineHeight: 1.6, fontSize: '0.95rem' }}>
            Fill out the general enquiry form below and our trek advisors will reach out to you within 24 hours.
          </p>
        </div>

        {/* ════════════════════════════════════════════════
            2. ENQUIRY FORM (ALONE IN ROW - FULL WIDTH)
            ════════════════════════════════════════════════ */}
        <div style={{ ...cardStyle, maxWidth: '880px', margin: '0 auto 4rem' }}>
          <StatusBanner
            status={enquiryStatus}
            successMsg="Enquiry sent successfully! Our team will contact you shortly."
          />

          <form id="enquiry-form" onSubmit={handleEnquirySubmit} style={{ display: 'grid', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row-2col">
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={enquiryData.name}
                  onChange={handleEnquiryChange}
                  style={inputStyle}
                  onFocus={focusGreen}
                  onBlur={blurDefault}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                  Email Address <span style={{ fontWeight: 400, color: theme.subtext }}>(optional)</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={enquiryData.email}
                  onChange={handleEnquiryChange}
                  style={inputStyle}
                  onFocus={focusGreen}
                  onBlur={blurDefault}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row-2col">
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  value={enquiryData.phone}
                  onChange={handleEnquiryChange}
                  style={inputStyle}
                  onFocus={focusGreen}
                  onBlur={blurDefault}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                  Preferred Date <span style={{ fontWeight: 400, color: theme.subtext }}>(optional)</span>
                </label>
                <input
                  name="date"
                  type="date"
                  value={enquiryData.date}
                  onChange={handleEnquiryChange}
                  style={{ ...inputStyle, colorScheme: darkMode ? 'dark' : 'light' }}
                  onFocus={focusGreen}
                  onBlur={blurDefault}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                Select Trek *
              </label>
              <TrekSelect
                id="enq-trek"
                name="trek"
                value={enquiryData.trek}
                onChange={handleEnquiryChange}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: theme.text }}>
                Message / Notes
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Ask us anything about trek itineraries, fitness levels, customized packages..."
                value={enquiryData.message}
                onChange={handleEnquiryChange}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={focusGreen}
                onBlur={blurDefault}
              />
            </div>

            <button
              type="submit"
              disabled={enquiryStatus === 'loading'}
              style={{
                width: '100%',
                padding: '14px',
                background: enquiryStatus === 'loading' ? '#6b9e7b' : 'transparent',
                color: enquiryStatus === 'loading' ? '#faf2ee' : '#3d7a4f',
                border: '2px solid #3d7a4f',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: enquiryStatus === 'loading' ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background 0.2s, color 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => {
                if (enquiryStatus !== 'loading') {
                  e.currentTarget.style.background = '#3d7a4f';
                  e.currentTarget.style.color = '#faf2ee';
                  e.currentTarget.style.transform = 'scale(1.01)';
                }
              }}
              onMouseLeave={e => {
                if (enquiryStatus !== 'loading') {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#3d7a4f';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {enquiryStatus === 'loading' ? 'Sending Enquiry...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>

        {/* ════════════════════════════════════════════════
            3. SECTION HEADING (BOOK YOUR SPOT)
            ════════════════════════════════════════════════ */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            color: theme.text,
          }}>
            Book Your <span style={{ color: '#3d7a4f' }}>Trek</span>
          </h2>
          <p style={{ color: theme.subtext, maxWidth: '560px', margin: '0.75rem auto 0', lineHeight: 1.6, fontSize: '0.95rem' }}>
            Make payment via the QR code or bank details, upload the screenshot, and reserve your seats instantly.
          </p>
        </div>

        {/* ════════════════════════════════════════════════
            4. PAYMENT DETAILS (LEFT) + RESERVE SPOT (RIGHT)
            ════════════════════════════════════════════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem', alignItems: 'stretch' }} className="booking-row-2col">
          
          {/* LEFT: PAYMENT DETAILS CARD */}
          <div style={{ ...cardStyle, justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.15em', color: '#3d7a4f', marginBottom: '0.5rem' }}>
                PAYMENT SYSTEM
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: theme.text, marginBottom: '0.75rem' }}>
                Payment <span style={{ color: '#3d7a4f' }}>Details</span>
              </h3>
              <p style={{ color: theme.subtext, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Complete your transfer using the details or the QR Code, then submit your receipt.
              </p>

              {/* QR Code container */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '12px', background: '#fff', borderRadius: '1rem',
                  border: `1px solid ${theme.border}`, display: 'inline-flex',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                }}>
                  <img
                    src={qrCode}
                    alt="K2 Enterprises Payment QR Code"
                    style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: theme.subtext, marginTop: '0.5rem', letterSpacing: '0.05em' }}>
                  SCAN TO PAY (K2 ENTERPRISES)
                </div>
              </div>

              {/* Bank detail rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: theme.border, borderRadius: '0.5rem', overflow: 'hidden' }}>
                {bankDetails.map((detail, idx) => (
                  <div
                    key={detail.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '120px 1fr',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      background: idx % 2 === 0
                        ? (darkMode ? 'rgba(30,30,30,0.8)' : 'rgba(255,255,255,0.95)')
                        : (darkMode ? 'rgba(40,40,40,0.8)' : 'rgba(247,247,249,0.95)'),
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: theme.subtext }}>
                      {detail.label}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: theme.text, wordBreak: 'break-word' }}>
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: '1.25rem', padding: '0.75rem 1rem',
              background: darkMode ? 'rgba(245,158,11,0.1)' : 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: '0.5rem', fontSize: '0.8rem',
              color: darkMode ? '#fbbf24' : '#92400e', fontWeight: 600, lineHeight: 1.5,
            }}>
              💡 Student or NCC group? Connect with our team on WhatsApp for special discounts!
            </div>
          </div>

          {/* RIGHT: RESERVE SPOT FORM */}
          <div style={cardStyle}>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.15em', color: '#3d7a4f', marginBottom: '0.4rem' }}>
                RESERVE YOUR SPOT
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: theme.text, marginBottom: '0.5rem' }}>
                Booking <span style={{ color: '#3d7a4f' }}>Form</span>
              </h3>
              
              {/* Short Instructions block */}
              <div style={{
                background: darkMode ? 'rgba(61,122,79,0.1)' : 'rgba(61,122,79,0.04)',
                borderLeft: '3px solid #3d7a4f', padding: '10px 16px', borderRadius: '4px',
                marginBottom: '1rem', fontSize: '0.85rem', lineHeight: 1.5, color: theme.text
              }}>
                <ul style={{ margin: 0, paddingLeft: '18px', listStyleType: 'disc' }}>
                  {bookingSteps.map((step, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            <StatusBanner
              status={bookingStatus}
              successMsg="Booking request submitted! We will email/SMS confirmation within 24 hours."
            />

            <form id="booking-form" onSubmit={handleBookingSubmit} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '5px', color: theme.text }}>
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={bookingData.name}
                  onChange={handleBookingChange}
                  style={inputStyle}
                  onFocus={focusGreen}
                  onBlur={blurDefault}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2col">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '5px', color: theme.text }}>
                    Email <span style={{ fontWeight: 400, color: theme.subtext }}>(optional)</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={bookingData.email}
                    onChange={handleBookingChange}
                    style={inputStyle}
                    onFocus={focusGreen}
                    onBlur={blurDefault}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '5px', color: theme.text }}>
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    value={bookingData.phone}
                    onChange={handleBookingChange}
                    style={inputStyle}
                    onFocus={focusGreen}
                    onBlur={blurDefault}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2col">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '5px', color: theme.text }}>
                    Preferred Date <span style={{ fontWeight: 400, color: theme.subtext }}>(optional)</span>
                  </label>
                  <input
                    name="date"
                    type="date"
                    value={bookingData.date}
                    onChange={handleBookingChange}
                    style={{ ...inputStyle, colorScheme: darkMode ? 'dark' : 'light' }}
                    onFocus={focusGreen}
                    onBlur={blurDefault}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '5px', color: theme.text }}>
                    Select Trek *
                  </label>
                  <TrekSelect
                    id="book-trek"
                    name="trek"
                    value={bookingData.trek}
                    onChange={handleBookingChange}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '5px', color: theme.text }}>
                  Message / Notes
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Group size, special food or fitness requirements..."
                  value={bookingData.message}
                  onChange={handleBookingChange}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.5 }}
                  onFocus={focusGreen}
                  onBlur={blurDefault}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '5px', color: theme.text }}>
                  Payment Screenshot *
                </label>

                <label
                  htmlFor="field-payment-screenshot"
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                    width: '100%', padding: '1rem', borderRadius: '10px',
                    border: fileError
                      ? '1.5px dashed #dc2626'
                      : paymentFile
                        ? '1.5px dashed #3d7a4f'
                        : `1.5px dashed ${theme.border}`,
                    background: paymentFile
                      ? (darkMode ? 'rgba(61,122,79,0.1)' : 'rgba(61,122,79,0.05)')
                      : theme.bg,
                    cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s',
                    boxSizing: 'border-box',
                  }}
                >
                  <span style={{ fontSize: '20px', lineHeight: 1 }}>{paymentFile ? '✅' : '📎'}</span>
                  {paymentFile ? (
                    <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#3d7a4f', textAlign: 'center' }}>
                      {paymentFile.name}
                    </span>
                  ) : (
                    <>
                      <span style={{ fontWeight: 600, fontSize: '0.82rem', color: theme.text }}>
                        Click to upload payment screenshot
                      </span>
                      <span style={{ fontSize: '0.72rem', color: theme.subtext }}>
                        JPG, JPEG, PNG or PDF — max 10 MB
                      </span>
                    </>
                  )}
                </label>

                <input
                  id="field-payment-screenshot"
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/jpg,image/png,application/pdf"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />

                {fileError && (
                  <p style={{ fontSize: '0.78rem', color: '#dc2626', marginTop: '5px', fontWeight: 600 }}>
                    ⚠️ {fileError}
                  </p>
                )}

                {paymentFile && !fileError && (
                  <button
                    type="button"
                    onClick={() => {
                      setPaymentFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    style={{
                      background: 'none', border: 'none', color: theme.subtext, fontSize: '0.78rem',
                      cursor: 'pointer', marginTop: '5px', padding: 0, textDecoration: 'underline',
                    }}
                  >
                    Remove &amp; choose another file
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={bookingStatus === 'loading'}
                style={{
                  width: '100%', padding: '14px',
                  background: bookingStatus === 'loading' ? '#6b9e7b' : '#3d7a4f',
                  color: '#faf2ee', border: 'none', borderRadius: '10px',
                  fontWeight: 800, fontSize: '1rem',
                  cursor: bookingStatus === 'loading' ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'background 0.2s, transform 0.15s',
                  boxShadow: '0 4px 20px rgba(61,122,79,0.35)',
                }}
                onMouseEnter={e => {
                  if (bookingStatus !== 'loading') {
                    e.currentTarget.style.background = '#2d5c3b';
                    e.currentTarget.style.transform = 'scale(1.01)';
                  }
                }}
                onMouseLeave={e => {
                  if (bookingStatus !== 'loading') {
                    e.currentTarget.style.background = '#3d7a4f';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                {bookingStatus === 'loading' ? 'Submitting Booking...' : 'Submit Booking Request'}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* ── Responsive styles ────────────────────────────────── */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .booking-row-2col {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .form-row-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
