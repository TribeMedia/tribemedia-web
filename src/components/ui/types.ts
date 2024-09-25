import { ReactNode } from 'react'

export interface ToasterToast {
  id: string
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode
  [key: string]: unknown
}

export type ToastProps = Pick<ToasterToast, 'id' | 'title' | 'description' | 'action'> & {
  onOpenChange?: (open: boolean) => void
}


export interface ToastType {
    id: string;
    title?: string;
    description?: string;
    action?: ReactNode;
    [key: string]: unknown;
}