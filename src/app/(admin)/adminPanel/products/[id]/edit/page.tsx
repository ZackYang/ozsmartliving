import { Button } from 'flowbite-react';
import ProductForm from '../../_form';
import prisma from '@/lib/prisma';
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';

export default async function Page({
  params
}: {
  params: {
    id: string
  }
}) {
  const product = await prisma.product.findFirst(
    {
      where: { id: Number(params.id) },
      include: {
        images: true
      }
    }
  )

  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb " className='m-4'>
        <BreadcrumbItem href="/adminPanel">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="/adminPanel/products">Products</BreadcrumbItem>
        <BreadcrumbItem href={`/adminPanel/products/${product?.id}`}>{product?.name}</BreadcrumbItem>
        <BreadcrumbItem>Edit</BreadcrumbItem>
      </Breadcrumb>
      <form className="flex max-w-md flex-col gap-4" method='POST' action={`/adminPanel/products/${product?.id}/update`}>
        <ProductForm product={product} />
      </form>
    </>
  );
}
