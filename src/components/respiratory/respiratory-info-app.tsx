'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Wind,
  Activity,
  Brain,
  AlertTriangle,
  BookOpen,
  Award,
  Lightbulb,
  ArrowRight,
  Zap,
  Microscope,
  Stethoscope,
  Heart,
  Ear,
  Volume2,
  Play,
  Pause,
  GitBranch,
  Eye,
} from 'lucide-react'

/* ============= Аудио-плейлист: данные ============= */
type SoundEntry = {
  key: string
  file: string
  title: string
  emoji: string
  desc: string
  cause: string
  color: string
}

const SOUNDS: SoundEntry[] = [
  {
    key: 'vesicular',
    file: '/audio/resp-vesicular.wav',
    title: 'Везикулярное (норма)',
    emoji: '🍃',
    desc: 'Мягкий дующий звук: вдох + 1/3 выдоха. Шуршание альвеол.',
    cause: 'Норма. Слышно над всей поверхностью лёгких.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    key: 'bronchial',
    file: '/audio/resp-bronchial.wav',
    title: 'Бронхиальное',
    emoji: '📯',
    desc: 'Громкий трубчатый звук, выдох громче вдоха.',
    cause: 'Норма — только над трахеей. На периферии — лёгкое уплотнилось.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    key: 'crackles-fine',
    file: '/audio/resp-crackles-fine.wav',
    title: 'Мелкопузырчатые хрипы',
    emoji: '🥶',
    desc: 'Треск, как трение пряди волос у уха. Конец вдоха.',
    cause: 'Отёк лёгких, интерстициальный фиброз, ранняя пневмония.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    key: 'crackles-coarse',
    file: '/audio/resp-crackles-coarse.wav',
    title: 'Крупнопузырчатые хрипы',
    emoji: '🫧',
    desc: 'Бульканье воды через соломинку. Крупные бронхи.',
    cause: 'Тяжёлая пневмония, бронхит (слизь/гной/кровь в бронхах).',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    key: 'wheezes',
    file: '/audio/resp-wheezes.wav',
    title: 'Свистящие хрипы (Wheezes)',
    emoji: '🎶',
    desc: 'Музыкальный свист, чаще на выдохе. Флейта или сдувающийся шарик.',
    cause: 'Астма кошек, ХОБЛ — спазм бронхиол.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    key: 'pleural-rub',
    file: '/audio/resp-pleural-rub.wav',
    title: 'Шум трения плевры',
    emoji: '📄',
    desc: 'Скрип новой кожаной сумки или наждачной бумаги. На вдохе и выдохе.',
    cause: 'Фибринозный плеврит («волосатые лёгкие»).',
    color: 'from-rose-500 to-pink-600',
  },
  {
    key: 'stridor',
    file: '/audio/resp-stridor.wav',
    title: 'Стридор',
    emoji: '🚨',
    desc: 'Грубый громкий свист, слышен на расстоянии. На вдохе.',
    cause: 'Стеноз верхних дыхательных путей: гортань, трахея, инородное тело.',
    color: 'from-red-500 to-rose-700',
  },
]

