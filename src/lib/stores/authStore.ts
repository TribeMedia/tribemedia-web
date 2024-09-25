import { create } from 'zustand'
import { User } from '@/types/user'
import { userService } from '@/lib/services/userService'

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated'

interface AuthState {
  user: User | null
  status: AuthStatus
  setUser: (user: User | null) => void
  setStatus: (status: AuthStatus) => void
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  fetchUser: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: 'loading',
  setUser: (user: User | null) => set({ user }),
  setStatus: (status: AuthStatus) => set({ status }),
  login: async (email: string, password: string) => {
    try {
      set({ status: 'loading' })
      const user = await userService.signIn({ email, password })
      set({ user, status: 'authenticated' })
    } catch (error) {
      set({ user: null, status: 'unauthenticated' })
      throw error
    }
  },
  logout: async () => {
    try {
      set({ status: 'loading' })
      await userService.signOut()
      set({ user: null, status: 'unauthenticated' })
    } catch (error) {
      console.error('Logout failed:', error)
      set({ status: 'unauthenticated' })
    }
  },
  fetchUser: async () => {
    try {
      set({ status: 'loading' })
      const user = await userService.getCurrentUser()
      set({ user, status: user ? 'authenticated' : 'unauthenticated' })
    } catch (error) {
      console.error('Fetch user failed:', error)
      set({ user: null, status: 'unauthenticated' })
    }
  },
}))

export const useAuth = () => useAuthStore()