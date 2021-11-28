import "../css/Keyboard.css";
import useEventListener from "@use-it/event-listener";
// import { useState } from "react";
import keys from "./keys";
import sound from "../assets/Mechanical-Keyboard-single-button-presses-4.mp3";
const keySound = new Audio(sound);

export default function Keyboard({ wordsArray, moveText }) {
  function highlightPressedKey(event) {
    const pressedLetter = event.key === " " ? "spacebar" : event.key;
    const activeKey = document.getElementById(pressedLetter);
    if (activeKey) {
      moveText();
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

// const keyClasses = {
//   spacebar: keys.key === 'Spacebar',
//   'keyboard--key': true,
//   'active-key__correct': false,
//   'active-key__wrong': false
// }
