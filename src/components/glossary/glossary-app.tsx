// Универсальный компонент глоссария
// Принимает список терминов и рендерит красивую сетку

'use client'

import { motion } from 'framer-motion'
import { BookOpen, Search, ArrowRight } from 'lucide-react'
import { useState, useMemo } from 'react'

export interface GlossaryTerm {
  term: string
  latin?: string  // латинское название (опционально)
  definition: string
  category?: string  // категория для группировки (опционально)
}

interface GlossaryAppProps {
  title: string
  subtitle: string
  terms: GlossaryTerm[]
  accentColor?: 'blue' | 'rose' | 'purple'  // цветовая схема
  onNavigateToQuiz?: () => void  // CTA внизу страницы
  quizLabel?: string  // текст кнопки CTA
}

const ACCENT_THEMES = {
  blue: {
    gradient: 'from-blue-600 via-sky-500 to-cyan-500',
    border: 'border-blue-300',
    bg: 'bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100',
    cardBorder: 'border-blue-200',
    cardBg: 'bg-blue-50/60',
    text: 'text-blue-700',
    textDark: 'text-blue-950',
    buttonGradient: 'from-blue-500 to-cyan-500',
    buttonHover: 'group-hover:from-blue-600 group-hover:to-cyan-600',
  },
  rose: {
    gradient: 'from-rose-600 via-pink-500 to-red-500',
    border: 'border-rose-300',
    bg: 'bg-gradient-to-br from-rose-50 via-pink-50 to-red-100',
    cardBorder: 'border-rose-200',
    cardBg: 'bg-rose-50/60',
    text: 'text-rose-700',
    textDark: 'text-rose-950',
    buttonGradient: 'from-rose-500 to-pink-500',
    buttonHover: 'group-hover:from-rose-600 group-hover:to-pink-600',
  },
  purple: {
    gradient: 'from-violet-600 via-purple-500 to-indigo-500',
    border: 'border-violet-300',
    bg: 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100',
    cardBorder: 'border-violet-200',
    cardBg: 'bg-violet-50/60',
    text: 'text-violet-700',
    textDark: 'text-violet-950',
    buttonGradient: 'from-violet-500 to-purple-500',
    buttonHover: 'group-hover:from-violet-600 group-hover:to-purple-600',
  },
}

