'use client'
import { Card, CardContent } from '@/components/ui/card'

export default function ApplicantCard({
  data,
  onOpenResume,
  disabled,
}: {
  data: { name: string; photo: string; description: string }
  onOpenResume: () => void
  disabled: boolean
}) {
  return (
    <div 
      className={`cursor-pointer ${disabled ? 'opacity-50 pointer-events-none' : ''}`} 
      onClick={onOpenResume}
    >
      <Card className="bg-white text-black hover:shadow-lg transition-shadow">
        <CardContent className="p-4 space-y-2 flex flex-col items-center">
          <img src={data.photo} alt={data.name} className="w-24 h-24 rounded-full object-cover" />
          <h2 className="font-bold text-lg">{data.name}</h2>
          <p className="text-sm text-center text-gray-600">{data.description}</p>
        </CardContent>
      </Card>
    </div>
  )
} 