'use client'

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const reflections = [
  {
    speaker: "穆斯林應徵者",
    content: "我一直以為我進不了這家公司，是我自己不夠好。",
  },
  {
    speaker: "黑人學生",
    content: "我不是第一志願，但我仍努力去證明我的價值。",
  },
  {
    speaker: "拉丁醫護人員",
    content: "你選了我，是因為我的能力，還是因為我剛好不是白人？",
  },
];

export default function FinalReflectionAnimation({ onComplete }: { onComplete?: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < reflections.length) {
      const t = setTimeout(() => setIndex(i => i + 1), 4000);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => onComplete?.(), 3000);
    }
  }, [index, onComplete]);

  return (
    <div className="bg-gradient-to-b from-blue-950 to-gray-950 text-white min-h-screen flex flex-col justify-center items-center px-8">
      {index > 0 && reflections.slice(0, index).map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-center max-w-xl"
        >
          <div className="text-sm text-gray-400 mb-1">— {r.speaker}</div>
          <div className="text-lg italic">「{r.content}」</div>
        </motion.div>
      ))}

      {index >= reflections.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 text-xl font-bold text-white"
        >
          你做了正確的選擇嗎？<br />還是只是做了大家期望你做的選擇？
        </motion.div>
      )}
    </div>
  );
} 