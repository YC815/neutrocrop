'use client'
import { motion } from 'framer-motion'

export default function EmailPopup({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-10 right-10 bg-white text-black shadow-lg rounded-lg px-4 py-3 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <div>
          <p className="font-bold">新信件：NeutroCorp 任務提醒</p>
          <p className="text-sm text-gray-600">點擊查看本週第一項決策任務。</p>
        </div>
      </div>
    </motion.div>
  )
} 