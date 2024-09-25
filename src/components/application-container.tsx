'use client';

import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Toaster } from "sonner";
import { useStore } from "@/components/hooks/use-store";
import { useSidebarToggle } from "@/components/hooks/use-sidebar-toggle";

interface ApplicationContainerProps {
  rightPageComponent?: React.ReactNode;
}

export default function ApplicationContainer({ 
  rightPageComponent
}: ApplicationContainerProps) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className={`flex flex-col flex-1 transition-all duration-300 ${sidebar.isOpen ? 'ml-72' : 'ml-[90px]'}`}>
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          {rightPageComponent}
        </main>
      </div>
      <Toaster />
    </div>
  );
}