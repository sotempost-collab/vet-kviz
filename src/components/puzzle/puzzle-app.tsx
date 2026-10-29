'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  type DragStartEvent,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  Check,
  X,
  RotateCcw,
  Eye,
  Clock,
  Layers,
  Trophy,
  Lightbulb,
} from 'lucide-react'
import {
  PUZZLE_PIECES,
  PUZZLE_FULL_IMAGE,
  PUZZLE_TITLE,
  PUZZLE_SUBTITLE,
  PUZZLE_LAYER_NAMES,
  type PuzzlePiece,
} from '@/lib/puzzle-data'
import { playPraise, playOops, preloadSounds, setMuted, stopNarration } from '@/lib/sounds'

// Аспект 1000:187 ≈ 5.35 — каждый кусок широкий и низкий
const PIECE_ASPECT = 1000 / 187

type SlotStatus = 'empty' | 'correct' | 'wrong'

interface PieceProps {
  piece: PuzzlePiece
  inSlot?: boolean
  disabled?: boolean
}

function PieceImage({ piece, inSlot, disabled }: PieceProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `piece-${piece.id}`,
    disabled,
  })
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`relative w-full cursor-grab touch-none select-none overflow-hidden rounded-lg ${
        isDragging ? 'opacity-30' : 'opacity-100'
      } ${disabled ? 'cursor-default' : 'hover:shadow-md'}`}
      style={{ aspectRatio: `${PIECE_ASPECT}` }}
    >
      <img
        src={piece.imageUrl}
        alt={piece.name}
        draggable={false}
        className="pointer-events-none h-full w-full object-cover"
      />
      {inSlot && (
        <div className="pointer-events-none absolute inset-0 ring-2 ring-inherit" />
      )}
    </div>
  )
}

interface SlotProps {
  index: number
  pieceId: number | null
  status: SlotStatus
  showLabels: boolean
  children?: React.ReactNode
}

