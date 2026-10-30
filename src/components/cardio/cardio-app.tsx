'use client'

import { useState, useRef, useMemo, useCallback, Suspense } from 'react'
import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber'
import { OrbitControls, Html, Line, ContactShadows, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, RotateCw, MousePointerClick, BookOpen, Activity, ArrowRight, X, Pause, Play, Gauge } from 'lucide-react'
import {
  ARTERIES,
  VALVES,
  HEART_VENTRICLES,
  createArteryCurve,
  HEART_RATE_HZ,
  CARDIO_TITLE,
  CARDIO_SUBTITLE,
  type Artery,
  type Valve,
} from '@/lib/cardio-data'
import MModeCanvas from './mmode-canvas'

// ============== ANIMATED HEART VENTRICLE ==============
interface VentricleProps {
  position: [number, number, number]
  scale: [number, number, number]
  color: string
  heartRateHz: number
  isPlaying: boolean
  chamberId: string
  name: string
  latinName: string
  description: string
  func: string
  clinical: string
  onSelect: (a: Artery) => void
}

function HeartChamber({ position, scale, color, heartRateHz, isPlaying, chamberId, name, latinName, description, func, clinical, onSelect }: VentricleProps) {
  const ref = useRef<THREE.Mesh>(null)
  const tRef = useRef(0)

  useFrame((_, delta) => {
    if (!ref.current) return
    if (isPlaying) {
      tRef.current += delta
    }
    const t = tRef.current
    // Фаза сердечного цикла (0-1)
    const phase = (t * heartRateHz) % 1

    // Систола (0-0.4): желудочки сжимаются → scale уменьшается
    // Диастола (0.4-1.0): расслабление → scale нормальный или чуть больше
    let scaleMul = 1
    if (phase < 0.4) {
      // Систола — пиковое сокращение в середине фазы
      const sysPhase = phase / 0.4
      scaleMul = 1 - 0.12 * Math.sin(sysPhase * Math.PI)
    } else {
      // Диастола — медленное наполнение
      const diaPhase = (phase - 0.4) / 0.6
      scaleMul = 1 + 0.04 * Math.sin(diaPhase * Math.PI)
    }

    ref.current.scale.set(scale[0] * scaleMul, scale[1] * scaleMul, scale[2] * scaleMul)
  })

  return (
    <mesh
      ref={ref}
      position={position}
      scale={scale}
      castShadow
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        onSelect({
          id: chamberId,
          name,
          latinName,
          category: 'heart',
          description,
          function: func,
          clinical,
          points: [],
          radius: 0,
          color: '',
        })
      }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
    </mesh>
  )
}

// ============== ANIMATED VALVE ==============
interface ValveMeshProps {
  valve: Valve
  heartRateHz: number
  isPlaying: boolean
  isSelected: boolean
  isFaded: boolean
  onSelect: (v: Valve) => void
}

