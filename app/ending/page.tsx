'use client'

import GameEndingDisplay from '../components/GameEndingDisplay';
import { Suspense } from 'react';

export default function EndingPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
        <p className="ml-4 text-xl font-semibold text-white">準備揭曉您的最終評估...</p>
      </div>
    }>
      <GameEndingDisplay />
    </Suspense>
  );
} 