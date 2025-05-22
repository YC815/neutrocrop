'use client'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function ApplicantCard({
  data,
  onOpenResume,
  onSelect,
  disabled,
  selected,
}: {
  data: { name: string; photo: string; description: string }
  onOpenResume: () => void
  onSelect: () => void
  disabled: boolean
  selected: boolean
}) {
  return (
    <div className={`transform transition-all duration-200 hover:scale-105 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      <Card className="bg-white text-black hover:shadow-lg transition-shadow">
        <CardContent className="p-6 space-y-4 flex flex-col items-center">
          <div
            className="w-full flex flex-col items-center cursor-pointer"
            onClick={onOpenResume}
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
              <Image
                src={data.photo}
                alt={data.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <h2 className="font-bold text-xl text-gray-800">{data.name}</h2>
            <p className="text-sm text-center text-gray-600 leading-relaxed">{data.description}</p>
          </div>
          <button
            className={`mt-4 w-full py-2 rounded ${selected ? 'bg-green-600' : 'bg-indigo-600'} text-white font-bold`}
            onClick={e => {
              e.stopPropagation();
              onSelect();
            }}
            disabled={disabled}
          >
            {selected ? '已選擇' : '選擇此人'}
          </button>
        </CardContent>
      </Card>
    </div>
  )
} 