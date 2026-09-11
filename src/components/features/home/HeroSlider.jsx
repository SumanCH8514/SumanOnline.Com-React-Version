import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlidesData } from '@/data/heroSlidesData';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlidesData.length - 1 ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlidesData[currentSlide];

  return (
    <section className="hero-section">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
      </AnimatePresence>

      
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.75) 100%)',
          zIndex: 1
        }}
      />

      
      <div className="hero-container" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide}>
            {slide.tag && (
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '30px',
                  background: 'rgba(0, 255, 0, 0.15)',
                  border: '1px solid rgba(0, 255, 0, 0.4)',
                  color: 'var(--primary)',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  marginBottom: '1rem'
                }}
              >
                ✦ {slide.tag}
              </motion.span>
            )}

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-orbitron hero-title"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.8)'
              }}
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.95, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="hero-subtitle"
            >
              {slide.subtitle}
            </motion.p>

            {slide.isExternal ? (
              <motion.a
                href={slide.buttonLink}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pulse-button hero-btn"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                  border: '2px solid var(--primary)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {slide.buttonText}
              </motion.a>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'inline-block' }}
              >
                <Link
                  to={slide.buttonLink}
                  className="pulse-button hero-btn"
                  style={{
                    display: 'inline-block',
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                    border: '2px solid var(--primary)',
                    color: '#ffffff',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  {slide.buttonText}
                </Link>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        
        <div className="hero-indicators">
          {heroSlidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: currentSlide === idx ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: '1px solid var(--primary)',
                backgroundColor: currentSlide === idx ? 'var(--primary)' : 'transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
