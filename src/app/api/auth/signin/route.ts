import { NextResponse } from 'next/server';
import { userService } from '@/lib/services/userService';
import { SignInSchema } from '@/lib/types/user';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = SignInSchema.parse(body);
    const user = await userService.signIn(validatedData);
    return NextResponse.json(user);
  } catch (error) {
    console.error('Sign in failed:', error);
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
  }
}