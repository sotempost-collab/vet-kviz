'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, HelpCircle } from 'lucide-react'
import QuizApp from '@/components/quiz/quiz-app'
import PuzzleApp from '@/components/puzzle/puzzle-app'

type Mode = 'puzzle' | 'quiz'

export default function Home() {
  const [mode, setMode] = useState<Mode>('puzzle')

  return (
    <div className="relative">
      {/* Mode switcher — fixed in top center */}
      <div className="fixed left-1/2 top-3 z-30 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full border border-sky-200 bg-white/90 p-1 shadow-lg backdrop-blur">
          <button
            onClick={() => setMode('puzzle')}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all sm:px-4 sm:py-2 sm:text-sm ${
              mode === 'puzzle'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                : 'text-sky-700 hover:bg-sky-50'
            }`}
          >
            <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Пазл</span>
            <span className="sm:hidden">🧩</span>
          </button>
          <button
            onClick={() => setMode('quiz')}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all sm:px-4 sm:py-2 sm:text-sm ${
              mode === 'quiz'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                : 'text-sky-700 hover:bg-sky-50'
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Квиз</span>
            <span className="sm:hidden">❓</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {mode === 'puzzle' ? <PuzzleApp /> : <QuizApp />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
