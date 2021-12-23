import { useContext, Fragment } from "react";
import MainContext from "../context/main/MainContext";
import Text from "./Text";
import Tracker from "./layout/Tracker";
import EndScreen from "./layout/EndScreen";
import Results from "./layout/Results";

export default function Main() {
  const mainContext = useContext(MainContext);
  const { endGame } = mainContext;

  return (
    <Fragment>
      <Results />
      <Text />
      <Tracker />
      {endGame.current && <EndScreen />}
    </Fragment>
  );
}
