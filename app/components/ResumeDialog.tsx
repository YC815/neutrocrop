'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog' // 假設 ShadCN UI Dialog
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface ResumeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resumePath: string;
}

export default function ResumeDialog({ open, onOpenChange, resumePath }: ResumeDialogProps) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (open && resumePath) {
      fetch(resumePath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((text) => setMarkdown(text))
        .catch((error) => {
          console.error("Error fetching resume:", error);
          setMarkdown("無法載入履歷內容。");
        });
    }
  }, [open, resumePath]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl text-gray-800">應徵者履歷</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none py-4 max-h-[70vh] overflow-y-auto text-gray-700">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
        <DialogFooter className="mt-6">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)} 
            className="border-gray-300"
            size="default"
          >
            關閉
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 