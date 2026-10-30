'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Heart, Thermometer, Shield, BookOpen, HelpCircle, Puzzle, Brain, Droplets, FlaskConical } from 'lucide-react'
import QuizApp from '@/components/quiz/quiz-app'
import PuzzleApp from '@/components/puzzle/puzzle-app'
import TemperatureApp from '@/components/temperature/temperature-app'
import CardioApp from '@/components/cardio/cardio-app'
import MucousInfoApp from '@/components/mucous-info/mucous-info-app'
import HydrationInfoApp from '@/components/hydration/hydration-info-app'
import LymphInfoApp from '@/components/lymph/lymph-info-app'
import GlossaryApp from '@/components/glossary/glossary-app'
import ComingSoonApp from '@/components/placeholder/coming-soon-app'
import LandingApp from '@/components/landing/landing-app'
import {
  MUCOUS_QUESTIONS,
  MUCOUS_TITLE,
  MUCOUS_SUBTITLE,
  TEMPERATURE_QUESTIONS,
  TEMPERATURE_TITLE,
  TEMPERATURE_SUBTITLE,
  HYDRATION_QUESTIONS,
  HYDRATION_TITLE,
  HYDRATION_SUBTITLE,
  LYMPH_QUESTIONS,
  LYMPH_TITLE,
  LYMPH_SUBTITLE,
} from '@/lib/quiz-data'
import {
  MUCOUS_GLOSSARY_TERMS,
  TEMPERATURE_GLOSSARY_TERMS,
  HEART_GLOSSARY_TERMS,
  HYDRATION_GLOSSARY_TERMS,
  LYMPH_GLOSSARY_TERMS,
} from '@/lib/glossary-data'

// ============= Mode definitions =============
type Block = 'mucous' | 'temperature' | 'heart' | 'hydration' | 'lymph'
type Section = 'lesson' | 'quiz' | 'glossary' | 'puzzle'
type Mode = 'landing' | `${Block}-${Section}`

// Helpers
const getBlock = (mode: Mode): Block | null => {
  if (mode === 'landing') return null
  const block = mode.split('-')[0] as Block
  return block
}

const getSection = (mode: Mode): Section | null => {
  if (mode === 'landing') return null
  const parts = mode.split('-')
  // For 'mucous-puzzle' → parts = ['mucous', 'puzzle']
  // For 'temperature-lesson' → parts = ['temperature', 'lesson']
  return parts[1] as Section
}

// ============= Block + Section metadata =============
interface BlockMeta {
  id: Block
  label: string
  shortLabel: string
  icon: typeof Shield
  color: string  // gradient for active block
  defaultMode: Mode  // first sub-section to open when block clicked
  sections: Section[]  // available sub-sections
}

const BLOCKS: BlockMeta[] = [
  {
    id: 'mucous',
    label: 'Слизистые',
    shortLabel: '🩸',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    defaultMode: 'mucous-lesson',
    sections: ['lesson', 'quiz', 'glossary', 'puzzle'],
  },
  {
    id: 'temperature',
    label: 'Температура',
    shortLabel: '🌡️',
    icon: Thermometer,
    color: 'from-orange-500 to-rose-600',
    defaultMode: 'temperature-lesson',
    sections: ['lesson', 'quiz', 'glossary'],
  },
  {
    id: 'heart',
    label: 'Сердце',
    shortLabel: '🫀',
    icon: Heart,
    color: 'from-rose-500 to-red-600',
    defaultMode: 'heart-lesson',
    sections: ['lesson', 'quiz', 'glossary'],
  },
  {
    id: 'hydration',
    label: 'Гидратация',
    shortLabel: '💧',
    icon: Droplets,
    color: 'from-cyan-500 to-blue-600',
    defaultMode: 'hydration-lesson',
    sections: ['lesson', 'quiz', 'glossary'],
  },
  {
    id: 'lymph',
    label: 'Лимфосистема',
    shortLabel: '🛡️',
    icon: FlaskConical,
    color: 'from-indigo-500 to-blue-700',
    defaultMode: 'lymph-lesson',
    sections: ['lesson', 'quiz', 'glossary'],
  },
]

interface SectionMeta {
  id: Section
  label: string
  icon: typeof BookOpen
}

