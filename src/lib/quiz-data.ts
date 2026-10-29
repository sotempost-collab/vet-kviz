// Данные квиза по ветеринарной клинической диагностике слизистых оболочек.
// Сгенерировано скриптом scripts/build-quiz-data.py — НЕ редактируйте вручную.
// Перемешивание опций и порядка вопросов происходит в рантайме.

export interface QuizOption {
  letter: 'А' | 'Б' | 'В' | 'Г' | 'Д'
  text: string
  correct: boolean
}

export interface QuizQuestion {
  id: number
  topic: string
  title: string
  question: string
  options: QuizOption[]
  explanation: string
  videoTimestamp?: number
}

export const MUCOUS_TITLE = 'Слизистые — проверь себя'
export const MUCOUS_SUBTITLE = 'Осмотр слизистых оболочек и ВКН'
// Обратная совместимость со старым кодом
export const QUIZ_TITLE = MUCOUS_TITLE
export const QUIZ_SUBTITLE = MUCOUS_SUBTITLE

export const MUCOUS_QUESTIONS: QuizQuestion[] = [
{
    id: 1,
    topic: 'Клиническое значение осмотра',
    title: 'Вопрос 1',
    question: 'Почему осмотр слизистых оболочек имеет важное клиническое значение?',
    options: [
      { letter: 'А', text: 'Позволяет косвенно оценить кровообращение, гидратацию и оксигенацию организма', correct: true },
      { letter: 'Б', text: 'Позволяет определить точную породу животного', correct: false },
      { letter: 'В', text: 'Позволяет измерить температуру тела без термометра', correct: false },
    ],
    explanation: 'Слизистые — это «окно» в кровообращение: цвет говорит об оксигенации, влажность — о гидратации, ВКН — о перфузии тканей.',
  },
{
    id: 5,
    topic: 'Анатомия: основы',
    title: 'Вопрос 2',
    question: 'Какая формула отражает главные свойства слизистой?',
    options: [
      { letter: 'А', text: 'Покрывает — защищает — сообщает', correct: true },
      { letter: 'Б', text: 'Сокращается — фильтрует — минерализуется', correct: false },
      { letter: 'В', text: 'Запасает — охлаждает — ороговевает', correct: false },
    ],
    explanation: 'Слизистая покрывает внутренние поверхности, защищает от внешних воздействий и обеспечивает обмен (сообщение) с внешней средой.',
  },
{
    id: 14,
    topic: 'Слои слизистой',
    title: 'Вопрос 3',
    question: 'Как расшифровывается формула ЭПМ?',
    options: [
      { letter: 'А', text: 'Эпителий — Пластинка — Мышца', correct: true },
      { letter: 'Б', text: 'Эритроцит — Плазма — Меланин', correct: false },
      { letter: 'В', text: 'Эндокард — Перикард — Миокард', correct: false },
    ],
    explanation: 'ЭПМ = Эпителий, собственная Пластинка, Мышечная пластинка. Три типичных слоя слизистой оболочки.',
  },
{
    id: 35,
    topic: 'Норма слизистой',
    title: 'Вопрос 4',
    question: 'Какой цвет слизистых наиболее характерен для нормы?',
    options: [
      { letter: 'А', text: 'Равномерно розовый', correct: true },
      { letter: 'Б', text: 'Синий или фиолетовый', correct: false },
      { letter: 'В', text: 'Интенсивно жёлтый', correct: false },
    ],
    explanation: 'Равномерно розовый — норма для большинства видов. Оттенок зависит от вида и пигментации.',
  },
{
    id: 79,
    topic: 'Мышечная пластинка',
    title: 'Вопрос 5',
    question: 'Из какой ткани состоит мышечная пластинка слизистой?',
    options: [
      { letter: 'А', text: 'Из гладкой мышечной ткани', correct: true },
      { letter: 'Б', text: 'Из нервной ткани', correct: false },
      { letter: 'В', text: 'Из гиалинового хряща', correct: false },
    ],
    explanation: 'Мышечная пластинка (lamina muscularis mucosae) — тонкий слой гладкой мышечной ткани, отделяющий слизистую от подслизистой основы. Не путать с поперечнополосатой (скелетной) мускулатурой.',
  },

]

// Fisher-Yates shuffle (без модификации оригинала)
export function shuffleArray<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Перемешать варианты в вопросе с переназначением букв (А/Б/В/...)
export function shuffleQuestionOptions(q: QuizQuestion): QuizQuestion {
  const letters = ['А', 'Б', 'В', 'Г', 'Д'] as const
  const shuffled = shuffleArray(q.options)
  return {
    ...q,
    options: shuffled.map((opt, i) => ({
      ...opt,
      letter: letters[i],
    })),
  }
}