function ValveMesh({ valve, heartRateHz, isPlaying, isSelected, isFaded, onSelect }: ValveMeshProps) {
  const ref = useRef<THREE.Mesh>(null)
  const tRef = useRef(0)

  useFrame((_, delta) => {
    if (!ref.current) return
    if (isPlaying) {
      tRef.current += delta
    }
    const t = tRef.current
    const phase = (t * heartRateHz) % 1

    // Определяем фазу открытия/закрытия в зависимости от типа клапана
    let openness = 0  // 0 = полностью закрыт, 1 = полностью открыт
    if (valve.type === 'atrioventricular') {
      // Атриовентрикулярные (митральный, трикуспидальный):
      // Открыты в диастолу (фаза 0.4-1.0), закрыты в систолу (0-0.4)
      if (phase >= 0.4 && phase < 0.55) {
        // Быстрое наполнение (early diastolic filling) — пик открытия
        openness = 1 - Math.abs((phase - 0.475) / 0.075) * 0.5
      } else if (phase >= 0.55 && phase < 0.7) {
        // Диастаз — частично закрыт
        openness = 0.3
      } else if (phase >= 0.7 && phase < 0.85) {
        // Предсердная систола — вторая волна открытия
        const p = (phase - 0.7) / 0.15
        openness = 0.3 + 0.4 * Math.sin(p * Math.PI)
      } else {
        // Закрыт
        openness = 0
      }
    } else {
      // Полулунные (аортальный, лёгочный):
      // Открыты в фазу изгнания (0.1-0.4), закрыты в остальное время
      if (phase >= 0.1 && phase < 0.4) {
        // Фаза изгнания
        const p = (phase - 0.1) / 0.3
        openness = Math.sin(p * Math.PI)  // плавно открывается и закрывается
      } else {
        openness = 0
      }
    }

    // Визуализация: torus, который растягивается по Z когда открыт
    const zScale = 0.3 + openness * 2.5
    ref.current.scale.z = zScale
    // Эмиссия в зависимости от открытости
    const mat = ref.current.material as THREE.MeshStandardMaterial
    mat.emissiveIntensity = isSelected ? 0.4 : (openness > 0.3 ? 0.15 * openness : 0)
  })

  return (
    <mesh
      ref={ref}
      position={valve.position}
      rotation={valve.rotation}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        onSelect(valve)
      }}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation()
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
      }}
    >
      <torusGeometry args={[valve.radius, 0.025, 16, 32]} />
      <meshStandardMaterial
        color={valve.color}
        roughness={0.4}
        metalness={0.2}
        emissive={isSelected ? valve.color : '#000000'}
        emissiveIntensity={0.3}
        transparent={isFaded}
        opacity={isFaded ? 0.35 : 1.0}
      />
    </mesh>
  )
}

// ============== GLB 3D MODEL LOADER ==============
useGLTF.preload('/models/heart.glb')

