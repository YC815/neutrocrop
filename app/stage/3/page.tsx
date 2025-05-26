'use client'

import { useState } from "react"
import StudentCards from "./StudentCards"
import ResultEmail from "./ResultEmail"
import { StudentSelection, Student } from "../../types/student"
import { updateStage3Selection } from '../../lib/gameStore'
import { students as allStudentsData } from '../../data/students'

export default function EducationResource() {
  const [selections, setSelections] = useState<StudentSelection[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (id: string) => {
    // 選擇邏輯由 StudentCards 內部處理
  }

  const handleRoundComplete = (roundId: number, selectedStudentId: string) => {
    const selectedStudent = allStudentsData.find((s: Student) => s.id === selectedStudentId);
    if (selectedStudent) {
      updateStage3Selection(roundId, selectedStudentId, selectedStudent.needsLevel, selectedStudent.companyPreferred);
      setSelections(prev => [...prev, { roundId, studentId: selectedStudentId }])
    }
  }

  const handleAllRoundsComplete = () => {
    setShowResults(true)
  }

  if (showResults) {
    return <ResultEmail selections={selections} />
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">第三關：教育資源分配</h1>
      <StudentCards 
        onSelect={handleSelect} 
        onRoundComplete={handleRoundComplete} 
        onAllRoundsComplete={handleAllRoundsComplete} 
      />
    </div>
  )
} 