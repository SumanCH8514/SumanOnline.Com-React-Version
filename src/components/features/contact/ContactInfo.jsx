import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Direct Communication</h2>
      <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
        Reach out to discuss custom web engineering, AI integrations, partnerships, or platform inquiries.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: 'var(--primary)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontSize: '1.4rem'
            }}
          >
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Email Us
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{ fontWeight: 'bold', color: 'var(--text)', textDecoration: 'none' }}
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: '#25D366',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.4rem'
            }}
          >
            <i className="fab fa-whatsapp"></i>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              WhatsApp Direct
            </h4>
            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: 'bold', color: 'var(--text)', textDecoration: 'none' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: '#0088cc',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.4rem'
            }}
          >
            <i className="fab fa-telegram-plane"></i>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Telegram Support
            </h4>
            <a
              href={siteConfig.socialLinks.telegramBot}
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: 'bold', color: 'var(--text)', textDecoration: 'none' }}
            >
              @Contact_SumanOnline_bot
            </a>
          </div>
        </div>

        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              background: 'var(--secondary)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.4rem'
            }}
          >
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Headquarters
            </h4>
            <p style={{ fontWeight: 'bold', margin: 0 }}>{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
