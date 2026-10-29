// Данные пазла — 3 горизонтальных куска гистологического среза.
// Кусок 0 = верхний слой (эпителий), 1 = средний (собственная пластинка), 2 = нижний (мышца).
// correctSlot совпадает с id: кусок N должен встать в слот N.

export interface PuzzlePiece {
  id: number
  imageUrl: string
  correctSlot: number
  name: string
  description: string
}

export const PUZZLE_PIECES: PuzzlePiece[] = [
  {
    id: 0,
    imageUrl: '/images/epithelium-piece-0.webp',
    correctSlot: 0,
    name: 'Эпителий',
    description: 'Верхний слой — многослойный плоский неороговевающий эпителий (розово-фиолетовый)',
  },
  {
    id: 1,
    imageUrl: '/images/epithelium-piece-1.webp',
    correctSlot: 1,
    name: 'Собственная пластинка',
    description: 'Средний слой — рыхлая соединительная ткань с сосудами и железами',
  },
  {
    id: 2,
    imageUrl: '/images/epithelium-piece-2.webp',
    correctSlot: 2,
    name: 'Мышечная пластинка',
    description: 'Нижний слой — гладкая мускулатура (красные волокна)',
  },
]

export const PUZZLE_FULL_IMAGE = '/images/epithelium-full.webp'
export const PUZZLE_TITLE = 'Собери ткань'
export const PUZZLE_SUBTITLE = '3 слоя слизистой оболочки в правильном порядке'

// Имена слоёв сверху вниз — для отображения под слотами после завершения
export const PUZZLE_LAYER_NAMES = [
  'Слой 1 — Эпителий',
  'Слой 2 — Собственная пластинка',
  'Слой 3 — Мышечная пластинка',
]
