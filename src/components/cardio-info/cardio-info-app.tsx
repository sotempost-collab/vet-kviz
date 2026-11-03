'use client'

import { motion } from 'framer-motion'
import {
  Heart,
  Stethoscope,
  Activity,
  Brain,
  Zap,
  Droplets,
  Shield,
  AlertTriangle,
  Flame,
  Snowflake,
  BookOpen,
  Award,
  Lightbulb,
  ArrowRight,
  Play,
  Pause,
  Ear,
  Microscope,
  FlaskConical,
  Gauge,
  Waves,
} from 'lucide-react'

export default function CardioInfoApp({ onNavigateToQuiz, onNavigateTo3D }: { onNavigateToQuiz?: () => void; onNavigateTo3D?: () => void }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* ============= HERO ============= */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-300 bg-white/95 shadow-2xl shadow-blue-500/20 backdrop-blur"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 px-6 py-10 text-white sm:px-10 sm:py-14">
            {/* Декоративное сердце справа */}
            <div className="absolute right-6 top-6 opacity-25">
              <Heart className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <Heart className="h-3.5 w-3.5" /> Гайд для будущего ветеринара
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Сердечно-сосудистая система
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-blue-50 sm:text-lg">
                Анатомия, физиология, гемодинамика и патологии сердца собак и кошек.
                От формулы «3-4-5-6 — сердце здесь» до MMVD, ГКМП и тромбоэмболии.
              </p>
            </div>
          </div>

          {/* Key formula chips */}
          <div className="grid grid-cols-1 gap-3 border-t-2 border-blue-200 p-5 sm:grid-cols-3 sm:p-6">
            <FormulaChip label="Где слушать" value="3-4-5-6 — сердце здесь" icon={Heart} />
            <FormulaChip label="Видовое различие" value="Собака — клапаны, Кошка — стенка" icon={Stethoscope} />
            <FormulaChip label="Тоны сердца" value="Ля-Дуб" icon={Activity} />
          </div>
        </motion.section>

        {/* ============= МОДУЛЬ 1: АНАТОМИЯ И ГИСТОЛОГИЯ ============= */}
        <ModuleSeparator title="Модуль 1" subtitle="Анатомия и гистология" icon={Microscope} />

        {/* ============= РАЗДЕЛ 1: ТОПОГРАФИЧЕСКАЯ АНАТОМИЯ ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader number="1" title="ТОПОГРАФИЧЕСКАЯ АНАТОМИЯ" subtitle="Где живёт сердце?" icon={Heart} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Сердце</strong> живёт в грудной
              клетке между 3-м и 6-м межреберьями, преимущественно{' '}
              <strong className="text-blue-700">на левой стороне</strong>. Чтобы его «найти»,
              не обязательно вскрывать пациента — достаточно включить{' '}
              <strong className="text-blue-700">«рентгеновское зрение»</strong>: мысленно
              спроецируйте границы сердца на грудную клетку и ощутите ритм под ладонью.
            </p>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Сердце как квартира.</strong>{' '}
              У него есть точный адрес: 3–6 межреберья слева. Запомни адрес — найдёшь сердце.
            </KeyPhrase>

            <FormulaBox title="Якорь — где слушать" formula="3-4-5-6 — сердце здесь!" accent="blue" />

            <InfoBox color="blue" title="Кинестетическое упражнение «Найди сердце на себе»">
              <strong className="uppercase text-blue-700">Положи ладонь на левую сторону
              грудной клетки</strong>, между 3-м и 6-м ребром, чуть ниже подмышки. Почувствуй
              «тук-тук» — это твоя собственная насосная станция. То же самое ты будешь делать
              на собаке и кошке: левая сторона, 3–6 межреберье.
            </InfoBox>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Сердце — не абстрактный «орган где-то в груди». У него точный адрес: слева,
              между 3-м и 6-м межреберьем. Запомни «3-4-5-6» — и ты знаешь, куда положить
              стетоскоп на любом пациенте. Главное — не перепутать лево и право.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 2: ТОЧКИ АУСКУЛЬТАЦИИ (PMI) ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader number="2" title="ТОЧКИ АУСКУЛЬТАЦИИ (PMI)" subtitle="Где слушать?" icon={Stethoscope} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">PMI</strong> (point of maximal
              intensity) — точка максимальной слышимости каждого клапана. Каждый клапан
              «слышен» там, где кровь идёт дальше всего от него: митральный — на верхушке,
              аортальный и лёгочный — выше, трикуспидальный — справа.
            </p>

            {/* Таблица 1: PMI points — стилизована как сетка карточек */}
            <TableGrid
              title="Таблица 1 — точки аускультации (PMI)"
              icon={Stethoscope}
              headers={['Клапан', 'Где слушать', 'Как запомнить']}
              rows={[
                ['Митральный', 'Слева, 5-е м/р', '«Митра на голове епископа»'],
                ['Аортальный', 'Слева, 4-е м/р', '«Аорта — арка»'],
                ['Лёгочной', 'Слева, 3-е м/р', '«Лёгкие — летают» (вверху)'],
                ['Трикуспидальный', 'Справа, 4-е м/р', '«Три — три раза постучать справа»'],
              ]}
            />

            <FormulaBox title="Формула PMI" formula="3 — Лёгкой • 4 — Аорта • 5 — Митра • (справа 4) — Трикуспид." accent="blue" />

            <InfoBox color="amber" title="Кинестетическое упражнение — рука на груди">
              <strong className="uppercase text-blue-700">Положи ладонь на грудь собаки</strong>{' '}
              слева, на 3–5 межреберье. Почувствуй верхушечный толчок — это митральный клапан.
              Поднимись чуть выше — аорта и лёгочная артерия. Перенеси руку на правую сторону —
              трикуспидальный. Запомни «адреса» пальцами, а не только головой.
            </InfoBox>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              У каждого клапана своя «точка прослушивания». Митра — внизу слева (5-е), аорта
              чуть выше (4-е), лёгочной — ещё выше (3-е), а трикуспидальный вообще на другой
              стороне (справа, 4-е). Если знаешь адреса — знаешь, где искать шум.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 3: МАКРОСКОПИЧЕСКОЕ СТРОЕНИЕ ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader number="3" title="МАКРОСКОПИЧЕСКОЕ СТРОЕНИЕ" subtitle="Что внутри квартиры?" icon={Heart} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Сердце — это <strong className="uppercase text-blue-700">двойной насос</strong>,
              который гонит кровь по двум кругам кровообращения:{' '}
              <strong className="text-blue-700">большому</strong> (тело) и{' '}
              <strong className="text-blue-700">малому</strong> (лёгкие). Правая половина
              качает «грязную» кровь в лёгкие, левая — «чистую» в тело. Они никогда не смешиваются.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CirculationCard
                icon={Flame}
                title="Большой круг"
                route="Левый желудочек → аорта → тело → полые вены → правое предсердие"
                desc="Левая половина сердца качает кислородную кровь ко всем органам."
                color="from-rose-500 to-orange-600"
              />
              <CirculationCard
                icon={Snowflake}
                title="Малый круг"
                route="Правый желудочек → лёгочная артерия → лёгкие → лёгочные вены → левое предсердие"
                desc="Правая половина сердца качает венозную кровь в лёгкие за кислородом."
                color="from-cyan-500 to-sky-600"
              />
            </div>

            <InfoBox color="blue" title="Метафора «Экскурсия по сердцу» — ты эритроцит">
              Представь, что ты — эритроцит. Возвращаешься из тела уставший, без кислорода →{' '}
              <strong className="text-blue-700">правое предсердие</strong> → через
              трёхстворчатый клапан падаешь в <strong className="text-blue-700">правый
              желудочек</strong> → вылетаешь в лёгочную артерию в лёгкие, набираешь O₂ →
              возвращаешься через лёгочные вены в <strong className="text-blue-700">левое
              предсердие</strong> → через митральный клапан в{' '}
              <strong className="text-blue-700">левый желудочек</strong> → выбрасываешься в
              аорту. И всё это — за одну секунду.
            </InfoBox>

            <FormulaBox title="Маршрут крови" formula="Пред-желудок-клапан-артерия" accent="blue" />

            <InfoBox color="amber" title="Метафора «Насосная станция»">
              <strong className="uppercase text-blue-700">Правая половина — «грязная вода»</strong>{' '}
              (венозная кровь): принимает отработанную воду из города и качает в очистные
              сооружения — лёгкие. <strong className="text-blue-700">Левая половина — «чистая
              вода»</strong> (артериальная кровь): принимает свежую воду из лёгких и качает по
              всему городу-телу. Два насоса, один корпус, никакой утечки между ними.
            </InfoBox>

            {/* Таблица 2: сравнительная анатомия собаки и кошки */}
            <TableGrid
              title="Таблица 2 — собака vs кошка (сравнительная анатомия)"
              icon={Microscope}
              headers={['Параметр', 'Собака', 'Кошка']}
              rows={[
                ['Форма сердца', 'Горизонтальная, «лежит»', 'Вертикальная, «стоит»'],
                ['Дуга аорты', 'Левая', 'Чаще правая (40%)'],
                ['Коронарные артерии', 'Хорошо развиты', 'Менее развиты'],
                ['Нормальная ЧСС', '70-160', '120-240'],
              ]}
            />

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Сердце — это две квартиры в одном доме: справа — «грязная вода» в лёгкие, слева —
              «чистая вода» в тело. Кровь проходит предсердие → клапан → желудочек → клапан →
              артерию. А у собаки сердце «лежит», а у кошки — «стоит». Запомни разницу —
              пригодится на рентгене.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4: ГИСТОЛОГИЯ ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader number="4" title="ГИСТОЛОГИЯ" subtitle="Из чего построена квартира?" icon={Microscope} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Стенка сердца состоит из{' '}
              <strong className="uppercase text-blue-700">четырёх слоёв</strong>, как дом — из
              обоев, стен, фасада и забора. Каждый слой выполняет свою задачу: внутренний
              гладко скользит, средний сокращается, наружный защищает, а перикард держит всё вместе.
            </p>

            <div className="space-y-3">
              <LayerCard
                layer="Эндокард"
                role="«Обои» — внутренняя выстилка"
                desc="Тонкий гладкий слой, выстилающий камеры и клапаны. Делает поверхность скользкой, чтобы кровь текла без завихрений."
                color="from-rose-500 to-pink-600"
                icon={Droplets}
              />
              <LayerCard
                layer="Миокард"
                role="«Стены» — рабочая мышца"
                desc="Самый толстый слой. Состоит из кардиомиоцитов, которые сокращаются синхронно. Толщина зависит от нагрузки: левый желудочек — самый мощный."
                color="from-rose-600 to-orange-600"
                icon={Activity}
              />
              <LayerCard
                layer="Эпикард"
                role="«Фасад» — висцеральный листок перикарда"
                desc="Наружный слой миокарда, покрытый мезотелием. Защищает и несёт сосуды, питающие саму стенку сердца (коронарные)."
                color="from-amber-500 to-orange-600"
                icon={Shield}
              />
              <LayerCard
                layer="Перикард"
                role="«Забор» — фиброзная сумка"
                desc="Плотная наружная оболочка с небольшим количеством серозной жидкости. Не даёт сердцу перерастягиваться и трёт о соседние органы."
                color="from-slate-500 to-slate-700"
                icon={Shield}
              />
            </div>

            <InfoBox color="blue" title="Метафора «Проводящая система — электрика в доме»">
              <strong className="uppercase text-blue-700">Проводящая система сердца</strong> —
              это «электрика» в квартире-сердце. Она сама генерирует импульсы и сама их
              распределяет. Без неё миокард был бы просто куском мяса. Электрика начинается в{' '}
              <strong className="text-blue-700">SA-узле</strong> (главный рубильник), идёт в{' '}
              <strong className="text-blue-700">AV-узел</strong> (распределительный щит), затем
              в <strong className="text-blue-700">пучок Гиса</strong> (провода) и{' '}
              <strong className="text-blue-700">волокна Пуркинье</strong> (лампочки-миоциты).
            </InfoBox>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ConductionCard
                name="SA-узел"
                anchor="СА — Сердце Активируется!"
                desc="Синусно-предсердный узел. Главный водитель ритма. Расположен в правом предсердии. Задаёт 60–100 ударов/мин."
                color="from-blue-500 to-cyan-600"
              />
              <ConductionCard
                name="AV-узел"
                anchor="АВ — Автоматическая Выдержка!"
                desc="Предсердно-желудочковый узел. Задержка 0.1 сек — чтобы предсердия успели сократиться до желудочков."
                color="from-violet-500 to-purple-600"
              />
              <ConductionCard
                name="Пучок Гиса"
                anchor="«Главный провод»"
                desc="Передаёт импульс от AV-узла к желудочкам по межжелудочковой перегородке. Делится на правую и левую ножки."
                color="from-emerald-500 to-teal-600"
              />
              <ConductionCard
                name="Волокна Пуркинье"
                anchor="«Лампочки миоцитов»"
                desc="Конечные волокна, охватывающие миокард желудочков. Дают сигнал «сокращаться!» одновременно всем клеткам."
                color="from-amber-500 to-orange-600"
              />
            </div>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Стенка сердца — это четырёхслойный «дом»: обои (эндокард), стены (миокард), фасад
              (эпикард) и забор (перикард). А внутри дома — электрика: SA-узел включает свет, AV-узел
              делает паузу, пучок Гиса несёт ток, Пуркинье зажигает миоциты. Без электрика дом
              тёмный и тихий.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= МОДУЛЬ 2: ФИЗИОЛОГИЯ И ГЕМОДИНАМИКА ============= */}
        <ModuleSeparator title="Модуль 2" subtitle="Физиология и гемодинамика" icon={Activity} />

        {/* ============= РАЗДЕЛ 5: СЕРДЕЧНЫЙ ЦИКЛ ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader number="5" title="СЕРДЕЧНЫЙ ЦИКЛ" subtitle="Симфония «Тук-Тук»" icon={Activity} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Сердечный цикл</strong> — это один
              удар сердца, состоящий из двух фаз: <strong className="text-blue-700">диастолы</strong>{' '}
              (расслабление и наполнение) и <strong className="text-blue-700">систолы</strong>{' '}
              (сокращение и выброс). За один цикл сердце сначала «вдыхает» кровь, потом её выталкивает.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PhaseCard
                phase="Диастола"
                tag="«Вдох» — наполнение"
                desc="Предсердия и желудочки расслаблены. Кровь свободно течёт через открытые атриовентрикулярные клапаны. Створчатые клапаны открыты, полулунные закрыты."
                color="from-cyan-500 to-sky-600"
                icon={Snowflake}
              />
              <PhaseCard
                phase="Систола"
                tag="«Выдох» — выброс"
                desc="Желудочки сокращаются. Створчатые клапаны захлопываются (S1), давление растёт, открываются полулунные клапаны — кровь уходит в аорту и лёгочную артерию."
                color="from-rose-500 to-orange-600"
                icon={Flame}
              />
            </div>

            <FormulaBox title="Тоны сердца" formula="S1 «Ля» — митра закрывается • S2 «Дуб» — аорта закрывается" accent="blue" />

            <InfoBox color="amber" title="Кинестетический якорь — сожми кулак">
              <strong className="uppercase text-blue-700">Сожми кулак резко</strong> — это{' '}
              <strong className="text-blue-700">«Ля» (S1)</strong>: створки захлопнулись,
              желудочек пошёл качать. <strong className="text-blue-700">Разожми резко</strong> —
              это <strong className="text-blue-700">«Дуб» (S2)</strong>: полулунные клапаны
              закрылись, кровь вернулась и стукнулась об артерии. Повтори «Ля-Дуб, Ля-Дуб» —
              и ты почувствуешь симфонию сердца.
            </InfoBox>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Один удар = диастола + систола. Сначала сердце расслабляется и наливается кровью,
              потом сжимается и её выталкивает. При этом створки хлопают дважды: «Ля» в начале
              систолы, «Дуб» в её конце. Сжимай кулак под счёт «Ля-Дуб» — и ритм навсегда
              засядет в пальцах.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 6: ЭЛЕКТРИЧЕСКАЯ АКТИВНОСТЬ ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader number="6" title="ЭЛЕКТРИЧЕСКАЯ АКТИВНОСТЬ" subtitle="Дирижёр оркестра" icon={Zap} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Импульс</strong> рождается в SA-узле,
              распространяется по предсердиям, доходит до AV-узла и{' '}
              <strong className="text-blue-700">задерживается на 0.1 секунды</strong> — ровно
              настолько, чтобы предсердия закончили сокращаться и вытолкнуть кровь в желудочки.
              Затем импульс мчится по пучку Гиса и волокнам Пуркинье, заставляя желудочки
              сокращаться снизу вверх — от верхушки к основанию.
            </p>

            <FormulaBox title="Путь импульса" formula="SA → AV (пауза 0.1с) → пучок Гиса → Пуркинье → желудочки" accent="blue" />

            <InfoBox color="blue" title="ECG — якорь на ЭКГ">
              <strong className="uppercase text-blue-700">P-волна</strong> — сокращение
              предсердий (SA → AV).{' '}
              <strong className="text-blue-700">QRS-комплекс</strong> — сокращение желудочков
              (пучок Гиса → Пуркинье).{' '}
              <strong className="text-blue-700">T-волна</strong> — расслабление (реполяризация)
              желудочков. Три буквы на ЭКГ = три момента в сердечном цикле.
            </InfoBox>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">P — предсердия. QRS — желудочки. T — тишина (расслабление).</strong>{' '}
              Три буквы расскажут тебе всю историю одного удара.
            </KeyPhrase>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Электрика сердца — это оркестр с дирижёром. SA-узл — дирижёр с палочкой, AV-узл —
              суфлёр, делающий паузу «дайте предсердиям доиграть». Пучок Гиса — главная скрипка,
              Пуркинье — все остальные инструменты. На ЭКГ ты видишь партитуру: P, QRS, T —
              вступление, кульминация и финал одного удара.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 7: ГЕМОДИНАМИКА ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader number="7" title="ГЕМОДИНАМИКА" subtitle="Правила потока" icon={Waves} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Гемодинамика</strong> — это наука о
              том, как кровь течёт по сосудам. Сердце выбрасывает кровь по правилу трёх столбов:
              <strong className="text-blue-700"> преднагрузка</strong>,{' '}
              <strong className="text-blue-700"> сократимость</strong> и{' '}
              <strong className="text-blue-700"> постнагрузка</strong>. Нарушь любой — и насос
              сломается.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <PillarCard
                name="Preload"
                tag="«Резинка»"
                desc="Насколько сильно растянуты стенки желудочка перед сокращением. Чем больше вернулось крови — тем сильнее натяжение."
                color="from-blue-500 to-cyan-600"
                icon={Waves}
              />
              <PillarCard
                name="Contractility"
                tag="«Педаль газа»"
                desc="Сила, с которой миокард сокращается при данной нагрузке. Зависит от симпатической системы, кальция и сократимости кардиомиоцитов."
                color="from-rose-500 to-orange-600"
                icon={Flame}
              />
              <PillarCard
                name="Afterload"
                tag="«Дверь»"
                desc="Сопротивление, которое нужно преодолеть, чтобы выбросить кровь. Это давление в аорте. Высокое давление = тяжёлая дверь."
                color="from-violet-500 to-purple-600"
                icon={Gauge}
              />
            </div>

            <FormulaBox title="Закон Франка-Старлинга" formula="Чем больше растяжение → тем сильнее сокращение" accent="blue" />

            <InfoBox color="blue" title="Закон Франка-Старлинга на пальцах">
              <strong className="uppercase text-blue-700">Предсердия прислали много крови →
              желудочек растянулся → миоциты натянулись, как резинка → сократились сильнее →
              выбросили больше крови.</strong> Это автоматический механизм «сколько пришло —
              столько и ушло». Работает без нервной системы, на уровне самих кардиомиоцитов.
            </InfoBox>

            {/* 3D-модели сердца — кликабельная кнопка (на месте «Видео гемодинамики») */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={onNavigateTo3D}
              disabled={!onNavigateTo3D}
              className="group w-full overflow-hidden rounded-2xl border-2 border-blue-300 bg-white text-left shadow-lg transition-all hover:border-blue-400 hover:shadow-xl active:scale-[0.99] disabled:opacity-60"
            >
              <div className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 px-5 py-8 text-center text-white">
                <div className="absolute right-4 top-4 opacity-30">
                  <Heart className="h-16 w-16" />
                </div>
                <div className="relative z-10 mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Heart className="h-7 w-7 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-base font-black uppercase tracking-tight sm:text-lg">
                  🎥 3D-модели сердца
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-blue-50 sm:text-sm">
                  Интерактивные 3D-модели сердца собаки. Покрутите анатомию в пространстве,
                  увидите предсердия, желудочки и клапаны со всех сторон. Переключайтесь между
                  двумя видами модели.
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur transition-transform group-hover:translate-x-1">
                  <Play className="h-3 w-3" /> Открыть 3D-визуализацию
                </div>
              </div>
            </motion.button>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Гемодинамика держится на трёх столбах: резинке (preload), педали газа
              (contractility) и двери (afterload). Франк и Старлинг объяснили главное: чем
              сильнее натянул резинку — тем сильнее она стрельнула. А если дверь слишком тяжёлая,
              даже сильный насос устанет её толкать.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 8: РААС ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader number="8" title="РААС" subtitle="Слишком усердный сантехник" icon={Droplets} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">РААС — ренин-ангиотензин-
              альдостероновая система</strong>. Это «сантехник», который отвечает за объём
              крови и давление. Когда почки замечают мало крови — сантехник включает всю
              арматуру разом.
            </p>

            <FormulaBox title="Каскад РААС" formula="Ренин → Ангиотензин II → Альдостерон" accent="blue" />

            <div className="space-y-3">
              <CascadeStep
                step="1"
                name="Ренин"
                where="Почки (юкстагломерулярный аппарат)"
                desc="Почкам мало крови или мало Na⁺ → они выделяют ренин. Это сигнал «давление падает!»"
                color="from-cyan-500 to-sky-600"
              />
              <CascadeStep
                step="2"
                name="Ангиотензин II"
                where="Печень + лёгкие (АПФ)"
                desc="Ренин превращает ангиотензиноген в ангиотензин I, а АПФ (в лёгких) — в ангиотензин II. Это мощнейший сосудосуживатель."
                color="from-amber-500 to-orange-600"
              />
              <CascadeStep
                step="3"
                name="Альдостерон"
                where="Надпочечники"
                desc="Ангиотензин II приказывает надпочечникам выделить альдостерон. Тот удерживает Na⁺ и воду в почках — кровь возвращается, давление растёт."
                color="from-violet-500 to-purple-600"
              />
            </div>

            <InfoBox color="amber" title="Метафора «Слишком усердный сантехник»">
              Сантехник был нанят спасать дом от засухи. Но он так вошёл в раж, что заткнул все
              сливы, зажал все трубы и накачал воды столько, что трубы начали лопаться. В
              организме сантехник = РААС. В норме он спасает при кровопотере.{' '}
              <strong className="text-blue-700">При сердечной недостаточности он становится
              врагом</strong>: задерживает воду, повышает давление, и без того уставшее сердце
              работает за троих.
            </InfoBox>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">ACE-ингибиторы блокируют АПФ → нет ангиотензина II.</strong>{' '}
              Спиронолактон блокирует альдостерон → нет задержки воды. Так мы успокаиваем
              разбушевавшегося сантехника.
            </KeyPhrase>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              РААС — это сантехник, который «спасает» организм при падении давления. Ренин →
              ангиотензин II → альдостерон → трубы зажаты, вода задержана, давление вверх.
              Хорошо в шоке, плохо в сердечной недостаточности. Поэтому даём АПФ-ингибиторы и
              спиронолактон — чтобы сантехник не перестарался.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 9: АУСКУЛЬТАЦИЯ СЕРДЦА ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader number="9" title="АУСКУЛЬТАЦИЯ СЕРДЦА" subtitle="Справочник ритмов" icon={Ear} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Аускультация</strong> — главный
              клинический приём кардиологии. Один стетоскоп за 30 секунд расскажет тебе больше,
              чем любой анализ. Слушай <strong className="text-blue-700">ритм, частоту, тоны
              и шумы</strong>. Ниже — пять эталонных звуков, которые нужно узнать с закрытыми глазами.
            </p>

            <InfoBox color="blue" title="Что слушать">
              <strong className="uppercase text-blue-700">Тоны</strong> — «Ля-Дуб» в норме.{' '}
              <strong className="text-blue-700">Шумы</strong> — дополнительные звуки между
              тонами. <strong className="text-blue-700">Ритм галопа</strong> — третий тон S3,
              всегда патология. <strong className="text-blue-700">Приглушённые тоны</strong> —
              жидкость в перикарде. Каждый звук = отдельный диагноз.
            </InfoBox>

            {/* 5 audio players */}
            <div className="max-h-[28rem] space-y-3 overflow-y-auto pr-1 cardio-scroll">
              <AudioCard
                title="Нормальный ритм"
                desc="S1 «луб», S2 «дуб». Чёткие, ритмичные тоны. Это звучит здоровое сердце."
                src="/audio/auscultation/normal.wav"
                color="emerald"
                icon={Activity}
              />
              <AudioCard
                title="Систолический шум"
                desc="MMVD (собаки). Шум между S1 и S2 — кровь回流ает через негерметичный митральный клапан."
                src="/audio/auscultation/systolic_murmur.wav"
                color="amber"
                icon={AlertTriangle}
              />
              <AudioCard
                title="Машинный шум"
                desc="PDA (незаращение протока). Непрерывный «машинный» шум и в систолу, и в диастолу."
                src="/audio/auscultation/machine_murmur.wav"
                color="rose"
                icon={Flame}
              />
              <AudioCard
                title="Ритм галопа"
                desc="S3 (сердечная недостаточность). Третий тон после S2 — «луб-дуб-та». Всегда патология."
                src="/audio/auscultation/gallop.wav"
                color="violet"
                icon={Waves}
              />
              <AudioCard
                title="Приглушённые тоны"
                desc="Тампонада сердца. Сердце «плавает» в жидкости перикарда — звуки едва слышны."
                src="/audio/auscultation/muffled.wav"
                color="slate"
                icon={Shield}
              />
            </div>

            <Callout variant="info" emoji="🎭" title="Мини-заключение">
              Пять звуков — пять диагнозов. «Ля-Дуб» — норма. Шум в систолу — клапан. Машинный
              шум — PDA. Галоп — слабое сердце. Приглушённые тоны — жидкость в перикарде.
              Слушай каждый звук по 30 секунд и твой стетоскоп станет лучше ЭхоКГ.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= МОДУЛЬ 3: ПАТОЛОГИЯ ============= */}
        <ModuleSeparator title="Модуль 3" subtitle="Патология — что ломается в насосе?" icon={AlertTriangle} />

        {/* ============= РАЗДЕЛ 10: ВРОЖДЁННЫЕ ПОРОКИ ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader number="10" title="ВРОЖДЁННЫЕ ПОРОКИ" subtitle="Заводской брак" icon={AlertTriangle} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Врождённые пороки</strong> — это
              «заводской брак» сердца, с которым пациент родился. Чаще встречаются у
              определённых пород. Большинство обнаруживают у молодых животных — щенков и
              котят до года. Главные «четыре всадника» — PDA, SAS, PS и дисплазия клапанов.
            </p>

            <div className="space-y-3">
              <DefectCard
                name="PDA"
                full="Незаращение артериального (боталлова) протока"
                location="Слева, 3-е м/р"
                murmur="Машинный непрерывный"
                breeds="Немецкие овчарки, пудели"
                metaphor="«Обходная труба» — между аортой и лёгочной артерией остался канал, который должен был закрыться после рождения."
                color="from-rose-500 to-pink-600"
              />
              <DefectCard
                name="SAS"
                full="Субаортальный стеноз"
                location="Слева, 4-е м/р"
                murmur="Грубый систолический"
                breeds="Боксёры, доги"
                metaphor="«Узкая дверь» — под аортальным клапаном кольцо сужает выход крови из левого желудочка."
                color="from-amber-500 to-orange-600"
              />
              <DefectCard
                name="PS"
                full="Стеноз лёгочной артерии"
                location="Слева, 3-е м/р"
                murmur="Грубый систолический"
                breeds="Боксёры, терьеры"
                metaphor="«Засор в трубе» — лёгочная артерия сужена, правому желудочку тяжело протолкнуть кровь в лёгкие."
                color="from-violet-500 to-purple-600"
              />
              <DefectCard
                name="Дисплазия клапанов"
                full="Дисплазия атриовентрикулярных клапанов"
                location="Зависит от клапана"
                murmur="Систолический"
                breeds="Крупные породы"
                metaphor="«Двери с дефектом» — створки malformed, не закрываются герметично, кровь течёт назад."
                color="from-slate-500 to-slate-700"
              />
            </div>

            {/* Таблица 3: сравнение врождённых пороков */}
            <TableGrid
              title="Таблица 3 — врождённые пороки (сравнение)"
              icon={AlertTriangle}
              headers={['Порок', 'Где шум', 'Характер шума', 'Породы', 'Метафора']}
              rows={[
                ['PDA', 'Слева 3 м/р', 'Машинный непрерывный', 'Нем. овчарки, пудели', 'Обходная труба'],
                ['SAS', 'Слева 4 м/р', 'Грубый систолический', 'Боксёры, доги', 'Узкая дверь'],
                ['PS', 'Слева 3 м/р', 'Грубый систолический', 'Боксёры, терьеры', 'Засор в трубе'],
                ['Дисплазия', 'Зависит', 'Систолический', 'Крупные породы', 'Двери с дефектом'],
              ]}
            />

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Врождённые пороки — это заводской брак: где-то труба не закрылась (PDA), где-то
              сузилась (SAS, PS), где-то клапан кривой (дисплазия). Каждый шумит по-своему и в
              своём месте. Знай адреса и характер — узнаешь порок ещё до ЭхоКГ.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 11: ПРИОБРЕТЁННЫЕ БОЛЕЗНИ СОБАК ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader number="11" title="ПРИОБРЕТЁННЫЕ БОЛЕЗНИ СОБАК" subtitle="Износ клапанов" icon={Heart} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">У собак главное — клапаны.</strong>{' '}
              С возрастом они «изнашиваются», становятся толстыми и бугристыми, перестают
              закрываться герметично. В итоге — громкий систолический шум и сердечная
              недостаточность. Две главные болезни: <strong className="text-blue-700">MMVD</strong>{' '}
              у мелких и <strong className="text-blue-700">ДКМП</strong> у крупных пород.
            </p>

            {/* MMVD */}
            <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md">
                  <Droplets className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase text-rose-700">MMVD — митральная недостаточность</div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-rose-700/70">«Протекающий кран»</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                <strong className="text-blue-700">Хроническая болезнь митрального клапана</strong>{' '}
                у мелких пожилых собак. Клапан утолщается, становится «сморщенным», кровь
                возвращается в левое предсердие во время систолы → громкий систолический шум.
                Стадии A–D: от группы риска до терминальной недостаточности.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <StagePill stage="A" desc="Группа риска" color="emerald" />
                <StagePill stage="B" desc="Шум есть, симптомов нет" color="amber" />
                <StagePill stage="C" desc="Симптомы недостаточности" color="orange" />
                <StagePill stage="D" desc="Терминальная стадия" color="rose" />
              </div>
            </div>

            {/* DCM */}
            <div className="rounded-2xl border-2 border-slate-300 bg-slate-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 text-white shadow-md">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase text-slate-700">ДКМП — дилатационная кардиомиопатия</div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-slate-700/70">«Уставший великан»</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                <strong className="text-blue-700">Болезнь миокарда</strong> у крупных и
                гигантских пород. Сердце растягивается, стенки истончаются, насос слабеет.
                Шума часто нет вообще — зато есть аритмии, слабость и внезапная смерть.
              </p>
            </div>

            {/* Таблица 4: MMVD vs ДКМП */}
            <TableGrid
              title="Таблица 4 — MMVD vs ДКМП (сравнение)"
              icon={Heart}
              headers={['Параметр', 'MMVD', 'ДКМП']}
              rows={[
                ['Размер собаки', 'Мелкие', 'Крупные/гигантские'],
                ['Возраст', 'Пожилые (>7)', 'Средний (4-10)'],
                ['Проблема', 'Клапан (регургитация)', 'Миокард (слабость)'],
                ['Сердце', '↑Левое предсердие', '↑Все камеры'],
                ['Шум', 'Громкий систолический', 'Слабый/отсутствует'],
                ['Метафора', 'Протекающий кран', 'Уставший великан'],
              ]}
            />

            <FormulaBox title="Главный якорь" formula="Собака — это про КЛАПАНЫ" accent="blue" />

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              У собак сердце страдает по-разному в зависимости от размера. Мелкие собачки
              «капают» через изношенный клапан (MMVD), крупные — страдают от слабого миокарда
              (ДКМП). Протекающий кран против уставшего великана. Но в обоих случаях главный
              враг — износ, а не врождённый брак.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 12: ПРИОБРЕТЁННЫЕ БОЛЕЗНИ КОШЕК ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader number="12" title="ПРИОБРЕТЁННЫЕ БОЛЕЗНИ КОШЕК" subtitle="Загадка толстой стенки" icon={Brain} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">У кошек главное — стенка.</strong>{' '}
              Самая частая кардиопатия кошек — <strong className="text-blue-700">гипертрофическая
              кардиомиопатия (ГКМП)</strong>: стенка левого желудочка становится слишком толстой
              и жёсткой, желудочек не может нормально расслабиться и наполниться. Главная
              ловушка — <strong className="text-blue-700">только 20–30% кошек с ГКМП имеют шум</strong>!
            </p>

            {/* HCM */}
            <div className="rounded-2xl border-2 border-violet-300 bg-violet-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md">
                  <Flame className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase text-violet-700">ГКМП — гипертрофическая кардиомиопатия</div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-violet-700/70">«Жёсткая губка» • шум только у 20–30%</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                <strong className="text-blue-700">Стенка левого желудочка утолщается</strong>,
                становится жёсткой и не может расслабиться в диастолу. Сердце не «не может
                сжаться», оно «не может наполниться». Кошка долго выглядит здоровой, а потом
                внезапно — отёк лёгких или тромбоэмболия.
              </p>
            </div>

            {/* FATE */}
            <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase text-rose-700">FATE — тромбоэмболия</div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-rose-700/70">«5 P» — кошачья катастрофа</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                <strong className="text-blue-700">Feline Aortic Thromboembolism</strong> —
                тромб из левого предсердия вылетает в аорту и закупоривает бифуркацию. Задние
                лапы парализованы, холодные, без пульса. Кошка кричит от боли. Без лечения
                гибнет в течение часов.
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-5">
                <FivePs letter="P" name="Pain" desc="Боль — кошка кричит" color="rose" />
                <FivePs letter="P" name="Paralysis" desc="Паралич задних лап" color="amber" />
                <FivePs letter="P" name="Pallor" desc="Бледность подушечек" color="slate" />
                <FivePs letter="P" name="Pulselessness" desc="Нет пульса на бедре" color="violet" />
                <FivePs letter="P" name="Poikilothermia" desc="Лапы холодные как лёд" color="cyan" />
              </div>
            </div>

            {/* Таблица 5: собака vs кошка (патология) */}
            <TableGrid
              title="Таблица 5 — собака vs кошка (патология)"
              icon={Microscope}
              headers={['Параметр', 'Собака', 'Кошка']}
              rows={[
                ['Главная болезнь', 'MMVD (клапаны)', 'ГКМП (стенка)'],
                ['Шум', 'Почти всегда', 'Только 20-30%'],
                ['Кашель', 'Часто', 'НИКОГДА!'],
                ['Тромбоэмболия', 'Редко', 'Часто (FATE)'],
                ['Якорь', '«Про клапаны»', '«Про стенку»'],
              ]}
            />

            <FormulaBox title="Главный якорь" formula="Кошка — это про СТЕНКУ" accent="blue" />

            <InfoBox color="rose" title="КРИТИЧЕСКОЕ правило — кошки НЕ кашляют от сердца!">
              <strong className="uppercase text-blue-700">Если у кошки кашель — это сердце
              только в последнюю очередь.</strong> Чаще — астма. Собаки с сердечной
              недостаточностью кашляют из-за увеличения левого предсердия, которое давит на
              бронхи. Кошки — практически никогда. Не путай!
            </InfoBox>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              У кошек сердце ломается по-другому: не клапаны, а стенка. ГКМП делает желудочек
              «жёсткой губкой». А 70–80% кошек с больным сердцем не имеют шума вообще —
              поэтому нормальная аускультация не исключает кардиопатии. И никогда не жди
              кашля у кошки — его не будет. Зато может прийти FATE: пять «P» — и кошачья
              катастрофа в полном разгаре.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 13: ДРУГИЕ ПАТОЛОГИИ ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader number="13" title="ДРУГИЕ ПАТОЛОГИИ" subtitle="Глисты и тампонада" icon={Shield} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Кроме «классических» болезней сердца есть ещё две патологии, которые обязан знать
              каждый ветеринар: <strong className="text-blue-700">дирофиляриоз</strong>{' '}
              (глибы-«нитки» в правом сердце) и{' '}
              <strong className="text-blue-700">тампонада сердца</strong> (жидкость в перикарде,
              мешающая сокращению).
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <OtherCard
                name="Дирофиляриоз"
                full="Dirofilaria immitis"
                desc="«Сердечные глисты» — нематоды длиной до 30 см живут в правом желудочке и лёгочной артерии. Передаются через комаров. Встречается в эндемичных регионах."
                metaphor="«Живые шнурки в насосе»"
                color="from-emerald-500 to-teal-600"
                icon={Activity}
              />
              <OtherCard
                name="Тампонада сердца"
                full="Перикардиальный выпот"
                desc="Жидкость скапливается в полости перикарда, сдавливает сердце и не даёт ему наполниться. Тоны приглушены, шейные вены набухшие, давление падает."
                metaphor="«Сердце в пластиковой бутылке»"
                color="from-slate-500 to-slate-700"
                icon={Shield}
              />
            </div>

            <InfoBox color="amber" title="Как заподозрить дирофиляриоз">
              <strong className="uppercase text-blue-700">Собака из эндемичного региона</strong>,
              вялость, кашель, одышка, исхудание. На рентгене — расширение лёгочной артерии и
              правого сердца. Подтверждают — тест на антиген Knott. Профилактика регулярными
              препаратами — критически важна.
            </InfoBox>

            <InfoBox color="rose" title="Тампонада — экстренное состояние!">
              <strong className="uppercase text-blue-700">Триада Бека</strong>: приглушённые
              тоны, набухшие шейные вены, низкое давление. Жидкость накапливается быстро →
              сердце не может наполниться → шок. Лечение — немедленный перикардиоцентез
              (пункция перикарда).
            </InfoBox>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Дирофиляриоз — это живые шнурки в насосе, передающиеся через комаров. Тампонада —
              сердце «плавает» в жидкости и не может наполниться. Первое лечат профилактикой,
              второе — пункцией. И то, и другое может убить пациента, если пропустить.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ФИНАЛ: ФИНАЛЬНАЯ ФОРМУЛА ============= */}
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
                  Финальная формула
                </h2>
                <p className="text-xs font-medium text-blue-700/70">Сводка якорей по сердечно-сосудистой</p>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-50/60 p-4 text-center">
              <div className="text-base font-black uppercase tracking-tight text-blue-700 sm:text-xl">
                3-4-5-6 • Собака-клапаны, Кошка-стенка • Ля-Дуб
              </div>
            </div>

            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-blue-700 sm:text-base">
              Запомните семь ключевых якорей:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-blue-900 sm:text-base">
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span><strong className="uppercase text-blue-700">Топография:</strong> 3–6 межреберье слева — «3-4-5-6 — сердце здесь!»</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span><strong className="uppercase text-blue-700">Тоны:</strong> «Ля» (S1) — митра закрылась, «Дуб» (S2) — аорта закрылась.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span><strong className="uppercase text-blue-700">Электрика:</strong> SA → AV (пауза 0.1с) → Гис → Пуркинье. P, QRS, T на ЭКГ.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span><strong className="uppercase text-blue-700">Гемодинамика:</strong> Preload (резинка) + Contractility (газ) + Afterload (дверь). Франк-Старлинг.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span><strong className="uppercase text-blue-700">Собака:</strong> клапаны (MMVD у мелких, ДКМП у крупных). Кашляет.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span><strong className="uppercase text-blue-700">Кошка:</strong> стенка (ГКМП). Шум только у 20–30%. НЕ кашляет. FATE (5 P).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span><strong className="uppercase text-blue-700">РААС:</strong> «усердный сантехник» — блокируем АПФ и альдостерон при недостаточности.</span>
              </li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Сердце</strong> — это двойной насос с
              точным адресом, своей электрикой, своей сантехникой и своими болезнями у разных
              видов. Собаки ломают клапаны, кошки утолщают стенку. Аускультация за 30 секунд
              ставит диагноз, который потом подтверждают ЭхоКГ. Не путай виды — и не пропускай
              тишину: отсутствие шума у кошки ничего не значит.
            </p>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-sm text-blue-900">
              <div className="mb-1 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span className="font-bold uppercase text-amber-700">🎭 Финальная метафора</span>
              </div>
              Сердце — это квартира-насос с точным адресом «3-4-5-6», своей электрикой
              (SA-AV-Гис-Пуркинье) и своим сантехником (РААС). Когда клапан подтекает — страдает
              собака. Когда стенка деревенеет — страдает кошка.{' '}
              <strong className="text-blue-700">Не лечи собаку по кошачьим правилам — и наоборот!</strong> 🐾
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
          <Heart className="mx-auto h-10 w-10 text-blue-600 transition-transform group-hover:scale-110" />
          <h3 className="mt-3 text-xl font-black uppercase text-blue-700">
            Готов проверить себя?
          </h3>
          <p className="mt-2 text-sm text-blue-900/80">
            5 вопросов по сердечно-сосудистой системе — на закрепление материала. Нажми, чтобы
            пройти тест <strong className="text-blue-700"> «Кардиология — проверь себя»</strong>.
          </p>
          <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:shadow-lg">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="uppercase tracking-wide">Перейти к тесту</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-blue-700/60">
          Гайд по сердечно-сосудистой системе собак и кошек • Анатомия, физиология,
          гемодинамика и патологии сердца • Для ветеринарных специалистов и студентов
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
  icon: typeof Heart
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

