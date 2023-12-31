import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  } else if (!req.body) {
    res.status(400).json({ message: 'No body provided' })
    return
  }
  else {

    const data = JSON.parse(req.body)

    const variant = await prisma.variant.create({
      data: {
        name: data.name,
        code: data.code,
        careInstructions: data.careInstructions,
        unitPrice: parseFloat(data.unitPrice),
        composition: data.composition,
        shadingRate: parseInt(data.shadingRate),
        energyEfficiency: parseInt(data.energyEfficiency),
        daytimePrivacy: parseInt(data.daytimePrivacy),
        nightimePrivacy: parseInt(data.nightimePrivacy),
        product: { connect: { id: data.productId } }, // Replace 'data.productId' with the actual product ID
      }
    })

    res.status(200).json(variant)
  }
}
