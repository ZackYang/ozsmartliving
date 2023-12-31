"use client"

import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
import ProductForm from '../_form';
// Permalink
// type
// name
// code
// supplierName
// unitPrice
// createdAt
// updatedAt
// disabled
// archived
// careInstructions
// variations
// images
export default function Page() {
  return (
    <form className="flex max-w-md flex-col gap-4" method='POST' action='/adminPanel/products/create'>
      <ProductForm />
    </form>
  );
}
