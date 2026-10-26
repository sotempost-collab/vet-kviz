// Данные по артериям собачьего сердца для 3D-модуля
// Каждый объект описывает один сосуд — его 3D-кривую, цвет, описание

import * as THREE from 'three'

export interface Artery {
  id: string
  name: string
  latinName: string
  category: 'artery' | 'vein' | 'heart'
  description: string
  function: string
  clinical: string
  // 3D-кривая (массив точек [x, y, z]) для TubeGeometry
  points: [number, number, number][]
  radius: number
  color: string
}

// Цвета
const ARTERY_COLOR = '#c0392b'      // тёмно-красный для артерий
const VEIN_COLOR = '#1f4fa5'         // тёмно-синий для вен
const PULM_ARTERY_COLOR = '#3a7bd5' // голубой для лёгочной артерии (несёт венозную кровь)
const PULM_VEIN_COLOR = '#d63384'   // розовый для лёгочных вен (несут артериальную кровь)

export const ARTERIES: Artery[] = [
  {
    id: 'aorta',
    name: 'Аорта',
    latinName: 'Aorta',
    category: 'artery',
    description: 'Самая крупная артерия тела. Выходит из левого желудочка сердца.',
    function: 'Несёт артериальную (оксигенированную) кровь ко всем органам тела.',
    clinical: 'Расслоение аорты, коарктация, аневризма — жизнеугрожающие состояния.',
    points: [
      [0, 0.3, 0],     // начало — левый желудочек
      [0, 1.2, 0.3],   // восходящая часть
      [0.3, 2.2, 0.5], // дуга
      [0.6, 2.4, 0.3], // верх дуги
      [0.5, 1.8, 0],   // нисходящая часть (грудная)
      [0.4, 0.8, -0.3],
      [0.3, -0.5, -0.5],
      [0.2, -1.5, -0.6],
    ],
    radius: 0.18,
    color: ARTERY_COLOR,
  },
  {
    id: 'pulmonary-trunk',
    name: 'Лёгочный ствол',
    latinName: 'Truncus pulmonalis',
    category: 'artery',
    description: 'Выходит из правого желудочка. Несёт венозную кровь в лёгкие.',
    function: 'Транспортирует деоксигенированную кровь к лёгким для газообмена.',
    clinical: 'Лёгочная гипертензия, стеноз лёгочной артерии (часто у брахиоцефальных пород).',
    points: [
      [0.3, 0.3, 0.2],
      [0.4, 1.0, 0.3],
      [0.5, 1.8, 0.4],
      [0.55, 2.4, 0.5],
      [0.5, 2.6, 0.55],
    ],
    radius: 0.14,
    color: PULM_ARTERY_COLOR,
  },
  {
    id: 'brachiocephalic-trunk',
    name: 'Плечеголовной ствол',
    latinName: 'Truncus brachiocephalicus',
    category: 'artery',
    description: 'Первая ветвь дуги аорты. У собак даёт правую подключичную и общую сонную.',
    function: 'Кровоснабжение головы, шеи и правой передней конечности.',
    clinical: 'Окклюзия → ишемия мозга, паралич правой передней лапы.',
    points: [
      [0.3, 2.2, 0.5],
      [0.5, 2.5, 0.55],
      [0.7, 2.7, 0.6],
      [0.9, 2.85, 0.65],
    ],
    radius: 0.09,
    color: ARTERY_COLOR,
  },
  {
    id: 'left-subclavian',
    name: 'Левая подключичная артерия',
    latinName: 'A. subclavia sinistra',
    category: 'artery',
    description: 'У собак обычно отходит от плечеголовного ствола. Идёт к левой передней лапе.',
    function: 'Кровоснабжение левой передней конечности.',
    clinical: 'Травма → кровотечение, ишемия левой передней лапы.',
    points: [
      [0.4, 2.3, 0.45],
      [0.2, 2.6, 0.4],
      [0, 2.8, 0.3],
      [-0.2, 2.9, 0.2],
    ],
    radius: 0.08,
    color: ARTERY_COLOR,
  },
  {
    id: 'common-carotid',
    name: 'Общая сонная артерия',
    latinName: 'A. carotis communis',
    category: 'artery',
    description: 'Парная артерия, идёт вверх по шее к голове.',
    function: 'Главный кровоток к голове и мозгу.',
    clinical: 'Повреждение → массивное кровотечение. Пальпация пульса на ней — способ оценки кровообращения.',
    points: [
      [0.7, 2.85, 0.65],
      [0.8, 3.4, 0.7],
      [0.85, 4.0, 0.75],
      [0.88, 4.5, 0.78],
    ],
    radius: 0.07,
    color: ARTERY_COLOR,
  },
  {
    id: 'cranial-vena-cava',
    name: 'Краниальная полая вена',
    latinName: 'V. cava cranialis',
    category: 'vein',
    description: 'Собирает кровь от головы, шеи и передних конечностей.',
    function: 'Возвращает венозную кровь в правое предсердие.',
    clinical: 'Катетеризация для введения препаратов и измерения ЦВД.',
    points: [
      [1.0, 4.0, 0.85],
      [0.9, 3.0, 0.75],
      [0.8, 2.0, 0.6],
      [0.7, 1.0, 0.4],
      [0.6, 0.5, 0.3],
    ],
    radius: 0.13,
    color: VEIN_COLOR,
  },
  {
    id: 'caudal-vena-cava',
    name: 'Каудальная полая вена',
    latinName: 'V. cava caudalis',
    category: 'vein',
    description: 'Собирает кровь от задней части тела (конечности, органы таза и брюшной полости).',
    function: 'Возвращает венозную кровь в правое предсердие.',
    clinical: 'Кава-фильтр при тромбоэмболии. Давление в ней = ЦВД.',
    points: [
      [0.2, -1.5, -0.6],
      [0.15, -0.5, -0.4],
      [0.1, 0.5, -0.1],
      [0.05, 1.0, 0.1],
    ],
    radius: 0.14,
    color: VEIN_COLOR,
  },
  {
    id: 'pulmonary-veins',
    name: 'Лёгочные вены',
    latinName: 'Vv. pulmonales',
    category: 'vein',
    description: 'Возвращают оксигенированную кровь из лёгких в левое предсердие.',
    function: 'Единственные вены, несущие артериальную кровь.',
    clinical: 'Стеноз лёгочных вен — редкий врождённый порок.',
    points: [
      [-0.6, 2.5, -0.5],
      [-0.5, 2.0, -0.3],
      [-0.4, 1.5, -0.1],
      [-0.3, 1.2, 0],
    ],
    radius: 0.08,
    color: PULM_VEIN_COLOR,
  },
]

