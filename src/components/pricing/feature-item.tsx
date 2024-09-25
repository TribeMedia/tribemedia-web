import React from 'react'
import { Check } from 'lucide-react'
import { Feature } from '@/types/pricing'

interface FeatureItemProps {
  feature: Feature
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <Check className="h-5 w-5 text-green-500" />
      </div>
      <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">{feature.name}</p>
    </li>
  )
}