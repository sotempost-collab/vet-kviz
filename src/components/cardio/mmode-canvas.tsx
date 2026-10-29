'use client'

import { useRef, useEffect, useState } from 'react'

// M-mode (Motion-mode) — одномерное УЗИ с движением во времени
// Показывает движение структур сердца в течение цикла
// Вдоль оси Y — глубина (структуры), вдоль X — время (прокрутка)

interface MModeProps {
  heartRateHz: number  // частота сердцебиения в Гц
  isPlaying: boolean
}

interface Structure {
  name: string
  baseY: number  // базовая позиция (px от верха)
  amplitude: number  // амплитуда движения (px)
  phase: number  // сдвиг фазы (0-1)
  thickness: number  // толщина линии (px)
  color: string
}

// Структуры сердца сверху вниз (как на M-mode через парастернальный доступ)
const STRUCTURES: Structure[] = [
  { name: 'Стенка грудной полости', baseY: 25, amplitude: 0, phase: 0, thickness: 8, color: '#7d6608' },
  { name: 'Передняя стенка ПЖ', baseY: 60, amplitude: 4, phase: 0.0, thickness: 6, color: '#a93226' },
  { name: 'Просвет ПЖ', baseY: 90, amplitude: 3, phase: 0.05, thickness: 0, color: '#000000' },
  { name: 'Межжелудочковая перегородка', baseY: 120, amplitude: 8, phase: 0.0, thickness: 7, color: '#cb4335' },
  { name: 'Просвет ЛЖ', baseY: 155, amplitude: 12, phase: 0.05, thickness: 0, color: '#000000' },
  { name: 'Задняя стенка ЛЖ', baseY: 195, amplitude: 6, phase: 0.0, thickness: 8, color: '#a93226' },
  { name: 'Перикард', baseY: 225, amplitude: 0, phase: 0, thickness: 5, color: '#5b2c6f' },
]

const CANVAS_W = 600
const CANVAS_H = 250
const SCROLL_SPEED = 80  // пикселей в секунду

export default function MModeCanvas({ heartRateHz, isPlaying }: MModeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Храним массив column data для отрисовки (имитация "прокрутки")
  // Используем ref чтобы не вызывать ре-рендер
  const lastTimeRef = useRef<number>(0)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Чёрный фон
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

    let elapsed = 0

    const drawColumn = (x: number) => {
      // Фаза сердечного цикла (0-1)
      const phase = (elapsed * heartRateHz) % 1

      for (const s of STRUCTURES) {
        if (s.thickness === 0) continue  // это просвет (чёрный)
        // Позиция линии зависит от фазы и фазового сдвига структуры
        const localPhase = (phase + s.phase) % 1
        const motion = Math.sin(localPhase * Math.PI * 2) * s.amplitude
        // Для стенок: верхние — движутся вниз в систолу, нижние — вверх
        const direction = s.baseY < 150 ? 1 : -1
        const y = s.baseY + motion * direction

        ctx.fillStyle = s.color
        const half = s.thickness / 2
        ctx.fillRect(x, y - half, 1, s.thickness)
      }
    }

    const draw = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000
      lastTimeRef.current = now
      if (isPlaying) {
        elapsed += dt
      }

      // Скролл влево — копируем существующее изображение влево
      const scrollPx = isPlaying ? SCROLL_SPEED * dt : 0
      const shift = Math.floor(scrollPx)
      if (shift > 0) {
        const imageData = ctx.getImageData(shift, 0, CANVAS_W - shift, CANVAS_H)
        ctx.putImageData(imageData, 0, 0)
        ctx.fillStyle = '#000'
        ctx.fillRect(CANVAS_W - shift, 0, shift, CANVAS_H)
        for (let x = CANVAS_W - shift; x < CANVAS_W; x++) {
          drawColumn(x)
        }
      }
      animFrameRef.current = requestAnimationFrame(draw)
    }

    lastTimeRef.current = performance.now()
    animFrameRef.current = requestAnimationFrame(draw)

    return () => cancelAnimationFrame(animFrameRef.current)
  }, [heartRateHz, isPlaying])

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-rose-200 bg-black shadow-lg">
      <div className="border-b border-rose-900/30 bg-rose-950/30 px-3 py-2 text-xs font-bold uppercase tracking-wide text-rose-100">
        📊 M-mode — движение стенок сердца во времени
      </div>
      <div className="relative" style={{ width: '100%', aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}>
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="absolute inset-0 h-full w-full"
        />
        {/* Подписи структур справа */}
        <div className="pointer-events-none absolute right-2 top-2 space-y-0.5 text-right">
          {STRUCTURES.filter(s => s.thickness > 0).map(s => (
            <div
              key={s.name}
              className="text-[9px] font-medium"
              style={{ color: s.color }}
            >
              {s.name}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-rose-900/30 bg-rose-950/30 px-3 py-1.5 text-[10px] text-rose-200">
        X: время → • Y: глубина ↓ • Прокрутка слева направо ({(heartRateHz * 60).toFixed(0)} уд/мин)
      </div>
    </div>
  )
}
