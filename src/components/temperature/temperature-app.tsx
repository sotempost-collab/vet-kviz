'use client'

import { motion } from 'framer-motion'
import {
  Thermometer,
  Brain,
  Flame,
  Snowflake,
  HeartPulse,
  Wind,
  Droplets,
  Stethoscope,
  AlertTriangle,
  BookOpen,
  Award,
  Activity,
  Eye,
  Zap,
  ShieldAlert,
  Microscope,
  Lightbulb,
  ArrowRight,
  Layers,
} from 'lucide-react'
import VideoPlayer from '@/components/shared/video-player'
import { VIDEOS } from '@/lib/videos'

// Картинка «Лихорадка vs Гипертермия»
const FEVER_HYPERTHERMIA_IMG = '/images/fever-vs-hyperthermia.webp'

export default function TemperatureApp({ onNavigateToQuiz }: { onNavigateToQuiz?: () => void } = {}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* ============= VIDEO PLAYER (вверху гайда) ============= */}
        <VideoPlayer
          src={VIDEOS['temperature-intro'].src}
          title={VIDEOS['temperature-intro'].title}
          subtitle={VIDEOS['temperature-intro'].subtitle}
        />

        {/* ============= HERO ============= */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-300 bg-white/95 shadow-2xl shadow-blue-500/20 backdrop-blur"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 px-6 py-10 text-white sm:px-10 sm:py-14">
            {/* Декоративный термометр справа */}
            <div className="absolute right-6 top-6 opacity-25">
              <Thermometer className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <Thermometer className="h-3.5 w-3.5" /> Гайд для будущего ветеринара
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
                Температура тела
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-blue-50 sm:text-lg">
                Не просто цифра на градуснике — это баланс между теплопродукцией и теплоотдачей.
                Главный инструмент — гипоталамус. Главная дилемма — лихорадка или гипертермия.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ============= РАЗДЕЛ 1: ЧТО ЭТО ТАКОЕ? ============= */}
        <SectionWrapper delay={0.05}>
          <SectionHeader
            number="1"
            title="ЧТО ЭТО ТАКОЕ?"
            subtitle="Определение"
            icon={Thermometer}
          />

          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-base leading-relaxed text-blue-900 sm:text-lg">
              <span className="font-bold uppercase text-blue-700">Температура тела</span> — это не
              просто цифра на градуснике. Это <strong className="text-blue-700">БАЛАНС</strong> между тем,
              сколько тепла организм произвёл (топка), и сколько он выбросил наружу (охлаждение).
              Это <strong className="text-blue-700">гомеостатический</strong> параметр.
            </p>
            <p className="text-sm leading-relaxed text-blue-800 sm:text-base">
              Проще говоря: ферменты и клетки работают идеально только при определённой температуре.
              Если жарко или холодно — биохимия <strong className="text-blue-700">«буксует»</strong>.
            </p>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Организм как печь: важно не только подкидывать дрова (еда/метаболизм), но и вовремя
              открывать заслонку (пот/дыхание). Иначе либо замёрзнешь, либо сгоришь.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 2: КАК ЭТО РАБОТАЕТ? + КАРТИНКА ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader
            number="2"
            title="КАК ЭТО РАБОТАЕТ?"
            subtitle="Физиология терморегуляции"
            icon={Brain}
          />

          <div className="space-y-5 px-5 py-5 sm:px-7">
            <p className="text-base leading-relaxed text-blue-900 sm:text-lg">
              Главный босс процесса — <strong className="text-blue-700">ГИПОТАЛАМУС</strong>{' '}
              (преоптическая область). Он работает как умный термостат в доме.
            </p>

            {/* 2.1 — Анатомия */}
            <SubSection title="2.1. Анатомия: Кто за что отвечает?">
              <ul className="space-y-3 text-sm sm:text-base">
                <AnatomyRow
                  icon={Brain}
                  label="Центр управления"
                  name="Гипоталамус"
                  desc="Слушает кровь, которая через него протекает."
                />
                <AnatomyRow
                  icon={Activity}
                  label="Датчики (Периферия)"
                  name="Нервные окончания в коже"
                  desc="Кричат гипоталамусу: «Холодно!» или «Жарко!»."
                />
              </ul>

              <div className="mt-4 rounded-2xl border-2 border-orange-200 bg-orange-50/60 p-4">
                <div className="mb-2 flex items-center gap-2 text-orange-700">
                  <Flame className="h-5 w-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wide">
                    Обогреватели (Теплопродукция)
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-orange-900/80">
                  <li>
                    <strong className="text-orange-700">Мышцы:</strong> Дрожь — это способ согреться движением.
                  </li>
                  <li>
                    <strong className="text-orange-700">Бурая жировая ткань (BAT):</strong> Супертопливо для щенков
                    и котят. В ней много митохондрий и белок <strong className="text-orange-700">термогенин (UCP1)</strong>.
                    Он хитро обманывает клетку: вместо энергии (АТФ) сразу вырабатывает тепло.
                  </li>
                  <li>
                    <strong className="text-orange-700">Печень:</strong> Греет нас в покое своим активным метаболизмом.
                  </li>
                </ul>
              </div>
            </SubSection>

            {/* 2.2 — Как мы охлаждаемся? */}
            <SubSection title="2.2. Как мы охлаждаемся? (Физика)">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <PhysicsCard
                  icon={Zap}
                  name="Излучение"
                  desc="Просто излучаем тепло (ИК-волны). Главный способ в покое."
                />
                <PhysicsCard
                  icon={Wind}
                  name="Конвекция"
                  desc="Ветерок уносит тепло от кожи."
                />
                <PhysicsCard
                  icon={Droplets}
                  name="Кондукция"
                  desc="Лежим на холодном кафеле — тепло уходит в плитку."
                />
                <PhysicsCard
                  icon={Activity}
                  name="Испарение"
                  desc="У собак и кошек нет потовых желез по всему телу. Они дышат часто-часто (полипноэ), испаряя влагу с языка и слизистых. Ещё немного потеют через подушечки лап."
                />
              </div>
            </SubSection>

            {/* === ВСТАВКА КАРТИНКИ ПОД РАЗДЕЛ 2 === */}
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-6 overflow-hidden rounded-2xl border-2 border-blue-300 bg-white shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Ключевое отличие
                  </span>
                </div>
              </div>
              <img
                src={FEVER_HYPERTHERMIA_IMG}
                alt="Сравнение лихорадки и гипертермии: лихорадка — регулируемое повышение уставки термостата мозга; гипертермия — срыв системы охлаждения при нормальной уставке"
                className="w-full"
              />
              <figcaption className="border-t border-blue-100 bg-blue-50/60 px-4 py-3 text-xs text-blue-900">
                <strong className="uppercase text-blue-700">Слева (синее)</strong> — Лихорадка (Fever): мозг
                намеренно поднимает уставку. <strong className="uppercase text-blue-700">Справа (красное)</strong> —
                Гипертермия: системы охлаждения дают сбой при нормальной уставке.
              </figcaption>
            </motion.figure>

            {/* 2.3 — Норма жизни */}
            <SubSection title="2.3. Норма жизни">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-4 text-center">
                  <div className="text-4xl">🐶</div>
                  <div className="mt-1 text-sm font-bold uppercase text-amber-700">Собаки</div>
                  <div className="text-2xl font-extrabold tabular-nums text-amber-900">
                    37.5–39.0 °C
                  </div>
                  <div className="text-xs text-amber-700/80">среднее 38.5 °C</div>
                </div>
                <div className="rounded-2xl border-2 border-violet-300 bg-violet-50/70 p-4 text-center">
                  <div className="text-4xl">🐱</div>
                  <div className="mt-1 text-sm font-bold uppercase text-violet-700">Кошки</div>
                  <div className="text-2xl font-extrabold tabular-nums text-violet-900">
                    38.0–39.2 °C
                  </div>
                  <div className="text-xs text-violet-700/80">среднее 38.6 °C</div>
                </div>
              </div>
              <div className="mt-3 rounded-xl bg-blue-50 px-4 py-3 text-xs text-blue-900">
                <strong className="uppercase text-blue-700">Нюансы:</strong> утром прохладнее, чем вечером.
                После еды, бега или стресса температура чуть растёт. У самок во время течки тоже может
                быть выше.
              </div>
            </SubSection>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Щенки греются бурой жировой тканью (магия митохондрий!), а взрослые собаки охлаждаются
              языком. Если собака лежит на холодном полу — она не ленится, она занимается физикой
              (кондукцией).
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 3: КАК ИЗМЕРЯТЬ? ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader
            number="3"
            title="КАК ИЗМЕРЯТЬ?"
            subtitle="Клинический осмотр"
            icon={Stethoscope}
          />

          <div className="space-y-5 px-5 py-5 sm:px-7">
            {/* 3.1 Методы */}
            <SubSection title="3.1. Методы (От лучшего к худшему)">
              <div className="space-y-3">
                <MethodCard
                  rank="🥇"
                  name="Ректально"
                  label="Золотой стандарт"
                  description="Электронный термометр. Кошки: 1–2 см, Собаки: 2–3 см глубины. Ждать 30–60 сек."
                  color="amber"
                />
                <MethodCard
                  rank="🥈"
                  name="В ухо (Инфракрасно)"
                  label="Быстро, но с погрешностью"
                  description="Меряет тепловое излучение барабанной перепонки. Неточно, если там сера или отит."
                  color="emerald"
                />
                <MethodCard
                  rank="🥉"
                  name="Бесконтактно (Нос/пах)"
                  label="Грубая оценка"
                  description="Только для оценки «горячий или нет?». Очень большая погрешность."
                  color="rose"
                />
                <MethodCard
                  rank="🏥"
                  name="В стационаре"
                  label="Через пищевод/мочевой пузырь"
                  description="Под наркозом. Используется для постоянного мониторинга ядра."
                  color="violet"
                />
              </div>
            </SubSection>

            {/* 3.2 Правило Триады */}
            <SubSection title="3.2. Правило Триады">
              <p className="mb-3 text-sm font-bold text-blue-700 sm:text-base">
                НИКОГДА НЕ СМОТРИТЕ НА ТЕМПЕРАТУРУ ИЗОЛИРОВАННО!
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <TriadCard
                  icon={HeartPulse}
                  title="ЧСС"
                  desc="Собаки 60–120 уд/мин, Кошки 140–220 уд/мин"
                  color="from-rose-400 to-pink-500"
                />
                <TriadCard
                  icon={Wind}
                  title="ЧДД"
                  desc="Собаки 10–30 в мин, Кошки 20–30 в мин"
                  color="from-emerald-400 to-teal-500"
                />
                <TriadCard
                  icon={Eye}
                  title="Слизистые"
                  desc="Розовые? ВКН (капиллярное наполнение) < 2 сек?"
                  color="from-sky-400 to-blue-500"
                />
              </div>
            </SubSection>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Градусник в прямой кишке — друг врача, но враг пациента. Зато самый честный. А если мерить
              нос бесконтактно — готовьтесь к сюрпризам, как в лотерее.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4: КОГДА ЧТО-ТО ПОШЛО НЕ ТАК ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader
            number="4"
            title="КОГДА ЧТО-ТО ПОШЛО НЕ ТАК"
            subtitle="Патология"
            icon={AlertTriangle}
          />

          <div className="space-y-5 px-5 py-5 sm:px-7">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700 sm:text-base">
              Все проблемы делятся на «Слишком горячо» и «Слишком холодно».
            </p>

            {/* 4.1 — ГИПЕРТЕРМИЧЕСКИЕ */}
            <SubSection title="4.1. ГИПЕРТЕРМИЧЕСКИЕ СОСТОЯНИЯ">
              {/* А. Лихорадка */}
              <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Flame className="h-5 w-5 text-amber-600" />
                  <h4 className="text-sm font-bold uppercase tracking-wide text-amber-700">
                    А. Лихорадка (Febris) — «Умный перегрев»
                  </h4>
                </div>
                <p className="mb-3 text-xs text-amber-900/80 sm:text-sm">
                  Организм сам решил стать горячее, чтобы победить инфекцию.
                </p>
                <div className="mb-3 rounded-lg bg-white/60 p-2 text-xs text-amber-900">
                  <strong className="uppercase">Виновники — Пирогены:</strong>
                  <ul className="ml-4 mt-1 list-disc space-y-0.5">
                    <li>Внешние: бактерии (липополисахариды), вирусы</li>
                    <li>Внутренние: цитокины (ИЛ-1, ИЛ-6, ФНО-α) — говорят гипоталамусу «подними уставку!»</li>
                  </ul>
                </div>
                <div className="text-xs font-bold uppercase text-amber-700">3 Стадии лихорадки:</div>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <StageCard
                    name="Подъём"
                    latin="(Incrementi)"
                    desc="Дрожь, сосуды сжались, бледные слизистые, шерсть дыбом. Теплопродукция > Теплоотдачи."
                  />
                  <StageCard
                    name="Разгар"
                    latin="(Fastigii)"
                    desc="Равновесие на высоком уровне. Горячий, красный, частое дыхание. Теплопродукция = Теплоотдаче."
                  />
                  <StageCard
                    name="Падение"
                    latin="(Decrementi)"
                    desc="Литическое (медленно, безопасно) или Критическое (резко, опасно коллапсом!)."
                  />
                </div>
              </div>

              {/* Б. Гипертермия не лихорадка */}
              <div className="mt-3 rounded-2xl border-2 border-rose-300 bg-rose-50/50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-rose-600" />
                  <h4 className="text-sm font-bold uppercase tracking-wide text-rose-700">
                    Б. Гипертермия (Не лихорадка) — «Срыв тормозов»
                  </h4>
                </div>
                <p className="mb-3 text-xs text-rose-900/80 sm:text-sm">
                  Гипоталамус хочет нормальную температуру, но тело перегрелось. Уставка не менялась.
                </p>
                <div className="space-y-1.5 text-xs text-rose-900/80">
                  <p>
                    <strong className="uppercase text-rose-700">Тепловой удар:</strong> Забыли собаку
                    в машине. Влажно и жарко.
                  </p>
                  <p>
                    <strong className="uppercase text-rose-700">Физическая:</strong> Слишком активно
                    бегали (охота, гонки).
                  </p>
                  <p>
                    <strong className="uppercase text-rose-700">Злокачественная:</strong> Генетический
                    дефект (рецепторы рианодина). Мышцы спазмируются от анестезии, температура летит вверх.
                  </p>
                </div>
              </div>
            </SubSection>

            {/* 4.2 — ГИПОТЕРМИЧЕСКИЕ */}
            <SubSection title="4.2. ГИПОТЕРМИЧЕСКИЕ СОСТОЯНИЯ">
              <div className="rounded-2xl border-2 border-cyan-300 bg-cyan-50/50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Snowflake className="h-5 w-5 text-cyan-600" />
                  <h4 className="text-sm font-bold uppercase tracking-wide text-cyan-700">
                    ❄️ Температура ядра ниже нормы
                  </h4>
                </div>
                <p className="mb-3 text-xs text-cyan-900/80 sm:text-sm">
                  <strong className="text-cyan-700">&lt; 37.5 °C</strong> у собак,{' '}
                  <strong className="text-cyan-700">&lt; 38.0 °C</strong> у кошек.
                </p>
                <div className="mb-3 rounded-lg bg-white/60 p-2 text-xs text-cyan-900">
                  <strong className="uppercase">Причины:</strong> Холод на улице, мокрая шерсть,
                  болезни (гипотиреоз, шок, наркоз, сепсис).
                </div>
                <div className="text-xs font-bold uppercase text-cyan-700">Степени тяжести:</div>
                <div className="mt-2 space-y-2">
                  <SeverityCard
                    level="Лёгкая"
                    range="32–37 °C"
                    desc="Дрожит, сердце бьётся быстро, много писает (холодовой диурез). Сознание сохранено."
                    color="emerald"
                  />
                  <SeverityCard
                    level="Умеренная"
                    range="28–32 °C"
                    desc="Перестал дрожать, сонный (сопор), пульс редкий. Риск фибрилляции желудочков."
                    color="amber"
                  />
                  <SeverityCard
                    level="Тяжёлая"
                    range="< 28 °C"
                    desc="Кома. Рефлексов нет. Сердце может остановиться (асистолия)."
                    color="rose"
                  />
                </div>
              </div>
            </SubSection>

            {/* 4.3 — Что видит патологоанатом? */}
            <SubSection title="4.3. Что видит патологоанатом?">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/60 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Flame className="h-5 w-5 text-rose-600" />
                    <h5 className="text-xs font-bold uppercase tracking-wide text-rose-700">
                      От жары
                    </h5>
                  </div>
                  <p className="text-xs text-rose-900/80">
                    Белки денатурировали («сварились»). Некроз в мозге, печени, почках. Кровь свернулась
                    в мелких сосудах (<strong>ДВС-синдром</strong>).
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-cyan-300 bg-cyan-50/60 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Snowflake className="h-5 w-5 text-cyan-600" />
                    <h5 className="text-xs font-bold uppercase tracking-wide text-cyan-700">
                      От холода
                    </h5>
                  </div>
                  <p className="text-xs text-cyan-900/80">
                    Вода в клетках превратилась в кристаллы льда → разорвала мембраны. Ткани отмерли
                    (некроз), особенно кончики ушей, хвоста и лап.
                  </p>
                </div>
              </div>
            </SubSection>

            <Callout variant="warning" emoji="😂" title="Мини-заключение">
              Лихорадка — это когда организм говорит: <strong>«Я сам так хочу, мне надо победить вирус»</strong>.
              Гипертермия — это когда организм орёт: <strong>«Выключите отопление, я горю!»</strong>.
              А гипотермия — это режим энергосбережения, который лучше не включать без спроса.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ИТОГОВОЕ ЗАКЛЮЧЕНИЕ ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 p-1 shadow-2xl"
        >
          <div className="rounded-[22px] bg-white px-6 py-7 sm:px-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight text-blue-700 sm:text-2xl">
                  Общее заключение
                </h2>
                <p className="text-xs font-medium text-blue-700/70">Для студента</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm leading-relaxed text-blue-900 sm:text-base">
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  <strong className="uppercase text-blue-700">Температура тела</strong> — это витальный
                  признак, который нельзя рассматривать в отрыве от других показателей.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  Это отражение работы мозга (гипоталамуса), сердца, сосудов и обмена веществ.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  <strong className="uppercase text-blue-700">Главное отличие:</strong> Лихорадка —
                  перенастройка «термостата» вверх (защитная реакция). Гипертермия — несостоятельность
                  механизмов теплоотдачи (угроза жизни).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  Всегда оценивайте картину целиком: <strong className="uppercase">Температура + Пульс + Дыхание + Цвет слизистых.</strong>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  Помните про анатомию: <strong>бурый жир греет малышей</strong>, а учащённое дыхание
                  охлаждает взрослых животных.
                </span>
              </li>
            </ul>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-sm text-blue-900">
              <div className="mb-1 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span className="font-bold uppercase text-amber-700">😂 Финальная шутка</span>
              </div>
              Хороший ветеринар знает, что 39.0 °C у кошки после активной игры — это норма, а 39.0 °C у
              спящего кота в углу — повод задуматься. <strong className="text-blue-700">НЕ ЛЕЧИТЕ ЦИФРЫ, ЛЕЧИТЕ ПАЦИЕНТА!</strong> 🐾
            </div>
          </div>
        </motion.section>

        {/* CTA: переход к тесту */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          onClick={onNavigateToQuiz}
          disabled={!onNavigateToQuiz}
          className="group mb-8 w-full rounded-3xl border-2 border-blue-300 bg-white p-6 text-center shadow-lg transition-all hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
        >
          <Microscope className="mx-auto h-10 w-10 text-blue-600 transition-transform group-hover:scale-110" />
          <h3 className="mt-3 text-xl font-black uppercase text-blue-700">
            Готов проверить себя?
          </h3>
          <p className="mt-2 text-sm text-blue-900/80">
            5 вопросов по температуре — на закрепление материала. Нажми, чтобы пройти тест
            <strong className="text-blue-700"> «Температура — проверь себя»</strong>.
          </p>
          <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all group-hover:from-orange-600 group-hover:to-rose-600 group-hover:shadow-lg">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="uppercase tracking-wide">Перейти к тесту</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-blue-700/60">
          Информационный гайд по клинической термометрии • Для ветеринарных специалистов и студентов
        </footer>
      </main>
    </div>
  )
}

