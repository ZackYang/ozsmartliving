import prisma from "@/lib/prisma";
import redirectTo from "@/lib/redirectTo";
import { ProductType } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.product.update({
    where: {
      id: Number(params.id)
    },
    data: {
      archived: true
    }
  })

  return redirectTo(req, '/adminPanel/products')
}