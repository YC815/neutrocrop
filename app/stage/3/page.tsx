'use client'

import { useState } from "react"
import { Student, StudentSelection } from "@/app/types/student"
import StudentCards from "@/app/stage/3/StudentCards"
import ResultEmail from "@/app/stage/3/ResultEmail"

export default function EducationResource() {
  const [selections, setSelections] = useState<StudentSelection[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const handleSelect = (id: string) => {
    const roundId = selections.length + 1
    setSelections(prev => [...prev, { roundId, studentId: id }])
  }

  const handleRoundComplete = (roundId: number, selectedId: string) => {
    // 如果完成三輪，設置完成狀態
    if (selections.length + 1 >= 3) {
      setIsComplete(true)
    }
  }

  if (isComplete) {
    return <ResultEmail selections={selections} />
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <StudentCards 
        onSelect={handleSelect} 
        onRoundComplete={handleRoundComplete}
      />
    </div>
  )
} 