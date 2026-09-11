import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '@/data/agencyData';

const TestimonialsSection = () => {
  const [filterService, setFilterService] = useState('All');

  const categories = ['All', 'Full-Stack Web App', 'Mobile App Development', 'UI/UX & Web Design', 'Cloud Backend & Security'];

  const filteredList = filterService === 'All'
    ? testimonialsData
    : testimonialsData.filter((item) => item.service === filterService);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="testimonials-pill-badge"
          >
            <i className="fas fa-comments"></i>
            <span>User Testimony & Reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="testimonials-main-title"
          >
            Trusted by <span>Clients & Builders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="testimonials-main-subtitle"
          >
            Real feedback from founders, teams, and developers who build and scale their digital products with SumanOnline.
          </motion.p>

          <div className="testimonials-rating-summary">
            <div className="rating-stars-badge">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="rating-score">5.0 / 5.0</span>
            <span className="rating-divider">•</span>
            <span className="rating-desc">100% Client Satisfaction & Recommendation</span>
          </div>

          <div className="testimonials-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterService(cat)}
                className={`testimonial-filter-btn ${filterService === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="testimonials-grid">
          <AnimatePresence>
            {filteredList.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.35 }}
                className="testimonial-card"
              >
                <div className="testimonial-card-topbar">
                  <div className="testimonial-stars" aria-label={`${item.rating} stars`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="testimonial-service-pill">
                    {item.service}
                  </span>
                </div>

                <div className="testimonial-quote-box">
                  <p className="testimonial-quote-text">
                    "{item.content}"
                  </p>
                </div>

                <div className="testimonial-author-row">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                  <div className="testimonial-author-info">
                    <div className="testimonial-author-name-wrap">
                      <span className="testimonial-name">{item.name}</span>
                      {item.verified && (
                        <span className="testimonial-verified-badge" title="Verified Client">
                          <i className="fas fa-check"></i>
                        </span>
                      )}
                    </div>
                    <span className="testimonial-role">{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
