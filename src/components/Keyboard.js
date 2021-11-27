import "../css/Keyboard.css";
import useEventListener from "@use-it/event-listener";
import { useState } from "react";
import keys from "./keys";

export default function Keyboard({ displayedText }) {
  function handler(event) {
    console.log(event.key);
  }
  const textArray = displayedText.toLowerCase().split("");
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

  useEventListener("keydown", handler);

  return <div className="keyboard--container">{keyboard}</div>;
}
