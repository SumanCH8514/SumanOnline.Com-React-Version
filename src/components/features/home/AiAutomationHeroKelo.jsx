import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroSlidesData } from '@/data/heroSlidesData';

const AiAutomationHeroKelo = ({ className = '' }) => {
  const videoRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlidesData.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlidesData[currentSlideIndex];

  return (
    <section className={`kelo-hero-wrapper ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="kelo-video-bg"
      >
        <source src="https://cdn.jiro.build/Kelo/Hero%201%20Video.mp4" type="video/mp4" />
      </video>

      <div className="kelo-video-overlay" />

      <div className="kelo-content-body">
        <div className="kelo-ambient-glow-circle" />

        <div className="kelo-content-inner">
          <div className="kelo-slide-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="kelo-slide-card"
              >
                <h1 className="kelo-hero-heading">
                  <span>{slide.titlePrefix}</span>
                  <span className="kelo-heading-gradient">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="kelo-hero-desc">
                  {slide.subtitle}
                </p>

                <div className="kelo-cta-wrapper">
                  <div className="kelo-cta-halo-wrap">
                    <div className="kelo-cta-halo" />
                    {slide.isExternal ? (
                      <a
                        href={slide.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="kelo-cta-btn"
                      >
                        {slide.buttonText} <i className="fas fa-arrow-right" style={{ marginLeft: '8px', fontSize: '0.9rem' }}></i>
                      </a>
                    ) : (
                      <Link to={slide.buttonLink} className="kelo-cta-btn">
                        {slide.buttonText} <i className="fas fa-arrow-right" style={{ marginLeft: '8px', fontSize: '0.9rem' }}></i>
                      </Link>
                    )}
                  </div>

                  <div className="kelo-microcopy">
                    <svg className="kelo-check-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{slide.microcopy}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="kelo-slide-pagination">
            {heroSlidesData.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`kelo-dot-indicator ${idx === currentSlideIndex ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="kelo-scroll-prompt">
          <span className="kelo-scroll-label">Scroll to Explore</span>
          <div className="kelo-scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default AiAutomationHeroKelo;
