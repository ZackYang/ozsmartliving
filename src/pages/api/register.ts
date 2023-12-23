import { hashString } from '@/lib/hashString'
import prisma from '@/lib/prisma'
import { SessionData, sessionOptions } from '@/lib/session'
import { getIronSession } from 'iron-session'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) {
    res.status(400).json({ message: 'Not a valid email address' })
    return
  } else {
    prisma.user.create({
      data: {
        email: req.body.email,
        password: hashString(req.body.password),
      },
    }).then(async (user) => {
      const session = await getIronSession<SessionData>(req, res, sessionOptions)
      session.email = user.email
      session.isLoggedIn = true
      await session.save()
      res.status(200).json({ email: user.email })
    }).catch((error) => {
      error.code === 'P2002' && error.meta?.target?.includes('email') && res.status(400).json({ message: 'Email already exists' })
    })
  }
}
