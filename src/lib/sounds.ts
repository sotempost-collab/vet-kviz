// Менеджер звуков: воспроизводит аудио реакции и озвучку на русском языке.
// Все аудио лежат в /public/audio/ — см. scripts/generate-tts.ts

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

// Озвучка вступления, вопросов, вариантов, пояснений, финала
const NARRATION_FILES: Record<string, string> = {
  intro: '/audio/intro.wav',
  'q1-question': '/audio/q1-question.wav',
  'q1-option-a': '/audio/q1-option-a.wav',
  'q1-option-b': '/audio/q1-option-b.wav',
  'q1-option-c': '/audio/q1-option-c.wav',
  'q1-explanation': '/audio/q1-explanation.wav',
  'q2-question': '/audio/q2-question.wav',
  'q2-option-a': '/audio/q2-option-a.wav',
  'q2-option-b': '/audio/q2-option-b.wav',
  'q2-option-c': '/audio/q2-option-c.wav',
  'q2-explanation': '/audio/q2-explanation.wav',
  'finish-success': '/audio/finish-success.wav',
  'finish-partial': '/audio/finish-partial.wav',
  'finish-poor': '/audio/finish-poor.wav',
}

let praiseIndex = 0
let lastOopsIndex = -1
let muted = false

// Текущий проигрываемый аудио — чтобы можно было остановить при переключении
let currentAudio: HTMLAudioElement | null = null

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
  ;[...PRAISE_FILES, ...OOPS_FILES, ...Object.values(NARRATION_FILES)].forEach(preload)
  preloaded = true
}

// Переключатель вкл/выкл звука
export function setMuted(value: boolean): void {
  muted = value
  if (muted && currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
}

export function isMuted(): boolean {
  return muted
}

// Останавливаем текущее воспроизведение (например, перед запуском нового трека)
function stopCurrent(): void {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
    currentAudio = null
  }
}

// Чередуем похвалу по кругу: молодец → верно → точно → молодец → ...
export function playPraise(): void {
  if (muted || typeof Audio === 'undefined') return
  // Похвала должна играться даже если было воспроизведение озвучки — обрываем и играем
  stopCurrent()
  const file = PRAISE_FILES[praiseIndex % PRAISE_FILES.length]
  praiseIndex++
  const audio = new Audio(file)
  audio.volume = 0.9
  currentAudio = audio
  void audio.play().catch(() => {})
}

// Случайный «ой» из трёх вариантов (без повторения подряд)
export function playOops(): void {
  if (muted || typeof Audio === 'undefined') return
  stopCurrent()
  let idx = Math.floor(Math.random() * OOPS_FILES.length)
  if (idx === lastOopsIndex && OOPS_FILES.length > 1) {
    idx = (idx + 1) % OOPS_FILES.length
  }
  lastOopsIndex = idx
  const audio = new Audio(OOPS_FILES[idx])
  audio.volume = 0.9
  currentAudio = audio
  void audio.play().catch(() => {})
}

// Воспроизводит озвучку по ключу из NARRATION_FILES
// Опциональный параметр delay — задержка перед стартом (для паузы после реакции)
export function playNarration(key: string, delayMs = 0): void {
  if (muted || typeof Audio === 'undefined') return
  const file = NARRATION_FILES[key]
  if (!file) {
    console.warn(`Unknown narration key: ${key}`)
    return
  }
  stopCurrent()
  const audio = new Audio(file)
  audio.volume = 1.0
  currentAudio = audio
  const start = () => {
    void audio.play().catch(() => {})
  }
  if (delayMs > 0) {
    window.setTimeout(start, delayMs)
  } else {
    start()
  }
}

export function stopNarration(): void {
  stopCurrent()
}

// Финальная озвучка в зависимости от результата
export function playFinish(score: number, total: number): void {
  if (muted || typeof Audio === 'undefined') return
  const percentage = total > 0 ? score / total : 0
  const key =
    score === total ? 'finish-success' : percentage >= 0.5 ? 'finish-partial' : 'finish-poor'
  playNarration(key, 300)
}
