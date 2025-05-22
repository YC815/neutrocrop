'use client'
import { useState, useTransition, useEffect } from 'react'
import SupervisorIntro from '../components/SupervisorIntro'
import DeskView from '@/components/DeskView'
import { useRouter } from 'next/navigation'

export default function OnboardingPage() {
  const [showSupervisor, setShowSupervisor] = useState(true)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    console.log('OnboardingPage 已載入')
  }, [])

  const handleComplete = () => {
    console.log('完成主管介紹')
    setShowSupervisor(false)
  }

  const handleStartTask = () => {
    console.log('準備開始任務')
    try {
      console.log('開始跳轉到 stage/1')
      router.replace('/stage/1')
    } catch (error) {
      console.error('路由跳轉失敗:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {showSupervisor ? (
        <SupervisorIntro onComplete={handleComplete} />
      ) : (
        <DeskView onStartTask={handleStartTask} />
      )}
    </div>
  )
} 