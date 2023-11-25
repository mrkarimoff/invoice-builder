'use server';

import prisma from '@/lib/prisma';
import { InvoiceItem } from '@/types';

// add item
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

// get all items
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

// delete item
export async function deleteItem(id: number) {
  try {
    const deletedItem = await prisma.invoiceItems.delete({
      where: { id },
    });
    return {
      data: deletedItem,
      error: null,
      message: 'Item deleted successfully',
    };
  } catch (error) {
    return { data: null, error, message: 'Failed to delete Item' };
  }
}

export type DeleteItem = typeof deleteItem;
