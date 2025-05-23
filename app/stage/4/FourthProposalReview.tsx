'use client'

import { useState } from "react"
import ProposalDecision from "./ProposalDecision"
import ResultFeedback from "./ResultFeedback"

export default function FourthProposalReview() {
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  const handleSelect = (proposalId: string) => {
    setSelectedProposal(proposalId)
  }

  const handleSubmit = () => {
    setIsComplete(true)
  }

  if (isComplete && selectedProposal) {
    return <ResultFeedback selectedProposalId={selectedProposal} />
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <ProposalDecision 
        onSelect={handleSelect} 
        onSubmit={handleSubmit}
        selectedId={selectedProposal}
      />
    </div>
  )
} 