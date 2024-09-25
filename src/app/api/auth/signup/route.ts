import { NextResponse } from 'next/server';
import { userService } from '@/lib/services/userService';
import { SignUpSchema } from '@/lib/types/user';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = SignUpSchema.parse(body);
    const user = await userService.signUp(validatedData);
    return NextResponse.json(user);
  } catch (error) {
    console.error('Sign up failed:', error);
    return NextResponse.json({ error: 'Sign up failed' }, { status: 400 });
  }
}