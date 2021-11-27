import '../css/Keyboard.css'
import useEventListener from '@use-it/event-listener'
import { useState } from 'react'
import keys from './keys'

export default function Keyboard({ displayedText }) {
  // const keyClasses = {
  //   spacebar: keys.key === 'Spacebar',
  //   'keyboard--key': true,
  //   'active-key__correct': false,
  //   'active-key__wrong': false
  // }

  function highlightPressedKey(event) {
    const pressedLetter = event.key === ' ' ? 'spacebar' : event.key
    const activeKey = document.getElementById(pressedLetter)
    activeKey.classList.add('active-key__correct')
    console.log(pressedLetter)
    console.log(activeKey)
  }

  function removeHighlightFromPressedKey(event) {
    const pressedLetter = event.key === ' ' ? 'spacebar' : event.key
    const activeKey = document.getElementById(pressedLetter)
    activeKey.classList.remove('active-key__correct')
  }

  // const textArray = displayedText.toLowerCase().split('')
  const keyboard = keys.map((row, index) => {
    return (
      <div className={row.className} key={index}>
        {row.keys.map((rowKey, keyIndex) => {
          return (
            <span
              id={rowKey.toLowerCase()}
              className={rowKey === 'Spacebar' ? 'spacebar' : 'keyboard--key'}
              key={keyIndex}
            >
              {rowKey}
            </span>
          )
        })}
      </div>
    )
  })
  console.log(keyboard)
  useEventListener('keydown', highlightPressedKey)
  useEventListener('keyup', removeHighlightFromPressedKey)

  return <div className='keyboard--container'>{keyboard}</div>
}
