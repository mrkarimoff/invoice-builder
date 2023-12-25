'use client';

import {
  DeleteSelectedItemsFunction,
  type DeleteItemFunction,
} from '@/app/_actions/actions';
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
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { useToast } from './ui/use-toast';

type DataTableProps = {
  data: InvoiceItems[];
  actions?: {
    get: () => Promise<void>;
    delete: DeleteItemFunction;
    edit: Dispatch<SetStateAction<InvoiceItems | null>>;
    deleteSelected: DeleteSelectedItemsFunction;
  };
};

export default function DataTable({ data, actions }: DataTableProps) {
  const { toast } = useToast();
  const [itemId, setItemId] = useState<number | null>();
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedItems, setSelectedItems] = useState<InvoiceItems[]>([]);

  const handleDeleteSelected = async () => {
    setIsDeleting(true);
    if (actions) {
      const result = await actions.deleteSelected(selectedItems);
      if (!result.data) {
        toast({
          title: result.message,
          variant: 'destructive',
        });
      } else {
        actions.get();
      }
    }
    setSelectedItems([]);
    setIsDeleting(false);
  };

  const handleDelete = async (id: number, userId: string) => {
    setItemId(id);
    if (actions) {
      const result = await actions.delete(id, userId);
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
    <>
      {actions && selectedItems.length ? (
        <div className="space-x-3">
          <Button
            onClick={handleDeleteSelected}
            variant="destructive"
            size="sm"
            disabled={isDeleting}
            className="mt-4"
          >
            {isDeleting ? (
              <span className="flex items-center gap-2">
                Deleting...
                <Loader className="h-4 w-4 animate-spin text-white" />
              </span>
            ) : (
              'Delete Selected'
            )}
          </Button>
          <span className="text-sm text-muted-foreground">
            selected {selectedItems.length} items
          </span>
        </div>
      ) : (
        <div className="invisible h-4"></div>
      )}

      <Table className="mt-5 border">
        <TableBody>
          <TableRow className="text-cyan-800">
            {actions && (
              <TableHead className="w-[100px]">
                <Checkbox
                  checked={!!selectedItems.length}
                  onCheckedChange={(checkState) =>
                    checkState ? setSelectedItems(data) : setSelectedItems([])
                  }
                />
              </TableHead>
            )}
            <TableHead className="w-[100px] border border-slate-200">
              DATE
            </TableHead>
            <TableHead className="border border-slate-200">
              DESCRIPTION
            </TableHead>
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
              className={`${isOdd(index) && 'bg-slate-50'} ${
                selectedItems.some((item) => item.id === invoice.id) &&
                'bg-blue-200'
              }`}
              key={invoice.id}
            >
              {actions && (
                <TableCell className="min-w-[50px]">
                  <Checkbox
                    checked={selectedItems.some(
                      (item) => item.id === invoice.id,
                    )}
                    onCheckedChange={(checkState) =>
                      checkState
                        ? setSelectedItems([...selectedItems, invoice])
                        : setSelectedItems(
                            selectedItems.filter(
                              (item) => item.id !== invoice.id,
                            ),
                          )
                    }
                  />
                </TableCell>
              )}
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
                      onClick={() => handleDelete(invoice.id, invoice.userId)}
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
    </>
  );
}
