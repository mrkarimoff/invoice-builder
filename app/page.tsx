import Link from 'next/link';
import DetailsForm from './_components/detailsForm';
import InvoiceManagementView from './_components/invoiceManagementView';
import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs';

const Page = () => {
  const { userId } = auth();

  if (!userId) return null;

  return (
    <div>
      <div className="container mx-auto p-4">
        <Link href={'/invoice'}>
          <Button>See Invoice</Button>
        </Link>
        <h2 className="my-2 text-center text-xl font-semibold uppercase">
          Invoice Form
        </h2>
        <div className="flex flex-col gap-5">
          <div className="rounded-md bg-blue-50 p-4">
            <DetailsForm userId={userId} />
          </div>
          <InvoiceManagementView userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Page;
