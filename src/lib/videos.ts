// Конфигурация видео — все ссылки на внешние видео-файлы
// Видео хранятся на CDN relaxdev.ru, не в репозитории
//
// Чтобы добавить новое видео:
// 1. Загрузите файл на https://relaxdev.ru
// 2. Получите прямую ссылку (вида https://cdn.relaxdev.ru/users/.../file.mp4)
// 3. Добавьте запись сюда с описанием
// 4. В компоненте используйте: <VideoPlayer src={VIDEOS['key'].src} ... />

export interface VideoConfig {
  src: string        // прямой URL на .mp4 файл
  title: string      // заголовок над плеером
  subtitle?: string  // подзаголовок (описание)
}

export const VIDEOS: Record<string, VideoConfig> = {
  // ============ БЛОК «СЛИЗИСТЫЕ» ============
  'mucous-intro': {
    src: 'https://cdn.relaxdev.ru/users/cmuqidv0d00fspn018pp2xupe/vet-kviz/_1080p_caption.mp4',
    title: 'Видео-вступление к гайду',
    subtitle: 'Ольга представляет материал по слизистым оболочкам',
  },

  // ============ БЛОК «ТЕМПЕРАТУРА» ============
  'temperature-intro': {
    src: 'https://cdn.relaxdev.ru/users/cmuqidv0d00fspn018pp2xupe/vet-kviz/_1080p_TEMPERATURA.mp4',
    title: 'Видео-вступление к гайду',
    subtitle: 'Терморегуляция и клиническая оценка температуры',
  },

  // ============ БЛОК «ГИДРАТАЦИЯ» ============
  'hydration-intro': {
    src: 'https://cdn.relaxdev.ru/users/cmuqidv0d00fspn018pp2xupe/vet-kviz/_1080p_gidrodazia.mp4',
    title: 'Видео-вступление к гайду',
    subtitle: 'Гидратация и водный баланс собак и кошек',
  },

  // ============ БЛОК «СЕРДЦЕ» ============
  // 'heart-intro': {
  //   src: 'https://cdn.relaxdev.ru/users/.../heart-intro.mp4',
  //   title: '...',
  //   subtitle: '...',
  // },
}

// Хелпер: получить видео по ключу или undefined
export function getVideo(key: string): VideoConfig | undefined {
  return VIDEOS[key]
}
