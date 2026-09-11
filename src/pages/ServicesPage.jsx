import React from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import ServicesGrid from '@/components/features/services/ServicesGrid';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const ServicesPage = () => {
  useDocumentTitle('Services & Tools');

  return (
    <div style={{ paddingBottom: '5rem' }}>
      <SectionHeader
        title="Our Complete Suite of"
        highlight="Digital Services"
        subtitle="Explore our comprehensive library of media streaming platforms, AI generation tools, productivity utilities, and SaaS web applications."
      />

      <ServicesGrid showFilter={true} title="" />
    </div>
  );
};

export default ServicesPage;
