'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Layers,
  Activity,
  Droplets,
  Brain,
  Eye,
  Stethoscope,
  Thermometer,
  Heart,
  AlertTriangle,
  Flame,
  Snowflake,
  Sun,
  CircleDot,
  Wind,
  Scissors,
  BookOpen,
  Lightbulb,
  Award,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export default function MucousInfoApp() {
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
                <Stethoscope className="h-3.5 w-3.5" /> Гайд для будущего ветеринара
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Слизистые оболочки собак и кошек
              </h1>
              <p className="mt-3 text-sm font-medium leading-relaxed text-blue-50 sm:text-lg">
                Строение, функции и клиническая оценка. От формулы «Покрывает — защищает — сообщает»
                до алгоритма ЦВВД и дифференциальной диагностики цветов слизистых.
              </p>
            </div>
          </div>

          {/* Key formula chips */}
          <div className="grid grid-cols-1 gap-3 border-t-2 border-blue-200 p-5 sm:grid-cols-3 sm:p-6">
            <FormulaChip label="Главная формула" value="Покрывает — защищает — сообщает" icon={Shield} />
            <FormulaChip label="Функции (БАРС)" value="Барьер, Абсорбция, Рецепция, Секреция" icon={Activity} />
            <FormulaChip label="Алгоритм осмотра (ЦВВД)" value="Цвет, Влажность, ВКН, Дефекты" icon={Eye} />
          </div>
        </motion.section>

        {/* ============= ВВЕДЕНИЕ ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-8 rounded-3xl border-2 border-blue-300 bg-white/95 p-5 shadow-lg shadow-blue-500/10 backdrop-blur sm:p-7"
        >
          <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
            <span className="font-bold uppercase text-blue-700">Здравствуйте, коллеги.</span> Представьте пациента:
            собака вялая, дёсны бледные и сухие, а цвет после надавливания возвращается медленно.
            Уже за несколько секунд осмотра врач получает важную информацию о{' '}
            <strong className="text-blue-700">перфузии, гидратации, оксигенации</strong> и возможной кровопотере.
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-wide text-blue-700 sm:text-base">
            Слизистая оболочка — это зеркало внутреннего состояния организма.
          </p>
          <p className="mt-2 text-sm italic leading-relaxed text-blue-900/80 sm:text-base">
            Если дёсны животного рассказывают вам больше, чем владелец на приёме, — это не магия.
            Это грамотный клинический осмотр.
          </p>
        </motion.section>

        {/* ============= РАЗДЕЛ 1: ГЛАВНАЯ ФОРМУЛА ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader number="1" title="ГЛАВНАЯ ФОРМУЛА" subtitle="Что такое слизистая оболочка" icon={Shield} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <FormulaBox
              title="Три слова"
              formula="ПОКРЫВАЕТ — ЗАЩИЩАЕТ — СООБЩАЕТ"
              accent="blue"
            />

            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Слизистая оболочка</strong>, или{' '}
              <em>tunica mucosa</em>, выстилает полости органов, сообщающихся с внешней средой.
              Она расположена в:
            </p>

            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <LocationChip icon={Droplets} label="Пищеварительный тракт" />
              <LocationChip icon={Wind} label="Дыхательные пути" />
              <LocationChip icon={Activity} label="Мочеполовая система" />
              <LocationChip icon={Eye} label="Конъюнктива глаза" />
            </ul>

            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Слизистая не является пассивной «внутренней выстилкой». Она первой контактирует с{' '}
              <strong className="text-blue-700">пищей, воздухом, микроорганизмами, мочой, токсинами</strong> и
              механическими раздражителями.
            </p>

            <InfoBox color="amber" title="Аналогия">
              Представьте слизистую как пограничную службу организма: она встречает внешние факторы,
              ограничивает их проникновение и передаёт врачу информацию о состоянии внутренних систем.
            </InfoBox>

            <Callout variant="info" emoji="🛡️" title="Мини-заключение">
              Слизистая — как строгий охранник на входе: первой встречает гостей, подозрительных не пускает
              и немедленно докладывает врачу о проблемах.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 2: ЧЕТЫРЕ ФУНКЦИИ ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader number="2" title="ЧЕТЫРЕ ФУНКЦИИ" subtitle="Формула БАРС" icon={Activity} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <FormulaBox title="Формула" formula="БАРС: Барьер, Абсорбция, Рецепция, Секреция" accent="blue" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <FunctionCard icon={Shield} letter="Б" name="Барьер" desc="Защита от микроорганизмов, токсинов, травм" color="from-blue-500 to-sky-600" />
              <FunctionCard icon={Droplets} letter="А" name="Абсорбция" desc="Всасывание воды, электролитов, питательных веществ" color="from-cyan-500 to-teal-600" />
              <FunctionCard icon={Brain} letter="Р" name="Рецепция" desc="Механические, химические, температурные раздражители" color="from-violet-500 to-purple-600" />
              <FunctionCard icon={Droplets} letter="С" name="Секреция" desc="Слизь, ферменты, биоактивные вещества, гормоны" color="from-rose-500 to-pink-600" />
            </div>

            <KeyPhrase>
              Слизистая <strong className="uppercase text-blue-700">защищает, всасывает, чувствует</strong> и{' '}
              <strong className="uppercase text-blue-700">выделяет</strong>.
            </KeyPhrase>

            <Callout variant="info" emoji="🐻" title="Мини-заключение">
              БАРС не рычит и не кусается, но работает надёжно: защищает, всасывает, чувствует и выделяет.
              Настоящий универсальный сотрудник организма.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 3: ПОЧЕМУ СЛИЗИСТАЯ ВЛАЖНАЯ ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader number="3" title="ПОЧЕМУ СЛИЗИСТАЯ ВЛАЖНАЯ" subtitle="Источник блеска" icon={Droplets} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Нормальная слизистая выглядит <strong className="text-blue-700">влажной, гладкой и блестящей</strong>.
              Её увлажнение обеспечивают:
            </p>

            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <SourceChip label="Транссудация жидкости из капилляров" />
              <SourceChip label="Секреция собственных желёз" />
              <SourceChip label="Бокаловидные клетки" />
              <SourceChip label="Слюнные железы ротовой полости" />
            </ul>

            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Сухая, тусклая или липкая слизистая требует оценки гидратации, секреции желёз, температуры
              тела и общего состояния пациента.
            </p>

            <FormulaBox title="Правило" formula="Влажная слизистая — вода есть. Сухая слизистая — воду ищем." accent="blue" />

            <Callout variant="info" emoji="💧" title="Мини-заключение">
              Нормальная слизистая должна блестеть, но не потому, что готовится к фотосессии: влажность —
              признак нормальной гидратации и секреции.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4: ТРИ СЛОЯ СЛИЗИСТОЙ ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader number="4" title="ТРИ СЛОЯ СЛИЗИСТОЙ" subtitle="Формула ЭПМ" icon={Layers} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <KeyPhrase>
              Главное правило: <strong className="uppercase text-blue-700">эпителий — не вся слизистая</strong>.
            </KeyPhrase>

            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Слизистая оболочка состоит из трёх основных слоёв:
            </p>

            <FormulaBox title="Формула ЭПМ" formula="Эпителий — Пластинка — Мышца" accent="blue" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <LayerCard icon={Shield} name="Эпителий" image="Стена" desc="Защитный поверхностный слой" />
              <LayerCard icon={Activity} name="Собственная пластинка" image="Снабжение и иммунитет" desc="Сосуды, нервы, лимфоид" />
              <LayerCard icon={Wind} name="Мышечная пластинка" image="Движение" desc="Сокращение, складки, секреция желёз" />
            </div>

            <Callout variant="info" emoji="🧱" title="Мини-заключение">
              Не путайте слизистую с одним эпителием: это всё равно что назвать клинику только входной дверью.
              Внутри ещё есть персонал, коммуникации и работающий мотор.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 5: ЭПИТЕЛИЙ ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader number="5" title="ПЕРВЫЙ СЛОЙ: ЭПИТЕЛИЙ" subtitle="Поверхность слизистой" icon={Shield} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Эпителий</strong> — это поверхностный слой слизистой,
              контактирующий с содержимым органа или внешней средой. Он образует защитный барьер, участвует в
              секреции и всасывании, а также быстро обновляется. Тип эпителия соответствует функции органа.
            </p>

            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/60 p-4">
              <div className="mb-2 font-bold uppercase text-blue-700">Логика соответствия:</div>
              <ul className="space-y-1.5 text-sm text-blue-900">
                <li>🏗️ Где есть трение → <strong>многослойный</strong> эпителий</li>
                <li>🌱 Где всасывание → <strong>цилиндрический</strong> эпителий с микроворсинками</li>
                <li>🌬️ Где очищение воздуха → <strong>реснитчатый</strong> эпителий</li>
                <li>🛢️ Где растяжение → <strong>переходный</strong> эпителий</li>
              </ul>
            </div>

            <Callout variant="info" emoji="🛡️" title="Мини-заключение">
              Эпителий — первый, кто встречает неприятности. Где трение — надевает броню, где всасывание —
              отращивает микроворсинки, где воздух — машет ресничками.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 6: СОБСТВЕННАЯ ПЛАСТИНКА ============= */}
        <SectionWrapper delay={0.35}>
          <SectionHeader number="6" title="ВТОРОЙ СЛОЙ: СОБСТВЕННАЯ ПЛАСТИНКА" subtitle="Lamina propria" icon={Activity} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Под эпителием находится <strong className="uppercase text-blue-700">собственная пластинка
              слизистой</strong> — <em>lamina propria</em>. Это рыхлая соединительная ткань, которую можно
              представить как центр снабжения и иммунной защиты.
            </p>

            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/60 p-4">
              <div className="mb-2 font-bold uppercase text-blue-700">Что в ней находится:</div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-blue-900 sm:text-sm">
                <div>🩸 Кровеносные сосуды</div>
                <div>🟣 Лимфатические сосуды</div>
                <div>⚡ Нервные окончания</div>
                <div>🔬 Фибробласты</div>
                <div>🛡️ Макрофаги</div>
                <div>🧬 Лимфоциты, плазмоциты</div>
                <div>🟣 Тучные клетки</div>
                <div>💧 Собственные железы</div>
                <div>🛡️ MALT-система</div>
              </div>
            </div>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Эпителий не имеет собственных кровеносных сосудов.</strong>{' '}
              Он получает кислород и питательные вещества путём диффузии из капилляров собственной пластинки.
            </KeyPhrase>

            <InfoBox color="rose" title="Ключевой принцип">
              <strong className="uppercase text-blue-700">Цвет слизистой — это цвет крови под эпителием.</strong>{' '}
              Поэтому изменения цвета сразу говорят о составе крови и перфузии.
            </InfoBox>

            <Callout variant="info" emoji="🛡️" title="Мини-заключение">
              Собственная пластинка — это тыл слизистой: здесь сосуды кормят эпителий, иммунные клетки несут
              службу, а микробы понимают, что зашли не в ту дверь.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 7: МЫШЕЧНАЯ ПЛАСТИНКА ============= */}
        <SectionWrapper delay={0.4}>
          <SectionHeader number="7" title="ТРЕТИЙ СЛОЙ: МЫШЕЧНАЯ ПЛАСТИНКА" subtitle="Lamina muscularis mucosae" icon={Wind} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Мышечная пластинка слизистой</strong>, или{' '}
              <em>lamina muscularis mucosae</em>, — тонкий слой гладких мышечных клеток. Представьте её как
              небольшой локальный мотор под слизистой оболочкой.
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <FunctionRow icon={Layers} label="Формирует складки слизистой" />
              <FunctionRow icon={Wind} label="Обеспечивает локальные движения" />
              <FunctionRow icon={CheckCircle2} label="Улучшает контакт с содержимым" />
              <FunctionRow icon={Droplets} label="Опорожняет протоки желёз" />
            </div>

            <FormulaBox title="Правило" formula="Мышца сокращается — слизистая движется." accent="blue" />

            <Callout variant="info" emoji="⚙️" title="Мини-заключение">
              Мышечная пластинка маленькая, но деятельная: чуть сократилась — и складка появилась, железа
              опорожнилась, слизистая пришла в движение.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 8: ПОДЛИЗЗИСТАЯ ОСНОВА ============= */}
        <SectionWrapper delay={0.45}>
          <SectionHeader number="8" title="ПОДЛИЗЗИСТАЯ ОСНОВА" subtitle="Tela submucosa" icon={Layers} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Под слизистой располагается <strong className="uppercase text-blue-700">подслизистая основа</strong>{' '}
              — <em>tela submucosa</em>. Она формально не входит в слизистую оболочку, но работает с ней как
              единая функциональная система.
            </p>

            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/60 p-4">
              <div className="mb-2 font-bold uppercase text-blue-700">Что в ней расположено:</div>
              <ul className="space-y-1 text-sm text-blue-900">
                <li>🩸 Более крупные кровеносные и лимфатические сосуды</li>
                <li>⚡ Нервные стволы</li>
                <li>🧠 Подслизистое нервное сплетение Мейсснера</li>
                <li>💧 В некоторых отделах — железы</li>
              </ul>
            </div>

            <InfoBox color="amber" title="Образ для запоминания">
              <strong className="uppercase text-blue-700">Слизистая — это город.</strong>{' '}
              Подслизистая основа — дороги, трубопроводы и коммуникации.
            </InfoBox>

            <Callout variant="info" emoji="🏙️" title="Мини-заключение">
              Подслизистая основа — как инженерная сеть большого города: если её не видно, это не значит, что
              без неё можно обойтись.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 9: КЛИНИЧЕСКИЙ ОСМОТР ============= */}
        <SectionWrapper delay={0.5}>
          <SectionHeader number="9" title="КЛИНИЧЕСКИЙ ОСМОТР" subtitle="Алгоритм ЦВВД" icon={Stethoscope} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Клинический осмотр слизистых всегда проводите по одному алгоритму.
            </p>

            <FormulaBox title="Формула ЦВВД" formula="Ц — цвет • В — влажность • В — ВКН • Д — дефекты" accent="blue" />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <AlgorithmCard letter="Ц" name="Цвет" desc="розовый, бледный, красный, синий, жёлтый" color="from-rose-400 to-pink-500" />
              <AlgorithmCard letter="В" name="Влажность" desc="влажная, сухая, липкая" color="from-cyan-400 to-sky-500" />
              <AlgorithmCard letter="В" name="ВКН" desc="1–2 сек норма, >2 сек плохо" color="from-violet-400 to-purple-500" />
              <AlgorithmCard letter="Д" name="Дефекты" desc="эрозии, язвы, петехии, налёты" color="from-amber-400 to-orange-500" />
            </div>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Цвет. Влажность. ВКН. Дефекты.</strong>{' '}
              Такой порядок снижает риск пропустить значимый признак.
            </KeyPhrase>

            <Callout variant="info" emoji="📋" title="Мини-заключение">
              Врач не гадает по цвету дёсен. Он действует по плану: цвет, влажность, ВКН, дефекты — и никакой
              клинической импровизации без оснований.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 10: ГДЕ ОСМАТРИВАТЬ ============= */}
        <SectionWrapper delay={0.55}>
          <SectionHeader number="10" title="ГДЕ ОСМАТРИВАТЬ" subtitle="Доступные зоны" icon={Eye} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <ZoneCard icon={Eye} name="Дёсны и губы" />
              <ZoneCard icon={Eye} name="Конъюнктива" />
              <ZoneCard icon={Eye} name="Вульва / препуций" />
              <ZoneCard icon={Eye} name="Вентр. поверхность языка" />
            </div>

            <InfoBox color="amber" title="Важно про пигментацию">
              Если дёсны пигментированы, не пытайтесь оценить цвет на чёрном участке. Найдите непигментированную
              область или исследуйте конъюнктиву, язык и другие доступные слизистые.
            </InfoBox>

            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Осмотр проводят при <strong className="text-blue-700">хорошем естественном или искусственном
              освещении</strong>.
            </p>

            <Callout variant="info" emoji="🔍" title="Мини-заключение">
              Если десна чёрная от пигмента, не спорьте с меланином. Просто найдите другой участок слизистой —
              конъюнктиву, язык или непигментированную зону.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 11: НОРМА ============= */}
        <SectionWrapper delay={0.6}>
          <SectionHeader number="11" title="НОРМА" subtitle="Как выглядит здоровая слизистая" icon={CheckCircle2} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Нормальная слизистая оболочка должна быть:
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <NormalRow icon={Activity} label="Равномерно розовая" />
              <NormalRow icon={Droplets} label="Влажная и блестящая" />
              <NormalRow icon={Shield} label="Без налётов, язв, эрозий, кровоизлияний" />
              <NormalRow icon={Brain} label="ВКН около 1–2 секунд" />
            </div>

            <FormulaBox title="Формула нормы" formula="Розовая, влажная, быстрая, целая." accent="emerald" />

            <Callout variant="info" emoji="✅" title="Мини-заключение">
              Идеальная слизистая — розовая, влажная, быстрая и целая. Почти как идеальный студент: отвечает
              быстро, выглядит хорошо и не имеет дефектов.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 12: ВКН ============= */}
        <SectionWrapper delay={0.65}>
          <SectionHeader number="12" title="ВРЕМЯ КАПИЛЛЯРНОГО НАПОЛНЕНИЯ" subtitle="ВКН / CRT" icon={Brain} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">ВКН</strong>, или <em>CRT (Capillary Refill Time)</em>,
              оценивают на непигментированном участке десны.
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
              <StepCard num="1" text="Надавите пальцем на слизистую на 1–2 секунды" />
              <StepCard num="2" text="Добейтесь локального побледнения" />
              <StepCard num="3" text="Отпустите палец" />
              <StepCard num="4" text="Засеките время восстановления розового цвета" />
            </div>

            <InfoBox color="rose" title="Что отражает ВКН">
              <strong className="uppercase text-blue-700">ВКН отражает периферическую перфузию.</strong>{' '}
              Однако его нельзя интерпретировать изолированно: оценивайте температуру конечностей, частоту и
              качество пульса, частоту дыхания, уровень сознания, артериальное давление и общую клиническую картину.
            </InfoBox>

            <Callout variant="info" emoji="⏱️" title="Мини-заключение">
              Надавили — побледнело — отпустили — порозовело. Если цвет возвращается вовремя, капилляры работают
              без опозданий.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 13: ИЗМЕНЕНИЯ СЛИЗИСТЫХ ============= */}
        <SectionWrapper delay={0.7}>
          <SectionHeader number="13" title="ИЗМЕНЕНИЯ СЛИЗИСТЫХ" subtitle="Дифференциальная диагностика цветов" icon={AlertTriangle} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            {/* 13.1 Бледность */}
            <ColorBlock
              icon={Snowflake}
              title="БЛЕДНОСТЬ"
              color="from-slate-300 to-slate-500"
              causes={['Анемия', 'Острая или хроническая кровопотеря', 'Нарушение периферической перфузии при шоке']}
              formula="Бледно — либо мало гемоглобина, либо мало крови, либо кровь плохо доходит до периферии."
              note="Бледная слизистая с нормальным или быстрым ВКН — анемия. Бледность + замедленный ВКН + холодные конечности + слабый пульс + угнетение → исключить шок."
              miniConclusion="Бледная слизистая — не признак застенчивости. Она напоминает врачу: проверь гемоглобин, объём крови и качество перфузии."
              emoji="🤍"
            />

            {/* 13.2 Ярко-красный */}
            <ColorBlock
              icon={Flame}
              title="ЯРКО-КРАСНЫЙ ЦВЕТ"
              color="from-rose-500 to-red-600"
              causes={['Локальное воспаление (гингивит, стоматит, конъюнктивит)', 'Лихорадка', 'Тепловой удар', 'Ранняя фаза сепсиса', 'Синдром системной воспалительной реакции']}
              formula="Красно — сосуды расширены."
              note="При выраженной вазодилатации ВКН ускоренный (<1 сек). При ухудшении сепсиса и нарушении микроциркуляции ВКН замедляется."
              miniConclusion="Ярко-красная слизистая словно говорит: «Сосуды открыты, движение активное!» Но не всегда это повод радоваться — иногда так начинается серьёзная системная проблема."
              emoji="🔴"
            />

            {/* 13.3 Синий/фиолетовый */}
            <ColorBlock
              icon={Wind}
              title="СИНИЙ ИЛИ ФИОЛЕТОВЫЙ ЦВЕТ"
              color="from-blue-600 to-indigo-700"
              causes={['Тяжёлая дыхательная недостаточность', 'Обструкция верхних дыхательных путей', 'Брахицефальный обструктивный синдром', 'Астма кошек', 'Пневмония', 'Сердечная недостаточность', 'Шунтирование крови справа налево', 'Метгемоглобинемия']}
              formula="Синее — кислорода мало."
              note="При тяжёлой анемии цианоз может быть менее заметным, несмотря на критическую гипоксемию. Визуальная оценка слизистых не заменяет пульсоксиметрию и газы крови."
              miniConclusion="Синяя слизистая — это не новый оттенок нормы. Когда слизистая синеет, разговоры заканчиваются: сначала дыхательные пути и кислород."
              emoji="🔵"
            />

            {/* 13.4 Жёлтый */}
            <ColorBlock
              icon={Sun}
              title="ЖЁЛТЫЙ ЦВЕТ"
              color="from-amber-400 to-yellow-500"
              causes={['До печени — гемолиз', 'В печени — поражение гепатоцитов', 'После печени — холестаз или обструкция желчных путей']}
              formula="До печени — в печени — после печени."
              note="Жёлтая окраска слизистых, склер и вентральной поверхности языка называется иктеричностью (желтухой). Причина — накопление билирубина."
              miniConclusion="Жёлтая слизистая — не результат солнечных ванн. Билирубин уже оставил свою подпись, и врачу нужно выяснить: проблема до печени, в печени или после неё."
              emoji="🟡"
            />

            {/* 13.5 Петехии и экхимозы */}
            <ColorBlock
              icon={CircleDot}
              title="ПЕТЕХИИ И ЭХИМОЗЫ"
              color="from-rose-700 to-red-900"
              causes={['Тромбоцитопения', 'Тромбоцитопатия', 'Коагулопатия', 'Васкулит', 'ДВС-синдром', 'Эрлихиоз и другие трансмиссивные инфекции', 'Отравление антикоагулянтными родентицидами']}
              formula="Красное бледнеет — сосуды расширены. Красное не бледнеет — кровь вышла из сосудов."
              note="Петехии — мелкие точечные кровоизлияния. Экхимозы — более крупные. Главный признак: они НЕ бледнеют при надавливании (диаскопии)."
              miniConclusion="Петехии не исчезают от надавливания так же уверенно, как студент не исчезает с экзамена при виде сложного вопроса. Если пятно не бледнеет — кровь уже вышла за пределы сосуда."
              emoji="🩸"
            />

            {/* 13.6 Сухость */}
            <ColorBlock
              icon={Droplets}
              title="СУХОСТЬ"
              color="from-amber-500 to-orange-600"
              causes={['Дегидратация', 'Лихорадка', 'Снижение секреции слюны', 'Антихолинергические препараты (атропин)', 'Хроническая болезнь почек']}
              formula="Сухо — жидкости мало или секреция снижена."
              note="Сухая слизистая выглядит тусклой, липкой, вязкой, иногда «тестообразной». Оценивайте вместе с тургором кожи, положением глазных яблок, массой тела, гематокритом, общим белком, электролитами."
              miniConclusion="Сухая и липкая слизистая — это не «особый тип текстуры». Обычно организм так сообщает: воды мало, секреции мало или пациенту требуется более тщательная оценка."
              emoji="🏜️"
            />

            {/* 13.7 Эрозии и язвы */}
            <ColorBlock
              icon={Scissors}
              title="ЭРОЗИИ И ЯЗВЫ"
              color="from-rose-400 to-pink-600"
              causes={['Калицивироз кошек', 'Уремия', 'Химические ожоги', 'Иммуноопосредованные заболевания', 'НПВС-индуцированные', 'Травма', 'Новообразования']}
              formula="Эрозия — поверхностно. Язва — глубоко."
              note="Эрозия — поверхностный дефект в пределах эпителия, не выходит за базальную мембрану. Заживает без рубца. Язва — глубокий дефект, проникает за базальную мембрану. Заживает с рубцом, может кровоточить."
              miniConclusion="Эрозия — это поверхностная неприятность. Язва — уже серьёзный ремонт с заходом глубже базальной мембраны. Не путайте царапину на стене с пробоиной в стене."
              emoji="✂️"
            />
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 14: КАРТА ПАМЯТИ ============= */}
        <SectionWrapper delay={0.75}>
          <SectionHeader number="14" title="КЛИНИЧЕСКАЯ КАРТА ПАМЯТИ" subtitle="8 образов для запоминания" icon={BookOpen} />
          <div className="space-y-3 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Представьте <strong className="uppercase text-blue-700">восемь клинических образов</strong>:
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <MemoryCard icon={Activity} color="from-emerald-500 to-teal-600" text="Розовая и влажная слизистая — норма" />
              <MemoryCard icon={Snowflake} color="from-slate-400 to-slate-600" text="Бледная и холодная — анемия, кровопотеря или шок" />
              <MemoryCard icon={Flame} color="from-rose-500 to-red-600" text="Ярко-красная — воспаление, лихорадка, вазодилатация" />
              <MemoryCard icon={Wind} color="from-blue-500 to-indigo-600" text="Синяя — гипоксия или нарушение оксигенации" />
              <MemoryCard icon={Sun} color="from-amber-400 to-yellow-500" text="Жёлтая — гипербилирубинемия, иктеричность" />
              <MemoryCard icon={CircleDot} color="from-rose-700 to-red-900" text="Красные точки, не исчезающие при давлении — петехии" />
              <MemoryCard icon={Droplets} color="from-amber-500 to-orange-600" text="Сухая — дегидратация или сниженная секреция" />
              <MemoryCard icon={Scissors} color="from-rose-400 to-pink-600" text="Язва — глубокое повреждение слизистой" />
            </div>

            <Callout variant="info" emoji="🧠" title="Мини-заключение">
              Розовая — спокойно наблюдаем. Бледная — ищем кровь и перфузию. Красная — думаем о расширении
              сосудов. Синяя — спасаем кислород. Жёлтая — расследуем билирубин.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= ФИНАЛЬНАЯ ФОРМУЛА ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
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
                <p className="text-xs font-medium text-blue-700/70">Итог осмотра</p>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-50/60 p-4 text-center">
              <div className="text-base font-black uppercase tracking-tight text-blue-700 sm:text-xl">
                Цвет. Влажность. ВКН. Дефекты.
              </div>
            </div>

            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-blue-700 sm:text-base">
              Затем задайте себе четыре вопроса:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-blue-900 sm:text-base">
              <li className="flex gap-2"><span className="text-blue-700">✓</span> Достаточна ли периферическая перфузия?</li>
              <li className="flex gap-2"><span className="text-blue-700">✓</span> Хватает ли животному кислорода?</li>
              <li className="flex gap-2"><span className="text-blue-700">✓</span> Нет ли дегидратации?</li>
              <li className="flex gap-2"><span className="text-blue-700">✓</span> Есть ли повреждение слизистой или кровоизлияние?</li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Слизистая оболочка</strong> — это не просто выстилка.
              Это барьер, иммунный орган, секреторная и рецепторная поверхность, а также доступный клинический
              индикатор состояния пациента.
            </p>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-sm text-blue-900">
              <div className="mb-1 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span className="font-bold uppercase text-amber-700">Мини-заключение</span>
              </div>
              Если на приёме вы вспомнили только четыре слова — «цвет, влажность, ВКН, дефекты» — вы уже не
              потеряетесь. А если ещё понимаете, почему они изменились, значит, клиническое мышление
              действительно включилось.
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.85 }}
          className="mb-8 rounded-3xl border-2 border-blue-300 bg-white p-6 text-center shadow-lg"
        >
          <Stethoscope className="mx-auto h-10 w-10 text-blue-600" />
          <h3 className="mt-3 text-xl font-black uppercase text-blue-700">
            Готов проверить себя?
          </h3>
          <p className="mt-2 text-sm text-blue-900/80">
            81 вопрос по слизистым оболочкам — на закрепление материала. Включи вкладку
            <strong className="text-blue-700"> «Слизистые — проверь себя» </strong>
            в верхней навигации.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1 text-blue-700">
            <ArrowRight className="h-4 w-4" />
            <span className="text-xs font-bold uppercase">Перейти к тесту</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-blue-700/60">
          Гайд по слизистым оболочкам собак и кошек • Строение, функции и клиническая оценка •
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

