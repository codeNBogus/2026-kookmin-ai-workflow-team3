import { useState } from 'react'
import { EndingCatalogPanel } from '@/components/EndingCatalogPanel'
import { SceneImage } from '@/components/SceneImage'
import { getTier } from '@/game/tiers'
import { getEvent } from '@/data/events'
import { useGameStore } from '@/store/gameStore'

type EndingType = 'positive' | 'neutral' | 'negative'

function getEndingType(code: string): EndingType {
  if (code === 'E1-L' || code === 'E2-H') return 'positive'
  if (code === 'E3-R' || code === 'E3-S' || code === 'E3-M') return 'negative'
  return 'neutral'
}

const THEME = {
  'E1-L': { orb1: '#f59e0b', orb2: '#fbbf24', orb3: '#fb923c', accent: '#fde68a', badge: 'border-yellow-400/60 bg-yellow-400/15 text-yellow-300' },
  'E2-H': { orb1: '#10b981', orb2: '#34d399', orb3: '#6ee7b7', accent: '#6ee7b7', badge: 'border-emerald-400/60 bg-emerald-400/15 text-emerald-300' },
  'E2-T': { orb1: '#8b5cf6', orb2: '#a78bfa', orb3: '#7c3aed', accent: '#c4b5fd', badge: 'border-violet-400/60 bg-violet-400/15 text-violet-300' },
  'E3-R': { orb1: '#dc2626', orb2: '#7f1d1d', orb3: '#450a0a', accent: '#fca5a5', badge: 'border-red-600/60 bg-red-900/20 text-red-400' },
  'E3-S': { orb1: '#1e3a5f', orb2: '#1e40af', orb3: '#1e3a5f', accent: '#93c5fd', badge: 'border-blue-600/60 bg-blue-900/20 text-blue-400' },
  'E3-M': { orb1: '#7f1d1d', orb2: '#374151', orb3: '#1f2937', accent: '#9ca3af', badge: 'border-gray-500/60 bg-gray-800/30 text-gray-400' },
  'E0':   { orb1: '#3b82f6', orb2: '#6366f1', orb3: '#8b5cf6', accent: '#a5b4fc', badge: 'border-indigo-400/60 bg-indigo-400/15 text-indigo-300' },
  'E2-I': { orb1: '#475569', orb2: '#334155', orb3: '#1e293b', accent: '#94a3b8', badge: 'border-slate-400/60 bg-slate-400/15 text-slate-300' },
}
const DEFAULT_THEME = THEME['E2-I']

const TIER_STYLE: Record<string, { color: string; bg: string }> = {
  붕괴: { color: 'text-red-400',     bg: 'bg-red-500/20 border-red-500/40' },
  불안: { color: 'text-orange-400',  bg: 'bg-orange-500/20 border-orange-500/40' },
  중립: { color: 'text-cool-gray',   bg: 'bg-white/10 border-white/20' },
  상승: { color: 'text-emerald-400', bg: 'bg-emerald-500/20 border-emerald-500/40' },
  고조: { color: 'text-yellow-300',  bg: 'bg-yellow-400/20 border-yellow-400/40' },
}

function StatBadge({ label, value }: { label: string; value: number }) {
  const tier = getTier(value)
  const style = TIER_STYLE[tier]
  const sign = value > 0 ? '+' : ''
  return (
    <div className={`flex items-center justify-between rounded-lg border px-4 py-2.5 ${style.bg}`}>
      <span className="text-sm text-cool-gray">{label}</span>
      <span className={`text-sm font-bold ${style.color}`}>
        {sign}{value}
        <span className="ml-1.5 text-xs font-normal opacity-75">{tier}</span>
      </span>
    </div>
  )
}

