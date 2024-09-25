// lib/errorHandler.ts

export class AppError extends Error {
    constructor(
      message: string,
      public code: string,
      public severity: 'low' | 'medium' | 'high',
      public statusCode?: number
    ) {
      super(message);
      this.name = 'AppError';
    }
  }
  
  export function handleAppError(error: unknown): AppError {
    if (error instanceof AppError) {
      return error;
    }
  
    console.error('Unhandled error:', error);
    return new AppError('An unexpected error occurred', 'UNKNOWN_ERROR', 'high', 500);
  }