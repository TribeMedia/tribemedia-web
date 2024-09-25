import { NextResponse } from 'next/server';
import { userService } from '@/lib/services/userService';
import { ResetPasswordSchema } from '@/lib/types/user';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = ResetPasswordSchema.parse(body);
    await userService.resetPassword(validatedData);
    return NextResponse.json({ message: 'Password reset email sent' });
  } catch (error) {
    return NextResponse.json({ error: 'Password reset request failed' }, { status: 400 });
  }
}