function ModuleSeparator({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string
  subtitle: string
  icon: typeof Heart
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="mb-6 mt-2 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 px-5 py-3 text-white shadow-lg"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-blue-50/80">{title}</div>
        <div className="text-sm font-black uppercase tracking-tight sm:text-base">{subtitle}</div>
      </div>
    </motion.div>
  )
}

function FormulaChip({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Heart }) {
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

/* ============= TABLE GRID (стилизованная таблица в виде сетки карточек) ============= */
function TableGrid({
  title,
  icon: Icon,
  headers,
  rows,
}: {
  title: string
  icon: typeof Heart
  headers: string[]
  rows: string[][]
}) {
  const rowColors = [
    'border-blue-200 bg-blue-50/40',
    'border-cyan-200 bg-cyan-50/40',
    'border-sky-200 bg-sky-50/40',
    'border-teal-200 bg-teal-50/40',
    'border-blue-200 bg-blue-50/40',
    'border-cyan-200 bg-cyan-50/40',
  ]
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.5 }}
      className="overflow-hidden rounded-2xl border-2 border-blue-300 bg-white shadow-lg"
    >
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">{title}</span>
        </div>
      </div>
      {/* Header row */}
      <div
        className="grid gap-px bg-blue-100"
        style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
      >
        {headers.map((h) => (
          <div key={h} className="bg-gradient-to-br from-blue-600 to-cyan-500 px-3 py-2 text-center text-[11px] font-black uppercase tracking-tight text-white sm:text-xs">
            {h}
          </div>
        ))}
      </div>
      {/* Data rows */}
      <div className="space-y-px bg-blue-100">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid gap-px ${rowColors[i % rowColors.length]}`}
            style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
          >
            {row.map((cell, j) => (
              <div
                key={j}
                className={`px-3 py-2.5 text-center text-xs leading-snug sm:text-sm ${
                  j === 0 ? 'font-black uppercase text-blue-700' : 'text-blue-900'
                }`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.figure>
  )
}

/* ============= CIRCULATION CARD (большой / малый круг) ============= */
function CirculationCard({
  icon: Icon,
  title,
  route,
  desc,
  color,
}: {
  icon: typeof Flame
  title: string
  route: string
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
          <div className="text-sm font-black uppercase text-blue-900">{title}</div>
        </div>
        <div className="mb-2 rounded-lg bg-blue-50/60 px-2 py-1.5 text-[10px] font-mono font-bold leading-snug text-blue-700">
          {route}
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

/* ============= LAYER CARD (слои стенки сердца) ============= */
function LayerCard({
  layer,
  role,
  desc,
  color,
  icon: Icon,
}: {
  layer: string
  role: string
  desc: string
  color: string
  icon: typeof Microscope
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-black uppercase text-blue-900">{layer}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">{role}</div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

/* ============= CONDUCTION CARD (проводящая система) ============= */
function ConductionCard({
  name,
  anchor,
  desc,
  color,
}: {
  name: string
  anchor: string
  desc: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-1 text-sm font-black uppercase text-blue-900">{name}</div>
        <div className="mb-2 inline-block rounded-md bg-blue-50/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700">
          {anchor}
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

/* ============= PHASE CARD (диастола / систола) ============= */
function PhaseCard({
  phase,
  tag,
  desc,
  color,
  icon: Icon,
}: {
  phase: string
  tag: string
  desc: string
  color: string
  icon: typeof Flame
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{phase}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">{tag}</div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

/* ============= PILLAR CARD (preload / contractility / afterload) ============= */
function PillarCard({
  name,
  tag,
  desc,
  color,
  icon: Icon,
}: {
  name: string
  tag: string
  desc: string
  color: string
  icon: typeof Gauge
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex flex-col items-start gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">«{tag}»</div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

/* ============= CASCADE STEP (РААС каскад) ============= */
function CascadeStep({
  step,
  name,
  where,
  desc,
  color,
}: {
  step: string
  name: string
  where: string
  desc: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-3">
          <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-sm font-black text-white shadow-md`}>
            {step}
          </div>
          <div className="flex-1">
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">{where}</div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