function LocationChip({ icon: Icon, label }: { icon: typeof Droplets; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50/60 px-3 py-2">
      <Icon className="h-4 w-4 text-blue-600" />
      <span className="text-sm font-medium text-blue-900">{label}</span>
    </div>
  )
}

function FunctionCard({
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
          <div className="text-[10px] uppercase tracking-wide text-blue-700/60">из БАРС</div>
        </div>
      </div>
      <p className="text-xs text-blue-900/80">{desc}</p>
    </div>
  )
}

function SourceChip({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50/40 px-3 py-2 text-xs text-blue-900">
      💧 {label}
    </div>
  )
}

function LayerCard({
  icon: Icon,
  name,
  image,
  desc,
}: {
  icon: typeof Shield
  name: string
  image: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 p-4 text-center">
      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-sm font-black uppercase text-blue-900">{name}</div>
      <div className="mt-0.5 text-[10px] italic text-blue-700/70">Образ: {image}</div>
      <div className="mt-1 text-xs text-blue-900/80">{desc}</div>
    </div>
  )
}

function FunctionRow({ icon: Icon, label }: { icon: typeof Wind; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50/40 px-3 py-2 text-sm text-blue-900">
      <Icon className="h-4 w-4 text-blue-600" />
      {label}
    </div>
  )
}

