export type GamePhase = 'title' | 'chapter' | 'event' | 'feedback' | 'stats' | 'ending'

export type StatEffects = {
  publicSentiment?: number
  teamMorale?: number
}

export type ChoiceSnapshot = {
  currentEventId: string
  publicSentiment: number
  teamMorale: number
  flags: Record<string, boolean>
  tournamentResult: 'round-of-32' | 'eliminated' | null
}

export type Choice = {
  id: string
  label: string
  next: string
  effects?: StatEffects
  feedback?: string
  setFlag?: string
}

export type EndingInfo = {
  code: string
  title: string
  grade: string
  epilogue: string
}

export type ChapterInfo = {
  label: string
  subtitle?: string
}

export type GameEvent = {
  id: string
  title: string
  background?: string
  /** 피드백(현장 반응) 단계에서 표시할 배경. 없으면 background 유지 */
  feedbackBackground?: string
  text: string
  choices?: Choice[]
  autoNext?: string
  autoEffects?: StatEffects
  autoFeedback?: string
  type?: 'chapter' | 'ending'
  chapter?: ChapterInfo
  ending?: EndingInfo
}

export type GameState = {
  phase: GamePhase
  publicSentiment: number
  teamMorale: number
  currentEventId: string
  feedback: string | null
  feedbackEffects: StatEffects | null
  previousChoiceState: ChoiceSnapshot | null
  pendingNext: string | null
  flags: Record<string, boolean>
  tournamentResult: 'round-of-32' | 'eliminated' | null
}
