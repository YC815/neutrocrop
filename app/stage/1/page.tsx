'use client'
import { useState, useEffect } from 'react'
import { applicants, Applicant } from '../../../data/applicants'
import FeedbackDialog from '../../components/FeedbackDialog'
import ApplicantCard from '../../components/ApplicantCard'
import dynamic from 'next/dynamic'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { updateStage1Selection } from '../../lib/gameStore'

// 使用動態導入確保 Dialog 組件只在客戶端渲染
const ResumeDialog = dynamic(
  () => import('../../components/ResumeDialog'),
  { ssr: false }
)

export default function StageOne() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [confirmingId, setConfirmingId] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [viewingId, setViewingId] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getPath = (id: string) => `/data/resumes/${id}.md`

  const handleSelection = () => {
    if (confirmingId) {
      const selectedApplicant = applicants.find(app => app.id === confirmingId);
      if (selectedApplicant) {
        updateStage1Selection(confirmingId, selectedApplicant.companyPreferred);
      }
      setSelectedId(confirmingId)
      setConfirmingId(null)
      setShowFeedback(true)
    }
  }

  const handleFeedbackComplete = () => {
    router.push('/email?stage=2')
  }

  // 添加 suppressHydrationWarning 屬性到外層容器
  return (
    <div className="min-h-screen bg-white p-6" suppressHydrationWarning>
      <div className="max-w-5xl mx-auto">
        {!mounted ? (
          <div className="flex items-center justify-center h-[50vh]">
            <div className="text-gray-600">載入中...</div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">第一關：應徵者評估</h1>
            <p className="text-gray-600 text-center mb-8">
              請仔細閱讀每位應徵者的履歷，選擇最適合的人選。<br />
              <span className="font-medium text-indigo-700">點擊面試者可以查看詳細履歷</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {applicants.map((applicant: Applicant) => (
                <ApplicantCard
                  key={applicant.id}
                  data={applicant}
                  onOpenResume={() => setViewingId(applicant.id)}
                  onSelect={() => setConfirmingId(applicant.id)}
                  disabled={!!selectedId}
                  selected={selectedId === applicant.id}
                />
              ))}
            </div>
            {mounted && viewingId && (
              <ResumeDialog
                open={!!viewingId}
                onOpenChange={() => setViewingId(null)}
                resumePath={viewingId ? getPath(viewingId) : ''}
              />
            )}
            <Dialog open={!!confirmingId} onOpenChange={(open: boolean) => !open && setConfirmingId(null)}>
              <DialogContent className="bg-white">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-xl text-black">確定要選擇此人嗎？</DialogTitle>
                </DialogHeader>
                <div className="flex justify-end gap-4 mt-6">
                  <Button variant="outline" size="default" className="border-gray-300" onClick={() => setConfirmingId(null)}>取消</Button>
                  <Button
                    className="bg-indigo-600 text-white"
                    variant="default"
                    size="default"
                    onClick={handleSelection}
                  >
                    確定
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            {showFeedback && (
              <FeedbackDialog 
                selectedId={selectedId} 
                onComplete={handleFeedbackComplete}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
} 