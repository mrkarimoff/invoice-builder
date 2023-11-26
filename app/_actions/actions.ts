'use server';

import prisma from '@/lib/prisma';
import { InvoiceItems } from '@prisma/client';

type InvoiceItemWithoutId = Omit<InvoiceItems, 'id'>;

// add item
export async function saveInvoiceItem(data: InvoiceItemWithoutId) {
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
      message: 'Items fetched successfully',
    };
  } catch (error) {
    return { data: null, error, message: 'Failed to fetch Items' };
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

// delete item
export async function updateItem(id: number, data: InvoiceItemWithoutId) {
  try {
    const updatedItem = await prisma.invoiceItems.update({
      where: { id },
      data,
    });
    return {
      data: updatedItem,
      error: null,
      message: 'Item updated successfully',
    };
  } catch (error) {
    return { data: null, error, message: 'Failed to update Item' };
  }
}

export type DeleteItem = typeof deleteItem;
