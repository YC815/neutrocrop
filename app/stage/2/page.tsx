'use client'

import { useState } from "react"
import VictimCards from "@/app/stage/2/VictimCards"
import ResultEmail from "@/app/stage/2/ResultEmail"
import { Round } from "@/app/types/victim"

interface Selection {
  roundId: number
  victimId: string
}

export default function MedicalMission() {
  const [selections, setSelections] = useState<Selection[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const handleSelect = (id: string) => {
    setSelections(prev => [...prev, { roundId: prev.length + 1, victimId: id }])
  }

  const handleRoundComplete = (round: Round, selectedId: string) => {
    // 如果完成十輪，設置完成狀態
    if (selections.length + 1 >= 10) {
      setIsComplete(true)
    }
  }

  if (isComplete) {
    return <ResultEmail selections={selections} />
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <VictimCards 
        onSelect={handleSelect} 
        onRoundComplete={handleRoundComplete}
      />
    </div>
  )
} 