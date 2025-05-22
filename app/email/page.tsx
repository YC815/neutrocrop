'use client'

import { Suspense } from 'react'
import EmailInboxRouter from '../components/EmailInboxRouter'

export default function EmailPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>}>
      <EmailInboxRouter />
    </Suspense>
  )
} 