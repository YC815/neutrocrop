'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ProposalDecision from '@/components/ProposalDecision';

export default function TaskBriefing4() {
  const router = useRouter();
  const [showProposal, setShowProposal] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null);

  const handleProposalSubmit = (proposalId: string) => {
    setSelectedProposal(proposalId);
    setShowProposal(false);
    setShowFeedback(true);
  };

  const handleBackToInbox = () => {
    router.push('/inbox');
  };

  const handleStartReflection = () => {
    if (selectedProposal) {
      router.push(`/email/result-email?proposal=${selectedProposal}`);
    }
  };

  return (
    <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
      {!showProposal && !showFeedback && (
        <div className="p-6">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">📩 第四關：文化提案審核會議</h1>
              <span className="text-sm text-gray-500">今天 15:20 PM</span>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              <div>
                <h2 className="font-medium text-stone-900">NeutroCorp HR</h2>
                <p className="text-sm text-gray-600">hr@neutrocorp.com</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">收件者：你</p>
          </div>

          <div className="prose max-w-none mb-8 text-stone-900">
            <p>親愛的文化顧問：</p>
            <p>我們已經收到三份社區文化提案，這些提案都來自基層同仁，但預算和定位各有差異。按照公司政策，我們需要在本週內選出一份進行實施。</p>
            <p>由於你在前幾輪的決策中展現了敏銳的判斷力，董事會特別指派你擔任本次審核的最終決策者。</p>
            <p><strong>請注意：</strong></p>
            <ul>
              <li>三份提案都具有其可行性，但實際執行的價值取向各有不同</li>
              <li>每份提案所需預算與其定位相符，請考量公司資源分配的最佳方案</li>
              <li>你的決策將影響公司整體文化形象走向，請慎重考慮</li>
            </ul>
            <p>點擊下方按鈕開始審核流程。請記住，根據公司規定，一旦蓋章通過某一提案，其餘提案將自動歸檔淘汰。</p>
            <p>期待你的明智決策。</p>
            <p className="font-medium">NeutroCorp 文化與創新部</p>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg"
              onClick={() => setShowProposal(true)}
            >
              前往審查提案
            </motion.button>
          </div>
        </div>
      )}

      {showProposal && (
        <ProposalDecision onSubmit={handleProposalSubmit} />
      )}

      {showFeedback && selectedProposal && (
        <div className="p-6">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">
                {selectedProposal === 'a' && '【預算部提醒】請盡快準備本案補充說明文件'}
                {selectedProposal === 'b' && '【讚賞】形象決策執行力極佳！'}
                {selectedProposal === 'c' && '【觀望中】請補充風險評估報告'}
              </h1>
              <span className="text-sm text-gray-500">今天 15:45 PM</span>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              <div>
                <h2 className="font-medium text-stone-700">NeutroCorp</h2>
                <p className="text-sm text-gray-600">
                  {selectedProposal === 'a' && 'budget@neutrocorp.com'}
                  {selectedProposal === 'b' && 'brand@neutrocorp.com'}
                  {selectedProposal === 'c' && 'risk@neutrocorp.com'}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600">收件者：你</p>
          </div>

          <div className="prose max-w-none mb-8 text-stone-900">
            {selectedProposal === 'a' && (
              <div>
                <p>我們收到你所審核通過的《族語振興與雙語教材計畫》。雖然該案符合某些社群期待，但我們注意到其預算佔比偏高，恐影響其他更具形象導向的項目。</p>
                <p>為確保形象與效益並重，請盡速提供以下內容：</p>
                <ul>
                  <li>社會回響預測報告（需具體提及媒體可見度）</li>
                  <li>預算壓縮版本提案（含刪減項目與可替代方案）</li>
                  <li>若未通過高層審議，將視同撤案處理</li>
                </ul>
                <p className="font-medium">NeutroCorp 預算管理處</p>
              </div>
            )}

            {selectedProposal === 'b' && (
              <div>
                <p>太棒了！你選擇的《文化形象包裝訓練營》是我們過去一週內最有效率的審核結果之一。</p>
                <p>該案不僅經費效益卓越，更充分展現我們公司對「統一形象管理」的堅持。</p>
                <p>接下來將進行快速部署，相關流程請參考附件。</p>
                <p>我們期待你未來能持續展現判斷敏銳與決策效率！</p>
                <p className="font-medium">NeutroCorp 品牌與內控辦公室</p>
              </div>
            )}

            {selectedProposal === 'c' && (
              <div>
                <p>我們收到《共融藝術牆計畫》，初步評估為創意中等、形象風險可控。</p>
                <p>但仍需留意以下問題：</p>
                <ul>
                  <li>牆面圖像是否會引起不必要聯想（請列舉審核標準）</li>
                  <li>涉及「社區共創」時，是否可能失控或出現違規內容</li>
                  <li>政治符號審查標準是否明訂</li>
                </ul>
                <p>請補交修訂計畫，我們將擇期重新審議。</p>
                <p className="font-medium">NeutroCorp 政策與風險評估組</p>
              </div>
            )}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg"
              onClick={handleStartReflection}
            >
              開始最終反思
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
} 