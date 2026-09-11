import React from 'react';
import PaymentCard from '@/components/features/pay/PaymentCard';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const PayPage = () => {
  useDocumentTitle('Payment Gateway');

  return (
    <div className="pay-page-container">
      <section className="pay-page-section">
        <PaymentCard />
      </section>
    </div>
  );
};

export default PayPage;
