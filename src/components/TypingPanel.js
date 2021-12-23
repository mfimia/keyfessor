import { Fragment } from "react";
import Keyboard from "./layout/Keyboard";
import Tracker from "./layout/Tracker";

export default function TypingPanel() {
  return (
    <Fragment>
      <Keyboard />
      <Tracker />
    </Fragment>
  );
}
