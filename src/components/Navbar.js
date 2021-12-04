import '../css/Navbar.css'
import lightLogo from '../assets/keyfessor-white-logo.png'
import darkLogo from '../assets/keyfessor-black-logo.png'
import useEventListener from '@use-it/event-listener'
import Pointer from './Pointer'
import { useState } from 'react'
import textArray from './textData'
import Text from './Text'

export default function Navbar({ darkMode }) {
  const [onLoad, setOnLoad] = useState(true)

  // TODO: refactor this to avoid importing all this just to retrieve one letter
  const [displayedText, setDisplayedText] = useState({
    texts: textArray,
    currentText: 0
  })
  const [lettersArray, setLettersArray] = useState({
    totalLetters:
      displayedText.texts[displayedText.currentText].split('').length,
    remainingLetters: displayedText.texts[displayedText.currentText].split(''),
    completedLetters: [],
    errors: 0
  })

  const firstLetter = displayedText.texts[displayedText.currentText][0]

  const startApp = ({ key }) => {
    if (key === firstLetter && onLoad) {
      setOnLoad(false)
    }
  }

  useEventListener('keydown', startApp)

  return (
    <>
      <img
        alt='Keyfessor logo'
        className='header--logo'
        src={darkMode ? lightLogo : darkLogo}
      />
      {onLoad && (
        <div
          id='start--text'
          className={darkMode ? 'start--typing--dark' : 'start--typing'}
        >
          Type{' '}
          <span>
            {firstLetter}
            <Pointer darkMode={darkMode} />
          </span>{' '}
          to start
        </div>
      )}
    </>
  )
}
