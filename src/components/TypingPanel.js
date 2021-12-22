import { Fragment } from "react";
import Keyboard from "./layout/Keyboard";
import Tracker from "./layout/Tracker";
import { StopWatch } from "./utils/StopWatch";

export default function TypingPanel() {
  return (
    <Fragment>
      <Keyboard />
      <StopWatch />
      <Tracker />
    </Fragment>
  );
}
