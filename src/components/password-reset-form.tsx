'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '@/lib/services/userService';

export default function PasswordResetForm({ token }: { token: string }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await userService.completeResetPassword({ token, password });
      router.push('/auth/signin');
    } catch (err) {
      setError('Password reset failed. Please try again: ' + err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="New Password"
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">Reset Password</button>
    </form>
  );
}