/* ============= AUDIO CARD (аускультация) ============= */
function AudioCard({
  title,
  desc,
  src,
  color,
  icon: Icon,
}: {
  title: string
  desc: string
  src: string
  color: 'emerald' | 'amber' | 'rose' | 'violet' | 'slate'
  icon: typeof Ear
}) {
  const colorMap: Record<string, string> = {
    emerald: 'from-emerald-500 to-teal-600 border-emerald-300',
    amber: 'from-amber-500 to-orange-600 border-amber-300',
    rose: 'from-rose-500 to-pink-600 border-rose-300',
    violet: 'from-violet-500 to-purple-600 border-violet-300',
    slate: 'from-slate-500 to-slate-700 border-slate-300',
  }
  const textColorMap: Record<string, string> = {
    emerald: 'text-emerald-700',
    amber: 'text-amber-700',
    rose: 'text-rose-700',
    violet: 'text-violet-700',
    slate: 'text-slate-700',
  }
  return (
    <div className={`overflow-hidden rounded-2xl border-2 ${colorMap[color].split(' ').slice(1).join(' ')} bg-white shadow-md`}>
      <div className={`bg-gradient-to-r ${colorMap[color].split(' ')[0]} ${colorMap[color].split(' ')[1]} px-4 py-2 text-white`}>
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span className="text-xs font-black uppercase tracking-wider sm:text-sm">{title}</span>
        </div>
      </div>
      <div className="p-4">
        <p className={`mb-3 text-xs leading-relaxed sm:text-sm ${textColorMap[color]}`}>{desc}</p>
        <audio controls preload="none" className="w-full" src={src}>
          Ваш браузер не поддерживает воспроизведение аудио.
        </audio>
      </div>
    </div>
  )
}