// Создаёт Three.js кривую из точек для TubeGeometry
export function createArteryCurve(artery: Artery): THREE.CatmullRomCurve3 {
  return new THREE.CatmullRomCurve3(
    artery.points.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
  )
}

// Точки для построения упрощённой формы сердца (желудочки)
export const HEART_VENTRICLES = {
  // Левый желудочек (более крупный, конусообразный)
  left: {
    position: [0, 0, 0.1] as [number, number, number],
    scale: [0.65, 1.0, 0.55] as [number, number, number],
    color: '#a83232',
  },
  // Правый желудочек (поменьше)
  right: {
    position: [0.45, 0, 0.15] as [number, number, number],
    scale: [0.45, 0.8, 0.4] as [number, number, number],
    color: '#7c2323',
  },
  // Левое предсердие (сверху-сзади)
  leftAtrium: {
    position: [-0.15, 1.1, -0.1] as [number, number, number],
    scale: [0.35, 0.35, 0.35] as [number, number, number],
    color: '#8b2929',
  },
  // Правое предсердие (сверху-спереди)
  rightAtrium: {
    position: [0.5, 1.0, 0.2] as [number, number, number],
    scale: [0.32, 0.32, 0.32] as [number, number, number],
    color: '#6b1f1f',
  },
}

export const CARDIO_TITLE = 'Сердечно-сосудистая система'
export const CARDIO_SUBTITLE = 'Анатомия сердца собаки — 3D-модель с интерактивными артериями'
