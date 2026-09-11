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
        margin: '0 auto',
        padding: '0 1rem'
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: 'clamp(1.65rem, 5.2vw, 3rem)',
          marginBottom: '0.6rem',
          color: 'var(--text)',
          fontWeight: 800,
          lineHeight: 1.18,
          letterSpacing: '-0.5px'
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
            fontSize: 'clamp(0.88rem, 2.5vw, 1.05rem)',
            lineHeight: 1.55,
            margin: '0 auto',
            maxWidth: '620px'
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
