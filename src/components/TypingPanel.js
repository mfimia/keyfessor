import Keyboard from './Keyboard'
import Tracker from './Tracker'
import { StopWatch } from './StopWatch'

export default function TypingPanel({
  lettersArray,
  advanceText,
  currentLetter,
  addError,
  elapsedTime,
  laps,
  handleStartTimer,
  wordsPerMinute,
  accuracy,
  isRunning
}) {
  return (
    <>
      <Keyboard
        advanceText={advanceText}
        lettersArray={lettersArray}
        currentLetter={currentLetter}
        addError={addError}
        handleStartTimer={handleStartTimer}
        isRunning={isRunning}
      />
      <StopWatch
        elapsedTime={elapsedTime}
        laps={laps}
        wordsPerMinute={wordsPerMinute}
      />
      <Tracker
        lettersArray={lettersArray}
        currentLetter={currentLetter}
        wordsPerMinute={wordsPerMinute}
        accuracy={accuracy}
      />
    </>
  )
}
