'use client'

import { motion } from "framer-motion"
import { StudentSelection } from "@/app/types/student"
import { useRouter } from "next/navigation"
import { students } from "@/app/data/students"

interface ResultEmailProps {
  selections: StudentSelection[]
}

export default function ResultEmail({ selections }: ResultEmailProps) {
  const router = useRouter()

  const handleReturnToDesk = () => {
    router.push('/email?stage=4')
  }

  // 根據 needsLevel 來產生評語
  const getComment = (needsLevel: number, companyPreferred: boolean) => {
    if (companyPreferred) return "公司優先人選";
    if (needsLevel >= 5) return "高需求學生";
    if (needsLevel <= 1) return "低需求，不推薦";
    if (needsLevel === 4) return "值得資助";
    if (needsLevel === 3) return "評估中";
    return "表現普通";
  };

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
            <h2 className="font-bold text-lg text-stone-900">教育資源分配結果</h2>
            <p className="text-gray-500 text-sm">您選擇的學生名單</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <p className="text-gray-700 mb-4">
            您完成了三輪教育資源分配，以下是您選擇支持的學生：
          </p>
          
          <div className="space-y-3 mb-6">
            {selections.map((selection) => {
              // 尋找對應的學生資料
              const student = students.find(s => s.id === selection.studentId);
              return (
                <div key={selection.roundId} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-3">
                    {selection.roundId}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-stone-900">
                        {student?.name || "未知學生"}
                      </p>
                      <span className="text-xs bg-gray-200 rounded-full px-2 py-1 text-gray-700">
                        {student?.race || "未知種族"}
                      </span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-500">
                        背景：{student?.background?.substring(0, 20) || "未記錄"}...
                      </p>
                      <p className="text-xs text-blue-600 font-medium">
                        評語：{student ? getComment(student.needsLevel, student.companyPreferred) : "無評語"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg text-sm text-yellow-800 mb-4">
            <p>您的選擇反映了您對教育資源分配的價值觀。不同的選擇可能會影響學生的未來發展方向。</p>
          </div>
        </div>

        <div className="text-right">
          <button 
            className="bg-black text-white px-5 py-2 rounded-lg"
            onClick={handleReturnToDesk}
          >
            返回工位 ➜
          </button>
        </div>
      </motion.div>
    </div>
  )
} 