/* ============= SUB-COMPONENTS ============= */
function SectionWrapper({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-300 bg-white/95 shadow-xl shadow-blue-500/10 backdrop-blur"
    >
      {children}
    </motion.section>
  )
}

function SectionHeader({
  number,
  title,
  subtitle,
  icon: Icon,
}: {
  number: string
  title: string
  subtitle: string
  icon: typeof Thermometer
}) {
  return (
    <div className="flex items-center gap-3 border-b-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-4 sm:px-7">
      <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
        <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shadow">
          {number}
        </span>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h2 className="text-lg font-black uppercase tracking-tight text-blue-700 sm:text-2xl">
          {title}
        </h2>
        <p className="text-xs font-medium text-blue-700/70 sm:text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-black uppercase tracking-wide text-blue-700 sm:text-base">
        {title}
      </h3>
      {children}
    </div>
  )
}

function AnatomyRow({
  icon: Icon,
  label,
  name,
  desc,
}: {
  icon: typeof Brain
  label: string
  name: string
  desc: string
}) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/40 p-3">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase text-blue-700">{label}</div>
        <div className="text-sm font-bold text-blue-900">{name}</div>
        <div className="text-xs text-blue-900/80">{desc}</div>
      </div>
    </li>
  )
}

function PhysicsCard({
  icon: Icon,
  name,
  desc,
}: {
  icon: typeof Zap
  name: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-3">
      <div className="mb-1.5 flex items-center gap-2">
        <Icon className="h-4 w-4 text-blue-600" />
        <h4 className="text-sm font-bold uppercase text-blue-700">{name}</h4>
      </div>
      <p className="text-xs text-blue-900/80">{desc}</p>
    </div>
  )
}

