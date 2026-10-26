'use client'

import { useState, useRef, useMemo, useCallback, Suspense } from 'react'
import { Canvas, type ThreeEvent } from '@react-three/fiber'
import { OrbitControls, Html, Line, ContactShadows, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, RotateCw, MousePointerClick, BookOpen, Activity, ArrowRight, X } from 'lucide-react'
import {
  ARTERIES,
  HEART_VENTRICLES,
  createArteryCurve,
  CARDIO_TITLE,
  CARDIO_SUBTITLE,
  type Artery,
} from '@/lib/cardio-data'

// ============== 3D HEART COMPONENT ==============
function HeartModel({ selectedId, onSelect }: { selectedId: string | null; onSelect: (a: Artery) => void }) {
  // Создаём кривые один раз
  const arteryCurves = useMemo(() => ARTERIES.map(a => ({ artery: a, curve: createArteryCurve(a) })), [])

  return (
    <group>
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.0} castShadow />
      <directionalLight position={[-3, 2, -3]} intensity={0.4} />

      {/* Сердце — стилизованная модель из примитивов */}
      <group position={[0, 0, 0]}>
        {/* Левый желудочек */}
        <mesh
          position={HEART_VENTRICLES.left.position}
          scale={HEART_VENTRICLES.left.scale}
          castShadow
          onClick={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation()
            onSelect({
              id: 'left-ventricle',
              name: 'Левый желудочек',
              latinName: 'Ventriculus sinister',
              category: 'heart',
              description: 'Самая мощная камера сердца. Стенка толщиной 1-1.5 см.',
              function: 'Выбрасывает артериальную кровь в аорту под высоким давлением.',
              clinical: 'Гипертрофия при стенозе аорты; дилатация при ДКМ.',
              points: [],
              radius: 0,
              color: '',
            })
          }}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={HEART_VENTRICLES.left.color} roughness={0.6} metalness={0.05} />
        </mesh>

        {/* Правый желудочек */}
        <mesh
          position={HEART_VENTRICLES.right.position}
          scale={HEART_VENTRICLES.right.scale}
          castShadow
          onClick={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation()
            onSelect({
              id: 'right-ventricle',
              name: 'Правый желудочек',
              latinName: 'Ventriculus dexter',
              category: 'heart',
              description: 'Стенка тоньше (3-5 мм), чем у левого — нужно меньшее давление.',
              function: 'Выбрасывает венозную кровь в лёгочный ствол (малый круг).',
              clinical: 'Гипертрофия при стенозе лёгочной артерии или легочной гипертензии.',
              points: [],
              radius: 0,
              color: '',
            })
          }}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={HEART_VENTRICLES.right.color} roughness={0.6} metalness={0.05} />
        </mesh>

        {/* Левое предсердие */}
        <mesh
          position={HEART_VENTRICLES.leftAtrium.position}
          scale={HEART_VENTRICLES.leftAtrium.scale}
          castShadow
          onClick={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation()
            onSelect({
              id: 'left-atrium',
              name: 'Левое предсердие',
              latinName: 'Atrium sinistrum',
              category: 'heart',
              description: 'Принимает оксигенированную кровь из 4 лёгочных вен.',
              function: 'Резервуар перед левым желудочком. Объём ~30-40 мл у собаки.',
              clinical: 'Дилатация при митральной недостаточности.',
              points: [],
              radius: 0,
              color: '',
            })
          }}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={HEART_VENTRICLES.leftAtrium.color} roughness={0.65} metalness={0.05} />
        </mesh>

        {/* Правое предсердие */}
        <mesh
          position={HEART_VENTRICLES.rightAtrium.position}
          scale={HEART_VENTRICLES.rightAtrium.scale}
          castShadow
          onClick={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation()
            onSelect({
              id: 'right-atrium',
              name: 'Правое предсердие',
              latinName: 'Atrium dextrum',
              category: 'heart',
              description: 'Принимает кровь из краниальной и каудальной полых вен.',
              function: 'Резервуар венозной крови перед правым желудочком.',
              clinical: 'Дилатация при трикуспидальной недостаточности.',
              points: [],
              radius: 0,
              color: '',
            })
          }}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={HEART_VENTRICLES.rightAtrium.color} roughness={0.65} metalness={0.05} />
        </mesh>
      </group>

      {/* Артерии — проходим по массиву и строим TubeGeometry */}
      {arteryCurves.map(({ artery, curve }) => {
        const geometry = new THREE.TubeGeometry(curve, 64, artery.radius, 16, false)
        const isSelected = selectedId === artery.id
        const isFaded = selectedId !== null && !isSelected

        return (
          <mesh
            key={artery.id}
            geometry={geometry}
            castShadow
            onClick={(e: ThreeEvent<MouseEvent>) => {
              e.stopPropagation()
              onSelect(artery)
            }}
            onPointerOver={(e: ThreeEvent<PointerEvent>) => {
              e.stopPropagation()
              document.body.style.cursor = 'pointer'
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'auto'
            }}
          >
            <meshStandardMaterial
              color={artery.color}
              roughness={0.4}
              metalness={0.15}
              emissive={isSelected ? artery.color : '#000000'}
              emissiveIntensity={isSelected ? 0.4 : 0}
              transparent={isFaded}
              opacity={isFaded ? 0.35 : 1.0}
            />
          </mesh>
        )
      })}

      {/* Стилизованная грудная клетка (контур рёбер) */}
      <RibsOutline />

      {/* Тень под сердцем */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.5}
        scale={8}
        blur={2.5}
        far={4}
      />

      {/* HTML-лейбл для выбранной артерии */}
      {selectedId && (() => {
        const selected = ARTERIES.find(a => a.id === selectedId) || null
        if (!selected) return null
        const midPoint = selected.points[Math.floor(selected.points.length / 2)]
        return (
          <Html position={midPoint} center distanceFactor={8} occlude={false}>
            <div className="pointer-events-none whitespace-nowrap rounded-lg bg-white/95 px-3 py-1.5 shadow-lg ring-2 ring-blue-400">
              <div className="text-xs font-bold uppercase tracking-wide text-blue-700">
                {selected.name}
              </div>
              <div className="text-[10px] italic text-blue-700/70">{selected.latinName}</div>
            </div>
          </Html>
        )
      })()}
    </group>
  )
}

