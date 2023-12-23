import prisma from '@/lib/prisma'
import { SessionData, sessionOptions } from '@/lib/session'
import { getIronSession } from 'iron-session'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getIronSession<SessionData>(req, res, sessionOptions)

  if (!session.email) {
    res.status(400).json({ message: 'Cannot find user' })
    return
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session.email,
    },
  })

  if (!user) {
    res.status(400).json({ message: 'Cannot find user' })
    return
  }

  const userResults = {
    email: user.email,
    isLoggedIn: true,
    id: user.id
  }

  res.status(200).json(userResults)
}