function AlgorithmCard({
  letter,
  name,
  desc,
  color,
}: {
  letter: string
  name: string
  desc: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-3 text-center text-white shadow-md`}>
      <div className="text-3xl font-black">{letter}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-wide">{name}</div>
      <div className="mt-1 text-[10px] opacity-90">{desc}</div>
    </div>
  )
}

function ZoneCard({ icon: Icon, name }: { icon: typeof Eye; name: string }) {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 p-3 text-center">
      <Icon className="mx-auto h-6 w-6 text-blue-600" />
      <div className="mt-1 text-xs font-bold text-blue-900">{name}</div>
    </div>
  )
}

function NormalRow({ icon: Icon, label }: { icon: typeof Activity; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/50 px-3 py-2 text-sm text-blue-900">
      <Icon className="h-4 w-4 text-emerald-600" />
      {label}
    </div>
  )
}

function StepCard({ num, text }: { num: string; text: string }) {
  return (
    <div className="rounded-2xl border-2 border-violet-200 bg-violet-50/50 p-3">
      <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-xs font-black text-white shadow-md">
        {num}
      </div>
      <div className="text-xs leading-relaxed text-blue-900">{text}</div>
    </div>
  )
}

function ColorBlock({
  icon: Icon,
  title,
  color,
  causes,
  formula,
  note,
  miniConclusion,
  emoji,
}: {
  icon: typeof Flame
  title: string
  color: string
  causes: string[]
  formula: string
  note: string
  miniConclusion: string
  emoji: string
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-lg`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-base font-black uppercase text-blue-900">{title}</div>
            <div className="text-lg">{emoji}</div>
          </div>
        </div>

        <div className="mb-3 rounded-xl bg-blue-50/40 p-2.5 text-xs text-blue-900">
          <div className="mb-1 font-bold uppercase text-blue-700">Причины:</div>
          <div className="flex flex-wrap gap-1">
            {causes.map(c => (
              <span key={c} className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-blue-900 shadow-sm">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3 rounded-xl bg-amber-50/60 p-2.5">
          <div className="text-[10px] font-bold uppercase text-amber-700">Формула</div>
          <div className="mt-0.5 text-xs font-bold text-blue-900">{formula}</div>
        </div>

        <p className="mb-3 text-xs leading-relaxed text-blue-900/80">{note}</p>

        <div className="rounded-xl bg-blue-50/60 p-2.5 text-xs text-blue-900">
          <span className="font-bold">{emoji} Мини-заключение: </span>
          {miniConclusion}
        </div>
      </div>
    </div>
  )
}

function MemoryCard({
  icon: Icon,
  color,
  text,
}: {
  icon: typeof Activity
  color: string
  text: string
}) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl bg-gradient-to-br ${color} p-3 text-white shadow-md`}>
      <Icon className="h-6 w-6 flex-shrink-0" />
      <span className="text-xs font-medium leading-tight">{text}</span>
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
