'use client'

import { motion } from 'framer-motion'
import {
  Layers,
  HelpCircle,
  Thermometer,
  Brain,
  Stethoscope,
  ArrowRight,
  Sparkles,
  Activity,
  Award,
} from 'lucide-react'

interface LandingProps {
  onNavigate: (mode: 'puzzle' | 'quiz-mucous' | 'temperature-info' | 'quiz-temperature') => void
}

interface FeatureCard {
  id: 'puzzle' | 'quiz-mucous' | 'temperature-info' | 'quiz-temperature'
  icon: typeof Layers
  title: string
  subtitle: string
  description: string
  stat: string
  statLabel: string
  gradient: string
  glow: string
}

const FEATURES: FeatureCard[] = [
  {
    id: 'puzzle',
    icon: Layers,
    title: 'Пазл ткани',
    subtitle: 'Собери слои слизистой',
    description: 'Перетащи 3 кусочка гистологического среза (эпителий / собственная пластинка / мышца) в правильном порядке. Звуковая обратная связь: кошка на верный, собака на неверный.',
    stat: '3',
    statLabel: 'слоя',
    gradient: 'from-sky-500 to-blue-600',
    glow: 'shadow-sky-500/30',
  },
  {
    id: 'quiz-mucous',
    icon: HelpCircle,
    title: 'Слизистые — проверь себя',
    subtitle: '81 вопрос по 22 темам',
    description: 'Самый объёмный квиз: клиническое значение осмотра, алгоритм ЦВВД, ВКН, цвета (цианоз, иктеричность, петехии), патологии, мышечная пластинка. Перемешиваются и вопросы, и варианты.',
    stat: '81',
    statLabel: 'вопросов',
    gradient: 'from-cyan-500 to-sky-600',
    glow: 'shadow-cyan-500/30',
  },
  {
    id: 'temperature-info',
    icon: Thermometer,
    title: 'Температура тела',
    subtitle: 'Гайд для ветеринара',
    description: '5 разделов: определение, физиология терморегуляции, методы измерения, патологии (лихорадка vs гипертермия), словарь. С картинками и пиктограммами.',
    stat: '5',
    statLabel: 'разделов',
    gradient: 'from-orange-500 to-rose-600',
    glow: 'shadow-orange-500/30',
  },
  {
    id: 'quiz-temperature',
    icon: Brain,
    title: 'Температура — проверь себя',
    subtitle: '5 ключевых вопросов',
    description: 'Закрепи материал по терморегуляции: лихорадка vs гипертермия, термогенин UCP1, стадии лихорадки, методы измерения, полипноэ.',
    stat: '5',
    statLabel: 'вопросов',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/30',
  },
]

export default function LandingApp({ onNavigate }: LandingProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-6 pt-16 sm:py-10 sm:pt-20">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 overflow-hidden rounded-3xl border-2 border-blue-300 bg-white/95 shadow-2xl shadow-blue-500/20 backdrop-blur"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 px-6 py-12 text-white sm:px-12 sm:py-16">
            <div className="absolute right-6 top-6 opacity-15">
              <Stethoscope className="h-40 w-40" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Интерактивный учебный лендинг
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
                Вет-Квиз
              </h1>
              <p className="mt-3 text-base font-medium text-blue-50 sm:text-xl">
                Все клинические темы ветеринарной медицины в одном месте:
                <strong className="uppercase"> слизистые, терморегуляция, гистология</strong>.
                Учись через игру — собирай пазлы, проходи тесты, читай гайды.
              </p>

              {/* Quick stats */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Stat icon={HelpCircle} value="86" label="вопроса в квизах" />
                <Stat icon={Layers} value="3" label="слоя в пазле" />
                <Stat icon={Brain} value="5" label="разделов по температуре" />
                <Stat icon={Activity} value="4" label="интерактивных раздела" />
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('quiz-mucous')}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:text-base"
                >
                  <HelpCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Начать с квиза
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('temperature-info')}
                  className="group inline-flex items-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20 active:scale-95 sm:text-base"
                >
                  <Thermometer className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Читать про температуру
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION: Choose your mode */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <div className="mb-4 flex items-center gap-2 px-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
              <ArrowRight className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-blue-700 sm:text-xl">
                Выбери раздел
              </h2>
              <p className="text-xs text-blue-700/70">
                Четыре интерактивных модуля — выбирай, что интересно
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <motion.button
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate(f.id)}
                className={`group relative overflow-hidden rounded-3xl border-2 border-blue-100 bg-white/90 p-5 text-left shadow-lg ${f.glow} transition-shadow hover:shadow-2xl`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon with gradient bg */}
                  <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-lg`}>
                    <f.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-lg font-black uppercase tracking-tight text-blue-900">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-xs font-medium text-blue-700">{f.subtitle}</p>
                  </div>
                  {/* Stat */}
                  <div className="text-right">
                    <div className="text-2xl font-black text-blue-700">{f.stat}</div>
                    <div className="text-[10px] uppercase tracking-wide text-blue-700/60">
                      {f.statLabel}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-blue-900/80">
                  {f.description}
                </p>

                <div className="mt-3 flex items-center gap-1 text-blue-700">
                  <span className="text-xs font-bold uppercase tracking-wide">Открыть</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* SECTION: Why our app is cool */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8 rounded-3xl border-2 border-blue-300 bg-white/95 p-5 shadow-lg sm:p-7"
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-blue-700 sm:text-xl">
                Особенности
              </h2>
              <p className="text-xs text-blue-700/70">Что делает обучение эффективным</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                icon: Brain,
                title: 'Адаптивная сложность',
                desc: 'Квиз «Слизистые» — 78 вопросов с выбором 10 случайных или полного режима. Каждый раз новый порядок.',
              },
              {
                icon: Layers,
                title: 'Визуальное обучение',
                desc: 'Пазл с гистологическим срезом и подробные иллюстрации в гайде по температуре.',
              },
              {
                icon: Activity,
                title: 'Мгновенная обратная связь',
                desc: 'Кошачье мяуканье на верный ответ, собачий рык на неверный. Без занудства.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4"
              >
                <Icon className="mb-2 h-6 w-6 text-blue-600" />
                <h3 className="text-sm font-black uppercase text-blue-900">{title}</h3>
                <p className="mt-1 text-xs text-blue-900/80">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-6 text-center text-xs text-blue-700/60">
          Вет-Квиз — обучающий лендинг для ветеринарных специалистов и студентов •
          Гистология • Клинический осмотр • Терморегуляция
        </footer>
      </main>
    </div>
  )
}

function Stat({ icon: Icon, value, label }: { icon: typeof Layers; value: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
      <Icon className="h-4 w-4 text-blue-50" />
      <span className="text-base font-black text-white">{value}</span>
      <span className="text-xs text-blue-50/80">{label}</span>
    </div>
  )
}

/* ============= BACKGROUND BUBBLES ============= */
function BackgroundBubbles() {
  const bubbles = Array.from({ length: 10 }, (_, i) => ({
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
          className="absolute rounded-full bg-gradient-to-br from-white/40 to-blue-200/30 backdrop-blur-sm"
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
