'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function TaskBriefing2() {
  const router = useRouter()

  const handleStartTask = () => {
    router.push('/stage/2')
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-2 text-black">第二關：醫療資源分配任務</h1>
          <p className="text-sm text-gray-500 mb-6">發件人：NeutroCorp 人力資源部</p>

          <div className="space-y-4 mb-8 text-black">
            <p>親愛的評估官，</p>
            
            <p>感謝您在第一輪評估中的出色表現。我們的分析團隊對您的選擇給予了高度評價。</p>
            
            <p>現在，我們需要您處理一個更緊急的任務：醫療資源分配決策。</p>
            
            <p>在公司附近的一處緊急事故現場，有多位傷患同時需要醫療救助，但資源有限，您需要迅速決定優先救治哪位患者。</p>
            
            <p>請注意：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>您只有<span className="font-bold">10秒鐘</span>做出決定</li>
              <li>每個決策都會被記錄並影響公司形象</li>
              <li>請在壓力下做出最適合公司利益的選擇</li>
              <li>所有決策將影響您的評估報告</li>
            </ul>
            
            <p>您的選擇將在效率和企業形象之間取得平衡，請認真對待每一個選項。</p>
            
            <p>祝您好運！</p>
            
            <p>NeutroCorp 人力資源評估團隊</p>
          </div>

          <Button 
            onClick={handleStartTask}
            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md transition-colors"
            variant="default"
            size="default"
          >
            開始任務
          </Button>
        </div>
      </div>
    </div>
  )
} 