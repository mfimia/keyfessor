import "../css/Keyboard.css";
import useEventListener from "@use-it/event-listener";
import { useState } from "react";
import keys from "./keys";
import sound from "../assets/Mechanical-Keyboard-single-button-presses-4.mp3";

const keySound = new Audio(sound);

// keySound.setAttribute("crossorigin", "anonymous");
export default function Keyboard({ displayedText }) {
  // const keyClasses = {
  //   spacebar: keys.key === 'Spacebar',
  //   'keyboard--key': true,
  //   'active-key__correct': false,
  //   'active-key__wrong': false
  // }

  function highlightPressedKey(event) {
    keySound.currentTime = 0;
    keySound.play();

    const pressedLetter = event.key === " " ? "spacebar" : event.key;
    const activeKey = document.getElementById(pressedLetter);
    if (activeKey) {
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

  // const textArray = displayedText.toLowerCase().split('')
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
  console.log(keyboard);
  useEventListener("keydown", highlightPressedKey);
  useEventListener("keyup", removeHighlightFromPressedKey);

  return <div className="keyboard--container">{keyboard}</div>;
}
