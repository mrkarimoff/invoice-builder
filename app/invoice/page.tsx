import InvoiceView from '@/app/invoice/_components/invoiceView';
import { timeStringToDecimal } from '@/lib/utils';

const Page = () => {
  // const timeString = '7:40';
  // const decimalTime = timeStringToDecimal(timeString);
  // console.log('OUTPUT:', decimalTime.toFixed(2));

  return (
    <div className="container mx-auto p-4">
      <InvoiceView />
    </div>
  );
};

export default Page;
