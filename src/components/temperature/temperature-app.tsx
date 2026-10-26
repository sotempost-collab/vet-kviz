'use client'

import { motion } from 'framer-motion'
import {
  Thermometer,
  Flame,
  Snowflake,
  HeartPulse,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Stethoscope,
  Clock,
  Droplets,
  ShieldCheck,
  ListChecks,
} from 'lucide-react'

// Данные по нормальной температуре у разных видов (°C)
interface SpeciesTemp {
  name: string
  range: string
  low: number // нижняя граница °C
  high: number // верхняя граница °C
  pictogram: string // emoji как пиктограмма
  accent: string // tailwind классы
}

const SPECIES_DATA: SpeciesTemp[] = [
  {
    name: 'Собака',
    range: '38.3–39.3 °C',
    low: 38.3,
    high: 39.3,
    pictogram: '🐕',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Кошка',
    range: '38.0–39.0 °C',
    low: 38.0,
    high: 39.0,
    pictogram: '🐈',
    accent: 'from-violet-400 to-purple-500',
  },
  {
    name: 'Кролик',
    range: '38.5–40.0 °C',
    low: 38.5,
    high: 40.0,
    pictogram: '🐰',
    accent: 'from-rose-400 to-pink-500',
  },
  {
    name: 'Морская свинка',
    range: '37.2–39.5 °C',
    low: 37.2,
    high: 39.5,
    pictogram: '🐹',
    accent: 'from-yellow-400 to-amber-500',
  },
  {
    name: 'Лошадь',
    range: '37.5–38.5 °C',
    low: 37.5,
    high: 38.5,
    pictogram: '🐎',
    accent: 'from-stone-400 to-stone-600',
  },
  {
    name: 'Корова',
    range: '38.0–39.0 °C',
    low: 38.0,
    high: 39.0,
    pictogram: '🐄',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Свинья',
    range: '38.0–40.0 °C',
    low: 38.0,
    high: 40.0,
    pictogram: '🐷',
    accent: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Овца / Коза',
    range: '38.5–40.0 °C',
    low: 38.5,
    high: 40.0,
    pictogram: '🐑',
    accent: 'from-slate-300 to-slate-500',
  },
]

// Способы измерения температуры
interface Method {
  title: string
  description: string
  pros: string[]
  cons: string[]
  icon: typeof Thermometer
  rating: 'gold' | 'green' | 'yellow' | 'red'
}

const METHODS: Method[] = [
  {
    title: 'Ректальный',
    description: 'Золотой стандарт. Электронный или ртутный термометр вводится в прямую кишку на 1–2 см.',
    pros: ['Самая высокая точность', 'Универсальный для всех видов', 'Подходит для постоянного мониторинга'],
    cons: ['Требует фиксации животного', 'Стресс при беременности/диарее'],
    icon: Thermometer,
    rating: 'gold',
  },
  {
    title: 'Ушной (тимпанический)',
    description: 'Инфракрасный датчик измеряет температуру барабанной перепонки за 1–2 секунды.',
    pros: ['Очень быстрый', 'Малоинвазивный', 'Не вызывает стресс'],
    cons: ['Дорогой термометр', 'Зависит от правильного угла', 'Меньшая точность'],
    icon: Activity,
    rating: 'green',
  },
  {
    title: 'Эзофагеальный',
    description: 'Термозонд вводится в пищевод. Используется при анестезии для непрерывного мониторинга.',
    pros: ['Непрерывный мониторинг', 'Высокая точность ядра', 'Не мешает хирургии'],
    cons: ['Только под анестезией', 'Требует оборудование'],
    icon: HeartPulse,
    rating: 'green',
  },
  {
    title: 'Подмышечный',
    description: 'Термометр зажимается в паховой или подмышечной складке. Наименее точный метод.',
    pros: ['Не требует введения', 'Минимальный стресс'],
    cons: ['Низкая точность (на 0.5–1 °C ниже)', 'Ненадёжен для клинических решений'],
    icon: AlertTriangle,
    rating: 'red',
  },
]

