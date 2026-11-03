'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  Heart,
  Gauge,
  Waves,
  Droplets,
  Eye,
  Brain,
  Shield,
  AlertTriangle,
  Stethoscope,
  Ear,
  Microscope,
  BookOpen,
  Award,
  Lightbulb,
  ArrowRight,
  Zap,
  FlaskConical,
  Thermometer,
} from 'lucide-react'

export default function PulseInfoApp({ onNavigateToQuiz }: { onNavigateToQuiz?: () => void }) {
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
            {/* Декоративная волна справа */}
            <div className="absolute right-6 top-6 opacity-25">
              <Waves className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <FlaskConical className="h-3.5 w-3.5" /> Гайд для будущего ветеринара
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Пульс и артериальное давление
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-blue-50 sm:text-lg">
                Волна давления и сила потока: Два голоса гемодинамики.
                От латинского «pulsus» до мишеней гипертензии — ГЛПС.
              </p>
            </div>
          </div>

          {/* Key formula chips */}
          <div className="grid grid-cols-1 gap-3 border-t-2 border-blue-200 p-5 sm:grid-cols-3 sm:p-6">
            <FormulaChip label="Пульс" value="Пульс — ВОЛНА" icon={Waves} />
            <FormulaChip label="Давление" value="Давление — СИЛА" icon={Gauge} />
            <FormulaChip label="Мишени гипертензии" value="ГЛПС — мишени гипертензии" icon={Eye} />
          </div>
        </motion.section>

        {/* ====================================================================== */}
        {/* ============= ЧАСТЬ I. ПУЛЬС ============= */}
        {/* ====================================================================== */}
        <PartHeader roman="I" title="ПУЛЬС" subtitle="Волна давления в артериях" />

        {/* ============= РАЗДЕЛ 1: ОПРЕДЕЛЕНИЕ ПУЛЬСА ============= */}
        <SectionWrapper delay={0.1}>
          <SectionHeader number="1" title="ОПРЕДЕЛЕНИЕ ПУЛЬСА" subtitle="Что такое пульс?" icon={Activity} />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Пульс</strong> (от лат.{' '}
              <em>pulsus</em> — «толчок», «удар») — это ритмическое колебание стенки артерии,
              возникающее при каждом сердечном сокращении. Когда левый желудочек выбрасывает
              порцию крови в аорту, упругая стенка аорты растягивается — и по сосудам бежит{' '}
              <strong className="text-blue-700">волна давления</strong>, которую мы и ощущаем
              пальцами.
            </p>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Пульс — это ВОЛНА.</strong>{' '}
              Не кровь течёт, а давление бежит по стенке артерии — как «мексиканская волна»
              на стадионе: зрители (стенки) встают и садятся, а сама волна летит вдоль трибун.
            </KeyPhrase>

            <InfoBox color="blue" title="Скорость волны ≠ скорость крови">
              <strong className="uppercase text-blue-700">Это важно!</strong>{' '}
              Волна давления бежит со скоростью{' '}
              <strong className="text-blue-700">5–8 м/с</strong> (аорта) — почти как велосипедист.
              А сама кровь течёт со скоростью всего <strong className="text-blue-700">0,3–0,5 м/с</strong> —
              медленная река. Поэтому пульс на запястье ощущается почти мгновенно после удара сердца,
              хотя кровь доходит до пальцев гораздо дольше.
            </InfoBox>

            <FormulaBox
              title="Суть пульса"
              formula="Пульс = ВОЛНА ДАВЛЕНИЯ по стенке артерии"
              accent="blue"
            />

            <Callout variant="info" emoji="🌊" title="Мексиканская волна">
              Представьте стадион: один сектор встаёт, потом соседний, потом следующий. Так и пульс —
              стенка аорты растянулась, передала импульс следующему участку, тот — следующему.
              Зрители на месте, волна в пути. <strong className="text-blue-700">Кровь — это зрители.
              Пульс — это волна.</strong>
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 2: АНАТОМИЯ АРТЕРИАЛЬНОЙ СТЕНКИ ============= */}
        <SectionWrapper delay={0.15}>
          <SectionHeader
            number="2"
            title="АНАТОМИЯ АРТЕРИАЛЬНОЙ СТЕНКИ"
            subtitle="Три оболочки артерии"
            icon={Shield}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Стенка артерии — это не просто «труба». Это <strong className="text-blue-700">трёхслойная
              конструкция</strong>, каждый слой которой играет свою роль. Чтобы понять, как рождается
              и бежит пульс, нужно знать анатомию стенки — «три слоя зимней куртки».
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <TunicCard
                layer="1"
                name="Tunica intima"
                ruName="Внутренняя оболочка"
                desc="Один слой эндотелия на базальной мембране. Гладкая, как лёд, чтобы кровь не тромбировалась."
                metaphor="Подкладка куртки — гладкая шёлковая ткань внутри"
                color="from-cyan-500 to-sky-600"
              />
              <TunicCard
                layer="2"
                name="Tunica media"
                ruName="Средняя оболочка"
                desc="Эластические мембраны + гладкие миоциты. Самый толстый слой в крупных артериях. Пружинит — это и есть «амортизатор» пульса."
                metaphor="Утеплитель куртки — упругий синтепон, держит форму"
                color="from-blue-500 to-cyan-600"
              />
              <TunicCard
                layer="3"
                name="Tunica adventitia"
                ruName="Наружная оболочка"
                desc="Рыхлая волокнистая соединительная ткань с сосудами сосудов (vasa vasorum). Крепит артерию к окружающим тканям."
                metaphor="Верхняя ткань куртки — плотная ткань снаружи"
                color="from-sky-500 to-blue-700"
              />
            </div>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Три слоя зимней куртки:</strong>{' '}
              подкладка (intima) скользит, утеплитель (media) пружинит, верхняя ткань (adventitia)
              защищает. Уберите media — и куртка перестанет греть, а артерия перестанет пульсировать.
            </KeyPhrase>

            <InfoBox color="amber" title="Эластичность = амортизация">
              <strong className="uppercase text-blue-700">Именно media делает пульс возможным.</strong>{' '}
              В аорте media — это сплошные эластические мембраны (50–70 слоёв!). Они растягиваются
              под ударом крови и спружинивают обратно, превращая прерывистый выброс желудочка в
              непрерывный поток в капиллярах. <strong className="text-blue-700">Без media —
              пульс исчезает.</strong>
            </InfoBox>

            <Callout variant="info" emoji="🧥" title="Мини-заключение">
              Стенка артерии — зимняя куртка с тремя слоями. Intima скользит, media пружинит,
              adventitia защищает. Когда мы щупаем пульс — мы щупаем работу media, эластической
              «пружины» артерии. У пожилых животных media кальцинируется — и «пульс становится
              жёстким», как стальная проволока.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 3: ФИЗИОЛОГИЯ ПУЛЬСОВОЙ ВОЛНЫ ============= */}
        <SectionWrapper delay={0.2}>
          <SectionHeader
            number="3"
            title="ФИЗИОЛОГИЯ ПУЛЬСОВОЙ ВОЛНЫ"
            subtitle="Как рождается пульс"
            icon={Waves}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Пульс рождается в левом желудочке и бежит по артериям. Чтобы понять процесс,
              разобьём его на <strong className="text-blue-700">4 шага формирования</strong>:
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <StepCard
                num="1"
                title="Систола ЛЖ"
                desc="Левый желудочек сокращается и выбрасывает ударный объём (УО) крови в аорту под высоким давлением."
                icon={Heart}
                color="from-rose-500 to-pink-600"
              />
              <StepCard
                num="2"
                title="Растяжение аорты"
                desc="Эластическая стенка аорты растягивается, принимая порцию крови. Аорта работает как «воздушный шарик» — накачивается."
                icon={Shield}
                color="from-blue-500 to-cyan-600"
              />
              <StepCard
                num="3"
                title="Распространение волны"
                desc="Растянутый участок аорты спружинивает обратно, передавая давление следующему участку. Волна бежит по артериям."
                icon={Waves}
                color="from-sky-500 to-blue-700"
              />
              <StepCard
                num="4"
                title="Поступление в капилляры"
                desc="Благодаря эластичности аорты прерывистый выброс превращается в непрерывный ток крови в капиллярах. Пульс гаснет."
                icon={Droplets}
                color="from-cyan-500 to-teal-600"
              />
            </div>

            <FormulaBox
              title="Суть Windkessel-эффекта"
              formula="Аорта = амортизатор • Капилляры = непрерывный поток"
              accent="blue"
            />

            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Величина пульса</strong> зависит от{' '}
              <strong className="text-blue-700">трёх факторов</strong> — они определяют, насколько
              «пружинит» волна и насколько сильно вы ощутите её пальцем:
            </p>

            {/* TABLE 1: 3 фактора, влияющих на пульс */}
            <TableGrid
              title="Таблица: 3 фактора, определяющих пульс"
              headers={['Фактор', 'Влияние на пульс', 'Клинический пример']}
              rows={[
                [
                  'Ударный объём (УО)',
                  '↑ УО → ↑ амплитуда пульса (большая волна)',
                  'Аортальная недостаточность — мощный пульс',
                ],
                [
                  'Эластичность артерии',
                  '↑ эластичность → нормальный наполненный пульс',
                  'У стариков: ↓ эластичность → жёсткий, малый пульс',
                ],
                [
                  'Периферическое сосудистое сопротивление (ПСС)',
                  '↑ ПСС → ↑ напряжение пульса (трудно сжать)',
                  'Гипертония: пульс напряжённый, «стальной»',
                ],
              ]}
              accent="blue"
            />

            <InfoBox color="amber" title="Запомнить три фактора">
              <strong className="uppercase text-blue-700">УО • Эластичность • ПСС</strong> — это
              «треугольник» пульса. Уберите любой угол — и пульс изменится. Большой УО = сильная
              волна. Мягкая артерия = нормальный пульс. Высокое ПСС = напряжённый пульс.
            </InfoBox>

            <Callout variant="info" emoji="🎾" title="Аналогия с мячом">
              Пульс — это отскок мяча. УО — сила броска (чем сильнее бросил, тем выше отскок).
              Эластичность — материал мяча (резиновый отскочит, тряпковый — нет). ПСС — плотность
              пола (на бетоне отскочит звонко, на песке — увязнет). Три фактора — три угла треугольника.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 4: ПАТОФИЗИОЛОГИЯ ПУЛЬСА ============= */}
        <SectionWrapper delay={0.25}>
          <SectionHeader
            number="4"
            title="ПАТОФИЗИОЛОГИЯ ПУЛЬСА"
            subtitle="8 «красных флагов»"
            icon={AlertTriangle}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Изменение пульса — это <strong className="text-blue-700">«красный флаг»</strong> организма.
              Каждый тип патологического пульса — это отдельный сигнал бедствия. Знать их — значит
              читать пациента как открытую книгу.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <RedFlagCard
                name="Тахикардия"
                definition="ЧСС выше нормы"
                norm="Собаки: >140/мин • Кошки: >180/мин (в покое)"
                metaphor="🏃 «Сердце бежит марафон, когда пациент сидит»"
                cause="Лихорадка, гиповолемия, боль, гипертиреоз, сепсис"
                color="from-rose-500 to-red-600"
              />
              <RedFlagCard
                name="Брадикардия"
                definition="ЧСС ниже нормы"
                norm="Собаки: <60/мин • Кошки: <140/мин"
                metaphor="🐌 «Сердце decided: сегодня выходной»"
                cause="Блокады, гипотиреоз, гиперкалиемия, ваготония, передозировка бета-блокаторов"
                color="from-violet-500 to-purple-600"
              />
              <RedFlagCard
                name="Аритмия"
                definition="Нарушение ритма"
                norm="Интервалы между ударами неодинаковые"
                metaphor="🥁 «Барабанщик сбился с ритма: то быстро, то пауза»"
                cause="Фибрилляция предсердий, экстрасистолия, блокады"
                color="from-amber-500 to-orange-600"
              />
              <RedFlagCard
                name="Дефицит пульса"
                definition="ЧСС (аускультация) > Чпульса (пальпация)"
                norm="Есть сокращения без пульсовой волны"
                metaphor="🔫 «Выстрел без эха» — желудочек «выстрелил», но пульса нет"
                cause="ФП, экстрасистолия — слабые сокращения не дают волны"
                color="from-rose-500 to-pink-600"
              />
              <RedFlagCard
                name="Парадоксальный пульс"
                definition="Пульс ослабевает на вдохе"
                norm="В норме дыхание почти не влияет на пульс"
                metaphor="🌫️ «Задушенная волна» — вдох «душит» пульс"
                cause="Тампонада сердца, тяжёлая дыхательная недостаточность"
                color="from-cyan-500 to-teal-600"
              />
              <RedFlagCard
                name="Нитевидный пульс"
                definition="Очень слабый, тонкий пульс"
                norm="Едва ощутим под пальцем"
                metaphor="🕸️ «Паутинка» — почти не чувствуешь"
                cause="Тяжёлый шок, массивная кровопотеря, сепсис"
                color="from-slate-500 to-gray-600"
              />
              <RedFlagCard
                name="Твёрдый пульс"
                definition="Очень напряжённый, трудно сжать"
                norm="Стенка как проволока"
                metaphor="🔧 «Стальная проволока» — пальцу больно сжимать"
                cause="Артериальная гипертензия, атеросклероз, кальциноз media"
                color="from-blue-500 to-indigo-700"
              />
              <RedFlagCard
                name="Мягкий пульс"
                definition="Слабо напряжённый, легко сжать"
                norm="Палец проваливается"
                metaphor=" marshmallow «Маршмэллоу» — мягкая конфетка"
                cause="Гиповолемия, сердечная недостаточность, шок"
                color="from-emerald-500 to-teal-600"
              />
            </div>

            <KeyPhrase>
              <strong className="uppercase text-blue-700">8 красных флагов:</strong>{' '}
              Тахикардия • Брадикардия • Аритмия • Дефицит пульса • Парадоксальный пульс •
              Нитевидный • Твёрдый • Мягкий. Каждый флаг — отдельная история болезни.
            </KeyPhrase>

            <InfoBox color="rose" title="Дефицит пульса — критический знак">
              <strong className="uppercase text-blue-700">Всегда сравнивайте аускультацию и пальпацию!</strong>{' '}
              Если ЧСС на слух 180, а пульс на пальцах 120 — это <strong className="text-blue-700">дефицит
              пульса</strong>. Сердце сокращается 180 раз, но 60 сокращений слишком слабые, чтобы
              дать волну. Чаще всего это <strong className="text-blue-700">фибрилляция предсердий</strong>.
            </InfoBox>

            <Callout variant="info" emoji="🚩" title="Мини-заключение">
              Каждый патологический пульс — это «подсказка» организма. Тахикардия = тревога. Брадикардия =
              блок. Дефицит = аритмия. Твёрдый = гипертония. Нитевидный = шок. Парадоксальный = тампонада.
              Щупай не спеша — и пульс расскажет всё.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 5: КЛИНИЧЕСКИЙ ОСМОТР ПУЛЬСА ============= */}
        <SectionWrapper delay={0.3}>
          <SectionHeader
            number="5"
            title="КЛИНИЧЕСКИЙ ОСМОТР ПУЛЬСА"
            subtitle="Пальпация и «Правило 6 Пальцев»"
            icon={Stethoscope}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Клинический осмотр пульса</strong> — это
              не просто «посчитать удары». Это комплексная оценка шести параметров, которая
              занимает 60 секунд и рассказывает о гемодинамике больше, чем УЗИ.
            </p>

            <div className="rounded-2xl border-2 border-blue-300 bg-blue-50/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-blue-700" />
                <h4 className="text-sm font-black uppercase tracking-wide text-blue-700">
                  Точки пальпации пульса
                </h4>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-3">
                  <div className="text-xs font-bold uppercase text-blue-700">🐶 Собаки</div>
                  <ul className="mt-1 space-y-1 text-xs text-blue-900">
                    <li>• <strong>A. femoralis</strong> (на бедре) — основная точка</li>
                    <li>• <strong>A. brachialis</strong> (на плечевой мышце)</li>
                    <li>• <strong>A. caudalis</strong> (хвостовая артерия, под хвостом)</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-3">
                  <div className="text-xs font-bold uppercase text-blue-700">🐱 Кошки</div>
                  <ul className="mt-1 space-y-1 text-xs text-blue-900">
                    <li>• <strong>A. femoralis</strong> (на бедре) — основная точка</li>
                    <li>• <strong>A. caudalis</strong> (хвостовая артерия)</li>
                  </ul>
                </div>
              </div>
            </div>

            <InfoBox color="rose" title="🚨 Правило двух пальцев — НИКОГДА большой палец!">
              <strong className="uppercase text-blue-700">Никогда не щупайте пульс большим пальцем!</strong>{' '}
              У большого пальца есть <strong className="text-blue-700">собственный пульс</strong> —
              вы почувствуете свой пульс и примете его за пульс пациента. Используйте{' '}
              <strong className="text-blue-700">указательный и средний пальцы</strong> — «правило
              двух пальцев». Это золотой стандарт пальпации.
            </InfoBox>

            <FormulaBox
              title="Правило двух пальцев"
              formula="Указательный + Средний • НЕ Большой!"
              accent="rose"
            />

            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">«Правило 6 Пальцев»</strong> — это шесть
              параметров пульса, которые оценивают пальпаторно. Каждый начинается на букву «П»
              (в русской транскрипции — «Правило 6 П»):
            </p>

            {/* TABLE 2: 6 параметров пульса — Правило 6 Пальцев */}
            <TableGrid
              title="Таблица: 6 параметров пульса — «Правило 6 Пальцев»"
              headers={['№', 'Параметр', 'Что оцениваем', 'Норма / отклонения']}
              rows={[
                ['1', 'Частота', 'Сколько ударов в минуту', 'Соб: 70–140 • Кош: 120–220 (в покое)'],
                ['2', 'Ритм', 'Одинаковые ли интервалы', 'Ритмичный = норма • Аритмичный = патология'],
                ['3', 'Наполнение', 'Насколько артерия наполняется', 'Полный = норма • Слабый = гиповолемия'],
                ['4', 'Напряжение', 'Усилие для сжатия артерии', 'Мягкий = норма • Твёрдый = гипертензия'],
                ['5', 'Величина', 'Амплитуда волны под пальцем', 'Большой = объём • Малый = стеноз/шок'],
                ['6', 'Симметрия', 'Одинаковый ли пульс слева и справа', 'Симметричный = норма • Асимметрия = тромб'],
              ]}
              accent="blue"
            />

            <KeyPhrase>
              <strong className="uppercase text-blue-700">6 Пальцев:</strong>{' '}
              Частота • Ритм • Наполнение • Напряжение • Величина • Симметрия. Каждый параметр —
              отдельный «отсчёт» в акте осмотра.
            </KeyPhrase>

            <InfoBox color="blue" title="Метод подсчёта">
              <strong className="uppercase text-blue-700">Для ритмичного пульса:</strong> считайте
              удары 15 секунд и умножьте на 4 (15с × 4).{' '}
              <strong className="uppercase text-blue-700">Для аритмии:</strong> считайте полный{' '}
              <strong className="text-blue-700">60 секунд</strong> — иначе среднее будет неверным.
              Каждый экстрасистол уйдёт из статистики.
            </InfoBox>

            <FormulaBox
              title="Формула подсчёта"
              formula="Ритмичный: 15с × 4 • Аритмичный: 60с"
              accent="blue"
            />

            <Callout variant="warning" emoji="🥇" title="Золотое правило дефицита пульса">
              <strong className="uppercase text-blue-700">ВСЕГДА одновременно:</strong>{' '}
              аускультация сердца + пальпация пульса. Сравните ЧСС (на слух) с Чпульса (на пальцах).
              Если аускультация &gt; пальпация → это <strong className="text-blue-700">дефицит пульса</strong>,
              который указывает на фибрилляцию предсердий или экстрасистолию. Это самый недооценённый
              клинический приём.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ====================================================================== */}
        {/* ============= ЧАСТЬ II. АРТЕРИАЛЬНОЕ ДАВЛЕНИЕ ============= */}
        {/* ====================================================================== */}
        <PartHeader
          roman="II"
          title="АРТЕРИАЛЬНОЕ ДАВЛЕНИЕ"
          subtitle="Сила потока крови"
        />

        {/* ============= РАЗДЕЛ 6: ОПРЕДЕЛЕНИЕ АД ============= */}
        <SectionWrapper delay={0.35}>
          <SectionHeader
            number="6"
            title="ОПРЕДЕЛЕНИЕ АРТЕРИАЛЬНОГО ДАВЛЕНИЯ"
            subtitle="САД • ДАД • MAP"
            icon={Gauge}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Артериальное давление (АД)</strong> — это
              сила, с которой кровь давит на стенки артерий. Это <strong className="text-blue-700">не
              волна, а постоянная сила</strong> — давление в системе в любой момент времени. АД
              описывается <strong className="text-blue-700">тремя параметрами</strong>:
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <BPParamCard
                symbol="САД"
                name="Систолическое"
                desc="Давление в момент систолы ЛЖ (максимальное). Пик на кривой АД."
                color="from-rose-500 to-red-600"
              />
              <BPParamCard
                symbol="ДАД"
                name="Диастолическое"
                desc="Давление в момент диастолы (минимальное). Зависит от ПСС."
                color="from-blue-500 to-cyan-600"
              />
              <BPParamCard
                symbol="MAP"
                name="Среднее"
                desc="Среднее давление за цикл. Определяет перфузию органов."
                color="from-violet-500 to-purple-600"
              />
            </div>

            <FormulaBox
              title="Формула MAP"
              formula="MAP = ДАД + 1/3 × (САД − ДАД)"
              accent="blue"
            />

            <InfoBox color="blue" title="Почему именно MAP?">
              <strong className="uppercase text-blue-700">MAP — главный критерий перфузии.</strong>{' '}
              Если MAP &lt; 80 мм рт.ст. — органы не получают кислород. Если MAP &gt; 120 — органы
              травмируются давлением. Цель любой терапии — держать MAP в коридоре{' '}
              <strong className="text-blue-700">80–120 мм рт.ст.</strong>
            </InfoBox>

            {/* TABLE 3: Нормы АД у собак и кошек */}
            <TableGrid
              title="Таблица: Нормы АД у собак и кошек (мм рт.ст.)"
              headers={['Вид', 'САД', 'ДАД', 'MAP']}
              rows={[
                ['🐶 Собаки', '110–160', '60–90', '80–120'],
                ['🐱 Кошки', '120–170', '70–100', '90–130'],
              ]}
              accent="blue"
            />

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Давление — это СИЛА.</strong>{' '}
              Пульс — это волна (динамическое явление), а давление — это сила (статическая
              характеристика). Пульс — «голос», а давление — «громкость» этого голоса.
            </KeyPhrase>

            <Callout variant="info" emoji="📻" title="Два голоса гемодинамики">
              Пульс и давление — это «стерео» гемодинамики. Пульс говорит о ритме и наполнении,
              давление — о силе потока. Слушайте оба голоса — и пациент зазвучит понятно.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 7: БАРОРЕЦЕПТОРЫ ============= */}
        <SectionWrapper delay={0.4}>
          <SectionHeader
            number="7"
            title="БАРОРЕЦЕПТОРЫ"
            subtitle="Датчики давления организма"
            icon={Gauge}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Барорецепторы</strong> — это «датчики
              давления» организма. Они расположены в двух ключевых точках кровеносной системы и
              непрерывно измеряют растяжение стенки сосудов — то есть текущее АД.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <BaroCard
                location="Дуга аорты"
                nerve="N. vagus (X пара ЧМН)"
                desc="Рецепторы в стенке дуги аорты реагируют на растяжение. Сигнал идёт по блуждающему нерву в продолговатый мозг."
                color="from-rose-500 to-pink-600"
              />
              <BaroCard
                location="Каротидный синус"
                nerve="N. glossopharyngeus (IX пара ЧМН)"
                desc="Рецепторы в месте бифуркации общей сонной артерии. Сигнал идёт по языкоглоточному нерву."
                color="from-blue-500 to-cyan-600"
              />
            </div>

            <FormulaBox
              title="Золотая пара датчиков"
              formula="Дуга аорты (X) + Каротидный синус (IX)"
              accent="blue"
            />

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Два датчика — две пары черепных нервов.</strong>{' '}
              N. vagus (X) читает аорту, N. glossopharyngeus (IX) читает сонную артерию.
              Сигнал летит в <strong className="text-blue-700">продолговатый мозг</strong> — в
              сосудодвигательный центр.
            </KeyPhrase>

            <InfoBox color="blue" title="Как работает барорецептор">
              <strong className="uppercase text-blue-700">↑ АД → растяжение стенки → ↑ импульсации.</strong>{' '}
              Барорецепторы — это растяжимые «натянутые струны». Чем сильнее растягивается стенка
              (выше давление), тем чаще они «щёлкают» импульсами в мозг. Мозг понимает: «давление
              повысилось», и запускает рефлекс.
            </InfoBox>

            <Callout variant="info" emoji="🎛️" title="Мини-заключение">
              Барорецепторы — это термометр кровеносной системы. Они «меряют» давление в аорте и
              сонной артерии, передают данные в мозг через вагус и языкоглоточный нерв. Без этих
              датчиков организм был бы «слеп» к собственному давлению.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 8: ФИЗИОЛОГИЯ РЕГУЛЯЦИИ АД ============= */}
        <SectionWrapper delay={0.45}>
          <SectionHeader
            number="8"
            title="ФИЗИОЛОГИЯ РЕГУЛЯЦИИ АД"
            subtitle="Краткосрочная и долгосрочная"
            icon={Brain}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Организм регулирует АД <strong className="text-blue-700">в двух временных масштабах</strong>:
              краткосрочном (секунды-минуты) и долгосрочном (часы-дни). Каждый работает через свои
              механизмы.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <RegCard
                type="КРАТКОСРОЧНАЯ"
                timeScale="Секунды → минуты"
                mechanism="Барорецепторный рефлекс + хеморецепторы"
                desc="↑ АД → барорецепторы ↑ → ↓ симпатус → ↓ ЧСС + ↓ ПСС → ↓ АД. И наоборот. Плюс хеморецепторы реагируют на pO₂, pCO₂, pH."
                color="from-cyan-500 to-sky-600"
                icon={Zap}
              />
              <RegCard
                type="ДОЛГОСРОЧНАЯ"
                timeScale="Часы → дни"
                mechanism="РААС-каскад"
                desc="Ангиотензин II → сужение сосудов + альдостерон → задержка Na⁺/H₂O → ↑ объём → ↑ АД. Это почечный контур регуляции."
                color="from-violet-500 to-purple-600"
                icon={Droplets}
              />
            </div>

            <FormulaBox
              title="РААС-каскад"
              formula="Ангиотензиноген → AT I → AT II → альдостерон"
              accent="blue"
            />

            <div className="rounded-2xl border-2 border-blue-300 bg-blue-50/60 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Цепочка РААС:
              </div>
              <ol className="mt-2 space-y-1 text-xs text-blue-900 sm:text-sm">
                <li>
                  <strong className="text-blue-700">1.</strong> Печень выделяет ангиотензиноген
                </li>
                <li>
                  <strong className="text-blue-700">2.</strong> Почки выделяют ренин (при ↓ АД)
                </li>
                <li>
                  <strong className="text-blue-700">3.</strong> Ренин расщепляет ангиотензиноген → ангиотензин I
                </li>
                <li>
                  <strong className="text-blue-700">4.</strong> АПФ (в лёгких) превращает AT I → AT II
                </li>
                <li>
                  <strong className="text-blue-700">5.</strong> AT II сужает сосуды + стимулирует альдостерон
                </li>
                <li>
                  <strong className="text-blue-700">6.</strong> Альдостерон задерживает Na⁺ и H₂O → ↑ объём → ↑ АД
                </li>
              </ol>
            </div>

            <InfoBox color="amber" title="Где лечить?">
              <strong className="uppercase text-blue-700">Ингибиторы АПФ</strong> (беназеприл, эналаприл)
              блокируют превращение AT I → AT II. <strong className="text-blue-700">Блокаторы
              рецепторов AT II</strong> (телмисартан — препарат выбора у кошек) блокируют рецептор
              ангиотензина. <strong className="text-blue-700">Спиронолактон</strong> блокирует
              альдостерон. Каждое звено РААС — отдельная мишень терапии.
            </InfoBox>

            <Callout variant="info" emoji="⏱️" title="Мини-заключение">
              Краткосрочно АД держит барорецепторный рефлекс — это «аварийный клапан» на секунды.
              Долгосрочно АД держит РААС — это «стратегический контур» на дни. Если пациент
              гипертоник — нужно бить по РААС, потому что барорецепторы «настраиваются» на новое
              давление и не помогают.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= РАЗДЕЛ 9: ПАТОФИЗИОЛОГИЯ АД ============= */}
        <SectionWrapper delay={0.5}>
          <SectionHeader
            number="9"
            title="ПАТОФИЗИОЛОГИЯ АД"
            subtitle="Гипертензия и гипотензия"
            icon={AlertTriangle}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              Отклонения АД — это <strong className="text-blue-700">две крайности</strong>: гипертензия
              (давление высокое) и гипотензия (давление низкое). Каждая — это сигнал, что система
              регуляции сломалась.
            </p>

            {/* A. ГИПЕРТЕНЗИЯ */}
            <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Gauge className="h-5 w-5 text-rose-600" />
                <h4 className="text-sm font-black uppercase tracking-wide text-rose-700">
                  A. Гипертензия
                </h4>
              </div>

              <p className="text-sm text-blue-900">
                <strong className="uppercase text-rose-700">Артериальная гипертензия</strong> — это
                стойкое повышение АД: <strong className="text-rose-700">САД &gt; 160 мм рт.ст.</strong>{' '}
                или <strong className="text-rose-700">ДАД &gt; 90 мм рт.ст.</strong>
              </p>

              <FormulaBox
                title="Диагноз гипертензии"
                formula="САД > 160 / ДАД > 90 мм рт.ст."
                accent="rose"
              />

              <div className="mt-3 rounded-xl bg-white p-3 text-sm text-blue-900">
                <strong className="uppercase text-rose-700">Важное правило:</strong>{' '}
                у собак и кошек гипертензия{' '}
                <strong className="text-rose-700">ВСЕГДА вторичная</strong>. Первичной эссенциальной
                гипертензии у животных нет (как у людей). Это значит — ищите причину!
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-3 text-xs text-blue-900">
                  <strong className="uppercase text-rose-700">Четыре «серых кардинала»:</strong>
                  <ul className="mt-1 space-y-0.5">
                    <li>• ХБП (хроническая болезнь почек)</li>
                    <li>• Гипертиреоз (особенно у кошек)</li>
                    <li>• Синдром Кушинга (гиперадренокортицизм)</li>
                    <li>• Сахарный диабет</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-white p-3 text-xs text-blue-900">
                  <strong className="uppercase text-rose-700">Патология сосудов:</strong>
                  <ul className="mt-1 space-y-0.5">
                    <li>• Гиалиноз — белковые массы в стенке</li>
                    <li>• Фибриноидный некроз — разрушение media</li>
                  </ul>
                </div>
              </div>

              {/* TABLE 4: ГЛПС — мишени гипертензии */}
              <TableGrid
                title="Таблица: 4 органа-мишени — «ГЛПС rule»"
                headers={['Буква', 'Орган', 'Что поражается', 'Клинический знак']}
                rows={[
                  ['Г', 'Глаза', 'Сетчатка, сосуды глаза', 'Гипертензивная ретинопатия, отслойка сетчатки, кровоизлияния, слепота'],
                  ['Л', 'Левый желудочек', 'Миокард ЛЖ', 'Гипертрофия ЛЖ → СН с preserved EF'],
                  ['П', 'Почки', 'Клубочки и артериолы', 'Прогрессирование ХБП, протеинурия'],
                  ['С', 'С (мозг — cerebrum)', 'Церебральные сосуды', 'Инсульт, энцефалопатия, судороги'],
                ]}
                accent="rose"
              />

              <KeyPhrase>
                <strong className="uppercase text-rose-700">ГЛПС:</strong>{' '}
                Глаза • Левый желудочек • Почки • мозг (С — от лат. cerebrum). Четыре органа,
                которые страдают от высокого давления. Осмотри все четыре — и найдёшь масштаб
                гипертензии.
              </KeyPhrase>
            </div>

            {/* B. ГИПОТЕНЗИЯ */}
            <div className="rounded-2xl border-2 border-blue-300 bg-blue-50/50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Gauge className="h-5 w-5 text-blue-700" />
                <h4 className="text-sm font-black uppercase tracking-wide text-blue-700">
                  B. Гипотензия
                </h4>
              </div>

              <p className="text-sm text-blue-900">
                <strong className="uppercase text-blue-700">Артериальная гипотензия</strong> — это
                снижение MAP ниже{' '}
                <strong className="text-blue-700">80 мм рт.ст.</strong> Это критическая черта —
                ниже её органы перестают перфузироваться, начинается <strong className="text-blue-700">шок</strong>.
              </p>

              <FormulaBox
                title="Диагноз гипотензии"
                formula="MAP < 80 мм рт.ст. = ШОК"
                accent="blue"
              />

              {/* TABLE 5: 3 типа гипотензии */}
              <TableGrid
                title="Таблица: 3 типа гипотензии (шока)"
                headers={['Тип', 'Причина', 'Механизм', 'Пример']}
                rows={[
                  [
                    'Гиповолемический',
                    'Потеря объёма',
                    '↓ объём крови → ↓ возврат → ↓ УО → ↓ АД',
                    'Кровотечение, рвота, диарея, ожоги',
                  ],
                  [
                    'Кардиогенный',
                    'Поломка насоса',
                    'Сердце не может качать → ↓ УО → ↓ АД',
                    'ДКМП, тампонада, тяжёлая СН',
                  ],
                  [
                    'Дистрибутивный',
                    'Потеря тонуса сосудов',
                    '↓ ПСС → «озеро» вместо «трубки» → ↓ АД',
                    'Сепсис, анафилаксия, нейрогенный шок',
                  ],
                ]}
                accent="blue"
              />

              <InfoBox color="rose" title="Патофизиология шока">
                <strong className="uppercase text-blue-700">Шок — это спираль смерти.</strong>{' '}
                ↓ АД → ↓ перфузия органов → ↓ кислород → анаэробный метаболизм → лактат →
                ацидоз → ↓ сократимость сердца → ↓ АД → ... Эта спираль раскручивается за минуты.
                Если не разорвать цепочку — пациент гибнет.
              </InfoBox>

              <Callout variant="warning" emoji="🚨" title="Гипотензия = ЭКСТРЕННО">
                <strong className="uppercase text-blue-700">MAP &lt; 80 — это ЭР.</strong>{' '}
                Любой шок требует немедленной инфузии (кристаллоиды bolus 10–20 мл/кг),
                оксигенации и поиска причины. Каждая минута промедления — минус один шанс
                пациенту выжить.
              </Callout>
            </div>
          </div>
        </SectionWrapper>

        {/* ====================================================================== */}
        {/* ============= ЧАСТЬ III. ИНТЕГРАЦИЯ ============= */}
        {/* ====================================================================== */}
        <PartHeader roman="III" title="ИНТЕГРАЦИЯ" subtitle="Связь пульса и давления" />

        {/* ============= РАЗДЕЛ 10: СВЯЗЬ ПУЛЬСА И АД ============= */}
        <SectionWrapper delay={0.55}>
          <SectionHeader
            number="10"
            title="СВЯЗЬ ПУЛЬСА И АД"
            subtitle="Два голоса, один диагноз"
            icon={Activity}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Пульс и АД — стерео-система диагностики.</strong>{' '}
              Один параметр врёт, другой подтверждает. Вместе они дают точный диагноз за секунды.
              Вот пять клинических ситуаций, где связка «пульс + АД» работает как часы.
            </p>

            {/* TABLE 6: 5 клинических ситуаций «пульс + АД» */}
            <TableGrid
              title="Таблица: 5 клинических ситуаций — пульс + АД = диагноз"
              headers={['Ситуация', 'Пульс', 'АД', 'Диагноз']}
              rows={[
                [
                  'Кровопотеря',
                  'Нитевидный, тахикардия',
                  '↓↓ САД и ДАД',
                  'Гиповолемический шок — нужна инфузия',
                ],
                [
                  'Артериальная гипертензия',
                  'Твёрдый, напряжённый',
                  '↑↑ САД (> 160)',
                  'ХБП/гипертиреоз/Кушинг — ищи причину',
                ],
                [
                  'Тампонада сердца',
                  'Парадоксальный, нитевидный',
                  '↓ АД, ↑яремное давление',
                  'Срочно: перикардиоцентез',
                ],
                [
                  'Фибрилляция предсердий',
                  'Дефицит пульса, аритмичный',
                  'Нормальное или ↓',
                  'Аускультация > пальпация — нужен ЭКГ',
                ],
                [
                  'Аортальный стеноз',
                  'Малый, медленно нарастающий (pulsus parvus et tardus)',
                  'САД понижен, узкое пульсовое давление',
                  'Эхокардиография — градиент давления',
                ],
              ]}
              accent="blue"
            />

            <KeyPhrase>
              <strong className="uppercase text-blue-700">Пульс + АД + аускультация = точный диагноз.</strong>{' '}
              Один параметр — это намёк. Три параметра вместе — это заключение.
            </KeyPhrase>

            <div className="rounded-2xl border-2 border-blue-300 bg-blue-50/60 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Диагностический алгоритм «6 + 1 + 1»:
              </div>
              <ol className="mt-2 space-y-1 text-sm text-blue-900">
                <li>
                  <strong className="text-blue-700">6 параметров пульса</strong> (Правило 6 Пальцев):
                  Частота • Ритм • Наполнение • Напряжение • Величина • Симметрия
                </li>
                <li>
                  <strong className="text-blue-700">+ 1 измерение АД</strong> (САД / ДАД / MAP)
                </li>
                <li>
                  <strong className="text-blue-700">+ 1 аускультация</strong> (сравнить ЧСС и Чпульса)
                </li>
              </ol>
              <div className="mt-3 rounded-xl bg-white p-3 text-sm">
                <strong className="uppercase text-blue-700">Итог:</strong> за 90 секунд вы получаете
                полную картину гемодинамики — без УЗИ и без анализов.
              </div>
            </div>

            <Callout variant="info" emoji="🎼" title="Дирижёр и оркестр">
              Пульс — это «дирижёр» (ритм), АД — это «оркестр» (сила). Дирижёр взмахнул — оркестр
              сыграл: норма. Дирижёр взмахнул — оркестр не сыграл: дефицит пульса. Дирижёр сбился:
              аритмия. Оркестр играет слишком громко: гипертензия. Слушайте оба — и ставьте точный
              диагноз.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ====================================================================== */}
        {/* ============= МОДУЛЬ 3: КЛИНИЧЕСКИЙ ОСМОТР ============= */}
        {/* ====================================================================== */}
        <PartHeader
          roman="M3"
          title="МОДУЛЬ 3: КЛИНИЧЕСКИЙ ОСМОТР"
          subtitle="6 шагов полного осмотра"
        />

        {/* ============= РАЗДЕЛ 11: КЛИНИЧЕСКИЙ ОСМОТР (6 шагов) ============= */}
        <SectionWrapper delay={0.6}>
          <SectionHeader
            number="11"
            title="КЛИНИЧЕСКИЙ ОСМОТР"
            subtitle="6 шагов от слизистых до лаборатории"
            icon={Stethoscope}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Полный клинический осмотр</strong>{' '}
              кардиологического пациента — это <strong className="text-blue-700">6 шагов</strong> от
              слизистых до лаборатории. Каждый шаг занимает 30–60 секунд и даёт отдельный «кусочек
              пазла». Собранные вместе — это диагноз без УЗИ.
            </p>

            {/* STEP 1: Слизистые и ВНК */}
            <StepBig
              num="1"
              title="Слизистые и ВНК"
              icon={Eye}
              subtitle="Цвет + CRT"
            >
              <p className="text-sm text-blue-900">
                Осмотрите слизистые оболочки (дёсны, конъюнктива) и оцените время наполнения
                капилляров (<strong className="text-blue-700">CRT — Capillary Refill Time</strong>).
                Каждый цвет — отдельная история:
              </p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <ColorCard
                  name="Розовый"
                  meaning="Норма"
                  desc="Хорошая перфузия и оксигенация"
                  colorClass="bg-pink-200 text-pink-800"
                />
                <ColorCard
                  name="Бледный"
                  meaning="Анемия"
                  desc="↓ Hb или ↓ перфузия (шок, кровопотеря)"
                  colorClass="bg-slate-100 text-slate-700"
                />
                <ColorCard
                  name="Синюшный"
                  meaning="Цианоз"
                  desc="↓ оксигенация, тяжёлая гипоксемия"
                  colorClass="bg-blue-200 text-blue-900"
                />
                <ColorCard
                  name="Красный"
                  meaning="Сепсис"
                  desc="Вазодилатация, distributive shock"
                  colorClass="bg-rose-300 text-rose-900"
                />
              </div>

              <FormulaBox
                title="Правило CRT"
                formula="Норма CRT: 1–2 секунды"
                accent="blue"
              />

              <InfoBox color="amber" title="CRT — критерий перфузии">
                <strong className="uppercase text-blue-700">CRT &gt; 2 сек — это гипоперфузия.</strong>{' '}
                Прижмите пальцем десну до побеления и отпустите. Если розовый цвет возвращается
                дольше 2 секунд — пациент в шоке или тяжёлой гиповолемии. Это «10-секундный тест»,
                который спасает жизни.
              </InfoBox>
            </StepBig>

            {/* STEP 2: Пальпация пульса */}
            <StepBig
              num="2"
              title="Пальпация пульса"
              icon={Activity}
              subtitle="4 R — Правило четырёх Р"
            >
              <p className="text-sm text-blue-900">
                Оцените пульс по «правилу 4 R» (в русской адаптации):
              </p>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <FourRCard
                  letter="Р"
                  word="Ритм"
                  desc="Регулярность интервалов между ударами"
                  color="from-cyan-500 to-sky-600"
                />
                <FourRCard
                  letter="Р"
                  word="Ритмичность с сердцем"
                  desc="Совпадение ЧСС (аускультация) и Чпульса (пальпация) — поиск дефицита"
                  color="from-blue-500 to-cyan-600"
                />
                <FourRCard
                  letter="Р"
                  word="Наполнение"
                  desc="Объём артерии в диастолу — «полный» или «слабый»"
                  color="from-sky-500 to-blue-700"
                />
                <FourRCard
                  letter="Р"
                  word="Резистентность"
                  desc="Напряжение — усилие для сжатия артерии пальцем"
                  color="from-violet-500 to-purple-600"
                />
              </div>

              <Callout variant="warning" emoji="🎻" title="Дефицит пульса — метафора">
                <strong className="uppercase text-blue-700">«Дирижёр взмахнул, оркестр не сыграл».</strong>{' '}
                Сердце сократилось (дирижёр взмахнул), но сокращение слишком слабое, чтобы дать
                пульсовую волну (оркестр промолчал). Сравните ЧСС на слух с Чпульса на пальцах —
                разница и есть <strong className="text-blue-700">дефицит пульса</strong>.
              </Callout>
            </StepBig>

            {/* STEP 3: Аускультация */}
            <StepBig
              num="3"
              title="Аускультация"
              icon={Ear}
              subtitle="Тоны сердца и шумы"
            >
              <p className="text-sm text-blue-900">
                В норме сердце звучит как <strong className="text-blue-700">«Ля-Дуб»</strong> —
                два тона: S1 (систолический, «Ля») и S2 (диастолический, «Дуб»). S1 громче, S2 короче.
                Всё, что отличается от «Ля-Дуб» — патология.
              </p>

              <InfoBox color="blue" title="Галопный ритм">
                <strong className="uppercase text-blue-700">«Ля-Дуб-Да» — третий тон (S3).</strong>{' '}
                Звучит как топот копыт лошади. Появляется при сердечной недостаточности — это
                «стук наполнения» перегруженного желудочка. У собак — патологический. У кошек
                иногда норма (у молодых).
              </InfoBox>

              {/* TABLE 7: Шумы I-VI */}
              <TableGrid
                title="Таблица: Шумы I–VI (классификация Levi)"
                headers={['Грейд', 'Описание', 'Сила', 'Трактовка']}
                rows={[
                  ['I', 'Едва слышный', 'Только эксперт слышит', 'Мягкий, часто доброкачественный'],
                  ['II', 'Тихий, но отчётливый', 'Слышен ясно после привыкания', 'Обычно доброкачественный'],
                  ['III', 'Умеренный', 'Громкий, но без трепета', 'Клинически значимый'],
                  ['IV', 'Громкий с трепетом', 'Пальпаторный трепет (thrill)', 'Серьёзная патология'],
                  ['V', 'Очень громкий', 'Слышен краем стетоскопа', 'Тяжёлая патология'],
                  ['VI', 'Слышен без стетоскопа', 'Слышен на расстоянии от грудной клетки', 'Крайне тяжёлая патология'],
                ]}
                accent="blue"
              />

              <KeyPhrase>
                <strong className="uppercase text-blue-700">I = шёпот • IV = трепет • VI = без стетоскопа.</strong>{' '}
                Грейд IV и выше — это всегда «красный флаг».
              </KeyPhrase>
            </StepBig>

            {/* STEP 4: SRR */}
            <StepBig
              num="4"
              title="SRR — Sleeping Respiratory Rate"
              icon={Droplets}
              subtitle="Тихая сигнализация"
            >
              <p className="text-sm text-blue-900">
                <strong className="uppercase text-blue-700">SRR</strong> — частота дыхания во время
                сна ( Sleeping Respiratory Rate). Это «тихая сигнализация» — самый ранний признак
                сердечной недостаточности. Владелец может измерять дома без врача.
              </p>

              <FormulaBox
                title="Правило 30"
                formula="SRR < 30 = норма • SRR > 30 = ЭР"
                accent="rose"
              />

              <InfoBox color="rose" title="Правило 30">
                <strong className="uppercase text-blue-700">SRR &gt; 30/мин — это экстренное
                обращение!</strong>{' '}
                Если собака или кошка спит и дышит чаще 30 раз в минуту — это признак отёка лёгких
                или плеврального выпота. Срочно к врачу. SRR — лучший домашний мониторинг СН.
              </InfoBox>

              <Callout variant="info" emoji="🛌" title="Почему во сне?">
                Во сне метаболизм минимальный — и дыхание должно быть самым медленным. Если даже
                спящий пациент дышит часто — значит, система компенсации уже не справляется.
                «Тихая сигнализация» звучит только тогда, когда все остальные показатели ещё
                кажутся нормальными.
              </Callout>
            </StepBig>

            {/* STEP 5: АД измерение */}
            <StepBig
              num="5"
              title="АД измерение"
              icon={Gauge}
              subtitle="Эффект белого халата"
            >
              <p className="text-sm text-blue-900">
                Измерение АД у собак и кошек — это <strong className="text-blue-700">хирургия
                точности</strong>. Малейший стресс — и значение летит на 30 мм рт.ст. вверх.
              </p>

              <InfoBox color="amber" title="Эффект белого халата">
                <strong className="uppercase text-blue-700">«White coat effect»</strong> — повышение
                АД из-за стресса пациента в клинике. У кошек особенно выражен. Решение: измеряйте
                АД в спокойной комнате, без собак, с владельцем рядом, после 10–15 минут адаптации.
              </InfoBox>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <RuleCard
                  icon={Gauge}
                  title="Размер манжеты"
                  rule="40% окружности конечности"
                  desc="Маленькая манжета = завышение. Большая = занижение. Измерьте окружность предплечья или хвоста и подберите манжету 40%."
                  color="from-cyan-500 to-sky-600"
                />
                <RuleCard
                  icon={Activity}
                  title="Количество замеров"
                  rule="5–7 измерений подряд"
                  desc="Первые 2 отбрасываются (стресс). Берут среднее из последних 5. Если разброс > 20% — повторите в другой день."
                  color="from-blue-500 to-cyan-600"
                />
              </div>

              <FormulaBox
                title="Два золотых правила АД"
                formula="Манжета = 40% окр. • 5–7 замеров (первые 2 отбросить)"
                accent="blue"
              />

              <Callout variant="warning" emoji="📏" title="Методика">
                Собака: лежит на боку, манжета на предплечье или хвосте (A. coccygea). Кошка: сидит
                или лежит, манжета на предплечье или хвосте. Датчик Doppler — на голой коже с гелем.
                HDO (High Definition Oscillometry) — автомат, лучше для кошек. Никогда не измеряйте
                АД у возбуждённого пациента — это будет стрессовое давление, а не истинное.
              </Callout>
            </StepBig>

            {/* STEP 6: Лаборатория */}
            <StepBig
              num="6"
              title="Лаборатория"
              icon={FlaskConical}
              subtitle="Биомаркеры сердца"
            >
              <p className="text-sm text-blue-900">
                Два биомаркера кардиологии — <strong className="text-blue-700">NT-proBNP</strong> и{' '}
                <strong className="text-blue-700">Troponin I</strong> — это «сигналы бедствия»
                миокарда. Один говорит о растяжении, другой — о разрушении.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <BiomarkerCard
                  name="NT-proBNP"
                  metaphor="📡 «Сигнал растяжения»"
                  desc="Предсердный натрийуретический пептид (мозговой). Выделяется при растяжении миокарда предсердий и желудочков. ↑ при СН, перегрузке объёмом."
                  color="from-cyan-500 to-sky-600"
                  icon={Droplets}
                />
                <BiomarkerCard
                  name="Troponin I"
                  metaphor="💔 «Сигнал разрушения»"
                  desc="Сердечный тропонин I. ↑ при некрозе кардиомиоцитов — инфаркт, миокардит, травма, токсическое поражение. «AST/ALT сердца»."
                  color="from-rose-500 to-red-600"
                  icon={Heart}
                />
              </div>

              <FormulaBox
                title="Два биомаркера"
                formula="NT-proBNP = растяжение • Troponin I = разрушение"
                accent="blue"
              />

              <InfoBox color="blue" title="Как читать пару">
                <strong className="uppercase text-blue-700">NT-proBNP ↑ + Troponin I норма →</strong>{' '}
                перегрузка объёмом без некроза (ранняя СН).{' '}
                <strong className="uppercase text-blue-700">Troponin I ↑ + NT-proBNP норма →</strong>{' '}
                миокардит или инфаркт. <strong className="uppercase text-blue-700">Оба ↑ →</strong>{' '}
                декомпенсированная СН с повреждением миокарда.
              </InfoBox>
            </StepBig>

            {/* Финальный чек-лист 5 параметров */}
            <div className="rounded-2xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-600" />
                <h4 className="text-sm font-black uppercase tracking-wide text-amber-700">
                  Финальный чек-лист — 5 обязательных параметров
                </h4>
              </div>
              <ol className="space-y-1 text-sm text-blue-900">
                <li>
                  <strong className="text-amber-700">1.</strong> Слизистые + CRT (цвет и перфузия)
                </li>
                <li>
                  <strong className="text-amber-700">2.</strong> Пульс (6 Пальцев + сравнение с ЧСС)
                </li>
                <li>
                  <strong className="text-amber-700">3.</strong> Аускультация (тоны + шумы + галоп)
                </li>
                <li>
                  <strong className="text-amber-700">4.</strong> SRR (домашний мониторинг)
                </li>
                <li>
                  <strong className="text-amber-700">5.</strong> АД + биомаркеры (NT-proBNP + Troponin I)
                </li>
              </ol>
              <div className="mt-2 rounded-xl bg-white p-3 text-xs">
                <strong className="uppercase text-amber-700">5 параметров за 5 минут</strong> —
                это «minimum standard of care» для любого кардиологического пациента.
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* ====================================================================== */}
        {/* ============= МОДУЛЬ 6: ПАТОЛОГОАНАТОМ ============= */}
        {/* ====================================================================== */}
        <PartHeader
          roman="M6"
          title="МОДУЛЬ 6: ПАТОЛОГОАНАТОМ"
          subtitle="Глазами патологоанатома"
        />

        {/* ============= РАЗДЕЛ 12: ГЛАЗАМИ ПАТОЛОГОАНАТОМА ============= */}
        <SectionWrapper delay={0.65}>
          <SectionHeader
            number="12"
            title="ГЛАЗАМИ ПАТОЛОГОАНАТОМА"
            subtitle="5 заболеваний сердца"
            icon={Microscope}
          />
          <div className="space-y-4 px-5 py-5 sm:px-7">
            <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Патологоанатом видит финал</strong> —
              то, к чему клиницист только подбирается. Вот 5 главных кардиологических заболеваний
              собак и кошек — макроскопически, глазами патолога, с метафорами.
            </p>

            {/* 1. MMVD */}
            <DiseaseCard
              num="1"
              name="MMVD"
              full="Myxomatous Mitral Valve Disease"
              metaphor="🧽 «Изношенная губка»"
              species="🐶 Чаще собаки мелких пород"
              desc="Клапанные створки утолщены, узловатые, как миксоидно перерождённая губка. Левое предсердие (LA) гигантское — может занимать половину грудной полости. При разрыве хорды — острый отёк лёгких."
              macro={[
                'Створки митрального клапана утолщены, узловатые, «губчатые»',
                'Огромное левое предсердие (LA)',
                'Возможен разрыв хорд → острый отёк лёгких',
                'Иногда разрыв LA при разрыве предсердной стенки',
              ]}
              color="from-rose-500 to-pink-600"
            />

            {/* 2. ДКМП */}
            <DiseaseCard
              num="2"
              name="ДКМП"
              full="Дилатационная кардиомиопатия"
              metaphor="🎒 «Уставший мешок»"
              species="🐶 Собаки крупных пород (доберман, боксёр, дог)"
              desc="Сердце гигантское, дряблое — как мешок, который перерастянули и не может сократиться. Стенки тонкие, камеры огромные. В ушке левого предсердия часто — тромбы (источник тромбоэмболии)."
              macro={[
                'Гигантское дряблое сердце',
                'Тонкие стенки желудочков',
                'Расширенные камеры (особенно ЛЖ)',
                'Тромбы в ушке левого предсердия',
              ]}
              color="from-blue-500 to-cyan-600"
            />

            {/* 3. ГКМП */}
            <DiseaseCard
              num="3"
              name="ГКМП"
              full="Гипертрофическая кардиомиопатия"
              metaphor="🪨 «Каменное сердце»"
              species="🐱 Кошки (мейн-кун, британская)"
              desc="Стенка левого желудочка резко утолщена, полость желудочка сужена. Сердце маленькое снаружи, но «каменное» на ощупь. Гистологически — «disarray» (хаос) мышечных волокон и интерстициальный фиброз."
              macro={[
                'Толстая стенка ЛЖ (диастолическая толщина > 6 мм у кошек)',
                'Узкая полость левого желудочка',
                'Фиброз интерстиция (гистология)',
                '«Disarray» — хаос миофибрилл (гистология)',
              ]}
              color="from-slate-500 to-gray-700"
            />

            {/* 4. Дирофиляриоз */}
            <DiseaseCard
              num="4"
              name="Дирофиляриоз"
              full="Dirofilaria immitis"
              metaphor="🍝 «Клубок гостей»"
              species="🐶 Собаки в эндемичных регионах"
              desc="В лёгочной артерии (PA) и правом желудочке — белые тонкие черви (Dirofilaria immitis), как спагетти. Клубок гостей, которые съели хозяина. Приводит к лёгочной гипертензии и правожелудочковой недостаточности."
              macro={[
                'Белые тонкие черви (15–30 см) в PA и ПЖ',
                'Утолщение стенки ПЖ (гипертрофия)',
                'Расширение PA (эктазия)',
                'Хронический эндартериит PA',
              ]}
              color="from-amber-500 to-orange-600"
            />

            {/* 5. Гемангиосаркома */}
            <DiseaseCard
              num="5"
              name="Гемангиосаркома"
              full="Hemangiosarcoma of right atrium"
              metaphor="🩸 «Сердце в крови»"
              species="🐶 Собаки крупных пород (немецкая овчарка, золотистый ретривер)"
              desc="В полости перикарда — тёмная жидкая кровь (гемоперикард). На стенке правого предсердия — хрупкая опухоль, которая кровит от малейшего прикосновения. Приводит к тампонаде сердца."
              macro={[
                'Тёмная кровь в полости перикарда (гемоперикард)',
                'Хрупкая опухоль на стенке правого предсердия',
                'Опухоль легко кровит при касании',
                'Метастазы в селезёнку и лёгкие часто',
              ]}
              color="from-rose-500 to-red-700"
            />

            {/* TABLE 8: Comparative — Normal/MMVD/DCM/HCM */}
            <TableGrid
              title="Таблица: Сравнительная — Норма / MMVD / ДКМП / ГКМП"
              headers={['Параметр', 'Норма', 'MMVD', 'ДКМП', 'ГКМП']}
              rows={[
                [
                  'Размер сердца',
                  'Нормальный',
                  'Увеличен LA',
                  'Гигантское (все камеры)',
                  'Маленькое, но тяжёлое',
                ],
                [
                  'Толщина стенки ЛЖ',
                  'Норма (до 6 мм)',
                  'Норма или ↑',
                  '↓ (тонкая)',
                  '↑↑ (толще 6 мм)',
                ],
                [
                  'Консистенция',
                  'Упругая',
                  'Норма (клапаны губка)',
                  'Дряблая, мешок',
                  'Каменная, плотная',
                ],
                [
                  'Ключевой знак',
                  '—',
                  'Изношенный митральный клапан',
                  'Тромбы в ушке LA',
                  'Disarray + фиброз',
                ],
              ]}
              accent="blue"
            />

            <KeyPhrase>
              <strong className="uppercase text-blue-700">5 метафор:</strong>{' '}
              MMVD — изношенная губка. ДКМП — уставший мешок. ГКМП — каменное сердце.
              Дирофиляриоз — клубок гостей. Гемангиосаркома — сердце в крови. Каждая метафора —
              это визуальный ключ к диагнозу.
            </KeyPhrase>

            <div className="rounded-2xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Microscope className="h-5 w-5 text-amber-600" />
                <h4 className="text-sm font-black uppercase tracking-wide text-amber-700">
                  4 вопроса патологоанатома
                </h4>
              </div>
              <ol className="space-y-1 text-sm text-blue-900">
                <li>
                  <strong className="text-amber-700">1. SIZE?</strong> — Какого размера сердце?
                </li>
                <li>
                  <strong className="text-amber-700">2. SHAPE?</strong> — Какой формы? (округлое, мешковидное, гипертрофичное)
                </li>
                <li>
                  <strong className="text-amber-700">3. DENSITY?</strong> — Какой консистенции? (упругое, дряблое, каменное)
                </li>
                <li>
                  <strong className="text-amber-700">4. COLOR/CONTENT?</strong> — Какого цвета? Что внутри? (кровь, тромб, черви, опухоль)
                </li>
              </ol>
              <div className="mt-2 rounded-xl bg-white p-3 text-xs">
                <strong className="uppercase text-amber-700">4 вопроса — 4 угла диагноза.</strong>{' '}
                Задайте их по очереди — и любой препарат сердца расскажет свою историю.
              </div>
            </div>

            <Callout variant="info" emoji="🔬" title="Мини-заключение">
              Патологоанатом — это «последний врач» пациента. Он видит финал: изношенную губку MMVD,
              уставший мешок ДКМП, каменное сердце ГКМП. Каждый препарат — это учебник на одном
              подносе. Учись читать метафоры — и не допускай клинических ошибок.
            </Callout>
          </div>
        </SectionWrapper>

        {/* ============= НАПУТСТВИЕ + CTA ============= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mb-8 overflow-hidden rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 p-1 shadow-2xl"
        >
          <div className="rounded-[22px] bg-white px-6 py-7 sm:px-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight text-blue-700 sm:text-2xl">
                  Напутствие
                </h2>
                <p className="text-xs font-medium text-blue-700/70">Итог по пульсу и давлению</p>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-50/60 p-4 text-center">
              <div className="text-base font-black uppercase tracking-tight text-blue-700 sm:text-xl">
                Пульс = ВОЛНА • Давление = СИЛА • ГЛПС = мишени
              </div>
            </div>

            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-blue-700 sm:text-base">
              Запомните 8 ключевых положений:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-blue-900 sm:text-base">
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  <strong className="text-blue-700">Пульс — это волна давления</strong>, а не сама
                  кровь. Лат. pulsus = «толчок».
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  Стенка артерии — три слоя: <strong className="text-blue-700">intima/media/adventitia</strong>.
                  Media = эластичность = пульс.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  Три фактора пульса: <strong className="text-blue-700">УО • Эластичность • ПСС</strong>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  8 красных флагов: тахи/бра/аритмия/дефицит/парадокс/нитевидный/твёрдый/мягкий.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  <strong className="text-blue-700">6 Пальцев</strong>: частота • ритм • наполнение •
                  напряжение • величина • симметрия.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  <strong className="text-blue-700">MAP = ДАД + 1/3 (САД − ДАД)</strong>. Цель: 80–120.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  Гипертензия &gt; 160/90 — всегда вторичная. Мишени — <strong className="text-blue-700">ГЛПС</strong>:
                  Глаза • ЛЖ • Почки • мозг.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-700">✓</span>
                <span>
                  Клинический осмотр — 6 шагов: слизистые • пульс • аускультация • SRR • АД • лаборатория.
                </span>
              </li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed text-blue-900 sm:text-base">
              <strong className="uppercase text-blue-700">Пульс и давление</strong> — это два голоса
              гемодинамики. Пульс — ритм и наполнение. Давление — сила потока. Один без другого —
              половина картины. Слушайте оба — и каждый пациент зазвучит понятно.
            </p>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 text-sm text-blue-900">
              <div className="mb-1 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span className="font-bold uppercase text-amber-700">🩺 Финальная метафора</span>
              </div>
              Сердце — дирижёр, сосуды — оркестр, кровь — публика. Пульс — это взмах дирижёрской
              палочки, давление — это громкость оркестра. Хороший ветеринар слушает всех троих — и
              ставит диагноз без УЗИ. <strong className="text-blue-700">НЕ СЧИТАЙ УДАРЫ — ЧИТАЙ ПАЦИЕНТА!</strong> 🐾
            </div>
          </div>
        </motion.section>

        {/* CTA: переход к тесту */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.75 }}
          onClick={onNavigateToQuiz}
          disabled={!onNavigateToQuiz}
          className="group mb-8 w-full rounded-3xl border-2 border-blue-300 bg-white p-6 text-center shadow-lg transition-all hover:border-blue-400 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
        >
          <BookOpen className="mx-auto h-10 w-10 text-blue-600 transition-transform group-hover:scale-110" />
          <h3 className="mt-3 text-xl font-black uppercase text-blue-700">
            Готов проверить себя?
          </h3>
          <p className="mt-2 text-sm text-blue-900/80">
            16 вопросов по пульсу и давлению — на закрепление материала. Нажми, чтобы пройти тест
            <strong className="text-blue-700"> «16 вопросов по пульсу и давлению»</strong>.
          </p>
          <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:shadow-lg">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="uppercase tracking-wide">Перейти к тесту</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-blue-700/60">
          Гайд по пульсу и артериальному давлению собак и кошек •
          Два голоса гемодинамики — волна и сила •
          Для ветеринарных специалистов и студентов
        </footer>
      </main>
    </div>
  )
}

