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
import { detailsFormSchema } from '@/lib/formSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const DetailsForm = () => {
  const form = useForm<z.infer<typeof detailsFormSchema>>({
    resolver: zodResolver(detailsFormSchema),
    defaultValues: {
      senderName: '',
      email: '',
      address: '',
      receiverName: '',
      invoiceId: '',
      issueDate: '',
      dueDate: '',
      invoicePurpose: '',
    },
  });

  function onSubmit(values: z.infer<typeof detailsFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <h4 className="my-1 font-semibold">Invoice Details</h4>
      <Separator />

      <form
        id="detailsForm"
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col flex-wrap justify-center gap-5 md:flex-row"
      >
        <FormField
          control={form.control}
          name="senderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sender Name</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="Your full name"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This name will appear under &quot;FROM&quot; section.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="E.g: Address 1; Address 2"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Use &quot; <span className="font-extrabold">;</span> &quot; to
                separate address lines.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="Your email"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Put your professional email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="receiverName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Name</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="Organization name"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This name will appear under &quot;TO&quot; section.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="invoiceId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Invoice ID</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="E.g: #3"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This should be the invoice number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="issueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="mm/dd/yyy"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Date you issue invoice (the 1st of every month)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="Date you receive payment"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Put &quot;Upon receipt&quot; if date is unknown
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="invoicePurpose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Invoice Purpose</FormLabel>
              <FormControl>
                <Input
                  className="w-full md:w-[280px] "
                  placeholder="Write the purpose of invoice"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                E.g: dates worked the previous month (x-y)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <div className="mt-3 flex items-center justify-end gap-1.5">
        <Button variant={'outline'} type="button">
          Use template
        </Button>
        <Button className="px-8" form="detailsForm" type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};

export default DetailsForm;
