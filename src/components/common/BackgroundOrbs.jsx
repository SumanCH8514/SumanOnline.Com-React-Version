import React from 'react';
import { motion } from 'framer-motion';

const BackgroundOrbs = ({ variant = 'default' }) => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: variant === 'pay' ? '30%' : '15%',
          left: variant === 'pay' ? '30%' : '8%',
          width: variant === 'pay' ? '550px' : '420px',
          height: variant === 'pay' ? '550px' : '420px',
          borderRadius: '50%',
          background: 'var(--primary)',
          filter: 'blur(150px)',
          opacity: 0.14
        }}
      />

      
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '45%',
          right: '8%',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'var(--accent)',
          filter: 'blur(170px)',
          opacity: 0.12
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
