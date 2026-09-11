import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import ServiceCard from './ServiceCard';

const CATEGORY_ICONS = {
  'All': 'fas fa-layer-group',
  'AI Tools': 'fas fa-robot',
  'Finance': 'fas fa-wallet',
  'Cloud': 'fas fa-cloud',
  'Utility': 'fas fa-tools',
  'Entertainment': 'fas fa-film',
  'Education': 'fas fa-graduation-cap'
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
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

  const handleCategoryClick = (category, e) => {
    setSelectedCategory(category);
    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

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
        <div className="category-filter-wrapper">
          <div className="category-filter-container">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              const iconClass = CATEGORY_ICONS[category] || 'fas fa-tag';
              const count = category === 'All'
                ? servicesData.length
                : servicesData.filter((s) => s.category === category).length;

              return (
                <button
                  key={category}
                  onClick={(e) => handleCategoryClick(category, e)}
                  className={`category-filter-btn ${isSelected ? 'active' : ''}`}
                  type="button"
                >
                  <i className={iconClass}></i>
                  <span>{category}</span>
                  <span className="category-count">{count}</span>
                </button>
              );
            })}
          </div>
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