function MethodCard({
  rank,
  name,
  label,
  description,
  color,
}: {
  rank: string
  name: string
  label: string
  description: string
  color: 'amber' | 'emerald' | 'rose' | 'violet'
}) {
  const colorMap = {
    amber: 'border-amber-300 bg-amber-50/60',
    emerald: 'border-emerald-300 bg-emerald-50/60',
    rose: 'border-rose-300 bg-rose-50/60',
    violet: 'border-violet-300 bg-violet-50/60',
  }
  return (
    <div className={`rounded-2xl border-2 p-4 ${colorMap[color]}`}>
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-2xl">{rank}</span>
        <div>
          <h4 className="text-base font-black uppercase text-blue-900">{name}</h4>
          <div className="text-xs font-medium text-blue-700">{label}</div>
        </div>
      </div>
      <p className="text-xs text-blue-900/80 sm:text-sm">{description}</p>
    </div>
  )
}

function TriadCard({
  icon: Icon,
  title,
  desc,
  color,
}: {
  icon: typeof HeartPulse
  title: string
  desc: string
  color: string
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white p-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-2 text-base font-black uppercase text-blue-900">{title}</div>
      <div className="text-xs text-blue-900/80">{desc}</div>
    </div>
  )
}

function StageCard({ name, latin, desc }: { name: string; latin: string; desc: string }) {
  return (
    <div className="rounded-xl border border-amber-200 bg-white/70 p-2 text-center">
      <div className="text-sm font-bold uppercase text-amber-700">{name}</div>
      <div className="text-[10px] italic text-amber-600">{latin}</div>
      <div className="mt-1 text-[10px] text-amber-900/80">{desc}</div>
    </div>
  )
}

