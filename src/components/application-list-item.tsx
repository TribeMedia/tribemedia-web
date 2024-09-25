import React, { useState } from 'react'
import Image from 'next/image'
import { Application } from '@/types/applications'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ApplicationListItemProps {
  application: Application
  onClick: (app: Application) => void
}

export const ApplicationListItem: React.FC<ApplicationListItemProps> = ({ application, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4">
      <div
        className="flex items-center p-4 cursor-pointer"
        onClick={() => onClick(application)}
      >
        <Image
          src={application.icon_url ?? '/default-icon.png'}
          alt={`${application.name} icon`}
          width={40}
          height={40}
          className="mr-4"
        />
        <div className="flex-grow">
          <h2 className="text-xl font-semibold dark:text-white">{application.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 truncate">{application.description}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
          className="ml-4 p-2"
        >
          {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </button>
      </div>
      {isExpanded && (
        <div className="px-4 pb-4">
          <p className="text-gray-600 dark:text-gray-300">{application.description}</p>
        </div>
      )}
    </div>
  )
}