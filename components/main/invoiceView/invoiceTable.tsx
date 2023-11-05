import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ReactMarkdown from 'react-markdown';
import customMarkdownComponents from './customMarkdownComponents';
import { isOdd } from '@/lib/utils';

const invoices = [
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: '7.66',
    rate: '$19',
    amount: '$145.54',
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: '7.66',
    rate: '$19',
    amount: '$145.54',
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: '7.66',
    rate: '$19',
    amount: '$145.54',
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: '7.66',
    rate: '$19',
    amount: '$145.54',
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: '7.66',
    rate: '$19',
    amount: '$145.54',
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: '7.66',
    rate: '$19',
    amount: '$145.54',
  },
  {
    date: '10/02/2023',
    description: `Working on the new documentation website 
 - Fixing the md render errors 
 - Working on the product switcher 
 - Working on “generateStaticParams” on the dynamic page `,
    hours: '7.66',
    rate: '$19',
    amount: '$145.54',
  },
];

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
          <TableRow
            className={`${isOdd(index) && 'bg-slate-50'}`}
            key={invoice.date}
          >
            <TableCell className="border border-slate-200">
              {invoice.date}
            </TableCell>
            <TableCell className="border border-slate-200">
              <ReactMarkdown components={customMarkdownComponents}>
                {invoice.description}
              </ReactMarkdown>
            </TableCell>
            <TableCell className="border border-slate-200">
              {invoice.hours}
            </TableCell>
            <TableCell className="border border-slate-200">
              {invoice.rate}
            </TableCell>
            <TableCell className="border border-slate-200 font-bold">
              {invoice.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
