import prisma from "@/lib/prisma";
import redirectTo from "@/lib/redirectTo";
import { ProductType } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.formData()

  await prisma.product.update({
    where: {
      id: Number(params.id)
    },
    data: {
      name: data.get('name')?.toString() || '',
      type: data.get('type')?.toString() as ProductType,
      code: data.get('code')?.toString() || '',
      supplierName: data.get('supplierName')?.toString() || '',
      unitPrice: Number(data.get('unitPrice')?.toString() || ''),
      careInstructions: data.get('careInstructions')?.toString() || '',
      disabled: data.get('disabled') === 'on' ? true : false,
      archived: data.get('archived') === 'on' ? true : false,
    }
  })

  return redirectTo(req, '/adminPanel/products')
}