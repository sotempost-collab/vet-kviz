'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, BookOpen } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  title: string
  subtitle?: string
}

export default function VideoPlayer({ src, title, subtitle }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const handleLoadedMetadata = () => {
      setDuration(video.duration || 0)
      setIsLoading(false)
    }
    const handleCanPlay = () => setIsLoading(false)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  const formatDuration = (s: number) => {
    if (!s || !isFinite(s)) return ''
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return ` • ${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 overflow-hidden rounded-3xl border-2 border-blue-400 bg-white/95 shadow-xl shadow-blue-500/20 backdrop-blur"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 px-4 py-3 text-white sm:px-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
            <Play className="ml-0.5 h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-black uppercase tracking-tight sm:text-base">
              {title}
            </div>
            {subtitle && (
              <div className="text-[10px] font-medium text-white/80 sm:text-xs">
                {subtitle}{formatDuration(duration)}
              </div>
            )}
          </div>
          {isLoading && (
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-white/80">
              <div className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              загрузка
            </div>
          )}
        </div>
      </div>

      {/* Video element with native controls */}
      <div className="relative bg-black">
        <video
          ref={videoRef}
          src={src}
          controls
          preload="metadata"
          playsInline
          className="block h-auto w-full"
          style={{ aspectRatio: '16 / 9' }}
        />
      </div>

      {/* Footer hint */}
      <div className="flex items-center justify-between gap-2 border-t border-blue-100 bg-blue-50/40 px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-blue-700/70 sm:text-xs">
        <div className="flex items-center gap-1">
          <BookOpen className="h-3 w-3" />
          <span className="hidden sm:inline">Смотрите видео, затем читайте гайд</span>
          <span className="sm:hidden">Видеоурок</span>
        </div>
        <div className="text-blue-700/50">
          ▶ Встроенные элементы управления
        </div>
      </div>
    </motion.div>
  )
}
