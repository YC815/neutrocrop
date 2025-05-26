'use client'

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Student } from "../../types/student"
import { students, TOTAL_STUDENT_ROUNDS } from "../../data/students"

interface StudentCardsProps {
  onSelect: (id: string) => void
  onRoundComplete: (roundId: number, selectedId: string) => void
  onAllRoundsComplete?: () => void
}

export default function StudentCards({ onSelect, onRoundComplete, onAllRoundsComplete }: StudentCardsProps) {
  const [currentRound, setCurrentRound] = useState(1)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [currentStudents, setCurrentStudents] = useState<Student[]>([])

  useEffect(() => {
    const getRandomStudents = () => {
      let availableStudents = [...students];
      const roundStudents: Student[] = [];
  
      // 嘗試選取至少一個高需求和一個公司偏好 (如果可能且不重複)
      const highNeeds = availableStudents.filter(s => s.needsLevel >= 4);
      const companyPreferred = availableStudents.filter(s => s.companyPreferred);
  
      if (highNeeds.length > 0) {
        const selected = highNeeds[Math.floor(Math.random() * highNeeds.length)];
        roundStudents.push(selected);
        availableStudents = availableStudents.filter(s => s.id !== selected.id);
      }
  
      if (companyPreferred.length > 0) {
        const potentialSelection = companyPreferred[Math.floor(Math.random() * companyPreferred.length)];
        if (!roundStudents.find(rs => rs.id === potentialSelection.id) && availableStudents.find(s => s.id === potentialSelection.id)) {
          roundStudents.push(potentialSelection);
          availableStudents = availableStudents.filter(s => s.id !== potentialSelection.id);
        }
      }
      
      // 補齊到3個學生
      while (roundStudents.length < 3 && availableStudents.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableStudents.length);
        roundStudents.push(availableStudents[randomIndex]);
        availableStudents.splice(randomIndex, 1);
      }
      return shuffleArray(roundStudents);
    }
    
    if (currentRound <= TOTAL_STUDENT_ROUNDS) {
        setCurrentStudents(getRandomStudents());
    }
  }, [currentRound])

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
    
    onRoundComplete(currentRound, id)

    setTimeout(() => {
      if (currentRound < TOTAL_STUDENT_ROUNDS) {
        setCurrentRound(prev => prev + 1)
        setSelectedId(null)
      } else {
        if (onAllRoundsComplete) {
          onAllRoundsComplete();
        }
      }
    }, 2000)
  }, [selectedId, onSelect, onRoundComplete, currentRound, onAllRoundsComplete])

  if (currentRound > TOTAL_STUDENT_ROUNDS) {
    return null; // 所有輪次結束後不渲染
  }

  return (
    <div className="w-full max-w-6xl p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-black">
          第 {currentRound} 輪 / 共 {TOTAL_STUDENT_ROUNDS} 輪
        </h2>
        <div className="text-xl font-medium text-black">
          請為以下學生選擇教育資源支持
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentStudents.map((student) => (
          <motion.div
            key={student.id}
            className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all border-2 ${
              selectedId === student.id ? 'border-green-500' : selectedId ? 'border-red-500' : 'border-gray-200'
            }`}
            whileHover={{ scale: 1.02 }}
            layout
          >
            <div className="p-4 bg-white h-full flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-black">{student.name}</h3>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">
                    {student.race}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">
                    {student.age}歲
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{student.summary}</p>
              
              <div className="mt-2 space-y-2 text-sm flex-grow">
                <div className="bg-gray-50 p-2 rounded">
                  <p className="font-medium text-gray-700">學業記錄：</p>
                  <p className="text-gray-600">{student.academicRecord}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="font-medium text-gray-700">背景：</p>
                  <p className="text-gray-600">{student.background}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="font-medium text-gray-700">評語：</p>
                  <p className="text-gray-600 italic">&quot;{student.comment}&quot;</p>
                </div>
              </div>
              
              <div className="mt-4">
                {selectedId ? (
                  <div className={`px-3 py-1 rounded text-sm ${
                    selectedId === student.id ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedId === student.id ? '已選擇' : '未選擇'}
                  </div>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelect(student.id)
                    }}
                    className="w-full px-3 py-1 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors"
                  >
                    選擇此學生
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 