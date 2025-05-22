'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function MissionPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold mb-8">任務指引</h1>
            <p className="mb-8 text-lg">這裡將會是任務指引頁面</p>
            <Button onClick={() => router.push('/')}>回到首頁</Button>
        </div>
    )
} 