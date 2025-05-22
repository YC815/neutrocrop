'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function StartButton() {
    const router = useRouter()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6 }}
        >
            <Button
                onClick={() => router.push('/mission')}
                variant="default"
                className="mt-12 px-6 py-3 font-bold"
            >
                開始遊戲
            </Button>
        </motion.div>
    )
} 