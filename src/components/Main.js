import Text from './Text'
import TypingPanel from './TypingPanel'
import textArray from './textData'
import { useEffect, useState, useRef } from 'react'
import { useStopwatch } from './timerHook'
import EndScreen from './EndScreen'
import ProgressBar from './ProgressBar'

export default function Main() {
  const [currentLetter, setCurrentLetter] = useState(0)
  const [displayedText, setDisplayedText] = useState({
    texts: textArray,
    currentText: 0
  })
  const [lettersArray, setLettersArray] = useState({
    totalLetters: displayedText.texts[displayedText.currentText]
      .toLowerCase()
      .split('').length,
    remainingLetters: displayedText.texts[displayedText.currentText]
      .toLowerCase()
      .split(''),
    completedLetters: [],
    errors: 0
  })
  const restarted = useRef(false)
  const endGame = useRef(false)

  const {
    isRunning,
    addLap,
    stopTimer,
    laps,
    elapsedTime,
    startTimer,
    resetTimer,
    resetLaps
  } = useStopwatch()

  const averageLengthWord =
    lettersArray.totalLetters /
    lettersArray.remainingLetters.join('').split(' ').length
  const minutes = elapsedTime / 60
  const wordsPerMinute =
    Math.floor(currentLetter / averageLengthWord / minutes) || 0

  const accuracy = Math.floor(100 - (lettersArray.errors / currentLetter) * 100)

  const handleStartTimer = () => {
    if (!isRunning) startTimer()
  }

  const advanceText = () => {
    setCurrentLetter((prev) => {
      return prev === lettersArray.totalLetters - 1 ? newText() : prev + 1
    })
  }

  const newText = () => {
    if (displayedText.currentText === textArray.length - 1) {
      endGame.current = true
    } else {
      setDisplayedText((previousText) => {
        return {
          ...previousText,
          currentText: previousText.currentText + 1
        }
      })

      if (!isRunning) stopTimer()
      addLap(wordsPerMinute, accuracy)
      resetTimer()
      setCurrentLetter(0)
    }
  }

  useEffect(() => {
    if (displayedText.currentText || restarted.current) {
      restarted.current = false
      setLettersArray((prev) => {
        return {
          ...prev,
          totalLetters:
            displayedText.texts[displayedText.currentText].split('').length,
          remainingLetters:
            displayedText.texts[displayedText.currentText].split(''),
          errors: 0
        }
      })
    }
  }, [displayedText.texts, displayedText.currentText])

  let progressBarMaxValue =
    displayedText.texts[displayedText.currentText].split('').length

  const addError = () => {
    setLettersArray((prev) => {
      return {
        ...prev,
        errors: prev.errors + 1
      }
    })
  }

  const resetGame = () => {
    restarted.current = true
    setCurrentLetter(0)
    setDisplayedText((prevText) => {
      return {
        ...prevText,
        currentText: 0
      }
    })
    resetTimer()
    resetLaps()
    endGame.current = false
  }

  return (
    <>
      <Text
        currentLetter={currentLetter}
        displayedText={displayedText.texts[displayedText.currentText]}
      />
      <ProgressBar
        value={(currentLetter / progressBarMaxValue) * progressBarMaxValue}
        max={progressBarMaxValue}
      />
      <TypingPanel
        displayedText={displayedText.texts[displayedText.currentText]}
        lettersArray={lettersArray}
        advanceText={advanceText}
        currentLetter={currentLetter}
        addError={addError}
        handleStartTimer={handleStartTimer}
        elapsedTime={elapsedTime}
        laps={laps}
        wordsPerMinute={wordsPerMinute}
        accuracy={accuracy}
        isRunning={isRunning}
      />
      {endGame.current && <EndScreen laps={laps} resetGame={resetGame} />}
    </>
  )
}
