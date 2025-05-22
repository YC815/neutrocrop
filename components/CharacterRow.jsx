'use client'
import { motion } from 'framer-motion'

const characters = [
    '👳‍♂️', // 戴頭巾者
    '👩‍🦽', // 坐輪椅者
    '👘',   // 和服/文化服飾
    '👨‍🦲', // 有刺青男子
    '👱‍♂️', // 白人男性（中間）
]

export default function CharacterRow() {
    return (
        <div className="flex gap-4 justify-center mb-6">
            {characters.map((char, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3 }}
                    className="text-4xl"
                >
                    {char}
                </motion.div>
            ))}
        </div>
    )
} 