export default function GlossaryApp({
  title,
  subtitle,
  terms,
  accentColor = 'blue',
  onNavigateToQuiz,
  quizLabel = 'Перейти к тесту',
}: GlossaryAppProps) {
  const [search, setSearch] = useState('')
  const theme = ACCENT_THEMES[accentColor]

  // Фильтрация по поиску
  const filteredTerms = useMemo(() => {
    if (!search.trim()) return terms
    const q = search.toLowerCase()
    return terms.filter(t =>
      t.term.toLowerCase().includes(q) ||
      (t.latin ?? '').toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q)
    )
  }, [terms, search])

  // Группировка по первой букве (алфавитный указатель)
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {}
    for (const t of filteredTerms) {
      const letter = t.term[0].toUpperCase()
      if (!groups[letter]) groups[letter] = []
      groups[letter].push(t)
    }
    // Sort groups alphabetically
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b))
  }, [filteredTerms])

  return (
    <div className={`relative min-h-screen overflow-hidden ${theme.bg}`}>
      <BackgroundBubbles accent={accentColor} />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`mb-6 overflow-hidden rounded-3xl border-2 ${theme.border} bg-white/95 shadow-2xl backdrop-blur`}
        >
          <div className={`relative bg-gradient-to-br ${theme.gradient} px-6 py-8 text-white sm:px-10 sm:py-10`}>
            <div className="absolute right-6 top-6 opacity-25">
              <BookOpen className="h-24 w-24" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <BookOpen className="h-3.5 w-3.5" /> Глоссарий
              </span>
              <h1 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
                {subtitle}
              </p>
              <div className="mt-3 text-xs font-bold uppercase tracking-wide text-white/80">
                {terms.length} терминов
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="border-t-2 border-blue-100 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Поиск термина..."
                className="w-full rounded-2xl border-2 border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition-colors focus:border-blue-400"
              />
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 grid grid-cols-3 gap-3"
        >
          <StatCard value={String(terms.length)} label="всего терминов" color={accentColor} />
          <StatCard value={String(groupedTerms.length)} label="букв в алфавите" color={accentColor} />
          <StatCard value={String(filteredTerms.length)} label="найдено" color={accentColor} />
        </motion.div>

        {/* Grouped terms */}
        {filteredTerms.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border-2 border-slate-200 bg-white/95 p-8 text-center"
          >
            <div className="text-4xl">🔍</div>
            <p className="mt-2 text-sm font-bold uppercase text-slate-700">Ничего не найдено</p>
            <p className="mt-1 text-xs text-slate-500">Попробуйте другой поисковый запрос</p>
          </motion.div>
        ) : (
          <div className="space-y-5">
            {groupedTerms.map(([letter, group], groupIdx) => (
              <motion.section
                key={letter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + groupIdx * 0.05 }}
                className={`overflow-hidden rounded-3xl border-2 ${theme.border} bg-white/95 shadow-lg backdrop-blur`}
              >
                {/* Letter header */}
                <div className={`flex items-center gap-3 border-b-2 ${theme.cardBorder} bg-gradient-to-r ${theme.cardBg} px-5 py-3`}>
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradient} text-xl font-black text-white shadow-md`}>
                    {letter}
                  </div>
                  <div>
                    <div className={`text-sm font-black uppercase tracking-wide ${theme.text}`}>
                      Буква {letter}
                    </div>
                    <div className="text-xs text-slate-600">{group.length} {group.length === 1 ? 'термин' : group.length < 5 ? 'термина' : 'терминов'}</div>
                  </div>
                </div>

                {/* Terms */}
                <div className="divide-y divide-slate-100">
                  {group.map((t, idx) => (
                    <motion.div
                      key={`${t.term}-${idx}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + groupIdx * 0.05 + idx * 0.03 }}
                      className="px-5 py-3 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className={`text-base font-black uppercase tracking-tight ${theme.textDark}`}>
                          {t.term}
                        </h3>
                        {t.latin && (
                          <span className={`text-xs italic ${theme.text}`}>{t.latin}</span>
                        )}
                        {t.category && (
                          <span className={`rounded-full ${theme.cardBg} px-2 py-0.5 text-[10px] font-bold uppercase ${theme.text}`}>
                            {t.category}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">
                        {t.definition}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        )}

        {/* CTA */}
        {onNavigateToQuiz && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            onClick={onNavigateToQuiz}
            className={`group mt-6 mb-8 flex w-full items-center justify-center gap-3 rounded-3xl border-2 ${theme.border} bg-white p-5 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]`}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradient} text-white shadow-md transition-transform group-hover:scale-110`}>
              <ArrowRight className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className={`text-base font-black uppercase ${theme.textDark}`}>
                Готов проверить себя?
              </div>
              <div className="text-xs text-slate-600">{quizLabel}</div>
            </div>
            <ArrowRight className={`ml-auto h-5 w-5 ${theme.text} transition-transform group-hover:translate-x-1`} />
          </motion.button>
        )}

        {/* Footer */}
        <footer className={`mt-6 text-center text-xs ${theme.text}/60`}>
          Глоссарий • Словарь терминов и понятий • Для ветеринарных специалистов и студентов
        </footer>
      </main>
    </div>
  )
}

function StatCard({ value, label, color }: { value: string; label: string; color: 'blue' | 'rose' | 'purple' }) {
  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    rose: 'from-rose-500 to-pink-500',
    purple: 'from-violet-500 to-purple-500',
  }
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-3 text-center shadow-sm">
      <div className={`mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${colorMap[color]} text-xs font-black text-white shadow`}>
        ★
      </div>
      <div className="text-xl font-black text-slate-900">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-slate-600">{label}</div>
    </div>
  )
}

/* ============== BACKGROUND BUBBLES ============== */
function BackgroundBubbles({ accent }: { accent: 'blue' | 'rose' | 'purple' }) {
  const colorMap = {
    blue: 'from-white/40 to-blue-200/30',
    rose: 'from-white/40 to-rose-200/30',
    purple: 'from-white/40 to-violet-200/30',
  }
  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 30 + (i * 17) % 80,
    x: (i * 13) % 100,
    delay: i * 0.7,
    duration: 14 + (i * 3) % 16,
    drift: (i * 7) % 40 - 20,
  }))
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className={`absolute rounded-full bg-gradient-to-br ${colorMap[accent]} backdrop-blur-sm`}
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            bottom: -b.size,
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, b.drift, 0],
            opacity: [0, 0.6, 0.6, 0],
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
