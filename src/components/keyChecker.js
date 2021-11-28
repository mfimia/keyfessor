export default function keyChecker(lettersArray, currentLetter, pressedLetter) {
  if (
    pressedLetter === "spacebar" &&
    lettersArray.remainingLetters[currentLetter] === " "
  ) {
    return true;
  } else if (
    pressedLetter === "spacebar" &&
    lettersArray.remainingLetters[currentLetter] !== " "
  ) {
    return false;
  } else if (
    pressedLetter !== "spacebar" &&
    pressedLetter === lettersArray.remainingLetters[currentLetter]
  ) {
    return true;
  } else {
    return false;
  }
}
