'use client'

import { rounds } from "@/app/data/victims"

interface Selection {
  roundId: number
  victimId: string
}

interface ResultEmailProps {
  selections: Selection[]
}

export default function ResultEmail({ selections }: ResultEmailProps) {
  // 計算選擇統計
  const stats = {
    totalRounds: selections.length,
    whiteSelected: selections.filter(s => {
      const round = rounds.find(r => r.id === s.roundId)
      const victim = round?.victims.find(v => v.id === s.victimId)
      return victim?.race === "白人"
    }).length,
    companyPreferred: selections.filter(s => {
      const round = rounds.find(r => r.id === s.roundId)
      return round?.companyPreferredId === s.victimId
    }).length,
    mostUrgent: selections.filter(s => {
      const round = rounds.find(r => r.id === s.roundId)
      const victim = round?.victims.find(v => v.id === s.victimId)
      const mostUrgentVictim = round?.victims.reduce((prev, current) => 
        (current.urgency > prev.urgency) ? current : prev
      )
      return victim?.id === mostUrgentVictim?.id
    }).length
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-6">醫療資源分配結果報告</h1>
        
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

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-black">詳細選擇記錄</h2>
          {selections.map((selection, index) => {
            const round = rounds.find(r => r.id === selection.roundId)
            const victim = round?.victims.find(v => v.id === selection.victimId)
            const isCompanyPreferred = round?.companyPreferredId === selection.victimId
            const isMostUrgent = victim?.urgency === Math.max(...(round?.victims.map(v => v.urgency) || []))

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
      </div>
    </div>
  )
} 