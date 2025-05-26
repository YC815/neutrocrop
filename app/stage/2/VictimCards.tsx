'use client'

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Round, Victim } from "../../types/victim"
import { rounds } from "../../data/victims"

interface VictimCardsProps {
  onSelect: (id: string) => void
  onRoundComplete: (round: Round, selectedId: string) => void
  onAllRoundsComplete?: () => void;
}

export default function VictimCards({ onSelect, onRoundComplete, onAllRoundsComplete }: VictimCardsProps) {
  const TOTAL_ROUNDS = rounds.length;
  const [currentRound, setCurrentRound] = useState(1);
  const [timer, setTimer] = useState(10);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [victims, setVictims] = useState<Round['victims']>([]);

  // 隨機打亂受害者順序
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // 受害者的反應訊息
  const getVictimReaction = (victim: Victim): string => {
    const highUrgencyReactions = [
      "我快不行了...",
      "求求你，救救我！",
      "我感覺不到我的腿了...",
      "好痛苦，請幫幫我...",
      "我需要立刻就醫！"
    ]
    
    const lowUrgencyReactions = [
      "為什麼不先救我？",
      "你知道我是誰嗎？",
      "我有權利優先被救治！",
      "我需要立刻恢復工作！",
      "這是歧視！"
    ]
    
    return victim.urgency >= 4 ? 
      highUrgencyReactions[Math.floor(Math.random() * highUrgencyReactions.length)] : 
      lowUrgencyReactions[Math.floor(Math.random() * lowUrgencyReactions.length)]
  }

  // useEffect 鉤子：當 currentRound 變化時執行，用於加載該回合的受害者數據並重置狀態
  useEffect(() => {
    console.log(`[VictimCards] New round effect. currentRound: ${currentRound}, TOTAL_ROUNDS: ${TOTAL_ROUNDS}`);

    if (currentRound > TOTAL_ROUNDS) {
      console.log(`[VictimCards] currentRound (${currentRound}) > TOTAL_ROUNDS (${TOTAL_ROUNDS}). All rounds should be complete.`);
      if (onAllRoundsComplete) {
        console.log("[VictimCards] Calling onAllRoundsComplete from new round effect.");
        onAllRoundsComplete();
      }
      return; // 如果已經超過總輪數，則不執行後續的設置
    }

    // 清除上一輪的選擇並重設計時器
    setSelectedId(null);
    setTimer(10);
    console.log(`[VictimCards] New round setup: selectedId reset to null, timer reset to 10. For round: ${currentRound}`);

    const roundData = rounds.find(r => r.id === currentRound);
    if (roundData) {
      console.log(`[VictimCards] Loading and shuffling victims for new round ${currentRound}. Found ${roundData.victims.length} victims.`);
      setVictims(shuffleArray(roundData.victims));
    } else {
      console.warn(`[VictimCards] Effect for new round: Could not find roundData for currentRound: ${currentRound}. This could happen if currentRound > TOTAL_ROUNDS.`);
    }
  // 依賴 currentRound 和 onAllRoundsComplete。TOTAL_ROUNDS 是常數。
  // onAllRoundsComplete 應該由父組件用 useCallback 包裹以保持引用穩定。
  }, [currentRound, onAllRoundsComplete, TOTAL_ROUNDS]);

  const handleSelect = useCallback((id: string) => {
    console.log(`[VictimCards] handleSelect called. ID: ${id}, Current selectedId: ${selectedId}, Current round: ${currentRound}`);
    if (selectedId) {
      console.log(`[VictimCards] handleSelect returning early. selectedId (${selectedId}) is already set for round ${currentRound}.`);
      return;
    }
    
    setSelectedId(id);
    console.log(`[VictimCards] setSelectedId called with: ${id}. currentRound: ${currentRound}`);
    
    const roundData = rounds.find(r => r.id === currentRound);
    if (roundData) {
      onSelect(id); // 呼叫 onSelect (雖然目前為空，但保持一致性)
      onRoundComplete(roundData, id);
    } else {
      console.warn(`[VictimCards] handleSelect: Could not find roundData for currentRound: ${currentRound} when calling onRoundComplete.`);
    }

    setTimeout(() => {
      // 使用函數式更新來安全地推進回合，並在回調中檢查是否所有回合已完成
      setCurrentRound(prevRound => {
        console.log(`[VictimCards] setTimeout callback. prevRound: ${prevRound}, TOTAL_ROUNDS: ${TOTAL_ROUNDS}`);
        // 即使 prevRound 達到 TOTAL_ROUNDS，我們仍然推進到下一輪 (TOTAL_ROUNDS + 1)
        // 這樣 useEffect [currentRound, ...] 才能捕獲到 currentRound > TOTAL_ROUNDS 的情況
        const nextRound = prevRound + 1;
        if (prevRound < TOTAL_ROUNDS) {
          console.log(`[VictimCards] setTimeout: Advancing from round ${prevRound} to ${nextRound}`);
        } else {
          // prevRound === TOTAL_ROUNDS (例如第10輪結束)
          console.log(`[VictimCards] setTimeout: Advancing from final round ${prevRound} to ${nextRound} (which is > TOTAL_ROUNDS).`);
        }
        return nextRound; // 總是推進
      });
    }, 2000); // 2秒延遲
  // 把 currentRound 加回來，因為 setTimeout 外部邏輯依賴它來查找 roundData
  }, [selectedId, onSelect, onRoundComplete, TOTAL_ROUNDS, currentRound]); 

  // useEffect 鉤子：處理計時器邏輯
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    if (timer > 0 && !selectedId && currentRound <= TOTAL_ROUNDS) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0 && !selectedId && currentRound <= TOTAL_ROUNDS) {
      console.log(`[VictimCards] Timer ended for round ${currentRound}. Auto-selecting.`);
      const roundData = rounds.find(r => r.id === currentRound);
      if (roundData && roundData.victims.length > 0) {
        const mostUrgent = roundData.victims.reduce((prev, current) => (current.urgency > prev.urgency) ? current : prev, roundData.victims[0]);
        console.log(`[VictimCards] Timer auto-selecting victim ID: ${mostUrgent.id}, Name: ${mostUrgent.name} in round ${currentRound}.`);
        handleSelect(mostUrgent.id); // 自動選擇
      } else {
        console.warn(`[VictimCards] Timer auto-select: Could not find roundData or no victims for round ${currentRound}.`);
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  // handleSelect 的依賴改變了，這裡也需要包含 currentRound
  }, [timer, selectedId, currentRound, TOTAL_ROUNDS, handleSelect]);
  
  // 渲染邏輯
  if (currentRound > TOTAL_ROUNDS) {
    // 等待 onAllRoundsComplete 被調用並由父組件切換視圖
    // 或者直接返回 null，如果 ResultEmail 不是由此組件控制
    console.log("[VictimCards] Rendering null because currentRound > TOTAL_ROUNDS. Waiting for parent to switch view.");
    return null;
  }

  return (
    <div className="w-full max-w-6xl p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-black">
          第 {currentRound} 輪 / 共 {TOTAL_ROUNDS} 輪
        </h2>
        <div className="text-xl font-medium text-black">
          剩餘時間：{timer} 秒
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {victims.map((victim) => (
          <motion.div
            key={victim.id}
            className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all border-2 ${
              selectedId === victim.id ? 'border-green-500' : selectedId ? 'border-red-500' : 'border-gray-200'
            }`}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              console.log(`[VictimCards] Card clicked. Victim ID: ${victim.id}, Name: ${victim.name}. Current selectedId: ${selectedId}. currentRound: ${currentRound}`);
              if (currentRound <= TOTAL_ROUNDS) { // 只在遊戲進行中才允許選擇
                 handleSelect(victim.id);
              } else {
                 console.log("[VictimCards] Click ignored, game is over.");
              }
            }}
          >
            <div className="p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-black">{victim.name}</h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">
                  {victim.race}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{victim.description}</p>
              
              {selectedId && (
                <div className={`mt-2 p-2 rounded ${
                  selectedId === victim.id ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {selectedId === victim.id ? (
                    <p className="font-medium">救助中...</p>
                  ) : (
                    <p className="italic">{getVictimReaction(victim)}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 