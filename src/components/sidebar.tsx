'use client'

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useStore } from "@/components/hooks/use-store"
import { Button } from "@/components/ui/button"
import { useSidebarToggle } from "@/components/hooks/use-sidebar-toggle"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, ChevronRight, LayoutDashboard, FileText, Users, Settings, HelpCircle, Grid } from "lucide-react"
import { SidebarItemData } from '@/types/sidebar'
import { Application } from '@/types/applications'
import { useAuth } from '@/lib/stores/authStore'
import { Spinner } from './ui/spinner'

const iconMap = {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  HelpCircle,
}

export default function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state)
  const pathname = usePathname()
  const [sidebarItems, setSidebarItems] = useState<SidebarItemData[] | null>(null)
  const [applications, setApplications] = useState<Application[] | null>(null)
  const { user } = useAuth()

  useEffect(() => {
    fetch('/api/sidebar-items')
      .then(response => response.json())
      .then(data => setSidebarItems(data))
      .catch(error => console.error('Error fetching sidebar items:', error))

    fetch('/api/applications')
      .then(response => response.json())
      .then(data => setApplications(data))
      .catch(error => console.error('Error fetching applications:', error))
  }, [])
  
  if (!sidebar) return null
  if (!sidebarItems || !applications) return <Spinner />

  const isDashboard = pathname === '/dashboard'

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen transition-[width] ease-in-out duration-300",
        sidebar.isOpen ? "w-72" : "w-[90px]"
      )}
    >
      <div className="relative h-full flex flex-col overflow-y-auto shadow-md dark:shadow-zinc-800">
        <div className="p-4 mb-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="https://ipfs.prometheus-platform.io/ipfs/QmZduSvAfaCHjdj9xfDd4dRPsyZURLV1GSiBxa1fHiXJFr"
              alt="Prometheus AI Logo"
              width={32}
              height={32}
            />
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                sidebar.isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0 hidden"
              )}
            >
              Prometheus AI
            </h1>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-4"
          onClick={() => sidebar.setIsOpen(!sidebar.isOpen)}
        >
          {sidebar.isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
        <ScrollArea className="flex-grow px-3 py-4">
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              if (item.requiredRole && (!user || !user.roles?.includes(item.requiredRole))) {
                return null
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800",
                    pathname === item.href ? "bg-gray-100 dark:bg-gray-800" : "",
                    !sidebar.isOpen && "justify-center"
                  )}
                >
                  {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
                  {sidebar.isOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              )
            })}
            {!isDashboard && (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="applications">
                  <AccordionTrigger className="flex items-center rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800">
                    <Grid className="h-5 w-5 flex-shrink-0" />
                    {sidebar.isOpen && <span className="ml-3">Applications</span>}
                  </AccordionTrigger>
                  <AccordionContent>
                    {applications.map((app) => (
                      <Link
                        key={app.id}
                        href={app.data.url}
                        className={cn(
                          "flex items-center rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800",
                          pathname === app.data.url ? "bg-gray-100 dark:bg-gray-800" : "",
                          !sidebar.isOpen && "justify-center"
                        )}
                      >
                        {sidebar.isOpen && (
                          <>
                            <Image
                              src={app.icon_url ?? '/default-icon.png'}
                              alt={`${app.name} icon`}
                              width={20}
                              height={20}
                              className="mr-2"
                            />
                            <span>{app.name}</span>
                          </>
                        )}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  )
}