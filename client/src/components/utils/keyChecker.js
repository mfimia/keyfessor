export default function keyChecker(lettersArray, currentLetter, pressedLetter) {
  if (
    pressedLetter === "spacebar" &&
    lettersArray.remainingLetters[currentLetter] === " "
  ) {
    return true;
  }

  if (
    pressedLetter !== "spacebar" &&
    pressedLetter === lettersArray.remainingLetters[currentLetter]
  ) {
    return true;
  }

  return false;
}
