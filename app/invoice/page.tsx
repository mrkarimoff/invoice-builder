import InvoiceView from '@/app/invoice/_components/invoiceView';
import { getAllItems, getInvoiceDetails } from '../_actions/actions';

export const revalidate = 0;

const Page = async () => {
  const itemsResult = await getAllItems();
  const detailsResult = await getInvoiceDetails();

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