/* ============= PART HEADER ============= */
function PartHeader({ roman, title, subtitle }: { roman: string; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-4 mt-2 flex items-center gap-3"
    >
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 text-lg font-black uppercase text-white shadow-xl">
        {roman}
      </div>
      <div>
        <h2 className="text-base font-black uppercase tracking-tight text-blue-900 sm:text-xl">
          {title}
        </h2>
        <p className="text-xs font-medium text-blue-700/70 sm:text-sm">{subtitle}</p>
      </div>
    </motion.div>
  )
}

/* ============= SECTION WRAPPER ============= */
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

function FormulaChip({
  label,
  value,
  icon: Icon,
}: {
  label: string
  value: string
  icon: typeof Droplets
}) {
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
      <div className="mt-1 text-base font-black uppercase tracking-tight sm:text-lg">{formula}</div>
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

function InfoBox({
  color,
  title,
  children,
}: {
  color: 'amber' | 'rose' | 'blue'
  title: string
  children: React.ReactNode
}) {
  const colorMap = {
    amber: 'border-amber-300 bg-amber-50/80',
    rose: 'border-rose-300 bg-rose-50/80',
    blue: 'border-blue-300 bg-blue-50/80',
  }
  const textColor =
    color === 'amber' ? 'text-amber-700' : color === 'rose' ? 'text-rose-700' : 'text-blue-700'
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

/* ============= TABLE GRID (colored card grid) ============= */
function TableGrid({
  title,
  headers,
  rows,
  accent,
}: {
  title: string
  headers: string[]
  rows: string[][]
  accent: 'blue' | 'rose' | 'emerald'
}) {
  const borderColor =
    accent === 'blue'
      ? 'border-blue-300'
      : accent === 'rose'
        ? 'border-rose-300'
        : 'border-emerald-300'
  const headerBg =
    accent === 'blue'
      ? 'from-blue-600 to-cyan-500'
      : accent === 'rose'
        ? 'from-rose-600 to-pink-500'
        : 'from-emerald-600 to-teal-500'
  const cellBg =
    accent === 'blue'
      ? 'bg-blue-50/50'
      : accent === 'rose'
        ? 'bg-rose-50/50'
        : 'bg-emerald-50/50'
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`overflow-hidden rounded-2xl border-2 ${borderColor} bg-white shadow-md`}
    >
      <div className={`bg-gradient-to-r ${headerBg} px-4 py-2 text-white`}>
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider">{title}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-full border-collapse text-left">
          <thead>
            <tr className={`bg-gradient-to-r ${headerBg}/30`}>
              {headers.map((h) => (
                <th
                  key={h}
                  className="border-b-2 border-blue-200 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-blue-700 sm:text-xs"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? cellBg : 'bg-white'}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`border-b border-blue-100 px-3 py-2 align-top text-xs text-blue-900 sm:text-sm ${
                      ci === 0 ? 'font-bold text-blue-700' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

/* ============= SPECIFIC CARDS ============= */

function TunicCard({
  layer,
  name,
  ruName,
  desc,
  metaphor,
  color,
}: {
  layer: string
  name: string
  ruName: string
  desc: string
  metaphor: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-base font-black text-white shadow-md`}
          >
            {layer}
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">
              {ruName}
            </div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
        <div className="mt-2 rounded-lg bg-blue-50/60 px-2 py-1 text-[10px] italic text-blue-700">
          🧥 {metaphor}
        </div>
      </div>
    </div>
  )
}

function StepCard({
  num,
  title,
  desc,
  icon: Icon,
  color,
}: {
  num: string
  title: string
  desc: string
  icon: typeof Brain
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-3">
          <div
            className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
          >
            <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shadow">
              {num}
            </span>
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-sm font-black uppercase text-blue-900">{title}</div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

function RedFlagCard({
  name,
  definition,
  norm,
  metaphor,
  cause,
  color,
}: {
  name: string
  definition: string
  norm: string
  metaphor: string
  cause: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
          >
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">
              {definition}
            </div>
          </div>
        </div>
        <div className="mb-1 text-[11px] font-mono text-blue-700">{norm}</div>
        <div className="mb-1 text-[11px] italic text-blue-900">{metaphor}</div>
        <div className="text-[11px] text-blue-900/80">
          <strong className="uppercase text-blue-700">Причина:</strong> {cause}
        </div>
      </div>
    </div>
  )
}

function BPParamCard({
  symbol,
  name,
  desc,
  color,
}: {
  symbol: string
  name: string
  desc: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-sm font-black text-white shadow-md`}
          >
            {symbol}
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">
              {symbol}
            </div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

function BaroCard({
  location,
  nerve,
  desc,
  color,
}: {
  location: string
  nerve: string
  desc: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
          >
            <Gauge className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{location}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">
              {nerve}
            </div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

function RegCard({
  type,
  timeScale,
  mechanism,
  desc,
  color,
  icon: Icon,
}: {
  type: string
  timeScale: string
  mechanism: string
  desc: string
  color: string
  icon: typeof Brain
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{type}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-blue-700">
              {timeScale}
            </div>
          </div>
        </div>
        <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-blue-700">
          {mechanism}
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

function ColorCard({
  name,
  meaning,
  desc,
  colorClass,
}: {
  name: string
  meaning: string
  desc: string
  colorClass: string
}) {
  return (
    <div className={`rounded-xl p-3 ${colorClass}`}>
      <div className="text-xs font-black uppercase">{name}</div>
      <div className="text-[10px] font-bold uppercase opacity-80">{meaning}</div>
      <p className="mt-1 text-[10px] leading-snug opacity-90">{desc}</p>
    </div>
  )
}

function FourRCard({
  letter,
  word,
  desc,
  color,
}: {
  letter: string
  word: string
  desc: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-3">
        <div className="mb-1 flex items-center gap-2">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-base font-black text-white shadow-md`}
          >
            {letter}
          </div>
          <div className="text-sm font-black uppercase text-blue-900">{word}</div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

function RuleCard({
  icon: Icon,
  title,
  rule,
  desc,
  color,
}: {
  icon: typeof Brain
  title: string
  rule: string
  desc: string
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-sm font-black uppercase text-blue-900">{title}</div>
        </div>
        <div className="mb-1 text-sm font-black uppercase tracking-tight text-blue-700">{rule}</div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

function BiomarkerCard({
  name,
  metaphor,
  desc,
  color,
  icon: Icon,
}: {
  name: string
  metaphor: string
  desc: string
  color: string
  icon: typeof Brain
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-md`}>
      <div className="rounded-[14px] bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-black uppercase text-blue-900">{name}</div>
            <div className="text-[10px] italic text-blue-700">{metaphor}</div>
          </div>
        </div>
        <p className="text-xs text-blue-900/80">{desc}</p>
      </div>
    </div>
  )
}

function DiseaseCard({
  num,
  name,
  full,
  metaphor,
  species,
  desc,
  macro,
  color,
}: {
  num: string
  name: string
  full: string
  metaphor: string
  species: string
  desc: string
  macro: string[]
  color: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-lg`}>
      <div className="rounded-[14px] bg-white p-4 sm:p-5">
        <div className="mb-2 flex items-start gap-3">
          <div
            className={`relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-base font-black text-white shadow-md`}
          >
            <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shadow">
              {num}
            </span>
            <Microscope className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-base font-black uppercase text-blue-900 sm:text-lg">{name}</div>
            <div className="text-[11px] font-medium text-blue-700">{full}</div>
            <div className="text-[11px] font-bold uppercase tracking-wide text-amber-700">
              {metaphor}
            </div>
            <div className="mt-0.5 text-[10px] text-blue-900/70">{species}</div>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-blue-900 sm:text-sm">{desc}</p>
        <div className="mt-3 rounded-xl bg-blue-50/60 p-3">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-blue-700">
            🔍 Макроскопические признаки:
          </div>
          <ul className="space-y-1 text-xs text-blue-900 sm:text-sm">
            {macro.map((m) => (
              <li key={m} className="flex gap-1.5">
                <span className="flex-shrink-0 text-blue-700">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function StepBig({
  num,
  title,
  icon: Icon,
  subtitle,
  children,
}: {
  num: string
  title: string
  icon: typeof Brain
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 p-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">
          <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white shadow">
            {num}
          </span>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-black uppercase tracking-tight text-blue-700 sm:text-lg">
            Шаг {num}: {title}
          </h3>
          <p className="text-[11px] font-medium text-blue-700/70">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-3">{children}</div>
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
