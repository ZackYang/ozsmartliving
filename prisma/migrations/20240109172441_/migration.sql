/*
  Warnings:

  - You are about to drop the column `unitPrice` on the `Variant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "maxHeight" INTEGER NOT NULL DEFAULT 3000,
ADD COLUMN     "maxWidth" INTEGER NOT NULL DEFAULT 20000;

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "unitPrice";
