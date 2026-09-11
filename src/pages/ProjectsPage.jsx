import React, { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import ProjectCard from '@/components/features/projects/ProjectCard';
import ProjectDetailModal from '@/components/features/projects/ProjectDetailModal';
import { projectsData } from '@/data/projectsData';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECT_CATEGORY_ICONS = {
  'All': 'fas fa-layer-group',
  'Full-Stack': 'fas fa-cubes',
  'Frontend': 'fas fa-desktop',
  'Web App': 'fas fa-laptop-code',
  'Mobile': 'fas fa-mobile-screen',
  'AI/ML': 'fas fa-brain',
  'UI/UX': 'fas fa-wand-magic-sparkles'
};

const ProjectsPage = () => {
  useDocumentTitle('Featured Projects');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category))).filter(Boolean)];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

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
    <div style={{ paddingBottom: '5rem' }}>
      <SectionHeader
        title="Our Featured"
        highlight="Creations"
        subtitle="A showcase of full-stack web applications, SaaS products, and custom digital platforms engineered with high-grade precision."
      />

      <div className="category-filter-wrapper" style={{ marginTop: '0.75rem', marginBottom: '1.75rem' }}>
        <div className="category-filter-container">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const iconClass = PROJECT_CATEGORY_ICONS[category] || 'fas fa-tag';
            const count = category === 'All'
              ? projectsData.length
              : projectsData.filter((p) => p.category === category).length;

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

      <section className="projects-grid-section">
        <motion.div
          layout
          className="projects-grid-container"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%' }}
              >
                <ProjectCard
                  project={project}
                  onKnowMore={setSelectedProjectModal}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {selectedProjectModal && (
        <ProjectDetailModal
          key={selectedProjectModal.id}
          project={selectedProjectModal}
          onClose={() => setSelectedProjectModal(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
