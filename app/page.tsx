'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl font-bold mb-4">NeutroCorp</h1>
        <p className="text-lg text-neutral-300 mb-8">
          在多元文化的職場中，你將如何做出選擇？
        </p>
        <Button
          onClick={() => router.push('/interview')}
          className="text-lg px-8 py-6"
          size="lg"
          variant="default"
        >
          開始遊戲
        </Button>
      </motion.div>
    </main>
  )
} 