import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { agencyServicesData, agencyStatsData } from '@/data/agencyData';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const WebDevServicesSection = () => {
  return (
    <section className="agency-section">
      <div className="agency-container">
        <div className="agency-header">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="agency-pill-badge"
          >
            <i className="fas fa-sparkles"></i>
            <span>SumanOnline Web Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="agency-main-title"
          >
            Website Design & <span>Mobile App Development</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="agency-main-subtitle"
          >
            We design, engineer, and deploy high-performance websites and native mobile applications tailored for modern businesses, creators, and startups.
          </motion.p>
        </div>

        <div className="agency-stats-bar">
          {agencyStatsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="agency-stat-item"
            >
              <div className="agency-stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="agency-stat-content">
                <span className="agency-stat-val">{stat.value}</span>
                <span className="agency-stat-lbl">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="agency-grid">
          {agencyServicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="agency-card"
            >
              <div className="agency-card-top">
                <div className="agency-card-icon-box">
                  <i className={service.icon}></i>
                </div>
                <span className="agency-card-tag">{service.tag}</span>
              </div>

              <h3 className="agency-card-title">{service.title}</h3>
              <p className="agency-card-desc">{service.desc}</p>

              <div className="agency-card-features">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="agency-card-feature-row">
                    <i className="fas fa-circle-check"></i>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="agency-card-cta-row">
                <Link to="/contact" className="agency-card-action-btn">
                  <span>Inquire Now</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="agency-cta-banner"
        >
          <div className="agency-cta-content">
            <h3>Have a Vision or Need Custom Development?</h3>
            <p>From initial design sketches to cloud deployment, we turn your idea into a production-grade reality.</p>
          </div>
          <div className="agency-cta-actions">
            <Link to="/contact" className="btn btn-primary agency-cta-btn">
              <i className="fas fa-paper-plane" style={{ marginRight: '6px' }}></i>
              <span>Get in Touch</span>
            </Link>
            <Link to="/projects" className="btn btn-secondary agency-cta-secondary-btn">
              <span>View Projects</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevServicesSection;
