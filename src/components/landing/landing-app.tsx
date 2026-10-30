'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Thermometer,
  Heart,
  Stethoscope,
  ArrowRight,
  Sparkles,
  Activity,
  Award,
  BookOpen,
  HelpCircle,
  Brain,
  Puzzle,
  Droplets,
} from 'lucide-react'

interface LandingProps {
  onNavigate: (mode: string) => void
}

type Section = 'lesson' | 'quiz' | 'glossary' | 'puzzle'

interface BlockFeature {
  id: 'mucous' | 'temperature' | 'heart'
  blockLabel: string
  icon: typeof Shield
  description: string
  gradient: string
  glow: string
  defaultMode: string
  sections: { id: Section; label: string; mode: string; icon: typeof BookOpen }[]
}

const BLOCKS: BlockFeature[] = [
  {
    id: 'mucous',
    blockLabel: 'Слизистые',
    icon: Shield,
    description: 'Строение слизистой оболочки (формулы Покрывает-защищает-сообщает, БАРС, ЭПМ), алгоритм ЦВВД клинического осмотра, 7 типов изменений слизистых и карта памяти.',
    gradient: 'from-blue-500 to-cyan-600',
    glow: 'shadow-blue-500/30',
    defaultMode: 'mucous-lesson',
    sections: [
      { id: 'lesson', label: 'Урок', mode: 'mucous-lesson', icon: BookOpen },
      { id: 'quiz', label: 'Тест', mode: 'mucous-quiz', icon: HelpCircle },
      { id: 'glossary', label: 'Глоссарий', mode: 'mucous-glossary', icon: Brain },
      { id: 'puzzle', label: 'Пазл', mode: 'mucous-puzzle', icon: Puzzle },
    ],
  },
  {
    id: 'temperature',
    blockLabel: 'Температура',
    icon: Thermometer,
    description: 'Терморегуляция (гипоталамус, бурая жировая ткань, термогенин UCP1), методы измерения, лихорадка vs гипертермия, гипотермия, словарь терминов.',
    gradient: 'from-orange-500 to-rose-600',
    glow: 'shadow-orange-500/30',
    defaultMode: 'temperature-lesson',
    sections: [
      { id: 'lesson', label: 'Урок', mode: 'temperature-lesson', icon: BookOpen },
      { id: 'quiz', label: 'Тест', mode: 'temperature-quiz', icon: HelpCircle },
      { id: 'glossary', label: 'Глоссарий', mode: 'temperature-glossary', icon: Brain },
    ],
  },
  {
    id: 'heart',
    blockLabel: 'Сердце',
    icon: Heart,
    description: 'Интерактивная 3D-модель сердца собаки с 4 камерами, 8 сосудами, 4 клапанами и M-mode. Пульсация синхронна с ЧСС, клапаны анимированы.',
    gradient: 'from-rose-500 to-red-600',
    glow: 'shadow-rose-500/30',
    defaultMode: 'heart-lesson',
    sections: [
      { id: 'lesson', label: 'Урок', mode: 'heart-lesson', icon: BookOpen },
      { id: 'quiz', label: 'Тест', mode: 'heart-quiz', icon: HelpCircle },
      { id: 'glossary', label: 'Глоссарий', mode: 'heart-glossary', icon: Brain },
    ],
  },
  {
    id: 'hydration',
    blockLabel: 'Гидратация',
    icon: Droplets,
    description: 'Водный баланс, электролиты (Na+, K+, Cl-), классификация дегидратации (изо/гипер/гипотоническая), степени тяжести, жидкостная терапия.',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/30',
    defaultMode: 'hydration-lesson',
    sections: [
      { id: 'lesson', label: 'Урок', mode: 'hydration-lesson', icon: BookOpen },
      { id: 'quiz', label: 'Тест', mode: 'hydration-quiz', icon: HelpCircle },
      { id: 'glossary', label: 'Глоссарий', mode: 'hydration-glossary', icon: Brain },
    ],
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
          <div className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 px-6 py-12 text-white sm:px-12 sm:py-14">
            <div className="absolute right-6 top-6 opacity-15">
              <Stethoscope className="h-40 w-40" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Ветеринарный учебный лендинг
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
                Вет-Квиз
              </h1>
              <p className="mt-3 text-base font-medium text-blue-50 sm:text-xl">
                Четыре основных блока — <strong className="uppercase">Слизистые, Температура, Сердце, Гидратация</strong>.
                Каждый блок: <strong className="uppercase">Урок → Тест → Глоссарий</strong>.
              </p>

              {/* Quick stats */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Stat icon={Shield} value="4" label="основных блока" />
                <Stat icon={BookOpen} value="4" label="урока" />
                <Stat icon={HelpCircle} value="15" label="вопросов в тестах" />
                <Stat icon={Brain} value="4" label="глоссария" />
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('mucous-lesson')}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:text-base"
                >
                  <Shield className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Начать со слизистых
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('heart-lesson')}
                  className="group inline-flex items-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20 active:scale-95 sm:text-base"
                >
                  <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Открыть 3D-сердце
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* METHODOLOGY — Learn → Test → Consolidate */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-violet-300 bg-white/95 shadow-lg backdrop-blur"
        >
          <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-3 text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">
                Структура каждого блока — учись → проверяй → закрепляй
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-3 sm:p-5">
            <MethodologyStep
              num="1"
              title="Урок"
              desc="Изучите материал урока"
              icon={BookOpen}
              color="from-blue-500 to-cyan-600"
            />
            <MethodologyStep
              num="2"
              title="Тест"
              desc="Проверьте свои знания"
              icon={HelpCircle}
              color="from-emerald-500 to-teal-600"
            />
            <MethodologyStep
              num="3"
              title="Глоссарий"
              desc="Закрепите термины"
              icon={Brain}
              color="from-violet-500 to-purple-600"
            />
          </div>
        </motion.section>

        {/* 3 BLOCKS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-6"
        >
          <div className="mb-4 flex items-center gap-2 px-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
              <ArrowRight className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-blue-700 sm:text-xl">
                Выбери блок
              </h2>
              <p className="text-xs text-blue-700/70">
                Три основных направления изучения
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BLOCKS.map((block, i) => (
              <motion.button
                key={block.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate(block.defaultMode)}
                className={`group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-5 text-left shadow-lg ${block.glow} transition-shadow hover:shadow-2xl`}
              >
                {/* Block icon */}
                <div className={`mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${block.gradient} text-white shadow-lg`}>
                  <block.icon className="h-7 w-7" />
                </div>

                {/* Block name */}
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
                  {block.blockLabel}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
                  {block.description}
                </p>

                {/* Sections chips */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {block.sections.map(s => (
                    <span
                      key={s.id}
                      className={`inline-flex items-center gap-0.5 rounded-full bg-gradient-to-r ${block.gradient} px-2 py-0.5 text-[10px] font-bold uppercase text-white shadow-sm`}
                    >
                      <s.icon className="h-2.5 w-2.5" />
                      {s.label}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className={`mt-4 flex items-center gap-1 bg-gradient-to-r ${block.gradient} bg-clip-text text-transparent`}>
                  <span className="text-xs font-bold uppercase tracking-wide">
                    Открыть блок
                  </span>
                  <ArrowRight className={`h-4 w-4 bg-gradient-to-r ${block.gradient} bg-clip-text text-transparent transition-transform group-hover:translate-x-1`} />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
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
                desc: 'Тесты «Проверь себя» — по 5 ключевых вопросов на блок. Перемешиваются и вопросы, и варианты.',
              },
              {
                icon: Activity,
                title: '3D-визуализация',
                desc: 'Интерактивная 3D-модель сердца с пульсацией, клапанами и M-mode. Перетаскивание в пазле слизистой.',
              },
              {
                icon: Brain,
                title: 'Мгновенная обратная связь',
                desc: 'Кошачье мяуканье на верный ответ, собачий рык на неверный. Кликовые CTA-кнопки в гайдах.',
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
          Вет-Квиз — ветеринарный обучающий лендинг •
          Слизистые • Температура • Сердце • Урок → Тест → Глоссарий
        </footer>
      </main>
    </div>
  )
}

function Stat({ icon: Icon, value, label }: { icon: typeof Shield; value: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
      <Icon className="h-4 w-4 text-blue-50" />
      <span className="text-base font-black text-white">{value}</span>
      <span className="text-xs text-blue-50/80">{label}</span>
    </div>
  )
}

function MethodologyStep({
  num,
  title,
  desc,
  icon: Icon,
  color,
}: {
  num: string
  title: string
  desc: string
  icon: typeof BookOpen
  color: string
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-3 text-center">
        <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${color} text-sm font-black text-white shadow`}>
          {num}
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <Icon className={`h-4 w-4 bg-gradient-to-br ${color} bg-clip-text text-transparent`} />
          <h3 className={`text-sm font-black uppercase tracking-wide bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
            {title}
          </h3>
        </div>
        <div className="mt-1 text-xs text-slate-700">{desc}</div>
      </div>
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
