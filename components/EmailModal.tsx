'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Avatar } from '@/components/ui/avatar'
import { CalendarDays, Paperclip } from 'lucide-react'

export default function EmailModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const router = useRouter()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white text-black max-w-xl">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">NeutroCorp 任務提醒</DialogTitle>
            <div className="flex items-center text-sm text-gray-500">
              <CalendarDays className="w-4 h-4 mr-1" />
              {new Date().toLocaleDateString('zh-TW')}
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {/* 寄件者資訊 */}
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <div className="bg-blue-100 h-full w-full flex items-center justify-center text-blue-600 font-bold">
                HR
              </div>
            </Avatar>
            <div>
              <p className="font-semibold">HR Department</p>
              <p className="text-sm text-gray-500">hr@neutrocrop.com</p>
            </div>
          </div>

          {/* 收件者資訊 */}
          <div className="text-sm text-gray-600">
            <p>收件者：文化顧問</p>
          </div>

          {/* 郵件內容 */}
          <div className="space-y-4 border-t pt-4">
            <p>Hi，文化顧問：</p>
            <p>我們希望你協助人事部門在三位應徵者中做出最佳決策，並兼顧公司形象。</p>
            <p>請根據資料，判斷誰最適合我們的品牌理念。</p>
          </div>

          {/* 附件 */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 border-t pt-4">
            <Paperclip className="w-4 h-4" />
            <span>應徵者資料.pdf</span>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button 
            onClick={() => router.push('/stage/1')}
            className="w-full"
            size="lg"
            variant="default"
          >
            前往任務
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 