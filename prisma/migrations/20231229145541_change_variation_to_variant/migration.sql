/*
  Warnings:

  - A unique constraint covering the columns `[productId,variantId,cover]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "cover" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Image_productId_variantId_cover_key" ON "Image"("productId", "variantId", "cover");
