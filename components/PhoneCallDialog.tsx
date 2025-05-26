'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function PhoneCallDialog({ onSleepClick }: { onSleepClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[32rem] min-h-[12rem] bg-neutral-700 flex flex-col">
        <CardContent className="p-6 space-y-4 flex-grow flex flex-col justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              （晚上回到家，你接到一通電話）
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              「雖然你的分數不是最高，但為了公司的形象，我們決定錄取你。」
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-end"
          >
            <Button
              onClick={onSleepClick}
              className="mt-4"
              variant="default"
              size="default"
            >
              去睡覺
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 