import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-background border-border">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="bg-primary rounded-full p-2">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-lg font-heading">{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default FeatureCard