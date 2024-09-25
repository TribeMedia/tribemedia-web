import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

// This should be your Zitadel public key
const ZITADEL_PUBLIC_KEY = process.env.ZITADEL_PUBLIC_KEY

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 })
  }

  const token = authHeader.split(' ')[1]

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(ZITADEL_PUBLIC_KEY),
      {
        issuer: `${process.env.ZITADEL_ISSUER}`, // Replace with your Zitadel instance
        audience: `${process.env.ZITADEL_AUDIENCE}`, // Replace with your audience
      }
    )

    // Assuming the payload contains user information
    const user = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      roles: payload.roles || [],
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Token verification failed:', error)
    return NextResponse.json({ error: 'Not Found' }, { status: 404 })
  }
}