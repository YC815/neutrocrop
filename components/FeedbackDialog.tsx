'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const feedback = {
  black: '你真的覺得這選擇對我們形象有幫助嗎？',
  asian: '希望她不要太內向，能展現一點領導力。',
  white: '你很會看整體氛圍，期待未來一起努力！',
}

export default function FeedbackDialog({
  selectedId,
  onComplete,
}: {
  selectedId: string | null
  onComplete: () => void
}) {
  const open = !!selectedId

  return (
    <Dialog open={open}>
      <DialogContent className="bg-white text-black max-w-xl">
        <DialogHeader className="">
          <DialogTitle className="">來自行銷主管的私信</DialogTitle>
        </DialogHeader>
        <p>{selectedId ? feedback[selectedId as keyof typeof feedback] : ''}</p>
        <DialogFooter className="mt-4">
          <Button 
            onClick={onComplete}
            variant="default"
            size="default"
            className=""
          >
            前往下一關
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 