import '../css/Keyboard.css'
import useEventListener from '@use-it/event-listener'
import keys from './keys'
import keyChecker from './keyChecker'
import sound from '../assets/Mechanical-Keyboard-single-button-presses-4.mp3'
import error from '../assets/mixkit-electric-fence-buzzing-2967.wav'
const keySound = new Audio(sound)
const errorSound = new Audio(error)
errorSound.volume = 0.15
keySound.volume = 0.5

function highlightKeyAsCorrect(key) {
  key.classList.add('active-key__correct')
}

function highlightKeyAsIncorrect(key) {
  key.classList.add('active-key__wrong')
}

function playSound(sound) {
  sound.currentTime = 0.12
  sound.play()
}

// Old version that works

// function highlightPressedKey({ key }) {
//   const pressedLetter = key === " " ? "spacebar" : key;
//   const activeKey = document.getElementById(pressedLetter);
//   if (activeKey) {
//     if (keyChecker(lettersArray, currentLetter, pressedLetter)) {
//       handleStartTimer();
//       keySound.currentTime = 0.12;
//       keySound.play();
//       activeKey.classList.add("active-key__correct");
//       advanceText();
//     } else if (
//       !keyChecker(lettersArray, currentLetter, pressedLetter) &&
//       isRunning
//     ) {
//       errorSound.currentTime = 0.12;
//       errorSound.play();
//       activeKey.classList.add("active-key__wrong");
//       addError();
//     } else {
//       return;
//     }
//   }
// }

export default function Keyboard({
  lettersArray,
  advanceText,
  currentLetter,
  addError,
  handleStartTimer,
  isRunning
}) {
  function handleKeyPress({ key }) {
    const pressedLetter = key === ' ' ? 'spacebar' : key
    const activeKey = document.getElementById(pressedLetter.toLowerCase())

    if (keyChecker(lettersArray, currentLetter, pressedLetter)) {
      handleStartTimer()
      highlightKeyAsCorrect(activeKey)
      playSound(keySound)
      advanceText()
      return
    }

    if (isRunning) {
      highlightKeyAsIncorrect(activeKey)
      playSound(errorSound)
      addError()
    }
  }

  function handleKeyUp({ key }) {
    const pressedLetter = key === ' ' ? 'spacebar' : key
    const activeKey = document.getElementById(pressedLetter.toLowerCase())
    if (activeKey) {
      activeKey.classList.remove('active-key__correct') ||
        activeKey.classList.remove('active-key__wrong')
    }
  }

  const keyboard = keys.map((row, index) => {
    return (
      <div className={row.className} key={index}>
        {row.keys.map((rowKey, keyIndex) => {
          return (
            <span
              id={rowKey}
              className={rowKey === 'spacebar' ? 'spacebar' : 'keyboard--key'}
              key={keyIndex}
            >
              {rowKey === 'spacebar' ? '-' : rowKey.toUpperCase()}
            </span>
          )
        })}
      </div>
    )
  })

  useEventListener('keypress', handleKeyPress)
  useEventListener('keyup', handleKeyUp)

  return <div className='keyboard--container'>{keyboard}</div>
}
