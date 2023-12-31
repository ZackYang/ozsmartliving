/*
  Warnings:

  - You are about to drop the column `Permalink` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Permalink",
ADD COLUMN     "permalink" TEXT,
ALTER COLUMN "updatedAt" DROP NOT NULL;
