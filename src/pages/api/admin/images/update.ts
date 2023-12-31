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

    const newAttributes: {
      order?: number,
      description?: string,
      cover?: boolean
    } = {}

    if (data.order) {
      newAttributes['order'] = Number(data.order)
    }

    if (data.description) {
      newAttributes['description'] = data.description
    }

    if (data.cover !== undefined) {
      newAttributes['cover'] = data.cover
    }

    const image = await prisma.image.update({
      where: {
        id: Number(data.imageId)
      },
      data: {
        ...newAttributes
      }
    })

    res.status(200).json(image)
  }
}
