export interface InvoiceDetails {
  senderName: string;
  address: string[];
  email: string;
  receiverName: string;
  invoiceId: string;
  issueDate: string;
  dueDate: string;
  invoicePurpose: string;
}

export interface InvoiceItem {
  date: string;
  description: string;
  hours: number;
  rate: number;
}
