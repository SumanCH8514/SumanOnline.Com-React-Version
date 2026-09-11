import React, { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import ProjectCard from '@/components/features/projects/ProjectCard';
import { projectsData } from '@/data/projectsData';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsPage = () => {
  useDocumentTitle('Featured Projects');

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category))).filter(Boolean)];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SectionHeader
        title="Our Featured"
        highlight="Creations"
        subtitle="A showcase of full-stack web applications, SaaS products, and custom digital platforms engineered with high-grade precision."
      />

      <div className="category-filter-container" style={{ marginTop: '1rem', marginBottom: '3rem' }}>
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

      <section style={{ padding: '0 2rem', maxWidth: '1240px', margin: '0 auto' }}>
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
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
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;
