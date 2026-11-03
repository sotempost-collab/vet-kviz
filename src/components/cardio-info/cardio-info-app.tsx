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
  Hand,
  Search,
  Sparkles,
  ScrollText,
  ListChecks,
  Compass,
  CheckCircle,
  HelpCircle,
  PenTool,
  Bone,
  Repeat,
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

            {/* ПОЛНАЯ ВЕРСИЯ ЭКСКУРСИИ — шаг за шагом через все 4 камеры */}
            <div className="overflow-hidden rounded-2xl border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    Полная экскурсия по сердцу — маршрут эритроцита
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-blue-50/90">
                  Дюйм за дюймом пройди путь капли крови. Каждый «Тук!» — это закрытый
                  клапан. После прохождения ты больше никогда не запутаешься в кругах
                  кровообращения.
                </p>
              </div>
              <div className="space-y-2 p-4">
                <StepCard
                  step="1"
                  title="Вход в правое предсердие (через полые вены)"
                  body="Ты — эритроцит, уставший, тёмно-вишнёвый. Возвращаешься из тела через кавальные вены. Попадаешь в правое предсердие: стенки тонкие, как шёлковый мешок, в нём много места — чтобы принять ВСЮ венозную кровь разом."
                  color="from-slate-500 to-slate-700"
                />
                <StepCard
                  step="2"
                  title="Через трёхстворчатый клапан в правый желудочек"
                  body="Предсердие сжимается — открываются три створки трёхстворчатого клапана. Ты проваливаешься в правый желудочек. Стенки здесь уже толще — им предстоит вытолкнуть кровь в лёгкие."
                  sound="Тук! → S1 закрывается трёхстворчатый"
                  color="from-cyan-500 to-sky-600"
                />
                <StepCard
                  step="3"
                  title="Через лёгочный клапан в лёгочную артерию"
                  body="Правый желудочек резко сокращается — лёгочный клапан открывается, и ты вылетаешь в лёгочную артерию. Мчишься в лёгкие — отдаёшь CO₂, забираешь O₂. Цвет меняется: из тёмно-вишнёвого ты становишься ярко-алым."
                  sound="Тук! → S2 закрывается лёгочный"
                  color="from-teal-500 to-emerald-600"
                />
                <StepCard
                  step="4"
                  title="Возврат в левое предсердие (через лёгочные вены)"
                  body="Свежий, насыщенный кислородом, ты возвращаешься по лёгочным венам в левое предсердие. Стенки снова тонкие — это просто «приёмная», куда кровь собирается перед главным ударом."
                  color="from-rose-500 to-red-600"
                />
                <StepCard
                  step="5"
                  title="Через митральный клапан в левый желудочек"
                  body="Левое предсердие сжимается — митральный клапан открывается (две створки, как митра епископа). Ты падаешь в левый желудочек. Стенки здесь — как крепостная стена, самые толстые во всём сердце: им предстоит вытолкнуть кровь ВО ВСЁ ТЕЛО."
                  sound="Тук! → S1 закрывается митральный"
                  color="from-rose-600 to-orange-600"
                />
                <StepCard
                  step="6"
                  title="Через аортальный клапан в аорту"
                  body="Левый желудочек сокращается со всей силы — аортальный клапан открывается, и ты вылетаешь в аорту под огромным давлением. Это самый мощный толчок во всём маршруте — ты полетишь ко всем органам тела."
                  sound="Тук! → S2 закрывается аортальный"
                  color="from-amber-500 to-orange-600"
                />
                <StepCard
                  step="7"
                  title="К органам — и обратно"
                  body="Ты мчишься по аорте, разносишь кислород по мышцам, мозгу, почкам, печени. Отдаёшь O₂, забираешь CO₂. Снова становишься тёмно-вишнёвым и уставшим. По полым венам возвращаешься в правое предсердие."
                  color="from-violet-500 to-purple-600"
                />
                <StepCard
                  step="✓"
                  title="Круг замкнулся!"
                  body="Ты прошёл оба круга кровообращения — малый (через лёгкие) и большой (через тело) — за одну секунду. И так миллионы раз за жизнь пациента. Запомни этот маршрут телом — и любая схема кровообращения будет у тебя перед глазами."
                  color="from-emerald-500 to-teal-600"
                  isFinal
                />
              </div>
            </div>

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

        {/* ============= РАЗДЕЛ 4.1: КИНЕСТЕТИКА — ПОЧУВСТВУЙ КЛАПАНЫ ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader number="4.1" title="«ПОЧУВСТВУЙ КЛАПАНЫ»" subtitle="Кинестетический якорь — клапан = кулак" icon={Hand} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Чтобы <strong className="text-blue-700">тело запомнило</strong> клапаны навсегда,
              сделай простое движение. Клапан — это дверь. Открылась — кровь прошла. Закрылась —
              кровь осталась в той камере, где должна. Когда закрывается — слышен «Тук!».
            </p>

            <InfoBox color="amber" title="Упражнение — кулак-клапан">
              <ol className="ml-4 list-decimal space-y-1.5">
                <li><strong className="uppercase text-blue-700">Сожми кулак</strong> — это закрытый клапан. Кровь снаружи стоять не может.</li>
                <li><strong className="text-blue-700">Разожми кулак</strong> на команду «систола» — это открытие клапана, кровь пошла дальше.</li>
                <li><strong className="text-blue-700">Снова сожми резко</strong> на команду «диастола» — клапан закрылся, слышен «Тук!»</li>
                <li>Повтори 5–6 раз подряд: «закрыт — открыт — закрыт — открыт». Внутри закрепится ощущение клапана как двери.</li>
              </ol>
            </InfoBox>

            <FormulaBox title="Якорь клапана" formula="Клапан = дверь. Закрылся → «Тук!» (S1 или S2)" accent="blue" />

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Каждый клапан — это дверь с одной задачей:</strong>{' '}
              пустить кровь только в одну сторону. Если дверь сломана — кровь течёт назад.
              Это и есть порок. Запомни движение «сжал-разжал» — и каждый шум будет
              понятен твоему телу, а не только голове.
            </KeyPhrase>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4.2: КИНЕСТЕТИКА — СТАНЬ КАРДИОМИОЦИТОМ ============= */}
        <SectionWrapper delay={0.35}>
          <SectionHeader number="4.2" title="«СТАНЬ КАРДИОМИОЦИТОМ»" subtitle="Якорь сокращения + ЭКГ в теле" icon={Activity} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Кардиомиоцит — это мышечная клетка сердца. Она умеет одно: сокращаться и
              расслабляться. Проживи секунду жизни этой клетки — и ритм сердца станет
              твоим собственным.
            </p>

            <InfoBox color="blue" title="Упражнение «Я — кардиомиоцит»">
              <ol className="ml-4 list-decimal space-y-1.5">
                <li><strong className="uppercase text-blue-700">Встань прямо</strong>, ноги на ширине плеч, руки вдоль тела.</li>
                <li>На сигнал «<strong className="text-blue-700">СИСТОЛА!</strong>» — резко напряги <strong className="text-blue-700">все мышцы тела</strong> разом: ноги, руки, пресс, спину. Замирание в напряжении 2 секунды.</li>
                <li>На сигнал «<strong className="text-blue-700">ДИАСТОЛА!</strong>» — полностью расслабься, обмякни, выдохни.</li>
                <li>Повтори 5 раз: «напрягся — расслабился — напрягся — расслабился». Это и есть сердце.</li>
              </ol>
            </InfoBox>

            <InfoBox color="amber" title="Примени к пациенту — наложи на ЭКГ">
              <p className="leading-relaxed">
                Теперь, когда тело знает, что такое систола и диастола, привяжи это к ЭКГ:
              </p>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                <li><strong className="text-blue-700">P-волна</strong> → напряглись предсердия (предсердные кардиомиоциты).</li>
                <li><strong className="text-blue-700">QRS-комплекс</strong> → напряглись желудочки (вот этот удар ты только что сделал!).</li>
                <li><strong className="text-blue-700">T-волна</strong> → все расслабились (диастола).</li>
              </ul>
            </InfoBox>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Кардиомиоцит не «думает» — он либо сжат, либо расслаблен. Систола — это
              напряжение всех мышц тела сразу. Диастола — полное обмякание. Когда ты
              делаешь это сам, ЭКГ перестаёт быть картинкой — она становится твоим
              собственным движением. P — напряглись предсердия, QRS — ударили желудочки,
              T — все расслабились.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4.3: «СБОРКА СЕРДЦА» — ФИНАЛЬНОЕ УПРАЖНЕНИЕ ============= */}
        <SectionWrapper delay={0.4}>
          <SectionHeader number="4.3" title="«СБОРКА СЕРДЦА»" subtitle="Финальное упражнение модуля — нарисуй и собери" icon={PenTool} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Чтобы закрепить всю анатомию разом, возьми лист бумаги и нарисуй сердце
              по памяти. Без подсказок, без интернета. Только ты, карандаш и то, что
              осталось в голове. Проверь по чек-листу — если что-то пропустил, дорисуй.
            </p>

            <div className="overflow-hidden rounded-2xl border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <PenTool className="h-5 w-5 text-blue-700" />
                <h4 className="text-sm font-black uppercase tracking-wide text-blue-700">
                  Что должно быть на рисунке
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-blue-900 sm:text-base">
                <li className="flex gap-2">
                  <span className="text-blue-700">▢</span>
                  <span><strong className="uppercase text-blue-700">4 камеры:</strong> правое/левое предсердия, правый/левый желудочки</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-700">▢</span>
                  <span><strong className="uppercase text-blue-700">4 клапана:</strong> трёхстворчатый, лёгочный, митральный, аортальный — каждый на своём месте</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-700">▢</span>
                  <span><strong className="uppercase text-blue-700">PMI-точки:</strong> слева 3 (лёгочный), 4 (аортальный), 5 (митральный), справа 4 (трикуспидальный)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-700">▢</span>
                  <span><strong className="uppercase text-blue-700">Слои стенки:</strong> эндокард, миокард, эпикард, перикард</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-700">▢</span>
                  <span><strong className="uppercase text-blue-700">Проводящая система:</strong> SA → AV → пучок Гиса → волокна Пуркинье</span>
                </li>
              </ul>
            </div>

            <InfoBox color="rose" title="Чек-лист для самопроверки">
              <ul className="ml-4 list-disc space-y-1 text-sm">
                <li><strong className="uppercase text-blue-700">Сердце нарисовано слева</strong> — ✓ (3–6 межреберье)</li>
                <li><strong className="uppercase text-blue-700">Левый желудочек толще правого</strong> — ✓ (он качает во всё тело)</li>
                <li><strong className="uppercase text-blue-700">У кошки аорта может быть справа</strong> — ✓ (40% случаев)</li>
                <li><strong className="uppercase text-blue-700">Предсердия сверху, желудочки снизу</strong> — ✓ (кровь течёт сверху вниз)</li>
                <li><strong className="uppercase text-blue-700">Полулунные клапаны на выходе из желудочков</strong> — ✓ (аорта и лёгочная артерия)</li>
              </ul>
            </InfoBox>

            <Callout variant="info" emoji="🎭" title="Мини-заключение">
              Рисунок — это экзамен. Если ты можешь нарисовать сердце со всеми камерами,
              клапанами, точками и проводящей системой по памяти — значит, анатомия
              действительно твоя. Если что-то забыл — это сигнал, что нужно вернуться и
              повторить именно этот кусок. Не подглядывай, дорисуй сам.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4.4: ЯКОРЯ МОДУЛЯ 1 ============= */}
        <SectionWrapper delay={0.45}>
          <SectionHeader number="4.4" title="ЯКОРЯ — МОДУЛЬ 1" subtitle="Сводная шпаргалка по анатомии" icon={Sparkles} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Все ключевые якоря первого модуля в одной таблице. Это «выжимка», которую
              стоит повторить перед практикой и держать в голове всегда.
            </p>

            <TableGrid
              title="Таблица — якоря по анатомии сердца"
              icon={Sparkles}
              headers={['Вопрос', 'Якорь-ответ']}
              rows={[
                ['Где живёт сердце?', '3-4-5-6 — сердце здесь! (3–6 межреберье слева)'],
                ['Где митральный клапан?', 'Митра — слева, 5-е ребро'],
                ['Почему ЛЖ толще ПЖ?', 'Левый — для всего тела, правый — только для лёгких'],
                ['Что генерирует импульс?', 'СА — Сердце Активируется! (SA-узел)'],
                ['Различие кошки?', 'Кошка — спортсмен, сердце стоит и бьётся быстро'],
                ['Слои стенки?', 'Обои-Стены-Фасад-Забор (эндо-мио-эпи-перикард)'],
                ['Проводящая система?', 'SA → AV → Гис → Пуркинье (рубильник → щит → провода → лампочки)'],
                ['Маршрут крови?', 'Предсердие → клапан → желудочек → клапан → артерия'],
              ]}
            />

            {/* НАПУТСТВИЕ */}
            <div className="overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <ScrollText className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    Напутствие — выпускной первого модуля
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
                  <strong className="uppercase text-amber-700">Коллеги,</strong> вы только
                  что совершили путешествие внутрь сердца. Вы прошли путь капли крови
                  от правого предсердия до аорты и обратно. Вы узнали точный адрес
                  сердца — «3-4-5-6», узнали, где живёт каждый клапан, поняли, почему
                  левый желудочек толще правого, и увидели электрику, которая заставляет
                  этот насос биться. Теперь в вашей голове есть не просто «схема
                  сердца» — в вашем теле есть ощущения каждого удара.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-blue-900 sm:text-base">
                  Запомните главное: <strong className="text-blue-700">сердце — это
                  квартира с точным адресом, своей электрикой и своей сантехникой.</strong>{' '}
                  Дальше — патологии. И каждая патология — это поломка конкретной части
                  квартиры. Кто-то ломает клапан, кто-то — стену, кто-то — электрику.
                  Но чтобы понять, что сломано, нужно знать, как было целым. Вы знаете.
                  Двигаемся дальше.
                </p>
              </div>
            </div>

            {/* ДОМАШНЕЕ ЗАДАНИЕ */}
            <div className="overflow-hidden rounded-2xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <ListChecks className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    Домашнее задание
                  </span>
                </div>
              </div>
              <div className="p-4">
                <ol className="ml-4 list-decimal space-y-2 text-sm text-blue-900 sm:text-base">
                  <li>
                    <strong className="uppercase text-emerald-700">Найди PMI на себе.</strong>{' '}
                    Положи пальцы на левую сторону грудной клетки между 3 и 6 ребром. Найди
                    верхушечный толчок — это митральный клапан. Запомни ощущение.
                  </li>
                  <li>
                    <strong className="uppercase text-emerald-700">Нарисуй схему кровообращения.</strong>{' '}
                    Большой и малый круг, все 4 камеры и 4 клапана, стрелками покажи
                    направление крови. Без подсказок.
                  </li>
                  <li>
                    <strong className="uppercase text-emerald-700">Объясни сердце питомцу.</strong>{' '}
                    Расскажи кошке или собаке вслух, как кровь проходит через сердце.
                    Если питомец «понял» — значит, и ты понял.
                  </li>
                </ol>
              </div>
            </div>
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

            {/* СИНХРОНИЗАЦИОННОЕ УПРАЖНЕНИЕ — Pacing and Leading */}
            <div className="overflow-hidden rounded-2xl border-2 border-violet-400 bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Repeat className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    Синхронизация — Pacing &amp; Leading
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-violet-50/90">
                  Настрой тело на ритм сердца — и сложные механизмы начнут укладываться
                  в голову сами. Это техника «ведь за ритмом».
                </p>
              </div>
              <div className="p-4">
                <ol className="ml-4 list-decimal space-y-2 text-sm text-blue-900 sm:text-base">
                  <li>
                    <strong className="uppercase text-violet-700">Положи два пальца</strong>{' '}
                    (указательный и средний) на лучевую артерию — у основания большого
                    пальца противоположной руки. Почувствуй ритм своего пульса.
                  </li>
                  <li>
                    <strong className="uppercase text-violet-700">Подстрой дыхание под пульс:</strong>{' '}
                    на 3 удара — глубокий вдох, на 4 удара — полный выдох. Дыши «в такт»
                    своему сердцу 30 секунд.
                  </li>
                  <li>
                    <strong className="uppercase text-violet-700">Произнеси про себя:</strong>{' '}
                    «Мой мозг легко усваивает сложные механизмы. Каждое сокращение сердца
                    становится для меня понятным и естественным».
                  </li>
                  <li>
                    <strong className="uppercase text-violet-700">Повтори 3 раза.</strong>{' '}
                    Когда тело и дыхание синхронизированы с ритмом — информация «впитывается»
                    в разы быстрее.
                  </li>
                </ol>
              </div>
            </div>

            {/* ТАНЕЦ КЛАПАНОВ — детальная визуализация */}
            <div className="overflow-hidden rounded-2xl border-2 border-rose-400 bg-gradient-to-br from-rose-50 to-pink-50 shadow-lg">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    «Танец клапанов» — детальная визуализация
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-rose-50/90">
                  Закрой глаза и представь каждый момент цикла как фильм. Звук «Khlop!» —
                  это и есть «Ля» или «Дуб».
                </p>
              </div>
              <div className="space-y-3 p-4">
                <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-cyan-700">
                    1. ДИАСТОЛА — «Мягкие губки»
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    Все четыре камеры — как <strong className="text-blue-700">мягкие губки</strong>,
                    расслабленные, расширенные. Митральный и трёхстворчатый клапаны
                    <strong className="text-blue-700"> широко открыты</strong>. Кровь спокойно
                    «стекает» из предсердий в желудочки под действием гравитации. Тихо. Никакого
                    звука. Это «вдох» сердца.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-rose-200 bg-rose-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-rose-700">
                    2. СИСТОЛА — «Мощный удар»
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    Мышца резко и мощно <strong className="text-blue-700">сжимает губку</strong>.
                    Давление в желудочке подскакивает мгновенно. Митральный и трёхстворчатый
                    клапаны захлопываются.
                  </p>
                  <div className="mt-1.5 rounded bg-amber-200 px-2 py-0.5 text-[11px] font-black uppercase text-amber-900">
                    🔊 ЗВУК: «Khlop!» → S1 «Ля»
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-blue-900 sm:text-sm">
                    Кровь мчится вверх, открывает аортальный и лёгочный клапаны, вылетает в
                    аорту и лёгочную артерию. Желудочки пустеют.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-violet-200 bg-violet-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-violet-700">
                    3. РАССЛАБЛЕНИЕ — «Спад давления»
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    Желудочки расслабляются. Давление в них падает ниже давления в аорте и
                    лёгочной артерии. Кровь пытается вернуться назад — но аортальный и
                    лёгочный клапаны захлопываются.
                  </p>
                  <div className="mt-1.5 rounded bg-amber-200 px-2 py-0.5 text-[11px] font-black uppercase text-amber-900">
                    🔊 ЗВУК: «Khlop!» → S2 «Дуб»
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-blue-900 sm:text-sm">
                    Снова тишина. Диастола возвращается. Митральный и трёхстворчатый снова
                    открыты. Кровь снова течёт вниз. Цикл повторяется. «Ля-Дуб. Ля-Дуб.»
                  </p>
                </div>
              </div>
            </div>

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

            {/* ЭКГ В ТЕЛЕ — кинестетический якорь */}
            <div className="overflow-hidden rounded-2xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    «ЭКГ в теле» — кинестетический якорь
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-emerald-50/90">
                  Сделай ЭКГ своим движением — и P, QRS, T перестанут быть буквами на бумаге.
                </p>
              </div>
              <div className="space-y-3 p-4">
                <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-emerald-700">
                    Шаг 1 → P-волна (предсердия сокращаются)
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    <strong className="uppercase text-emerald-700">Подними руки вверх</strong> и
                    <strong className="text-blue-700"> медленно, плавно сожми ладони вместе</strong>{' '}
                    перед грудью. Это сокращение предсердий — мягкое, ритмичное, как волна.
                    Представь, как импульс рождается в SA-узле и пробегает по предсердиям.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-amber-200 bg-amber-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-amber-700">
                    Шаг 2 → PR-интервал (пауза в AV-узле)
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    <strong className="uppercase text-amber-700">Замри на мгновение</strong>{' '}
                    ладони вместе. Это задержка 0.1 секунды в AV-узле — «дайте предсердиям
                    доиграть». Пауза перед кульминацией.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-rose-200 bg-rose-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-rose-700">
                    Шаг 3 → QRS-комплекс (желудочки сокращаются)
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    <strong className="uppercase text-rose-700">Резко, мощно разведи руки
                    в стороны!</strong> Это выброс — сокращение желудочков. Импульс пролетел
                    по пучку Гиса и волокнам Пуркинье, и желудочки ударили разом, снизу вверх.
                  </p>
                </div>

                <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-cyan-700">
                    Шаг 4 → T-волна (расслабление желудочков)
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    <strong className="uppercase text-cyan-700">Расслабь руки, опусти вниз.</strong>{' '}
                    Это реполяризация — желудочки восстанавливаются перед следующим ударом.
                    Тишина перед новым циклом.
                  </p>
                </div>
              </div>
            </div>

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

            {/* ПРОГУЛКА ПО СОСУДАМ — полная интеграция */}
            <div className="overflow-hidden rounded-2xl border-2 border-cyan-400 bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
              <div className="bg-gradient-to-r from-cyan-500 to-sky-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    «Прогулка по сосудам» — полная интеграция
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-cyan-50/90">
                  Читай медленно, ярко представляя каждый образ. Это финальная сшивка
                  всей гемодинамики в одно ощущение.
                </p>
              </div>
              <div className="p-4">
                <p className="text-sm italic leading-relaxed text-blue-900 sm:text-base">
                  «Вы — капля крови, богатая кислородом. Вы только что вылетели из{' '}
                  <strong className="not-italic text-blue-700">левого желудочка собаки</strong>{' '}
                  через <strong className="not-italic text-blue-700">аортальный клапан</strong>.
                  Вы чувствуете мощный толчок{' '}
                  <em className="not-italic text-rose-700">(высокая сократимость)</em>. Вы мчитесь
                  по широкой аорте, но вдруг сосуды сужаются из-за стресса{' '}
                  <em className="not-italic text-violet-700">(высокая постнагрузка)</em>. Сердцу
                  пришлось напрячься сильнее. Вы доставляете кислород в мышцы, становитесь
                  тёмно-вишнёвой и уставшей. Вы возвращаетесь по венам к{' '}
                  <strong className="not-italic text-blue-700">правому предсердию</strong>. Вас
                  много, стенки предсердия приятно растягиваются{' '}
                  <em className="not-italic text-cyan-700">(высокая преднагрузка)</em>. Вы
                  проваливаетесь через открытый митральный клапан в тихий, расслабленный
                  желудочек. Пауза... И снова мощный удар.{' '}
                  <strong className="not-italic text-blue-700">Ля-Дуб.</strong> Вы снова в пути.»
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
                  <div className="rounded-md border border-cyan-200 bg-cyan-50/60 px-2 py-1.5">
                    <span className="text-[10px] font-bold uppercase text-cyan-700">Преднагрузка</span>
                    <div className="text-blue-900">Стенки приятно растянулись</div>
                  </div>
                  <div className="rounded-md border border-rose-200 bg-rose-50/60 px-2 py-1.5">
                    <span className="text-[10px] font-bold uppercase text-rose-700">Сократимость</span>
                    <div className="text-blue-900">Мощный толчок из ЛЖ</div>
                  </div>
                  <div className="rounded-md border border-violet-200 bg-violet-50/60 px-2 py-1.5">
                    <span className="text-[10px] font-bold uppercase text-violet-700">Постнагрузка</span>
                    <div className="text-blue-900">Сосуды сузились — сердцу тяжелее</div>
                  </div>
                </div>
              </div>
            </div>

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

        {/* ============= РАЗДЕЛ 9.1: ШПАРГАЛКА В ТЕЛЕ — ЯКОРЯ МОДУЛЯ 2 ============= */}
        <SectionWrapper delay={0.35}>
          <SectionHeader number="9.1" title="ШПАРГАЛКА В ТЕЛЕ" subtitle="Якоря модуля 2 — физиология через движение" icon={Sparkles} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Вся физиология — в одном теле. Сделай движение → вспомни понятие. Эта таблица
              связывает каждое абстрактное слово с конкретным жестом. Используй её на экзамене
              и в клинической практике.
            </p>

            <TableGrid
              title="Таблица — якоря по физиологии (шпаргалка в теле)"
              icon={Sparkles}
              headers={['Понятие', 'Движение-якорь', 'Смысл']}
              rows={[
                ['Систола / Диастола', 'Сжать кулак («Ля») / Разжать («Дуб»)', 'Сокращение / Расслабление'],
                ['Преднагрузка', 'Растянуть резинку', 'Объём крови, входящей в сердце'],
                ['Сократимость', 'Резко напрячь бицепс', 'Сила удара, «педаль газа»'],
                ['Постнагрузка', 'Давить рукой на кулак', 'Сопротивление сосудов'],
                ['РААС', 'Хлопок + «Включился сантехник!»', 'Задержка жидкости и спазм'],
              ]}
            />

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Запомни:</strong>{' '}
              на экзамене или у пациента, когда забыл термин — сделай движение, привязанное к
              этому понятию. Тело вспомнит быстрее, чем голова. Это и есть настоящая
              интеграция знаний.
            </KeyPhrase>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Физиология — это не термины, это движения. Сжал кулак → систола. Растянул резинку
              → преднагрузка. Напряг бицепс → сократимость. Надавил на кулак → постнагрузка.
              Хлопнул → РААС. Когда тело знает, голова не нужна.
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

            {/* РЕЖИМ ДЕТЕКТИВА — кинестетический якорь */}
            <div className="overflow-hidden rounded-2xl border-2 border-slate-400 bg-gradient-to-br from-slate-50 to-zinc-100 shadow-lg">
              <div className="bg-gradient-to-r from-slate-700 to-zinc-800 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    «Режим детектива» — якорь диагноза
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-100/90">
                  Каждый клинический случай — это головоломка. Создай «якорь детектива» — и
                  диагноз будет приходить сам, как озарение.
                </p>
              </div>
              <div className="p-4">
                <ol className="ml-4 list-decimal space-y-2 text-sm text-blue-900 sm:text-base">
                  <li>
                    <strong className="uppercase text-slate-700">Сядь удобно</strong>, спина
                    прямая, ступни на полу. Закрой глаза.
                  </li>
                  <li>
                    <strong className="uppercase text-slate-700">Сделай 3 глубоких вдоха
                    и выдоха</strong>. С каждым выдохом — всё больше расслабляйся.
                  </li>
                  <li>
                    <strong className="uppercase text-slate-700">Вспомни момент, когда ты
                    решил сложную головоломку</strong> — почувствуй то удовлетворение, то «Ага!».
                  </li>
                  <li>
                    <strong className="uppercase text-slate-700">Усиль это чувство</strong>{' '}
                    — пусть оно станет ярче, насыщеннее, заполни всё тело.
                  </li>
                  <li>
                    На пике удовольствия <strong className="text-blue-700">сожми вместе
                    подушечки указательного и среднего пальцев</strong> той руки, которой
                    обычно пишешь. Это и есть твой «якорь детектива».
                  </li>
                  <li>
                    <strong className="uppercase text-slate-700">Повтори 3 раза.</strong>{' '}
                    Теперь каждый раз перед сложным клиническим случаем — сожми пальцы, и
                    мозг автоматически перейдёт в режим «я могу это решить».
                  </li>
                </ol>
              </div>
            </div>

            {/* ПОЧУВСТВУЙ ПОРОК — кинестетика врождённых дефектов */}
            <div className="overflow-hidden rounded-2xl border-2 border-violet-400 bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Hand className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    «Почувствуй порок» — кинестетика врождённых дефектов
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-violet-50/90">
                  Проживи каждый порок движением рук — и его характер навсегда закрепится
                  в мышечной памяти.
                </p>
              </div>
              <div className="space-y-3 p-4">
                <div className="rounded-xl border-2 border-rose-200 bg-rose-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-rose-700">
                    PDA — «Машинный шум»
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    <strong className="uppercase text-rose-700">Непрерывно три ладонь о
                    ладонь</strong> — как работающая машина. Шум не прекращается ни в систолу,
                    ни в диастолу, потому что кровь течёт из аорты в лёгочную артерию постоянно
                    (давление в аорте всегда выше).
                  </p>
                </div>
                <div className="rounded-xl border-2 border-amber-200 bg-amber-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-amber-700">
                    SAS — «Узкая дверь» (субаортальный стеноз)
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    <strong className="uppercase text-amber-700">Сожми один кулак</strong> —
                    это левый желудочек. Другой рукой сделай кольцо и проталкивай кулак
                    сквозь него с сопротивлением. Чувствуешь, как тяжело кулаку «пробиться»?
                    Это и есть SAS — узкое кольцо под аортальным клапаном.
                  </p>
                </div>
                <div className="rounded-xl border-2 border-violet-200 bg-violet-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-violet-700">
                    PS — «Засор в трубе» (стеноз лёгочной артерии)
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    <strong className="uppercase text-violet-700">То же самое, но для правого
                    кулака</strong> — это правый желудочек, который не может протолкнуть кровь
                    через суженную лёгочную артерию. Правая половина «тужится».
                  </p>
                </div>
                <div className="rounded-xl border-2 border-slate-200 bg-slate-50/70 p-3">
                  <div className="mb-1 text-xs font-black uppercase text-slate-700">
                    Дисплазия клапанов — «Течь назад»
                  </div>
                  <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                    <strong className="uppercase text-slate-700">Сложи ладони лодочкой</strong>{' '}
                    и слегка раздвинь пальцы. Вода «утекает» назад через щели. Так и кровь
                    при дисплазии — створки malformed, не смыкаются герметично, кровь течёт
                    назад в предсердие.
                  </p>
                </div>
              </div>
            </div>

            <Callout variant="info" emoji="🤪" title="Мини-заключение">
              Врождённые пороки — это заводской брак: где-то труба не закрылась (PDA), где-то
              сузилась (SAS, PS), где-то клапан кривой (дисплазия). Каждый шумит по-своему и в
              своём месте. Знай адреса и характер — узнаешь порок ещё до ЭхоКГ. А движение рук
              поможет вспомнить характер шума, когда голова забудет.
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

              {/* Расширенные стадии MMVD — A, B1, B2, C, D */}
              <div className="mt-3 overflow-hidden rounded-xl border-2 border-rose-200 bg-white/80">
                <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-3 py-2 text-white">
                  <div className="text-[10px] font-black uppercase tracking-wider">
                    Стадии MMVD (ACVIM) — детально
                  </div>
                </div>
                <div className="space-y-2 p-3">
                  <div className="flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50/60 p-2">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-black text-white shadow">A</div>
                    <div className="flex-1 text-xs leading-snug text-blue-900">
                      <strong className="uppercase text-emerald-700">Группа риска.</strong>{' '}
                      Породистая мелкая собака (кавалер, той-пудель), возраст 4–5 лет, но шума
                      и симптомов ещё нет. Сердце здорово, но генетика — против нас. Регулярный
                      аускультативный контроль раз в год.
                    </div>
                  </div>
                  <div className="flex gap-2 rounded-lg border border-amber-200 bg-amber-50/60 p-2">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 text-xs font-black text-white shadow">B1</div>
                    <div className="flex-1 text-xs leading-snug text-blue-900">
                      <strong className="uppercase text-amber-700">Шум есть — сердце справляется.</strong>{' '}
                      Громкий систолический шум слева 5 м/р, но на ЭхоКГ ремоделирования НЕТ.
                      Левое предсердие нормального размера. Лечения пока не требуется — только
                      наблюдение раз в 6–12 месяцев.
                    </div>
                  </div>
                  <div className="flex gap-2 rounded-lg border border-orange-200 bg-orange-50/60 p-2">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 text-xs font-black text-white shadow">B2</div>
                    <div className="flex-1 text-xs leading-snug text-blue-900">
                      <strong className="uppercase text-orange-700">Бессимптомно, НО с ремоделированием.</strong>{' '}
                      Шум + сердце уже увеличивается. Левое предсердие и желудочек дилатированы.
                      Симптомов ещё нет, но <strong className="text-rose-700">это ВРЕМЯ НАЧИНАТЬ ЛЕЧЕНИЕ</strong>{' '}
                      (пимобендан) — отсрочивает сердечную недостаточность на 15+ месяцев.
                    </div>
                  </div>
                  <div className="flex gap-2 rounded-lg border border-rose-300 bg-rose-50/60 p-2">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 text-xs font-black text-white shadow">C</div>
                    <div className="flex-1 text-xs leading-snug text-blue-900">
                      <strong className="uppercase text-rose-700">Сердечная недостаточность.</strong>{' '}
                      Кашель, одышка, возможен отёк лёгких. Сердце уже не справляется. Лечение:
                      фуросемид + пимобендан + АПФ-ингибитор. Экстренно при отёке.
                    </div>
                  </div>
                  <div className="flex gap-2 rounded-lg border border-slate-300 bg-slate-100/60 p-2">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-zinc-800 text-xs font-black text-white shadow">D</div>
                    <div className="flex-1 text-xs leading-snug text-blue-900">
                      <strong className="uppercase text-slate-700">Рефрактерная СН.</strong>{' '}
                      Стандартные дозы препаратов больше не помогают. Требуются высокие дозы
                      диуретиков, комбинации. Прогноз осторожный.
                    </div>
                  </div>
                </div>
              </div>

              {/* Список пород MMVD */}
              <div className="mt-3 rounded-xl border-2 border-rose-200 bg-white/80 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <Bone className="h-4 w-4 text-rose-700" />
                  <div className="text-[10px] font-black uppercase tracking-wide text-rose-700">Породы группы риска MMVD</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Кавалер-кинг-чарльз (50% к 5 годам!)', 'Такса', 'Той-пудель', 'Йоркширский терьер', 'Шпиц', 'Чихуахуа'].map((b) => (
                    <span key={b} className="rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-800">{b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ПОЧУВСТВУЙ РЕГУРГИТАЦИЮ — кинестетическое упражнение */}
            <div className="overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Hand className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-wider">
                    «Почувствуй регургитацию» — что происходит в MMVD
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-amber-50/90">
                  Это упражнение — ключ к пониманию ВСЕХ приобретённых пороков клапанов.
                  Регургитация = обратный ток крови. Почувствуй это телом.
                </p>
              </div>
              <div className="p-4">
                <ol className="ml-4 list-decimal space-y-2 text-sm text-blue-900 sm:text-base">
                  <li>
                    <strong className="uppercase text-amber-700">Сожми правый кулак</strong> —
                    это левый желудочек, готовый к мощному удару.
                  </li>
                  <li>
                    <strong className="uppercase text-amber-700">Левой рукой обхвати запястье
                    правой</strong> — это митральный клапан, который должен удержать кровь в
                    желудочке во время систолы.
                  </li>
                  <li>
                    <strong className="uppercase text-amber-700">Резко сожми правый кулак</strong>{' '}
                    изо всех сил — почувствуй, как давление идёт В ОБРАТНУЮ сторону, в левую
                    руку. Кровь «убегает» обратно в левое предсердие, потому что клапан
                    неплотно закрыт.
                  </li>
                  <li>
                    Это и есть <strong className="text-rose-700">регургитация</strong> —
                    обратный ток крови. Чем сильнее «течь назад» — тем громче шум и тем
                    больше страдает предсердие (растягивается, давит на бронхи → кашель).
                  </li>
                </ol>
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

              {/* Список пород ДКМП */}
              <div className="mt-3 rounded-xl border-2 border-slate-200 bg-white/80 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <Bone className="h-4 w-4 text-slate-700" />
                  <div className="text-[10px] font-black uppercase tracking-wide text-slate-700">Породы группы риска ДКМП</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Доберман (особенно!)', 'Немецкий дог', 'Ирландский волкодав', 'Ньюфаундленд', 'Боксёр', 'Кокер-спаниель'].map((b) => (
                    <span key={b} className="rounded-md bg-slate-200 px-2 py-0.5 text-[11px] font-bold text-slate-800">{b}</span>
                  ))}
                </div>
              </div>
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

              {/* Список пород ГКМП */}
              <div className="mt-3 rounded-xl border-2 border-violet-200 bg-white/80 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <Bone className="h-4 w-4 text-violet-700" />
                  <div className="text-[10px] font-black uppercase tracking-wide text-violet-700">Породы группы риска ГКМП</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Мейн-кун (мутация MyBPC3)', 'Рэгдолл', 'Британская короткошёрстная', 'Персидская', 'Сфинкс', '...но чаще — беспородные кошки!'].map((b) => (
                    <span key={b} className="rounded-md bg-violet-100 px-2 py-0.5 text-[11px] font-bold text-violet-800">{b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* РКМП — рестриктивная кардиомиопатия */}
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
                  <Flame className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase text-amber-700">РКМП — рестриктивная кардиомиопатия</div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-amber-700/70">«Сердце в тисках»</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                <strong className="text-blue-700">Стенки нормальные или слегка утолщены</strong>,
                но из-за фиброза миокард становится жёстким, как будто сердце зажато в тиски.
                Желудочек не может растянуться и наполниться кровью. По симптомам похожа на ГКМП,
                но на ЭхоКГ стенка НЕ толстая — диагноз сложный. Часто сопровождается фибрилляцией
                предсердий.
              </p>
            </div>

            {/* ДКМП у кошек */}
            <div className="rounded-2xl border-2 border-slate-300 bg-slate-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 text-white shadow-md">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-black uppercase text-slate-700">ДКМП у кошек</div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-slate-700/70">«Редкий гость»</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">
                <strong className="text-blue-700">Раньше главная причина — дефицит таурина</strong>{' '}
                в коммерческих кормах. Сейчас, после добавления таурина в корма, встречается
                редко. <strong className="text-rose-700">Если видишь ДКМП у кошки — обязательно
                проверь диету и уровень таурина в крови!</strong> В отличие от собак, у кошек
                ДКМП часто вторична (кормовая, токсическая, после вирусного миокардита).
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
                ['Кардиомиопатии', 'ДКМП (дилат.)', 'ГКМП + РКМП + редко ДКМП'],
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

        {/* ============= РАЗДЕЛ 14: КЛИНИЧЕСКИЕ СЛУЧАИ ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader number="14" title="КЛИНИЧЕСКИЕ СЛУЧАИ" subtitle="Детективная практика — три истории" icon={Search} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Три классических случая, которые обязан узнать каждый ветеринар. Активируй свой
              «якорь детектива» — сожми подушечки указательного и среднего пальцев — и
              попробуй сначала поставить диагноз сам. Ответы спрятаны под спойлером, чтобы
              можно было проверить себя.
            </p>

            {/* Кейс 1 — Cavalier с MMVD */}
            <CaseCard
              number="1"
              signalment="10-летний кавалер-кинг-чарльз-спаниель, кобель"
              complaint="Кашель по ночам, особенно под утро. Одышка при небольшой нагрузке. Снижение аппетита."
              findings="Аускультация: громкий голосистолический шум IV° слева в 5-м межреберье. Рентген: левое предсердие значительно увеличено, давит на главный бронх. На ЭхоКГ — утолщение митрального клапана, регургитация."
              questions={[
                'Какой диагноз наиболее вероятен?',
                'На какой стадии MMVD находится пациент?',
                'Какое лечение назначить?',
              ]}
              answers={[
                'Хроническая болезнь митрального клапана (MMVD) — типичная картина для кавалера 10 лет.',
                'Стадия C — есть симптомы сердечной недостаточности (кашель, одышка) + увеличено левое предсердие.',
                'Фуросемид (снять отёк) + пимобендан (инотроп) + АПФ-ингибитор (блок РААС). Контроль через 7–14 дней.',
              ]}
              tagColor="rose"
            />

            {/* Кейс 2 — Cat with FATE */}
            <CaseCard
              number="2"
              signalment="5-летняя беспородная кошка, indoors only"
              complaint="Внезапно закричала, не может стоять на задних лапах. Сидит, прижав задние лапы к телу."
              findings="Задние лапы холодные как лёд, подушечки бледные. Пульс на бедренной артерии не определяется. На аускультации — ритм галопа (S3). На ЭхоКГ — тромб в левом предсердии, на рентгене — увеличенное левое предсердие."
              questions={[
                'Что это за синдром?',
                'Все ли «5 P» присутствуют?',
                'Какой прогноз?',
              ]}
              answers={[
                'FATE — тромбоэмболия бифуркации аорты у кошки с кардиомиопатией.',
                'Все 5 P налицо: Pain (кошка кричит), Paralysis (паралич задних лап), Pallor (бледные подушечки), Pulselessness (нет пульса), Poikilothermia (холодные лапы).',
                'Осторожный до плохого. Даже при агрессивном лечении выживаемость 30–50%. Часть кошек рецидивирует. Обсудить с владельцем эвтаназию как опцию.',
              ]}
              tagColor="violet"
            />

            {/* Кейс 3 — Irish Wolfhound with DCM */}
            <CaseCard
              number="3"
              signalment="6-летний ирландский волкодав, кобель"
              complaint="Слабость после нагрузки, два эпизода синкопе за последний месяц. Иногда тяжело дышит."
              findings="Аускультация: шума НЕТ, тоны приглушены, ритм галопа. Рентген: глобальная кардиомегалия (все камеры увеличены). ЭхоКГ: все камеры дилатированы, фракция укорочения FS=12% (норма >25%)."
              questions={[
                'Какой диагноз?',
                'Почему нет шума?',
                'Какое лечение назначить?',
              ]}
              answers={[
                'ДКМП (дилатационная кардиомиопатия) — типично для крупной породы (ирландский волкодав), сниженная сократимость (FS=12%).',
                'Потому что проблема не в клапанах, а в миокарде. Стенки растянуты и тонки, но клапаны анатомически нормальные. Шум может появиться вторично из-за растяжения кольца.',
                'Пимобендан (главный препарат при ДКМП) + фуросемид при застое + АПФ-ингибитор + спиронолактон. Внимательный мониторинг аритмий (холтер).',
              ]}
              tagColor="slate"
            />

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Запомни паттерны:</strong>{' '}
              мелкая старая собака + кашель + громкий шум = MMVD. Внезапный паралич задних лап у
              кошки = FATE. Крупная собака + слабость + нет шума + глобальное сердце = ДКМП.
              Три случая — три разных подхода.
            </KeyPhrase>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 14.1: ЯКОРЯ МОДУЛЯ 4 (ПАТОЛОГИЯ) ============= */}
        <SectionWrapper delay={0.35}>
          <SectionHeader number="14.1" title="ЯКОРЯ — ПАТОЛОГИЯ" subtitle="Сводная шпаргалка по всем болезням" icon={Sparkles} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Все главные патологии в одной таблице. Один взгляд — и ты помнишь, кто где шумит
              и какая метафора к какой болезни относится.
            </p>

            <TableGrid
              title="Таблица — якоря по патологиям сердца"
              icon={Sparkles}
              headers={['Болезнь', 'Метафора', 'Клинический ключ']}
              rows={[
                ['PDA', 'Машинный шум', 'Непрерывный жужжащий шум слева 3 м/р'],
                ['SAS', 'Узкая дверь', 'Грубый систолический + слабый пульс на бедре'],
                ['MMVD', 'Протекающий кран', 'Старая мелкая собака + громкий шум + кашель'],
                ['ДКМП', 'Уставший великан', 'Крупная порода + огромное сердце + слабая сократимость'],
                ['ГКМП', 'Жёсткая губка', 'Кошка + толстая стенка + шум не обязателен'],
                ['FATE', '5 P', 'Внезапный паралич задних лап + холодные подушечки'],
                ['Дирофиляриоз', 'Черви в сердце', 'Кашель + лёгочная гипертензия + тест+'],
                ['Тампонада', 'Сердце в мешке', 'Приглушённые тоны + глобус на рентгене + шок'],
              ]}
            />

            <Callout variant="info" emoji="🎭" title="Мини-заключение">
              Патологии сердца — это «поломки квартиры». Каждая ломает свою часть: клапан, стенку,
              электрику, перикард. Зная адрес и характер «поломки» — ставишь диагноз до ЭхоКГ.
              А запомнив метафоры — никогда не перепутаешь MMVD с ДКМП или ГКМП с FATE.
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

