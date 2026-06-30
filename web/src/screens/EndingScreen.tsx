import { SceneImage } from '@/components/SceneImage'
import { ScreenBackdrop } from '@/components/ScreenBackdrop'
import { formatStat } from '@/game/tiers'
import { getEvent } from '@/data/events'
import { useGameStore } from '@/store/gameStore'

export function EndingScreen() {
  const currentEventId = useGameStore((state) => state.currentEventId)
  const publicSentiment = useGameStore((state) => state.publicSentiment)
  const teamMorale = useGameStore((state) => state.teamMorale)
  const resetGame = useGameStore((state) => state.resetGame)

  const event = getEvent(currentEventId)
  const ending = event.ending

  if (!ending) {
    return null
  }

  return (
    <ScreenBackdrop className="justify-center">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4 p-6">
        <SceneImage src={event.background} alt={event.title} />

        <div className="rounded-xl border border-white/10 bg-slate-blue/95 p-6 text-center shadow-xl">
          <p className="mb-2 text-sm text-cool-gray">{ending.grade}</p>

          <div className="mb-4 space-y-1 text-sm text-off-white">
            <p>국민 민심: {formatStat(publicSentiment)}</p>
            <p>선수단 분위기: {formatStat(teamMorale)}</p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-off-white">
            「{ending.title}」
          </h2>

          <p className="mb-6 text-base leading-relaxed text-cool-gray italic">
            {ending.epilogue}
          </p>

          <button
            type="button"
            onClick={resetGame}
            className="rounded-lg border border-white/20 px-6 py-2 text-sm font-semibold text-off-white transition hover:border-energy-red/60 hover:text-white"
          >
            타이틀로
          </button>
        </div>
      </div>
    </ScreenBackdrop>
  )
}
