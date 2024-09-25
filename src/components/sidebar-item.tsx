'use client';

// components/sidebar-item.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps, Settings, CircleHelp, FileText, Users, LayoutDashboard } from 'lucide-react';


interface SidebarItemProps {
  name: string;
  href: string;
  icon: string;
  collapsed: boolean;
}

const iconMap: { [key: string]: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>> } = {
  LayoutDashboard,
  Settings,
  CircleHelp,
  FileText,
  Users,
};

export default function SidebarItem({ name, href, icon, collapsed }: SidebarItemProps) {
  const pathname = usePathname();
  const Icon = iconMap[icon];

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center space-x-2 rounded-lg px-2 py-2 hover:bg-accent',
        pathname === href && 'bg-accent text-accent-foreground',
        collapsed && 'justify-center'
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {!collapsed && <span>{name}</span>}
    </Link>
  );
}