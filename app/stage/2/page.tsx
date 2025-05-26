'use client'

import { useState, useEffect, useCallback } from 'react'
import VictimCards from './VictimCards'
import ResultEmail from './ResultEmail'
import { Round, Victim } from '../../types/victim'
import { updateStage2Selection } from '../../lib/gameStore'

interface Selection {
  roundId: number
  victimId: string
}

export default function MedicalMission() {
  const [selections, setSelections] = useState<Selection[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (id: string) => {
    // 在 VictimCards 組件中處理選擇邏輯和計時器
  }

  const handleRoundComplete = useCallback((round: Round, selectedVictimId: string) => {
    const selectedVictim = round.victims.find(v => v.id === selectedVictimId);
    if (selectedVictim) {
      console.log(`[MedicalMission] Round ${round.id} complete. Selected: ${selectedVictim.name} (ID: ${selectedVictimId})`);
      updateStage2Selection(round.id, selectedVictimId, selectedVictim.urgency, selectedVictim.isCompanyPreferred);
      setSelections(prev => [...prev, { roundId: round.id, victimId: selectedVictimId }])
    }
  }, []);

  const handleAllRoundsComplete = useCallback(() => {
    console.log("[MedicalMission] All rounds complete! Showing results.");
    setShowResults(true)
  }, []);

  if (showResults) {
    return <ResultEmail selections={selections} />
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">第二關：醫療資源分配</h1>
      <VictimCards 
        onSelect={handleSelect} 
        onRoundComplete={handleRoundComplete} 
        onAllRoundsComplete={handleAllRoundsComplete} 
      />
    </div>
  )
} 