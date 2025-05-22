'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'

interface SupervisorIntroProps {
  onComplete: () => void
}

export default function SupervisorIntro({ onComplete }: SupervisorIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
      >
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="h-16 w-16">
            <div className="bg-blue-100 h-full w-full flex items-center justify-center text-blue-600 text-2xl font-bold">
              SM
            </div>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-black">Sarah Mitchell</h2>
            <p className="text-gray-600">人力資源總監</p>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>歡迎加入 NeutroCorp！我是 Sarah，很高興能與你共事。</p>
          <p>作為文化顧問，你將協助我們建立一個更包容、多元的工作環境。</p>
          <p>讓我們先從一個簡單的任務開始：評估幾位應徵者，並做出最適合公司文化的選擇。</p>
        </div>

        <div className="mt-6">
          <Button 
            onClick={onComplete}
            className="w-full"
            size="lg"
            variant="default"
          >
            開始工作
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
} 