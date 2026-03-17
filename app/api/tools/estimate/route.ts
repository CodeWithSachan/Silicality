import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { description } = await req.json()

  if (!description) {
    return NextResponse.json({ error: 'No description provided' }, { status: 400 })
  }

  // TODO: MVP cost estimator logic
  return NextResponse.json({ message: 'Coming soon' })
}
