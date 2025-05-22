'use client'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function MarkdownViewer({ path }: { path: string }) {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error('無法載入履歷')
        return res.text()
      })
      .then(setContent)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [path])

  // 自定義圖片渲染
  const customRenderers = {
    img: ({ node, ...props }) => {
      return (
        <span className="block my-4 relative">
          {props.src ? (
            <img
              src={props.src}
              alt={props.alt || ""}
              className="mx-auto rounded shadow max-w-full h-auto max-h-[500px] object-contain"
              loading="lazy"
            />
          ) : (
            <img
              {...props}
              className="mx-auto rounded shadow max-w-full h-auto max-h-[500px] object-contain"
              loading="lazy"
            />
          )}
        </span>
      );
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        {error}
      </div>
    )
  }

  return (
    <div className="prose prose-resume max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={customRenderers}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 