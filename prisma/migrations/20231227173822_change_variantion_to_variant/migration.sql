/*
  Warnings:

  - You are about to drop the column `variationId` on the `LineItem` table. All the data in the column will be lost.
  - Added the required column `variantId` to the `LineItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LineItem" DROP CONSTRAINT "LineItem_variationId_fkey";

-- AlterTable
ALTER TABLE "LineItem" DROP COLUMN "variationId",
ADD COLUMN     "variantId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "LineItem" ADD CONSTRAINT "LineItem_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
