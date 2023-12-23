import { getIronSession } from 'iron-session'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SessionData, sessionOptions } from './lib/session'
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)

  if (request.nextUrl.pathname.startsWith('/adminPanel') && !session.isLoggedIn) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'

    return NextResponse.redirect(url)
  }

  return response
}
