'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { applicants, Applicant } from '../../data/applicants' // 注意路徑
import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react';

interface FeedbackDialogProps {
  selectedId: string | null;
  onComplete: () => void;
}

export default function FeedbackDialog({ selectedId, onComplete }: FeedbackDialogProps) {
  const selectedApplicant = applicants.find(app => app.id === selectedId);

  if (!selectedApplicant) {
    return null; // 或者顯示一個錯誤狀態
  }

  const isCompanyPreferred = selectedApplicant.companyPreferred;

  // 根據選擇和公司偏好來定制化反饋內容
  let title = "";
  let description = "";
  let IconComponent = CheckCircle;
  let iconColor = "text-green-500";

  if (isCompanyPreferred) {
    title = "明智的選擇！";
    description = `您選擇的 ${selectedApplicant.name} 符合公司的期望。您的判斷力得到了初步肯定。`;
    IconComponent = CheckCircle;
    iconColor = "text-green-500";
  } else {
    title = "一個有趣的選擇...";
    description = `您選擇的 ${selectedApplicant.name} 展現了您獨特的視角。公司鼓勵多元思考，期待您在後續任務中的表現。`;
    IconComponent = CheckCircle; // 即使非偏好，也顯示正面圖標，但措辭不同
    iconColor = "text-blue-500"; 
  }

  // 如果需要，可以加入更複雜的邏輯，例如，如果選了一個有紀律問題的人，給出特定警告
  // if (selectedApplicant.id === 'white' && !isCompanyPreferred) { // 假設 'white' ID 有紀律問題但此處他是偏好的，所以此邏輯不會觸發
  //   title = "提醒您...";
  //   description = `${selectedApplicant.name} 雖然能力出眾，但請留意其過往的紀律記錄。在 NeutroCorp，我們重視團隊合作與規範。`;
  //   IconComponent = XCircle;
  //   iconColor = "text-yellow-500";
  // }

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onComplete()}>
      <DialogContent className="bg-white">
        <DialogHeader className="text-center items-center">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }}>
            <IconComponent className={`w-16 h-16 ${iconColor} mb-4`} />
          </motion.div>
          <DialogTitle className="text-2xl font-semibold text-gray-800">{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-gray-600 text-center my-4">
          {description}
        </DialogDescription>
        <DialogFooter className="justify-center">
          <Button 
            onClick={onComplete} 
            className="bg-indigo-600 hover:bg-indigo-700"
            size="lg"
          >
            繼續任務
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 