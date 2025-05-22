import Link from "next/link"

export default function TaskBriefing4() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xl mr-4">
          📩
        </div>
        <div>
          <h2 className="font-bold text-xl text-stone-900">📩 第四關：文化提案審核會議</h2>
          <p className="text-gray-500">我們收到三份社區文化提案，請選擇一份通過執行。</p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4 mb-6">
        <p className="mb-4 text-stone-800">
          Hi，<span className="font-semibold">協理</span>，以下三份文化改善提案都來自一線同仁，涵蓋公平正義、公共形象、與執行可行性。
        </p>
        <p className="mb-4 text-stone-800">
          由於預算有限，請選擇其中一案通過。我們相信你能做出符合「社會共識與公司制度」的選擇。
        </p>
      </div>
      
      <div className="text-right">
        <Link href="/stage/4">
          <button className="bg-black text-white px-5 py-2 rounded-lg">
            前往審查提案 ➜
          </button>
        </Link>
      </div>
    </div>
  )
} 