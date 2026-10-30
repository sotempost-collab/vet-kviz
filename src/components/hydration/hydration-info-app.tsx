'use client'

import { motion } from 'framer-motion'
import {
  Droplets,
  Activity,
  Shield,
  Brain,
  AlertTriangle,
  FlaskConical,
  Heart,
  Thermometer,
  BookOpen,
  Award,
  Lightbulb,
  ArrowRight,
  Zap,
} from 'lucide-react'
import VideoPlayer from '@/components/shared/video-player'
import { VIDEOS } from '@/lib/videos'

// Картинка «Гидратация и электролиты» (ICF/ECF, раствор Рингера, баланс ионов)
const HYDRATION_ELECTROLYTES_IMG = '/images/hydration-electrolytes.webp'

// Таблица классификации обезвоживания (изотоническая / гипертоническая / гипотоническая)
const DEHYDRATION_CLASSIFICATION_IMG = '/images/dehydration-classification.webp'

export default function HydrationInfoApp({ onNavigateToQuiz }: { onNavigateToQuiz?: () => void }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* ============= VIDEO PLAYER (вверху гайда) ============= */}
        <VideoPlayer
          src={VIDEOS['hydration-intro'].src}
          title={VIDEOS['hydration-intro'].title}
          subtitle={VIDEOS['hydration-intro'].subtitle}
        />

        {/* ============= HERO ============= */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-300 bg-white/95 shadow-2xl shadow-blue-500/20 backdrop-blur"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 px-6 py-10 text-white sm:px-10 sm:py-14">
            {/* Декоративная капля справа */}
            <div className="absolute right-6 top-6 opacity-25">
              <Droplets className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <FlaskConical className="h-3.5 w-3.5" /> Гайд для будущего ветеринара
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Гидратация
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-blue-50 sm:text-lg">
                Водный баланс, дегидратация и электролиты собак и кошек.
                От формулы «2/3 ICF — 1/3 ECF» до клинического осмотра и жидкостной терапии.
              </p>
            </div>
          </div>

          {/* Key formula chips */}
          <div className="grid grid-cols-1 gap-3 border-t-2 border-blue-200 p-5 sm:grid-cols-3 sm:p-6">
            <FormulaChip label="Формула осмотра" value="Тургор + Слизистые + Глаза + ВКН + Пульс" icon={Activity} />
            <FormulaChip label="Водные секторы" value="2/3 ICF — 1/3 ECF" icon={Droplets} />
            <FormulaChip label="Поддерживающая терапия" value="30 мл/кг/сут" icon={FlaskConical} />
          </div>
        </motion.section>

        {/* ============= РАЗДЕЛ 1: ЧТО ТАКОЕ ГИДРАТАЦИЯ? ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader number="1" title="ЧТО ТАКОЕ ГИДРАТАЦИЯ?" subtitle="Определение" icon={Droplets} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Гидратация</strong> — это состояние
              водного баланса организма: сколько воды поступило, сколько выделилось и как она
              распределена между клетками и внеклеточным пространством. Вода — это не просто
              «фон», а <strong className="text-blue-700">среда, в которой идут все биохимические
              реакции</strong> организма.
            </p>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Где вода — там жизнь.</strong>{' '}
              Без воды ферменты не работают, электролиты не проводят импульсы, а клетки теряют форму.
            </KeyPhrase>

            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              У взрослой собаки и кошки вода составляет <strong className="text-blue-700">около 60%
              массы тела</strong>. У щенков и котят — до 75–80%: они «водянистее» и теряют жидкость
              быстрее, поэтому дегидратация у них наступает стремительно.
            </p>

            {/* Картинка: ICF/ECF, раствор Рингера лактатный, электролиты */}
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="overflow-hidden rounded-2xl border-2 border-blue-300 bg-white shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Водные секторы и электролитный баланс
                  </span>
                </div>
              </div>
              <img
                src={HYDRATION_ELECTROLYTES_IMG}
                alt="Схема распределения воды в организме собаки и кошки: внутриклеточная жидкость (ICF), внеклеточная жидкость (ECF), раствор Рингера лактатный как препарат выбора, баланс электролитов натрия и калия"
                className="w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-blue-100 bg-blue-50/60 px-4 py-2 text-xs text-blue-900">
                <strong className="uppercase text-blue-700">Вода делится на два больших сектора:</strong>{' '}
                внутриклеточный (ICF) и внеклеточный (ECF). Раствор Рингера лактатный — препарат выбора
                для восстановления баланса, так как его состав близок к плазме крови.
              </figcaption>
            </motion.figure>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Гидратация — это не «пить или не пить». Это сложный баланс воды между клеткой и
              пространством вокруг неё. Если вода ушла не туда — пациент чувствует себя как рыба,
              которую пересадили в солёный рассол.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 2: ВОДНЫЕ СЕКТОРЫ ОРГАНИЗМА ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader number="2" title="ВОДНЫЕ СЕКТОРЫ ОРГАНИЗМА" subtitle="ICF и ECF" icon={Brain} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Вода в организме распределена между двумя большими «бассейнами». Внутриклеточная
              жидкость (<strong className="text-blue-700">ICF</strong>) — это вода внутри клеток.
              Внеклеточная жидкость (<strong className="text-blue-700">ECF</strong>) — это всё, что
              снаружи: плазма крови, межтканевая жидкость, транссудаты и секреты.
            </p>

            <FormulaBox title="Золотое правило" formula="2/3 ICF — 1/3 ECF" accent="blue" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <SectorCard
                icon={Brain}
                title="ICF — внутриклеточная"
                share="2/3 воды"
                mass="≈ 40% массы тела"
                cation="K+ (калий)"
                color="from-violet-500 to-purple-600"
              />
              <SectorCard
                icon={Droplets}
                title="ECF — внеклеточная"
                share="1/3 воды"
                mass="≈ 20% массы тела"
                cation="Na+ (натрий)"
                color="from-cyan-500 to-sky-600"
              />
            </div>

            <InfoBox color="blue" title="Na+/K+-ATPase — часовой на границе">
              <strong className="uppercase text-blue-700">Натриево-калиевый насос</strong> работает
              в мембране каждой клетки. Он постоянно выкачивает Na+ наружу и возвращает K+ внутрь —
              против градиента концентрации, тратя АТФ. Именно этот насос поддерживает разделение
              секторов. Если он остановится — ионы перемешаются, клетка потеряет потенциал покоя и
              погибнет.
            </InfoBox>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Внутри клетки — калий. Снаружи — натрий.</strong>{' '}
              Это правило работает в каждой клетке тела пациента, от нейрона до гепатоцита.
            </KeyPhrase>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Клетка — это VIP-зона с охраной на входе. Насос Na+/K+-ATPase стоит на дверях: натрий
              отправляется гулять снаружи, калий остаётся внутри. Билет на каждый цикл — одна
              молекула АТФ. Без билета никто не проходит.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 3: ЭЛЕКТРОЛИТЫ ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader number="3" title="ЭЛЕКТРОЛИТЫ" subtitle="Главные ионы организма" icon={Zap} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Электролиты</strong> — это ионы, которые
              проводят электрический ток в жидкостях организма. Они определяют осмолярность, работу
              нервов, сокращение мышц и ритм сердца. Главные «игроки» — пять ионов.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ElectrolyteCard
                symbol="Na+"
                name="Натрий"
                range="140–150 ммоль/л"
                role="Главный катион ECF. Отвечает за объём внеклеточной воды и осмотическое давление."
                color="from-cyan-500 to-sky-600"
              />
              <ElectrolyteCard
                symbol="K+"
                name="Калий"
                range="3.5–5.5 ммоль/л"
                role="Главный катион ICF. Отвечает за потенциал покоя клетки и ритм сердца."
                color="from-violet-500 to-purple-600"
              />
              <ElectrolyteCard
                symbol="Cl−"
                name="Хлор"
                range="105–115 ммоль/л"
                role="Главный анион ECF. Идёт «в паре» с натрием, поддерживает кислотно-щелочной баланс."
                color="from-emerald-500 to-teal-600"
              />
              <ElectrolyteCard
                symbol="Ca²⁺"
                name="Кальций"
                range="1.0–1.3 ммоль/л (иониз.)"
                role="Сокращение мышц, свёртывание крови, передача сигнала в синапсах."
                color="from-amber-500 to-orange-600"
              />
              <ElectrolyteCard
                symbol="HPO₄²⁻"
                name="Фосфат"
                range="0.8–1.6 ммоль/л"
                role="Главный внутриклеточный анион. Костная ткань, АТФ, клеточные мембраны."
                color="from-rose-500 to-pink-600"
              />
            </div>

            <FormulaBox title="Правило насоса" formula="Na+ снаружи • K+ внутри • Cl− следует за Na+" accent="blue" />

            <InfoBox color="amber" title="Клиническая подсказка">
              <strong className="uppercase text-blue-700">Калий — самый «капризный» ион.</strong>{' '}
              Даже небольшое отклонение K+ от нормы грозит аритмией. Перед инфузией калия всегда
              оценивайте диурез: «no pee, no K» — нет мочи, нет калия.
            </InfoBox>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Натрий — командир внеклеточной воды, калий — командир внутриклеточной. Хлор — его тень,
              всегда рядом с натрием. Кальций и фосфат — строительный материал и энергия. Пятёрка, без
              которой не запускается ни одно сокращение сердца.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4: КЛАССИФИКАЦИЯ ДЕГИДРАТАЦИИ ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader number="4" title="КЛАССИФИКАЦИЯ ДЕГИДРАТАЦИИ" subtitle="По осмолярности" icon={AlertTriangle} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Дегидратация</strong> — это дефицит воды в
              организме. По соотношению потерянной воды и электролитов (то есть по осмолярности
              плазмы) она делится на три типа.
            </p>

            {/* Таблица классификации обезвоживания */}
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="overflow-hidden rounded-2xl border-2 border-blue-300 bg-white shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Таблица — классификация обезвоживания
                  </span>
                </div>
              </div>
              <img
                src={DEHYDRATION_CLASSIFICATION_IMG}
                alt="Таблица классификации обезвоживания: изотоническая (вода и электролиты теряются равномерно), гипертоническая (воды теряется больше, чем солей), гипотоническая (солей теряется больше, чем воды)"
                className="w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-blue-100 bg-blue-50/60 px-4 py-2 text-xs text-blue-900">
                <strong className="uppercase text-blue-700">Три типа дегидратации:</strong>{' '}
                изотоническая — вода и электролиты теряются одинаково (осмолярность в норме);
                гипертоническая — воды уходит больше, чем солей (осмолярность ↑);
                гипотоническая — солей уходит больше, чем воды (осмолярность ↓).
              </figcaption>
            </motion.figure>

            <InfoBox color="amber" title="Клиническая подсказка по причинам">
              <strong className="uppercase text-blue-700">Изотоническая</strong> дегидратация — самая
              частая (рвота, диарея).{' '}
              <strong className="text-blue-700">Гипертоническая</strong> возникает при потере чистой
              воды (лихорадка, одышка, нехватка питья).{' '}
              <strong className="text-blue-700">Гипотоническая</strong> — при избыточной потере солей
              (хроническая рвота, приём диуретиков, гипоальбуминемия).
            </InfoBox>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Потеряли воду и соль поровну — изотоническая. Потеряли только воду — гипертоническая
              (клетки сморщиваются). Потеряли больше соли — гипотоническая (клетки набухают). У каждого
              типа своё лечение, поэтому «капать всё подряд» — плохая стратегия.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 5: СТЕПЕНИ ДЕГИДРАТАЦИИ ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader number="5" title="СТЕПЕНИ ДЕГИДРАТАЦИИ" subtitle="По проценту потери массы тела" icon={Activity} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Степень дегидратации оценивают по <strong className="text-blue-700">проценту потери
              массы тела</strong> относительно исходного веса животного. Чем больше процент — тем
              тяжелее клинические признаки и тем быстрее нужно начинать инфузионную терапию.
            </p>

            <div className="space-y-3">
              <SeverityCard
                level="Лёгкая"
                range="< 5%"
                color="emerald"
                signs={[
                  'Слизистые слегка суховаты',
                  'Тургор кожи в норме или чуть снижен',
                  'Поведение обычное, пациент активен',
                  'Глаза не западают',
                ]}
              />
              <SeverityCard
                level="Умеренная"
                range="5–8%"
                color="amber"
                signs={[
                  'Слизистые сухие и липкие',
                  'Тургор кожи замедлен (складка расправляется > 2 сек)',
                  'Западение глаз умеренное',
                  'ВКН 2–3 сек',
                  'Угнетение, снижение эластичности кожи',
                ]}
              />
              <SeverityCard
                level="Тяжёлая"
                range="> 8%"
                color="rose"
                signs={[
                  'Слизистые сухие, тусклые, иногда «тестообразные»',
                  'Тургор кожи резко снижен (складка стоит > 5 сек)',
                  'Выраженное западение глаз',
                  'ВКН > 3 сек, пульс нитевидный',
                  'Шок, гипотермия, угроза жизни',
                ]}
              />
            </div>

            <InfoBox color="rose" title="Тяжёлая дегидратация — экстренное состояние">
              <strong className="uppercase text-blue-700">Потеря &gt; 12% массы тела</strong> — это уже
              состояние, совместимое с жизнью лишь короткое время. Требуется немедленное внутривенное
              введение солевых растворов под контролем врача, желательно с мониторингом центрального
              венозного давления и диуреза.
            </InfoBox>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Лёгкая степень — пациент «просто хочет пить». Умеренная — пациент уже понятно даёт
              понять, что ему плохо. Тяжёлая — пациент не даёт понять ничего, потому что почти без
              сознания. Никогда не ждите третьей стадии, чтобы начать лечение.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 6: КЛИНИЧЕСКИЙ ОСМОТР ============= */}
        <SectionWrapper delay={0.35}>
          <SectionHeader number="6" title="КЛИНИЧЕСКИЙ ОСМОТР" subtitle="Оценка гидратации" icon={Shield} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Гидратацию оценивают <strong className="text-blue-700">комплексно</strong>: один признак
              не доказателен. Используйте формулу из пяти шагов — она занимает 30 секунд и работает
              на любом пациенте.
            </p>

            <FormulaBox title="Формула осмотра" formula="Тургор + Слизистые + Глаза + ВКН + Пульс" accent="blue" />

            <div className="space-y-2">
              <AssessmentRow
                icon={Activity}
                name="Кожная складка (тургор)"
                desc="Оттяните кожу на холке. В норме расправляется мгновенно. Замедленное расправление — признак дегидратации."
              />
              <AssessmentRow
                icon={Droplets}
                name="Слизистые оболочки"
                desc="Осмотрите дёсны. В норме влажные и блестящие. Сухость и липкость — потеря жидкости."
              />
              <AssessmentRow
                icon={Brain}
                name="Глаза"
                desc="Западение глазных яблок — тяжёлая дегидратация. Сухость роговицы и конъюнктивы — сниженная секреция."
              />
              <AssessmentRow
                icon={Shield}
                name="ВКН (время капиллярного наполнения)"
                desc="Надавите на десну, отпустите. Норма 1–2 сек. > 2 сек — нарушение перфузии."
              />
              <AssessmentRow
                icon={Heart}
                name="Частота и качество пульса"
                desc="Учащённый, нитевидный или слабый пульс — признак гиповолемии и компенсаторной тахикардии."
              />
              <AssessmentRow
                icon={Thermometer}
                name="Температура конечностей"
                desc="Холодные подушечки лап и уши — нарушена периферическая перфузия, характерно для шока."
              />
            </div>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Один признак — наблюдение. Пять признаков — диагноз.</strong>{' '}
              Не интерпретируйте тургор кожи отдельно от слизистых и ВКН.
            </KeyPhrase>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Клинический осмотр гидратации — это не один «волшебный» приём, а пять простых шагов.
              Кожу оттянул, слизистые посмотрел, глаза оценил, ВКН замерил, пульс пощупал. Через
              30 секунд врач знает больше, чем владелец за две недели наблюдений.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 7: ЖИДКОСТНАЯ ТЕРАПИЯ ============= */}
        <SectionWrapper delay={0.4}>
          <SectionHeader number="7" title="ЖИДКОСТНАЯ ТЕРАПИЯ" subtitle="Основы инфузионной терапии" icon={FlaskConical} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Жидкостная терапия</strong> восстанавливает
              объём, состав и распределение жидкостей организма. Главное правило — выбрать правильный
              препарат и рассчитать нужный объём. Не капайте «наугад».
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <FluidCard
                icon={FlaskConical}
                name="Раствор Рингера лактатный"
                role="Препарат выбора"
                desc="Сбалансированный кристаллоид. Содержит Na+, K+, Ca²⁺, Cl− и лактат (превращается в бикарбонат). Состав близок к плазме."
                color="from-blue-500 to-cyan-600"
              />
              <FluidCard
                icon={Droplets}
                name="0.9% NaCl"
                role="Физиологический раствор"
                desc="Простой кристаллоид. Только натрий и хлор. Применяется при гипонатриемии и шоке. Не содержит буфера."
                color="from-sky-500 to-blue-600"
              />
              <FluidCard
                icon={Activity}
                name="Кристаллоиды"
                role="Основа терапии"
                desc="Растворы малых молекул. Быстро уходят в интерстиций: через 1 час в сосудах остаётся лишь 1/4 введённого объёма."
                color="from-emerald-500 to-teal-600"
              />
              <FluidCard
                icon={Shield}
                name="Коллоиды"
                role="Удержание в сосудах"
                desc="Крупные молекулы (гидроксиэтилкрахмал и др.). Долго остаются в сосудистом русле. Применяются при тяжёлом шоке."
                color="from-violet-500 to-purple-600"
              />
            </div>

            <FormulaBox title="Поддерживающая потребность" formula="30 мл/кг/сут" accent="blue" />

            <InfoBox color="amber" title="Правило расчёта дефицита">
              <strong className="uppercase text-blue-700">Поддерживающий объём</strong> — 30 мл/кг/сут.
              Для собаки 10 кг: 300 мл/сут. При дегидратации к поддерживающему объёму прибавляют{' '}
              <strong className="text-blue-700">дефицит</strong>: % дегидратации × масса тела (кг) × 10.
              Половину дефицита дают в первые сутки, остальное — во вторые.
            </InfoBox>

            <Callout variant="info" emoji="😂" title="Мини-заключение">
              Раствор Рингера лактатный — это «умная вода»: состав почти как у плазмы. Кристаллоиды
              работают быстро, но ненадолго. Коллоиды держат объём в сосудах. Формула «30 мл/кг/сут» —
              это минимум, без которого ни один пациент не выйдет из стационара живым.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ФИНАЛЬНАЯ ФОРМУЛА ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 p-1 shadow-2xl"
        >
          <div className="rounded-[22px] bg-white px-6 py-7 sm:px-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight text-blue-700 sm:text-2xl">
                  Финальная формула
                </h2>
                <p className="text-xs font-medium text-blue-700/70">Итог по гидратации</p>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-50/60 p-4 text-center">
              <div className="text-base font-black uppercase tracking-tight text-blue-700 sm:text-xl">
                2/3 ICF — 1/3 ECF — 30 мл/кг/сут
              </div>
            </div>

            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-blue-700 sm:text-base">
              Запомните пять ключевых положений:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-blue-900 sm:text-base">
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>Вода делится на внутриклеточную (2/3) и внеклеточную (1/3) — Na+/K+-ATPase их разделяет.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>Na+ — главный ион снаружи клетки, K+ — внутри. Cl− всегда «в паре» с Na+.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>Дегидратация бывает изотонической, гипертонической и гипотонической — у каждой своё лечение.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>Осмотр гидратации — это Тургор + Слизистые + Глаза + ВКН + Пульс.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>Раствор Рингера лактатный — препарат выбора. Поддерживающая доза — 30 мл/кг/сут.</span>
              </li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Гидратация</strong> — это не просто «вода
              в организме». Это баланс секторов, электролитов, осмолярности и перфузии. Без понимания
              этих связей жидкостная терапия превращается в «капание наугад».
            </p>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-sm text-blue-900">
              <div className="mb-1 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span className="font-bold uppercase text-amber-700">😂 Финальная шутка</span>
              </div>
              Хороший ветеринар знает: капать раствор «потому что так положено» — плохая стратегия.
              Сначала осмотр, потом расчёт, и только потом — инфузия.{' '}
              <strong className="text-blue-700">НЕ КАПАЙТЕ ОБЪЁМ — КАПАЙТЕ ПАЦИЕНТА!</strong> 🐾
            </div>
          </div>
        </motion.section>

        {/* CTA: переход к тесту */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          onClick={onNavigateToQuiz}
          disabled={!onNavigateToQuiz}
          className="group mb-8 w-full rounded-3xl border-2 border-blue-300 bg-white p-6 text-center shadow-lg transition-all hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
        >
          <BookOpen className="mx-auto h-10 w-10 text-blue-600 transition-transform group-hover:scale-110" />
          <h3 className="mt-3 text-xl font-black uppercase text-blue-700">
            Готов проверить себя?
          </h3>
          <p className="mt-2 text-sm text-blue-900/80">
            5 вопросов по гидратации — на закрепление материала. Нажми, чтобы пройти тест
            <strong className="text-blue-700"> «Гидратация — проверь себя»</strong>.
          </p>
          <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:shadow-lg">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="uppercase tracking-wide">Перейти к тесту</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-blue-700/60">
          Гайд по гидратации собак и кошек • Водный баланс, дегидратация и электролиты •
          Для ветеринарных специалистов и студентов
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
  icon: typeof Droplets
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

function FormulaChip({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Droplets }) {
  return (
    <div className="rounded-2xl bg-blue-50/60 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-blue-700">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div className="text-sm font-bold text-blue-900">{value}</div>
    </div>
  )
}

function FormulaBox({
  title,
  formula,
  accent,
}: {
  title: string
  formula: string
  accent: 'blue' | 'emerald' | 'rose'
}) {
  const colorMap = {
    blue: 'border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700',
    emerald: 'border-emerald-300 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700',
    rose: 'border-rose-300 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700',
  }
  return (
    <div className={`rounded-2xl border-2 p-4 ${colorMap[accent]}`}>
      <div className="text-[10px] font-bold uppercase tracking-wide opacity-80">{title}</div>
      <div className="mt-1 text-base font-black uppercase tracking-tight sm:text-lg">
        {formula}
      </div>
    </div>
  )
}

function KeyPhrase({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50/40 px-4 py-3 text-sm leading-relaxed text-blue-900 sm:text-base">
      {children}
    </div>
  )
}

function InfoBox({ color, title, children }: { color: 'amber' | 'rose' | 'blue'; title: string; children: React.ReactNode }) {
  const colorMap = {
    amber: 'border-amber-300 bg-amber-50/80',
    rose: 'border-rose-300 bg-rose-50/80',
    blue: 'border-blue-300 bg-blue-50/80',
  }
  const textColor = color === 'amber' ? 'text-amber-700' : color === 'rose' ? 'text-rose-700' : 'text-blue-700'
  return (
    <div className={`rounded-2xl border-2 p-4 ${colorMap[color]}`}>
      <div className={`mb-1.5 text-xs font-bold uppercase tracking-wide ${textColor}`}>
        ℹ️ {title}
      </div>
      <div className="text-sm leading-relaxed text-blue-900">{children}</div>
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

function SectorCard({
  icon: Icon,
  title,
  share,
  mass,
  cation,
  color,
}: {
  icon: typeof Brain
  title: string
  share: string
  mass: string
  cation: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-sm font-black uppercase text-blue-900">{title}</div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-blue-50/60 py-2">
            <div className="text-[10px] font-bold uppercase text-blue-700/70">Доля воды</div>
            <div className="text-xs font-black text-blue-900 sm:text-sm">{share}</div>
          </div>
          <div className="rounded-lg bg-blue-50/60 py-2">
            <div className="text-[10px] font-bold uppercase text-blue-700/70">Масса тела</div>
            <div className="text-xs font-black text-blue-900 sm:text-sm">{mass}</div>
          </div>
          <div className="rounded-lg bg-blue-50/60 py-2">
            <div className="text-[10px] font-bold uppercase text-blue-700/70">Катион</div>
            <div className="text-xs font-black text-blue-900 sm:text-sm">{cation}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ElectrolyteCard({
  symbol,
  name,
  range,
  role,
  color,
}: {
  symbol: string
  name: string
  range: string
  role: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-base font-black text-white shadow-md`}>
            {symbol}
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-[10px] font-mono font-bold text-blue-700">{range}</div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{role}</p>
      </div>
    </div>
  )
}

function SeverityCard({
  level,
  range,
  color,
  signs,
}: {
  level: string
  range: string
  color: 'emerald' | 'amber' | 'rose'
  signs: string[]
}) {
  const colorMap = {
    emerald: 'border-emerald-300 bg-emerald-50/60',
    amber: 'border-amber-300 bg-amber-50/60',
    rose: 'border-rose-300 bg-rose-50/60',
  }
  const badgeMap = {
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
  }
  const textMap = {
    emerald: 'text-emerald-700',
    amber: 'text-amber-700',
    rose: 'text-rose-700',
  }
  return (
    <div className={`rounded-2xl border-2 p-4 ${colorMap[color]}`}>
      <div className="mb-2 flex items-center gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-md ${badgeMap[color]}`}>
          <Droplets className="h-4 w-4" />
        </span>
        <div>
          <div className={`text-sm font-black uppercase ${textMap[color]}`}>{level}</div>
          <div className="text-[10px] font-mono text-blue-700">потеря массы тела: {range}</div>
        </div>
      </div>
      <ul className="space-y-1 text-xs text-blue-900/90 sm:text-sm">
        {signs.map((s) => (
          <li key={s} className="flex gap-1.5">
            <span className={`flex-shrink-0 ${textMap[color]}`}>•</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function AssessmentRow({
  icon: Icon,
  name,
  desc,
}: {
  icon: typeof Brain
  name: string
  desc: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/40 p-3">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-bold uppercase text-blue-700">{name}</div>
        <div className="text-xs leading-relaxed text-blue-900/80">{desc}</div>
      </div>
    </div>
  )
}

function FluidCard({
  icon: Icon,
  name,
  role,
  desc,
  color,
}: {
  icon: typeof FlaskConical
  name: string
  role: string
  desc: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">{role}</div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
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
