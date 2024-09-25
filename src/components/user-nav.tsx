'use client';

import { useAuth } from '@/lib/stores/authStore';
import Link from 'next/link';

export function UserNav() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <nav>
        <Link href="/auth/signin">Sign In</Link>
        <Link href="/auth/signup">Sign Up</Link>
      </nav>
    );
  }

  return (
    <nav>
      <span>Welcome, {user?.name || user?.email}</span>
      <Link href="/dashboard">Dashboard</Link>
      <button onClick={logout}>Sign Out</button>
    </nav>
  );
}