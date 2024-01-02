import ImageManager, { ImageData } from "@/app/(admin)/components/ImageManager"
import VariantList from "@/app/(admin)/components/VariantList"
import prisma from "@/lib/prisma"
import ProductSerializer from "@/lib/serializers/ProductSerializer"
import { Button, ButtonGroup, Table, TableBody, TableCell, TableRow } from "flowbite-react"

export default async function Page({
  params
}: {
  params: {
    id: string
  }
}) {
  const productData = (await prisma.product.findFirst(
    {
      where: { id: Number(params.id) },
      include: {
        images: true,
        variants: {
          include: {
            images: true
          }
        }
      }
    }
  ))

  const product = new ProductSerializer().serialize(productData)

  if (Array.isArray(product)) return null

  if (!product) {
    return null
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Product: {product?.name}</h1>
      <div className="flex justify-end">
        <ButtonGroup>
          <Button href={`/adminPanel/products/${product?.id}/edit`} className="btn btn-primary ">Edit product</Button>
          <Button href={`/adminPanel/products/${product?.id}/archive`} color="warning">Archive product</Button>
          <Button href={`/adminPanel/products/${product?.id}/variants`} className="btn btn-primary ">Manage variants</Button>
        </ButtonGroup>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <h2 className="text-xl">Product Details</h2>
            <Table>
              <TableBody className="divide-y">
                <TableRow className="bg-white">
                  <TableCell className="font-bold">Name</TableCell>
                  <TableCell>
                    {product?.name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">CODE</TableCell>
                  <TableCell>
                    {product?.code}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Suppier</TableCell>
                  <TableCell>
                    {product?.supplierName}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Type</TableCell>
                  <TableCell>
                    {product?.type}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Permalink</TableCell>
                  <TableCell>
                    {product?.permalink}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Disabled</TableCell>
                  <TableCell>
                    {product?.disabled}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Archived</TableCell>
                  <TableCell>
                    {product?.archived}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Care instructions</TableCell>
                  <TableCell>
                    {product?.careInstructions}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Price</TableCell>
                  <TableCell>
                    {product?.unitPrice}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Desc</TableCell>
                  <TableCell>
                    {product?.description}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Description</TableCell>
                  <TableCell>
                    {product?.description}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h2 className="text-xl">Product Images</h2>
            <ImageManager images={product ? product.images as ImageData[] : []} productId={product?.id} />
          </div>
          {
            product.variants && Array.isArray(product.variants) && (
              <div className="basis-1/2 flex flex-row">
                <VariantList variants={product.variants} productId={product.id} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}