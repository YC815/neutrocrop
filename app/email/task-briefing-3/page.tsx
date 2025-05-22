'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function TaskBriefing3() {
  const router = useRouter()

  const handleStartTask = () => {
    router.push('/stage/3')
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-2 text-black">📩 第三關：教育資源評估任務</h1>
          <p className="text-sm text-gray-500 mb-6">發件人：NeutroCorp 教育資源部</p>

          <div className="space-y-4 mb-8 text-black">
            <p>親愛的評估官，</p>
            
            <p>感謝您在醫療資源分配任務中展現的決策敏銳度。您的選擇反映了寶貴的決策思維。</p>
            
            <p>現在，我們需要您協助審查三名學生的申請資料，並做出「公平」的教育資源配置。</p>
            
            <p>請特別留意學生的「潛力」與「適配度」，以符合 NeutroCorp 的社會關懷形象。</p>
            
            <p>任務要點：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>仔細閱讀每位學生的背景資料</li>
              <li>評估各學生對教育資源的真正需求</li>
              <li>考慮學生特質與公司形象的適配性</li>
              <li>做出最符合公平原則的選擇</li>
            </ul>
            
            <p>您的決定將直接影響這些學生的未來發展機會，也將反映 NeutroCorp 的企業價值觀。</p>
            
            <p>期待您的專業判斷！</p>
            
            <p>NeutroCorp 教育資源評估團隊</p>
          </div>

          <Button 
            onClick={handleStartTask}
            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md transition-colors"
            variant="default"
            size="default"
          >
            前往審查任務
          </Button>
        </div>
      </div>
    </div>
  )
} 