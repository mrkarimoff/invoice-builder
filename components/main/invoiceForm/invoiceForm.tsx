import React from 'react';
import { Button } from '../../ui/button';

type InvoiceFormProps = {
  setShowView: React.Dispatch<React.SetStateAction<boolean>>;
};

const InvoiceForm = ({ setShowView }: InvoiceFormProps) => {
  return (
    <div>
      <Button onClick={() => setShowView(true)} variant={'secondary'}>
        See Invoice
      </Button>
      Invoice form
    </div>
  );
};

export default InvoiceForm;
