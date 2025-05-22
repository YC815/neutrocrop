'use client'

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Round } from "@/app/types/victim"
import { rounds } from "@/app/data/victims"

interface VictimCardsProps {
  onSelect: (id: string) => void
  onRoundComplete: (round: Round, selectedId: string) => void
}

export default function VictimCards({ onSelect, onRoundComplete }: VictimCardsProps) {
  const [currentRound, setCurrentRound] = useState(1)
  const [timer, setTimer] = useState(30)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [victims, setVictims] = useState<Round['victims']>([])

  // 隨機打亂受害者順序
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const handleSelect = useCallback((id: string) => {
    if (selectedId) return
    setSelectedId(id)
    onSelect(id)
    
    const round = rounds.find(r => r.id === currentRound)
    if (round) {
      onRoundComplete(round, id)
    }

    // 延遲後進入下一輪
    setTimeout(() => {
      setCurrentRound(prev => prev + 1)
      setTimer(30)
      setSelectedId(null)
    }, 2000)
  }, [selectedId, onSelect, onRoundComplete, currentRound])

  useEffect(() => {
    const round = rounds.find(r => r.id === currentRound)
    if (round) {
      setVictims(shuffleArray(round.victims))
    }
  }, [currentRound])

  useEffect(() => {
    if (timer > 0 && !selectedId) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else if (timer === 0 && !selectedId) {
      // 如果時間到還沒選擇，自動選擇最危急的
      const round = rounds.find(r => r.id === currentRound)
      if (round) {
        const mostUrgent = round.victims.reduce((prev, current) => 
          (current.urgency > prev.urgency) ? current : prev
        )
        handleSelect(mostUrgent.id)
      }
    }
  }, [timer, selectedId, currentRound, handleSelect])

  return (
    <div className="w-full max-w-6xl p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-black">
          第 {currentRound} 輪 / 共 10 輪
        </h2>
        <div className="text-xl font-medium text-black">
          剩餘時間：{timer} 秒
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {victims.map((victim) => (
          <motion.div
            key={victim.id}
            className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all ${
              selectedId === victim.id ? 'ring-4 ring-blue-500' : ''
            }`}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleSelect(victim.id)}
          >
            <div className="aspect-[3/4] bg-gray-200 relative">
              {/* 這裡可以加入受害者圖片 */}
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-black">{victim.name}</h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">
                  {victim.race}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{victim.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 