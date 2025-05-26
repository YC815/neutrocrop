'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Applicant } from '../../data/applicants' // 注意路徑
import { Button } from '@/components/ui/button'

interface ApplicantCardProps {
  data: Applicant;
  onOpenResume: () => void;
  onSelect: () => void;
  disabled?: boolean;
  selected?: boolean;
}

export default function ApplicantCard({ data, onOpenResume, onSelect, disabled, selected }: ApplicantCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 ${selected ? 'border-indigo-600' : 'border-transparent'} ${disabled && !selected ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="p-5">
        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-2 ring-offset-2 ${selected ? 'ring-indigo-500' : 'ring-gray-200'}">
          {data.photo && <Image src={data.photo} alt={data.name} layout="fill" objectFit="cover" />}
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{data.name}</h3>
        <p className="text-sm text-gray-600 text-center mb-4 h-20 overflow-y-auto">{data.description}</p>
        <div className="flex flex-col space-y-2">
          <Button 
            variant="outline" 
            onClick={onOpenResume} 
            disabled={disabled}
            className="w-full"
            size="sm"
          >
            查看履歷
          </Button>
          <Button 
            onClick={onSelect} 
            disabled={disabled || selected}
            className={`w-full ${selected ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            size="sm"
          >
            {selected ? '已選擇' : '選擇此人'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 