/* ============= DEFECT CARD (врождённые пороки) ============= */
function DefectCard({
  name,
  full,
  location,
  murmur,
  breeds,
  metaphor,
  color,
}: {
  name: string
  full: string
  location: string
  murmur: string
  breeds: string
  metaphor: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-3">
          <div className={`flex h-12 min-w-[3rem] items-center justify-center rounded-xl bg-gradient-to-br ${color} px-2 text-center text-sm font-black uppercase text-white shadow-md`}>
            {name}
          </div>
          <div>
            <div className="text-xs font-bold uppercase text-blue-900 sm:text-sm">{full}</div>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-1 gap-1.5 text-xs sm:grid-cols-2">
          <div className="rounded-md bg-blue-50/60 px-2 py-1">
            <span className="text-[10px] font-bold uppercase text-blue-700/70">Где шум:</span>{' '}
            <span className="font-bold text-blue-900">{location}</span>
          </div>
          <div className="rounded-md bg-blue-50/60 px-2 py-1">
            <span className="text-[10px] font-bold uppercase text-blue-700/70">Характер:</span>{' '}
            <span className="font-bold text-blue-900">{murmur}</span>
          </div>
          <div className="rounded-md bg-blue-50/60 px-2 py-1 sm:col-span-2">
            <span className="text-[10px] font-bold uppercase text-blue-700/70">Породы:</span>{' '}
            <span className="font-bold text-blue-900">{breeds}</span>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">
          <span className="font-bold uppercase text-blue-700">Метафора:</span> {metaphor}
        </p>
      </div>
    </div>
  )
}

