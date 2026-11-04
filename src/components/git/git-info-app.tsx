'use client'

import { motion } from 'framer-motion'
import {
  Utensils,
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
  Eye,
  Droplets,
  FlaskConical,
  GitBranch,
  Wind,
} from 'lucide-react'

export default function GitInfoApp({ onNavigateToQuiz }: { onNavigateToQuiz?: () => void }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-4xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* ============= HERO ============= */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-amber-300 bg-white/95 shadow-2xl shadow-amber-500/20 backdrop-blur"
        >
          <div className="relative bg-gradient-to-br from-amber-600 via-orange-500 to-rose-500 px-6 py-10 text-white sm:px-10 sm:py-14">
            <div className="absolute right-6 top-6 opacity-25">
              <Utensils className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <Microscope className="h-3.5 w-3.5" /> Гайд для будущего ветеринара
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                ЖКТ
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-amber-50 sm:text-lg">
                «Умная биохимическая фабрика»: ЖКТ, рвота, печень и селезёнка, аппетит и жажда,
                поджелудочная железа. От гистологии 4-слойной стенки до клинического осмотра
                и итоговой карты видовых отличий собаки и кошки.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 border-t-2 border-amber-200 p-5 sm:grid-cols-3 sm:p-6">
            <FormulaChip label="4 слоя стенки" value="Слизистая • Подслизистая • Мышечная • Серозная" icon={GitBranch} />
            <FormulaChip label="Собака vs Кошка" value="J-образный / кислотная ванна pH 1–2" icon={Activity} />
            <FormulaChip label="50 вопросов" value="8 подтем • клинический протокол" icon={Brain} />
          </div>
        </motion.section>

        {/* ============= ОБЩАЯ КАРТИНА: SVG-СХЕМА ============= */}
        <SectionWrapper delay={0.05}>
          <SectionHeader number="0" title="ОБЩАЯ КАРТИНА ЖКТ" subtitle="Схема «умной трубы» и паренхиматозных органов" icon={Utensils} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <GitTractSVG />
            <p className="text-sm leading-relaxed text-amber-900 sm:text-base">
              <strong className="text-amber-700">ЖКТ</strong> — это непрерывная мышечная трубка
              от рта до ануса, плюс два «химических реактора» — <strong className="text-amber-700">печень</strong> и
              <strong className="text-amber-700"> поджелудочная железа</strong>. Стенка любого полого
              органа ЖКТ имеет <strong className="text-amber-700">универсальный 4-слойный план</strong> строения.
              Брюшная полость (<em>Cavum abdominis</em>) — выстланное брюшиной пространство, в котором
              лежат органы пищеварения, мочевыделения, репродукции, селезёнка, крупные сосуды и нервы.
            </p>
            <Callout variant="info" emoji="🎯" title="Главная метафора">
              ЖКТ — это <strong className="uppercase text-amber-700">«Умная биохимическая фабрика»</strong>,
              а брюшная полость — «цех упаковки». Мы лечим не симптом (рвоту или диарею),
              мы восстанавливаем нарушенную физиологию.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ТЕМА 1: ЖКТ ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader number="1" title="ЖКТ: АНАТОМИЯ И ФИЗИОЛОГИЯ" subtitle="4 слоя стенки, видовые отличия, моторика, секреция, всасывание" icon={GitBranch} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            {/* А. Гистологическое строение стенки ЖКТ (4 слоя) */}
            <h3 className="pt-1 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              А. Стенка ЖКТ — универсальный «слоёный пирог»
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <LayerCard
                num="1"
                name="Слизистая (Tunica mucosa)"
                role="Рабочая поверхность контакта"
                details={[
                  'Эпителий: многослойный плоский ( пищевод) или однослойный цилиндрический (желудок, кишка)',
                  'Lamina propria: сосуды + GALT (первая линия обороны)',
                  'Lamina muscularis mucosae: местная подвижность слизистой',
                ]}
                color="from-rose-500 to-pink-600"
              />
              <LayerCard
                num="2"
                name="Подслизистая (Tela submucosa)"
                role="Логистический центр"
                details={[
                  'Плотная соединительная ткань с крупными сосудами',
                  'Мейснерово нервное сплетение: секреция и местный кровоток',
                ]}
                color="from-amber-500 to-orange-600"
              />
              <LayerCard
                num="3"
                name="Мышечная (Tunica muscularis)"
                role="Двигатель"
                details={[
                  'Внутренний циркулярный слой (сужает просвет)',
                  'Наружный продольный (укорачивает трубку)',
                  'Ауэрбахово сплетение: моторика',
                  '+ 3-й косой слой в желудке (для рвоты)',
                ]}
                color="from-violet-500 to-purple-600"
              />
              <LayerCard
                num="4"
                name="Серозная (Tunica serosa)"
                role="Скользкая упаковка"
                details={[
                  'Висцеральный листок брюшины',
                  'Мезотелий + соединительная ткань',
                  'Обеспечивает скольжение органов',
                ]}
                color="from-sky-500 to-cyan-600"
              />
            </div>

            {/* Б. Видовые анатомические особенности */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Б. Видовые отличия: «Гурман vs Хищник»
            </h3>
            <div className="overflow-hidden rounded-2xl border-2 border-amber-200">
              <div className="bg-gradient-to-r from-amber-600 to-rose-500 px-4 py-2 text-white">
                <div className="flex items-center gap-2">
                  <Microscope className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Собака vs Кошка — анатомия ЖКТ</span>
                </div>
              </div>
              <div className="divide-y divide-amber-100 bg-white">
                <AnatomyRow structure="Желудок" dog="Относительно объёмный, J-образный. Стратегия «наелся и забыл». pH 1.5–3.5" cat="Меньше, но pH 1–2 (кислотная ванна для мяса и костей, бактерицидная защита)" />
                <AnatomyRow structure="Тонкий кишечник" dog="Длиннее относительно тела" cat="Короче. Логика: мясо переваривается быстро, гнить не должно" />
                <AnatomyRow structure="Слепая кишка" dog="Хорошо развита, форма завитка (бродильный чан)" cat="Маленькая, прямая, рудиментарная" />
                <AnatomyRow structure="Ободочная кишка" dog="С гаустрами (кармашки для задержки воды)" cat="Без выраженных гаустр — гладкая трубка" />
                <AnatomyRow structure="Печень" dog="Стандартная структура" cat="Липидоз! Не умеет быстро экспортировать жир при голоде" />
                <AnatomyRow structure="Селезёнка" dog="Мощный резервуар крови (турбо-режим при стрессе)" cat="Слабая резервная функция. Любое увеличение — патология" />
                <AnatomyRow structure="Поджелудочная" dog="Риск панкреатита от жирной еды" cat="Более устойчива, но риск диабета выше" />
              </div>
            </div>

            {/* В. Топография желудка */}
            <InfoBox color="blue" title="Топография желудка собаки">
              Лежит в <strong className="uppercase text-amber-700">левом подреберье</strong>. Имеет
              <strong> кардию</strong> (вход), <strong>фундус</strong> (резервуар), <strong>тело</strong> и
              <strong> пилорус</strong> (выход с мощным сфинктером-дозатором).
            </InfoBox>

            {/* Г. Клетки желудка */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              В. Клетки желудка собаки (pH 1.5–3.5)
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <CellTypeCard
                name="Париетальные (обкладочные)"
                shape="HCl + фактор Касла"
                role="Соляная кислота (денатурация белков, активация пепсина, бактерицидно). Внутренний фактор — для всасывания B12."
                color="from-rose-500 to-red-600"
              />
              <CellTypeCard
                name="Главные клетки"
                shape="Пепсиноген"
                role="Секретируют пепсиноген → превращается в пепсин (режет белки)."
                color="from-amber-500 to-orange-600"
              />
              <CellTypeCard
                name="Мукоциты"
                shape="Слизь"
                role="Слизь — броня от кислоты. Защищает стенку желудка от самопереваривания."
                color="from-sky-500 to-cyan-600"
              />
            </div>

            {/* Физиология: 4 столпа */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Г. Физиология ЖКТ — 4 столпа жизни
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PillarCard emoji="🔄" name="Моторика" points={[
                'Перистальтика — волны вперёд (от рта к анусу)',
                'Сегментация — перемешивание без продвижения',
                'ММК — мигрирующий комплекс в голоде: «уборка», защита от СИБР',
              ]} color="from-violet-500 to-purple-600" />
              <PillarCard emoji="🧪" name="Секреция и пищеварение" points={[
                'ПЖ: ферменты в виде зимогенов (защита от аутолиза)',
                'Печень/желчь: эмульгируют жиры. Ферментов в желчи НЕТ!',
                'Активация ПЖ-ферментов — только в 12-перстной кишке (энтерокиназа)',
              ]} color="from-amber-500 to-orange-600" />
              <PillarCard emoji="🛃" name="Всасывание (абсорбция)" points={[
                'Глюкоза: SGLT1 с натрием (нет Na — нет сахара)',
                'Жиры: в хиломикроны → в лимфу (минуя печень)',
                'B12: с фактором Касла в подвздошной кишке',
                'Вода: пассивно за натрием (осмос)',
              ]} color="from-emerald-500 to-teal-600" />
              <PillarCard emoji="🛡️" name="Барьер и микробиом" points={[
                'Tight junctions — «цемент» между клетками',
                '«Дырявый кишечник» → транслокация бактерий → сепсис',
                'Микробиом: бутират (еда для колоноцитов) + витамины',
              ]} color="from-rose-500 to-pink-600" />
            </div>

            {/* Карта кишечника */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Д. Карта кишечника — «водопроводная система»
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DepartmentCard
                emoji="🌀"
                title="Тонкий кишечник (всасывание)"
                subtitle="3 отдела"
                structures={[
                  'Двенадцатиперстная (Duodenum) — впадают протоки ПЖ и желчного',
                  'Тощая (Jejunum) — главная зона всасывания, петли в центре',
                  'Подвздошная (Ileum) — илеоцекальный клапан + B12',
                ]}
                fn="Зона всасывания питательных веществ"
                color="from-emerald-500 to-teal-600"
              />
              <DepartmentCard
                emoji="🚽"
                title="Толстый кишечник (формирование отходов)"
                subtitle="3 отдела"
                structures={[
                  'Слепая (Caecum) — завиток у собак, рудимент у кошек',
                  'Ободочная (Colon) — восходящая/поперечная/нисходящая. Гаустры у собак',
                  'Прямая (Rectum) — накопление кала',
                ]}
                fn="Всасывание воды и электролитов, формирование кала"
                color="from-amber-500 to-orange-600"
              />
            </div>

            <InfoBox color="amber" title="Топографические ориентиры">
              <strong>Слева:</strong> желудок, селезёнка, нисходящая ободочная.{' '}
              <strong>Справа:</strong> печень, восходящая ободочная.{' '}
              <strong>Центр:</strong> петли тонкого кишечника.{' '}
              <strong>Таз:</strong> мочевой пузырь, прямая кишка.
            </InfoBox>

            {/* Патофизиология ЖКТ */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Е. Патофизиология — когда система ломается
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PathologyCard emoji="🔇" title="Паралитический илеус" causes={['Двигатель сломался (перитонит, гипокалиемия)', 'Тишина в животе при аускультации']} color="from-indigo-500 to-blue-700" />
              <PathologyCard emoji="🚧" title="Механическая непроходимость" causes={['Инородное тело', 'Инвагинация («кишка в кишке»)', 'Заворот']} color="from-rose-500 to-red-600" />
              <PathologyCard emoji="❌" title="Мальдигестия" causes={['Не могу расщепить', 'Нет ферментов или желчи']} color="from-amber-500 to-yellow-600" />
              <PathologyCard emoji="🚫" title="Мальабсорбция" causes={['Не могу всосать', 'Повреждена слизистая, ВЗК, лимфома']} color="from-violet-500 to-purple-600" />
            </div>

            {/* Клинический осмотр брюшной полости */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Ж. Клинический осмотр брюшной полости — детектив
            </h3>
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-700">
                <Stethoscope className="h-4 w-4" /> Алгоритм: Осмотр → Пальпация → Перкуссия → Аускультация
              </div>
              <div className="grid grid-cols-1 gap-2 text-sm text-amber-900 sm:grid-cols-2">
                <div><strong className="text-amber-700">Грушевидный живот:</strong> асцит (жидкость)</div>
                <div><strong className="text-amber-700">Вздутый барабан:</strong> газ (тимпания)</div>
                <div><strong className="text-amber-700">Доскообразный живот:</strong> перитонит (защитное напряжение)</div>
                <div><strong className="text-amber-700">Собака: редкое бульканье — норма</strong></div>
                <div><strong className="text-amber-700">Кошка: почти тишина — норма!</strong></div>
                <div><strong className="text-amber-700">Громкое бурление:</strong> гастроэнтерит</div>
                <div><strong className="text-amber-700">Гробовая тишина (собака):</strong> паралич или перитонит — ОПАСНО</div>
                <div><strong className="text-amber-700">Барабанный звук:</strong> газ</div>
                <div><strong className="text-amber-700">Глухой звук:</strong> жидкость или плотный орган</div>
              </div>
            </div>

            <Callout variant="info" emoji="😂" title="Про кошек и тишину">
              Если вы слушаете живот кошки стетоскопом и ничего не слышите — не паникуйте.
              Кошки мастера маскировки, даже их кишки работают тихо. А вот если молчит собака — бейте тревогу.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ТЕМА 2: РВОТА ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader number="2" title="РВОТА: АВАРИЙНЫЙ КЛАПАН" subtitle="От рефлекса к диагнозу — рвота vs регургитация" icon={AlertTriangle} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <KeyPhrase>
              <strong className="uppercase text-amber-700">Рвота — это не «грязная проблема», это аварийный клапан высокого давления.</strong>{' '}
              Сложный инженерный процесс, управляемый мозгом. Главное — не перепутать с тихой утечкой
              из пищевода (регургитацией).
            </KeyPhrase>

            {/* Рвота vs Регургитация vs Отхаркивание */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <ComparisonCard emoji="🤮" title="Рвота (Emesis)" pattern="Активный, ЦНС-контролируемый" details={['Есть фаза тошноты', 'Работают мышцы пресса', 'Диафрагма напряжена', 'Выброс под давлением']} color="from-rose-500 to-red-600" />
              <ComparisonCard emoji="🥱" title="Регургитация" pattern="Пассивное вытекание" details={['Нет тошноты', 'Нет напряжения мышц', 'Сразу после еды', 'Форма «колбаски»']} color="from-amber-500 to-orange-600" />
              <ComparisonCard emoji="😷" title="Отхаркивание" pattern="Кашель + мокрота" details={['Проблема в лёгких', 'Не в желудке']} color="from-sky-500 to-cyan-600" />
            </div>

            <Callout variant="warning" emoji="⚠️" title="Клинический маркер">
              Если владелец говорит «его вырвало» — спросите: <strong>«Была ли тошнота? Напрягался ли живот?»</strong>.
              Если нет — это регургитация, и искать надо в пищеводе, а не в желуде!
            </Callout>

            {/* Анатомия: желудок и мозг */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Анатомия: мышечная машина и два центра мозга
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DepartmentCard
                emoji="💪"
                title="Желудок — уникальная мышечная машина"
                subtitle="3 слоя мышц"
                structures={[
                  'Косой слой (только в желудке!) — создаёт давление для выжимания при рвоте',
                  'Кардиальный сфинктер: слабее человеческого (собаки/кошки могут рвать), сильнее лошадиного (лошади рвать не могут)',
                  'Пилорический сфинктер: при рвоте расслабляется → путь назад',
                ]}
                fn="Хроническая рвота → кислота обжигает пищевод → эзофагит"
                color="from-rose-500 to-red-600"
              />
              <DepartmentCard
                emoji="🧠"
                title="Мозг — два центра управления"
                subtitle="Продолговатый мозг"
                structures={[
                  'Рвотный центр (VC) — «дирижёр»: команды мышцам (дышать, тужиться, открывать сфинктеры)',
                  'CTZ (area postrema) — «лаборант-аналитик»',
                  'Гистологический секрет: НЕТ гематоэнцефалического барьера, капилляры фенестрированные',
                  'CTZ напрямую «нюхает» кровь на токсины (мочевина, кетоны, лекарства)',
                ]}
                fn="CTZ кричит VC: «СОС! ТОКСИНЫ!»"
                color="from-violet-500 to-purple-600"
              />
            </div>

            {/* 3 фазы рвоты */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Физиология: 3 фазы аварийного сброса
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <PhaseCard num="1" name="Тошнота (Nausea)" subtitle="Предстартовая подготовка" details={[
                'Включается парасимпатика (блуждающий нерв)',
                'Гиперсаливация: смыть кислоту с зубов, смягчить проход',
                'Тахикардия и бледность: кровь уходит от кожи',
                'Потливость подушечек лап у собак (вегетативная буря)',
              ]} color="from-amber-500 to-yellow-600" />
              <PhaseCard num="2" name="Рвотные движения (Retching)" subtitle="Нагнетание давления" details={[
                'Голосовая щель закрывается (защита дыхания)',
                'Диафрагма резко опускается и фиксируется',
                'Пресс сильно сокращается',
                'В груди — вакуум, в животе — гипердавление',
                'Желудок сдавливается как тюбик пасты',
              ]} color="from-orange-500 to-rose-600" />
              <PhaseCard num="3" name="Экспульсия (Expulsion)" subtitle="Выстрел" details={[
                'Голосовая щель открывается',
                'Мощный выброс масс наружу',
                'Видовой нюанс: кошки эволюционно запрограммированы на рвоту (шерсть/трихобезоары)',
                'Кошки легко реагируют на ксилазин; собаки устойчивее',
              ]} color="from-rose-600 to-red-700" />
            </div>

            {/* Патофизиология — каскад разрушений */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Патофизиология: почему рвота убивает?
            </h3>
            <FormulaBox title="Метаболическая катастрофа (потеря HCl)" formula="Кровь щелочная → метаболический алкалоз" accent="rose" />

            <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/40 p-4">
              <div className="mb-2 text-xs font-bold uppercase tracking-wide text-rose-700">
                🔗 Каскад разрушений при обильной желудочной рвоте
              </div>
              <ol className="space-y-1 text-sm text-rose-900">
                <li><strong>1.</strong> Теряем HCl → кровь становится щелочной (метаболический алкалоз)</li>
                <li><strong>2.</strong> Теряем воду → обезвоживание → почки пытаются спасти натрий (Na+)</li>
                <li><strong>3.</strong> <strong className="text-rose-700">Парадоксальная ацидурия:</strong> чтобы вернуть Na+ в кровь, почки выбрасывают в мочу K+ и H+</li>
                <li><strong>4.</strong> Итог: кровь щелочная, моча кислая! + тяжёлая гипокалиемия → паралитический илеус</li>
              </ol>
              <div className="mt-2 border-t border-rose-200 pt-2 text-xs text-rose-700">
                <strong>Если рвота желчью (из кишечника):</strong> теряются бикарбонаты → будет ацидоз (закисление).
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PathologyCard emoji="🩸" title="Синдром Мэллори-Вейсса" causes={['Резкий скачок давления рвёт слизистую', 'На границе пищевода и желудка', 'Алая кровь']} color="from-rose-500 to-red-600" />
              <PathologyCard emoji="🫁" title="Аспирационная пневмония" causes={['Рвотные массы в лёгкие', 'Кислота сжигает альвеолы', 'Бактерии добивают', 'Смертельно опасно!']} color="from-violet-500 to-purple-600" />
            </div>

            <Callout variant="warning" emoji="🚨" title="Железное правило">
              <strong className="uppercase text-amber-700">Никогда не давайте противорвотное, пока не исключили непроходимость!</strong>{' '}
              Иначе порвёте кишку.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ТЕМА 3: ПЕЧЕНЬ И СЕЛЕЗЁНКА ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader number="3" title="ПЕЧЕНЬ И СЕЛЕЗЁНКА" subtitle="Химическая лаборатория и кровавый резервуар" icon={FlaskConical} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-amber-900 sm:text-base">
              <strong className="text-amber-700">Печень</strong> — главный химический завод организма, работает 24/7.
              <strong className="text-amber-700"> Селезёнка</strong> — умный склад крови и военная база иммунитета.
            </p>

            {/* А. Печень */}
            <h3 className="pt-1 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              А. Печень (Hepar) — «гексагональный улей»
            </h3>
            <InfoBox color="blue" title="Анатомия печени">
              Расположена преимущественно справа (правое подреберье). <strong>6–7 долей:</strong> левая
              (латеральная/медиальная), правая (латеральная/медиальная), квадратная, хвостатая.
              <strong className="uppercase text-amber-700"> Желчный пузырь</strong> прячется между квадратной
              и правой медиальной долями. У кошек — длинный и худой, у собак — округлый.
            </InfoBox>

            <DepartmentCard
              emoji="🔬"
              title="Гистология печёночной дольки"
              subtitle="Гексагональная «сота»"
              structures={[
                'Центр: центральная вена (отток готовой продукции)',
                'Углы — портальная триада: ветвь воротной вены + ветвь печёночной артерии + желчный проток',
                'Стены: тяжи гепатоцитов (рабочие клетки)',
                'Коридоры: синусоиды — «дырявые» капилляры, контакт крови с гепатоцитами',
                'Охрана: Купферовские клетки (макрофаги) ловят токсины и старые эритроциты',
                'Пространство Диссе: зазор между кровью и клеткой печени — обмен веществ',
              ]}
              fn="Портальная триада — входные ворота дольки"
              color="from-amber-500 to-orange-600"
            />

            {/* 4 цеха печени */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              4 цеха печени
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <WorkshopCard emoji="🏭" name="Метаболический" points={[
                'Строит белки (альбумин, факторы свёртывания)',
                'Регулирует сахар (гликоген из глюкозы и обратно)',
                'Перерабатывает жиры',
              ]} color="from-amber-500 to-orange-600" />
              <WorkshopCard emoji="☠️" name="Детоксикация" points={[
                'Аммиак → мочевина (цикл Кребса-Хензелейта)',
                'Обезвреживает лекарства (система P450)',
              ]} color="from-violet-500 to-purple-600" />
              <WorkshopCard emoji="💛" name="Экскреторный (желчь)" points={[
                'Производит желчь для эмульгации жиров',
                'Без желчи жир не усвоится',
              ]} color="from-yellow-500 to-amber-600" />
              <WorkshopCard emoji="📦" name="Склад (депонирование)" points={[
                'Гликоген',
                'Витамины A, D, B12',
                'Железо (ферритин)',
              ]} color="from-sky-500 to-cyan-600" />
            </div>

            {/* Б. Селезёнка */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Б. Селезёнка (Splen) — «язычок с секретом»
            </h3>
            <DepartmentCard
              emoji="👅"
              title="Анатомия селезёнки"
              subtitle="Длинный язык вдоль желудка"
              structures={[
                'Прикреплена к желудку связкой, хвост достает до левой почки',
                'Капсула содержит мышцы! Может сокращаться и выжимать кровь, как губку',
                'Красная пульпа: синусоиды и тяжи Бильрота — фильтр крови',
                'Белая пульпа: лимфоидные муфты вокруг артерий (PALS) — Т- и В-лимфоциты',
              ]}
              fn="У собак — мощный резервуар крови (турбо-режим). У кошек — слабо."
              color="from-rose-500 to-red-600"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PillarCard emoji="🩸" name="4 функции селезёнки" points={[
                'Фильтрация: удаляет старые эритроциты и тромбоциты',
                'Иммунитет: белая пульпа — антитела',
                'Резервуар крови (особенно у собак!): стресс → капсула сокращается → гематокрит растёт',
                'Запасной завод крови (гемопоэз) при сломанном костном мозге',
              ]} color="from-rose-500 to-red-600" />
              <PillarCard emoji="🐱" name="Кошачья особенность" points={[
                'Резервуарная функция развита слабо',
                'Любое увеличение селезёнки — патология!',
                'У собак большая селезёнка может быть нормой (стресс)',
              ]} color="from-amber-500 to-orange-600" />
            </div>

            {/* Патологии печени */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              В. Патологии печени
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <DiseaseCard emoji="🧈" name="Липидоз (стеатоз)" mechanism="Кошка не ест >2 дней → жир аварийно сбрасывается в печень → гепатоциты лопаются от жира" morphology="Макровакуолярный стеатоз. Печень бледно-жёлтая, дряблая" color="from-amber-500 to-yellow-600" />
              <DiseaseCard emoji="🔀" name="Портосистемный шунт (PSS)" mechanism="Кровь из кишечника идёт мимо печени → аммиак бьёт по мозгу → энцефалопатия" morphology="Микрогепатия (печень маленькая, без питания)" color="from-violet-500 to-purple-600" />
              <DiseaseCard emoji="🪨" name="Цирроз" mechanism="Хроническое воспаление → мёртвые клетки замещаются рубцом (фиброз)" morphology="Печень маленькая, твёрдая, бугристая, как камень. Портальная гипертензия → асцит" color="from-slate-500 to-gray-700" />
            </div>

            {/* Патологии селезёнки */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Г. Патологии селезёнки
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DiseaseCard emoji="🎈" name="Спленомегалия" mechanism="Диффузная (вся большая): ХСН, сепсис, лимфома. Узловая: гематома, гемангиосаркома" morphology="Опасно разрывом и внутренним кровотечением!" color="from-rose-500 to-red-600" />
              <DiseaseCard emoji="🌀" name="Заворот селезёнки" mechanism="Крупная собака крутанулась → селезёнка перекрутилась на связке. Артерии качают кровь внутрь, вены пережаты" morphology="Селезёнка надувается как шар, чёрно-багровая (некроз/инфаркт). Срочно удалять" color="from-violet-500 to-purple-600" />
            </div>

            <Callout variant="info" emoji="🐱" title="Кошачья ловушка — липидоз">
              Печень кошки — капризная принцесса. Если кошка не ест {'>'}48 часов, жир из тела аварийно
              сбрасывается в печень. Печень кошек <strong className="uppercase text-amber-700">не умеет быстро
              упаковывать жир в транспортные белки</strong> (нет карнитина/аполипопротеинов). Итог: орган
              превращается в кусок сала за 48 часов. <strong>Голодная кошка — не худеющая кошка, это будущий
              пациент реанимации с липидозом!</strong>
            </Callout>

            <Callout variant="info" emoji="🐶" title="Собачья селезёнка — турбо-режим">
              Собачья селезёнка — встроенный турбо-режим. Когда собака видит белку/мяч/почтальона,
              симпатическая нервная система даёт команду: «Полный вперёд!». Капсула сокращается и
              выжимает в кровь запас эритроцитов. Поэтому у возбужденной собаки гематокрит всегда выше,
              чем у спящей. <strong>Не пугайтесь цифр — сначала успокойте пациента!</strong>
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ТЕМА 4: АППЕТИТ И ЖАЖДА ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader number="4" title="АППЕТИТ И ЖАЖДА" subtitle="Нейрофизиология, клиника, нутрициология" icon={Brain} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <KeyPhrase>
              <strong className="uppercase text-amber-700">Аппетит и жажда — это не «хочу есть/пить».</strong>{' '}
              Это точные цифровые сигналы от датчиков к центральному процессору (гипоталамусу).
            </KeyPhrase>

            {/* Разница понятий */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DepartmentCard
                emoji="🍖"
                title="Голод vs Аппетит"
                subtitle="Физиология vs Психофизиология"
                structures={[
                  'Голод: «Мне нужно топливо! Я умираю!» — физиология',
                  'Аппетит: «Хочу вот этот паштет, он вкусно пахнет» — психофизиология',
                ]}
                fn="Аппетит — субъективное желание пищи определённой консистенции/вкуса/запаха"
                color="from-amber-500 to-orange-600"
              />
              <DepartmentCard
                emoji="💧"
                title="Жажда"
                subtitle="Осознанное ощущение потребности в воде"
                structures={[
                  'Возникает при нарушении водно-солевого баланса',
                  'Повышение осмолярности плазмы',
                  'Снижение объёма циркулирующей крови',
                ]}
                fn="Стимулирует поисковое и питьевое поведение"
                color="from-cyan-500 to-blue-600"
              />
            </div>

            {/* Шкала состояний */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Шкала состояний — приставки как маркеры
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <ScaleRow prefix="Нормо-" name="Нормопексия / Нормодипсия" desc="Все системы работают штатно" color="emerald" />
              <ScaleRow prefix="Гипо-" name="Гипорексия" desc="Аппетит снижен, ест без энтузиазма" color="amber" />
              <ScaleRow prefix="А-" name="Анорексия (истинная / псевдо)" desc="Полный отказ. Истинная: мозг не посылает «голод». Псевдо: голод есть, но есть больно/тошнит/мешает" color="rose" />
              <ScaleRow prefix="Поли-" name="Полифагия / Полидипсия" desc="Жор / жажда. Собаки: >90–100 мл/кг/сут. Кошки: >45–50 мл/кг/сут" color="violet" />
            </div>

            {/* Центры гипоталамуса */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Анатомия: гипоталамус — диспетчерская вышка
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <HypothalamusCard emoji="📡" name="Дугообразное ядро" subtitle="Главный сенсор" details={[
                '🔴 Орексигенные: NPY + AgRP → «Ешь! Копи энергию!»',
                '🟢 Анорексигенные: POMC (→ α-MSH) + CART → «Стоп! Ты сыт!»',
              ]} color="from-amber-500 to-orange-600" />
              <HypothalamusCard emoji="⛽" name="Латеральное ядро" subtitle="Педаль газа" details={[
                'Классический «центр голода»',
                'Стимуляция электричеством → жадная еда даже сытым',
              ]} color="from-rose-500 to-red-600" />
              <HypothalamusCard emoji="🛑" name="Вентромедиальное ядро" subtitle="Педаль тормоза" details={[
                'Классический «центр насыщения»',
                'Разрушение (опухоль/травма) → неукротимая полифагия и ожирение',
              ]} color="from-emerald-500 to-teal-600" />
            </div>

            <InfoBox color="blue" title="Датчики жажды">
              <strong className="uppercase text-amber-700">Осморецепторы</strong> (передний гипоталамус):
              в зонах без ГЭБ, напрямую «ощупывают» кровь. При высокой осмолярности вода выходит из нейронов
              наружу — нейроны сморщиваются (как изюм) → сигнал «ПИТЬ!» + выброс АДГ.{' '}
              <strong className="uppercase text-amber-700">Барорецепторы</strong>: дуга аорты, каротидный синус,
              предсердия. Реагируют на объём крови: мало крови → жажда.
            </InfoBox>

            {/* Физиология аппетита */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Физиология: бухгалтерия энергии
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PillarCard emoji="⚡" name="Краткосрочные сигналы" points={[
                'СТОП: желудок растянулся → вагус в мозг. CCK и PYY от кишечника',
                'СТАРТ: пустой желудок → грелин → будит NPY-нейроны',
              ]} color="from-amber-500 to-orange-600" />
              <PillarCard emoji="📊" name="Долгосрочная регуляция" points={[
                'Лептин: от жировых клеток. Чем больше жира — тем больше лептина → мозг отключает голод',
                'Инсулин: также сигнал сытости для мозга',
                'У ожиревших — лептинорезистентность: мозг не слышит крика жира',
              ]} color="from-violet-500 to-purple-600" />
            </div>

            <InfoBox color="amber" title="Физиология жажды — 2 пути к воде">
              <strong>1. Осмотический (главный):</strong> повышение солей на 1–2% → осморецепторы сморщиваются
              → жажда + АДГ (вазопрессин) → почки возвращают воду, моча концентрированная.{' '}
              <strong>2. Гемодинамический (объёмный):</strong> при кровопотере/рвоте/диарее → падает объём крови →
              почки выделяют ренин → РААС → ангиотензин II бьёт по субфорникальному органу → дикая жажда,
              даже если соли в норме.
            </InfoBox>

            {/* Патофизиология */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Патофизиология: почему система сбоит
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <PathologyCard emoji="🛑" title="Анорексия/гипорексия" causes={[
                'Sickness behavior: цитокины (ФНО-α, ИЛ-1, ИЛ-6) выключают NPY',
                'Тошнота: токсины бьют по CTZ → блок центра голода',
                '⚠️ Кошачья ловушка: липидоз печени при голодовке >24-48 ч',
              ]} color="from-rose-500 to-red-600" />
              <PathologyCard emoji="🍽️" title="Полифагия (жор)" causes={[
                'Сахарный диабет: глюкоза в крови, но не в клетках',
                'Гипертиреоз (кошки): метаболизм разогнан',
                'Кушинг (собаки): кортизол разрушает белки',
                'Мальабсорбция / ЭНПЖ: еда проходит транзитом',
              ]} color="from-amber-500 to-orange-600" />
              <PathologyCard emoji="🚰" title="Полидипсия/полиурия" causes={[
                'Осмотический диурез (диабет): сахар в моче тянет воду',
                'ХБП: почки не могут концентрировать мочу',
                'Пиометра: токсины блокируют АДГ',
                'Психогенная полидипсия: скука/стресс у молодых собак',
              ]} color="from-cyan-500 to-blue-600" />
            </div>

            <Callout variant="warning" emoji="🚨" title="Маркеры опасности">
              <strong>Собаки:</strong> {'>'} 90–100 мл/кг/сут воды. <strong>Кошки:</strong> {'>'} 45–50 мл/кг/сут.
              Это не «хорошее питье», это крик о помощи почек или эндокринной системы!
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ТЕМА 5: ПОДЖЕЛУДОЧНАЯ ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader number="5" title="ПОДЖЕЛУДОЧНАЯ ЖЕЛЕЗА" subtitle="«Тихий убийца» или «гений пищеварения»" icon={FlaskConical} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <KeyPhrase>
              <strong className="uppercase text-amber-700">Поджелудочная — орган-хамелеон.</strong>{' '}
              Тихая работяга, которая может превратиться в бомбу замедленного действия. Сложный химический
              реактор с системой самоуничтожения.
            </KeyPhrase>

            {/* Анатомия и топография */}
            <h3 className="pt-1 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Анатомия: где она прячется?
            </h3>
            <InfoBox color="blue" title="Топография — «буква V, обнимает 12-перстную кишку»">
              У собак и кошек <strong className="uppercase text-amber-700">не имеет собственной капсулы</strong>{' '}
              (в отличие от печени/селезёнки), покрыта только тонким слоем соединительной ткани →
              уязвима для воспаления соседних органов. Лежит глубоко, «зажата» между желудком, кишечником
              и позвоночником → пропальпировать сложно, особенно у тучных. Боль при панкреатите —
              в эпигастрии («под ложечкой»).
            </InfoBox>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <DepartmentCard
                emoji="➡️"
                title="Правая доля"
                subtitle="Pars pancreatica dextra"
                structures={[
                  'В брыжейке 12-перстной (mesoduodenum)',
                  'Связана с печенью через малый сальник',
                  'Здесь часто скапливается гной при панкреатите → абсцессы',
                ]}
                fn=""
                color="from-amber-500 to-orange-600"
              />
              <DepartmentCard
                emoji="⬅️"
                title="Левая доля"
                subtitle="Pars pancreatica sinistra"
                structures={[
                  'Вдоль большой кривизны желудка',
                  'В брыжейке ободочной кишки (mesocolon)',
                  'Контактирует с селезёнкой и левой почкой',
                ]}
                fn=""
                color="from-rose-500 to-red-600"
              />
              <DepartmentCard
                emoji="🔗"
                title="Тело + протоки"
                subtitle="Corpus + ducts"
                structures={[
                  'Тело: соединяет доли, вентральнее аорты и CVC',
                  'Главный проток: с общим желчным, на большом сосочке 12-перстной',
                  'Добавочный проток: есть не у всех, выше главного',
                ]}
                fn=""
                color="from-violet-500 to-purple-600"
              />
            </div>

            {/* Гистология: 2 государства */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Гистология: два государства в одном органе
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DepartmentCard
                emoji="🏭"
                title="Экзокринная часть (98%)"
                subtitle="Фабрика ферментов"
                structures={[
                  'Ацинусы (гроздья винограда)',
                  'Клетки: ациноциты → пищеварительные ферменты',
                  'Протоки выводят секрет в 12-перстную кишку',
                  'Без неё пища не усвоится',
                ]}
                fn="Ацинусы = Активное пищеварение"
                color="from-amber-500 to-orange-600"
              />
              <DepartmentCard
                emoji="🏝️"
                title="Эндокринная часть (2%)"
                subtitle="Острова Лангерганса"
                structures={[
                  'Бета-клетки: инсулин (снижает сахар) — их больше всего',
                  'Альфа-клетки: глюкагон (повышает сахар)',
                  'Дельта-клетки: соматостатин (тормозит всё)',
                ]}
                fn="Островки = Организация сахара. Без неё → диабет"
                color="from-violet-500 to-purple-600"
              />
            </div>

            {/* Физиология */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Физиология: спящие агенты и баланс сахара
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PillarCard emoji="💤" name="Экзокринная — зимогены" points={[
                'Протеазы: трипсиноген, химотрипсиноген',
                'Липаза, амилаза',
                'Выделяются в НЕактивной форме (зимогены)',
                'Активация: энтерокиназа 12-перстной → трипсиноген → трипсин',
                'Трипсин активирует остальные',
                'Защита от аутолиза (самопереваривания)',
              ]} color="from-amber-500 to-orange-600" />
              <PillarCard emoji="⚖️" name="Эндокринная — сахар" points={[
                'После еды: глюкоза ↑ → бета-клетки → инсулин → клетки берут глюкозу',
                'Голод: глюкоза ↓ → альфа-клетки → глюкагон → печень отдаёт гликоген',
              ]} color="from-violet-500 to-purple-600" />
            </div>

            <FormulaBox title="Ключевой механизм безопасности" formula="Трипсиноген → (энтерокиназа в 12-перстной) → Трипсин" accent="rose" />

            <Callout variant="warning" emoji="💣" title="Если защита ломается">
              Трипсин активируется внутри железы → запускает каскад активации всех остальных ферментов →
              <strong className="uppercase text-amber-700"> Аутолиз (самопереваривание) → Панкреатит.</strong>{' '}
              Зимогены — как злые гении в бутылке. Пока в бутылке — ок. Бутылка разбилась внутри железы —
              катастрофа.
            </Callout>

            {/* Патофизиология */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Патофизиология: когда реактор взрывается
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <DiseaseCard emoji="🔥" name="Панкреатит" mechanism="Преждевременная активация трипсина → аутолиз → отёк → сдавление протоков → застой → порочный круг" morphology="Псевдокисты, некроз, SIRS → шок" color="from-rose-500 to-red-600" />
              <DiseaseCard emoji="📉" name="ЭНПЖ" mechanism="Ацинусы атрофируются (генетика у немецких овчарок / хронический панкреатит)" morphology="Полифагия + похудение + стеаторея + копрофагия" color="from-amber-500 to-orange-600" />
              <DiseaseCard emoji="🍬" name="Сахарный диабет" mechanism="Тип I (собаки): разрушение бета-клеток. Тип II (кошки): инсулинорезистентность на фоне ожирения" morphology="Нет инсулина / клетки его «не слышат»" color="from-violet-500 to-purple-600" />
            </div>

            {/* Клинические маркеры */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Клинические маркеры
            </h3>
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-4">
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>• <strong className="text-amber-700">Боль:</strong> поза «молящегося» (передние лапы вытянуты, задние стоят) — попытка уменьшить натяжение брыжейки</li>
                <li>• <strong className="text-amber-700">Рвота:</strong> частый спутник панкреатита</li>
                <li>• <strong className="text-amber-700">cPL/fPL</strong> (панкреатическая липаза): специфичный тест. Рост ×3 — диагноз панкреатит</li>
                <li>• <strong className="text-amber-700">Амилаза/липаза крови:</strong> неспецифичны, растут при болезнях почек/кишечника</li>
                <li>• <strong className="text-amber-700">УЗИ:</strong> увеличение ПЖ, гипоэхогенность (отёк), гиперэхогенность окружающей жировой ткани (воспаление)</li>
              </ul>
            </div>

            <Callout variant="info" emoji="🐶" title="Про собак и кошек">
              Кошки реже болеют острым панкреатитомом, чем собаки. Кошки — эстеты: едят мало и часто,
              никогда не украдут половину жареной курицы за раз. Собака — оптимист с плохой памятью:
              «Если дали еду сейчас, дадут всегда и много!». Этот «пищевой кураж» часто заканчивается
              тем, что поджелудочная говорит: «Всё, не могу переваривать твой энтузиазм» — и начинает
              переваривать саму себя. <strong>Берегите собачьи pancreas от праздничных застолий!</strong>
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ТЕМА 6: ТОЛСТАЯ КИШКА И СТУЛ ============= */}
        <SectionWrapper delay={0.35}>
          <SectionHeader number="6" title="ТОЛСТАЯ КИШКА И СТУЛ" subtitle="Фабрика упаковки: вода → кал. Цветовая диагностика" icon={Droplets} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-amber-900 sm:text-base">
              Тонкий кишечник извлекает питательные вещества, толстый — воду. Три этапа трансформации:
              <strong className="text-amber-700"> сушка → кормление бактерий → логистика</strong>.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <PhaseCard num="1" name="Сушка (абсорбция)" subtitle="Na+ и Cl− → вода за ними" details={[
                'Из 2 л жижи остаётся 100–200 г кала',
                'Вода бежит за солью следом (осмос)',
              ]} color="from-amber-500 to-orange-600" />
              <PhaseCard num="2" name="Микробиом" subtitle="Кормление бактерий" details={[
                'Бактерии едят клетчатку → производят КЦЖК (бутират)',
                'Бутират — еда для самих клеток кишки',
                'Нет бутирата → «дырявый кишечник»',
              ]} color="from-emerald-500 to-teal-600" />
              <PhaseCard num="3" name="Моторика" subtitle="Логистика" details={[
                'Гаустрация: медленное перемешивание («месим тесто»)',
                'Массовые движения: резкий толчок в прямую кишку',
                'Рефлекс дефекации: автопилот + ручное управление',
              ]} color="from-violet-500 to-purple-600" />
            </div>

            {/* Диарея — 4 механизма */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Диарея — 4 механизма, как вода попадает в кал
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DiarrheaCard emoji="🧲" name="Осмотическая" test="Голодание → диарея прекращается" cause="«Магнит для воды»: лактоза, непереваренный жир при ЭНПЖ. Вода притягивается к мусору" color="from-amber-500 to-orange-600" />
              <DiarrheaCard emoji="🚰" name="Секреторная" test="Голодание НЕ помогает, вода льёт рекой" cause="«Кран открыт»: токсины бактерий заставляют клетки выбрасывать воду и соли" color="from-cyan-500 to-blue-600" />
              <DiarrheaCard emoji="🩸" name="Экссудативная" test="Слизь, кровь, температура" cause="«Стена рушится»: воспаление (вирус, ВЗК, рак) → сочится кровь, белок, гной" color="from-rose-500 to-red-600" />
              <DiarrheaCard emoji="🚄" name="Моторная" test="Гипертиреоз у кошек" cause="«Скоростной поезд»: кишечник сокращается так быстро, что вода не успевает всосаться" color="from-violet-500 to-purple-600" />
            </div>

            {/* Запор */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              Запор — слишком сухо
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <PathologyCard emoji="🚧" title="Механика" causes={['Пробка (кость)', 'Опухоль', 'Узкий таз после перелома']} color="from-rose-500 to-red-600" />
              <PathologyCard emoji="😴" title="Лень мышц" causes={['Нервы не работают (травма спины)', 'Мало калия', 'Мегаколон у кошек (атония)']} color="from-violet-500 to-purple-600" />
              <PathologyCard emoji="🏜️" title="Обезвоживание" causes={['Организм высосал из кала последнюю каплю воды']} color="from-amber-500 to-orange-600" />
            </div>

            {/* Цветовая диагностика */}
            <h3 className="pt-2 text-base font-black uppercase tracking-tight text-amber-700 sm:text-lg">
              🚦 Цветовая диагностика стула — светофор врача
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <StoolColorCard emoji="⚫" name="Мелена" color_name="Чёрный, дегтеобразный" meaning="Кровь переварилась кислотой" location="Желудок, тонкий кишечник (верх)" bg_class="bg-slate-900 text-white" />
              <StoolColorCard emoji="🔴" name="Гематохезия" color_name="Алая кровь" meaning="Свежая кровь, не успела перевариться" location="Толстая кишка, прямая, анус (низ)" bg_class="bg-rose-600 text-white" />
              <StoolColorCard emoji="⚪" name="Ахолия" color_name="Серый/белый (глина)" meaning="Нет желчи (стеркобилина)" location="Закупорка желчных путей, печень" bg_class="bg-slate-200 text-slate-900" />
              <StoolColorCard emoji="🟡" name="Стеаторея" color_name="Жирный, блестящий" meaning="Неусвоенный жир" location="Поджелудочная (нет ферментов) или желчь" bg_class="bg-amber-300 text-amber-900" />
            </div>

            <Callout variant="info" emoji="😂" title="Про параанальные железы">
              Это парфюм, который нравится только собакам. Для человека запах секрета воспалённых желёз —
              это запах тухлой рыбы, умноженный на сто. Если собака ездит на попе по ковру, она не танцует,
              она просит помощи: «У меня там пробка!».
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ТЕМА 7: КЛИНИЧЕСКИЙ ОСМОТР ЖКТ ============= */}
        <SectionWrapper delay={0.4}>
          <SectionHeader number="7" title="КЛИНИЧЕСКИЙ ПРОТОКОЛ" subtitle="Осмотр ЖКТ, печени, селезёнки и поджелудочной" icon={Stethoscope} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-amber-900 sm:text-base">
              Осмотр по строгой схеме: <strong className="text-amber-700">Рот → Пищевод → Живот (пальпация) → Выход (ректально)</strong>.
              У кошек работаем деликатнее, у собак — увереннее, но всегда с уважением к боли.
            </p>

            {/* Этап 1: Рот */}
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white">1</span>
                Ротовая полость и глотка (входные ворота)
              </div>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>• <strong className="text-amber-700">Зубы/десны:</strong> зубной камень, гингивит, стоматит, резорбция корней (у кошек)</li>
                <li>• <strong className="text-amber-700">Слизистая и язык:</strong> уремические язвы (маркер ХБП!), кандидоз, инородные тела</li>
                <li>• <strong className="text-amber-700">Подъязычное пространство (критично для кошек!):</strong> поднять язык, искать нитку/мишуру (линейное инородное тело)</li>
                <li>• <strong className="text-amber-700">Запах (галитоз):</strong> гнилостный (пародонтит), ацетоновый (диабет), аммиачный (уремия), кислый (рефлюкс)</li>
              </ul>
            </div>

            {/* Этап 2: Пищевод */}
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white">2</span>
                Пищевод (транзитная зона)
              </div>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>• <strong className="text-amber-700">Регургитация «колбаской»:</strong> сразу после еды, без тошноты</li>
                <li>• <strong className="text-amber-700">Кашель во время еды:</strong> аспирация (мегаэзофагус)</li>
                <li>• <strong className="text-amber-700">Пальпация шеи:</strong> утолщение/масса (опухоль, абсцесс), крепитация (разрыв пищевода — пневмомедиастинум)</li>
                <li>• <strong className="text-amber-700">Пробное кормление:</strong> многократные глотательные движения, вытягивание шеи = дисфагия</li>
              </ul>
            </div>

            {/* Этап 3: Живот */}
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white">3</span>
                Пальпация брюшной полости (основной цех)
              </div>
              <p className="mb-2 text-xs text-amber-700/80">Начните с наименее болезненных зон. «Доскообразный живот» = остановитесь! Признак перитонита.</p>

              <div className="overflow-hidden rounded-xl border border-amber-200">
                <div className="grid grid-cols-3 bg-amber-100 text-center text-[10px] font-bold uppercase text-amber-700">
                  <div className="border-r border-amber-200 p-2">Орган</div>
                  <div className="border-r border-amber-200 p-2">Норма</div>
                  <div className="p-2">Патология (тревожные знаки)</div>
                </div>
                <PalpationRow organ="Желудок" norm="Мягкий, податливый" path="Твёрдое инородное тело. Газовое вздутие. Болезненность в эпигастрии" />
                <PalpationRow organ="Тонкий кишечник" norm="Петли тонкие, мягкие, подвижные" path="«Садовый шланг»: утолщение (ВЗК, лимфома). «Колбаска»: инвагинация. «Гармошка»: линейное инородное тело (кошки)" />
                <PalpationRow organ="Толстый кишечник" norm="Мягкая трубка с содержимым" path="Копростаз. Мегаколон (кошки)" />
                <PalpationRow organ="Печень" norm="Край едва за рёбрами или скрыт. Упругая, край острый" path="Гепатомегалия >2 см (липидоз, гепатит). Микрогепатия (цирроз, шунт). Твёрдая/бугристая (цирроз, рак). Дряблая (липидоз)" />
                <PalpationRow organ="Селезёнка" norm="Собаки: может быть большой (стресс). Кошки: маленькая" path="Собаки: чрезмерно огромная. Кошки: ЛЮБОЕ увеличение — патология! Узлы (гематома, рак). Острая боль (заворот, инфаркт)" />
                <PalpationRow organ="Поджелудочная" norm="НЕ ПРОЩУПЫВАЕТСЯ!" path="Становится доступной только при патологии. Резкая боль в эпигастрии. Плотная масса справа" />
              </div>
            </div>

            {/* Этап 4: Выход */}
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white">4</span>
                Выходной контроль (ректально и параанальные железы)
              </div>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>• <strong className="text-amber-700">Ректально:</strong> сфинктер сомкнут, стенки гладкие, на перчатке чисто</li>
                <li>• <strong className="text-amber-700">Патология:</strong> сниженный тонус (неврология), опухоли/стриктуры, кровь (алая/чёрная), слизь</li>
                <li>• <strong className="text-amber-700">Параанальные железы:</strong> норма — жидкий сероватый секрет. Патология — гной, кровь, густая масса, боль</li>
              </ul>
            </div>

            <Callout variant="info" emoji="🐱" title="Про язык кошки">
              Если кошка рвёт, а вы не проверили ей язык — вы не ветеринар, вы гадалка. Нитка под языком —
              это классика жанра. Она там сидит, как капитан на мостике, и держит весь кишечник в натяжении.
            </Callout>

            <Callout variant="warning" emoji="💨" title="Про запах ацетона">
              Если от собаки пахнет как от магазина растворителей или перезрелых яблок — это не новый парфюм.
              Это диабет кричит о помощи. <strong className="uppercase text-amber-700">Бегом мерить сахар!</strong>
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ТЕМА 8: ИТОГОВЫЙ КУРС ============= */}
        <SectionWrapper delay={0.45}>
          <SectionHeader number="8" title="ИТОГОВЫЙ КУРС" subtitle="Коротко о главном — карта внутренней империи" icon={Award} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <KeyPhrase>
              <strong className="uppercase text-amber-700">ЖКТ — это не просто трубка для еды.</strong>{' '}
              Это химический завод (печень, ПЖ), иммунный щит (GALT, лимфоузлы, селезёнка), экосистема
              (микробиом) и зеркало здоровья (стул, аппетит, рвота показывают всё).
            </KeyPhrase>

            <InfoBox color="blue" title="4 универсальных слоя стенки ЖКТ (запомнить навсегда)">
              <strong>1. Слизистая:</strong> эпителий + GALT. Ворсинки в тонкой, крипты в толстой.{' '}
              <strong>2. Подслизистая:</strong> сосуды и нервы (Мейснер).{' '}
              <strong>3. Мышечная:</strong> круговая + продольная (+ косая в желудке!). Нервы Ауэрбаха.{' '}
              <strong>4. Серозная:</strong> брюшина.
            </InfoBox>

            <Callout variant="info" emoji="😂" title="5 профессорских мудростей">
              <strong>Про кошек:</strong> Кошка — не маленькая собака. Кислотный желудок, короткий кишечник,
              печень, боящаяся голода, и селезёнка, которая не должна быть большой.{' '}
              <strong>Про поджелудочную:</strong> она молчит, пока не начинает есть сама себя. В норме её
              не найти руками — нашли, беда.{' '}
              <strong>Про рвоту:</strong> никогда не давайте противорвотное, пока не исключили непроходимость!{' '}
              <strong>Про диагностику:</strong> 70% диагноза ставится руками и глазами.{' '}
              <strong>Про стул:</strong> это ежедневный отчёт о работе завода. Учитесь его читать.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= CTA: ПРОВЕРЬ СЕБЯ ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-rose-300 bg-white/95 shadow-xl shadow-rose-500/10"
        >
          <div className="bg-gradient-to-r from-rose-500 to-amber-600 px-5 py-3 text-white">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">
                Закрепи материал — 50 вопросов
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight text-rose-700 sm:text-xl">
                8 подтем по ЖКТ
              </h3>
              <p className="mt-1 text-xs text-rose-900/80 sm:text-sm">
                Анатомия и гистология, физиология, рвота, печень и селезёнка, аппетит и жажда,
                поджелудочная, толстая кишка, клинический осмотр. Два режима: быстрый (10) и полный (50).
              </p>
            </div>
            {onNavigateToQuiz && (
              <button
                onClick={onNavigateToQuiz}
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl active:scale-95 sm:text-base"
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

/* ============= АНАТОМИЧЕСКАЯ SVG-СХЕМА ЖКТ ============= */
function GitTractSVG() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="overflow-hidden rounded-2xl border-2 border-amber-300 bg-white shadow-lg"
    >
      <div className="bg-gradient-to-r from-amber-600 to-rose-500 px-4 py-2 text-white">
        <div className="flex items-center gap-2">
          <Utensils className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Схема ЖКТ собаки</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-50/50 to-rose-50/30 p-3">
        <svg viewBox="0 0 600 420" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="Схема ЖКТ собаки: рот, пищевод, желудок (кардия, фундус, тело, пилорус), тонкий кишечник (12-перстная, тощая, подвздошная), толстый кишечник (слепая, ободочная, прямая), печень с желчным пузырём, поджелудочная железа, селезёнка">
          {/* Дорсальная линия */}
          <line x1="40" y1="40" x2="560" y2="40" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
          <text x="50" y="32" fontSize="10" fill="#64748b" fontWeight="bold">↑ Дорсально</text>

          {/* Голова с ртом */}
          <ellipse cx="105" cy="105" rx="42" ry="32" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="68" cy="110" r="6" fill="#1e293b" />
          <text x="68" y="114" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">рот</text>
          <text x="120" y="80" fontSize="8" fill="#0891b2" fontWeight="bold">язык</text>
          <text x="120" y="90" fontSize="8" fill="#0891b2" fontWeight="bold">(поднять!</text>
          <text x="120" y="100" fontSize="8" fill="#0891b2" fontWeight="bold">искать нитку)</text>

          {/* Пищод */}
          <rect x="135" y="105" width="10" height="60" fill="#fbcfe8" stroke="#be185d" strokeWidth="2" />
          <text x="155" y="135" fontSize="8" fill="#be185d" fontWeight="bold">пищевод</text>
          <text x="155" y="145" fontSize="8" fill="#be185d" fontWeight="bold">(регургитация</text>
          <text x="155" y="155" fontSize="8" fill="#be185d" fontWeight="bold">«колбаской»)</text>

          {/* Желудок (J-образный) */}
          <path d="M 145 165 Q 130 175 135 200 Q 145 225 175 230 Q 215 230 225 215 Q 235 195 225 175 Q 215 165 195 165 Z"
                fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
          <text x="180" y="195" fontSize="9" fill="#991b1b" textAnchor="middle" fontWeight="bold">желудок</text>
          <text x="180" y="207" fontSize="7" fill="#dc2626" textAnchor="middle">pH 1.5–3.5 (соб)</text>
          <text x="180" y="216" fontSize="7" fill="#dc2626" textAnchor="middle">pH 1–2 (кош)</text>
          {/* Подписи частей желудка */}
          <text x="140" y="172" fontSize="6" fill="#7c2d12" fontWeight="bold">кардия</text>
          <text x="160" y="180" fontSize="6" fill="#7c2d12" fontWeight="bold">фундус</text>
          <text x="215" y="220" fontSize="6" fill="#7c2d12" fontWeight="bold">пилорус</text>

          {/* Печень (справа от желудка, анатомически краниальнее) */}
          <path d="M 240 150 Q 280 140 320 155 Q 330 175 320 195 Q 280 205 240 195 Q 230 175 240 150 Z"
                fill="#fde68a" stroke="#d97706" strokeWidth="2" />
          <text x="280" y="175" fontSize="9" fill="#92400e" textAnchor="middle" fontWeight="bold">печень</text>
          <text x="280" y="187" fontSize="7" fill="#92400e" textAnchor="middle">6–7 долей</text>
          {/* Желчный пузырь */}
          <ellipse cx="265" cy="200" rx="7" ry="10" fill="#fbbf24" stroke="#92400e" strokeWidth="1.5" />
          <text x="245" y="215" fontSize="7" fill="#92400e" fontWeight="bold">жёлчный</text>
          <text x="245" y="223" fontSize="7" fill="#92400e" fontWeight="bold">пузырь</text>

          {/* Селезёнка (слева от желудка) */}
          <path d="M 95 195 Q 90 175 110 170 Q 130 175 130 200 Q 130 225 115 230 Q 95 225 95 195 Z"
                fill="#fecaca" stroke="#b91c1c" strokeWidth="2" />
          <text x="112" y="200" fontSize="8" fill="#7f1d1d" textAnchor="middle" fontWeight="bold">селезёнка</text>
          <text x="112" y="212" fontSize="6" fill="#b91c1c" textAnchor="middle">резервуар</text>
          <text x="112" y="220" fontSize="6" fill="#b91c1c" textAnchor="middle">крови (соб)</text>

          {/* Поджелудочная (вдоль 12-перстной) */}
          <path d="M 235 230 Q 250 245 280 240 Q 290 245 285 260 Q 270 265 245 260 Q 230 250 235 230 Z"
                fill="#fcd34d" stroke="#a16207" strokeWidth="2" />
          <text x="260" y="252" fontSize="7" fill="#7c2d12" textAnchor="middle" fontWeight="bold">поджелудочная</text>
          <text x="260" y="262" fontSize="6" fill="#a16207" textAnchor="middle">ацинусы + островки</text>

          {/* 12-перстная кишка (впадают протоки ПЖ и желчного) */}
          <path d="M 230 230 Q 245 270 280 280 Q 310 280 320 260" fill="none" stroke="#0891b2" strokeWidth="3" />
          <circle cx="245" cy="245" r="3" fill="#0891b2" />
          <text x="248" y="280" fontSize="7" fill="#0284c7" fontWeight="bold">12-перстная</text>
          <text x="248" y="290" fontSize="7" fill="#0284c7" fontWeight="bold">(впадают</text>
          <text x="248" y="298" fontSize="7" fill="#0284c7" fontWeight="bold">протоки)</text>

          {/* Тощая кишка (петли) */}
          <path d="M 320 260 Q 360 250 380 280 Q 350 310 380 330 Q 410 340 400 310 Q 380 290 410 270 Q 440 280 430 310 Q 410 330 440 330"
                fill="none" stroke="#0284c7" strokeWidth="3" />
          <text x="395" y="355" fontSize="8" fill="#0284c7" fontWeight="bold">тощая кишка</text>
          <text x="395" y="365" fontSize="7" fill="#0284c7" fontWeight="bold">(всасывание)</text>

          {/* Подвздошная + илеоцекальный клапан */}
          <path d="M 440 330 Q 460 340 470 320" fill="none" stroke="#0284c7" strokeWidth="3" />
          <circle cx="465" cy="320" r="4" fill="#0891b2" stroke="#fff" strokeWidth="1" />
          <text x="478" y="320" fontSize="7" fill="#0284c7" fontWeight="bold">илеоцек.</text>
          <text x="478" y="328" fontSize="7" fill="#0284c7" fontWeight="bold">клапан</text>

          {/* Слепая кишка (завиток у собак) */}
          <path d="M 460 320 Q 480 310 485 325 Q 482 340 470 340 Q 460 335 460 320 Z" fill="#bae6fd" stroke="#0369a1" strokeWidth="2" />
          <text x="473" y="328" fontSize="7" fill="#0c4a6e" textAnchor="middle" fontWeight="bold">слепая</text>

          {/* Ободочная кишка (с гаустрами) */}
          <path d="M 485 325 Q 510 320 515 345 Q 460 360 410 355 Q 350 360 320 350" fill="none" stroke="#0369a1" strokeWidth="3" />
          {/* Гаустры (кармашки) */}
          {[330, 360, 390, 420, 450, 480].map((x, i) => (
            <path key={i} d={`M ${x} 350 Q ${x+8} 360 ${x+15} 350`} fill="none" stroke="#0369a1" strokeWidth="1.5" />
          ))}
          <text x="420" y="375" fontSize="8" fill="#0c4a6e" fontWeight="bold">ободочная (гаустры у собак)</text>

          {/* Прямая кишка */}
          <rect x="310" y="345" width="20" height="15" rx="3" fill="#7dd3fc" stroke="#0369a1" strokeWidth="2" />
          <text x="320" y="357" fontSize="7" fill="#0c4a6e" textAnchor="middle" fontWeight="bold">прямая</text>

          {/* Легенда */}
          <text x="380" y="60" fontSize="9" fill="#475569" fontWeight="bold">🟡 = ферменты</text>
          <text x="380" y="75" fontSize="9" fill="#475569" fontWeight="bold">🔴 = кровь/иммунитет</text>
          <text x="380" y="90" fontSize="9" fill="#475569" fontWeight="bold">🔵 = всасывание</text>

          {/* Указатель топографии */}
          <text x="20" y="390" fontSize="9" fill="#475569" fontWeight="bold">Слева:</text>
          <text x="60" y="390" fontSize="9" fill="#475569">желудок, селезёнка, нисходящая ободочная</text>
          <text x="20" y="405" fontSize="9" fill="#475569" fontWeight="bold">Справа:</text>
          <text x="60" y="405" fontSize="9" fill="#475569">печень, восходящая ободочная, ПЖ</text>
        </svg>
      </div>
      <figcaption className="border-t border-amber-100 bg-amber-50/60 px-4 py-2 text-xs text-amber-900">
        <strong className="uppercase text-amber-700">Путь пищи:</strong>{' '}
        рот → пищевод → желудок (J-образный, pH 1.5–3.5 у собак, 1–2 у кошек) → 12-перстная (впадают
        протоки ПЖ и желчного) → тощая (всасывание) → подвздошная → илеоцекальный клапан → слепая
        (завиток у собак, рудимент у кошек) → ободочная (гаустры у собак) → прямая → анус. Сбоку:
        печень, селезёнка, поджелудочная.
      </figcaption>
    </motion.figure>
  )
}

/* ============= ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ============= */
function SectionWrapper({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="mb-8 overflow-hidden rounded-3xl border-2 border-amber-300 bg-white/95 shadow-xl shadow-amber-500/10 backdrop-blur"
    >
      {children}
    </motion.section>
  )
}

function SectionHeader({ number, title, subtitle, icon: Icon }: { number: string; title: string; subtitle: string; icon: typeof Utensils }) {
  return (
    <div className="flex items-center gap-3 border-b-2 border-amber-200 bg-gradient-to-r from-amber-50 to-rose-50 px-5 py-4 sm:px-7">
      <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-rose-500 text-white shadow-lg">
        <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-black text-white shadow">
          {number}
        </span>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h2 className="text-lg font-black uppercase tracking-tight text-amber-700 sm:text-2xl">{title}</h2>
        <p className="text-xs font-medium text-amber-700/70 sm:text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

function FormulaChip({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Utensils }) {
  return (
    <div className="rounded-2xl bg-amber-50/60 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div className="text-sm font-bold text-amber-900">{value}</div>
    </div>
  )
}

function FormulaBox({ title, formula, accent }: { title: string; formula: string; accent: 'amber' | 'rose' | 'emerald' }) {
  const colorMap = {
    amber: 'border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700',
    rose: 'border-rose-300 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700',
    emerald: 'border-emerald-300 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700',
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
    <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/40 px-4 py-3 text-sm leading-relaxed text-amber-900 sm:text-base">
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
      <div className="text-sm leading-relaxed text-amber-900">{children}</div>
    </div>
  )
}

function Callout({ variant, emoji, title, children }: { variant: 'info' | 'warning'; emoji: string; title: string; children: React.ReactNode }) {
  const bg = variant === 'info' ? 'bg-amber-50/80 border-amber-300' : 'bg-rose-50/80 border-rose-300'
  const headerColor = variant === 'info' ? 'text-amber-700' : 'text-rose-700'
  return (
    <div className={`rounded-2xl border-2 ${bg} p-4`}>
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        <h4 className={`text-sm font-bold uppercase tracking-wide ${headerColor}`}>{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-amber-900/90">{children}</p>
    </div>
  )
}

function LayerCard({ num, name, role, details, color }: { num: string; name: string; role: string; details: string[]; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-sm font-black text-white shadow-md`}>
            {num}
          </div>
          <div>
            <div className="text-sm font-black uppercase text-amber-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-amber-700">{role}</div>
          </div>
        </div>
        <ul className="space-y-0.5 text-xs text-amber-900/90">
          {details.map(d => <li key={d} className="flex gap-1.5"><span className="flex-shrink-0 text-amber-700">•</span><span>{d}</span></li>)}
        </ul>
      </div>
    </div>
  )
}

function AnatomyRow({ structure, dog, cat }: { structure: string; dog: string; cat: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-3">
      <div className="text-sm font-black uppercase text-amber-700">{structure}</div>
      <div className="text-xs text-amber-900/90 sm:border-l sm:border-amber-100 sm:pl-3">
        <span className="text-[10px] font-bold uppercase text-amber-600">🐶 Собака:</span> {dog}
      </div>
      <div className="text-xs text-amber-900/90 sm:border-l sm:border-amber-100 sm:pl-3">
        <span className="text-[10px] font-bold uppercase text-rose-600">🐱 Кошка:</span> {cat}
      </div>
    </div>
  )
}

function CellTypeCard({ name, shape, role, color }: { name: string; shape: string; role: string; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-3">
        <div className="text-[10px] font-bold uppercase tracking-wide text-amber-700">{shape}</div>
        <div className="text-sm font-black uppercase text-amber-900">{name}</div>
        <p className="mt-1 text-[11px] leading-snug text-amber-900/80">{role}</p>
      </div>
    </div>
  )
}

function DepartmentCard({ emoji, title, subtitle, structures, fn, color }: { emoji: string; title: string; subtitle: string; structures: string[]; fn: string; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-xl shadow-md`}>
            {emoji}
          </div>
          <div>
            <div className="text-sm font-black uppercase text-amber-900">{title}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-amber-700">{subtitle}</div>
          </div>
        </div>
        <ul className="mb-2 space-y-0.5 text-xs text-amber-900/90">
          {structures.map(s => <li key={s} className="flex gap-1.5"><span className="flex-shrink-0 text-amber-700">•</span><span>{s}</span></li>)}
        </ul>
        {fn && (
          <div className="border-t border-amber-100 pt-2 text-[11px]">
            <span className="font-bold uppercase text-amber-700">Функция:</span> <span className="text-amber-900">{fn}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function PillarCard({ emoji, name, points, color }: { emoji: string; name: string; points: string[]; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div className="text-sm font-black uppercase text-amber-900">{name}</div>
        </div>
        <ul className="space-y-0.5 text-xs text-amber-900/90">
          {points.map(p => <li key={p} className="flex gap-1.5"><span className="flex-shrink-0 text-amber-700">•</span><span>{p}</span></li>)}
        </ul>
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
          <div className="text-sm font-black uppercase text-amber-900">{title}</div>
        </div>
        <ul className="space-y-0.5 text-xs text-amber-900/90">
          {causes.map(c => <li key={c} className="flex gap-1.5"><span className="flex-shrink-0 text-amber-700">•</span><span>{c}</span></li>)}
        </ul>
      </div>
    </div>
  )
}

function ComparisonCard({ emoji, title, pattern, details, color }: { emoji: string; title: string; pattern: string; details: string[]; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div className="text-sm font-black uppercase text-amber-900">{title}</div>
        </div>
        <div className="text-[11px] font-bold uppercase text-amber-700">{pattern}</div>
        <ul className="mt-1.5 space-y-0.5 text-xs text-amber-900/90">
          {details.map(d => <li key={d} className="flex gap-1.5"><span className="flex-shrink-0 text-amber-700">•</span><span>{d}</span></li>)}
        </ul>
      </div>
    </div>
  )
}

function PhaseCard({ num, name, subtitle, details, color }: { num: string; name: string; subtitle: string; details: string[]; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-sm font-black text-white shadow-md`}>
            {num}
          </div>
          <div>
            <div className="text-sm font-black uppercase text-amber-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-amber-700">{subtitle}</div>
          </div>
        </div>
        <ul className="space-y-0.5 text-xs text-amber-900/90">
          {details.map(d => <li key={d} className="flex gap-1.5"><span className="flex-shrink-0 text-amber-700">•</span><span>{d}</span></li>)}
        </ul>
      </div>
    </div>
  )
}

function WorkshopCard({ emoji, name, points, color }: { emoji: string; name: string; points: string[]; color: string }) {
  return PillarCard({ emoji, name, points, color })
}

function DiseaseCard({ emoji, name, mechanism, morphology, color }: { emoji: string; name: string; mechanism: string; morphology: string; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div className="text-sm font-black uppercase text-amber-900">{name}</div>
        </div>
        <div className="text-[11px] font-bold uppercase text-amber-700">Механизм</div>
        <p className="mb-1.5 text-xs text-amber-900/90">{mechanism}</p>
        <div className="text-[11px] font-bold uppercase text-amber-700">Морфология</div>
        <p className="text-xs text-amber-900/90">{morphology}</p>
      </div>
    </div>
  )
}

function ScaleRow({ prefix, name, desc, color }: { prefix: string; name: string; desc: string; color: 'emerald' | 'amber' | 'rose' | 'violet' }) {
  const colorMap = {
    emerald: 'border-emerald-300 bg-emerald-50/60',
    amber: 'border-amber-300 bg-amber-50/60',
    rose: 'border-rose-300 bg-rose-50/60',
    violet: 'border-violet-300 bg-violet-50/60',
  }
  const textMap = {
    emerald: 'text-emerald-700',
    amber: 'text-amber-700',
    rose: 'text-rose-700',
    violet: 'text-violet-700',
  }
  return (
    <div className={`rounded-xl border-2 p-3 ${colorMap[color]}`}>
      <div className="flex items-center gap-2">
        <span className={`text-lg font-black ${textMap[color]}`}>{prefix}</span>
        <div>
          <div className="text-sm font-black uppercase text-amber-900">{name}</div>
          <div className="text-[11px] text-amber-900/80">{desc}</div>
        </div>
      </div>
    </div>
  )
}

function HypothalamusCard({ emoji, name, subtitle, details, color }: { emoji: string; name: string; subtitle: string; details: string[]; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div>
            <div className="text-sm font-black uppercase text-amber-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-amber-700">{subtitle}</div>
          </div>
        </div>
        <ul className="space-y-0.5 text-xs text-amber-900/90">
          {details.map(d => <li key={d} className="flex gap-1.5"><span className="flex-shrink-0 text-amber-700">•</span><span>{d}</span></li>)}
        </ul>
      </div>
    </div>
  )
}

function DiarrheaCard({ emoji, name, test, cause, color }: { emoji: string; name: string; test: string; cause: string; color: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div className="text-sm font-black uppercase text-amber-900">{name}</div>
        </div>
        <div className="text-[11px] font-bold uppercase text-amber-700">Тест голоданием</div>
        <p className="mb-1.5 text-xs text-amber-900/90">{test}</p>
        <div className="text-[11px] font-bold uppercase text-amber-700">Суть</div>
        <p className="text-xs text-amber-900/90">{cause}</p>
      </div>
    </div>
  )
}

function StoolColorCard({ emoji, name, color_name, meaning, location, bg_class }: { emoji: string; name: string; color_name: string; meaning: string; location: string; bg_class: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-md">
      <div className={`${bg_class} px-4 py-2`}>
        <div className="flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div>
            <div className="text-sm font-black uppercase">{name}</div>
            <div className="text-[10px] font-bold uppercase opacity-80">{color_name}</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-3">
        <div className="text-[11px] font-bold uppercase text-amber-700">Что значит?</div>
        <p className="text-xs text-amber-900/90">{meaning}</p>
        <div className="mt-1 text-[11px] font-bold uppercase text-amber-700">Где проблема?</div>
        <p className="text-xs text-amber-900/90">{location}</p>
      </div>
    </div>
  )
}

function PalpationRow({ organ, norm, path }: { organ: string; norm: string; path: string }) {
  return (
    <div className="grid grid-cols-3 border-t border-amber-100 bg-white text-xs">
      <div className="border-r border-amber-100 p-2 font-bold uppercase text-amber-700">{organ}</div>
      <div className="border-r border-amber-100 p-2 text-amber-900/90">{norm}</div>
      <div className="p-2 text-amber-900/90">{path}</div>
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
          className="absolute rounded-full bg-gradient-to-br from-white/40 to-amber-200/30 backdrop-blur-sm"
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
