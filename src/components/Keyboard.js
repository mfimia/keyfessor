import "../css/Keyboard.css";
import useEventListener from "@use-it/event-listener";
import keys from "./keys";
import sound from "../assets/Mechanical-Keyboard-single-button-presses-4.mp3";
const keySound = new Audio(sound);

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
      if (pressedLetter === "spacebar") {
        lettersArray.remainingLetters[currentLetter] === " "
          ? advanceText()
          : addError();
      } else if (pressedLetter !== "spacebar") {
        activeKey.id === lettersArray.remainingLetters[currentLetter]
          ? advanceText()
          : addError();
      }
      keySound.currentTime = 0.12;
      keySound.play();
      activeKey.classList.add("active-key__correct");
    } else {
      return;
    }
  }

  function removeHighlightFromPressedKey(event) {
    const pressedLetter = event.key === " " ? "spacebar" : event.key;
    const activeKey = document.getElementById(pressedLetter);
    if (activeKey) {
      activeKey.classList.remove("active-key__correct");
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