// Патологии
interface Pathology {
  name: string
  range: string
  description: string
  causes: string[]
  icon: typeof Flame
  color: string
}

const PATHOLOGIES: Pathology[] = [
  {
    name: 'Гипертермия',
    range: '> 39.5 °C у собак, > 39.0 °C у кошек',
    description: 'Повышение температуры тела. Различают лихорадку (из-за инфекции/воспаления) и тепловую гипертермию (из-за внешнего нагрева).',
    causes: ['Тепловой удар', 'Бактериальные/вирусные инфекции', 'Сепсис', 'Эндотоксемия', 'Судороги'],
    icon: Flame,
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Гипотермия',
    range: '< 37.0 °C',
    description: 'Снижение температуры тела. Часто встречается у новорождённых, при шоке, длительной анестезии, гипотиреозе.',
    causes: ['Шок (гиповолемический, септический)', 'Длительная анестезия', 'Внешнее охлаждение', 'Гипотиреоз', 'Новорождённые'],
    icon: Snowflake,
    color: 'from-cyan-500 to-blue-500',
  },
]

// Алгоритм измерения
interface Step {
  number: number
  title: string
  description: string
  icon: typeof Clock
}

const STEPS: Step[] = [
  {
    number: 1,
    title: 'Подготовка животного',
    description: 'Успокоить, при необходимости фиксировать. Осмотреть область измерения. Подготовить смазку.',
    icon: ShieldCheck,
  },
  {
    number: 2,
    title: 'Выбор термометра',
    description: 'Электронный ректальный — стандарт. Дезинфекция спиртом, калибровка перед использованием.',
    icon: Stethoscope,
  },
  {
    number: 3,
    title: 'Смазка',
    description: 'Вазелин, хирургический гель или лубрикант. Обязательно для безопасности слизистой.',
    icon: Droplets,
  },
  {
    number: 4,
    title: 'Введение',
    description: 'На 1–2 см у мелких животных, 3–5 см у крупных. Под углом к стенке кишки.',
    icon: Thermometer,
  },
  {
    number: 5,
    title: 'Ожидание',
    description: '30–60 сек до звукового сигнала у цифровых, 3–5 мин у ртутных. Не отпускать термометр.',
    icon: Clock,
  },
  {
    number: 6,
    title: 'Запись',
    description: 'Записать: значение, время, метод, сторону/участок. Сравнить с нормой вида.',
    icon: ListChecks,
  },
]

