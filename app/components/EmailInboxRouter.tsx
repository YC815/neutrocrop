'use client'

import { useSearchParams } from 'next/navigation'
import EmailInboxStage2 from './EmailInboxStage2'
import EmailInboxStage3 from './EmailInboxStage3'
import EmailInboxStage4 from './EmailInboxStage4'

export default function EmailInboxRouter() {
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