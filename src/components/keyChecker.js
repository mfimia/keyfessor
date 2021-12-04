export default function keyChecker(lettersArray, currentLetter, pressedLetter) {
  if (
    pressedLetter === 'spacebar' &&
    lettersArray.remainingLetters[currentLetter] === ' '
  ) {
    return true
  }

  if (
    pressedLetter !== 'spacebar' &&
    pressedLetter === lettersArray.remainingLetters[currentLetter]
  ) {
    return true
  }

  console.log('condition 3')
  return false
}
