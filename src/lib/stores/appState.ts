import { create } from 'zustand'

export interface AppState {
  useSidebar: boolean
  setUseSidebar: (useSidebar: boolean) => void
}

export const useAppState = create<AppState>((set) => ({
  useSidebar: true, // Default is now true
  setUseSidebar: (useSidebar) => set({ useSidebar }),
}))