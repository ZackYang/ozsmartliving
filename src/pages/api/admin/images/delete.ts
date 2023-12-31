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
    const image = await prisma.image.delete({
      where: {
        id: data.imageId
      }
    })

    res.status(200).json(image)
  }
}
