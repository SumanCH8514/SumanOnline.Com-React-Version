import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({
  title,
  highlight,
  subtitle,
  align = 'center',
  maxWidth = '750px'
}) => {
  return (
    <div
      className="section-header-container"
      style={{
        textAlign: align,
        maxWidth: maxWidth,
        margin: '0 auto'
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
          marginBottom: '0.75rem',
          color: 'var(--text)',
          fontWeight: 800,
          lineHeight: 1.15
        }}
      >
        {title} {highlight && <span style={{ color: 'var(--primary)' }}>{highlight}</span>}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            color: 'var(--text-light)',
            fontSize: '1.05rem',
            lineHeight: 1.55,
            margin: '0 auto'
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
