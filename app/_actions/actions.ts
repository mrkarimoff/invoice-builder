'use server';

import prisma from '@/lib/prisma';
import { type InvoiceDetails, type InvoiceItems } from '@prisma/client';

type InvoiceItemWithoutId = Omit<InvoiceItems, 'id'>;
type InvoiceDetailsWithoutId = Omit<InvoiceDetails, 'id'>;

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
    const invoiceItems = await prisma.invoiceItems.findMany({
      orderBy: [
        {
          id: 'asc',
        },
      ],
    });
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

// delete selected items
export async function deleteSelected(items: InvoiceItems[]) {
  const IDs = items.map((item) => item.id);

  try {
    const deletedItems = await prisma.invoiceItems.deleteMany({
      where: {
        id: {
          in: IDs,
        },
      },
    });
    return {
      data: deletedItems,
      error: null,
      message: 'Selected items deleted successfully',
    };
  } catch (error) {
    return { data: null, error, message: 'Failed to delete selected Items' };
  }
}

// update item
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

// add details
export async function saveInvoiceDetails(data: InvoiceDetailsWithoutId) {
  try {
    const newDetails = await prisma.invoiceDetails.create({
      data,
    });
    return {
      data: newDetails,
      error: null,
      message: 'Invoice details saved successfully',
    };
  } catch (error) {
    return { data: null, error, message: 'Failed to save invoice details' };
  }
}

// get details
export async function getInvoiceDetails() {
  try {
    const details = await prisma.invoiceDetails.findFirst();

    if (!details) {
      return {
        data: details,
        error: null,
        message: 'No details found yet, please fill out the form!',
      };
    }

    return {
      data: details,
      error: null,
      message: 'Invoice details fetched successfully',
    };
  } catch (error) {
    return { data: null, error, message: 'Failed to fetch invoice details' };
  }
}

// update details
export async function updateInvoiceDetails(
  id: number,
  data: InvoiceDetailsWithoutId,
) {
  try {
    const updatedDetails = await prisma.invoiceDetails.update({
      where: { id },
      data,
    });

    return {
      data: updatedDetails,
      error: null,
      message: 'Invoice details updated successfully',
    };
  } catch (error) {
    return { data: null, error, message: 'Failed to update invoice details' };
  }
}

export type DeleteItemFunction = typeof deleteItem;
export type DeleteSelectedItemsFunction = typeof deleteSelected;
