import { NextRequest, NextResponse } from "next/server";

export default function redirectTo(req: NextRequest, path: string) {
  const url = req.nextUrl.clone()
  url.pathname = path
  return NextResponse.redirect(url)
}