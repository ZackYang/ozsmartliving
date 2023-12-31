/*
  Warnings:

  - You are about to drop the column `imageableId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `imageableType` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `care_instructions` on the `Variant` table. All the data in the column will be lost.
  - Added the required column `careInstructions` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "product_imageable_id";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "variant_imageable_id";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "imageableId",
DROP COLUMN "imageableType",
ADD COLUMN     "productId" INTEGER,
ADD COLUMN     "variantId" INTEGER;

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "care_instructions",
ADD COLUMN     "careInstructions" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ImageType";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