// Контур грудной клетки — стилизованные рёбра
function RibsOutline() {
  // 6 пар рёбер — каждая представлена дугой
  const ribs = useMemo(() => {
    const ribPairs = []
    for (let i = 0; i < 6; i++) {
      const y = -0.5 + i * 0.4
      for (const side of [-1, 1]) {
        const points: [number, number, number][] = []
        for (let t = 0; t <= 1; t += 0.1) {
          const angle = t * Math.PI - Math.PI / 2
          const x = side * (0.8 + Math.sin(angle) * 0.3 + 0.8)
          const z = Math.cos(angle) * 0.8 - 0.5
          points.push([x, y, z])
        }
        ribPairs.push(points)
      }
    }
    return ribPairs
  }, [])

  return (
    <group>
      {ribs.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#94a3b8"
          lineWidth={1.5}
          transparent
          opacity={0.35}
        />
      ))}
    </group>
  )
}

// ============== MAIN APP ==============
export default function CardioApp() {
  const [selected, setSelected] = useState<Artery | null>(null)
  const [showInfo, setShowInfo] = useState(true)

  const handleSelect = useCallback((a: Artery) => {
    setSelected(a)
    setShowInfo(true)
  }, [])

  const handleCloseInfo = useCallback(() => {
    setShowInfo(false)
  }, [])

  const handleReset = useCallback(() => {
    setSelected(null)
    setShowInfo(true)
  }, [])

  const handleArteryListClick = useCallback((a: Artery) => {
    setSelected(a)
    setShowInfo(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-100">
      <BackgroundBubbles />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 pt-16 sm:py-8 sm:pt-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/30">
              <Heart className="h-6 w-6" />
            </div>
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
              <MousePointerClick className="h-3.5 w-3.5" />
              <span>Клик по артерии</span>
            </div>
            <div className="hidden items-center gap-1.5 rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-rose-700 shadow-sm backdrop-blur sm:flex">
              <RotateCw className="h-3.5 w-3.5" />
              <span>Вращение мышкой</span>
            </div>
          </div>
        </motion.header>

        {/* Main 3D + sidebar layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_400px]">
          {/* 3D Canvas */}
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
                <HeartModel selectedId={selected?.id ?? null} onSelect={handleSelect} />
                <OrbitControls
                  enablePan={false}
                  minDistance={3}
                  maxDistance={10}
                  target={[0.3, 1, 0]}
                  autoRotate={false}
                />
              </Canvas>
            </Suspense>

            {/* Hint overlay */}
            {!selected && (
              <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-rose-700 shadow-md backdrop-blur">
                🖱️ Вращайте мышкой • Кликните по сосуду, чтобы узнать название
              </div>
            )}
          </motion.div>

          {/* Right sidebar — artery list and details */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {/* Selected artery details (when something is clicked) */}
            <AnimatePresence mode="wait">
              {selected && showInfo && (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl border-2 border-rose-300 bg-white shadow-lg"
                >
                  {/* Banner */}
                  <div
                    className="px-4 py-3 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${selected.color}, ${selected.color}cc)`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                          {selected.category === 'artery' ? '🔴 Артерия' : selected.category === 'vein' ? '🔵 Вена' : '🫀 Камера сердца'}
                        </div>
                        <h3 className="mt-1 text-lg font-black uppercase tracking-tight">
                          {selected.name}
                        </h3>
                        <div className="text-xs italic text-white/80">{selected.latinName}</div>
                      </div>
                      <button
                        onClick={handleCloseInfo}
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
                        aria-label="Закрыть"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-3 p-4">
                    <Detail label="Описание" value={selected.description} />
                    <Detail label="Функция" value={selected.function} />
                    <Detail label="Клиническое значение" value={selected.clinical} accent="rose" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* All arteries list */}
            <div className="overflow-hidden rounded-2xl border-2 border-rose-200 bg-white/95 shadow-lg backdrop-blur">
              <div className="border-b border-rose-100 bg-rose-50/60 px-4 py-2.5">
                <div className="flex items-center gap-2 text-rose-700">
                  <BookOpen className="h-4 w-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wide">
                    Сосуды в модели
                  </h3>
                </div>
              </div>
              <div className="max-h-72 overflow-y-auto p-2 sm:max-h-96">
                {ARTERIES.map((a) => {
                  const isSelected = selected?.id === a.id
                  return (
                    <button
                      key={a.id}
                      onClick={() => handleArteryListClick(a)}
                      className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left transition-colors ${
                        isSelected
                          ? 'bg-rose-100 ring-2 ring-rose-400'
                          : 'hover:bg-rose-50'
                      }`}
                    >
                      <div
                        className="h-3 w-3 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: a.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="truncate text-sm font-bold text-rose-950">{a.name}</div>
                        <div className="truncate text-[10px] italic text-rose-700/70">{a.latinName}</div>
                      </div>
                      {isSelected && <ArrowRight className="h-4 w-4 text-rose-600" />}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Reset button */}
            {selected && (
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-rose-300 bg-white px-4 py-2 text-sm font-bold text-rose-700 shadow-sm transition-all hover:border-rose-400 hover:bg-rose-50 active:scale-95"
              >
                <X className="h-4 w-4" />
                Сбросить выбор
              </button>
            )}
          </motion.aside>
        </div>

        {/* Bottom: educational summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 rounded-3xl border-2 border-rose-200 bg-white/95 p-5 shadow-lg sm:p-7"
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-md">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-rose-700 sm:text-xl">
                Анатомия сердца собаки
              </h2>
              <p className="text-xs text-rose-700/70">Краткий обзор</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 p-4">
              <h3 className="text-sm font-black uppercase text-rose-700">Большой круг</h3>
              <p className="mt-1 text-xs leading-relaxed text-rose-900/80">
                Левый желудочек → <strong>аорта</strong> → органы → полые вены → правое предсердие.
                Обеспечивает ткани кислородом и питательными веществами.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
              <h3 className="text-sm font-black uppercase text-blue-700">Малый круг</h3>
              <p className="mt-1 text-xs leading-relaxed text-blue-900/80">
                Правый желудочек → <strong>лёгочный ствол</strong> → лёгкие → лёгочные вены → левое предсердие.
                Здесь кровь насыщается кислородом.
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-xl bg-rose-50/60 px-4 py-3 text-xs text-rose-900">
            <strong className="uppercase text-rose-700">Подсказка:</strong> Кликайте по сосудам на 3D-модели или по элементам в списке —
            на модели появится подсветка, а в панели справа — подробная информация.
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-rose-700/60">
          3D-модель сердца собаки — интерактивный анатомический модуль •
          Для ветеринарных специалистов и студентов
        </footer>
      </main>
    </div>
  )
}

// ============== HELPERS ==============
function Detail({ label, value, accent = 'blue' }: { label: string; value: string; accent?: 'blue' | 'rose' }) {
  const color = accent === 'rose' ? 'text-rose-700' : 'text-blue-700'
  return (
    <div>
      <div className={`mb-0.5 text-[10px] font-bold uppercase tracking-wide ${color}`}>
        {label}
      </div>
      <div className="text-sm leading-relaxed text-slate-800">{value}</div>
    </div>
  )
}

function CanvasFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="text-center">
        <div className="animate-pulse">
          <Heart className="mx-auto h-12 w-12 text-rose-500" />
        </div>
        <div className="mt-2 text-sm font-medium text-rose-700">Загрузка 3D-сцены...</div>
      </div>
    </div>
  )
}

/* ============== BACKGROUND BUBBLES ============== */
function BackgroundBubbles() {
  // Статичные пузыри (без Math.random в рантайме — детерминированный паттерн)
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
