import InvoiceView from '@/app/invoice/_components/invoiceView';
import { getAllItemsByUserId, getInvoiceDetails } from '../_actions/actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export const revalidate = 0;

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect('/');

  const itemsResult = await getAllItemsByUserId(userId);
  const detailsResult = await getInvoiceDetails(userId);

  return (
    <div className="container mx-auto my-2 rounded-md bg-white p-4">
      <InvoiceView
        invoiceItems={itemsResult.data}
        invoiceDetails={detailsResult.data}
      />
    </div>
  );
};

export default Page;
