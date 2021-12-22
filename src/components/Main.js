import { useContext } from "react";
import MainContext from "../context/main/MainContext";
import StartScreen from "./layout/StartScreen";
import Text from "./Text";
import TypingPanel from "./TypingPanel";
import ProgressBar from "./layout/ProgressBar";
import EndScreen from "./layout/EndScreen";
import Pointer from "./layout/Pointer";

export default function Main(props) {
  const mainContext = useContext(MainContext);
  const { firstLetter, endGame, isRunning } = mainContext;

  return (
    <>
      {!isRunning ? (
        <StartScreen darkMode={props.darkMode}>
          <div
            id="start--text"
            className={props.darkMode ? "start--typing--dark" : "start--typing"}
          >
            <p>
              Type "{firstLetter}" <Pointer darkMode={props.darkMode} /> to
              start
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
    </>
  );
}
