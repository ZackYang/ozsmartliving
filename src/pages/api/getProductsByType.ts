import prisma from '@/lib/prisma'
import ProductSerializer from '@/lib/serializers/ProductSerializer'
import { ProductType } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  } else {
    const products = await prisma.product.findMany({
      where: {
        type: req.query.typeName as ProductType,
        disabled: false,
        archived: false,
      },
      include: {
        variants: {
          where: {
            disabled: false,
            archived: false,
          },
          include: {
            images: {
              select: {
                id: true,
                order: true,
                description: true,
                cover: true,
                raw: true
              },
              orderBy: {
                order: 'asc'
              }
            }
          }
        },
        images: {
          select: {
            id: true,
            order: true,
            description: true,
            cover: true,
            raw: true
          },
          orderBy: {
            order: 'asc'
          }
        }
      },
    })

    if (products) {
      res.status(200).json(new ProductSerializer().serialize(products))
      return
    }
  }
}
