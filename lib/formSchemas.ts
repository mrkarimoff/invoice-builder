import * as z from 'zod';

export const detailsFormSchema = z.object({
  senderName: z.string().min(2, {
    message: 'Sender name must be at least 2 characters.',
  }),
  address: z.string().min(10, {
    message: 'Address must be at least 6 characters.',
  }),
  email: z.string().email({
    message: 'Email is invalid.',
  }),
  receiverName: z.string().min(2, {
    message: 'Receiver name must be at least 2 characters.',
  }),
  invoiceId: z.string().min(2, {
    message: 'Invoice ID must be at least 2 characters.',
  }),
  issueDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/, {
      message: 'Invalid date format',
    }),
  dueDate: z.string().min(5, {
    message: 'Due date must be at least 5 characters.',
  }),
  invoicePurpose: z.string().min(15, {
    message: 'The invoice purpose must be at least 15 characters.',
  }),
});
