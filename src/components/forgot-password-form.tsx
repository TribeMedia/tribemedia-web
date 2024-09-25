'use client';

import { useState } from 'react';
import { userService } from '@/lib/services/userService';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await userService.resetPassword({ email });
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (err) {
      console.error('Failed to send reset email:', err);
      setError('Failed to send reset email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <button type="submit">Send Reset Email</button>
    </form>
  );
}