'use client'

import React, { useEffect, useState } from 'react';
import { getGameStats, GameStats } from '../lib/gameStore';
import { motion } from 'framer-motion';
import { BarChart, TrendingUp, Users, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';

interface Ending {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  colorClass: string;
}

export default function GameEndingDisplay() {
  const [stats, setStats] = useState<GameStats | null>(null);
  const [ending, setEnding] = useState<Ending | null>(null);

  useEffect(() => {
    console.log('[GameEndingDisplay] useEffect 執行開始。');
    try {
      const gameStats = getGameStats();
      console.log('[GameEndingDisplay] getGameStats() 返回結果:', gameStats);

      if (!gameStats) {
        console.warn('[GameEndingDisplay] gameStats 為 null 或 undefined。設定為「資料讀取錯誤」結局。');
        setStats(null);
        setEnding({
          title: "資料讀取錯誤",
          description: "無法獲取您的遊戲數據。這可能是因為沒有找到先前的遊戲記錄，或者瀏覽器儲存出現問題。",
          details: ["建議：請嘗試重新開始遊戲。如果問題持續，請檢查瀏覽器設定或聯繫開發者。"],
          icon: <Zap className="w-16 h-16 text-red-300" />,
          colorClass: "bg-red-600",
        });
        console.log('[GameEndingDisplay] 「資料讀取錯誤」結局已設定。');
        return;
      }

      setStats(gameStats);
      console.log('[GameEndingDisplay] stats 狀態已設定:', gameStats);

      // 檢查 gameStats 是否包含必要的屬性
      if (typeof gameStats.conformityScore === 'undefined' || 
          typeof gameStats.equityScore === 'undefined' || 
          typeof gameStats.pragmatismScore === 'undefined') {
        console.error('[GameEndingDisplay] gameStats 物件缺少一個或多個評分屬性。設定為「資料結構錯誤」結局。', gameStats);
        // 即使數據結構錯誤，我們還是設定 stats，以便在錯誤訊息中可能顯示部分數據
        setEnding({
          title: "資料結構錯誤",
          description: "遊戲數據格式不正確，缺少必要的評分項目。請檢查 getGameStats 的回傳值。",
          details: [`偵測到的數據: ${JSON.stringify(gameStats)}`, "建議：請檢查遊戲存檔邏輯或聯繫開發者。"],
          icon: <Zap className="w-16 h-16 text-orange-400" />, // 使用不同顏色標示
          colorClass: "bg-orange-600",
        });
        console.log('[GameEndingDisplay] 「資料結構錯誤」結局已設定。');
        return;
      }
      
      const { conformityScore, equityScore, pragmatismScore } = gameStats;
      console.log(`[GameEndingDisplay] 分數: 一致性=${conformityScore}, 公平性=${equityScore}, 務實性=${pragmatismScore}`);

      let determinedEnding: Ending;

      // 範例結局邏輯 (需要根據實際分數範圍和期望的結局細化)
      if (conformityScore > 25 && conformityScore >= equityScore && conformityScore >= pragmatismScore) {
        determinedEnding = {
          title: "公司模範：企業巨輪的忠誠齒輪",
          description: "你完美融入了 NeutroCorp 的企業文化，成為高層眼中的模範員工。你的決策高度符合公司期望，確保了組織的穩定與效率。",
          details: [
            `一致性指數: ${conformityScore}`,
            `公平正義指數: ${equityScore}`,
            `務實效率指數: ${pragmatismScore}`,
            "評價：高度服從，潛在的創新抑制者，但深受管理層信賴。"
          ],
          icon: <ShieldCheck className="w-16 h-16" />,
          colorClass: "bg-blue-500",
        };
      } else if (equityScore > 25 && equityScore >= conformityScore && equityScore >= pragmatismScore) {
        determinedEnding = {
          title: "道德先鋒：在體制內播撒改變的種子",
          description: "你始終將公平與正義置於首位。你的決策雖然有時與公司主流意見相左，但卻為 NeutroCorp 帶來了深思的機會，並在同事間贏得了尊敬。",
          details: [
            `公平正義指數: ${equityScore}`,
            `一致性指數: ${conformityScore}`,
            `務實效率指數: ${pragmatismScore}`,
            "評價：理想主義者，勇於挑戰現狀，但在晉升上可能面臨考驗。"
          ],
          icon: <HeartHandshake className="w-16 h-16" />,
          colorClass: "bg-green-500",
        };
      } else if (pragmatismScore > 20 && pragmatismScore >= conformityScore && pragmatismScore >= equityScore) {
        determinedEnding = {
          title: "效率專家：成果導向的實幹家",
          description: "你以驚人的效率和務實的態度解決了一個又一個難題。你的決策總能帶來立竿見影的成果，是 NeutroCorp 不可或缺的問題解決者。",
          details: [
            `務實效率指數: ${pragmatismScore}`,
            `一致性指數: ${conformityScore}`,
            `公平正義指數: ${equityScore}`,
            "評價：結果至上，行動力強，但有時可能忽略過程中的人文關懷。"
          ],
          icon: <Zap className="w-16 h-16" />,
          colorClass: "bg-yellow-500",
        };
      } else if (conformityScore > 15 && equityScore > 15 && pragmatismScore > 15) {
        determinedEnding = {
          title: "中流砥柱：多方兼顧的協調者",
          description: "你在公司的期望、公平正義的呼聲以及現實的考量中找到了微妙的平衡。你是一位優秀的協調者，努力讓各方滿意。",
          details: [
            `一致性指數: ${conformityScore}`,
            `公平正義指數: ${equityScore}`,
            `務實效率指數: ${pragmatismScore}`,
            "評價：處事圓滑，適應力強，能在複雜環境中取得進展。"
          ],
          icon: <Users className="w-16 h-16" />,
          colorClass: "bg-purple-500",
        };
      } else {
        determinedEnding = {
          title: "探索者：仍在尋找自己的定位",
          description: "你在 NeutroCorp 的旅程充滿了各種嘗試。你的決策呈現出多元的面向，顯示出你仍在探索最適合自己的行事風格與價值觀。",
          details: [
            `一致性指數: ${conformityScore}`,
            `公平正義指數: ${equityScore}`,
            `務實效率指數: ${pragmatismScore}`,
            "評價：充滿可能性，需要進一步明確個人在組織中的核心價值。"
          ],
          icon: <TrendingUp className="w-16 h-16" />,
          colorClass: "bg-gray-500",
        };
      }
      setEnding(determinedEnding);
      console.log('[GameEndingDisplay] 最終結局已設定:', determinedEnding);

    } catch (error) {
      console.error('[GameEndingDisplay] useEffect 內部發生錯誤:', error);
      setStats(null); 
      setEnding({
        title: "發生未知錯誤",
        description: "處理遊戲結局時發生了未預期的錯誤。請檢查瀏覽器控制台以獲取詳細的錯誤訊息。",
        details: [`錯誤訊息: ${error instanceof Error ? error.message : String(error)}`],
        icon: <Zap className="w-16 h-16 text-red-700" />,
        colorClass: "bg-red-800",
      });
      console.log('[GameEndingDisplay] 「未知錯誤」結局已設定。');
    }
    console.log('[GameEndingDisplay] useEffect 執行完畢。');
  }, []);

  console.log('[GameEndingDisplay] 組件渲染前狀態: stats =', stats, ', ending =', ending);

  if (!stats && !ending) {
    console.log('[GameEndingDisplay] 渲染載入畫面 (原因: stats 和 ending 皆為 null)。');
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        <p className="ml-4 text-gray-700">正在計算您的最終評估...</p>
      </div>
    );
  }
  
  if (!ending) { 
    console.log('[GameEndingDisplay] 渲染載入畫面 (原因: ending 為 null，stats 可能有值)。');
     return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        <p className="ml-4 text-gray-700">正在準備結局畫面...</p>
      </div>
    );
  }
  
  console.log('[GameEndingDisplay] 渲染主要結局內容。');
  return (
    <motion.div 
      // initial={{ opacity: 0, scale: 0.9 }} 
      // animate={{ opacity: 1, scale: 1 }} 
      // transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-800 to-neutral-900 flex items-center justify-center p-4 md:p-8"
    >
      <div className={`w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden`}>
        {/* Removed: transform transition-all duration-500 hover:scale-105 for debugging */}
        <div className={`p-6 md:p-8 ${ending.colorClass} text-white flex flex-col items-center text-center`}>
          <motion.div 
            // initial={{ scale: 0 }} 
            // animate={{ scale: 1 }} 
            // transition={{ delay: 0.2, duration: 0.5 }}
          >
            {ending.icon}
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{ending.title}</h1>
        </div>
        
        <div className="p-6 md:p-8 space-y-6 bg-gray-50">
          <p className="text-lg text-gray-700 leading-relaxed text-center">{ending.description}</p>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <BarChart className="mr-2 h-6 w-6 text-indigo-600" />
              最終指數評估：
            </h2>
            <ul className="space-y-3 text-gray-700">
              {ending.details.map((detail, index) => (
                <motion.li 
                  key={index} 
                  // initial={{ opacity: 0, x: -20 }}
                  // animate={{ opacity: 1, x: 0 }}
                  // transition={{ delay: 0.1 * index + 0.5 }}
                  className={`p-3 rounded-md ${index < 3 ? 'bg-indigo-50' : 'bg-gray-100'} border ${index < 3 ? 'border-indigo-200' : 'border-gray-200'}`}
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <p className="text-sm text-gray-500 text-center mt-8">
            感謝您參與 NeutroCorp 模擬評估。您的每一個選擇都塑造了獨特的結果。
          </p>

           {/* 可以考慮添加一個「重新開始」的按鈕 */}
           <div className="text-center mt-8">
            <button
              onClick={() => window.location.href = '/'}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              返回首頁重新開始
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 