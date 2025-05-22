'use client'

import { useState } from "react"
import { motion } from "framer-motion"

type Proposal = {
  id: string
  title: string
  content: string
  cost: number
  tag: string
}

const proposals: Proposal[] = [
  {
    id: "a",
    title: "族語振興與雙語教材計畫",
    content: "與各地原民團體合作，出版族語教材並在學校推動雙語教學。提升文化保存與族群自尊。",
    cost: 480000,
    tag: "理念導向",
  },
  {
    id: "b",
    title: "文化形象包裝訓練營",
    content: "針對前線員工提供形象管理與口語訓練，統一服裝與語言，避免爭議形象。",
    cost: 90000,
    tag: "制度導向",
  },
  {
    id: "c",
    title: "社區共融藝術牆計畫",
    content: "邀請在地藝術家與居民共同創作，反映多元文化故事，放置於公共場所。",
    cost: 250000,
    tag: "中庸創意",
  },
]

interface ProposalDecisionProps {
  onSelect: (id: string) => void
  onSubmit: () => void
  selectedId: string | null
}

export default function ProposalDecision({ onSelect, onSubmit, selectedId }: ProposalDecisionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedId) {
      setIsSubmitted(true)
      onSubmit()
    }
  }

  return (
    <div className="p-6 max-w-6xl w-full">
      <h1 className="text-xl font-bold mb-6 text-stone-900">📋 三項提案中，請選擇一案通過執行：</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {proposals.map((p) => (
          <motion.div
            key={p.id}
            className={`relative border-2 rounded-xl p-4 cursor-pointer transition ${
              selectedId === p.id
                ? "border-green-600 bg-green-50"
                : isSubmitted
                ? "opacity-30"
                : "hover:border-blue-400"
            }`}
            onClick={() => {
              if (!isSubmitted) onSelect(p.id);
            }}
          >
            <h2 className="text-lg font-semibold mb-2 text-stone-900">{p.title}</h2>
            <p className="text-sm text-gray-600 mb-2 text-stone-900">{p.content}</p>
            <div className="text-sm text-gray-500">💰 預算需求：${p.cost.toLocaleString()}</div>
            <div className="absolute top-2 right-2 text-xs bg-gray-200 rounded-full px-2 py-1 text-gray-700">
              {p.tag}
            </div>
            {isSubmitted && selectedId === p.id && (
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                className="absolute bottom-2 right-2 text-red-600 text-xl font-bold"
              >
                ✅ 通過
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {!isSubmitted && selectedId && (
        <div className="text-right mt-6">
          <button
            className="px-4 py-2 rounded-xl bg-black text-white"
            onClick={handleSubmit}
          >
            🖋️ 蓋章並通過此提案
          </button>
        </div>
      )}
    </div>
  )
} 