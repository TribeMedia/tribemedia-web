import { NextResponse } from 'next/server';
import { userService } from '@/lib/services/userService';
import { CompleteResetPasswordSchema } from '@/lib/types/user';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = CompleteResetPasswordSchema.parse(body);
    await userService.completeResetPassword(validatedData);
    return NextResponse.json({ message: 'Password reset successful' });
  } catch (error) {
    return NextResponse.json({ error: 'Password reset failed' }, { status: 400 });
  }
}