function SeverityCard({
  level,
  range,
  desc,
  color,
}: {
  level: string
  range: string
  desc: string
  color: 'emerald' | 'amber' | 'rose'
}) {
  const colorMap = {
    emerald: 'border-emerald-300 bg-emerald-50/60',
    amber: 'border-amber-300 bg-amber-50/60',
    rose: 'border-rose-300 bg-rose-50/60',
  }
  return (
    <div className={`flex items-start gap-3 rounded-xl border-2 p-3 ${colorMap[color]}`}>
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-bold uppercase text-blue-900">{level}</span>
          <span className="text-xs font-mono text-blue-700">{range}</span>
        </div>
        <div className="mt-0.5 text-xs text-blue-900/80">{desc}</div>
      </div>
    </div>
  )
}

function Callout({
  variant,
  emoji,
  title,
  children,
}: {
  variant: 'info' | 'warning'
  emoji: string
  title: string
  children: React.ReactNode
}) {
  const bg = variant === 'info' ? 'bg-blue-50/80 border-blue-300' : 'bg-amber-50/80 border-amber-300'
  const headerColor = variant === 'info' ? 'text-blue-700' : 'text-amber-700'
  return (
    <div className={`rounded-2xl border-2 ${bg} p-4`}>
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        <h4 className={`text-sm font-bold uppercase tracking-wide ${headerColor}`}>{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-blue-900/90">{children}</p>
    </div>
  )
}

/* ============= BACKGROUND BUBBLES ============= */
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
