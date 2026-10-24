// Менеджер звуков: только 2 эффекта — кошачье мяуканье (правильный ответ)
// и собачий рык (неправильный ответ). Никакой голосовой озвучки.

const CAT_MEOW = '/audio/cat-meow.wav'
const DOG_GROWL = '/audio/dog-growl.wav'

let muted = false
let currentAudio: HTMLAudioElement | null = null

function preload(path: string): HTMLAudioElement | null {
  if (typeof Audio === 'undefined') return null
  const audio = new Audio(path)
  audio.preload = 'auto'
  return audio
}

// Прелоадим звуки при загрузке страницы (только в браузере)
let preloaded = false
export function preloadSounds(): void {
  if (preloaded || typeof Audio === 'undefined') return
  preload(CAT_MEOW)
  preload(DOG_GROWL)
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

function stopCurrent(): void {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
    currentAudio = null
  }
}

// Кошачье мяуканье — при правильном ответе
export function playPraise(): void {
  if (muted || typeof Audio === 'undefined') return
  stopCurrent()
  const audio = new Audio(CAT_MEOW)
  audio.volume = 0.85
  currentAudio = audio
  void audio.play().catch(() => {})
}

// Собачий рык — при неправильном ответе
export function playOops(): void {
  if (muted || typeof Audio === 'undefined') return
  stopCurrent()
  const audio = new Audio(DOG_GROWL)
  audio.volume = 0.9
  currentAudio = audio
  void audio.play().catch(() => {})
}

// Заглушка для совместимости со старым API (больше не используется)
export function playFinish(_score: number, _total: number): void {
  // Звуков финала больше нет — тихий финал
}

export function playNarration(_key: string, _delayMs = 0): void {
  // Голосовая озвучка полностью убрана
}

export function stopNarration(): void {
  stopCurrent()
}
