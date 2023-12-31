'use server';

import prisma from "@/lib/prisma";
import { JsonArray } from "@prisma/client/runtime/library";
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import _, { includes } from 'lodash';
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { FaCheck, FaTimes } from "react-icons/fa";

export default async function Page() {
  const products = await prisma.product.findMany(
    {
      include: {
        images: {
          orderBy: {
            order: 'asc'
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    }
  )
  return (
    <div>
      <h1 className="text-2xl">Products</h1>
      <p>This is the admin panel products page.</p>
      <div className="flex justify-end">
        <Button href="/adminPanel/products/new" className="btn btn-primary ">Create new product</Button>
      </div>

      <Table>
        <TableHead>
          <TableHeadCell className="text-bold ">ID</TableHeadCell>
          <TableHeadCell>Product name</TableHeadCell>
          <TableHeadCell>Code</TableHeadCell>
          <TableHeadCell>Thumbnail</TableHeadCell>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Unit Price</TableHeadCell>
          <TableHeadCell>Active?</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            products.map((product) => {
              const images = product.images.map((image) => {
                return (image.raw)
              })

              const thumbnailUrl = images[0] && getCldImageUrl({
                width: 50,
                height: 50,
                crop: 'lpad',
                src: (images[0] as any)?.public_id
              })

              return (
                <TableRow key={product.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="text-bold">
                    {product.id}
                  </TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <a href={`/adminPanel/products/${product.id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      {product.name}
                    </a>
                  </TableCell>
                  <TableCell>
                    {product.code}
                  </TableCell>
                  <TableCell>
                    {
                      thumbnailUrl && (
                        <Image className='max-w-xs' src={thumbnailUrl} width={50} height={50} alt={product.name} />
                      )
                    }
                  </TableCell>
                  <TableCell>{_.kebabCase(product.type)}</TableCell>
                  <TableCell>${product.unitPrice}</TableCell>
                  <TableCell>{!product.disabled ? (<FaCheck className="text-teal-600" />) : (<FaTimes className="text-red-600" />)}</TableCell>
                  <TableCell>
                    <a href={`/adminPanel/products/${product.id}/edit`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>

    </div>
  )
}