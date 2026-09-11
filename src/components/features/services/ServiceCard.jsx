import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14 }
  }
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="service-card"
      variants={itemVariants}
      whileHover={{ y: -8 }}
    >
      {service.badge && (
        <span className="service-badge">
          {service.badge}
        </span>
      )}
      <div className="service-icon-wrapper">
        <i className={service.icon}></i>
      </div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <a href={service.url} target="_blank" rel="noreferrer" className="btn">
        Launch <i className="fas fa-arrow-up-right-from-square" style={{ marginLeft: '6px', fontSize: '0.8em' }}></i>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
