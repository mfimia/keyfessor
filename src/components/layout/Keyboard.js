import MainContext from "../../context/main/MainContext";
import useEventListener from "@use-it/event-listener";
import { useContext } from "react";
import keys from "../data/keys";
import keyChecker from "../utils/keyChecker";
import sound from "../../assets/Mechanical-Keyboard-single-button-presses-4.mp3";
import error from "../../assets/mixkit-electric-fence-buzzing-2967.wav";
import "../../css/Keyboard.css";
import { Box } from "@mui/material";
const keySound = new Audio(sound);
const errorSound = new Audio(error);
errorSound.volume = 0.15;
keySound.volume = 0.5;

function highlightKeyAsCorrect(key) {
  key.classList.add("active-key__correct");
}

function highlightKeyAsIncorrect(key) {
  key.classList.add("active-key__wrong");
}

function playSound(sound) {
  sound.currentTime = 0.12;
  sound.play();
}

export default function Keyboard() {
  const mainContext = useContext(MainContext);
  const {
    lettersArray,
    advanceText,
    currentLetter,
    addError,
    handleStartTimer,
    isRunning,
  } = mainContext;

  function handleKeyPress({ key }) {
    const pressedLetter = key === " " ? "spacebar" : key;
    const activeKey = document.getElementById(pressedLetter.toLowerCase());

    if (keyChecker(lettersArray, currentLetter, pressedLetter)) {
      handleStartTimer();
      highlightKeyAsCorrect(activeKey);
      playSound(keySound);
      advanceText();
      return;
    }

    if (isRunning) {
      if (activeKey) {
        highlightKeyAsIncorrect(activeKey);
      }
      // playSound(errorSound);
      addError();
    }
  }

  function handleKeyUp({ key }) {
    const pressedLetter = key === " " ? "spacebar" : key;
    const activeKey = document.getElementById(pressedLetter.toLowerCase());
    if (activeKey) {
      activeKey.classList.remove("active-key__correct") ||
        activeKey.classList.remove("active-key__wrong");
    }
  }

  const keyboard = keys.map((row, index) => {
    return (
      <Box component="div" className={row.className} key={index}>
        {row.keys.map((rowKey, keyIndex) => {
          return (
            <Box
              component="span"
              id={rowKey}
              className={rowKey === "spacebar" ? "spacebar" : "keyboard--key"}
              key={keyIndex}
            >
              {rowKey === "spacebar" ? "-" : rowKey.toUpperCase()}
            </Box>
          );
        })}
      </Box>
    );
  });

  useEventListener("keypress", handleKeyPress);
  useEventListener("keyup", handleKeyUp);

  return (
    <Box
      component="div"
      sx={{
        height: "40%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        border: 1,
      }}
    >
      {keyboard}
    </Box>
  );
}
