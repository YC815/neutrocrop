'use client'
import { useState } from 'react'
import InterviewDialog from '@/components/InterviewDialog'
import PhoneCallDialog from '@/components/PhoneCallDialog'
import SleepScreen from '@/components/SleepScreen'

export default function InterviewPage() {
  const [phase, setPhase] = useState<'interview' | 'call' | 'sleep'>('interview')
  const [sleeping, setSleeping] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 flex items-center justify-center">
      {phase === 'interview' && (
        <InterviewDialog onNext={() => setPhase('call')} />
      )}
      {phase === 'call' && (
        <PhoneCallDialog onSleepClick={() => setPhase('sleep')} />
      )}
      {phase === 'sleep' && (
        <SleepScreen onWake={() => {
          setSleeping(true)
          setTimeout(() => {
            window.location.href = '/mission'
          }, 2500)
        }} />
      )}
    </div>
  )
} 