const SECTION_LABELS: SectionMeta[] = [
  { id: 'lesson', label: 'Урок', icon: BookOpen },
  { id: 'quiz', label: 'Тест', icon: HelpCircle },
  { id: 'glossary', label: 'Глоссарий', icon: Brain },
  { id: 'puzzle', label: 'Пазл', icon: Puzzle },
]

// ============= Main App =============
export default function VetKvizApp() {
  const [mode, setMode] = useState<Mode>('landing')

  const currentBlock = getBlock(mode)
  const currentSection = getSection(mode)

  const handleNavigate = useCallback((newMode: Mode) => setMode(newMode), [])

  const handleBlockClick = useCallback((block: Block) => {
    const blockMeta = BLOCKS.find(b => b.id === block)
    if (!blockMeta) return
    // If currently on a sub-section of this block, stay
    if (currentBlock === block) return
    // Else: switch to block's default sub-section
    setMode(blockMeta.defaultMode)
  }, [currentBlock])

  const handleSectionClick = useCallback((section: Section) => {
    if (!currentBlock) return
    setMode(`${currentBlock}-${section}` as Mode)
  }, [currentBlock])

  return (
    <div className="relative">
      {/* ============= TOP NAV: Главная + 3 блока ============= */}
      <nav className="fixed left-1/2 top-3 z-30 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full border border-sky-200 bg-white/95 p-1 shadow-lg backdrop-blur">
          {/* Главная */}
          <button
            onClick={() => handleNavigate('landing')}
            title="Главная"
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all sm:px-4 sm:py-2 sm:text-sm ${
              mode === 'landing'
                ? 'bg-gradient-to-r from-slate-600 to-slate-800 text-white shadow-md'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Главная</span>
          </button>

          {/* 3 блока */}
          {BLOCKS.map((block) => {
            const isActive = currentBlock === block.id
            return (
              <button
                key={block.id}
                onClick={() => handleBlockClick(block.id)}
                title={block.label}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? `bg-gradient-to-r ${block.color} text-white shadow-md`
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <block.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden md:inline">{block.label}</span>
                <span className="md:hidden">{block.shortLabel}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* ============= SUB NAV: Урок / Тест / Глоссарий (+ Пазл для слизистых) ============= */}
      <AnimatePresence>
        {currentBlock && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-16 z-20 -translate-x-1/2"
          >
            <div className="flex items-center gap-0.5 rounded-full border border-slate-200 bg-white/90 p-0.5 shadow-md backdrop-blur">
              {BLOCKS.find(b => b.id === currentBlock)?.sections.map((section) => {
                const meta = SECTION_LABELS.find(s => s.id === section)
                if (!meta) return null
                const isActive = currentSection === section
                const blockMeta = BLOCKS.find(b => b.id === currentBlock)!
                return (
                  <button
                    key={section}
                    onClick={() => handleSectionClick(section)}
                    title={meta.label}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all sm:px-4 sm:py-2 sm:text-sm ${
                      isActive
                        ? `bg-gradient-to-r ${blockMeta.color} text-white shadow-sm`
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <meta.icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{meta.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ============= CONTENT ============= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {mode === 'landing' && (
            <LandingApp onNavigate={(m) => handleNavigate(m as Mode)} />
          )}

          {/* MUCOUS BLOCK */}
          {mode === 'mucous-lesson' && (
            <MucousInfoApp onNavigateToQuiz={() => handleNavigate('mucous-quiz')} />
          )}
          {mode === 'mucous-quiz' && (
            <QuizApp
              questions={MUCOUS_QUESTIONS}
              title={MUCOUS_TITLE}
              subtitle={MUCOUS_SUBTITLE}
              introDescription="5 вопросов по слизистым — клиническое значение, формулы (Покрывает-защищает-сообщает, ЭПМ), норма и мышечная пластинка. Выбери режим и проверь свои знания."
              topicsCount={5}
            />
          )}
          {mode === 'mucous-glossary' && (
            <GlossaryApp
              title="Глоссарий по слизистым"
              subtitle="Словарь терминов по слизистым оболочкам собак и кошек"
              terms={MUCOUS_GLOSSARY_TERMS}
              accentColor="blue"
              onNavigateToQuiz={() => handleNavigate('mucous-quiz')}
              quizLabel="5 вопросов по слизистым оболочкам"
            />
          )}
          {mode === 'mucous-puzzle' && <PuzzleApp />}

          {/* TEMPERATURE BLOCK */}
          {mode === 'temperature-lesson' && (
            <TemperatureApp onNavigateToQuiz={() => handleNavigate('temperature-quiz')} />
          )}
          {mode === 'temperature-quiz' && (
            <QuizApp
              questions={TEMPERATURE_QUESTIONS}
              title={TEMPERATURE_TITLE}
              subtitle={TEMPERATURE_SUBTITLE}
              introDescription="5 вопросов по терморегуляции: лихорадка vs гипертермия, термогенин UCP1, стадии лихорадки, методы измерения, полипноэ. Выбери режим и проверь свои знания."
              topicsCount={5}
            />
          )}
          {mode === 'temperature-glossary' && (
            <GlossaryApp
              title="Глоссарий по температуре"
              subtitle="Словарь терминов по терморегуляции и патологиям"
              terms={TEMPERATURE_GLOSSARY_TERMS}
              accentColor="rose"
              onNavigateToQuiz={() => handleNavigate('temperature-quiz')}
              quizLabel="5 вопросов по температуре тела"
            />
          )}

          {/* HEART BLOCK */}
          {mode === 'heart-lesson' && <CardioApp />}
          {mode === 'heart-quiz' && (
            <ComingSoonApp
              title="Тест по сердцу"
              subtitle="Квиз «Проверь себя» — скоро будет добавлен"
              icon={Heart}
              color="from-rose-500 to-red-600"
              bgClass="bg-gradient-to-br from-rose-50 via-pink-50 to-red-100"
              textClass="text-rose-700"
              features={[
                '5 ключевых вопросов по анатомии сердца',
                'Сердечный цикл: фазы и клапаны',
                'Большой и малый круги кровообращения',
                'Патологии: пороки клапанов, ДКМ',
                'ЭКГ и аускультация — основы',
              ]}
              onGoToLesson={() => handleNavigate('heart-lesson')}
            />
          )}
          {mode === 'heart-glossary' && (
            <GlossaryApp
              title="Глоссарий по сердцу"
              subtitle="Словарь терминов по сердечно-сосудистой системе"
              terms={HEART_GLOSSARY_TERMS}
              accentColor="purple"
              onNavigateToQuiz={() => handleNavigate('heart-quiz')}
              quizLabel="Скоро: тест по анатомии сердца"
            />
          )}

          {/* HYDRATION BLOCK */}
          {mode === 'hydration-lesson' && (
            <HydrationInfoApp onNavigateToQuiz={() => handleNavigate('hydration-quiz')} />
          )}
          {mode === 'hydration-quiz' && (
            <QuizApp
              questions={HYDRATION_QUESTIONS}
              title={HYDRATION_TITLE}
              subtitle={HYDRATION_SUBTITLE}
              introDescription="5 вопросов по гидратации: водный баланс, классификация дегидратации, степени тяжести, жидкостная терапия, электролиты. Выбери режим и проверь свои знания."
              topicsCount={5}
            />
          )}
          {mode === 'hydration-glossary' && (
            <GlossaryApp
              title="Глоссарий по гидратации"
              subtitle="Словарь терминов по водному балансу и электролитам"
              terms={HYDRATION_GLOSSARY_TERMS}
              accentColor="blue"
              onNavigateToQuiz={() => handleNavigate('hydration-quiz')}
              quizLabel="5 вопросов по гидратации"
            />
          )}

          {/* LYMPH BLOCK */}
          {mode === 'lymph-lesson' && (
            <LymphInfoApp onNavigateToQuiz={() => handleNavigate('lymph-quiz')} />
          )}
          {mode === 'lymph-quiz' && (
            <QuizApp
              questions={LYMPH_QUESTIONS}
              title={LYMPH_TITLE}
              subtitle={LYMPH_SUBTITLE}
              introDescription="5 вопросов по лимфатической системе: функции, топография узлов, гистология, патологии, пальпация. Выбери режим и проверь свои знания."
              topicsCount={5}
            />
          )}
          {mode === 'lymph-glossary' && (
            <GlossaryApp
              title="Глоссарий по лимфосистеме"
              subtitle="Словарь терминов по лимфатической системе"
              terms={LYMPH_GLOSSARY_TERMS}
              accentColor="blue"
              onNavigateToQuiz={() => handleNavigate('lymph-quiz')}
              quizLabel="5 вопросов по лимфосистеме"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
