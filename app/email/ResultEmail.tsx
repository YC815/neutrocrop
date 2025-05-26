'use client'

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ResultEmailProps {
  selectedProposalId: string;
}

export default function ResultEmail({ selectedProposalId }: ResultEmailProps) {
  const router = useRouter();

  const proposalTitles: Record<string, string> = {
    "a": "族語振興與雙語教材計畫",
    "b": "文化形象包裝訓練營",
    "c": "社區共融藝術牆計畫"
  };

  const handleShowEnding = () => {
    router.push('/ending');
  };

  return (
    <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">📩 【審核通過】文化提案決策成功</h1>
            <span className="text-sm text-gray-500">今天 16:30 PM</span>
          </div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
              N
            </div>
            <div>
              <h2 className="font-medium text-stone-900">NeutroCorp 決策系統</h2>
              <p className="text-sm text-gray-600">system@neutrocorp.com</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">收件者：你</p>
        </div>

        <div className="prose max-w-none mb-8 text-stone-900">
          <p>親愛的文化顧問：</p>
          <p>感謝你完成本次文化提案審核任務。你選擇的《{proposalTitles[selectedProposalId]}》已通過系統登記，並已排入執行流程。</p>
          
          <div className="bg-gray-100 p-4 rounded-md my-5">
            <h3 className="text-lg font-medium mb-2">決策影響概述</h3>
            <p>每個決策都會對組織文化產生實質影響，你的選擇反映了特定的價值取向與優先順序。</p>
            <p>審核序列已完成，現在是時候查看您的最終評估報告了。</p>
          </div>
          
          <p>點擊下方按鈕查看您的最終評估。</p>
          <p className="font-medium">NeutroCorp 決策分析系統</p>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg"
            onClick={handleShowEnding}
          >
            查看最終評估
          </motion.button>
        </div>
      </div>
    </div>
  );
} 