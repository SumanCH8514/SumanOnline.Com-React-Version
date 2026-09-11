import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      style={{
        background: 'var(--bg-secondary)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--card-shadow)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {project.badge && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'var(--primary)',
              color: '#000',
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}
          >
            {project.badge}
          </span>
        )}
      </div>

      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--primary)',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          {project.category}
        </span>

        <h3 style={{ margin: '0.5rem 0 0.8rem', fontSize: '1.4rem' }}>{project.title}</h3>

        <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.55 }}>
          {project.description}
        </p>

        {project.tags && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.75rem',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-light)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="btn"
          style={{ width: '100%', textAlign: 'center' }}
        >
          View Live Application <i className="fas fa-external-link-alt" style={{ marginLeft: '8px' }}></i>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
