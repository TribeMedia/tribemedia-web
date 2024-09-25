export async function getAccessToken(): Promise<string> {
  const tokenEndpoint = `${process.env.ZITADEL_ISSUER}/oauth/v2/token`;
  const clientId = process.env.ZITADEL_CLIENT_ID!;
  const clientSecret = process.env.ZITADEL_CLIENT_SECRET!;

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'openid profile email',
    }).toString(),
  });

  if (!response.ok) {
    throw new Error('Failed to obtain access token');
  }

  const data = await response.json();
  return data.access_token;
}

export async function verifyPassword(email: string, password: string): Promise<boolean> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(`${process.env.ZITADEL_API_URL}/auth/v1/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return !!data.token;
  } catch (error) {
    console.error('Error verifying password:', error);
    return false;
  }
}