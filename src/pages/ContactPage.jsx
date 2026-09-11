import React from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import ContactInfo from '@/components/features/contact/ContactInfo';
import ContactForm from '@/components/features/contact/ContactForm';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const ContactPage = () => {
  useDocumentTitle('Contact Us');

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SectionHeader
        title="Get In"
        highlight="Touch"
        subtitle="Have a technical inquiry, business proposal, or custom software requirement? Reach out and we will be delighted to collaborate."
      />

      <section className="contact-page-section" style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}
        >
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
