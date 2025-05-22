import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const proposals = [
  {
    id: "a",
    title: "族語振興與雙語教材計畫",
    content: "出版族語教材，推動雙語教育，文化保存與族群自尊。",
    cost: 480000,
    tag: "理念導向",
  },
  {
    id: "b",
    title: "文化形象包裝訓練營",
    content: "統一員工口語、儀容與社交形象，避免文化爭議。",
    cost: 90000,
    tag: "制度導向",
  },
  {
    id: "c",
    title: "社區共融藝術牆計畫",
    content: "居民與藝術家共創公共藝術，反映多元文化。",
    cost: 250000,
    tag: "中庸創意",
  },
];

interface ProposalDecisionProps {
  onSubmit?: (selectedId: string) => void;
}

export default function ProposalDecision({ onSubmit }: ProposalDecisionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6 text-stone-900">📋 請審查下列提案，選擇其中一案蓋章通過：</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative overflow-hidden">
        <AnimatePresence>
          {proposals.map((p, index) => {
            const isSelected = selectedId === p.id;
            const isOther = submitted && !isSelected;

            return (
              <motion.div
                
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isSelected ? 1.03 : 1,
                }}
                exit={
                  isOther
                    ? {
                        x: 300,
                        y: -200,
                        opacity: 0,
                        rotate: 15,
                        transition: { 
                          duration: 0.6, 
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        },
                      }
                    : {}
                }
                whileHover={!submitted && !isSelected ? { scale: 1.02 } : {}}
                className={`relative p-4 rounded-xl border-2 shadow transition duration-300 bg-white cursor-pointer ${
                  isSelected
                    ? "border-green-600 bg-green-50 z-10"
                    : submitted
                    ? "z-0 opacity-90"
                    : "hover:border-blue-400"
                }`}
                onClick={() => !submitted && setSelectedId(p.id)}
              >
                <h2 className="text-lg font-semibold mb-2 text-stone-900">{p.title}</h2>
                <p className="text-sm mb-2 text-stone-900">{p.content}</p>
                <div className="text-sm text-gray-500 mb-2">
                  💰 預算需求：${p.cost.toLocaleString()}
                </div>
                <div className="absolute top-2 right-2 text-xs bg-gray-200 rounded-full px-2 py-1">
                  {p.tag}
                </div>

                {submitted && isSelected && (
                  <motion.div
                    initial={{ scale: 0, rotate: -20, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1],
                      rotate: [-30, 10, 0],
                      opacity: 1
                    }}
                    transition={{ 
                      duration: 0.7,
                      times: [0, 0.6, 1],
                      type: "spring", 
                      stiffness: 400, 
                      damping: 12 
                    }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="relative">
                      <motion.div 
                        className="text-7xl text-red-600 font-bold opacity-80"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 2 
                        }}
                      >
                        ✓
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="absolute -top-10 -right-24 text-red-600 text-2xl font-bold transform rotate-12"
                      >
                        已批准
                      </motion.div>
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.15 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="absolute -inset-8 border-4 border-red-600 rounded-lg"
                      />
                    </div>
                  </motion.div>
                )}
                
                {isOther && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="absolute inset-0 bg-red-50 flex items-center justify-center"
                  >
                    <div className="text-red-400 text-2xl">❌</div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {!submitted && selectedId && (
        <div className="text-right mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 bg-black text-white rounded-xl"
            onClick={() => {
              setSubmitted(true);
              setTimeout(() => {
                onSubmit?.(selectedId);
              }, 1500); // 等動畫結束
            }}
          >
            🖋️ 蓋章並通過此提案
          </motion.button>
        </div>
      )}
    </div>
  );
} 