'use client';

import DataTable from '@/components/dataTable';
import { Button } from '@/components/ui/button';
import { type InvoiceDetails, type InvoiceItems } from '@prisma/client';
import { ArrowLeft } from 'lucide-react';
import { Lora } from 'next/font/google';
import Link from 'next/link';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import InvoiceDetailsView from './invoiceDetailsView';

const lora = Lora({ subsets: ['latin'] });

type InvoiceViewProps = {
  invoiceItems: InvoiceItems[] | null;
  invoiceDetails: InvoiceDetails | null;
};

const InvoiceView = ({ invoiceItems, invoiceDetails }: InvoiceViewProps) => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="flex gap-2">
        <Link href={'/'}>
          <Button className="space-x-2" size={'sm'}>
            <ArrowLeft size={18} />
            <span>Edit Invoice</span>
          </Button>
        </Link>
        <Button size={'sm'} variant={'default'} onClick={handlePrint}>
          Print this out!
        </Button>
      </div>
      <div ref={componentRef} className="flex flex-col items-start gap-2">
        <InvoiceDetailsView data={invoiceDetails} />
        <DataTable data={invoiceItems ?? []} />
        <p className={`${lora.className} mt-[40px] font-bold text-cyan-800`}>
          THANK YOU FOR YOUR BUSINESS!
        </p>
      </div>
    </>
  );
};

export default InvoiceView;
