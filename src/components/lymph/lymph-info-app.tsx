'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Activity,
  Brain,
  AlertTriangle,
  BookOpen,
  Award,
  Lightbulb,
  ArrowRight,
  Droplets,
  MapPin,
  Microscope,
  FlaskConical,
  Hand,
  Eye,
} from 'lucide-react'

export default function LymphInfoApp({ onNavigateToQuiz }: { onNavigateToQuiz?: () => void }) {
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
            <div className="absolute right-6 top-6 opacity-25">
              <Shield className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <FlaskConical className="h-3.5 w-3.5" /> Гайд для будущего ветеринара
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Лимфатическая система
              </h1>
              <p className="mt-3 text-sm font-medium leading-relaxed text-blue-50 sm:text-lg">
                «Тайная полиция» организма: дренаж, транспорт жиров и иммунитет. От карты
                лимфоузлов до магии пальпации и патологоанатомического разреза.
              </p>
            </div>
          </div>

          {/* Key formula chips */}
          <div className="grid grid-cols-1 gap-3 border-t-2 border-blue-200 p-5 sm:grid-cols-3 sm:p-6">
            <FormulaChip label="Три суперспособности" value="Дренаж • Транспорт жиров • Иммунитет" icon={Activity} />
            <FormulaChip label="Без насоса" value="Клапаны + мышечный + дыхательный насос" icon={Droplets} />
            <FormulaChip label="Пальпация (5 параметров)" value="Размер • Форма • Консистенция • Подвижность • Болезненность" icon={Hand} />
          </div>
        </motion.section>

        {/* ============= ВВЕДЕНИЕ: ТРИ СУПЕРСПОСОБНОСТИ ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-8 rounded-3xl border-2 border-blue-300 bg-white/95 p-5 shadow-lg shadow-blue-500/10 backdrop-blur sm:p-7"
        >
          <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
            <span className="font-bold uppercase text-blue-700">Лимфатическая система</span> — это
            «тайная полиция» организма. Она работает тихо, без ярких симптомов, но выполняет
            три задачи, без которых животное не выживет: убирает лишнюю воду, переносит жиры
            и ведёт иммунный надзор.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <SuperpowerCard
              icon={Droplets}
              letter="1"
              name="Дренаж"
              desc="Убирает лишнюю воду и крупные молекулы из тканей, возвращая их в кровоток"
              color="from-cyan-500 to-sky-600"
            />
            <SuperpowerCard
              icon={FlaskConical}
              letter="2"
              name="Транспорт жиров"
              desc="Перенос липидов из кишечника через млечные сосуды и грудной проток"
              color="from-amber-500 to-orange-600"
            />
            <SuperpowerCard
              icon={Shield}
              letter="3"
              name="Иммунный надзор"
              desc="Фильтрация антигенов в лимфоузлах, активация T- и B-лимфоцитов"
              color="from-blue-600 to-cyan-500"
            />
          </div>

          <p className="mt-4 text-sm font-bold uppercase tracking-wide text-blue-700 sm:text-base">
            Лимфатическая система — это «тайная полиция» организма: дренаж, транспорт жиров и иммунитет.
          </p>

          <Callout variant="info" emoji="🤪" title="Мини-заключение">
            Лимфатическая система — скромный трудяга: убирает лишнюю воду, перевозит жиры и ловит
            чужаков. Без неё кровь теряет объём, кишечник — всасывание, а иммунитет — координацию.
          </Callout>
        </motion.section>

        {/* ============= ИЗОБРАЖЕНИЕ 1 (после введения) ============= */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-300 bg-white shadow-xl shadow-blue-500/10"
        >
          <div className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 px-4 py-2 text-white">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Введение — «Тайная полиция» организма
              </span>
            </div>
          </div>
          <img
            src="https://cdn.relaxdev.ru/users/cmuqidv0d00fspn018pp2xupe/vet-kviz/1-.webp"
            alt="Схема лимфатической системы собаки и кошки: лимфатические сосуды, главные протоки и лимфоузлы"
            className="w-full"
            loading="lazy"
          />
          <figcaption className="border-t border-blue-100 bg-blue-50/60 px-4 py-2 text-xs text-blue-900">
            <strong className="uppercase text-blue-700">Лимфатическая система — «Тайная полиция» организма.</strong>{' '}
            Тихая, но незаменимая: дренаж, транспорт жиров и иммунный надзор.
          </figcaption>
        </motion.figure>

        {/* ============= РАЗДЕЛ 1: АНАТОМИЯ ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader number="1" title="АНАТОМИЯ" subtitle="Карта местности" icon={MapPin} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Чтобы понять, как работает лимфатическая система, нужно знать две её главные
              структуры: <strong className="text-blue-700">магистрали (протоки)</strong> и{' '}
              <strong className="text-blue-700">точки контроля (лимфоузлы)</strong>.
            </p>

            {/* Главные магистрали */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/60 p-4">
              <div className="mb-3 font-bold uppercase text-blue-700">
                🛣️ Главные магистрали (Протоки)
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <DuctCard
                  icon={Activity}
                  latin="Ductus thoracicus"
                  name="Грудной проток"
                  desc="Самый крупный лимфатический сосуд. Собирает лимфу от задних конечностей, таза, брюшной полости и левой половины грудной клетки. Впадает в левую венозную систему."
                />
                <DuctCard
                  icon={Activity}
                  latin="Ductus lymphaticus dexter"
                  name="Правый лимфатический проток"
                  desc="Собирает лимфу от правой половины головы, шеи, правой передней конечности и правой половины грудной клетки. Впадает в правую венозную систему."
                />
              </div>
            </div>

            {/* Точки контроля (Лимфоузлы) */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/60 p-4">
              <div className="mb-3 font-bold uppercase text-blue-700">
                🛂 Точки контроля (Лимфоузлы) — по зонам
              </div>
              <div className="space-y-3">
                <ZoneGroup
                  zoneName="Голова и шея"
                  icon={Eye}
                  nodes={[
                    { name: 'Подчелюстные (Mandibulares)', note: 'чаще всего пальпируются у собак и кошек' },
                    { name: 'Околоушные (Parotidei)', note: 'краниально от ушной раковины' },
                    { name: 'Поверхностные шейные (Cervicales superficiales)', note: 'в области плеча, выше лопатки' },
                  ]}
                />
                <ZoneGroup
                  zoneName="Передние лапы"
                  icon={Hand}
                  nodes={[
                    { name: 'Подмышечные (Axillares)', note: 'в подмышечной впадине, проксимально' },
                  ]}
                />
                <ZoneGroup
                  zoneName="Живот"
                  icon={Microscope}
                  nodes={[
                    { name: 'Брыжеечные (Mesenterici)', note: 'в брюшной полости, не пальпируются снаружи' },
                    { name: 'Поясничные (Lumbales)', note: 'вдоль аорты и каудальной полой вены' },
                  ]}
                />
                <ZoneGroup
                  zoneName="Задние лапы"
                  icon={MapPin}
                  nodes={[
                    { name: 'Паховые (Inguinales)', note: 'в паховой области' },
                    { name: 'Подколенные (Poplitei)', note: 'каудально от коленного сустава' },
                  ]}
                />
              </div>
            </div>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">У кошек подколенные лимфоузлы крупнее, чем у собак:</strong>{' '}
              у кошки в норме до 1 см, у собаки — около 0,5 см. Не пугайтесь «большого» узла у кошки —
              это видовая норма.
            </KeyPhrase>

            <InfoBox color="amber" title="Видовые отличия">
              У кошек подколенный лимфоузел в норме может достигать <strong className="text-blue-700">1 см</strong>,
              тогда как у собак — около <strong className="text-blue-700">0,5 см</strong>. Пальпируйте
              узлы симметрично: сравнивайте левую и правую сторону у одного пациента.
            </InfoBox>

            {/* ИЗОБРАЖЕНИЕ 2 — топография лимфоузлов */}
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="overflow-hidden rounded-2xl border-2 border-blue-300 bg-white shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Топография лимфоузлов у собаки и кошки
                  </span>
                </div>
              </div>
              <img
                src="https://cdn.relaxdev.ru/users/cmuqidv0d00fspn018pp2xupe/vet-kviz/.webp"
                alt="Топография лимфатических узлов у собаки и кошки: подчелюстные, околоушные, поверхностные шейные, подмышечные, паховые и подколенные узлы"
                className="w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-blue-100 bg-blue-50/60 px-4 py-2 text-xs text-blue-900">
                <strong className="uppercase text-blue-700">Топография лимфоузлов у собаки и кошки.</strong>{' '}
                Пальпируйте узлы системно, по зонам — от головы к хвосту, симметрично с двух сторон.
              </figcaption>
            </motion.figure>

            <Callout variant="info" emoji="🤪" title="Мини-заключение — правило «Кошачьего колена»">
              Не пугайтесь крупного подколенного узла у кошки: в норме он может достигать 1 см.
              А вот у собаки «подколенка» больше полсантиметра уже подозрительна. Видовые нормы —
              не мелочь, а первое, что отличает «норму» от «найдёныша».
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 2: ГИСТОЛОГИЯ ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader number="2" title="ГИСТОЛОГИЯ" subtitle="Что внутри «боба»?" icon={Microscope} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              На разрезе лимфоузел напоминает <strong className="text-blue-700">боб</strong>. Снаружи —
              капсула, внутри — паренхима с корой, паракортексом и мозговым веществом. Лимфа входит
              с выпуклой стороны, выходит через ворота.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <StructureCard
                icon={Shield}
                name="Капсула"
                latin="Capsula"
                desc="Плотная соединительнотканная оболочка. Защищает паренхиму и отправляет внутрь трабекулы."
              />
              <StructureCard
                icon={Activity}
                name="Трабекулы"
                latin="Trabeculae"
                desc="Внутренние перегородки от капсулы. Делят узел на отделы и несут сосуды."
              />
              <StructureCard
                icon={Brain}
                name="Кора"
                latin="Cortex"
                desc="B-лимфоциты. Лимфоидные фолликулы — «домики», где созревают антитела."
              />
              <StructureCard
                icon={FlaskConical}
                name="Паракортекс"
                latin="Paracortex"
                desc="T-лимфоциты. Здесь находятся HEV — высокие эндотелиальные венулы, через которые лимфоциты входят в узел."
              />
              <StructureCard
                icon={Microscope}
                name="Мозговое вещество"
                latin="Medulla"
                desc="Тяжи мозгового вещества и мозговые синусы. Здесь лимфа фильтруется и плазмоциты секретируют антитела."
              />
              <StructureCard
                icon={ArrowRight}
                name="Ворота"
                latin="Hilum"
                desc="Углубление, через которое входят артерии и нервы, выходят вены и эфферентный лимфатический сосуд."
              />
            </div>

            <InfoBox color="blue" title="Логика движения лимфы">
              <strong className="uppercase text-blue-700">Лимфа входит с выпуклой стороны</strong> через
              приносящие (афферентные) лимфатические сосуды, проходит через синусы коры и мозгового
              вещества и <strong className="text-blue-700">выходит через ворота</strong> по выносящему
              (эфферентному) сосуду.
            </InfoBox>

            <Callout variant="info" emoji="🤪" title="Мини-заключение — метафора «Night club»">
              Лимфоузел — это ночной клуб. Капсула — охрана на входе, трабекулы — стены и коридоры.
              В корте тусуются B-клетки, в паракортексе — T-клетки, а через HEV («VIP-вход») новые
              лимфоциты попадают внутрь. Лимфа заходит через приносящий сосуд, тусуется в синусах
              и выходит через ворота с эффектом «был, отфильтрован, свободен».
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 3: ФИЗИОЛОГИЯ ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader number="3" title="ФИЗИОЛОГИЯ" subtitle="Как это работает?" icon={Activity} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <KeyPhrase>
              <strong className="uppercase text-blue-700">У лимфатической системы нет сердца.</strong>{' '}
              Никакого центрального насоса. Движение лимфы обеспечивают другие силы.
            </KeyPhrase>

            <FormulaBox
              title="Четыре двигателя лимфотока"
              formula="Лимфангионы • Клапаны • Мышечный насос • Дыхательный насос"
              accent="blue"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <EngineCard
                icon={Activity}
                name="Лимфангионы"
                desc="Гладкие мышцы в стенке лимфатических сосудов ритмично сокращаются и проталкивают лимфу."
              />
              <EngineCard
                icon={ArrowRight}
                name="Клапаны"
                desc="Внутренние заслонки пропускают лимфу только в одном направлении — к протокам."
              />
              <EngineCard
                icon={Hand}
                name="Мышечный насос"
                desc="Сокращение скелетных мышц (особенно при движении) сдавливает сосуды и толкает лимфу."
              />
              <EngineCard
                icon={Droplets}
                name="Дыхательный насос"
                desc="Перепады давления в грудной полости при вдохе и выдохе «всасывают» лимфу в протоки."
              />
            </div>

            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/60 p-4">
              <div className="mb-2 font-bold uppercase text-blue-700">🛡️ Иммунный надзор</div>
              <p className="text-sm leading-relaxed text-blue-900">
                В тканях <strong className="text-blue-700">дендритные клетки</strong> захватывают антиген,
                переходят в лимфатический сосуд и мигрируют в ближайший лимфоузел. В паракортексе они
                «показывают» антиген <strong className="text-blue-700">T-лимфоцитам</strong>. Если антиген
                распознан — запускается иммунный ответ: активируются T-клетки, B-клетки превращаются в
                плазмоциты и вырабатывают антитела.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/60 p-4">
              <div className="mb-2 font-bold uppercase text-amber-700">🥛 Транспорт жиров — хилус</div>
              <p className="text-sm leading-relaxed text-blue-900">
                После жирной пищи липиды всасываются в кишечнике не в кровь, а в{' '}
                <strong className="text-blue-700">млечные сосуды</strong>. Лимфа становится молочно-белой —
                это <strong className="text-blue-700">хилус</strong>. По грудному протоку он доходит до
                венозной системы. Поэтому после еды лимфа визуально отличается от прозрачной межтканевой.
              </p>
            </div>

            <Callout variant="info" emoji="🤪" title="Мини-заключение — метафора «Lazy river»">
              Лимфатическая система — это «ленивая река» в аквапарке: течёт медленно, без насоса, но
              кто-то двигает ногами (мышцы), кто-то дышит рядом (диафрагма), а клапаны не дают течь
              вспять. Идеальная ленивая логистика без центрального мотора.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4: ПАТОЛОГИИ ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader number="4" title="КОГДА ВСЁ ЛОМАЕТСЯ" subtitle="Патологии лимфосистемы" icon={AlertTriangle} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Когда «тайная полиция» даёт сбой, признаки появляются на разных уровнях: лимфоузлы,
              сосуды, протоки. Вот основные патологии, которые должен знать ветеринар.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PathologyCard
                icon={AlertTriangle}
                name="Лимфаденопатия"
                desc="Увеличение лимфоузла любого происхождения. Это симптом, а не диагноз — нужно искать причину."
                accent="from-amber-500 to-orange-600"
              />
              <PathologyCard
                icon={Shield}
                name="Реактивная гиперплазия"
                desc="Доброкачественный ответ на антиген. Узел увеличен, но структура сохранена. Часто обратима."
                accent="from-blue-500 to-sky-600"
              />
              <PathologyCard
                icon={FlaskConical}
                name="Лимфаденит"
                desc="Воспаление лимфоузла (бактериальное, вирусное, грибковое). Может быть серозным или гнойным."
                accent="from-rose-500 to-red-600"
              />
              <PathologyCard
                icon={Microscope}
                name="Неоплазия"
                desc="Лимфома (первичная опухоль из лимфоцитов) или метастазы другой опухоли в лимфоузел."
                accent="from-violet-500 to-purple-600"
              />
              <PathologyCard
                icon={Activity}
                name="Лимфангит"
                desc="Воспаление стенки лимфатического сосуда. Часто сопровождает лимфаденит или раневые инфекции."
                accent="from-cyan-500 to-teal-600"
              />
              <PathologyCard
                icon={Droplets}
                name="Лимфедема"
                desc="Отёк тканей из-за нарушения оттока лимфы. Конечность увеличивается, кожа уплотняется."
                accent="from-sky-500 to-blue-600"
              />
              <PathologyCard
                icon={Brain}
                name="Хилоторакс"
                desc="Скопление хилуса (лимфы с жирами) в грудной полости. Часто у кошек. Опасно дыхательной недостаточностью."
                accent="from-amber-400 to-yellow-500"
              />
            </div>

            <Callout variant="warning" emoji="🤪" title="Мини-заключение — болезненные vs безболезненные">
              Болезненный, горячий, увеличенный узел — думайте об инфекции (лимфаденит).
              Безболезненный, плотный, сросшийся с тканями — подозревайте неоплазию.
              Боль ≠ «плохо», без боли ≠ «хорошо»: каждая картина ведёт к своему диагнозу.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 5: КЛИНИЧЕСКИЙ ОСМОТР ============= */}
        <SectionWrapper delay={0.35}>
          <SectionHeader number="5" title="КЛИНИЧЕСКИЙ ОСМОТР" subtitle="Магия рук врача" icon={Hand} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Пальпация лимфоузлов — обязательный элемент системного осмотра. Каждый узел оценивайте
              по <strong className="text-blue-700">пяти параметрам</strong>. Сравнивайте симметричные
              узлы слева и справа.
            </p>

            <FormulaBox
              title="Формула пяти пальцев"
              formula="Размер • Форма • Консистенция • Подвижность • Болезненность"
              accent="blue"
            />

            <div className="space-y-3">
              <PalpationRow
                icon={MapPin}
                param="Размер"
                normal="Соответствует видовой норме (собака ~0,5 см, кошка до 1 см для подколенных)"
                abnormal="Увеличение, асимметрия, резкое отличие от соседних узлов"
              />
              <PalpationRow
                icon={Eye}
                param="Форма"
                normal="Овальная, чёткие контуры, «бобовидная»"
                abnormal="Неправильная форма, слияние с соседними узлами в конгломерат"
              />
              <PalpationRow
                icon={Microscope}
                param="Консистенция"
                normal="Мягко-эластичная, упругая (как сырая олива)"
                abnormal="Плотная (неоплазия), флюктуирующая (гной), твёрдая (фиброз)"
              />
              <PalpationRow
                icon={Activity}
                param="Подвижность"
                normal="Свободно смещается относительно кожи и глубоких тканей"
                abnormal="Спаян с кожей, мышцами, фиксирован к подлежащим структурам"
              />
              <PalpationRow
                icon={Hand}
                param="Болезненность"
                normal="Безболезненный при пальпации"
                abnormal="Болезненный, горячий — признак воспаления (лимфаденит)"
              />
            </div>

            <InfoBox color="rose" title="Правило симметрии">
              Пальпируйте узлы <strong className="text-blue-700">попарно</strong>: левый и правый
              подчелюстной, левый и правый подколенный и т.д. Асимметрия — повод для углублённой
              диагностики даже при небольших размерах.
            </InfoBox>

            <Callout variant="info" emoji="🤪" title="Мини-заключение — правило пяти пальцев">
              У врача на руке пять пальцев — и у лимфоузла пять параметров: размер, форма,
              консистенция, подвижность, болезненность. Все вместе они дают клинический портрет,
              которого не даст ни одно УЗИ с ходу.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 6: ПАТОЛОГОАНАТОМИЯ ============= */}
        <SectionWrapper delay={0.4}>
          <SectionHeader number="6" title="ПАТОЛОГОАНАТОМИЯ" subtitle="Взгляд изнутри — 4 картины на разрезе" icon={Microscope} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              На разрезе лимфоузла разные патологии дают характерные картины. Эти четыре образа
              должен узнавать каждый, кто планирует работать с патологоанатомией.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CutCard
                icon={Shield}
                name="Реактивная гиперплазия"
                desc="Узел сочный, увеличен, но структура цела. Корковый слой сохранён, фолликулы увеличены."
                color="from-blue-500 to-sky-600"
                emoji="🧽"
              />
              <CutCard
                icon={FlaskConical}
                name="Гнойный лимфаденит"
                desc="Очаги гноя, некроз, жёлто-зелёные участки. Капсула может истончаться и прорываться."
                color="from-rose-500 to-red-600"
                emoji="🟢"
              />
              <CutCard
                icon={Microscope}
                name="Лимфома"
                desc="Однородная, «рыбье мясо», диффузно увеличена, структура стёрта, фолликулов не видно."
                color="from-violet-500 to-purple-600"
                emoji="🐟"
              />
              <CutCard
                icon={AlertTriangle}
                name="Метастазы"
                desc="Чужеродные очаги внутри узла — белые плотные узелки, нарушающие нормальную архитектуру."
                color="from-amber-500 to-orange-600"
                emoji="⚪"
              />
            </div>

            <Callout variant="info" emoji="🤪" title="Мини-заключение — «губка vs абсцесс vs рыба»">
              Сочный, структурный узел — «губка» (гиперплазия). Гной и некроз — «абсцесс»
              (лимфаденит). Однородная масса цвета рыбьего мяса — «рыба» (лимфома). Белые
              чужеродные очаги — метастазы. Образы помогают запомнить картину за секунды.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ФИНАЛЬНОЕ ЗАКЛЮЧЕНИЕ ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 p-1 shadow-2xl"
        >
          <div className="rounded-[22px] bg-white px-6 py-7 sm:px-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight text-blue-700 sm:text-2xl">
                  Финальное заключение
                </h2>
                <p className="text-xs font-medium text-blue-700/70">Итог — три правила ветеринара</p>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-50/60 p-4 text-center">
              <div className="text-base font-black uppercase tracking-tight text-blue-700 sm:text-xl">
                Знай топографию + Пальпируй системно + Думай клинически
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Лимфатическая система</strong> — это
              «тайная полиция» организма. Без насоса, без шума, без ярких симптомов — но именно она
              убирает лишнюю воду, переносит жиры и фильтрует антигены. На приёме врач должен
              системно пальпировать доступные лимфоузлы, оценивая каждый по пяти параметрам, и
              понимать, что скрывается за изменениями: реактивная гиперплазия, лимфаденит, лимфома
              или метастазы.
            </p>

            <div className="mt-4 rounded-2xl border-l-4 border-blue-500 bg-blue-50/40 px-4 py-3 text-sm leading-relaxed text-blue-900">
              <strong className="uppercase text-blue-700">Знай топографию.</strong> Помни главные
              протоки и зоны пальпируемых лимфоузлов.{' '}
              <strong className="uppercase text-blue-700">Пальпируй системно.</strong> По пяти
              параметрам и симметрично.{' '}
              <strong className="uppercase text-blue-700">Думай клинически.</strong> Не
              останавливайся на самом узле — ищи первичный очаг.
            </div>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-sm text-blue-900">
              <div className="mb-1 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span className="font-bold uppercase text-amber-700">🤪 Финальное мини-заключение</span>
              </div>
              Ветеринар — детектив. Лимфоузлы — его информаторы. Знай, где они стоят, пальпируй их
              системно по пяти параметрам и думай клинически: за каждым увеличенным узлом скрывается
              своя история. И тогда «тайная полиция» организма начнёт работать на тебя, а не против тебя.
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          onClick={onNavigateToQuiz}
          disabled={!onNavigateToQuiz}
          className="group mb-8 w-full rounded-3xl border-2 border-blue-300 bg-white p-6 text-center shadow-lg transition-all hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
        >
          <BookOpen className="mx-auto h-10 w-10 text-blue-600 transition-transform group-hover:scale-110" />
          <h3 className="mt-3 text-xl font-black uppercase text-blue-700">
            Готов проверить себя?
          </h3>
          <p className="mt-2 text-sm text-blue-900/80">
            5 вопросов по лимфосистеме — на закрепление материала. Нажми, чтобы пройти тест
            <strong className="text-blue-700"> «Лимфосистема — проверь себя»</strong>.
          </p>
          <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:shadow-lg">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="uppercase tracking-wide">5 вопросов по лимфосистеме</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-blue-700/60">
          Гайд по лимфатической системе собак и кошек • Анатомия, гистология, физиология и
          клинический осмотр • Для ветеринарных специалистов и студентов
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
  icon: typeof Shield
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

function FormulaChip({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Shield }) {
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

function SuperpowerCard({
  icon: Icon,
  letter,
  name,
  desc,
  color,
}: {
  icon: typeof Shield
  letter: string
  name: string
  desc: string
  color: string
}) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-blue-200 bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-lg font-black text-white shadow-md`}>
          {letter}
        </div>
        <div>
          <div className="text-sm font-bold uppercase text-blue-900">{name}</div>
          <div className="text-[10px] uppercase tracking-wide text-blue-700/60">суперспособность</div>
        </div>
      </div>
      <p className="text-xs text-blue-900/80">{desc}</p>
    </div>
  )
}

function DuctCard({
  icon: Icon,
  latin,
  name,
  desc,
}: {
  icon: typeof Activity
  latin: string
  name: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-white p-4">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-bold uppercase text-blue-900">{name}</div>
          <div className="text-[10px] italic text-blue-700/70">{latin}</div>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-blue-900/80">{desc}</p>
    </div>
  )
}

function ZoneGroup({
  zoneName,
  icon: Icon,
  nodes,
}: {
  zoneName: string
  icon: typeof MapPin
  nodes: { name: string; note: string }[]
}) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-white/80 p-3">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-700">
        <Icon className="h-4 w-4" />
        {zoneName}
      </div>
      <ul className="space-y-1.5">
        {nodes.map((n) => (
          <li key={n.name} className="text-xs leading-relaxed text-blue-900">
            <strong className="text-blue-900">{n.name}</strong>{' '}
            <span className="text-blue-900/70">— {n.note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function StructureCard({
  icon: Icon,
  name,
  latin,
  desc,
}: {
  icon: typeof Shield
  name: string
  latin: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 p-4">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-black uppercase text-blue-900">{name}</div>
          <div className="text-[10px] italic text-blue-700/70">{latin}</div>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-blue-900/80">{desc}</p>
    </div>
  )
}

function EngineCard({
  icon: Icon,
  name,
  desc,
}: {
  icon: typeof Activity
  name: string
  desc: string
}) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-blue-200 bg-blue-50/40 px-3 py-2">
      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
      <div>
        <div className="text-sm font-bold uppercase text-blue-900">{name}</div>
        <div className="text-xs leading-relaxed text-blue-900/80">{desc}</div>
      </div>
    </div>
  )
}

function PathologyCard({
  icon: Icon,
  name,
  desc,
  accent,
}: {
  icon: typeof AlertTriangle
  name: string
  desc: string
  accent: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${accent} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-md`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-sm font-black uppercase text-blue-900">{name}</div>
        </div>
        <p className="text-xs leading-relaxed text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

function PalpationRow({
  icon: Icon,
  param,
  normal,
  abnormal,
}: {
  icon: typeof Hand
  param: string
  normal: string
  abnormal: string
}) {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-white p-3">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-sm font-black uppercase text-blue-900">{param}</div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-2.5">
          <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">✓ Норма</div>
          <div className="text-xs leading-relaxed text-blue-900">{normal}</div>
        </div>
        <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-2.5">
          <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wide text-rose-700">⚠ Тревога</div>
          <div className="text-xs leading-relaxed text-blue-900">{abnormal}</div>
        </div>
      </div>
    </div>
  )
}

function CutCard({
  icon: Icon,
  name,
  desc,
  color,
  emoji,
}: {
  icon: typeof Microscope
  name: string
  desc: string
  color: string
  emoji: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-lg">{emoji}</div>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-blue-900/80">{desc}</p>
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
