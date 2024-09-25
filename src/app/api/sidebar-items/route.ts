import { SidebarItemData } from '@/types/sidebar';
import { NextResponse } from 'next/server';

const allItems: SidebarItemData[] = [
  { name: 'Dashboard', href: '/dashboard', icon: 'LayoutDashboard' },
  { name: 'Documents', href: '/documents', icon: 'FileText' },
  { name: 'Team', href: '/team', icon: 'Users', requiredRole: 'admin' },
  { name: 'Settings', href: '/settings', icon: 'Settings' },
  { name: 'Help', href: '/help', icon: 'HelpCircle' },
];

export async function GET() {
  return NextResponse.json(allItems);
}