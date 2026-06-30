import { useGameStore } from '@/store/gameStore'
import { ChapterScreen } from '@/screens/ChapterScreen'
import { EndingScreen } from '@/screens/EndingScreen'
import { EventScreen } from '@/screens/EventScreen'
import { TitleScreen } from '@/screens/TitleScreen'

function App() {
  const phase = useGameStore((state) => state.phase)

  if (phase === 'title') {
    return <TitleScreen />
  }

  if (phase === 'chapter') {
    return <ChapterScreen />
  }

  if (phase === 'ending') {
    return <EndingScreen />
  }

  return <EventScreen />
}

export default App
