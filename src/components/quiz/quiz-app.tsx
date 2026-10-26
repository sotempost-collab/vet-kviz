'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Award, RotateCcw, Play, Stethoscope, Heart, Activity, ChevronRight, Volume2, VolumeX } from 'lucide-react'
import { type QuizQuestion, pickShuffledQuestions } from '@/lib/quiz-data'
import {
  playPraise,
  playOops,
  preloadSounds,
  setMuted,
  stopNarration,
} from '@/lib/sounds'

type Phase = 'intro' | 'question' | 'feedback' | 'result'
type AnswerState = 'unanswered' | 'correct' | 'wrong'

interface AnswerLogEntry {
  questionId: number
  selectedLetter: string
  correct: boolean
}

interface QuizAppProps {
  questions: QuizQuestion[]
  title: string
  subtitle: string
  introDescription?: string
  topicsCount?: number
}

export default function QuizApp({ questions: sourceQuestions, title, subtitle, introDescription, topicsCount }: QuizAppProps) {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered')
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<AnswerLogEntry[]>([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [muted, setMutedState] = useState(false)
  // Активная сессия вопросов — перемешивается при старте
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([])
  // Сюда позже вставим URL видео, когда пользователь пришлёт файл
  const videoUrl = useRef<string | null>(null)

  const totalQuestions = activeQuestions.length || sourceQuestions.length
  const currentQuestion: QuizQuestion | undefined = activeQuestions[currentIndex]

  useEffect(() => {
    preloadSounds()
  }, [])

  const handleStart = useCallback((mode: 'quick' | 'full') => {
    const count = mode === 'quick' ? Math.min(10, sourceQuestions.length) : sourceQuestions.length
    const picked = pickShuffledQuestions(count, sourceQuestions)
    setActiveQuestions(picked)
    setPhase('question')
    setCurrentIndex(0)
    setScore(0)
    setAnswers([])
    setSelectedLetter(null)
    setAnswerState('unanswered')
  }, [sourceQuestions])

  const handleSelectAnswer = useCallback(
    (letter: string) => {
      if (phase !== 'question' || !currentQuestion) return
      const option = currentQuestion.options.find((o) => o.letter === letter)
      if (!option) return

      // Останавливаем озвучку вопроса — начинаем реакцию
      stopNarration()

      setSelectedLetter(letter)
      const isCorrect = option.correct
      setAnswerState(isCorrect ? 'correct' : 'wrong')

      if (isCorrect) {
        setScore((s) => s + 1)
        playPraise()
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 2500)
      } else {
        playOops()
      }

      setAnswers((prev) => [
        ...prev,
        { questionId: currentQuestion.id, selectedLetter: letter, correct: isCorrect },
      ])

      setPhase('feedback')
    },
    [phase, currentQuestion],
  )

  const handleNext = useCallback(() => {
    if (!currentQuestion) return
    stopNarration()
    const isLast = currentIndex + 1 >= totalQuestions
    if (isLast) {
      setPhase('result')
    } else {
      setCurrentIndex((i) => i + 1)
      setSelectedLetter(null)
      setAnswerState('unanswered')
      setPhase('question')
    }
  }, [currentIndex, totalQuestions, currentQuestion])

  const handleRestart = useCallback(() => {
    stopNarration()
    setActiveQuestions([])
    setPhase('intro')
    setCurrentIndex(0)
    setScore(0)
    setAnswers([])
    setSelectedLetter(null)
    setAnswerState('unanswered')
  }, [])

  const toggleMute = useCallback(() => {
    const next = !muted
    setMutedState(next)
    setMuted(next)
    if (next) stopNarration()
  }, [muted])

  const progress = (currentIndex + (phase === 'feedback' || phase === 'result' ? 1 : 0)) / totalQuestions

  // Описание для финального экрана в зависимости от результата
  // Render: header, progress, content, footer
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100">
      {/* Animated background bubbles */}
      <FloatingBubbles />

      {/* Confetti overlay */}
      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-6 sm:py-10">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-blue-950 sm:text-xl">
                {title}
              </h1>
              <p className="text-xs font-medium text-blue-700/70 sm:text-sm">{subtitle}</p>
            </div>
          </div>
          {/* Score chip + mute toggle */}
          <div className="flex items-center gap-2">
            {(phase === 'question' || phase === 'feedback' || phase === 'result') && (
              <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
                <Award className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-bold text-blue-900">{score}</span>
                <span className="text-xs text-blue-700/60">/ {totalQuestions}</span>
              </div>
            )}
            <button
              type="button"
              onClick={toggleMute}
              title={muted ? 'Включить звук' : 'Выключить звук'}
              aria-label={muted ? 'Включить звук' : 'Выключить звук'}
              className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur transition-colors ${
                muted
                  ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100'
                  : 'border-sky-200 bg-white/80 text-sky-600 hover:bg-sky-50'
              }`}
            >
              {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* Progress bar */}
        {phase !== 'intro' && phase !== 'result' && (
          <div className="mb-6">
            <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>
                Вопрос {currentIndex + 1} из {totalQuestions}
              </span>
              <span>{Math.round(progress * 100)}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-blue-100">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500"
                initial={false}
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        )}

        {/* Content area */}
        <div className="flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait">
            {phase === 'intro' && (
              <IntroCard key="intro" onStart={handleStart} totalQuestions={totalQuestions} title={title} introDescription={introDescription} topicsCount={topicsCount} />
            )}

            {(phase === 'question' || phase === 'feedback') && currentQuestion && (
              <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion}
                selectedLetter={selectedLetter}
                answerState={answerState}
                phase={phase}
                onSelect={handleSelectAnswer}
                onNext={handleNext}
                isLast={currentIndex + 1 >= totalQuestions}
              />
            )}

            {phase === 'result' && (
              <ResultCard
                key="result"
                score={score}
                total={totalQuestions}
                answers={answers}
                onRestart={handleRestart}
                questions={sourceQuestions}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Footer note */}
        <footer className="mt-6 text-center text-xs text-blue-700/50">
          Интерактивный клинический квиз • Сделано для ветеринарных специалистов
        </footer>
      </main>
    </div>
  )
}

/* ============== INTRO ============== */
function IntroCard({ onStart, totalQuestions, title, introDescription, topicsCount }: { onStart: (mode: 'quick' | 'full') => void; totalQuestions: number; title: string; introDescription?: string; topicsCount?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-2xl"
    >
      <div className="overflow-hidden rounded-3xl border border-sky-200/70 bg-white/90 shadow-xl shadow-blue-500/10 backdrop-blur">
        {/* Hero banner */}
        <div className="relative bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 px-6 py-8 text-white sm:px-10 sm:py-12">
          <div className="absolute right-4 top-4 opacity-20">
            <Heart className="h-20 w-20" />
          </div>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <Activity className="h-3.5 w-3.5" /> Клиническая диагностика
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 max-w-md text-sm text-sky-50 sm:text-base">
              {introDescription ?? `${totalQuestions} вопросов по теме. Выбери режим и проверь свои знания.`}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 sm:px-10 sm:py-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Stethoscope, label: `${totalQuestions}`, sub: 'всего вопросов' },
              { icon: Activity, label: topicsCount ? String(topicsCount) : '—', sub: 'тема' },
              { icon: Award, label: 'Счёт', sub: 'в реальном времени' },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={sub}
                className="rounded-2xl border border-sky-100 bg-sky-50/60 px-3 py-3 text-center sm:px-4 sm:py-4"
              >
                <Icon className="mx-auto h-5 w-5 text-sky-600 sm:h-6 sm:w-6" />
                <div className="mt-2 text-xs font-bold text-blue-950 sm:text-sm">{label}</div>
                <div className="text-[10px] text-blue-700/60 sm:text-xs">{sub}</div>
              </div>
            ))}
          </div>

          {/* Mode selector */}
          <div className="mt-6 space-y-3">
            <button
              onClick={() => onStart('quick')}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-sky-600 hover:to-blue-700 hover:shadow-blue-500/40 active:scale-[0.98]"
            >
              <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
              Быстрый режим — {Math.min(10, totalQuestions)} случайных вопросов
            </button>
            <button
              onClick={() => onStart('full')}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-sky-300 bg-white px-6 py-3 text-sm font-bold text-sky-700 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50 active:scale-[0.98]"
            >
              <Activity className="h-4 w-4 transition-transform group-hover:scale-110" />
              Полный режим — все {totalQuestions} вопросов
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-blue-700/50">
            🎲 Порядок вопросов и вариантов перемешивается при каждом старте • 🐱 верно — кошачье мяуканье • 🐶 неверно — собачий рык • клавиши 1, 2, 3
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* ============== QUESTION ============== */
interface QuestionCardProps {
  question: QuizQuestion
  selectedLetter: string | null
  answerState: AnswerState
  phase: Phase
  onSelect: (letter: string) => void
  onNext: () => void
  isLast: boolean
}

function QuestionCard({
  question,
  selectedLetter,
  answerState,
  phase,
  onSelect,
  onNext,
  isLast,
}: QuestionCardProps) {
  const isFeedback = phase === 'feedback'
  const correctOption = question.options.find((o) => o.correct)

  // Keyboard shortcuts: 1, 2, 3 → select A, B, C
  useEffect(() => {
    if (isFeedback) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === '1' || e.key === '2' || e.key === '3') {
        const idx = Number(e.key) - 1
        const letter = ['А', 'Б', 'В', 'Г', 'Д'][idx]
        if (letter && question.options.find((o) => o.letter === letter)) {
          onSelect(letter)
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isFeedback, onSelect, question.options])

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -40, scale: 0.97 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full max-w-2xl"
    >
      <div className="overflow-hidden rounded-3xl border border-sky-200/70 bg-white/95 shadow-xl shadow-blue-500/10 backdrop-blur">
        {/* Question header */}
        <div className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-cyan-50 px-6 py-5 sm:px-8 sm:py-6">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-sky-600">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-white">
              {question.id}
            </span>
            {question.topic}
          </div>
          <h2 className="text-lg font-extrabold leading-snug text-blue-950 sm:text-xl">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 p-5 sm:p-7">
          {question.options.map((opt, idx) => {
            const isSelected = selectedLetter === opt.letter
            const showCorrect = isFeedback && opt.correct
            const showWrong = isFeedback && isSelected && !opt.correct
            const disabled = isFeedback

            let stateClasses =
              'border-sky-200 bg-white hover:border-sky-400 hover:bg-sky-50/60 hover:shadow-md hover:shadow-sky-500/10'
            if (showCorrect) {
              stateClasses = 'border-green-400 bg-green-50 shadow-md shadow-green-500/20'
            } else if (showWrong) {
              stateClasses = 'border-red-400 bg-red-50 shadow-md shadow-red-500/20'
            } else if (disabled) {
              stateClasses = 'border-sky-100 bg-sky-50/40 opacity-60'
            }

            return (
              <motion.button
                key={opt.letter}
                type="button"
                disabled={disabled}
                onClick={() => onSelect(opt.letter)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.08, duration: 0.35, ease: 'easeOut' }}
                whileHover={disabled ? undefined : { scale: 1.01 }}
                whileTap={disabled ? undefined : { scale: 0.99 }}
                className={`group flex w-full items-start gap-3 rounded-2xl border-2 p-4 text-left transition-all ${stateClasses} ${
                  disabled ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-base font-extrabold transition-colors ${
                    showCorrect
                      ? 'bg-green-500 text-white'
                      : showWrong
                        ? 'bg-red-500 text-white'
                        : 'bg-sky-100 text-sky-700 group-hover:bg-sky-200'
                  }`}
                >
                  {opt.letter}
                </div>
                <span
                  className={`flex-1 pt-1 text-sm font-medium sm:text-base ${
                    showCorrect
                      ? 'text-green-900'
                      : showWrong
                        ? 'text-red-900'
                        : 'text-blue-950'
                  }`}
                >
                  {opt.text}
                </span>
                {showCorrect && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                  >
                    <Check className="h-6 w-6 text-green-600" />
                  </motion.div>
                )}
                {showWrong && (
                  <motion.div
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                  >
                    <X className="h-6 w-6 text-red-600" />
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Feedback panel */}
        <AnimatePresence>
          {isFeedback && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="overflow-hidden border-t border-sky-100"
            >
              <div
                className={`px-6 py-5 sm:px-8 sm:py-6 ${
                  answerState === 'correct'
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50'
                    : 'bg-gradient-to-r from-amber-50 to-orange-50'
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  {answerState === 'correct' ? (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                      <Check className="h-5 w-5" />
                    </span>
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 text-white">
                      <X className="h-5 w-5" />
                    </span>
                  )}
                  <span
                    className={`text-base font-extrabold ${
                      answerState === 'correct' ? 'text-green-700' : 'text-orange-700'
                    }`}
                  >
                    {answerState === 'correct' ? 'Правильно!' : 'Не совсем верно'}
                  </span>
                </div>

                {answerState !== 'correct' && correctOption && (
                  <p className="mb-2 text-sm text-orange-900">
                    <span className="font-semibold">Правильный ответ:</span> {correctOption.letter}.{' '}
                    {correctOption.text}
                  </p>
                )}

                <p className="text-sm leading-relaxed text-blue-900/80">
                  <span className="font-semibold text-blue-900">Пояснение: </span>
                  {question.explanation}
                </p>

                <button
                  onClick={onNext}
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-sky-600 hover:to-blue-700 active:scale-[0.98]"
                >
                  {isLast ? (
                    <>
                      <Award className="h-5 w-5" />
                      Показать результат
                    </>
                  ) : (
                    <>
                      Следующий вопрос
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ============== RESULT ============== */
function ResultCard({
  score,
  total,
  answers,
  onRestart,
  questions,
}: {
  score: number
  total: number
  answers: AnswerLogEntry[]
  onRestart: () => void
  questions: QuizQuestion[]
}) {
  const percentage = Math.round((score / total) * 100)
  const allCorrect = score === total
  const isGood = percentage >= 50

  const headline = allCorrect
    ? 'Безупречно! 🎉'
    : isGood
      ? 'Хороший результат!'
      : 'Стоит повторить тему'

  const subtitle = allCorrect
    ? 'Ты отлично разбираешься в клиническом осмотре слизистых. Так держать!'
    : isGood
      ? 'Большинство ответов верные. Загляни в пояснения к ошибкам — и будешь безупречен.'
      : 'Не расстраивайся! Ветеринария — сложная тема. Попробуй ещё раз, теперь с подсказками.';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-2xl"
    >
      <div className="overflow-hidden rounded-3xl border border-sky-200/70 bg-white/95 shadow-xl shadow-blue-500/10 backdrop-blur">
        <div
          className={`relative px-6 py-8 text-white sm:px-10 sm:py-10 ${
            allCorrect
              ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600'
              : isGood
                ? 'bg-gradient-to-br from-sky-500 to-blue-600'
                : 'bg-gradient-to-br from-blue-400 to-indigo-500'
          }`}
        >
          <div className="absolute right-6 top-6 opacity-15">
            <Award className="h-24 w-24" />
          </div>
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">
              Твой результат
            </span>
            <div className="mt-2 flex items-end gap-2">
              <motion.span
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
                className="text-6xl font-extrabold tracking-tighter sm:text-7xl"
              >
                {score}
              </motion.span>
              <span className="pb-2 text-2xl font-bold text-white/80">/ {total}</span>
              <span className="pb-2 ml-2 text-2xl font-extrabold">{percentage}%</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{headline}</h2>
            <p className="mt-2 max-w-md text-sm text-white/90 sm:text-base">{subtitle}</p>
          </div>
        </div>

        {/* Detailed answers recap */}
        <div className="px-6 py-6 sm:px-10 sm:py-8">
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700/70">
            Твои ответы
          </h3>
          <div className="space-y-2">
            {answers.map((a) => {
              const q = questions.find((x) => x.id === a.questionId)
              if (!q) return null
              return (
                <div
                  key={a.questionId}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm ${
                    a.correct
                      ? 'border-green-200 bg-green-50/60 text-green-900'
                      : 'border-red-200 bg-red-50/60 text-red-900'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-white ${
                      a.correct ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {a.correct ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </span>
                  <span className="font-semibold">Вопрос {a.questionId}</span>
                  <span className="truncate text-xs opacity-70">— {q.topic}</span>
                </div>
              )
            })}
          </div>

          <button
            onClick={onRestart}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-sky-600 hover:to-blue-700 active:scale-[0.98]"
          >
            <RotateCcw className="h-5 w-5" />
            Пройти ещё раз
          </button>
        </div>
      </div>
    </motion.div>
  )
}

/* ============== FLOATING BUBBLES ============== */
interface Bubble {
  id: number
  size: number
  x: number
  delay: number
  duration: number
  drift: number
}

function FloatingBubbles() {
  // Генерируем пузыри только на клиенте — иначе Math.random() даёт hydration mismatch
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBubbles(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: 30 + Math.random() * 90,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 16,
        drift: Math.random() * 40 - 20,
      })),
    )
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full bg-gradient-to-br from-white/40 to-sky-200/30 backdrop-blur-sm"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            bottom: -b.size,
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, b.drift, 0],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* ============== CONFETTI ============== */
interface Particle {
  id: number
  x: number
  delay: number
  duration: number
  color: string
  size: number
  rotation: number
}

function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([])
  useEffect(() => {
    const palette = ['#38bdf8', '#0ea5e9', '#0284c7', '#06b6d4', '#22d3ee', '#facc15', '#fbbf24']
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.4,
        duration: 1.8 + Math.random() * 1.5,
        color: palette[Math.floor(Math.random() * palette.length)],
        size: 8 + Math.random() * 10,
        rotation: Math.random() * 360,
      })),
    )
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: '-5%',
            width: p.size,
            height: p.size * 1.4,
            backgroundColor: p.color,
            borderRadius: '2px',
          }}
          initial={{ y: 0, rotate: p.rotation, opacity: 1 }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: p.rotation + 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </motion.div>
  )
}