function HeartGLBModel({ heartRateHz, isPlaying }: { heartRateHz: number; isPlaying: boolean }) {
  const { scene } = useGLTF('/models/heart.glb', true)
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
  selectedId,
  onSelect,
  heartRateHz,
  isPlaying,
}: {
  selectedId: string | null
  onSelect: (a: Artery) => void
  heartRateHz: number
  isPlaying: boolean
}) {
  const arteryCurves = useMemo(() => ARTERIES.map(a => ({ artery: a, curve: createArteryCurve(a) })), [])

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.0} castShadow />
      <directionalLight position={[-3, 2, -3]} intensity={0.4} />

      {/* Реалистичная 3D-модель сердца (GLB) + стилизованные камеры */}
      <group>
        <Suspense fallback={null}>
          <HeartGLBModel heartRateHz={heartRateHz} isPlaying={isPlaying} />
        </Suspense>
        {/* Стилизованные камеры (кликабельные) — оставлены для интерактивности */}
        <HeartChamber
          position={HEART_VENTRICLES.left.position}
          scale={HEART_VENTRICLES.left.scale}
          color={HEART_VENTRICLES.left.color}
          heartRateHz={heartRateHz}
          isPlaying={isPlaying}
          chamberId="left-ventricle"
          name="Левый желудочек"
          latinName="Ventriculus sinister"
          description="Самая мощная камера сердца. Стенка толщиной 1-1.5 см. Здесь начинается большой круг кровообращения."
          func="Выбрасывает артериальную кровь в аорту под высоким давлением (~120 мм рт. ст.)."
          clinical="Гипертрофия при стенозе аорты; дилатация при ДКМ (дилатационной кардиомиопатии)."
          onSelect={onSelect}
        />
        <HeartChamber
          position={HEART_VENTRICLES.right.position}
          scale={HEART_VENTRICLES.right.scale}
          color={HEART_VENTRICLES.right.color}
          heartRateHz={heartRateHz}
          isPlaying={isPlaying}
          chamberId="right-ventricle"
          name="Правый желудочек"
          latinName="Ventriculus dexter"
          description="Стенка тоньше (3-5 мм), чем у левого — нужно меньшее давление для малого круга."
          func="Выбрасывает венозную кровь в лёгочный ствол (~25 мм рт. ст. — низкое давление)."
          clinical="Гипертрофия при стенозе лёгочной артерии или лёгочной гипертензии."
          onSelect={onSelect}
        />
        <HeartChamber
          position={HEART_VENTRICLES.leftAtrium.position}
          scale={HEART_VENTRICLES.leftAtrium.scale}
          color={HEART_VENTRICLES.leftAtrium.color}
          heartRateHz={heartRateHz}
          isPlaying={isPlaying}
          chamberId="left-atrium"
          name="Левое предсердие"
          latinName="Atrium sinistrum"
          description="Принимает оксигенированную кровь из 4 лёгочных вен. Находится кзади от левого желудочка."
          func="Резервуар перед левым желудочком. Объём ~30-40 мл у собаки."
          clinical="Дилатация при митральной недостаточности — самый частый признак ХСН у собак мелких пород."
          onSelect={onSelect}
        />
        <HeartChamber
          position={HEART_VENTRICLES.rightAtrium.position}
          scale={HEART_VENTRICLES.rightAtrium.scale}
          color={HEART_VENTRICLES.rightAtrium.color}
          heartRateHz={heartRateHz}
          isPlaying={isPlaying}
          chamberId="right-atrium"
          name="Правое предсердие"
          latinName="Atrium dextrum"
          description="Принимает кровь из краниальной и каудальной полых вен. Здесь находится синусно-предсердный узел."
          func="Резервуар венозной крови перед правым желудочком. Содержит водитель ритма (СА-узел)."
          clinical="Дилатация при трикуспидальной недостаточности. Здесь генерируется импульс при ЭИТ."
          onSelect={onSelect}
        />
      </group>

      {/* Клапаны с анимацией открытия/закрытия */}
      {VALVES.map(v => (
        <ValveMesh
          key={v.id}
          valve={v}
          heartRateHz={heartRateHz}
          isPlaying={isPlaying}
          isSelected={selectedId === v.id}
          isFaded={selectedId !== null && selectedId !== v.id && !selectedId.startsWith('chamber')}
          onSelect={(valve: Valve) => onSelect({
            id: valve.id,
            name: valve.name,
            latinName: valve.latinName,
            category: 'valve',
            description: valve.description,
            function: valve.function,
            clinical: valve.clinical,
            points: [],
            radius: 0,
            color: valve.color,
          })}
        />
      ))}

      {/* Артерии и вены */}
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

      {/* Контур грудной клетки */}
      <RibsOutline />

      {/* Тень под сердцем */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.5}
        scale={8}
        blur={2.5}
        far={4}
      />

      {/* HTML-лейбл для выбранной структуры */}
      {selectedId && (() => {
        // Поиск в артериях
        const selected = ARTERIES.find(a => a.id === selectedId) ||
          VALVES.find(v => v.id === selectedId && ({ id: v.id, name: v.name, latinName: v.latinName, color: v.color, points: [[0, 1, 0]] } as any))
        if (!selected) {
          // Может быть камера сердца — лейбл по центру
          return (
            <Html position={[0.2, 0.8, 0]} center distanceFactor={8}>
              <div className="pointer-events-none whitespace-nowrap rounded-lg bg-white/95 px-3 py-1.5 shadow-lg ring-2 ring-rose-400">
                <div className="text-xs font-bold uppercase tracking-wide text-rose-700">
                  {selectedId === 'left-ventricle' ? 'Левый желудочек' :
                   selectedId === 'right-ventricle' ? 'Правый желудочек' :
                   selectedId === 'left-atrium' ? 'Левое предсердие' :
                   selectedId === 'right-atrium' ? 'Правое предсердие' : ''}
                </div>
              </div>
            </Html>
          )
        }
        const anySel = selected as any
        if (!anySel.points || anySel.points.length === 0) return null
        const midPoint = anySel.points[Math.floor(anySel.points.length / 2)]
        return (
          <Html position={midPoint} center distanceFactor={8}>
            <div className="pointer-events-none whitespace-nowrap rounded-lg bg-white/95 px-3 py-1.5 shadow-lg ring-2 ring-rose-400">
              <div className="text-xs font-bold uppercase tracking-wide text-rose-700">
                {anySel.name}
              </div>
              {anySel.latinName && (
                <div className="text-[10px] italic text-rose-700/70">{anySel.latinName}</div>
              )}
            </div>
          </Html>
        )
      })()}
    </group>
  )
}

