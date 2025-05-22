'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface InterviewDialogProps {
  onNext: () => void
}

const DIALOG_STEPS = [
  {
    speaker: '面試官',
    content: '歡迎來到 NeutroCorp 的面試。我們正在尋找一位能夠幫助我們建立更包容、多元工作環境的文化顧問。',
    buttonText: '繼續'
  },
  {
    speaker: '面試官',
    content: '這個職位需要你協助評估應徵者，並確保我們的招聘過程公平且包容。你覺得自己適合這個角色嗎？',
    buttonText: '我願意嘗試'
  },
  {
    speaker: '面試官',
    content: '很好。在開始之前，我想先了解你對多元文化工作環境的看法。你認為什麼是真正的包容？',
    buttonText: '分享我的想法'
  },
  {
    speaker: '面試官',
    content: '謝謝你的分享。接下來，你將收到一封郵件，裡面有你的第一個任務。期待看到你的表現！',
    buttonText: '完成面試'
  }
]

export default function InterviewDialog({ onNext }: InterviewDialogProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const handleNext = () => {
    if (currentStep < DIALOG_STEPS.length - 1) {
      setIsExiting(true)
      setTimeout(() => {
        setCurrentStep(prev => prev + 1)
        setIsExiting(false)
      }, 300)
    } else {
      onNext()
    }
  }

  const currentDialog = DIALOG_STEPS[currentStep]

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-xl p-6 space-y-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-bold">面</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{currentDialog.speaker}</h3>
              <p className="text-sm text-gray-500">NeutroCorp 人力資源部</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              {currentDialog.content}
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              size="lg"
              variant="default"
            >
              {currentDialog.buttonText}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 