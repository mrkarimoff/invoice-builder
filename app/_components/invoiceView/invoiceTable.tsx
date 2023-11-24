import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import { isOdd } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { customComponents } from './customComponents';

const invoices = [
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: 7.66,
    rate: 19,
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: 7.66,
    rate: 19,
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: 7.66,
    rate: 19,
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: 7.66,
    rate: 19,
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: 7.66,
    rate: 19,
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: 7.66,
    rate: 19,
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: 7.66,
    rate: 19,
  },
];

const totalAmount = invoices.reduce((total, item) => {
  return total + item.hours * item.rate;
}, 0);

export default function InvoiceTable() {
  return (
    <Table className="mt-5 border">
      <TableBody>
        <TableRow className="text-cyan-800">
          <TableHead className="w-[100px] border border-slate-200">
            DATE
          </TableHead>
          <TableHead className="border border-slate-200">DESCRIPTION</TableHead>
          <TableHead className="w-[80px] border border-slate-200">
            HOURS
          </TableHead>
          <TableHead className="w-[70px] border border-slate-200">
            RATE
          </TableHead>
          <TableHead className="w-[100px] border border-slate-200">
            AMOUNT
          </TableHead>
        </TableRow>

        {invoices.map((invoice, index) => (
          <TableRow className={`${isOdd(index) && 'bg-slate-50'}`} key={index}>
            <TableCell className="border border-slate-200">
              {invoice.date}
            </TableCell>
            <TableCell className="border border-slate-200">
              <ReactMarkdown components={customComponents}>
                {invoice.description}
              </ReactMarkdown>
            </TableCell>
            <TableCell className="border border-slate-200">
              {invoice.hours}
            </TableCell>
            <TableCell className="border border-slate-200">
              ${invoice.rate}
            </TableCell>
            <TableCell className="border border-slate-200 font-bold">
              ${invoice.rate * invoice.hours}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="bg-white text-black">
        <TableRow>
          <TableCell className="text-right text-base font-bold" colSpan={4}>
            TOTAL
          </TableCell>
          <TableCell className="border border-slate-200 text-right font-bold">
            ${totalAmount.toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
