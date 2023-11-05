'use client';

import InvoiceForm from '@/components/main/invoiceForm/invoiceForm';
import InvoiceView from '@/components/main/invoiceView/invoiceView';
import { useState } from 'react';

const Page = () => {
  const [showView, setShowView] = useState(true);

  return (
    <div className="container mx-auto p-4">
      {showView ? (
        <InvoiceView setShowView={setShowView} />
      ) : (
        <InvoiceForm setShowView={setShowView} />
      )}
    </div>
  );
};

export default Page;
