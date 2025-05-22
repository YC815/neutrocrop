'use client'

import { useSearchParams } from 'next/navigation';
import ResultEmail from '@/app/email/ResultEmail';

export default function ResultEmailPage() {
  const searchParams = useSearchParams();
  const proposalId = searchParams.get('proposal') || 'b'; // 默認為B方案

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ResultEmail selectedProposalId={proposalId} />
    </div>
  );
} 