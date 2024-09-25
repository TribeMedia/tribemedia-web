import { userService } from '@/lib/services/userService';
import { User, SignInCredentials, SignUpCredentials, ResetPasswordCredentials, CompleteResetPasswordCredentials } from '@/types/user';

export async function signIn(credentials: SignInCredentials): Promise<User> {
  return userService.signIn(credentials);
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
  return userService.signUp(credentials);
}

export async function signOut(): Promise<void> {
  return userService.signOut();
}

export async function resetPassword(credentials: ResetPasswordCredentials): Promise<void> {
  return userService.resetPassword(credentials);
}

export async function completeResetPassword(credentials: CompleteResetPasswordCredentials): Promise<void> {
  return userService.completeResetPassword(credentials);
}

export async function getCurrentUser(): Promise<User | null> {
  return userService.getCurrentUser();
}

// Export the userService for direct access if needed
export { userService };