/* ============= STEP CARD (шаги экскурсии по сердцу) ============= */
function StepCard({
  step,
  title,
  body,
  sound,
  color,
  isFinal,
}: {
  step: string
  title: string
  body: string
  sound?: string
  color: string
  isFinal?: boolean
}) {
  return (
    <div className={`overflow-hidden rounded-xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[10px] bg-white p-3">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-9 min-w-[2.25rem] flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color} px-1.5 text-sm font-black text-white shadow`}
          >
            {step}
          </div>
          <div className="flex-1">
            <div className={`text-xs font-black uppercase tracking-tight sm:text-sm ${
              isFinal ? 'text-emerald-700' : 'text-blue-900'
            }`}>
              {title}
            </div>
            <div className="mt-0.5 text-[11px] leading-relaxed text-blue-900/85 sm:text-xs">
              {body}
            </div>
            {sound && (
              <div className="mt-1.5 inline-block rounded bg-amber-200 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-amber-900">
                🔊 {sound}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============= CASE CARD (клинические случаи) ============= */
function CaseCard({
  number,
  signalment,
  complaint,
  findings,
  questions,
  answers,
  tagColor,
}: {
  number: string
  signalment: string
  complaint: string
  findings: string
  questions: string[]
  answers: string[]
  tagColor: 'rose' | 'violet' | 'slate'
}) {
  const colorMap: Record<string, { border: string; bg: string; tag: string; text: string }> = {
    rose: {
      border: 'border-rose-400',
      bg: 'from-rose-50 to-pink-50',
      tag: 'from-rose-500 to-pink-600',
      text: 'text-rose-700',
    },
    violet: {
      border: 'border-violet-400',
      bg: 'from-violet-50 to-purple-50',
      tag: 'from-violet-500 to-purple-600',
      text: 'text-violet-700',
    },
    slate: {
      border: 'border-slate-400',
      bg: 'from-slate-50 to-zinc-50',
      tag: 'from-slate-600 to-zinc-800',
      text: 'text-slate-700',
    },
  }
  const c = colorMap[tagColor]
  return (
    <div className={`overflow-hidden rounded-2xl border-2 ${c.border} bg-gradient-to-br ${c.bg} shadow-lg`}>
      <div className={`flex items-center gap-3 bg-gradient-to-r ${c.tag} px-4 py-3 text-white`}>
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
          <Search className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">
            Клинический случай
          </div>
          <div className="text-sm font-black uppercase tracking-tight sm:text-base">
            Кейс №{number}
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4">
        {/* Сигнальмент */}
        <div className="rounded-lg border border-blue-100 bg-white/70 p-2.5">
          <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700/70">
            Пациент
          </div>
          <div className="text-xs leading-snug font-bold text-blue-900 sm:text-sm">
            {signalment}
          </div>
        </div>

        {/* Жалобы */}
        <div className="rounded-lg border border-amber-100 bg-amber-50/70 p-2.5">
          <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">
            Жалобы
          </div>
          <div className="text-xs leading-snug text-blue-900 sm:text-sm">{complaint}</div>
        </div>

        {/* Находки */}
        <div className="rounded-lg border border-violet-100 bg-violet-50/70 p-2.5">
          <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-violet-700">
            Клинические находки
          </div>
          <div className="text-xs leading-snug text-blue-900 sm:text-sm">{findings}</div>
        </div>

        {/* Вопросы и ответы (collapsible) */}
        <details className="group rounded-lg border-2 border-dashed border-blue-300 bg-white/70 p-2.5">
          <summary className="flex cursor-pointer items-center justify-between gap-2 text-xs font-black uppercase tracking-wide text-blue-700 sm:text-sm">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              Вопросы — попробуй ответить сам
            </span>
            <span className="text-[10px] text-blue-700/60 group-open:hidden">▶ раскрыть</span>
            <span className="hidden text-[10px] text-blue-700/60 group-open:inline">▼ скрыть</span>
          </summary>
          <div className="mt-3 space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="rounded-md border border-blue-100 bg-blue-50/40 p-2.5">
                <div className="flex gap-2 text-xs font-bold text-blue-900 sm:text-sm">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-black text-white">
                    {i + 1}
                  </span>
                  <span className="leading-snug">{q}</span>
                </div>
                <div className="mt-1.5 flex gap-2 rounded-md bg-emerald-50/80 p-2 text-xs leading-snug text-blue-900 sm:text-sm">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span className="leading-snug">
                    <strong className="uppercase text-emerald-700">Ответ: </strong>
                    {answers[i]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </details>
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
