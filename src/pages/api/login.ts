import { hashString } from '@/lib/hashString'
import prisma from '@/lib/prisma'
import { SessionData, sessionOptions } from '@/lib/session'
import { compare } from 'bcrypt-ts'
import { getIronSession } from 'iron-session'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  } else {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email
      }
    })

    if (user && await compare(req.body.password, user.password || '')) {
      const session = await getIronSession<SessionData>(req, res, sessionOptions)
      session.email = user.email
      session.isLoggedIn = true
      session.id = user.id
      await session.save()
      res.status(200).json({ email: user.email })
      return
    }

    res.status(400).json({ message: 'Cannot find user' })
  }
}
