/*
  Warnings:

  - You are about to drop the column `productId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `variationId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `Variation` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ImageType" AS ENUM ('product', 'variation');

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_variationId_fkey";

-- DropForeignKey
ALTER TABLE "LineItem" DROP CONSTRAINT "LineItem_variationId_fkey";

-- DropForeignKey
ALTER TABLE "Variation" DROP CONSTRAINT "Variation_productId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "productId",
DROP COLUMN "variationId",
ADD COLUMN     "imageableId" INTEGER,
ADD COLUMN     "imageableType" "ImageType";

-- DropTable
DROP TABLE "Variation";

-- CreateTable
CREATE TABLE "Variant" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "care_instructions" TEXT NOT NULL,
    "composition" TEXT NOT NULL,
    "shadingRate" INTEGER NOT NULL,
    "energyEfficiency" INTEGER NOT NULL,
    "daytimePrivacy" INTEGER NOT NULL,
    "nightimePrivacy" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Variant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "product_imageable_id" FOREIGN KEY ("imageableId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "variant_imageable_id" FOREIGN KEY ("imageableId") REFERENCES "Variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItem" ADD CONSTRAINT "LineItem_variationId_fkey" FOREIGN KEY ("variationId") REFERENCES "Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
