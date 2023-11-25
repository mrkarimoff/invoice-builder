/*
  Warnings:

  - You are about to alter the column `hours` on the `InvoiceItems` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InvoiceItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hours" REAL NOT NULL,
    "rate" INTEGER NOT NULL
);
INSERT INTO "new_InvoiceItems" ("date", "description", "hours", "id", "rate") SELECT "date", "description", "hours", "id", "rate" FROM "InvoiceItems";
DROP TABLE "InvoiceItems";
ALTER TABLE "new_InvoiceItems" RENAME TO "InvoiceItems";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
