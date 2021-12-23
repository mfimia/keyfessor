import { useContext, Fragment } from "react";
import MainContext from "../context/main/MainContext";
import Text from "./Text";
import TypingPanel from "./TypingPanel";
import EndScreen from "./layout/EndScreen";
import Results from "./layout/Results";

export default function Main() {
  const mainContext = useContext(MainContext);
  const { endGame } = mainContext;

  return (
    <Fragment>
      <Results />
      <Text />
      <TypingPanel />
      {endGame.current && <EndScreen />}
    </Fragment>
  );
}
