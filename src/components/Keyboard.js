import "../css/Keyboard.css";
import useEventListener from "@use-it/event-listener";
import { useState } from "react";

export default function Keyboard() {
  const keys = [
    {
      keys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      className: "keyboard--top--row",
    },
    {
      keys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      className: "keyboard--mid--row",
    },
    {
      keys: ["Z", "X", "C", "V", "B", "N", "M", ",", "."],
      className: "keyboard--bot--row",
    },
    {
      keys: ["Spacebar"],
      className: "spacebar--row",
    },
  ];

  function handler(event) {
    console.log(event.key);
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
  console.log(keyboard);
  useEventListener("keydown", handler);

  return <div className="keyboard--container">{keyboard}</div>;
}
