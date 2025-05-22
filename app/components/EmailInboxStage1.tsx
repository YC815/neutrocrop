'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Inbox, 
  Star, 
  Send, 
  Trash, 
  Search, 
  Settings,
  ChevronDown,
  Clock,
  Paperclip
} from 'lucide-react'

interface Email {
  id: string
  title: string
  preview: string
  readOnly?: boolean
  time: string
}

export default function EmailInboxStage1() {
  const router = useRouter()
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const emails: Email[] = [
    {
      id: "task_briefing_1",
      title: "第一關：人才評估決策",
      preview: "Hi，文化顧問：我們希望你協助人事部門在三位應徵者中做出最佳決策，並兼顧公司形象。請根據資料，判斷誰最適合我們的品牌理念。",
      readOnly: false,
      time: "09:35 AM"
    }
  ]

  const handleEmailClick = (emailId: string) => {
    if (emailId === "task_briefing_1") {
      router.push('/email/task-briefing-1')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen">
        {/* 側邊欄 */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 240 }}
          className="bg-white border-r border-gray-300 p-4"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-medium text-gray-800">NeutroCorp</span>
            </div>
            
            <nav className="space-y-1">
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Inbox size={20} />
                <span>收件匣</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 border border-transparent hover:border-gray-200">
                <Star size={20} />
                <span>已加星標</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 border border-transparent hover:border-gray-200">
                <Send size={20} />
                <span>已發送</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 border border-transparent hover:border-gray-200">
                <Trash size={20} />
                <span>垃圾桶</span>
              </button>
            </nav>
          </div>
        </motion.div>

        {/* 主要內容區 */}
        <div className="flex-1 flex flex-col">
          {/* 頂部工具列 */}
          <div className="h-14 border-b border-gray-300 bg-white px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  placeholder="搜尋郵件..." 
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 border border-gray-200">
                <Settings size={20} className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* 郵件列表 */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="max-w-4xl mx-auto p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between border-b border-gray-300 pb-4">
                  <h2 className="text-xl font-semibold text-gray-800">收件匣</h2>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{emails.length} 封郵件</span>
                </div>
                
                {emails.map((email) => (
                  <motion.div 
                    key={email.id}
                    className="border border-gray-300 rounded-lg hover:shadow-md transition-shadow bg-white cursor-pointer"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onClick={() => handleEmailClick(email.id)}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                            N
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">NeutroCorp HR</h3>
                            <p className="text-sm text-gray-600">hr@neutrocorp.com</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-gray-500" />
                          <span className="text-sm text-gray-600">{email.time}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-medium mb-2 text-gray-800">{email.title}</h4>
                        <p className="text-gray-700 mb-4">
                          {email.preview}
                        </p>
                        {!email.readOnly && (
                          <div className="flex items-center justify-end">
                            <button 
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleEmailClick(email.id)
                              }}
                              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center space-x-2 border border-indigo-700"
                            >
                              <span>查看詳情</span>
                              <ChevronDown size={16} className="transform rotate-90" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 