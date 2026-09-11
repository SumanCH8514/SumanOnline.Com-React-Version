import React from 'react';
import { motion } from 'framer-motion';

const getHostname = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return 'sumanonline.com';
  }
};

const ProjectCard = ({ project, onKnowMore }) => {
  const handleOpen = () => {
    if (onKnowMore) {
      onKnowMore(project);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="project-card-container"
    >
      <div
        className="project-preview-frame"
        onClick={handleOpen}
      >
        <div className="project-preview-header">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <span className="project-preview-url">{getHostname(project.link)}</span>
        </div>

        <div className="project-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="project-thumbnail-img"
            loading="lazy"
          />
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="project-category">{project.category}</span>
          {project.badge && (
            <span className="project-badge-pill">{project.badge}</span>
          )}
        </div>

        <h3 onClick={handleOpen}>
          {project.title}
        </h3>

        <p>{project.description}</p>

        {project.tags && (
          <div className="project-tags-list">
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag-item">
                {tag}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={handleOpen}
          className="btn btn-know-more"
        >
          <span>Know More</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
