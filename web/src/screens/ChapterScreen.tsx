import { SceneImage } from '@/components/SceneImage'
import { ScreenBackdrop } from '@/components/ScreenBackdrop'
import { getEvent } from '@/data/events'
import { useGameStore } from '@/store/gameStore'

export function ChapterScreen() {
  const currentEventId = useGameStore((state) => state.currentEventId)
  const advanceChapter = useGameStore((state) => state.advanceChapter)

  const event = getEvent(currentEventId)
  const chapter = event.chapter

  if (!chapter) {
    return null
  }

  return (
    <ScreenBackdrop className="justify-center">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-6 py-8 text-center">
        <SceneImage src={event.background} alt={event.title} />

        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-energy-red uppercase">
            {chapter.label}
          </p>

          <h1 className="mb-3 text-4xl font-bold text-off-white md:text-5xl">
            {event.title}
          </h1>

          {chapter.subtitle && (
            <p className="mb-4 text-base text-cool-gray md:text-lg">
              {chapter.subtitle}
            </p>
          )}

          {event.text && (
            <p className="text-sm leading-relaxed text-off-white/90 md:text-base">
              {event.text}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={advanceChapter}
          className="rounded-lg bg-energy-red px-10 py-3 text-base font-semibold text-white transition hover:bg-energy-red/90"
        >
          시작
        </button>
      </div>
    </ScreenBackdrop>
  )
}
