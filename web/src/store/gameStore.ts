import { create } from 'zustand'
import { getEvent } from '@/data/events'
import { resolve6_4Branch, resolveEndingId } from '@/game/endingResolver'
import type { GamePhase, StatEffects } from '@/game/types'

const INITIAL_EVENT_ID = 'event-1'

type GameStore = {
  phase: GamePhase
  publicSentiment: number
  teamMorale: number
  currentEventId: string
  feedback: string | null
  pendingNext: string | null
  flags: Record<string, boolean>
  tournamentResult: 'round-of-32' | 'eliminated' | null
  startGame: () => void
  selectChoice: (choiceId: string) => void
  advanceAuto: () => void
  advanceChapter: () => void
  dismissFeedback: () => void
  resetGame: () => void
}

function applyEffects(
  publicSentiment: number,
  teamMorale: number,
  effects?: StatEffects,
) {
  return {
    publicSentiment: publicSentiment + (effects?.publicSentiment ?? 0),
    teamMorale: teamMorale + (effects?.teamMorale ?? 0),
  }
}

function resolveNextId(
  nextId: string,
  stats: { publicSentiment: number; teamMorale: number },
  flags: Record<string, boolean>,
  tournamentResult: GameStore['tournamentResult'],
): {
  eventId: string
  flags: Record<string, boolean>
  tournamentResult: GameStore['tournamentResult']
} {
  if (nextId === '__branch-6-4__') {
    const branch = resolve6_4Branch(stats.teamMorale)
    return {
      eventId: branch.eventId,
      flags,
      tournamentResult: branch.tournamentResult,
    }
  }

  if (nextId === '__resolve-ending__') {
    if (!tournamentResult) {
      throw new Error('tournamentResult is required to resolve ending')
    }
    return {
      eventId: resolveEndingId(
        stats.publicSentiment,
        stats.teamMorale,
        flags,
        tournamentResult,
      ),
      flags,
      tournamentResult,
    }
  }

  return { eventId: nextId, flags, tournamentResult }
}

function resolveNext(
  nextId: string,
  stats: { publicSentiment: number; teamMorale: number },
  flags: Record<string, boolean>,
  tournamentResult: GameStore['tournamentResult'],
): Partial<GameStore> {
  if (nextId === '__title__') {
    return {
      phase: 'title',
      publicSentiment: 0,
      teamMorale: 0,
      currentEventId: INITIAL_EVENT_ID,
      feedback: null,
      pendingNext: null,
      flags: {},
      tournamentResult: null,
    }
  }

  const resolved = resolveNextId(nextId, stats, flags, tournamentResult)
  const nextEvent = getEvent(resolved.eventId)

  if (nextEvent.type === 'ending') {
    return {
      phase: 'ending',
      currentEventId: resolved.eventId,
      feedback: null,
      pendingNext: null,
      flags: resolved.flags,
      tournamentResult: resolved.tournamentResult,
      ...stats,
    }
  }

  if (nextEvent.type === 'chapter') {
    return {
      phase: 'chapter',
      currentEventId: resolved.eventId,
      feedback: null,
      pendingNext: null,
      flags: resolved.flags,
      tournamentResult: resolved.tournamentResult,
      ...stats,
    }
  }

  return {
    phase: 'event',
    currentEventId: resolved.eventId,
    feedback: null,
    pendingNext: null,
    flags: resolved.flags,
    tournamentResult: resolved.tournamentResult,
    ...stats,
  }
}

export const useGameStore = create<GameStore>((set, get) => ({
  phase: 'title',
  publicSentiment: 0,
  teamMorale: 0,
  currentEventId: INITIAL_EVENT_ID,
  feedback: null,
  pendingNext: null,
  flags: {},
  tournamentResult: null,

  startGame: () =>
    set({
      phase: 'event',
      publicSentiment: 0,
      teamMorale: 0,
      currentEventId: INITIAL_EVENT_ID,
      feedback: null,
      pendingNext: null,
      flags: {},
      tournamentResult: null,
    }),

  selectChoice: (choiceId) => {
    const {
      currentEventId,
      publicSentiment,
      teamMorale,
      flags,
      tournamentResult,
    } = get()
    const event = getEvent(currentEventId)
    const choice = event.choices?.find((item) => item.id === choiceId)

    if (!choice) return

    const stats = applyEffects(publicSentiment, teamMorale, choice.effects)
    const nextFlags = choice.setFlag
      ? { ...flags, [choice.setFlag]: true }
      : flags

    if (choice.feedback) {
      set({
        ...stats,
        flags: nextFlags,
        phase: 'feedback',
        feedback: choice.feedback,
        pendingNext: choice.next,
      })
      return
    }

    set(resolveNext(choice.next, stats, nextFlags, tournamentResult))
  },

  advanceAuto: () => {
    const {
      currentEventId,
      publicSentiment,
      teamMorale,
      flags,
      tournamentResult,
    } = get()
    const event = getEvent(currentEventId)

    if (!event.autoNext) return

    const stats = applyEffects(
      publicSentiment,
      teamMorale,
      event.autoEffects,
    )

    if (event.autoFeedback) {
      set({
        ...stats,
        phase: 'feedback',
        feedback: event.autoFeedback,
        pendingNext: event.autoNext,
      })
      return
    }

    set(resolveNext(event.autoNext, stats, flags, tournamentResult))
  },

  advanceChapter: () => {
    const {
      currentEventId,
      publicSentiment,
      teamMorale,
      flags,
      tournamentResult,
    } = get()
    const event = getEvent(currentEventId)

    if (event.type !== 'chapter' || !event.autoNext) return

    set(
      resolveNext(
        event.autoNext,
        { publicSentiment, teamMorale },
        flags,
        tournamentResult,
      ),
    )
  },

  dismissFeedback: () => {
    const {
      pendingNext,
      publicSentiment,
      teamMorale,
      flags,
      tournamentResult,
    } = get()
    if (!pendingNext) return
    set(resolveNext(pendingNext, { publicSentiment, teamMorale }, flags, tournamentResult))
  },

  resetGame: () =>
    set({
      phase: 'title',
      publicSentiment: 0,
      teamMorale: 0,
      currentEventId: INITIAL_EVENT_ID,
      feedback: null,
      pendingNext: null,
      flags: {},
      tournamentResult: null,
    }),
}))
