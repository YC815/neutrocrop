'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import MarkdownViewer from '@/components/MarkdownViewer'

export default function ResumeDialog({
  open,
  onOpenChange,
  resumePath,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  resumePath: string
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white text-black w-[90vw] max-w-[1200px] h-[90vh] flex flex-col">
        <DialogHeader className="border-b border-gray-200 pb-4 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-gray-800">應徵者履歷</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-scroll mt-6 bg-gray-50 p-6 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <MarkdownViewer path={resumePath} />
        </div>

        
      </DialogContent>
    </Dialog>
  )
} 