'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { itemsFormSchema } from '@/lib/formSchemas';
import { decimalToTimeString, timeStringToDecimal } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { type InvoiceItems } from '@prisma/client';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { saveInvoiceItem, updateItem } from '../_actions/actions';

type ItemFormProps = {
  getInvoiceItems: () => Promise<void>;
  currentItem: InvoiceItems | null;
  setCurrentItem: Dispatch<SetStateAction<InvoiceItems | null>>;
};

const ItemForm = ({
  getInvoiceItems,
  setCurrentItem,
  currentItem,
}: ItemFormProps) => {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const defaultValues = { date: '', description: '', hours: '', rate: '19' };
  const form = useForm<z.infer<typeof itemsFormSchema>>({
    resolver: zodResolver(itemsFormSchema),
    defaultValues,
  });

  useEffect(() => {
    if (currentItem) {
      form.reset({
        date: currentItem.date,
        description: currentItem.description,
        hours: decimalToTimeString(currentItem.hours),
        rate: String(currentItem.rate),
      });
    }
  }, [currentItem, form]);

  async function onSubmit(values: z.infer<typeof itemsFormSchema>) {
    setIsSaving(true);
    const decimalTime = timeStringToDecimal(values.hours);
    const formData = {
      ...values,
      hours: +decimalTime.toFixed(2),
      rate: +values.rate,
    };
    let result;

    if (currentItem) {
      result = await updateItem(currentItem.id, formData);
    } else {
      result = await saveInvoiceItem(formData);
    }

    if (result && !result.data) {
      toast({
        title: result.message,
        variant: 'destructive',
      });
      throw new Error(result.message);
    }

    toast({
      title: result?.message + '✅',
    });
    cleanForm();
  }

  const cleanForm = () => {
    getInvoiceItems();
    setIsSaving(false);
    form.reset(defaultValues);
    setCurrentItem(null);
  };

  return (
    <Form {...form}>
      <h4 className="my-1 font-semibold">Invoice Items</h4>
      <Separator />

      <form
        id="itemForm"
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col flex-wrap justify-center gap-5 md:flex-row"
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="mm/dd/yyy"
                  {...field}
                />
              </FormControl>
              <FormDescription>The date you worked.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description of your service"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Use markdown syntax to make bullet points( - ).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hours</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="hh:mm"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Put the hours you spend (e.g: 7:40).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="w-full md:w-[280px] "
                  placeholder="rate"
                  {...field}
                />
              </FormControl>
              <FormDescription>Put your hourly rate.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <div className="mt-3 flex items-center justify-end gap-1.5">
        <Button
          className="px-8"
          form="itemForm"
          type="submit"
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </Form>
  );
};

export default ItemForm;
