'use client';

import { type DeleteItem } from '@/app/_actions/actions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import { isOdd } from '@/lib/utils';
import { type InvoiceItems } from '@prisma/client';
import { Loader, PenSquare, Trash } from 'lucide-react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import ReactMarkdown from 'react-markdown';
import { customComponents } from './customComponents';
import { useToast } from './ui/use-toast';

type DataTableProps = {
  data: InvoiceItems[];
  actions?: {
    get: () => Promise<void>;
    delete: DeleteItem;
    edit: Dispatch<SetStateAction<InvoiceItems | null>>;
  };
};

export default function DataTable({ data, actions }: DataTableProps) {
  const { toast } = useToast();
  const [itemId, setItemId] = useState<number | null>();

  const handleDelete = async (id: number) => {
    setItemId(id);
    if (actions) {
      const result = await actions.delete(id);
      if (!result.data) {
        toast({
          title: result.message,
          variant: 'destructive',
        });
      }

      actions.get();
      toast({
        title: result.message + '✅',
      });
      setItemId(null);
    }
  };

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
          {actions && (
            <TableHead className="w-[100px] border border-slate-200">
              ACTIONS
            </TableHead>
          )}
        </TableRow>

        {data.map((invoice, index) => (
          <TableRow
            className={`${isOdd(index) && 'bg-slate-50'}`}
            key={invoice.id}
          >
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
            {actions && (
              <TableCell className="border border-slate-200 font-bold">
                <div className="flex justify-between gap-1">
                  <button onClick={() => actions.edit(invoice)}>
                    <PenSquare
                      size={20}
                      className="text-blue-500 transition-colors hover:text-blue-300"
                    />
                  </button>
                  <button
                    disabled={itemId === invoice.id}
                    onClick={() => handleDelete(invoice.id)}
                  >
                    {itemId === invoice.id ? (
                      <Loader className="animate-spin text-red-500" />
                    ) : (
                      <Trash
                        size={20}
                        className="text-red-500 transition-colors hover:text-red-300"
                      />
                    )}
                  </button>
                </div>
              </TableCell>
            )}
          </TableRow>
        ))}

        <TableRow>
          <TableCell className="text-right text-base font-bold" colSpan={4}>
            TOTAL
          </TableCell>
          <TableCell className="border border-slate-200 text-right font-bold">
            $
            {data
              .reduce((total, item) => total + item.hours * item.rate, 0)
              .toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
