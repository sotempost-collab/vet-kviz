// Менеджер звуков: воспроизводит аудио реакции на ответ через HTML5 Audio.
// Все аудио лежат в /public/audio/ — см. src/scripts/generate-tts.ts

const PRAISE_FILES = [
  '/audio/praise-molodets.wav',
  '/audio/praise-verno.wav',
  '/audio/praise-tochno.wav',
] as const

const OOPS_FILES = [
  '/audio/oops-1.wav',
  '/audio/oops-2.wav',
  '/audio/oops-3.wav',
] as const

const FINISH_SUCCESS = '/audio/finish-success.wav'
const FINISH_PARTIAL = '/audio/finish-partial.wav'

let praiseIndex = 0
let lastOopsIndex = -1

function preload(path: string): HTMLAudioElement | null {
  if (typeof Audio === 'undefined') return null
  const audio = new Audio(path)
  audio.preload = 'auto'
  return audio
}

// Прелоадим все аудио при загрузке страницы (только в браузере)
let preloaded = false
export function preloadSounds(): void {
  if (preloaded || typeof Audio === 'undefined') return
  ;[...PRAISE_FILES, ...OOPS_FILES, FINISH_SUCCESS, FINISH_PARTIAL].forEach(preload)
  preloaded = true
}

// Чередуем похвалу по кругу: молодец → верно → точно → молодец → ...
export function playPraise(): void {
  if (typeof Audio === 'undefined') return
  const file = PRAISE_FILES[praiseIndex % PRAISE_FILES.length]
  praiseIndex++
  const audio = new Audio(file)
  audio.volume = 0.9
  void audio.play().catch(() => {
    // Браузер может блокировать авто-звук до первого пользовательского клика — это ок
  })
}

// Случайный «ой» из трёх вариантов (без повторения подряд)
export function playOops(): void {
  if (typeof Audio === 'undefined') return
  let idx = Math.floor(Math.random() * OOPS_FILES.length)
  if (idx === lastOopsIndex && OOPS_FILES.length > 1) {
    idx = (idx + 1) % OOPS_FILES.length
  }
  lastOopsIndex = idx
  const audio = new Audio(OOPS_FILES[idx])
  audio.volume = 0.9
  void audio.play().catch(() => {})
}

export function playFinish(success: boolean): void {
  if (typeof Audio === 'undefined') return
  const audio = new Audio(success ? FINISH_SUCCESS : FINISH_PARTIAL)
  audio.volume = 0.9
  void audio.play().catch(() => {})
}
