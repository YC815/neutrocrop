'use client'

import { motion } from "framer-motion"
import Link from "next/link"

interface ResultFeedbackProps {
  selectedProposalId: string
}

export default function ResultFeedback({ selectedProposalId }: ResultFeedbackProps) {
  const proposalTitles = {
    "a": "族語振興與雙語教材計畫",
    "b": "文化形象包裝訓練營",
    "c": "社區共融藝術牆計畫"
  }

  const feedbackMessages = {
    "a": "請你準備好面對經費部門的挑戰與媒體訪談壓力。這是重要的文化保存工作，但需要更多資源支持。",
    "b": "完美決策！這筆錢花得漂亮，形象不會出錯。你對公司制度的理解正符合我們的期望。",
    "c": "這是個平衡的選擇，但要注意藝術創作的不可預測性可能引起爭議。準備好應對各方反應。"
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 mb-8"
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xl mr-4">
            📩
          </div>
          <div>
            <h2 className="font-bold text-lg text-stone-900">提案決策回覆</h2>
            <p className="text-gray-500 text-sm">主管回饋</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <p className="font-semibold mb-3 text-stone-900">
            你選擇了「{proposalTitles[selectedProposalId as keyof typeof proposalTitles]}」
          </p>
          <p className="text-gray-700 mb-4">
            {feedbackMessages[selectedProposalId as keyof typeof feedbackMessages]}
          </p>
          
          <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600 mb-4">
            <p>不同的選擇反映了不同的價值取向：</p>
            <ul className="list-disc ml-5 mt-2">
              <li>高成本理念提案：社會責任vs.財務現實</li>
              <li>低成本制度提案：形象包裝vs.根本問題</li>
              <li>中庸創意提案：平衡但可能不夠深入</li>
            </ul>
          </div>
        </div>

        <div className="text-right">
          <Link href="/stage/5">
            <button className="bg-black text-white px-5 py-2 rounded-lg">
              進入下一關 ➜
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 