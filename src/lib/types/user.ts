import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  image: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;

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