function RibsOutline() {
  const ribs = useMemo(() => {
    const ribPairs: [number, number, number][][] = []
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
  const [heartRateBpm, setHeartRateBpm] = useState(90)
  const [isPlaying, setIsPlaying] = useState(true)

  const heartRateHz = heartRateBpm / 60

  const handleSelect = useCallback((a: Artery) => {
    setSelected(a)
    setShowInfo(true)
  }, [])

  const handleCloseInfo = useCallback(() => setShowInfo(false), [])
  const handleReset = useCallback(() => {
    setSelected(null)
    setShowInfo(true)
  }, [])

  const handleListClick = useCallback((item: { id: string; name: string; latinName?: string; description?: string; function?: string; clinical?: string; color?: string; category?: string }) => {
    setSelected({
      id: item.id,
      name: item.name,
      latinName: item.latinName ?? '',
      category: (item.category as Artery['category']) ?? 'valve',
      description: item.description ?? '',
      function: item.function ?? '',
      clinical: item.clinical ?? '',
      points: [],
      radius: 0,
      color: item.color ?? '',
    })
    setShowInfo(true)
  }, [])

  // Все элементы для списка: артерии + клапаны
  const allItems = useMemo(() => {
    return [
      ...ARTERIES.map(a => ({ id: a.id, name: a.name, latinName: a.latinName, color: a.color, category: a.category, description: a.description, function: a.function, clinical: a.clinical })),
      ...VALVES.map(v => ({ id: v.id, name: v.name, latinName: v.latinName, color: v.color, category: 'valve' as const, description: v.description, function: v.function, clinical: v.clinical })),
    ]
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
              <MousePointerClick className="h-3.5 w-3.5" />
              <span>Клик</span>
            </div>
            <div className="hidden items-center gap-1.5 rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-rose-700 shadow-sm backdrop-blur sm:flex">
              <RotateCw className="h-3.5 w-3.5" />
              <span>Вращение</span>
            </div>
          </div>
        </motion.header>

        {/* 3D Canvas + sidebar */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_380px]">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-[500px] overflow-hidden rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-slate-50 to-rose-50 shadow-xl sm:h-[560px]"
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
                  selectedId={selected?.id ?? null}
                  onSelect={handleSelect}
                  heartRateHz={heartRateHz}
                  isPlaying={isPlaying}
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

            {!selected && (
              <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-rose-700 shadow-md backdrop-blur">
                🖱️ Вращайте мышкой • Кликните по сосуду, клапану или камере
              </div>
            )}
          </motion.div>

          {/* Right sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {/* Selected details */}
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
                  <div
                    className="px-4 py-3 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${selected.color || '#c0392b'}, ${(selected.color || '#c0392b') + 'cc'})`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                          {selected.category === 'artery' ? '🔴 Артерия' :
                            selected.category === 'vein' ? '🔵 Вена' :
                            selected.category === 'valve' ? '🚪 Клапан' : '🫀 Камера сердца'}
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
                  <div className="space-y-3 p-4">
                    <Detail label="Описание" value={selected.description} />
                    <Detail label="Функция" value={selected.function} accent="rose" />
                    <Detail label="Клиническое значение" value={selected.clinical} accent="rose" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* All items list */}
            <div className="overflow-hidden rounded-2xl border-2 border-rose-200 bg-white/95 shadow-lg backdrop-blur">
              <div className="border-b border-rose-100 bg-rose-50/60 px-4 py-2.5">
                <div className="flex items-center gap-2 text-rose-700">
                  <BookOpen className="h-4 w-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wide">
                    Структуры ({allItems.length})
                  </h3>
                </div>
              </div>
              <div className="max-h-72 overflow-y-auto p-2 sm:max-h-96">
                {allItems.map((item) => {
                  const isSelected = selected?.id === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleListClick(item)}
                      className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left transition-colors ${
                        isSelected
                          ? 'bg-rose-100 ring-2 ring-rose-400'
                          : 'hover:bg-rose-50'
                      }`}
                    >
                      <div
                        className="h-3 w-3 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-bold text-rose-950">{item.name}</div>
                        <div className="truncate text-[10px] italic text-rose-700/70">{item.latinName}</div>
                      </div>
                      {isSelected && <ArrowRight className="h-4 w-4 text-rose-600" />}
                    </button>
                  )
                })}
              </div>
            </div>

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

        {/* M-MODE PANEL */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]"
        >
          <MModeCanvas heartRateHz={heartRateHz} isPlaying={isPlaying} />

          <div className="rounded-2xl border-2 border-rose-200 bg-white/95 p-4 shadow-lg backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-rose-700">
              <Activity className="h-5 w-5" />
              <h3 className="text-sm font-black uppercase tracking-wide">
                Что это?
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-rose-900/80">
              <strong className="uppercase text-rose-700">M-mode</strong> (Motion-mode) — режим одномерного УЗИ,
              показывающий движение структур сердца во времени. По оси X — время, по оси Y — глубина.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-rose-900/80">
              Тёмные полосы — это <strong>просветы</strong> желудочков и предсердий.
              Яркие линии — <strong>стенки</strong> (перегородка, передняя и задняя стенки ЛЖ, перикард).
            </p>
            <p className="mt-2 text-xs leading-relaxed text-rose-900/80">
              В <strong>систолу</strong> стенки сближаются, просвет ЛЖ сужается.
              В <strong>диастолу</strong> — расходятся, ЛЖ расширяется для наполнения.
            </p>
            <div className="mt-3 rounded-xl bg-rose-50/60 p-2 text-[10px] text-rose-900">
              <strong className="uppercase text-rose-700">Подсказка:</strong> Меняй ЧСС слайдером —
              пульсация и M-mode синхронно ускоряются/замедляются.
            </div>
          </div>
        </motion.section>

        {/* Educational summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 rounded-3xl border-2 border-rose-200 bg-white/95 p-5 shadow-lg sm:p-7"
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-md">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-rose-700 sm:text-xl">
                Сердечный цикл
              </h2>
              <p className="text-xs text-rose-700/70">Фазы и движение клапанов</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <PhaseCard
              num="1"
              title="Систола желудочков"
              duration="0–0.4 цикла"
              color="from-rose-500 to-red-600"
              avState="Закрыты"
              slState="Открыты (0.1–0.4)"
            />
            <PhaseCard
              num="2"
              title="Изгнание"
              duration="0.1–0.4 цикла"
              color="from-red-500 to-rose-700"
              avState="Закрыты"
              slState="Открыты"
            />
            <PhaseCard
              num="3"
              title="Изоволюм. расслабление"
              duration="0.4–0.5 цикла"
              color="from-purple-500 to-pink-600"
              avState="Закрыты"
              slState="Закрыты"
            />
            <PhaseCard
              num="4"
              title="Диастола (наполнение)"
              duration="0.5–1.0 цикла"
              color="from-sky-500 to-blue-600"
              avState="Открыты"
              slState="Закрыты"
            />
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-rose-700/60">
          3D-модель сердца собаки с пульсацией, клапанами и M-mode •
          Для ветеринарных специалистов и студентов
        </footer>
      </main>
    </div>
  )
}

// ============== SUB-COMPONENTS ==============
function Detail({ label, value, accent = 'rose' }: { label: string; value: string; accent?: 'rose' | 'blue' }) {
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

function PhaseCard({
  num,
  title,
  duration,
  color,
  avState,
  slState,
}: {
  num: string
  title: string
  duration: string
  color: string
  avState: string
  slState: string
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-0.5 shadow-lg`}>
      <div className="rounded-[14px] bg-white p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${color} text-xs font-black text-white`}>
            {num}
          </div>
          <h3 className="text-xs font-black uppercase leading-tight text-rose-950">
            {title}
          </h3>
        </div>
        <div className="text-[10px] text-rose-700/70">{duration}</div>
        <div className="mt-2 space-y-0.5 text-[10px] text-slate-700">
          <div>🚪 <strong>AV-клапаны:</strong> {avState}</div>
          <div>🚪 <strong>Полулунные:</strong> {slState}</div>
        </div>
      </div>
    </div>
  )
}

function CanvasFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1, 1.05, 1] }}
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
