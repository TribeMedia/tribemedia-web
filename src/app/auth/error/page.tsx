'use client';

import { Suspense } from 'react';
import Error from '@/components/error';
export default function ErrorPage() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Error />
    </Suspense>
  )
}