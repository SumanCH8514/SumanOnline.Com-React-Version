import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import ServiceCard from './ServiceCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const ServicesGrid = ({ showFilter = true, limit = null, title = 'Explore Ecosystem Services' }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(servicesData.map((s) => s.category))).filter(Boolean)];

  const filteredServices = servicesData.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <section className="services">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}

      {showFilter && (
        <div className="category-filter-container">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-filter-btn ${isSelected ? 'active' : ''}`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.02 }}
        key={selectedCategory}
      >
        {displayServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
