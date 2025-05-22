'use client'

import { Suspense } from 'react'
import ResultEmailClient from './ResultEmailClient'

export default function ResultEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    }>
      <ResultEmailClient />
    </Suspense>
  )
} 