/* ============= Главный компонент ============= */
export default function RespiratoryInfoApp({ onNavigateToQuiz }: { onNavigateToQuiz?: () => void }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* ============= HERO ============= */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-sky-300 bg-white/95 shadow-2xl shadow-sky-500/20 backdrop-blur"
        >
          <div className="relative bg-gradient-to-br from-sky-600 via-cyan-500 to-emerald-500 px-6 py-10 text-white sm:px-10 sm:py-14">
            <div className="absolute right-6 top-6 opacity-25">
              <Wind className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <Microscope className="h-3.5 w-3.5" /> Гайд для будущего ветеринара
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Дыхательная система
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-sky-50 sm:text-lg">
                Высокоточный завод, где «шоссе» доставляет груз, а «цех» его обрабатывает.
                Газообмен, ЧДД, типы дыхания, плейлист шумов и кашель — от анатомии до клинического осмотра.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 border-t-2 border-sky-200 p-5 sm:grid-cols-3 sm:p-6">
            <FormulaChip label="Два отдела" value="Шоссе (проводящие) + Цех (респираторный)" icon={GitBranch} />
            <FormulaChip label="ЧДД: собака / кошка" value="10–30 / 15–30 в мин" icon={Activity} />
            <FormulaChip label="SRR (золотой стандарт)" value="Строго < 30 во сне" icon={Heart} />
          </div>
        </motion.section>

        {/* ============= ВВЕДЕНИЕ: АНАТОМИЯ SVG ============= */}
        <SectionWrapper delay={0.05}>
          <SectionHeader number="0" title="ОБЩАЯ КАРТИНА СТРОЕНИЯ" subtitle="Схема дыхательного тракта собаки" icon={Wind} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <RespiratoryTractSVG />
            <p className="text-sm leading-relaxed text-sky-900 sm:text-base">
              Воздух входит через <strong className="text-sky-700">нос</strong>, согревается и увлажняется
              в носовой полости → проходит через <strong className="text-sky-700">носоглотку и гортань</strong> →
              по <strong className="text-sky-700">трахее</strong> (С-образные хрящи, разрыв смотрит дорсально)
              спускается к бифуркации → делится на <strong className="text-sky-700">главные бронхи</strong> →
              ветвится до 16-го порядка (проводящие пути, «шоссе») → переходит в респираторные бронхиолы,
              альвеолярные ходы и <strong className="text-sky-700">альвеолы</strong> (респираторный отдел, «цех»),
              где и идёт газообмен O₂ ↔ CO₂.
            </p>
            <Callout variant="info" emoji="🧠" title="НЛП-якорь">
              <strong className="uppercase text-sky-700">«Дыхательная система — это не набор трубок.</strong>{' '}
              Это высокоточный завод, где «шоссе» доставляет груз, а «цех» его обрабатывает».
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 1: ОПРЕДЕЛЕНИЕ, СТРУКТУРА, АНАТОМИЯ ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader number="1" title="СТРОЕНИЕ И ГИСТОЛОГИЯ" subtitle="Два отдела + биомеханика" icon={GitBranch} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-sky-900 sm:text-base">
              Дыхательная система обеспечивает <strong className="text-sky-700">газообмен (O₂ ↔ CO₂)</strong>,
              поддерживает кислотно-щелочное равновесие, участвует в обонянии, голосообразовании и терморегуляции.
              Делим её на два чётких отдела — «шоссе» и «цех».
            </p>

            {/* Два отдела */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DepartmentCard
                emoji="🛣️"
                title="Шоссе: воздухоносные пути"
                subtitle="Проводящие"
                structures={['Нос', 'Носоглотка', 'Гортань', 'Трахея', 'Бронхи до 16-го порядка']}
                function="Провести, согреть, увлажнить, очистить"
                color="from-sky-500 to-cyan-600"
              />
              <DepartmentCard
                emoji="🏭"
                title="Цех: респираторный отдел"
                subtitle="Дышательный"
                structures={['Респираторные бронхиолы', 'Альвеолярные ходы', 'Альвеолы']}
                function="Газообмен O₂ ↔ CO₂"
                color="from-emerald-500 to-teal-600"
              />
            </div>

            {/* Таблица: анатомические якоря */}
            <div className="overflow-hidden rounded-2xl border-2 border-sky-200">
              <div className="bg-gradient-to-r from-sky-600 to-cyan-500 px-4 py-2 text-white">
                <div className="flex items-center gap-2">
                  <Microscope className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Анатомические якоря</span>
                </div>
              </div>
              <div className="divide-y divide-sky-100 bg-white">
                <AnatomyRow structure="Нос" dog="У собак обонятельная зона — до 70% площади" cat="У кошек меньше, но есть вомероназальный орган Якобсона (детектор феромонов)" />
                <AnatomyRow structure="Гортань" dog="Стандартная подвижность хрящей" cat="Черпаловидные хрящи супер-подвижны → мурлыканье (вибрация ложных связок + гидродинамика)" />
                <AnatomyRow structure="Трахея" dog="40–45 С-образных колец" cat="45–55 С-образных колец. Разрыв колец смотрит дорсально (перепончатая мышца)" />
                <AnatomyRow structure="Лёгкие" dog="Правое 4 доли, левое 2 (краниальная часто делится). Итого 6–7 долей" cat="Правое 4 доли, левое: единая краниальная доля. Итого 6 долей" />
              </div>
            </div>

            <Callout variant="warning" emoji="⚠️" title="Клинический якорь">
              <strong className="uppercase text-amber-700">Правая средняя доля у кошек</strong> — излюбленное
              место для ателектазов и астматических пробок. Запомните это как «слабое звено кошачьей цепи».
            </Callout>

            {/* Гистология: 3 карты клеток */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-sky-700 sm:text-lg">
              Гистология альвеол
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <CellTypeCard
                name="Пневмоциты I типа"
                shape="Плоские"
                role="Покрывают 95% поверхности альвеолы. Через них идёт газ."
                color="from-sky-500 to-cyan-600"
              />
              <CellTypeCard
                name="Пневмоциты II типа"
                shape="Кубические"
                role="Секретируют сурфактант — не дают альвеолам слипнуться."
                color="from-violet-500 to-purple-600"
              />
              <CellTypeCard
                name="Макрофаги"
                shape="Подвижные"
                role="«Пылесосы» иммунной системы. Поглощают пыль и микробов."
                color="from-rose-500 to-pink-600"
              />
            </div>

            <InfoBox color="blue" title="Проводящие пути — мукоцилиарный эскалатор">
              <strong className="uppercase text-sky-700">Псевдомногорядный реснитчатый эпителий + бокаловидные клетки.</strong>{' '}
              Реснички бьют к глотке, выметая слизь с пылью и микробами вверх. Это «эскалатор»,
              вывозящий мусор. Без него лёгкие превратились бы в помойку.
            </InfoBox>

            <KeyPhrase>
              <strong className="uppercase text-sky-700">Сурфактант</strong> — это «мыльная плёнка» альвеол.
              Снижает поверхностное натяжение, не даёт стенкам слипнуться. Без него лёгкие
              превращаются в мокрую губку, которую невозможно надуть.
            </KeyPhrase>

            <Callout variant="info" emoji="😼" title="Профессор">
              «Если вы думаете, что сурфактант — это марка стирального порошка, вы правы. Он делает то же
              самое: снижает поверхностное натяжение, чтобы „пузыри“ (альвеолы) не слиплись в мокрый ком».
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 2: ЧДД ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader number="2" title="ЧАСТОТА ДЫХАТЕЛЬНЫХ ДВИЖЕНИЙ" subtitle="Приборная панель организма" icon={Activity} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-sky-900 sm:text-base">
              <strong className="uppercase text-sky-700">ЧДД — это спидометр организма.</strong>{' '}
              Если стрелка зашкаливает, неважно, красивая у машины краска — под капотом пожар.
            </p>

            {/* Норма ЧДД: таблица */}
            <div className="overflow-hidden rounded-2xl border-2 border-sky-200">
              <div className="bg-gradient-to-r from-sky-600 to-cyan-500 px-4 py-2 text-white">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Норма ЧДД (в покое)</span>
                </div>
              </div>
              <div className="grid grid-cols-3 bg-white text-center">
                <div className="border-r border-sky-100 p-3">
                  <div className="text-[10px] font-bold uppercase text-sky-700/70">Вид</div>
                </div>
                <div className="border-r border-sky-100 p-3">
                  <div className="text-[10px] font-bold uppercase text-sky-700/70">Взрослые</div>
                </div>
                <div className="p-3">
                  <div className="text-[10px] font-bold uppercase text-sky-700/70">Молодняк</div>
                </div>
              </div>
              <div className="grid grid-cols-3 border-t border-sky-100 bg-sky-50/40 text-center">
                <div className="border-r border-sky-100 p-3 text-sm font-black uppercase text-sky-900">🐶 Собака</div>
                <div className="border-r border-sky-100 p-3 text-base font-black text-sky-900">10–30 / мин</div>
                <div className="p-3 text-base font-black text-sky-900">до 40 / мин</div>
              </div>
              <div className="grid grid-cols-3 border-t border-sky-100 bg-white text-center">
                <div className="border-r border-sky-100 p-3 text-sm font-black uppercase text-sky-900">🐱 Кошка</div>
                <div className="border-r border-sky-100 p-3 text-base font-black text-sky-900">15–30 / мин</div>
                <div className="p-3 text-base font-black text-sky-900">до 40 / мин</div>
              </div>
            </div>

            <FormulaBox title="SRR — Sleeping Respiratory Rate" formula="Строго < 30 / мин (идеал 15–25)" accent="emerald" />

            <InfoBox color="blue" title="Почему SRR — золотой стандарт">
              SRR — это ЧДД <strong>во сне</strong>. Главная фишка: исключает стрессовый фактор клиники
              (прикосновение = ложная тахипноэ). Это <strong className="uppercase text-sky-700">ключевой маркер
              компенсированной сердечной недостаточности</strong>. Владелец считает дома, лёжа на диване
              рядом со спящим питомцем — 30 секунд × 2.
            </InfoBox>

            {/* Патофизиология нарушений */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PathologyCard
                emoji="📈"
                title="Тахипноэ (> нормы)"
                causes={['Гипоксия, гиперкапния', 'Рестрикция: жидкость/воздух в плевре', 'Метаболический ацидоз (Куссмауль)', 'Боль, стресс']}
                color="from-rose-500 to-red-600"
              />
              <PathologyCard
                emoji="📉"
                title="Брадипноэ (< нормы)"
                causes={['Угнетение ЦНС (передозировка, ЧМТ)', 'Гипотермия', 'Агональное состояние']}
                color="from-indigo-500 to-blue-700"
              />
            </div>

            {/* Клинический протокол */}
            <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-sky-700">
                <Stethoscope className="h-4 w-4" /> Клинический осмотр — протокол
              </div>
              <ol className="space-y-1.5 text-sm text-sky-900">
                <li><strong className="text-sky-700">1.</strong> Визуально в покое: 30 сек × 2. <strong>Не трогаем!</strong> Прикосновение = стресс = ложная тахипноэ.</li>
                <li><strong className="text-sky-700">2.</strong> Оценка усилия: втяжение межреберий, абдоминальный толчок, дыхание открытым ртом.</li>
                <li><strong className="text-sky-700">3.</strong> Аускультация и перфузия: цвет слизистых (цианоз = поздняя гипоксемия!), ВКН &lt; 2 сек.</li>
              </ol>
            </div>

            <Callout variant="warning" emoji="🚨" title="Железное правило для кошек">
              Если кошка дышит с открытым ртом — она <strong className="uppercase text-amber-700">не «устала играть»</strong>{' '}
              и не «как собака». Для кошки это эквивалент крика «Я задыхаюсь, вызывайте реанимацию!».
              Исключение — 30 секунд после бешеной беготни с лазерной указкой. Но даже тогда — красный флаг.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 3: ТИП ДЫХАНИЯ ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader number="3" title="ТИП ДЫХАНИЯ" subtitle="Визуальный канал — диагноз за 3 метра" icon={Eye} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-sky-900 sm:text-base">
              «Диагноз начинается за 3 метра до пациента. Раньше, чем вы достанете фонендоскоп».
            </p>

            <InfoBox color="blue" title="Физиологическая норма">
              <strong className="uppercase text-sky-700">Смешанный (грудобрюшной) тип</strong> с преобладанием
              грудного компонента. Грудь расширяется, живот мягко выпячивается. Синхронный танец.
            </InfoBox>

            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-sky-700 sm:text-lg">
              🔴 Патологические типы — красные флаги
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <BreathingPatternCard
                emoji="🔴"
                title="Вынужденный брюшной"
                pattern="Дышит только животом, грудь стоит"
                cause="Организм щадит больную грудную клетку: переломы рёбер, плеврит"
                color="from-rose-500 to-pink-600"
              />
              <BreathingPatternCard
                emoji="🔴"
                title="Парадоксальное"
                pattern="На вдохе грудь расширяется, а живот втягивается внутрь"
                cause="Диафрагма не работает: разрыв, паралич, истощение. Грудь засасывает живот, как пылесос ковёр"
                color="from-rose-600 to-red-700"
              />
            </div>

            {/* Патологические ритмы */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-sky-700 sm:text-lg">
              Патологические ритмы
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <RhythmCard
                name="Куссмауля"
                pattern="Глубокое, шумное"
                cause="Кислота в крови. Организм «выдувает» CO₂ (метаболический ацидоз)"
                color="from-amber-500 to-orange-600"
              />
              <RhythmCard
                name="Чейна-Стокса"
                pattern="Волна: нарастание → пик → спад → апноэ"
                cause="Поражение мозга или терминальная сердечная недостаточность"
                color="from-violet-500 to-purple-600"
              />
              <RhythmCard
                name="Биота"
                pattern="Хаос с паузами"
                cause="Прямое повреждение продолговатого мозга"
                color="from-rose-500 to-red-600"
              />
            </div>

            {/* Клинический осмотр */}
            <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-sky-700">
                <Stethoscope className="h-4 w-4" /> Клинический осмотр
              </div>
              <ul className="space-y-1.5 text-sm text-sky-900">
                <li>• Смотрим на последние рёбра и пах одновременно.</li>
                <li>• Пальпация рёбер: боль? крепитация?</li>
                <li>• Тест вытягивания шеи: усиление стридора = проблема ВДП.</li>
                <li>• <strong className="text-sky-700">Ортопноэ</strong> — поза «сфинкса» или широко расставленные лапы + вытянутая шея = тяжёлая недостаточность.</li>
              </ul>
            </div>

            <Callout variant="info" emoji="😼" title="Профессор">
              «Если вы видите, что живот на вдохе уезжает внутрь, не думайте, что пациент занимается йогой или
              качает пресс. Это парадоксальное дыхание. Срочно на УЗИ искать разрыв диафрагмы, пока кишечник
              не решил окончательно переехать в грудную клетку».
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4: ДЫХАТЕЛЬНЫЕ ШУМЫ + ПЛЕЙЛИСТ ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader number="4" title="ДЫХАТЕЛЬНЫЕ ШУМЫ" subtitle="Аудиальный канал + плейлист" icon={Ear} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <KeyPhrase>
              <strong className="uppercase text-sky-700">Тишина в лёгких — это не дзен.</strong>{' '}
              Это самый громкий крик о помощи.
            </KeyPhrase>

            <p className="text-sm leading-relaxed text-sky-900 sm:text-base">
              Ниже — <strong className="text-sky-700">учебный плейлист из 7 синтезированных звуков</strong>.
              Звуки сгенерированы алгоритмически (не запись реальных пациентов), но узнаваемы по тембру
              и паттерну. Цель — дать слуховой якорь: что искать фонендоскопом.
            </p>

            <SoundPlaylist />

            <InfoBox color="amber" title="Схема аускультации">
              <strong className="uppercase text-amber-700">Тишина в комнате.</strong>{' '}
              Животное спокойно 5–10 минут. <strong>Раздвигаем шерсть!</strong> Воздух в шерсти = артефакты.
              Схема: <strong>трахея → дорсальные поля (там громче всего) → вентральные</strong>.
              Если вентрально шумно или тихо — это патология.
            </InfoBox>

            <Callout variant="info" emoji="😼" title="Профессор">
              «Если вы слышите в грудной клетке урчание, похожее на работу стиральной машины на отжиме, —
              поздравляю: вы нашли кишечник там, где его быть не должно. Это диафрагмальная грыжа.
              А если в вентральных отделах тишина, как в библиотеке, — это не „пациент тихий“,
              это „пациент тонет в экссудате“».
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 5: КАШЕЛЬ ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader number="5" title="КАШЕЛЬ" subtitle="Смысловой якорь — сирена, а не болезнь" icon={Volume2} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <KeyPhrase>
              <strong className="uppercase text-sky-700">Кашель — это не болезнь. Это сирена.</strong>{' '}
              Не заклеивайте сирену скотчем — ищите пожар.
            </KeyPhrase>

            <FormulaBox title="Физиология кашля" formula="Скорость воздуха 500–1000 км/ч" accent="rose" />

            <InfoBox color="blue" title="Где живут рецепторы кашля?">
              <strong className="uppercase text-sky-700">Гортань, трахея (особенно бифуркация!), крупные бронхи.</strong>{' '}
              В <strong>альвеолах рецепторов кашля НЕТ</strong> — там будет одышка, а не кашель.
              Поэтому пневмония может быть «тихой» по кашлю, но громкой по одышке.
            </InfoBox>

            {/* 4 типа кашля */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-sky-700 sm:text-lg">
              Характер кашля → диагноз
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CoughCard
                emoji="🦆"
                title="«Гусиный гудок» (Honking)"
                character="Сухой, резкий"
                cause="Коллапс трахеи у йорков и шпицев"
                color="from-amber-500 to-yellow-600"
              />
              <CoughCard
                emoji="💧"
                title="Влажный, продуктивный"
                character="С бульканьем"
                cause="Пневмония, отёк. В бронхах жидкость"
                color="from-cyan-500 to-blue-600"
              />
              <CoughCard
                emoji="🌙"
                title="Ночной + шум в сердце"
                character="У пожилой собаки"
                cause="Кардиогенный. Левое предсердие давит на левый главный бронх, как слон на шланг"
                color="from-rose-500 to-red-600"
              />
              <CoughCard
                emoji="🤢"
                title="С позывами на рвоту в конце"
                character="Приступообразный"
                cause="Трахеит («питомниковый кашель») или дирофиляриоз"
                color="from-violet-500 to-purple-600"
              />
            </div>

            {/* Клинический осмотр */}
            <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-sky-700">
                <Stethoscope className="h-4 w-4" /> Клинический осмотр
              </div>
              <ul className="space-y-1.5 text-sm text-sky-900">
                <li>• <strong className="text-sky-700">Золотое правило:</strong> попросите владельца снять кашель на видео <strong>до визита</strong>. В клинике от стресса животные кашляют как партизаны — молчат.</li>
                <li>• Пальпация трахеи: единичный кашель = норма; приступообразный = гиперреактивность. <strong>Не делать при выраженной одышке!</strong></li>
                <li>• Аускультация сердца обязательна: шум на митральном клапане + кашель у пожилой собаки = кардиогенная природа <strong>до доказательства обратного</strong>.</li>
              </ul>
            </div>

            <Callout variant="warning" emoji="🤢" title="Профессор против противокашлевых">
              «Назначить противокашлевое средство собаке с влажным кашлем и пневмонией — это всё равно что
              выключить пожарную сигнализацию во время пожара. „Зато тихо стало“. Зато пациент... ну, вы поняли.
              <strong className="uppercase text-amber-700"> Лечите причину, а не звук.</strong>»
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= CTA: ПРОВЕРЬ СЕБЯ ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-emerald-300 bg-white/95 shadow-xl shadow-emerald-500/10"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 text-white">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">
                Закрепи материал — проверь себя
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight text-emerald-700 sm:text-xl">
                5 вопросов по дыхательной системе
              </h3>
              <p className="mt-1 text-xs text-emerald-900/80 sm:text-sm">
                ЧДД, мелкопузырчатые хрипы, правая средняя доля кошек, кардиогенный кашель, SRR. Перемешиваются.
              </p>
            </div>
            {onNavigateToQuiz && (
              <button
                onClick={onNavigateToQuiz}
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl active:scale-95 sm:text-base"
              >
                <Zap className="h-4 w-4 transition-transform group-hover:scale-110" />
                Открыть тест
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </motion.section>
      </main>
    </div>
  )
}

/* ============= АНАТОМИЧЕСКАЯ SVG-СХЕМА ============= */
function RespiratoryTractSVG() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="overflow-hidden rounded-2xl border-2 border-sky-300 bg-white shadow-lg"
    >
      <div className="bg-gradient-to-r from-sky-600 to-emerald-500 px-4 py-2 text-white">
        <div className="flex items-center gap-2">
          <Wind className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Схема дыхательного тракта собаки</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-sky-50/50 to-emerald-50/30 p-3">
        <svg viewBox="0 0 600 360" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="Схема дыхательной системы собаки: нос, носовая полость, глотка, гортань, трахея с С-образными хрящами, бифуркация, главные бронхи, бронхиальное дерево, лёгкие с долями, альвеола">
          <defs>
            <linearGradient id="lungGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f0f9ff" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
            <linearGradient id="tracheaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
          </defs>

          {/* Дорсальная линия (вверху = спина) */}
          <line x1="40" y1="40" x2="560" y2="40" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
          <text x="50" y="32" fontSize="10" fill="#64748b" fontWeight="bold">↑ Дорсально (спина)</text>

          {/* Голова с носом */}
          <ellipse cx="120" cy="120" rx="55" ry="42" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          {/* Нос */}
          <ellipse cx="72" cy="125" rx="14" ry="11" fill="#1e293b" />
          <text x="72" y="129" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">нос</text>
          {/* Носовая полость */}
          <path d="M 80 110 Q 110 100 140 115" fill="none" stroke="#0891b2" strokeWidth="2" />
          <text x="115" y="95" fontSize="9" fill="#0891b2" fontWeight="bold">носовая</text>
          <text x="115" y="105" fontSize="9" fill="#0891b2" fontWeight="bold">полость</text>

          {/* Глотка */}
          <ellipse cx="170" cy="150" rx="12" ry="9" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="170" y="155" fontSize="8" fill="#be185d" textAnchor="middle" fontWeight="bold">глотка</text>

          {/* Гортань */}
          <rect x="160" y="165" width="22" height="20" rx="4" fill="#fbcfe8" stroke="#be185d" strokeWidth="2" />
          <text x="171" y="180" fontSize="8" fill="#831843" textAnchor="middle" fontWeight="bold">гортань</text>

          {/* Трахея с С-образными кольцами */}
          <rect x="165" y="190" width="12" height="100" fill="url(#tracheaGrad)" stroke="#0284c7" strokeWidth="2" />
          {/* Кольца трахеи */}
          {[195, 205, 215, 225, 235, 245, 255, 265, 275].map((y, i) => (
            <line key={i} x1="165" y1={y} x2="177" y2={y} stroke="#0369a1" strokeWidth="1.5" />
          ))}
          {/* Дорсальный разрыв (мышца) */}
          <line x1="177" y1="190" x2="177" y2="290" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="185" y="245" fontSize="8" fill="#dc2626" fontWeight="bold">трахея</text>
          <text x="185" y="255" fontSize="8" fill="#dc2626" fontWeight="bold">(С-кольца,</text>
          <text x="185" y="265" fontSize="8" fill="#dc2626" fontWeight="bold">разрыв</text>
          <text x="185" y="275" fontSize="8" fill="#dc2626" fontWeight="bold">дорсально)</text>

          {/* Бифуркация */}
          <circle cx="171" cy="293" r="3" fill="#0284c7" />
          <text x="195" y="296" fontSize="8" fill="#0284c7" fontWeight="bold">бифуркация</text>

          {/* Главные бронхи */}
          <path d="M 171 295 Q 130 305 110 320" fill="none" stroke="#0369a1" strokeWidth="3" />
          <path d="M 171 295 Q 215 305 240 320" fill="none" stroke="#0369a1" strokeWidth="3" />

          {/* Левое лёгкое */}
          <path d="M 60 320 Q 50 280 75 270 Q 100 265 115 280 Q 125 300 120 325 Q 110 345 80 345 Q 55 340 60 320 Z" fill="url(#lungGrad)" stroke="#0284c7" strokeWidth="2" />
          {/* Доли левого */}
          <path d="M 100 280 L 105 340" stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2" />
          <text x="85" y="315" fontSize="9" fill="#0c4a6e" textAnchor="middle" fontWeight="bold">левое</text>

          {/* Правое лёгкое */}
          <path d="M 230 320 Q 220 275 250 265 Q 285 260 305 280 Q 320 305 315 330 Q 305 350 270 350 Q 235 345 230 320 Z" fill="url(#lungGrad)" stroke="#0284c7" strokeWidth="2" />
          {/* Доли правого (4) */}
          <path d="M 255 275 L 260 345" stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 280 270 L 285 345" stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2" />
          <text x="270" y="315" fontSize="9" fill="#0c4a6e" textAnchor="middle" fontWeight="bold">правое</text>
          <text x="270" y="328" fontSize="7" fill="#0369a1" textAnchor="middle">(4 доли)</text>

          {/* Бронхиальное дерево внутри лёгких */}
          <path d="M 110 320 L 95 305 M 110 320 L 100 335 M 95 305 L 85 295 M 95 305 L 90 315" fill="none" stroke="#0369a1" strokeWidth="1" />
          <path d="M 240 320 L 255 305 M 240 320 L 250 335 M 255 305 L 265 295 M 255 305 L 270 310 M 250 335 L 260 340 M 250 335 L 240 340" fill="none" stroke="#0369a1" strokeWidth="1" />

          {/* Альвеола (врезка справа) */}
          <g transform="translate(380 80)">
            <circle cx="40" cy="40" r="35" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" />
            <text x="40" y="20" fontSize="9" fill="#0c4a6e" textAnchor="middle" fontWeight="bold">АЛЬВЕОЛА</text>
            {/* Пневмоцит I */}
            <path d="M 15 50 Q 25 45 35 50" fill="none" stroke="#0891b2" strokeWidth="2" />
            <text x="20" y="68" fontSize="7" fill="#0891b2" fontWeight="bold">пн. I</text>
            {/* Пневмоцит II */}
            <rect x="45" y="48" width="6" height="6" fill="#7c3aed" />
            <text x="48" y="68" fontSize="7" fill="#7c3aed" fontWeight="bold">пн. II</text>
            {/* Сурфактант */}
            <circle cx="40" cy="40" r="32" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="2 1" />
            <text x="40" y="85" fontSize="7" fill="#10b981" textAnchor="middle" fontWeight="bold">сурфактант</text>
            {/* Капилляр */}
            <path d="M 8 35 Q 30 25 50 30 Q 65 35 72 45" fill="none" stroke="#dc2626" strokeWidth="1.5" />
            <text x="20" y="32" fontSize="7" fill="#dc2626" fontWeight="bold">капилляр</text>
          </g>

          {/* Указатель O2 / CO2 */}
          <g transform="translate(380 200)">
            <text x="20" y="10" fontSize="11" fill="#0284c7" fontWeight="bold">O₂ →</text>
            <text x="60" y="10" fontSize="11" fill="#dc2626" fontWeight="bold">← CO₂</text>
            <text x="20" y="28" fontSize="8" fill="#475569">газообмен</text>
            <text x="20" y="38" fontSize="8" fill="#475569">в альвеоле</text>
          </g>

          {/* Легенда */}
          <text x="380" y="290" fontSize="8" fill="#475569" fontWeight="bold">Лёгкие собаки:</text>
          <text x="380" y="302" fontSize="8" fill="#475569">правое 4 доли, левое 2 (крани-</text>
          <text x="380" y="312" fontSize="8" fill="#475569">альная часто делится). Итого 6–7.</text>
          <text x="380" y="328" fontSize="8" fill="#475569" fontWeight="bold">Лёгкие кошки:</text>
          <text x="380" y="340" fontSize="8" fill="#475569">правое 4, левое: единая кра-</text>
          <text x="380" y="350" fontSize="8" fill="#475569">ниальная. Итого 6 долей.</text>
        </svg>
      </div>
      <figcaption className="border-t border-sky-100 bg-sky-50/60 px-4 py-2 text-xs text-sky-900">
        <strong className="uppercase text-sky-700">Воздушный путь:</strong>{' '}
        нос → носоглотка → гортань → трахея → бифуркация → бронхи (до 16-го порядка) → респираторные
        бронхиолы → альвеолы (газообмен). Красная пунктирная линия на трахее — дорсальный разрыв С-колец
        (туда, где перепончатая мышца).
      </figcaption>
    </motion.figure>
  )
}

/* ============= АУДИО-ПЛЕЕР (один трек) ============= */
function SoundPlayer({ entry, isPlaying, onToggle }: {
  entry: SoundEntry
  isPlaying: boolean
  onToggle: () => void
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [progress, setProgress] = useState(0) // 0..1
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(entry.file)
      audioRef.current.preload = 'metadata'
    }
    const audio = audioRef.current
    const handleTime = () => {
      setCurrentTime(audio.currentTime)
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0)
    }
    const handleLoaded = () => setDuration(audio.duration || 0)
    const handleEnded = () => {
      setProgress(0)
      setCurrentTime(0)
      onToggle() // сообщаем родителю, что трек закончился — снимем флаг
    }
    audio.addEventListener('timeupdate', handleTime)
    audio.addEventListener('loadedmetadata', handleLoaded)
    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('timeupdate', handleTime)
      audio.removeEventListener('loadedmetadata', handleLoaded)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [entry.file, onToggle])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.currentTime = 0
      void audio.play().catch(() => {})
    } else {
      audio.pause()
      audio.currentTime = 0
      setProgress(0)
      setCurrentTime(0)
    }
  }, [isPlaying])

  const fmt = (s: number) => {
    if (!isFinite(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${entry.color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-3">
        <div className="mb-2 flex items-center gap-3">
          <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${entry.color} text-xl shadow-md`}>
            {entry.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-black uppercase text-sky-900">{entry.title}</div>
            <div className="text-[11px] leading-snug text-sky-900/70">{entry.desc}</div>
          </div>
          <button
            onClick={onToggle}
            aria-label={isPlaying ? 'Остановить' : 'Играть'}
            className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${entry.color} text-white shadow-md transition-transform active:scale-95`}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
          </button>
        </div>
        {/* Progress bar */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-sky-700">{fmt(currentTime)}</span>
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-sky-100">
            <div
              className={`absolute left-0 top-0 h-full bg-gradient-to-r ${entry.color}`}
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-sky-700">{fmt(duration)}</span>
        </div>
        <div className="mt-2 border-t border-sky-100 pt-2 text-[11px] text-sky-900/80">
          <strong className="uppercase text-sky-700">Причина:</strong> {entry.cause}
        </div>
      </div>
    </div>
  )
}

/* ============= ПЛЕЙЛИСТ ============= */
function SoundPlaylist() {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const toggle = useCallback((key: string) => {
    setActiveKey(prev => (prev === key ? null : key))
  }, [])
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-sky-700">
        <Volume2 className="h-4 w-4" /> Плейлист дыхательных шумов (7 треков)
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {SOUNDS.map(s => (
          <SoundPlayer
            key={s.key}
            entry={s}
            isPlaying={activeKey === s.key}
            onToggle={() => toggle(s.key)}
          />
        ))}
      </div>
      <p className="pt-1 text-[10px] text-sky-700/70">
        ⚠️ Звуки синтезированы алгоритмически (Python + numpy/scipy) для учебных целей — это не записи
        реальных пациентов. Используйте как слуховой якорь: «что искать».
      </p>
    </div>
  )
}

/* ============= ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ============= */
function SectionWrapper({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="mb-8 overflow-hidden rounded-3xl border-2 border-sky-300 bg-white/95 shadow-xl shadow-sky-500/10 backdrop-blur"
    >
      {children}
    </motion.section>
  )
}

function SectionHeader({
  number, title, subtitle, icon: Icon,
}: {
  number: string
  title: string
  subtitle: string
  icon: typeof Wind
}) {
  return (
    <div className="flex items-center gap-3 border-b-2 border-sky-200 bg-gradient-to-r from-sky-50 to-emerald-50 px-5 py-4 sm:px-7">
      <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-emerald-500 text-white shadow-lg">
        <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shadow">
          {number}
        </span>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h2 className="text-lg font-black uppercase tracking-tight text-sky-700 sm:text-2xl">{title}</h2>
        <p className="text-xs font-medium text-sky-700/70 sm:text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

function FormulaChip({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Wind }) {
  return (
    <div className="rounded-2xl bg-sky-50/60 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-sky-700">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div className="text-sm font-bold text-sky-900">{value}</div>
    </div>
  )
}

function FormulaBox({
  title, formula, accent,
}: {
  title: string
  formula: string
  accent: 'sky' | 'emerald' | 'rose'
}) {
  const colorMap = {
    sky: 'border-sky-300 bg-gradient-to-r from-sky-50 to-cyan-50 text-sky-700',
    emerald: 'border-emerald-300 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700',
    rose: 'border-rose-300 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700',
  }
  return (
    <div className={`rounded-2xl border-2 p-4 ${colorMap[accent]}`}>
      <div className="text-[10px] font-bold uppercase tracking-wide opacity-80">{title}</div>
      <div className="mt-1 text-base font-black uppercase tracking-tight sm:text-lg">{formula}</div>
    </div>
  )
}

function KeyPhrase({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/40 px-4 py-3 text-sm leading-relaxed text-sky-900 sm:text-base">
      {children}
    </div>
  )
}

function InfoBox({ color, title, children }: { color: 'amber' | 'rose' | 'blue'; title: string; children: React.ReactNode }) {
  const colorMap = {
    amber: 'border-amber-300 bg-amber-50/80',
    rose: 'border-rose-300 bg-rose-50/80',
    blue: 'border-sky-300 bg-sky-50/80',
  }
  const textColor = color === 'amber' ? 'text-amber-700' : color === 'rose' ? 'text-rose-700' : 'text-sky-700'
  return (
    <div className={`rounded-2xl border-2 p-4 ${colorMap[color]}`}>
      <div className={`mb-1.5 text-xs font-bold uppercase tracking-wide ${textColor}`}>ℹ️ {title}</div>
      <div className="text-sm leading-relaxed text-sky-900">{children}</div>
    </div>
  )
}

function Callout({
  variant, emoji, title, children,
}: {
  variant: 'info' | 'warning'
  emoji: string
  title: string
  children: React.ReactNode
}) {
  const bg = variant === 'info' ? 'bg-sky-50/80 border-sky-300' : 'bg-amber-50/80 border-amber-300'
  const headerColor = variant === 'info' ? 'text-sky-700' : 'text-amber-700'
  return (
    <div className={`rounded-2xl border-2 ${bg} p-4`}>
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        <h4 className={`text-sm font-bold uppercase tracking-wide ${headerColor}`}>{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-sky-900/90">{children}</p>
    </div>
  )
}

function DepartmentCard({
  emoji, title, subtitle, structures, function: fn, color,
}: {
  emoji: string
  title: string
  subtitle: string
  structures: string[]
  function: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-xl shadow-md`}>
            {emoji}
          </div>
          <div>
            <div className="text-sm font-black uppercase text-sky-900">{title}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-sky-700">{subtitle}</div>
          </div>
        </div>
        <ul className="mb-2 space-y-0.5 text-xs text-sky-900/90">
          {structures.map(s => (
            <li key={s} className="flex gap-1.5">
              <span className="flex-shrink-0 text-sky-700">•</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-sky-100 pt-2 text-[11px]">
          <span className="font-bold uppercase text-sky-700">Функция:</span> <span className="text-sky-900">{fn}</span>
        </div>
      </div>
    </div>
  )
}

function AnatomyRow({ structure, dog, cat }: { structure: string; dog: string; cat: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-3">
      <div className="text-sm font-black uppercase text-sky-700">{structure}</div>
      <div className="text-xs text-sky-900/90 sm:border-l sm:border-sky-100 sm:pl-3">
        <span className="text-[10px] font-bold uppercase text-amber-600">🐶 Собака:</span> {dog}
      </div>
      <div className="text-xs text-sky-900/90 sm:border-l sm:border-sky-100 sm:pl-3">
        <span className="text-[10px] font-bold uppercase text-rose-600">🐱 Кошка:</span> {cat}
      </div>
    </div>
  )
}

function CellTypeCard({ name, shape, role, color }: { name: string; shape: string; role: string; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-3">
        <div className="text-[10px] font-bold uppercase tracking-wide text-sky-700">{shape}</div>
        <div className="text-sm font-black uppercase text-sky-900">{name}</div>
        <p className="mt-1 text-[11px] leading-snug text-sky-900/80">{role}</p>
      </div>
    </div>
  )
}

function PathologyCard({ emoji, title, causes, color }: { emoji: string; title: string; causes: string[]; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div className="text-sm font-black uppercase text-sky-900">{title}</div>
        </div>
        <ul className="space-y-0.5 text-xs text-sky-900/90">
          {causes.map(c => (
            <li key={c} className="flex gap-1.5">
              <span className="flex-shrink-0 text-sky-700">•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function BreathingPatternCard({ emoji, title, pattern, cause, color }: { emoji: string; title: string; pattern: string; cause: string; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div className="text-sm font-black uppercase text-sky-900">{title}</div>
        </div>
        <div className="text-[11px] font-bold uppercase text-sky-700">Паттерн</div>
        <div className="mb-2 text-xs text-sky-900">{pattern}</div>
        <div className="text-[11px] font-bold uppercase text-sky-700">Почему</div>
        <div className="text-xs text-sky-900/90">{cause}</div>
      </div>
    </div>
  )
}

function RhythmCard({ name, pattern, cause, color }: { name: string; pattern: string; cause: string; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-3">
        <div className="text-sm font-black uppercase text-sky-900">{name}</div>
        <div className="mt-1 text-[11px] font-bold uppercase text-sky-700">{pattern}</div>
        <p className="mt-1 text-[11px] leading-snug text-sky-900/80">{cause}</p>
      </div>
    </div>
  )
}

function CoughCard({ emoji, title, character, cause, color }: { emoji: string; title: string; character: string; cause: string; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div className="text-sm font-black uppercase text-sky-900">{title}</div>
        </div>
        <div className="text-[11px] font-bold uppercase text-sky-700">Характер</div>
        <div className="mb-1.5 text-xs text-sky-900">{character}</div>
        <div className="text-[11px] font-bold uppercase text-sky-700">Якорь</div>
        <div className="text-xs text-sky-900/90">{cause}</div>
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
