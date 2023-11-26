import Link from 'next/link';
import DetailsForm from './_components/detailsForm';
import InvoiceManagementView from './_components/invoiceManagementView';

const Page = () => {
  return (
    <div className="bg-slate-400">
      <div className="container mx-auto p-4">
        <Link
          className="rounded-md border border-blue-100 bg-slate-100 p-2 transition-colors hover:bg-blue-100"
          href={'/invoice'}
        >
          See Invoice
        </Link>
        <h2 className="my-2 text-center text-xl font-semibold uppercase">
          Invoice Form
        </h2>
        <div className="flex flex-col gap-5">
          <div className="rounded-md bg-blue-50 p-4">
            <DetailsForm />
          </div>
          <InvoiceManagementView />
        </div>
      </div>
    </div>
  );
};

export default Page;
