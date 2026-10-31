'use client'

import { useState, useRef, useMemo, useCallback, Suspense } from 'react'
import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber'
import { OrbitControls, Html, Line, ContactShadows, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, RotateCw, MousePointerClick, BookOpen, Activity, ArrowRight, X, Pause, Play, Gauge } from 'lucide-react'
import {
  HEART_RATE_HZ,
  CARDIO_TITLE,
  CARDIO_SUBTITLE,
} from '@/lib/cardio-data'


// ============== ANIMATED VALVE ==============
// Клапаны и артерии временно убраны — будут заменены на новые

// ============== GLB 3D MODEL LOADER ==============
useGLTF.preload('/models/heart1.glb')
useGLTF.preload('/models/heart2.glb')

function HeartGLBModel({ heartRateHz, isPlaying, modelNumber }: { heartRateHz: number; isPlaying: boolean; modelNumber: 1 | 2 }) {
  const url = modelNumber === 1 ? '/models/heart1.glb' : '/models/heart2.glb'
  const { scene } = useGLTF(url, true)
  const ref = useRef<THREE.Group>(null)
  const tRef = useRef(0)

  useFrame((_, delta) => {
    if (!ref.current) return
    if (isPlaying) tRef.current += delta
    const phase = (tRef.current * heartRateHz) % 1
    let s = 1
    if (phase < 0.4) {
      s = 1 - 0.05 * Math.sin((phase / 0.4) * Math.PI)
    } else {
      s = 1 + 0.02 * Math.sin(((phase - 0.4) / 0.6) * Math.PI)
    }
    ref.current.scale.setScalar(s)
  })

  return (
    <group ref={ref} scale={0.5} position={[0.2, 0.3, 0]}>
      <primitive object={scene} />
    </group>
  )
}

// ============== HEART MODEL ==============
function HeartModel({
  heartRateHz,
  isPlaying,
  modelNumber,
}: {
  heartRateHz: number
  isPlaying: boolean
  modelNumber: 1 | 2
}) {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.0} castShadow />
      <directionalLight position={[-3, 2, -3]} intensity={0.4} />

      {/* Реалистичная 3D-модель сердца (GLB) */}
      <group>
        <Suspense fallback={null}>
          <HeartGLBModel heartRateHz={heartRateHz} isPlaying={isPlaying} modelNumber={modelNumber} />
        </Suspense>
      </group>

      {/* Тень под сердцем */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.5}
        scale={8}
        blur={2.5}
        far={4}
      />
    </group>
  )
}

// ============== MAIN APP ==============
export default function CardioApp() {
  const [heartRateBpm, setHeartRateBpm] = useState(90)
  const [isPlaying, setIsPlaying] = useState(true)
  const [modelNumber, setModelNumber] = useState<1 | 2>(1)

  const heartRateHz = heartRateBpm / 60

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: isPlaying ? [1, 1.08, 1, 1.04, 1] : 1 }}
              transition={{ duration: 1 / heartRateHz, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/30"
            >
              <Heart className="h-6 w-6" />
            </motion.div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-rose-950 sm:text-2xl">
                {CARDIO_TITLE}
              </h1>
              <p className="text-xs font-medium text-rose-700/70 sm:text-sm">
                {CARDIO_SUBTITLE}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1.5 rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-rose-700 shadow-sm backdrop-blur sm:flex">
              <RotateCw className="h-3.5 w-3.5" />
              <span>Вращение мышкой</span>
            </div>
          </div>
        </motion.header>

        {/* 3D Canvas — full width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative h-[500px] overflow-hidden rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-slate-50 to-rose-50 shadow-xl sm:h-[600px]"
        >
          <Suspense fallback={<CanvasFallback />}>
            <Canvas
              shadows
              camera={{ position: [3, 2, 4], fov: 50 }}
              gl={{ antialias: true, alpha: true }}
              dpr={[1, 2]}
            >
              <color attach="background" args={['#fdf2f8']} />
              <fog attach="fog" args={['#fdf2f8', 8, 18]} />
              <HeartModel
                heartRateHz={heartRateHz}
                isPlaying={isPlaying}
                modelNumber={modelNumber}
              />
              <OrbitControls
                enablePan={false}
                minDistance={3}
                maxDistance={10}
                target={[0.3, 1, 0]}
                autoRotate={false}
              />
            </Canvas>
          </Suspense>

          {/* Model toggle — переключатель между двумя 3D-моделями */}
          <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full border border-rose-200 bg-white/95 p-1 shadow-md backdrop-blur">
            <button
              onClick={() => setModelNumber(1)}
              className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                modelNumber === 1
                  ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-sm'
                  : 'text-rose-700 hover:bg-rose-50'
              }`}
            >
              Вид 1
            </button>
            <button
              onClick={() => setModelNumber(2)}
              className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                modelNumber === 2
                  ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-sm'
                  : 'text-rose-700 hover:bg-rose-50'
              }`}
            >
              Вид 2
            </button>
          </div>

          {/* Heart rate controls — bottom right of canvas */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-rose-200 bg-white/95 px-3 py-1.5 shadow-md backdrop-blur">
            <button
              onClick={() => setIsPlaying(p => !p)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500 text-white hover:bg-rose-600"
              aria-label={isPlaying ? 'Пауза' : 'Старт'}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
            <div className="flex items-center gap-1.5">
              <Gauge className="h-3.5 w-3.5 text-rose-600" />
              <input
                type="range"
                min={60}
                max={160}
                value={heartRateBpm}
                onChange={e => setHeartRateBpm(Number(e.target.value))}
                className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-rose-200 accent-rose-500"
              />
              <span className="w-10 text-xs font-bold tabular-nums text-rose-700">
                {heartRateBpm}
              </span>
            </div>
          </div>

          {/* Hint */}
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-rose-700 shadow-md backdrop-blur">
            🖱️ Вращайте мышкой • Переключайте виды
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-rose-700/60">
          3D-модель сердца собаки • Для ветеринарных специалистов и студентов
        </footer>
      </main>
    </div>
  )
}

function CanvasFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart className="mx-auto h-12 w-12 text-rose-500" />
        </motion.div>
        <div className="mt-2 text-sm font-medium text-rose-700">Загрузка 3D-сцены...</div>
      </div>
    </div>
  )
}

/* ============== BACKGROUND BUBBLES ============== */
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
          className="absolute rounded-full bg-gradient-to-br from-white/40 to-rose-200/30 backdrop-blur-sm"
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
