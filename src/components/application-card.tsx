import React from 'react'
import Image from 'next/image'
import { Application } from '@/types/applications'

interface ApplicationCardProps {
  application: Application
  onClick: (app: Application) => void
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ application, onClick }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick(application)}
    >
      <Image
        src={application.cover_url ?? '/default-cover.jpg'}
        alt={`${application.name} cover`}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Image
            src={application.icon_url ?? '/default-icon.png'}
            alt={`${application.name} icon`}
            width={24}
            height={24}
            className="mr-2"
          />
          <h2 className="text-xl font-semibold dark:text-white">{application.name}</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{application.description}</p>
      </div>
    </div>
  )
}