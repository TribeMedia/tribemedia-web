'use client';

import { useRouter } from 'next/router';
import PasswordResetForm from '@/components/password-reset-form';

export default function ResetPasswordTokenPage() {
  const router = useRouter();
  const { token } = router.query;

  if (typeof token !== 'string') {
    return <div>Invalid token</div>;
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <PasswordResetForm token={token} />
    </div>
  );
}