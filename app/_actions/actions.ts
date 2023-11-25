'use server';

import prisma from '@/lib/prisma';
import { InvoiceItem } from '@/types';

export async function saveInvoiceItem(data: InvoiceItem) {
  try {
    const newItem = await prisma.invoiceItems.create({
      data,
    });
    return { data: newItem, error: null, message: 'Item saved successfully' };
  } catch (error) {
    return { data: null, error, message: 'Failed to save Item' };
  }
}

export async function getAllItems() {
  try {
    const invoiceItems = await prisma.invoiceItems.findMany();
    return {
      data: invoiceItems,
      error: null,
      message: 'Items retrieved successfully',
    };
  } catch (error) {
    return { data: null, error, message: 'Failed to get Items' };
  }
}
