import { ChoiceButtons } from '@/components/ChoiceButtons'
import { NarrativeBox } from '@/components/NarrativeBox'
import { SceneImage } from '@/components/SceneImage'
import { ScreenBackdrop } from '@/components/ScreenBackdrop'
import { StatTrendBadges } from '@/components/StatTrendBadges'
import { getEvent } from '@/data/events'
import { useGameStore } from '@/store/gameStore'

export function EventScreen() {
  const phase = useGameStore((state) => state.phase)
  const currentEventId = useGameStore((state) => state.currentEventId)
  const feedback = useGameStore((state) => state.feedback)
  const feedbackEffects = useGameStore((state) => state.feedbackEffects)
  const canUndoChoice = useGameStore(
    (state) => state.previousChoiceState !== null,
  )
  const selectChoice = useGameStore((state) => state.selectChoice)
  const advanceAuto = useGameStore((state) => state.advanceAuto)
  const undoChoice = useGameStore((state) => state.undoChoice)
  const dismissFeedback = useGameStore((state) => state.dismissFeedback)

  const event = getEvent(currentEventId)
  const isAutoEvent = Boolean(event.autoNext)
  const showFeedback = phase === 'feedback' && feedback
  const sceneImage =
    showFeedback && event.feedbackBackground
      ? event.feedbackBackground
      : event.background

  return (
    <ScreenBackdrop className="justify-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 p-4 md:p-8">
        <SceneImage src={sceneImage} alt={event.title} />

        {showFeedback ? (
          <div className="flex flex-col gap-3">
            <NarrativeBox
              variant="feedback"
              title="현장 반응"
              text={feedback}
            />
            <StatTrendBadges effects={feedbackEffects} />
          </div>
        ) : (
          <NarrativeBox title={event.title} text={event.text} />
        )}

        {showFeedback ? (
          <div
            className={`grid gap-3 ${
              canUndoChoice ? 'grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {canUndoChoice && (
              <button
                type="button"
                onClick={undoChoice}
                className="w-full rounded-lg border border-white/25 bg-deep-navy/80 px-4 py-3 text-sm font-semibold text-off-white transition hover:border-white/50 hover:bg-slate-blue"
              >
                ↩ 다시 선택
              </button>
            )}
            <button
              type="button"
              onClick={dismissFeedback}
              className="w-full rounded-lg bg-energy-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-energy-red/90"
            >
              ▶ 계속
            </button>
          </div>
        ) : isAutoEvent ? (
          <button
            type="button"
            onClick={advanceAuto}
            className="w-full rounded-lg bg-energy-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-energy-red/90"
          >
            다음
          </button>
        ) : (
          event.choices && (
            <ChoiceButtons choices={event.choices} onSelect={selectChoice} />
          )
        )}
      </div>
    </ScreenBackdrop>
  )
}
