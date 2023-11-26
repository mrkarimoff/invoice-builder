import { type InvoiceDetails } from '@/types';
import { Inter, Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

type InvoiceDetailsProps = {
  data: InvoiceDetails | null;
};

const InvoiceDetails = ({ data }: InvoiceDetailsProps) => {
  if (!data)
    return (
      <div className="flex h-20 w-full items-center justify-center">
        <p className="text-muted-foreground">No details provided!</p>
      </div>
    );

  const {
    address,
    dueDate,
    email,
    invoicePurpose,
    invoiceId,
    issueDate,
    receiverName,
    senderName,
  } = data;

  return (
    <div
      className={`${lora.className} flex w-full flex-wrap items-center  py-2 sm:justify-between`}
    >
      <div className="order-2 flex flex-col gap-10 pt-10 sm:order-1">
        <div>
          <h2 className="font-bold text-cyan-800">FROM:</h2>
          <h2 className="font-bold">{senderName.toUpperCase()}</h2>
          <div className={inter.className}>
            {address?.map((item) => <p key={item}>{item}</p>)}
            <p>Email:{email}</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-cyan-800">TO:</h2>
          <h2 className="font-bold">{receiverName.toUpperCase()}</h2>
        </div>
      </div>
      <div className="order-1 sm:order-2 sm:text-right">
        <h1 className="w-full text-4xl font-bold uppercase tracking-wider text-cyan-700 sm:text-right">
          Invoice
        </h1>
        <div className="mt-9 flex flex-col gap-14">
          <div>
            <p>
              <span className="text-base font-bold text-cyan-800">
                INVOICE ID:
              </span>
              <span
                className={`text-sm font-semibold text-black ${inter.className}`}
              >
                {invoiceId}
              </span>
            </p>
            <p>
              <span className="text-base font-bold text-cyan-800">
                ISSUE DATE:
              </span>
              <span
                className={`text-sm font-semibold text-black ${inter.className}`}
              >
                {issueDate}
              </span>
            </p>
            <p>
              <span className="text-base font-bold text-cyan-800">
                DUE DATE:
              </span>
              <span
                className={`text-sm font-semibold text-black ${inter.className}`}
              >
                {dueDate.toUpperCase()}
              </span>
            </p>
          </div>
          <div>
            <h2 className="font-bold text-cyan-800">FOR:</h2>
            <p className="text-xs">{invoicePurpose}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
