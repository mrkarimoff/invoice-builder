-- CreateTable
CREATE TABLE "InvoiceDetails" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "senderName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "invoicePurpose" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "InvoiceItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL
);
