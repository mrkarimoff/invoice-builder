'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import InvoiceDetails from './invoiceDetails';
import DataTable from '@/components/dataTable';
import { invoices, templateData } from '@/lib/constants';

const InvoiceView = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="flex gap-2">
        <Link
          className="rounded-md border border-blue-100 bg-slate-100 p-2"
          href={'/'}
        >
          Edit Invoice
        </Link>
        <Button variant={'default'} onClick={handlePrint}>
          Print this out!
        </Button>
      </div>
      <div ref={componentRef} className="flex flex-col items-start gap-2">
        <InvoiceDetails data={templateData} />
        <DataTable data={invoices} />
      </div>
    </>
  );
};

export default InvoiceView;