export default function TemperatureApp() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 overflow-hidden rounded-3xl border border-sky-200/70 bg-white/95 shadow-xl shadow-blue-500/10 backdrop-blur"
        >
          <div className="relative bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500 px-6 py-10 text-white sm:px-10 sm:py-14">
            {/* Декоративный термометр справа */}
            <div className="absolute right-6 top-6 opacity-20">
              <ThermometerSvg className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                <Thermometer className="h-3.5 w-3.5" /> Клиническая диагностика
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Температура тела
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-rose-50 sm:text-base">
                Один из базовых клинических показателей, обязательных для каждого приёма.
                Вместе с пульсом, дыханием и осмотром слизистых температура формирует полную
                картину состояния пациента и помогает выявить шок, инфекцию или нарушение
                терморегуляции.
              </p>
            </div>
          </div>

          {/* Three key facts */}
          <div className="grid grid-cols-1 gap-3 border-t border-sky-100 p-5 sm:grid-cols-3 sm:p-6">
            {[
              {
                icon: Flame,
                title: 'Гипертермия',
                value: '> 39.5 °C',
                desc: 'лихорадка, тепловой удар, сепсис',
                color: 'text-red-500',
                bg: 'bg-red-50',
              },
              {
                icon: CheckCircle2,
                title: 'Норма',
                value: '38.0–39.3 °C',
                desc: 'зависит от вида животного',
                color: 'text-emerald-500',
                bg: 'bg-emerald-50',
              },
              {
                icon: Snowflake,
                title: 'Гипотермия',
                value: '< 37.0 °C',
                desc: 'шок, анестезия, охлаждение',
                color: 'text-cyan-500',
                bg: 'bg-cyan-50',
              },
            ].map(({ icon: Icon, title, value, desc, color, bg }) => (
              <div
                key={title}
                className={`flex items-center gap-3 rounded-2xl ${bg} px-4 py-3`}
              >
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {title}
                  </div>
                  <div className="text-lg font-extrabold text-slate-900">{value}</div>
                  <div className="text-xs text-slate-600">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 1: Normal values for species */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 rounded-3xl border border-sky-200/70 bg-white/95 p-5 shadow-lg shadow-blue-500/5 backdrop-blur sm:p-7"
        >
          <div className="mb-5 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md">
              <Thermometer className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
                Нормальные значения по видам
              </h2>
              <p className="text-xs text-blue-700/70">
                Диапазоны для здоровых взрослых животных в покое
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SPECIES_DATA.map((sp, i) => (
              <motion.div
                key={sp.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Animal pictogram */}
                <div className={`flex h-24 items-center justify-center bg-gradient-to-br ${sp.accent}`}>
                  <span className="text-5xl drop-shadow-md transition-transform group-hover:scale-110">
                    {sp.pictogram}
                  </span>
                </div>
                <div className="px-3 py-3 text-center">
                  <div className="text-sm font-bold text-blue-950">{sp.name}</div>
                  <div className="mt-0.5 text-base font-extrabold tabular-nums text-rose-600">
                    {sp.range}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-sky-50/80 px-4 py-3 text-xs leading-relaxed text-blue-900/80">
            <strong className="text-blue-900">Важно:</strong> значения зависят от возраста,
            времени суток, физической нагрузки и температуры окружающей среды. У молодняка
            обычно на 0.2–0.5 °C выше, у старых животных — на 0.2 °C ниже.
          </div>
        </motion.section>

        {/* Section 2: Methods of measurement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-8 rounded-3xl border border-sky-200/70 bg-white/95 p-5 shadow-lg shadow-blue-500/5 backdrop-blur sm:p-7"
        >
          <div className="mb-5 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
                Способы измерения
              </h2>
              <p className="text-xs text-blue-700/70">
                Выбор метода зависит от клинической ситуации и вида животного
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {METHODS.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className={`relative overflow-hidden rounded-2xl border-2 p-4 ${
                  m.rating === 'gold'
                    ? 'border-amber-300 bg-amber-50/60'
                    : m.rating === 'green'
                      ? 'border-emerald-300 bg-emerald-50/60'
                      : m.rating === 'yellow'
                        ? 'border-yellow-300 bg-yellow-50/60'
                        : 'border-red-300 bg-red-50/60'
                }`}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${
                      m.rating === 'gold'
                        ? 'from-amber-500 to-yellow-600'
                        : m.rating === 'green'
                          ? 'from-emerald-500 to-teal-600'
                          : m.rating === 'yellow'
                            ? 'from-yellow-500 to-amber-600'
                            : 'from-red-500 to-rose-600'
                    }`}
                  >
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-extrabold text-blue-950">{m.title}</h3>
                    {m.rating === 'gold' && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                        ⭐ Золотой стандарт
                      </span>
                    )}
                  </div>
                </div>

                <p className="mb-3 text-xs leading-relaxed text-blue-900/80">
                  {m.description}
                </p>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>Плюсы</span>
                  </div>
                  <ul className="ml-5 space-y-0.5">
                    {m.pros.map((p) => (
                      <li key={p} className="list-disc text-emerald-900/80">{p}</li>
                    ))}
                  </ul>

                  <div className="mt-2 flex items-center gap-1.5 font-bold text-rose-700">
                    <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>Минусы</span>
                  </div>
                  <ul className="ml-5 space-y-0.5">
                    {m.cons.map((c) => (
                      <li key={c} className="list-disc text-rose-900/80">{c}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Pathologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8 rounded-3xl border border-sky-200/70 bg-white/95 p-5 shadow-lg shadow-blue-500/5 backdrop-blur sm:p-7"
        >
          <div className="mb-5 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
                Патологии температуры
              </h2>
              <p className="text-xs text-blue-700/70">
                Отклонения от нормы и их причины
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PATHOLOGIES.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br ${p.color} p-0.5 shadow-lg`}
              >
                <div className="rounded-[14px] bg-white p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-md`}>
                      <p.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-blue-950">{p.name}</h3>
                      <div className="text-xs font-semibold tabular-nums text-rose-600">
                        {p.range}
                      </div>
                    </div>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-blue-900/80">
                    {p.description}
                  </p>
                  <div className="rounded-xl bg-slate-50 p-3 text-xs">
                    <div className="mb-1 font-bold text-slate-700">Частые причины:</div>
                    <div className="flex flex-wrap gap-1">
                      {p.causes.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700 shadow-sm"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Algorithm */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mb-8 rounded-3xl border border-sky-200/70 bg-white/95 p-5 shadow-lg shadow-blue-500/5 backdrop-blur sm:p-7"
        >
          <div className="mb-5 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md">
              <ListChecks className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
                Алгоритм измерения
              </h2>
              <p className="text-xs text-blue-700/70">
                Пошаговый порядок действий при ректальном измерении
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-violet-200 to-sky-200" />

            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="relative flex gap-4 pl-2"
                >
                  {/* Number bubble */}
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-sm font-extrabold text-white shadow-md ring-4 ring-white">
                    {step.number}
                  </div>
                  <div className="flex-1 rounded-2xl border border-violet-100 bg-violet-50/60 p-3">
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-violet-600" />
                      <h3 className="text-sm font-bold text-blue-950">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-blue-900/80">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.section>

        {/* Section 5: Thermoregulation pictogram */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-8 overflow-hidden rounded-3xl border border-sky-200/70 bg-white/95 shadow-lg shadow-blue-500/5 backdrop-blur"
        >
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 px-5 py-4 text-white">
            <div className="flex items-center gap-2">
              <HeartPulse className="h-5 w-5" />
              <h2 className="text-lg font-extrabold sm:text-xl">
                Терморегуляция у животных
              </h2>
            </div>
            <p className="mt-1 text-xs text-violet-50">
              Как животные охлаждаются и согреваются
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:p-6">
            {/* Cooling */}
            <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-rose-700">
                <Flame className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Охлаждение</h3>
              </div>
              <ul className="space-y-2 text-xs text-rose-900/80">
                <li className="flex gap-2">
                  <span className="text-xl">🐕</span>
                  <span><strong>Собаки:</strong> учащённое дыхание с открытым ртом (panting) — испарение с языка и слизистых</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">🐈</span>
                  <span><strong>Кошки:</strong> вылизывание шерсти — смачивание слюной для испарения</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">🐰</span>
                  <span><strong>Кролики:</strong> расширение сосудов ушей — отдача тепла через тонкую кожу</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">🐎</span>
                  <span><strong>Лошади:</strong> потоотделение — мощный механизм охлаждения через кожу</span>
                </li>
              </ul>
            </div>

            {/* Warming */}
            <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-cyan-700">
                <Snowflake className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wide">Согревание</h3>
              </div>
              <ul className="space-y-2 text-xs text-cyan-900/80">
                <li className="flex gap-2">
                  <span className="text-xl">❄️</span>
                  <span><strong>Дрожь:</strong> сократительный термогенез мышц — до 5-кратного увеличения теплопродукции</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">🧥</span>
                  <span><strong>Пилоэрекция:</strong> подъём шерсти — увеличение воздушной прослойки для изоляции</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">🥶</span>
                  <span><strong>Сворачивание:</strong> уменьшение площади поверхности тела для снижения потери тепла</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-xl">🩸</span>
                  <span><strong>Вазоконстрикция:</strong> периферические сосуды сужаются — кровь идёт к ядру</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-blue-700/50">
          Информационный раздел по клинической термометрии • Для ветеринарных специалистов и студентов
        </footer>
      </main>
    </div>
  )
}

/* ============== BACKGROUND BUBBLES ============== */
function BackgroundBubbles() {
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

/* ============== THERMOMETER ICON (large, decorative) ============== */
function ThermometerSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  )
}
