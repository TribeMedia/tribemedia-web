import { User, SignInCredentials, SignUpCredentials, ResetPasswordCredentials, CompleteResetPasswordCredentials } from '@/types/user'
import { getAccessToken, verifyPassword } from '@/lib/zitadel-auth'

class UserService {
  private apiUrl = '/api/auth'

  async signIn(credentials: SignInCredentials): Promise<User> {
    const isValid = await verifyPassword(credentials.email, credentials.password)
    if (!isValid) {
      throw new Error('Invalid credentials')
    }

    const response = await fetch(`${this.apiUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error('Sign in failed')
    }

    return response.json()
  }

  async signUp(credentials: SignUpCredentials): Promise<User> {
    const accessToken = await getAccessToken()
    const response = await fetch(`${this.apiUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error('Sign up failed')
    }

    return response.json()
  }

  async signOut(): Promise<void> {
    const response = await fetch(`${this.apiUrl}/signout`, { method: 'POST' })

    if (!response.ok) {
      throw new Error('Sign out failed')
    }
  }

  async getCurrentUser(): Promise<User | null> {
    const response = await fetch(`${this.apiUrl}/check`)

    if (response.status === 401) {
      return null
    }

    if (!response.ok) {
      throw new Error('Failed to fetch current user')
    }

    return response.json()
  }

  async resetPassword(credentials: ResetPasswordCredentials): Promise<void> {
    const accessToken = await getAccessToken()
    const response = await fetch(`${this.apiUrl}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error('Reset password request failed')
    }
  }

  async completeResetPassword(credentials: CompleteResetPasswordCredentials): Promise<void> {
    const accessToken = await getAccessToken()
    const response = await fetch(`${this.apiUrl}/reset-password-complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error('Complete reset password failed')
    }
  }
}

export const userService = new UserService()