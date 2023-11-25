'use client';

import DataTable from '@/components/dataTable';
import { useToast } from '@/components/ui/use-toast';
import { InvoiceItems } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { deleteItem, getAllItems } from '../_actions/actions';
import ItemForm from './itemForm';
import NoDataMessage from './noDataMessage';

const InvoiceManagementView = () => {
  const [invoiceItems, setInvoiceItems] = useState<Array<InvoiceItems>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const getInvoiceItems = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getAllItems();
      if (!result.data) {
        setError(result.message);
        toast({
          title: result.message,
          variant: 'destructive',
        });
        return;
      }
      setInvoiceItems(result.data);
    } catch (error) {
      setError('An error occurred while fetching data.');
      console.error(error);
    }
    setLoading(false);
  }, [toast, setInvoiceItems]);

  useEffect(() => {
    getInvoiceItems();
  }, [getInvoiceItems]);

  return (
    <div className="space-y-5">
      <div className="rounded-md bg-blue-50 p-4">
        <ItemForm getInvoiceItems={getInvoiceItems} />
      </div>
      <div className="rounded-md bg-white p-4">
        <h4 className="my-1 font-semibold">Invoice Table</h4>
        <div className="h-[1px] w-full bg-slate-200" />
        {loading && <p>Loading...</p>}
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            {invoiceItems.length > 0 ? (
              <DataTable
                data={invoiceItems}
                actions={{ get: getInvoiceItems, delete: deleteItem }}
              />
            ) : (
              <NoDataMessage />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default InvoiceManagementView;