// Вернуть N перемешанных вопросов с перемешанными вариантами
// source — массив, из которого выбирать (по умолчанию MUCOUS_QUESTIONS)
export function pickShuffledQuestions(count: number, source: QuizQuestion[] = MUCOUS_QUESTIONS): QuizQuestion[] {
  const shuffled = shuffleArray(source)
  return shuffled.slice(0, count).map(shuffleQuestionOptions)
}

// === КВИЗ ПО ТЕМПЕРАТУРЕ (5 вопросов) ===
export const TEMPERATURE_TITLE = 'Температура — проверь себя'
export const TEMPERATURE_SUBTITLE = 'Терморегуляция, лихорадка и гипертермия'

export const TEMPERATURE_QUESTIONS: QuizQuestion[] = [
  {
    id: 1001,
    topic: 'Лихорадка vs Гипертермия',
    title: 'Вопрос 1',
    question: 'В чём главное физиологическое отличие лихорадки от гипертермии?',
    options: [
      { letter: 'А', text: 'При лихорадке температура всегда выше 40 °C, а при гипертермии — ниже', correct: false },
      { letter: 'Б', text: 'При лихорадке гипоталамус повышает «уставку» температуры (перестраивает регуляцию), а при гипертермии уставка остается нормальной, но механизмы охлаждения не справляются', correct: true },
      { letter: 'В', text: 'Лихорадка бывает только у собак, а гипертермия — только у кошек', correct: false },
    ],
    explanation: 'Лихорадка — регулируемое повышение: пирогены заставляют гипоталамус поднять уставку. Гипертермия — срыв тормозов: уставка нормальна, но охлаждение не справляется с перегревом.',
  },
  {
    id: 1002,
    topic: 'Бурая жировая ткань',
    title: 'Вопрос 2',
    question: 'Какой белок в бурой жировой ткани отвечает за выработку тепла вместо синтеза АТФ (несократительный термогенез)?',
    options: [
      { letter: 'А', text: 'Гемоглобин', correct: false },
      { letter: 'Б', text: 'Инсулин', correct: false },
      { letter: 'В', text: 'Термогенин (UCP1)', correct: true },
    ],
    explanation: 'Термогенин (UCP1) разобщает окислительное фосфорилирование: вместо АТФ энергия выделяется в виде тепла. Особенно важен у щенков и котят для согревания.',
  },
  {
    id: 1003,
    topic: 'Стадии лихорадки',
    title: 'Вопрос 3',
    question: 'Что характерно для первой стадии лихорадки (Stadium incrementi)?',
    options: [
      { letter: 'А', text: 'Пациент горячий на ощупь, слизистые красные, сосуды расширены', correct: false },
      { letter: 'Б', text: 'Теплоотдача превышает теплопродукцию, пациент сильно потеет', correct: false },
      { letter: 'В', text: 'Теплопродукция превышает теплоотдачу: озноб, дрожь, бледные слизистые, холодные конечности', correct: true },
    ],
    explanation: 'В стадии подъёма организм копит тепло: сосуды сужаются (бледность, холодные лапы), начинается дрожь и пилоэрекция. Теплопродукция > Теплоотдачи.',
  },
  {
    id: 1004,
    topic: 'Методы измерения',
    title: 'Вопрос 4',
    question: 'Какой метод измерения температуры считается «золотым стандартом» в ветеринарной клинике?',
    options: [
      { letter: 'А', text: 'Бесконтактное измерение температуры носа инфракрасным пистолетом', correct: false },
      { letter: 'Б', text: 'Ректальная термометрия электронным термометром', correct: true },
      { letter: 'В', text: 'Измерение температуры в ухе (если там много серы)', correct: false },
    ],
    explanation: 'Ректальное измерение даёт наиболее точные данные о температуре ядра тела. Электронный термометр: 30–60 сек. Глубина: кошки 1–2 см, собаки 2–3 см.',
  },
  {
    id: 1005,
    topic: 'Терморегуляция у собак и кошек',
    title: 'Вопрос 5',
    question: 'Почему собаки и кошки активно дышат с открытым ртом (полипноэ) в жару?',
    options: [
      { letter: 'А', text: 'Чтобы увеличить поступление кислорода к мозгу', correct: false },
      { letter: 'Б', text: 'Это единственный эффективный способ испарительной теплоотдачи, так как у них мало потовых желез на теле', correct: true },
      { letter: 'В', text: 'Чтобы успокоиться и снизить уровень стресса', correct: false },
    ],
    explanation: 'Испарение влаги со слизистых дыхательных путей и языка — основной механизм охлаждения у собак и кошек, так как потовых желез по телу у них почти нет.',
  },
]

// Обратная совместимость со старым кодом
export const QUIZ_QUESTIONS = MUCOUS_QUESTIONS
