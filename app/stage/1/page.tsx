'use client'
import { useState, useEffect } from 'react'
import { applicants } from '@/data/applicants'
import FeedbackDialog from '@/components/FeedbackDialog'
import ApplicantCard from '@/components/ApplicantCard'
import ResumeDialog from '@/components/ResumeDialog'

export default function StageOne() {
  const [mounted, setMounted] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [viewingId, setViewingId] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getPath = (id: string) => `/data/resumes/${id}.md`

  // 初始渲染時顯示載入狀態
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center h-[50vh]">
            <div className="text-gray-600">載入中...</div>
          </div>
        </div>
      </div>
    )
  }

  // 客戶端渲染時顯示完整內容
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">第一關：應徵者評估</h1>
        <p className="text-gray-600 text-center mb-8">
          請仔細閱讀每位應徵者的履歷，選擇最適合的人選。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applicants.map((applicant) => (
            <ApplicantCard
              key={applicant.id}
              data={applicant}
              onOpenResume={() => setViewingId(applicant.id)}
              disabled={!!selectedId}
            />
          ))}
        </div>

        <ResumeDialog
          open={!!viewingId}
          onOpenChange={() => setViewingId(null)}
          resumePath={viewingId ? getPath(viewingId) : ''}
          onSelect={() => {
            setSelectedId(viewingId)
            setViewingId(null)
          }}
        />

        <FeedbackDialog selectedId={selectedId} />
      </div>
    </div>
  )
} 