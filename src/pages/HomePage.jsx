import React from 'react';
import AiAutomationHeroKelo from '@/components/features/home/AiAutomationHeroKelo';
import WebDevServicesSection from '@/components/features/home/WebDevServicesSection';
import ServicesGrid from '@/components/features/services/ServicesGrid';
import TestimonialsSection from '@/components/features/home/TestimonialsSection';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  useDocumentTitle('Home');

  return (
    <div>
      <AiAutomationHeroKelo />

      <WebDevServicesSection />

      <div style={{ padding: '2rem 0' }}>
        <ServicesGrid title="Explore Ecosystem Services" showFilter={true} />
        
        <div style={{ textAlign: 'center', marginTop: '2.5rem', marginBottom: '3rem' }}>
          <Link to="/services" className="btn" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
            View All Services & Tools <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
          </Link>
        </div>
      </div>

      <section style={{ padding: '4rem 2rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem' }}
        >
          Why Choose <span style={{ color: 'var(--primary)' }}>SumanOnline</span>?
        </motion.h2>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="service-card" style={{ textAlign: 'left' }}>
            <div className="service-icon" style={{ color: 'var(--primary)' }}>
              <i className="fas fa-bolt"></i>
            </div>
            <h3>High Performance</h3>
            <p>Built using ultra-fast modern frameworks, optimized CDNs, and cutting-edge web standards.</p>
          </div>

          <div className="service-card" style={{ textAlign: 'left' }}>
            <div className="service-icon" style={{ color: 'var(--accent)' }}>
              <i className="fas fa-shield-halved"></i>
            </div>
            <h3>Privacy & Security</h3>
            <p>End-to-end client-side processing for converters with strict encryption and zero data harvesting.</p>
          </div>

          <div className="service-card" style={{ textAlign: 'left' }}>
            <div className="service-icon" style={{ color: 'var(--secondary)' }}>
              <i className="fas fa-brain"></i>
            </div>
            <h3>AI Innovation</h3>
            <p>Harness advanced generative neural architectures for automated image processing and smart workflows.</p>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
