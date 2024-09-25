import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/zitadel-auth';
import { userService } from '@/lib/services/userService';

// Define the AuthError class
class AuthError extends Error {
  constructor(message: string, public statusCode: number = 401) {
    super(message);
    this.name = 'AuthError';
  }
}

export async function POST(request: NextRequest) {
  try {
    const zitadelToken = await getAccessToken();

    if (!zitadelToken) {
      throw new AuthError('Failed to obtain access token', 401);
    }

    const { action, ...data } = await request.json();

    const zitadelApiUrl = process.env.ZITADEL_API_URL;

    if (!zitadelApiUrl) {
      throw new AuthError('ZITADEL_API_URL is not defined', 500);
    }

    let result;

    switch (action) {
      case 'getCurrentUser':
        result = await userService.getCurrentUser();
        break;
      case 'signIn':
        result = await userService.signIn(data);
        break;
      case 'signUp':
        result = await userService.signUp(data);
        break;
      case 'signOut':
        await userService.signOut();
        result = { message: 'Signed out successfully' };
        break;
      case 'resetPassword':
        await userService.resetPassword(data);
        result = { message: 'Password reset email sent' };
        break;
      case 'completeResetPassword':
        await userService.completeResetPassword(data);
        result = { message: 'Password reset successful' };
        break;
      default:
        throw new AuthError(`Unknown action: ${action}`, 400);
    }

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof AuthError) {
      return NextResponse.json({ error: error.message }, { status: error.statusCode });
    }
    // Handle other types of errors
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}