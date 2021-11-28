import "../css/Keyboard.css";
import useEventListener from "@use-it/event-listener";
import keys from "./keys";
import sound from "../assets/Mechanical-Keyboard-single-button-presses-4.mp3";
import error from "../assets/mixkit-electric-fence-buzzing-2967.wav";
const keySound = new Audio(sound);
const errorSound = new Audio(error);
errorSound.volume = 0.5;

export default function Keyboard({
  lettersArray,
  advanceText,
  currentLetter,
  addError,
}) {
  function highlightPressedKey(event) {
    const pressedLetter = event.key === " " ? "spacebar" : event.key;
    const activeKey = document.getElementById(pressedLetter);
    if (activeKey) {
      if (
        pressedLetter === "spacebar" &&
        lettersArray.remainingLetters[currentLetter] === " "
      ) {
        keySound.currentTime = 0.12;
        keySound.play();
        activeKey.classList.add("active-key__correct");
        advanceText();
      } else if (
        pressedLetter === "spacebar" &&
        lettersArray.remainingLetters[currentLetter] !== " "
      ) {
        errorSound.currentTime = 0.12;
        errorSound.play();
        activeKey.classList.add("active-key__wrong");
        addError();
      } else if (
        pressedLetter !== "spacebar" &&
        activeKey.id === lettersArray.remainingLetters[currentLetter]
      ) {
        keySound.currentTime = 0.12;
        keySound.play();
        activeKey.classList.add("active-key__correct");
        advanceText();
      } else {
        errorSound.currentTime = 0.12;
        errorSound.play();
        activeKey.classList.add("active-key__wrong");
        addError();
      }
    } else {
      return;
    }
  }

  function removeHighlightFromPressedKey(event) {
    const pressedLetter = event.key === " " ? "spacebar" : event.key;
    const activeKey = document.getElementById(pressedLetter);
    if (activeKey) {
      activeKey.classList.remove("active-key__correct") ||
        activeKey.classList.remove("active-key__wrong");
    } else {
      return;
    }
  }

  const keyboard = keys.map((row, index) => {
    return (
      <div className={row.className} key={index}>
        {row.keys.map((rowKey, keyIndex) => {
          return (
            <span
              id={rowKey.toLowerCase()}
              className={rowKey === "Spacebar" ? "spacebar" : "keyboard--key"}
              key={keyIndex}
            >
              {rowKey}
            </span>
          );
        })}
      </div>
    );
  });

  useEventListener("keydown", highlightPressedKey);
  useEventListener("keyup", removeHighlightFromPressedKey);

  return <div className="keyboard--container">{keyboard}</div>;
}
