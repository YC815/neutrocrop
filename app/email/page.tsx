'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import EmailInboxStage2 from '../components/EmailInboxStage2'
import EmailInboxStage3 from '../components/EmailInboxStage3'
import EmailInboxStage4 from '../components/EmailInboxStage4'

export default function EmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stage = searchParams.get('stage') || '2'
  
  // 根據stage參數顯示不同階段的收件匣
  if (stage === '4') {
    return <EmailInboxStage4 />
  }
  
  if (stage === '3') {
    return <EmailInboxStage3 />
  }
  
  // 預設顯示第二關收件匣
  return <EmailInboxStage2 />
} 