/** 긍정: 빛 입자가 위로 솟구침 */
function RisingParticles({ color }: { color: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${(i * 47 + 13) % 100}%`,
            bottom: `${(i * 19) % 35}%`,
            width:  `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            background: color,
            opacity: 0.7,
            animation: `rise ${3 + (i % 4)}s ${(i * 0.35) % 3}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}

/** 부정: 잿빛 입자가 아래로 떨어짐 */
function FallingParticles({ color }: { color: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 14 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-sm"
          style={{
            left:   `${(i * 53 + 7) % 100}%`,
            top:    0,
            width:  `${(i % 2) + 1}px`,
            height: `${(i % 4) + 8}px`,
            background: color,
            animation: `fall ${6 + (i % 5)}s ${(i * 0.55) % 4}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}

export function EndingScreen() {
  const [showCatalog, setShowCatalog] = useState(false)
  const currentEventId = useGameStore((state) => state.currentEventId)
  const publicSentiment = useGameStore((state) => state.publicSentiment)
  const teamMorale = useGameStore((state) => state.teamMorale)
  const resetGame = useGameStore((state) => state.resetGame)

  const event = getEvent(currentEventId)
  const ending = event.ending
  if (!ending) return null

  const type = getEndingType(ending.code)
  const theme = THEME[ending.code as keyof typeof THEME] ?? DEFAULT_THEME

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-10">
      {/* 베이스 배경 */}
      <div className="absolute inset-0 bg-deep-navy" />

      {/* ── 긍정 이펙트 ── */}
      {type === 'positive' && (
        <>
          <div className="animate-orb absolute left-1/4 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.orb1}66 0%, transparent 70%)` }} />
          <div className="animate-orb-r absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.orb2}55 0%, transparent 70%)` }} />
          <div className="animate-orb absolute left-3/4 top-2/3 h-64 w-64 rounded-full blur-2xl"
            style={{ background: `radial-gradient(circle, ${theme.orb3}44 0%, transparent 70%)` }} />
          <div className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 55% 45% at 50% 50%, ${theme.orb1}33, transparent)` }} />
          <RisingParticles color={theme.orb2} />
        </>
      )}

      {/* ── 부정 이펙트 ── */}
      {type === 'negative' && (
        <>
          <div className="animate-orb-slow absolute left-1/3 top-1/3 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.orb1}44 0%, transparent 70%)` }} />
          <div className="animate-orb-slow absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.orb2}33 0%, transparent 70%)` }} />
          <div className="animate-vignette absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #000 100%)' }} />
          <div className="absolute inset-0 opacity-40"
            style={{ background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 20%, #000 90%)' }} />
          <FallingParticles color={theme.accent} />
        </>
      )}

      {/* ── 중립 이펙트 ── */}
      {type === 'neutral' && (
        <>
          <div className="animate-orb absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.orb1}44 0%, transparent 70%)` }} />
          <div className="animate-orb-r absolute bottom-1/4 right-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${theme.orb2}33 0%, transparent 70%)` }} />
        </>
      )}

      {/* ── 콘텐츠 ── */}
      <div className="relative z-10 w-full max-w-md">
        {/* 성적 배지 */}
        <div className="animate-fade-up mb-5 text-center">
          <span className={`inline-block rounded-full border px-4 py-1 text-xs font-semibold tracking-widest uppercase ${theme.badge}`}>
            {ending.grade}
          </span>
        </div>

        {/* 엔딩 제목 */}
        <h1
          className="animate-fade-up-1 mb-6 text-center text-4xl font-bold leading-tight text-off-white md:text-5xl"
          style={{ textShadow: `0 0 ${type === 'positive' ? '50px' : '20px'} ${theme.orb1}${type === 'negative' ? '55' : 'aa'}` }}
        >
          「{ending.title}」
        </h1>

        {/* 구분선 */}
        <div className="animate-fade-up-1 mb-6 flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${theme.accent}66)` }} />
          <span className="text-xs" style={{ color: theme.accent }}>◆</span>
          <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${theme.accent}66)` }} />
        </div>

        {/* 엔딩 이미지 */}
        {event.background && (
          <div className="animate-fade-up-2 mb-5 overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <SceneImage src={event.background} alt={event.title} />
          </div>
        )}

        {/* 수치 */}
        <div className="animate-fade-up-2 mb-5 flex flex-col gap-2">
          <StatBadge label="국민 민심" value={publicSentiment} />
          <StatBadge label="선수단 분위기" value={teamMorale} />
        </div>

        {/* 에필로그 */}
        <div className="animate-fade-up-3 mb-7 rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur">
          <p className="text-base leading-relaxed text-cool-gray italic">
            "{ending.epilogue}"
          </p>
        </div>

        {/* 버튼 */}
        <div className="animate-fade-up-4 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setShowCatalog((open) => !open)}
            className="w-full rounded-lg border border-white/20 bg-white/5 py-3 text-sm font-semibold text-off-white backdrop-blur transition hover:border-turf-green/60 hover:text-turf-green"
            aria-expanded={showCatalog}
          >
            {showCatalog ? '엔딩 목록 닫기' : '다른 엔딩 목록 보기'}
          </button>

          {showCatalog && (
            <EndingCatalogPanel currentEventId={currentEventId} />
          )}

          <button
            type="button"
            onClick={resetGame}
            className="w-full rounded-lg border border-white/20 bg-white/5 py-3 text-sm font-semibold text-off-white backdrop-blur transition hover:border-energy-red hover:bg-energy-red hover:text-white"
          >
            타이틀로 돌아가기
          </button>
        </div>
      </div>
    </main>
  )
}
