import { hashString } from '@/lib/hashString'
import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message?: string,
  email?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  } else if (!req.body) {
    res.status(400).json({ message: 'No body provided' })
    return
  } else if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: 'Email and password are required' })
    return
  } else if (req.body.password.length < 8) {
    res.status(400).json({ message: 'Password must be at least 8 characters' })
    return
  } else if (!req.body.email.includes('@')) {
    res.status(400).json({ message: 'Email must be valid' })
    return
  } else if (req.body.email.includes(' ')) {
    res.status(400).json({ message: 'Email cannot contain spaces' })
    return
  } else {
    prisma.user.create({
      data: {
        email: req.body.email,
        password: hashString(req.body.password),
      },
    }).then((user) => {
      res.status(200).json({ email: user.email })
    }).catch((error) => {
      error.code === 'P2002' && error.meta?.target?.includes('email') && res.status(400).json({ message: 'Email already exists' })
    })

  }
}