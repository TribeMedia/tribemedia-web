import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSidebarToggle = create<SidebarState>((set) => ({
  isOpen: true,
  setIsOpen: (isOpen) => set({ isOpen }),
}));