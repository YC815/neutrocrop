'use client'

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import FinalReflectionAnimation from "@/components/FinalReflectionAnimation"
import FinalScoreSummary from "@/components/FinalScoreSummary"

interface ResultFeedbackProps {
  selectedProposalId: string
}

export default function ResultFeedback({ selectedProposalId }: ResultFeedbackProps) {
  const router = useRouter();
  const [showReflection, setShowReflection] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

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

  const handleCompleteReview = () => {
    router.push(`/email/result-email?proposal=${selectedProposalId}`);
  };

  const handleReflectionComplete = () => {
    setShowReflection(false);
    setShowSummary(true);
  };

  if (showReflection) {
    return <FinalReflectionAnimation onComplete={handleReflectionComplete} />;
  }

  if (showSummary) {
    return <FinalScoreSummary />;
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

        <div className="mb-6 border-b border-gray-200 pb-6">
          <h3 className="font-medium text-lg mb-2 text-stone-900">已核准: {proposalTitles[selectedProposalId as keyof typeof proposalTitles]}</h3>
          <p className="text-gray-600">{feedbackMessages[selectedProposalId as keyof typeof feedbackMessages]}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-lg mb-2 text-stone-900">下一步</h3>
          <p className="text-gray-600">你的決策將對公司文化產生實質影響。</p>
          <p className="text-gray-600 mt-2">我們將在下次會議中討論執行細節。</p>
        </div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg"
            onClick={handleCompleteReview}
          >
            完成回顧
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
} 