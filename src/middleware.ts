import { NextResponse } from 'next/server';
/*import type { NextRequest } from 'next/server';
import { SignJWT } from 'jose';
import { createPrivateKey } from 'crypto';

// Function to create a signed JWT
async function createSignedJWT() {
  const privateKey = createPrivateKey(process.env.ZITADEL_PRIVATE_KEY!);
  const now = Math.floor(Date.now() / 1000);
  
  return new SignJWT({
    iss: process.env.ZITADEL_CLIENT_ID,
    sub: process.env.ZITADEL_CLIENT_ID,
    aud: process.env.ZITADEL_API_URL,
  })
    .setProtectedHeader({ alg: 'RS256', kid: process.env.ZITADEL_KEY_ID })
    .setIssuedAt(now)
    .setExpirationTime(now + 300) // 5 minutes from now
    .sign(privateKey);
}*/

export async function middleware(/*request: NextRequest*/) {
    return NextResponse.next();

  // Extract the bearer token from the Authorization header
  /*const authHeader = request.headers.get('Authorization');
  const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (!token) {
    return NextResponse.json({ error: 'Missing or invalid authorization token' }, { status: 401 });
  }

  try {
    // Create a signed JWT for client authentication
    const clientAssertion = await createSignedJWT();

    // Validate the token against Zitadel's REST API
    const response = await fetch(`${process.env.ZITADEL_API_URL}/oauth/v2/introspect`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        token: token,
        token_type_hint: 'access_token',
        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        client_assertion: clientAssertion,
      })
    });

    if (!response.ok) {
      throw new Error('Failed to validate token');
    }

    const data = await response.json();

    if (!data.active) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Token is valid, allow the request to proceed
    return NextResponse.next();
  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
  }*/
}

/*export const config = {
  matcher: ['/dashboard', '/chat', '/my-assistant']
};*/