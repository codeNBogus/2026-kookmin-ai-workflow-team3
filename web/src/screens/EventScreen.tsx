import { BackgroundImage } from '@/components/BackgroundImage'
import { ChoiceButtons } from '@/components/ChoiceButtons'
import { NarrativeBox } from '@/components/NarrativeBox'
import { getEvent } from '@/data/events'
import { useGameStore } from '@/store/gameStore'

export function EventScreen() {
  const phase = useGameStore((state) => state.phase)
  const currentEventId = useGameStore((state) => state.currentEventId)
  const feedback = useGameStore((state) => state.feedback)
  const selectChoice = useGameStore((state) => state.selectChoice)
  const advanceAuto = useGameStore((state) => state.advanceAuto)
  const dismissFeedback = useGameStore((state) => state.dismissFeedback)

  const event = getEvent(currentEventId)
  const isAutoEvent = Boolean(event.autoNext)
  const showFeedback = phase === 'feedback' && feedback

  return (
    <main className="relative flex min-h-screen flex-col">
      <BackgroundImage src={event.background} alt={event.title} />

      <div className="relative z-10 mt-auto flex w-full flex-col gap-4 p-4 md:p-8">
        <div className="mx-auto w-full max-w-3xl">
          {showFeedback ? (
            <NarrativeBox
              variant="feedback"
              title="현장 반응"
              text={feedback}
            />
          ) : (
            <NarrativeBox title={event.title} text={event.text} />
          )}
        </div>

        <div className="mx-auto w-full max-w-3xl">
          {showFeedback ? (
            <button
              type="button"
              onClick={dismissFeedback}
              className="w-full rounded-lg bg-energy-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-energy-red/90"
            >
              ▶ 계속
            </button>
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
      </div>
    </main>
  )
}
