'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

interface PhoneCallDialogProps {
  onSleepClick: () => void
}

const CALL_STEPS = [
  {
    speaker: 'Sarah',
    content: '嗨，我是 Sarah。恭喜你通過面試！我們都很期待你的加入。',
    buttonText: '謝謝'
  },
  {
    speaker: 'Sarah',
    content: '明天早上九點，你將收到一封郵件，裡面有你的第一個任務。請好好休息，準備迎接新的挑戰。',
    buttonText: '好的'
  },
  {
    speaker: 'Sarah',
    content: '對了，別忘了設置鬧鐘。明天見！',
    buttonText: '晚安'
  }
]

export default function PhoneCallDialog({ onSleepClick }: PhoneCallDialogProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const handleNext = () => {
    if (currentStep < CALL_STEPS.length - 1) {
      setIsExiting(true)
      setTimeout(() => {
        setCurrentStep(prev => prev + 1)
        setIsExiting(false)
      }, 300)
    } else {
      onSleepClick()
    }
  }

  const currentCall = CALL_STEPS[currentStep]

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
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{currentCall.speaker}</h3>
              <p className="text-sm text-gray-500">NeutroCorp 人力資源總監</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              {currentCall.content}
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              onClick={handleNext}
              className="bg-green-600 hover:bg-green-700 text-white px-6"
              size="lg"
              variant="default"
            >
              {currentCall.buttonText}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 