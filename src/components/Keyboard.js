import "../css/Keyboard.css";
import useEventListener from "@use-it/event-listener";
import keys from "./keys";
import keyChecker from "./keyChecker";
import sound from "../assets/Mechanical-Keyboard-single-button-presses-4.mp3";
import error from "../assets/mixkit-electric-fence-buzzing-2967.wav";
const keySound = new Audio(sound);
const errorSound = new Audio(error);
errorSound.volume = 0.2;

export default function Keyboard({
  lettersArray,
  advanceText,
  currentLetter,
  addError,
  handleStartTimer,
}) {
  function highlightPressedKey({ key }) {
    const pressedLetter = key === " " ? "spacebar" : key;
    const activeKey = document.getElementById(pressedLetter);
    if (activeKey) {
      if (keyChecker(lettersArray, currentLetter, pressedLetter)) {
        handleStartTimer();
        keySound.currentTime = 0.12;
        keySound.play();
        activeKey.classList.add("active-key__correct");
        advanceText();
      } else if (!keyChecker(lettersArray, currentLetter, pressedLetter)) {
        errorSound.currentTime = 0.12;
        errorSound.play();
        activeKey.classList.add("active-key__wrong");
        addError();
      } else {
        return;
      }
    }
  }

  function removeHighlightFromPressedKey({ key }) {
    const pressedLetter = key === " " ? "spacebar" : key;
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
