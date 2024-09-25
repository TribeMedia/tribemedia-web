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
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
}