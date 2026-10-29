'use client'

import { motion } from 'framer-motion'
import { Heart, Brain, Clock, ArrowRight } from 'lucide-react'

interface ComingSoonProps {
  title: string
  subtitle: string
  icon: typeof Heart
  color: string  // gradient classes
  bgClass: string  // bg gradient classes
  textClass: string  // text color classes
  features?: string[]  // planned features
  onGoToLesson?: () => void  // fallback action — go to lesson
}

export default function ComingSoonApp({
  title,
  subtitle,
  icon: Icon,
  color,
  bgClass,
  textClass,
  features,
  onGoToLesson,
}: ComingSoonProps) {
  return (
    <div className={`relative min-h-screen overflow-hidden ${bgClass}`}>
      <main className="relative z-10 mx-auto max-w-2xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 overflow-hidden rounded-3xl border-2 border-rose-300 bg-white/95 shadow-2xl backdrop-blur"
        >
          {/* Hero */}
          <div className={`relative bg-gradient-to-br ${color} px-6 py-10 text-white sm:px-10 sm:py-12`}>
            <div className="absolute right-6 top-6 opacity-25">
              <Icon className="h-24 w-24" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <Clock className="h-3.5 w-3.5" /> Скоро
              </span>
              <h1 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${color} text-white shadow-lg`}
              >
                <Clock className="h-10 w-10" />
              </motion.div>
            </div>

            <h2 className={`text-center text-xl font-black uppercase tracking-tight ${textClass} sm:text-2xl`}>
              Раздел в разработке
            </h2>
            <p className="mt-2 text-center text-sm leading-relaxed text-slate-700 sm:text-base">
              Этот раздел скоро будет наполнен контентом. А пока — посмотрите урок по этой теме
              или глоссарий.
            </p>

            {/* Planned features */}
            {features && features.length > 0 && (
              <div className="mt-5 rounded-2xl border-2 border-slate-200 bg-slate-50/60 p-4">
                <div className={`mb-2 text-xs font-bold uppercase tracking-wide ${textClass}`}>
                  📋 Что будет в разделе:
                </div>
                <ul className="space-y-1.5">
                  {features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className={`mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br ${color}`} />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            {onGoToLesson && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onGoToLesson}
                className={`group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${color} px-6 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]`}
              >
                <Brain className="h-5 w-5 transition-transform group-hover:scale-110" />
                Перейти к уроку
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </div>
        </motion.section>

        <footer className="mt-6 text-center text-xs text-slate-500">
          Скоро здесь появится новый контент • Следите за обновлениями
        </footer>
      </main>
    </div>
  )
}
