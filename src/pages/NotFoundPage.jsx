import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const NotFoundPage = () => {
  useDocumentTitle('404 Page Not Found');

  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'var(--bg-secondary)',
          padding: '4rem 3rem',
          borderRadius: '2rem',
          border: '1px solid var(--card-border)',
          boxShadow: 'var(--card-shadow)',
          maxWidth: '550px',
          width: '100%',
          backdropFilter: 'blur(10px)'
        }}
      >
        <span
          style={{
            fontSize: '5rem',
            fontWeight: 900,
            fontFamily: 'Orbitron, sans-serif',
            color: 'var(--primary)',
            display: 'block',
            lineHeight: 1,
            marginBottom: '1rem',
            textShadow: '0 0 25px rgba(0, 255, 0, 0.4)'
          }}
        >
          404
        </span>

        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          The link you accessed may be broken, relocated, or temporarily offline.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn">
            <i className="fas fa-home" style={{ marginRight: '8px' }}></i> Return to Home
          </Link>
          <Link
            to="/services"
            className="btn"
            style={{
              background: 'transparent',
              border: '1px solid var(--primary)',
              color: 'var(--text)'
            }}
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
