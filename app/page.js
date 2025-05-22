"use client";
import { motion } from "framer-motion";
import IntroText from "@/components/IntroText";
import CharacterRow from "@/components/CharacterRow";
import StartButton from "@/components/StartButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        NeutroCorp 面試現場
      </motion.h1>

      <CharacterRow />

      <div className="mt-8 max-w-2xl">
        <IntroText
          lines={[
            "你正坐在一間全球企業的面試現場。",
            "你的左右是來自各種文化背景的應徵者。",
            "你聽到身旁白人小聲說：「他們是來交差還是來工作的？」",
          ]}
        />
      </div>

      <StartButton />
    </main>
  );
}
