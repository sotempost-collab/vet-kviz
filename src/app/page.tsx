'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, HelpCircle, Thermometer, Brain, Home, Heart, BookOpen } from 'lucide-react'
import QuizApp from '@/components/quiz/quiz-app'
import PuzzleApp from '@/components/puzzle/puzzle-app'
import TemperatureApp from '@/components/temperature/temperature-app'
import CardioApp from '@/components/cardio/cardio-app'
import MucousInfoApp from '@/components/mucous-info/mucous-info-app'
import LandingApp from '@/components/landing/landing-app'
import {
  MUCOUS_QUESTIONS,
  MUCOUS_TITLE,
  MUCOUS_SUBTITLE,
  TEMPERATURE_QUESTIONS,
  TEMPERATURE_TITLE,
  TEMPERATURE_SUBTITLE,
} from '@/lib/quiz-data'

type Mode = 'landing' | 'puzzle' | 'mucous-info' | 'quiz-mucous' | 'temperature-info' | 'quiz-temperature' | 'cardio'

interface NavItem {
  id: Mode
  label: string
  shortLabel: string
  icon: typeof Layers
  color: string
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'landing',
    label: 'Главная',
    shortLabel: '🏠',
    icon: Home,
    color: 'from-slate-500 to-slate-700',
  },
  {
    id: 'puzzle',
    label: 'Пазл',
    shortLabel: '🧩',
    icon: Layers,
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 'quiz-mucous',
    label: 'Слизистые — проверь себя',
    shortLabel: '🩸',
    icon: HelpCircle,
    color: 'from-cyan-500 to-sky-600',
  },
  {
    id: 'mucous-info',
    label: 'Слизистые гайд',
    shortLabel: '📖',
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'temperature-info',
    label: 'Температура',
    shortLabel: '🌡️',
    icon: Thermometer,
    color: 'from-orange-500 to-rose-600',
  },
  {
    id: 'quiz-temperature',
    label: 'Температура — проверь себя',
    shortLabel: '🧠',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'cardio',
    label: 'Сердце',
    shortLabel: '🫀',
    icon: Heart,
    color: 'from-rose-500 to-red-600',
  },
]

export default function VetKvizApp() {
  const [mode, setMode] = useState<Mode>('landing')

  const handleNavigate = (newMode: Mode) => setMode(newMode)

  return (
    <div className="relative">
      {/* Top navigation bar — multi-page style */}
      <nav className="fixed left-1/2 top-3 z-30 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full border border-sky-200 bg-white/95 p-1 shadow-lg backdrop-blur">
          {NAV_ITEMS.map((item) => {
            const active = mode === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                title={item.label}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all sm:px-4 sm:py-2 sm:text-sm ${
                  active
                    ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden lg:inline">{item.label}</span>
                <span className="hidden sm:inline lg:hidden">{item.shortLabel}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Active page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {mode === 'landing' && <LandingApp onNavigate={handleNavigate} />}
          {mode === 'puzzle' && <PuzzleApp />}
          {mode === 'quiz-mucous' && (
            <QuizApp
              questions={MUCOUS_QUESTIONS}
              title={MUCOUS_TITLE}
              subtitle={MUCOUS_SUBTITLE}
              introDescription="81 вопрос по осмотру слизистых, интерпретации ВКН, цветам и дефектам. Выбери режим и проверь свои знания."
              topicsCount={22}
            />
          )}
          {mode === 'mucous-info' && <MucousInfoApp />}
          {mode === 'temperature-info' && <TemperatureApp />}
          {mode === 'quiz-temperature' && (
            <QuizApp
              questions={TEMPERATURE_QUESTIONS}
              title={TEMPERATURE_TITLE}
              subtitle={TEMPERATURE_SUBTITLE}
              introDescription="5 вопросов по терморегуляции: лихорадка vs гипертермия, термогенин UCP1, стадии лихорадки, методы измерения, полипноэ. Выбери режим и проверь свои знания."
              topicsCount={5}
            />
          )}
          {mode === 'cardio' && <CardioApp />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
