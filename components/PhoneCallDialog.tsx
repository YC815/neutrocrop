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
      <Card className="max-w-md bg-neutral-700">
        <CardContent className="p-6 space-y-4">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button 
              onClick={onSleepClick}
              className="w-full mt-4"
            >
              去睡覺
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 