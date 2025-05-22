'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const dialogues = [
  '「感謝您來參加 NeutroCorp 的面試。」',
  '（你注意到坐在你旁邊的人穿著不同文化的服裝。）',
  '「請簡單介紹一下你為什麼想加入我們公司？」',
  '......（面試結束）'
]

export default function InterviewDialog({ onNext }: { onNext: () => void }) {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    if (index < dialogues.length - 1) {
      setIndex(index + 1)
    } else {
      onNext()
    }
  }

  return (
    <Card className="max-w-xl bg-neutral-800 shadow-xl">
      <CardContent className="text-lg p-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {dialogues[index]}
          </motion.p>
        </AnimatePresence>
        <div className="mt-4 flex justify-end">
          <Button 
            onClick={handleNext}
            className="bg-neutral-700 hover:bg-neutral-600"
            variant="default"
            size="default"
          >
            {index < dialogues.length - 1 ? '下一句' : '結束'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 