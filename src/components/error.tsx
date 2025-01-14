'use client';

import { useSearchParams } from "next/navigation"

export default function Error() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  return (
    <div>
      <h1>Error</h1>
      <p>{error}</p>
    </div>
  )
}