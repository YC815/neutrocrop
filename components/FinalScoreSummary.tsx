'use client'

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ScoreSummary = {
  totalChoices: number;
  minorityChoices: number;
  conformityScore: number; // 趨近公司喜好
  justificationBias: string; // 偏好白人/低成本/可溝通等
};

// 模擬來自遊戲狀態的數據
const defaultSummary: ScoreSummary = {
  totalChoices: 10,
  minorityChoices: 3,
  conformityScore: 76,
  justificationBias: "白人、說得出話的人、有社會地位的人",
};

export default function FinalScoreSummary({ 
  data = defaultSummary,
  onComplete,
}: { 
  data?: ScoreSummary,
  onComplete?: () => void,
}) {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
    onComplete?.();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white min-h-screen p-8 flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl font-bold mb-6">📊 偏見決策報告</h1>
      
      <motion.ul 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-4 text-lg"
      >
        <li>🧠 你總共做出 {data.totalChoices} 次決策</li>
        <li>🤝 其中有 {data.minorityChoices} 次選擇了少數族群（{Math.round(data.minorityChoices/data.totalChoices*100)}%）</li>
        <li>📈 決策偏向符合公司形象：{data.conformityScore}%</li>
        <li>🔎 傾向選擇：{data.justificationBias}</li>
      </motion.ul>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-12 text-xl italic text-center max-w-md"
      >
        「真正的公平，是否也包括拒絕妥協制度化的偏見？」
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="mt-10 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors"
        onClick={navigateToHome}
      >
        返回首頁 ➜
      </motion.button>
    </motion.div>
  );
} 