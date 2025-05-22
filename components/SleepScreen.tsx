'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SleepScreen({ onWake }: { onWake: () => void }) {
  const [phase, setPhase] = useState<'night' | 'day'>('night')

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('day')
      onWake()
      setTimeout(() => {
        window.location.href = '/onboarding'
      }, 2500)
    }, 2000)
    return () => clearTimeout(timer)
  }, [onWake])

  return (
    <motion.div
      className="w-full h-full fixed top-0 left-0"
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{ backgroundColor: phase === 'night' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)' }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        {phase === 'night' && (
          <motion.p
            key="night"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white text-center mt-40 text-xl"
          >
            （你沉沉睡去......）
          </motion.p>
        )}
        {phase === 'day' && (
          <motion.p
            key="day"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-black text-center mt-40 text-xl"
          >
            （隔天早晨）
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 