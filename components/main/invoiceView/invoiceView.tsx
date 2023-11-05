import { Inter, Lora } from 'next/font/google';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button } from '../../ui/button';
import InvoiceTable from './invoiceTable';

const lora = Lora({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

type InvoiceViewProps = {
  setShowView: React.Dispatch<React.SetStateAction<boolean>>;
};

const InvoiceView = ({ setShowView }: InvoiceViewProps) => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="flex gap-2">
        <Button onClick={() => setShowView(false)} variant={'secondary'}>
          Edit Invoice
        </Button>
        <Button variant={'default'} onClick={handlePrint}>
          Print this out!
        </Button>
      </div>
      <div ref={componentRef} className="flex flex-col items-start gap-2">
        <div className={`${lora.className} flex w-full justify-between`}>
          <div className="flex flex-col gap-10 pt-10">
            <div>
              <h2 className="font-bold text-cyan-800">FROM:</h2>
              <h2 className="font-bold">MIRFAYZ KARIMOV</h2>
              <div className={inter.className}>
                <p>Tor-tor mahalla 2</p>
                <p>Bukhara, Uzbekistan 200407</p>
                <p>Email: mirfayzkarimoff@gmail.com</p>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-cyan-800">TO:</h2>
              <h2 className="font-bold">NORTHWESTERN UNIVERSITY</h2>
            </div>
          </div>
          <div className="text-right">
            <h1 className="w-full text-right text-4xl font-bold uppercase tracking-wider text-cyan-700">
              Invoice
            </h1>
            <div className="mt-9 flex flex-col gap-14">
              <div>
                <p>
                  <span className="text-base font-bold text-cyan-800">
                    INVOICE ID:
                  </span>{' '}
                  <span
                    className={`text-sm font-semibold text-black ${inter.className}`}
                  >
                    #2
                  </span>
                </p>
                <p>
                  <span className="text-base font-bold text-cyan-800">
                    ISSUE DATE:
                  </span>{' '}
                  <span
                    className={`text-sm font-semibold text-black ${inter.className}`}
                  >
                    10/01/2023
                  </span>
                </p>
                <p>
                  <span className="text-base font-bold text-cyan-800">
                    DUE DATE:
                  </span>{' '}
                  <span
                    className={`text-sm font-semibold text-black ${inter.className}`}
                  >
                    UPON RECEIPT
                  </span>
                </p>
              </div>
              <div>
                <h2 className="font-bold text-cyan-800">FOR:</h2>
                <p className="text-xs">
                  dates worked the previous month (10/02/2023 -10/31/2023)
                </p>
              </div>
            </div>
          </div>
        </div>

        <InvoiceTable />
      </div>
    </>
  );
};

export default InvoiceView;
