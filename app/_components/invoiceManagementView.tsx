'use client';

import DataTable from '@/components/dataTable';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';
import { type InvoiceItems } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import {
  deleteItem,
  deleteSelected,
  getAllItemsByUserId,
} from '../_actions/actions';
import ItemForm from './itemForm';
import NoDataMessage from './noDataMessage';

type InvoiceManagementViewProps = {
  userId: string;
};

const InvoiceManagementView = ({ userId }: InvoiceManagementViewProps) => {
  const [invoiceItems, setInvoiceItems] = useState<Array<InvoiceItems>>([]);
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState<InvoiceItems | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const getInvoiceItems = useCallback(async () => {
    setLoading(true);
    const result = await getAllItemsByUserId(userId);
    if (!result.data) {
      setError(result.message);
      toast({
        title: result.message,
        variant: 'destructive',
      });
      setLoading(false);
      return;
    }

    setInvoiceItems(result.data);
    setLoading(false);
  }, [toast, setInvoiceItems, userId]);

  useEffect(() => {
    getInvoiceItems();
  }, [getInvoiceItems]);

  return (
    <div className="space-y-5">
      <div className="rounded-md bg-blue-50 p-4">
        <ItemForm
          userId={userId}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          getInvoiceItems={getInvoiceItems}
        />
      </div>
      <div className="rounded-md bg-white p-4">
        <h4 className="my-1 font-semibold">Invoice Table</h4>
        <div className="h-[1px] w-full bg-slate-200" />
        {error ? (
          <p>Error: {error} Please try refreshing the page.</p>
        ) : (
          <>
            {invoiceItems.length > 0 ? (
              <DataTable
                data={invoiceItems}
                actions={{
                  get: getInvoiceItems,
                  delete: deleteItem,
                  edit: setCurrentItem,
                  deleteSelected: deleteSelected,
                }}
              />
            ) : loading ? (
              <div>
                <p>Loading...</p>
                <Skeleton className="min-h-[150px] w-full" />
              </div>
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
