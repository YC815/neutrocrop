'use client'

import { rounds } from "@/app/data/victims"
import { Victim } from "@/app/types/victim"
import { useRouter } from "next/navigation"

interface Selection {
  roundId: number
  victimId: string
}

interface ResultEmailProps {
  selections: Selection[]
}

export default function ResultEmail({ selections }: ResultEmailProps) {
  const router = useRouter()
  // 計算選擇統計
  const stats = {
    totalRounds: selections.length,
    whiteSelected: selections.filter(s => {
      const round = rounds.find(r => r.id === s.roundId)
      const victim = round?.victims.find((v: Victim) => v.id === s.victimId)
      return victim?.race === "白人"
    }).length,
    companyPreferred: selections.filter(s => {
      const round = rounds.find(r => r.id === s.roundId)
      return round?.companyPreferredId === s.victimId
    }).length,
    mostUrgent: selections.filter(s => {
      const round = rounds.find(r => r.id === s.roundId)
      const victim = round?.victims.find((v: Victim) => v.id === s.victimId)
      const mostUrgentVictim = round?.victims.reduce((prev: Victim, current: Victim) => 
        (current.urgency > prev.urgency) ? current : prev
      )
      return victim?.id === mostUrgentVictim?.id
    }).length
  }

  // 計算偏見指數 (0-100%)
  const biasIndex = Math.round(
    ((stats.whiteSelected / stats.totalRounds) * 0.6 + 
    (stats.companyPreferred / stats.totalRounds) * 0.4) * 100
  )

  // 計算正確搶救率 (基於緊急程度)
  const correctRescueRate = Math.round((stats.mostUrgent / stats.totalRounds) * 100)

  // 分析偏好救援群體
  const raceSelections: Record<string, number> = {}
  const communicativeSelections = {count: 0, total: 0}
  
  selections.forEach(s => {
    const round = rounds.find(r => r.id === s.roundId)
    const victim = round?.victims.find((v: Victim) => v.id === s.victimId)
    
    if (victim) {
      // 種族統計
      raceSelections[victim.race] = (raceSelections[victim.race] || 0) + 1
      
      // 是否可以良好溝通 (假設緊急程度低的患者通常可以更好地溝通)
      if (victim.urgency <= 3) {
        communicativeSelections.count += 1
      }
      communicativeSelections.total += 1
    }
  })

  // 找出最常選擇的群體
  const preferredGroups: string[] = []
  let maxCount = 0
  Object.entries(raceSelections).forEach(([race, count]) => {
    if (count > maxCount) {
      maxCount = count
      preferredGroups.length = 0
      preferredGroups.push(race)
    } else if (count === maxCount) {
      preferredGroups.push(race)
    }
  })
  
  if (communicativeSelections.count > communicativeSelections.total / 2) {
    preferredGroups.push("可溝通者")
  }

  // 找出最常忽略的群體
  const ignoredGroups: string[] = []
  
  // 計算各族群在所有回合中出現的次數
  const raceAppearances: Record<string, number> = {}
  rounds.slice(0, stats.totalRounds).forEach(round => {
    round.victims.forEach(victim => {
      raceAppearances[victim.race] = (raceAppearances[victim.race] || 0) + 1
    })
  })
  
  // 計算各族群被選擇的比率
  const raceSelectionRates: Record<string, number> = {}
  Object.entries(raceAppearances).forEach(([race, appearances]) => {
    raceSelectionRates[race] = ((raceSelections[race] || 0) / appearances) * 100
  })
  
  // 找出選擇率最低的族群
  let minRate = 100
  Object.entries(raceSelectionRates).forEach(([race, rate]) => {
    if (rate < minRate) {
      minRate = rate
      ignoredGroups.length = 0
      ignoredGroups.push(race)
    } else if (rate === minRate) {
      ignoredGroups.push(race)
    }
  })
  
  // 檢查是否忽略語言障礙者
  const nonCommunicativeRate = ((communicativeSelections.total - communicativeSelections.count) / 
    communicativeSelections.total) * 100
  if (nonCommunicativeRate < 30) {
    ignoredGroups.push("重度語言障礙者")
  }
  
  // 檢查是否特別忽略穆斯林女性
  const muslimWomenSelections = selections.filter(s => {
    const round = rounds.find(r => r.id === s.roundId)
    const victim = round?.victims.find((v: Victim) => v.id === s.victimId)
    return victim?.race === "中東裔" && victim?.name.includes("女") || victim?.name.includes("媽媽")
  }).length
  
  const muslimWomenAppearances = rounds.slice(0, stats.totalRounds).flatMap(round => 
    round.victims.filter(v => v.race === "中東裔" && (v.name.includes("女") || v.name.includes("媽媽")))
  ).length
  
  if (muslimWomenAppearances > 0 && (muslimWomenSelections / muslimWomenAppearances) < 0.3) {
    ignoredGroups.push("穆斯林女性")
  }

  const handleComplete = () => {
    router.push('/email?stage=3')
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-6">醫療資源分配結果報告</h1>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">救援分析</h2>
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="text-lg font-bold text-gray-800">🎓 你的偏見指數：{biasIndex}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${biasIndex}%` }}></div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="text-lg font-bold text-gray-800">❤️ 正確搶救率：{correctRescueRate}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${correctRescueRate}%` }}></div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="text-lg font-bold text-gray-800">📉 偏好救援群體：{preferredGroups.join('、')}</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow">
              <p className="text-lg font-bold text-gray-800">🔍 最常忽略群體：{ignoredGroups.join('、')}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">選擇統計</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">總輪次</p>
              <p className="text-2xl font-bold text-black">{stats.totalRounds}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">選擇白人</p>
              <p className="text-2xl font-bold text-black">{stats.whiteSelected}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">符合公司偏好</p>
              <p className="text-2xl font-bold text-black">{stats.companyPreferred}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">選擇最危急</p>
              <p className="text-2xl font-bold text-black">{stats.mostUrgent}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-black">詳細選擇記錄</h2>
          {selections.map((selection, index) => {
            const round = rounds.find(r => r.id === selection.roundId)
            const victim = round?.victims.find((v: Victim) => v.id === selection.victimId)
            const isCompanyPreferred = round?.companyPreferredId === selection.victimId
            const isMostUrgent = victim?.urgency === Math.max(...(round?.victims.map((v: Victim) => v.urgency) || []))

            return (
              <div key={index} className="bg-white border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-black">第 {selection.roundId} 輪</h3>
                  <div className="flex gap-2">
                    {isCompanyPreferred && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        公司偏好
                      </span>
                    )}
                    {isMostUrgent && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        最危急
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600">{victim?.name} - {victim?.race}</p>
                <p className="text-sm text-gray-500 mt-1">{victim?.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleComplete}
            className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  )
} 