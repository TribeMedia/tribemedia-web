'use client'

import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import { usePathname } from 'next/navigation'
import { useAuth } from './auth-provider'
import { Spinner } from './ui/spinner'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname()
  const { user, loading } = useAuth()
  const isPublicRoute = ['/', '/auth/signin', '/auth/signup', '/auth/forgot-password'].includes(pathname)

  if (loading) {
    return <Spinner />
  }

  if (isPublicRoute) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    )
  }

  if (!user && !isPublicRoute) {
    // Redirect to signin page if not authenticated and not on a public route
    window.location.href = '/auth/signin'
    return null
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  )
}