'use client'
import { motion } from 'framer-motion'

export default function IntroText({ lines }) {
    return (
        <div className="space-y-4 text-lg leading-relaxed">
            {lines.map((line, i) => (
                <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 2 }}
                >
                    {line}
                </motion.p>
            ))}
        </div>
    )
} 