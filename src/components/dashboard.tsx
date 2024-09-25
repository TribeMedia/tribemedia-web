'use client'

import React, { useEffect, useState } from 'react'
import { Application } from '@/types/applications'
import { useRouter } from 'next/navigation'
import { ApplicationCard } from './application-card'
import { ApplicationListItem } from './application-list-item'
import { Button } from '@/components/ui/button'
import { Grid, List } from 'lucide-react'
import { Spinner } from './ui/spinner'

export default function Dashboard() {
  const [applications, setApplications] = useState<Application[] | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const router = useRouter()

  useEffect(() => {
    fetch('/api/applications')
      .then(response => response.json())
      .then(data => setApplications(data))
      .catch(error => console.error('Error fetching applications:', error))
  }, [])

  const handleAppClick = (app: Application) => {
    if (app.data.applicationType === 'application') {
      router.push(app.data.url)
    } else if (app.data.applicationType === 'web') {
      window.open(app.data.url, '_blank')
    }
  }

  if (!applications) return <Spinner />

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>
        <div className="flex space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map(app => (
            <ApplicationCard key={app.id} application={app} onClick={handleAppClick} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map(app => (
            <ApplicationListItem key={app.id} application={app} onClick={handleAppClick} />
          ))}
        </div>
      )}
    </div>
  )
}