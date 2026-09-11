import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const getHostname = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return 'sumanonline.com';
  }
};

const ProjectDetailModal = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, isLightboxOpen]);

  if (!project) return null;

  const galleryList = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ label: 'Interface Overview', image: project.image }];

  const currentView = galleryList[activeImageIndex] || galleryList[0];

  const handlePrevImage = (e) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryList.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === galleryList.length - 1 ? 0 : prev + 1));
  };

  const modalElement = (
    <AnimatePresence>
      <motion.div
        key="project-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="project-modal-overlay"
        onClick={onClose}
      >
        <motion.div
          key="project-modal-window"
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="project-modal-dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="project-modal-header">
            <div className="modal-header-left">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="project-modal-url">
                <i className="fas fa-lock" style={{ marginRight: '6px', fontSize: '0.7em' }}></i>
                https://{getHostname(project.link)}
              </span>
            </div>

            <div className="modal-header-actions">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-header-launch"
              >
                <span>Launch Live Application</span>
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>

              <button
                type="button"
                className="project-modal-close-btn"
                onClick={onClose}
                aria-label="Close dialog"
              >
                <i className="fas fa-xmark"></i>
              </button>
            </div>
          </div>

          <div className="project-modal-content-grid">
            <div className="project-modal-gallery-col">
              <div className="modal-viewport-header">
                <div className="modal-viewport-label">
                  <i className="fas fa-desktop" style={{ marginRight: '6px', color: 'var(--primary)' }}></i>
                  <span>Active View: <strong>{currentView.label}</strong></span>
                </div>
                <span className="modal-viewport-counter">
                  {activeImageIndex + 1} / {galleryList.length}
                </span>
              </div>

              <div
                className={`modal-viewport-frame ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsLightboxOpen(true)}
              >
                <div className="modal-image-stage">
                  <motion.img
                    key={currentView.image + activeImageIndex}
                    initial={{ opacity: 0.35, scale: 0.99 }}
                    animate={{ opacity: 1, scale: isHovered ? 1.04 : 1 }}
                    transition={{ duration: 0.3 }}
                    src={currentView.image}
                    alt={currentView.label}
                    className="modal-screen-img"
                  />

                  <div className={`viewport-zoom-hint ${isHovered ? 'visible' : ''}`}>
                    <i className="fas fa-magnifying-glass-plus"></i>
                    <span>Click for Full High-Res Preview</span>
                  </div>
                </div>
              </div>

              {galleryList.length > 1 && (
                <div className="modal-gallery-selector">
                  <div className="gallery-selector-title">
                    <i className="fas fa-layer-group"></i>
                    <span>Multiple Project Views ({galleryList.length}):</span>
                  </div>

                  <div className="gallery-tabs-row">
                    {galleryList.map((item, idx) => {
                      const isActive = idx === activeImageIndex;
                      return (
                        <button
                          key={idx}
                          type="button"
                          className={`gallery-tab-chip ${isActive ? 'active' : ''}`}
                          onClick={() => setActiveImageIndex(idx)}
                        >
                          <span className="gallery-tab-num">{idx + 1}</span>
                          <span className="gallery-tab-text">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="project-modal-details-col">
              <div className="modal-meta-badges">
                <span className="project-category">{project.category}</span>
                {project.badge && (
                  <span className="project-badge-pill">{project.badge}</span>
                )}
                {project.status && (
                  <span className="modal-live-status-pill">
                    <span className="live-status-dot"></span>
                    {project.status}
                  </span>
                )}
              </div>

              <h2 className="modal-project-title">{project.title}</h2>

              <p className="modal-project-description">
                {project.longDescription || project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="modal-features-section">
                  <h4>Key Highlights & Architecture</h4>
                  <ul className="modal-features-list">
                    {project.features.map((feat, i) => (
                      <li key={i}>
                        <i className="fas fa-circle-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.techStack && project.techStack.length > 0 && (
                <div className="modal-tech-section">
                  <h4>Technology & Stack</h4>
                  <div className="modal-tech-chips">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="modal-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {isLightboxOpen && (
        <motion.div
          key="project-lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="project-lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
        >
          <motion.div
            key="project-lightbox-window"
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="project-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-lightbox-header">
              <div className="lightbox-header-title">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="lightbox-view-title">{project.title} — {currentView.label}</span>
              </div>

              <div className="lightbox-header-actions">
                <span className="lightbox-counter">
                  {activeImageIndex + 1} / {galleryList.length}
                </span>

                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close lightbox"
                >
                  <i className="fas fa-xmark"></i>
                </button>
              </div>
            </div>

            <div className="project-lightbox-body">
              {galleryList.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
              )}

              <div className="lightbox-img-wrapper">
                <motion.img
                  key={currentView.image}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={currentView.image}
                  alt={currentView.label}
                  className="lightbox-full-img"
                />
              </div>

              {galleryList.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalElement, document.body)
    : modalElement;
};

export default ProjectDetailModal;