/* ============= STAGE PILL (стадии MMVD) ============= */
function StagePill({
  stage,
  desc,
  color,
}: {
  stage: string
  desc: string
  color: 'emerald' | 'amber' | 'orange' | 'rose'
}) {
  const colorMap = {
    emerald: 'from-emerald-500 to-teal-600',
    amber: 'from-amber-500 to-yellow-600',
    orange: 'from-orange-500 to-red-600',
    rose: 'from-rose-500 to-pink-600',
  }
  return (
    <div className="rounded-xl border border-blue-100 bg-white p-2 text-center shadow-sm">
      <div className={`mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${colorMap[color]} text-xs font-black text-white shadow`}>
        {stage}
      </div>
      <div className="text-[10px] font-bold uppercase leading-tight text-blue-900">{desc}</div>
    </div>
  )
}

/* ============= FIVE Ps (FATE симптомы) ============= */
function FivePs({
  letter,
  name,
  desc,
  color,
}: {
  letter: string
  name: string
  desc: string
  color: 'rose' | 'amber' | 'slate' | 'violet' | 'cyan'
}) {
  const colorMap: Record<string, string> = {
    rose: 'from-rose-500 to-pink-600',
    amber: 'from-amber-500 to-orange-600',
    slate: 'from-slate-500 to-slate-700',
    violet: 'from-violet-500 to-purple-600',
    cyan: 'from-cyan-500 to-sky-600',
  }
  return (
    <div className="rounded-xl border border-blue-100 bg-white p-2 text-center shadow-sm">
      <div className={`mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[color]} text-base font-black text-white shadow`}>
        {letter}
      </div>
      <div className="text-[10px] font-black uppercase text-blue-700">{name}</div>
      <div className="mt-0.5 text-[10px] leading-tight text-blue-900/80">{desc}</div>
    </div>
  )
}

/* ============= OTHER CARD (дирофиляриоз, тампонада) ============= */
function OtherCard({
  name,
  full,
  desc,
  metaphor,
  color,
  icon: Icon,
}: {
  name: string
  full: string
  desc: string
  metaphor: string
  color: string
  icon: typeof Shield
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
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">{full}</div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
        <div className="mt-2 rounded-md bg-blue-50/60 px-2 py-1 text-[10px] font-bold uppercase text-blue-700">
          Метафора: {metaphor}
        </div>
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