function Slot({ index, pieceId, status, showLabels, children }: SlotProps) {
  const { setNodeRef, isOver } = useDroppable({ id: `slot-${index}` })

  const borderClasses =
    status === 'correct'
      ? 'border-green-400 bg-green-50/40'
      : status === 'wrong'
        ? 'border-red-400 bg-red-50/40'
        : isOver
          ? 'border-sky-500 bg-sky-50/40'
          : 'border-sky-200 border-dashed bg-sky-50/30'

  return (
    <div className="flex flex-col gap-1.5">
      <div
        ref={setNodeRef}
        className={`relative w-full overflow-hidden rounded-xl border-2 transition-colors ${borderClasses}`}
        style={{ aspectRatio: `${PIECE_ASPECT}` }}
      >
        {pieceId === null ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-sky-400">
            <Layers className="h-6 w-6 opacity-60" />
            <span className="text-xs font-semibold opacity-70">
              Слой {index + 1}
            </span>
          </div>
        ) : (
          children
        )}

        {/* Status badge */}
        {pieceId !== null && (
          <div
            className={`absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full shadow-md ${
              status === 'correct' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {status === 'correct' ? (
              <Check className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5" />
            )}
          </div>
        )}
      </div>
      {/* Layer label below slot */}
      <div
        className={`text-center text-xs font-semibold ${
          showLabels ? 'text-blue-950' : 'text-blue-700/60'
        }`}
      >
        {showLabels && pieceId !== null
          ? PUZZLE_LAYER_NAMES[index]
          : `Слой ${index + 1}`}
      </div>
    </div>
  )
}

interface TrayProps {
  pieces: PuzzlePiece[]
}

function Tray({ pieces }: TrayProps) {
  const { setNodeRef, isOver } = useDroppable({ id: 'tray' })
  return (
    <div
      ref={setNodeRef}
      className={`rounded-2xl border-2 p-3 transition-colors ${
        isOver
          ? 'border-sky-400 bg-sky-50/70'
          : 'border-sky-200 bg-white/70'
      }`}
    >
      <div className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-sky-700">
        <Layers className="h-3.5 w-3.5" /> Кусочки — перетащи на нужный слой
      </div>
      {pieces.length === 0 ? (
        <div className="flex items-center justify-center py-6 text-sm text-sky-400">
          Все кусочки на поле
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {pieces.map((p) => (
            <PieceImage key={p.id} piece={p} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function PuzzleApp() {
  // slotAssignments[i] = pieceId in slot i, or null
  const [slotAssignments, setSlotAssignments] = useState<(number | null)[]>([null, null, null])
  // Order of pieces in tray — shuffled on mount (client-only) to avoid hydration mismatch
  const [trayOrder, setTrayOrder] = useState<number[]>([0, 1, 2])
  const [draggedPiece, setDraggedPiece] = useState<PuzzlePiece | null>(null)
  const [attempts, setAttempts] = useState(0)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedMs, setElapsedMs] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [muted, setMutedState] = useState(false)

  // Shuffle tray order on client mount only — avoids SSR hydration mismatch
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setTrayOrder((prev) => {
      const arr = prev.slice()
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr
    })
    setStartTime(Date.now())
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [])

  // Preload sounds
  useEffect(() => {
    preloadSounds()
  }, [])

  // Timer — tick every second while puzzle in progress
  useEffect(() => {
    if (completed || startTime === null) return
    const t = setInterval(() => setElapsedMs(Date.now() - startTime), 1000)
    return () => clearInterval(t)
  }, [completed, startTime])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } }),
  )

  // Compute tray pieces from current state
  const trayPieces: PuzzlePiece[] = useMemo(() => {
    return trayOrder
      .filter((id) => !slotAssignments.includes(id))
      .map((id) => PUZZLE_PIECES[id])
  }, [trayOrder, slotAssignments])

  // Compute slot status
  const slotStatuses: SlotStatus[] = useMemo(() => {
    return slotAssignments.map((pid, idx) => {
      if (pid === null) return 'empty'
      return PUZZLE_PIECES[pid].correctSlot === idx ? 'correct' : 'wrong'
    })
  }, [slotAssignments])

  const correctCount = slotStatuses.filter((s) => s === 'correct').length

  // Detect completion
  useEffect(() => {
    if (correctCount === 3 && !completed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCompleted(true)
      stopNarration()
      playPraise()
    }
  }, [correctCount, completed])

  const handleDragStart = useCallback((e: DragStartEvent) => {
    const pieceId = Number(String(e.active.id).replace('piece-', ''))
    setDraggedPiece(PUZZLE_PIECES[pieceId])
  }, [])

  const handleDragEnd = useCallback(
    (e: DragEndEvent) => {
      setDraggedPiece(null)
      if (!e.over) return

      const pieceId = Number(String(e.active.id).replace('piece-', ''))
      const overId = String(e.over.id)

      // Find current location of the piece
      const sourceSlotIdx = slotAssignments.indexOf(pieceId)

      if (overId === 'tray') {
        // Move back to tray
        if (sourceSlotIdx >= 0) {
          setSlotAssignments((prev) => {
            const next = prev.slice()
            next[sourceSlotIdx] = null
            return next
          })
        }
        return
      }

      // Dropped on slot-N
      const slotIdx = Number(overId.replace('slot-', ''))
      if (Number.isNaN(slotIdx) || slotIdx < 0 || slotIdx > 2) return

      setSlotAssignments((prev) => {
        const next = prev.slice()
        // If target slot occupied, take that piece out (back to tray via swap)
        const existing = next[slotIdx]
        // If piece was in another slot, clear that source slot
        if (sourceSlotIdx >= 0) next[sourceSlotIdx] = existing // swap or null
        // Place dragged piece in target slot
        next[slotIdx] = pieceId
        return next
      })

      // Check correctness and play sound
      const isCorrect = PUZZLE_PIECES[pieceId].correctSlot === slotIdx
      setAttempts((a) => a + 1)
      if (isCorrect) {
        playPraise()
      } else {
        playOops()
      }
    },
    [slotAssignments],
  )

  const handleReset = useCallback(() => {
    stopNarration()
    setSlotAssignments([null, null, null])
    setAttempts(0)
    setStartTime(Date.now())
    setElapsedMs(0)
    setCompleted(false)
    setShowSolution(false)
    // Re-shuffle tray order
    setTrayOrder((prev) => {
      const arr = prev.slice()
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr
    })
  }, [])

  const toggleMute = useCallback(() => {
    const next = !muted
    setMutedState(next)
    setMuted(next)
    if (next) stopNarration()
  }, [muted])

  const toggleSolution = useCallback(() => {
    setShowSolution((v) => !v)
  }, [])

  const formatTime = (ms: number) => {
    const totalSec = Math.floor(ms / 1000)
    const m = Math.floor(totalSec / 60)
    const s = totalSec % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  // Progress percentage
  const progress = (correctCount / 3) * 100

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100">
      <BackgroundBubbles />

      {/* Confetti on completion */}
      <AnimatePresence>
        {completed && <Confetti />}
      </AnimatePresence>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-6 sm:py-8">
        {/* Header */}
        <header className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-blue-950 sm:text-xl">
                {PUZZLE_TITLE}
              </h1>
              <p className="text-xs font-medium text-blue-700/70 sm:text-sm">
                {PUZZLE_SUBTITLE}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Timer chip */}
            <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
              <Clock className="h-4 w-4 text-sky-600" />
              <span className="text-sm font-bold tabular-nums text-blue-900">
                {formatTime(elapsedMs)}
              </span>
            </div>
            {/* Progress chip */}
            <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-sm font-bold text-blue-900">{correctCount}</span>
              <span className="text-xs text-blue-700/60">/ 3</span>
            </div>
            {/* Mute toggle */}
            <button
              type="button"
              onClick={toggleMute}
              title={muted ? 'Включить звук' : 'Выключить звук'}
              aria-label={muted ? 'Включить звук' : 'Выключить звук'}
              className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur transition-colors ${
                muted
                  ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100'
                  : 'border-sky-200 bg-white/80 text-sky-600 hover:bg-sky-50'
              }`}
            >
              {muted ? <X className="h-5 w-5" /> : <Check className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* Progress bar */}
        <div className="mb-5">
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-blue-100">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Main puzzle area */}
        <div className="flex flex-1 flex-col gap-4">
          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {/* Slots — stacked vertically */}
            <div className="flex flex-col gap-2">
              {slotAssignments.map((pid, idx) => (
                <Slot
                  key={idx}
                  index={idx}
                  pieceId={pid}
                  status={slotStatuses[idx]}
                  showLabels={completed}
                >
                  {pid !== null && (
                    <PieceImage
                      piece={PUZZLE_PIECES[pid]}
                      inSlot
                      disabled={completed}
                    />
                  )}
                </Slot>
              ))}
            </div>

            {/* Tray */}
            <Tray pieces={trayPieces} />

            {/* Drag overlay — follows cursor during drag */}
            <DragOverlay dropAnimation={null}>
              {draggedPiece ? (
                <div
                  className="w-72 overflow-hidden rounded-lg shadow-2xl ring-2 ring-sky-400"
                  style={{ aspectRatio: `${PIECE_ASPECT}` }}
                >
                  <img
                    src={draggedPiece.imageUrl}
                    alt=""
                    className="pointer-events-none h-full w-full object-cover"
                  />
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>

        {/* Controls */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 rounded-2xl border-2 border-sky-300 bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50 active:scale-95"
          >
            <RotateCcw className="h-4 w-4" />
            Сбросить
          </button>
          <button
            onClick={toggleSolution}
            className="flex items-center gap-2 rounded-2xl border-2 border-amber-300 bg-white px-4 py-2 text-sm font-bold text-amber-700 shadow-sm transition-all hover:border-amber-400 hover:bg-amber-50 active:scale-95"
          >
            <Eye className="h-4 w-4" />
            {showSolution ? 'Скрыть ответ' : 'Показать ответ'}
          </button>
        </div>

        {/* Solution preview (toggle) */}
        <AnimatePresence>
          {showSolution && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-2xl border-2 border-amber-200 bg-amber-50/80 p-4 backdrop-blur">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-800">
                  <Lightbulb className="h-4 w-4" />
                  Правильный порядок слоёв:
                </div>
                <div className="overflow-hidden rounded-xl border-2 border-amber-200">
                  <img
                    src={PUZZLE_FULL_IMAGE}
                    alt="Полное изображение — правильный порядок слоёв"
                    className="w-full"
                  />
                </div>
                <div className="mt-2 space-y-1 text-xs text-amber-900">
                  {PUZZLE_PIECES.map((p, i) => (
                    <div key={p.id}>
                      <span className="font-bold">Слой {i + 1}:</span> {p.name} — {p.description}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Completion overlay */}
        <AnimatePresence>
          {completed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.7, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="mx-4 w-full max-w-md overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-2xl"
              >
                <div className="bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 px-6 py-8 text-center text-white">
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 150 }}
                    className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20"
                  >
                    <Trophy className="h-9 w-9" />
                  </motion.div>
                  <h2 className="text-2xl font-extrabold">Ткань собрана! 🎉</h2>
                  <p className="mt-2 text-sm text-sky-50">
                    Все три слоя стоят в правильном порядке
                  </p>
                </div>
                <div className="px-6 py-5">
                  <div className="mb-4 overflow-hidden rounded-xl border-2 border-sky-100">
                    <img
                      src={PUZZLE_FULL_IMAGE}
                      alt="Собранная ткань"
                      className="w-full"
                    />
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-sky-100 bg-sky-50/60 px-3 py-2 text-center">
                      <Clock className="mx-auto mb-1 h-4 w-4 text-sky-600" />
                      <div className="text-xs text-sky-700/70">Время</div>
                      <div className="text-lg font-bold text-blue-950">
                        {formatTime(elapsedMs)}
                      </div>
                    </div>
                    <div className="rounded-xl border border-sky-100 bg-sky-50/60 px-3 py-2 text-center">
                      <Layers className="mx-auto mb-1 h-4 w-4 text-sky-600" />
                      <div className="text-xs text-sky-700/70">Попыток</div>
                      <div className="text-lg font-bold text-blue-950">{attempts}</div>
                    </div>
                  </div>
                  <div className="mb-4 space-y-1.5 rounded-xl bg-sky-50/60 p-3 text-xs text-blue-900">
                    <div className="font-bold text-blue-950">Что ты собрал:</div>
                    {PUZZLE_PIECES.map((p, i) => (
                      <div key={p.id}>
                        <span className="font-semibold">{i + 1}.</span> {p.name} — {p.description}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleReset}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-sky-600 hover:to-blue-700 active:scale-95"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Собрать заново
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-blue-700/50">
          Перетащи кусочки на правильные позиции • 🐱 верно — кошачье мяуканье • 🐶 неверно — собачий рык
        </footer>
      </main>
    </div>
  )
}

/* ============== BACKGROUND BUBBLES ============== */
interface Bubble {
  id: number
  size: number
  x: number
  delay: number
  duration: number
  drift: number
}

function BackgroundBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBubbles(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: 30 + Math.random() * 80,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 16,
        drift: Math.random() * 40 - 20,
      })),
    )
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full bg-gradient-to-br from-white/40 to-sky-200/30 backdrop-blur-sm"
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

/* ============== CONFETTI ============== */
interface Particle {
  id: number
  x: number
  delay: number
  duration: number
  color: string
  size: number
  rotation: number
}

function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([])
  useEffect(() => {
    const palette = ['#38bdf8', '#0ea5e9', '#0284c7', '#06b6d4', '#22d3ee', '#facc15', '#fbbf24', '#34d399']
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1.5,
        color: palette[Math.floor(Math.random() * palette.length)],
        size: 8 + Math.random() * 12,
        rotation: Math.random() * 360,
      })),
    )
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: '-5%',
            width: p.size,
            height: p.size * 1.4,
            backgroundColor: p.color,
            borderRadius: '2px',
          }}
          initial={{ y: 0, rotate: p.rotation, opacity: 1 }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: p.rotation + 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </motion.div>
  )
}
