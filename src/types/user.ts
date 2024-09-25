import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  image: z.string().optional(),
  roles: z.array(z.string()).optional(),
});

export type User = z.infer<typeof UserSchema>;

export const PrometheusUserSchema = z.object({
  id: z.string().uuid(),
  displayName: z.string().nullable(),
  email: z.string().email(),
  data: z.any().nullable(),
  lastName: z.string().nullable(),
  firstName: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime().nullable(),
});

export type PrometheusUser = z.infer<typeof PrometheusUserSchema>;


export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignInCredentials = z.infer<typeof SignInSchema>;

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string().optional(),
});

export type SignUpCredentials = z.infer<typeof SignUpSchema>;

export const ResetPasswordSchema = z.object({
  email: z.string().email(),
});

export type ResetPasswordCredentials = z.infer<typeof ResetPasswordSchema>;

export const CompleteResetPasswordSchema = z.object({
  token: z.string(),
  password: z.string(),
});

export type CompleteResetPasswordCredentials = z.infer<typeof CompleteResetPasswordSchema>;

// Zitadel-specific types
export interface ZitadelTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

export interface ZitadelAuthenticateResponse {
  token: string;
  user_id: string;
  details: {
    preferred_username: string;
    email: string;
    name: string;
  };
}
