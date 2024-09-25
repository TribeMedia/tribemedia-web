import { NextResponse } from 'next/server';
import { userService } from '@/lib/services/userService';

export async function GET() {
  try {
    const user = await userService.getCurrentUser();
    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json(null, { status: 401 });
    }
  } catch (error) {
    console.error('Authentication check failed:', error);
    return NextResponse.json({ error: 'Authentication check failed' }, { status: 500 });
  }
}