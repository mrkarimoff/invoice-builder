import InvoiceView from '@/app/invoice/_components/invoiceView';
import { getAllItems } from '../_actions/actions';

const Page = async () => {
  const result = await getAllItems();

  if (!result.data) {
    return (
      <div className="container mx-auto p-4">
        <p className="font-bold text-red-500">
          {result.message} Try refreshing the page.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <InvoiceView invoiceItems={result.data} />
    </div>
  );
};

export default Page;
