import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { isValidEmail } from '@/utils/validators';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus({ type: 'error', text: 'Please provide your name.' });
      return;
    }
    if (!isValidEmail(formData.email)) {
      setStatus({ type: 'error', text: 'Please provide a valid email address.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', text: 'Please write your message.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', text: 'Thank you! Your message has been received. We will respond promptly.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="contact-form-card"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'clamp(2rem, 5vw, 3rem)',
        borderRadius: '2rem',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--card-shadow)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="contact-form-header">
        <h3 className="contact-form-title">Send Us a Message</h3>
        <p className="contact-form-subtitle">
          Fill out the form and our engineering team will get back to you within 24 hours.
        </p>
      </div>

      {status && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            backgroundColor: status.type === 'error' ? 'rgba(255, 68, 68, 0.15)' : 'rgba(0, 255, 0, 0.15)',
            border: `1px solid ${status.type === 'error' ? 'rgba(255, 68, 68, 0.4)' : 'rgba(0, 255, 0, 0.4)'}`,
            color: status.type === 'error' ? '#ff6b6b' : 'var(--primary)'
          }}
        >
          {status.text}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '0.9rem 1.2rem',
              borderRadius: '0.8rem',
              border: '1px solid var(--card-border)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text)',
              outline: 'none',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)' }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: '0.9rem 1.2rem',
              borderRadius: '0.8rem',
              border: '1px solid var(--card-border)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text)',
              outline: 'none',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)' }}>
            Subject (Optional)
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Project Collaboration / Service Inquiry"
            value={formData.subject}
            onChange={handleChange}
            style={{
              padding: '0.9rem 1.2rem',
              borderRadius: '0.8rem',
              border: '1px solid var(--card-border)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text)',
              outline: 'none',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)' }}>
            Your Message *
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              padding: '0.9rem 1.2rem',
              borderRadius: '0.8rem',
              border: '1px solid var(--card-border)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text)',
              outline: 'none',
              resize: 'vertical',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <button
          type="submit"
          className="btn"
          disabled={isSubmitting}
          style={{
            padding: '1rem',
            fontSize: '1.05rem',
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Send Message <i className="fas fa-paper-plane"></i>
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
