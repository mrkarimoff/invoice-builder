-- CreateTable
CREATE TABLE "InvoiceDetails" (
    "id" SERIAL NOT NULL,
    "senderName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "invoicePurpose" TEXT NOT NULL,

    CONSTRAINT "InvoiceDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceItems" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hours" DOUBLE PRECISION NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "InvoiceItems_pkey" PRIMARY KEY ("id")
);
