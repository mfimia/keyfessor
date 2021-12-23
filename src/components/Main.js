import { useContext, Fragment } from "react";
import DarkContext from "../context/darkMode/DarkContext";
import MainContext from "../context/main/MainContext";
import StartScreen from "./layout/StartScreen";
import Text from "./Text";
import TypingPanel from "./TypingPanel";
import ProgressBar from "./layout/ProgressBar";
import EndScreen from "./layout/EndScreen";
import Pointer from "./layout/Pointer";

export default function Main() {
  const mainContext = useContext(MainContext);
  const { firstLetter, endGame, isRunning } = mainContext;

  const darkContext = useContext(DarkContext);
  const { darkMode } = darkContext;

  return (
    <Fragment>
      {!isRunning ? (
        <StartScreen>
          <div
            id="start--text"
            className={darkMode ? "start--typing--dark" : "start--typing"}
          >
            <p>
              Type "{firstLetter}" <Pointer /> to start
            </p>
          </div>
        </StartScreen>
      ) : (
        ""
      )}
      <Text />
      <ProgressBar />
      <TypingPanel />
      {endGame.current && <EndScreen />}
    </Fragment>
  );
}
