import Keyboard from "./Keyboard";
import Tracker from "./Tracker";

export default function TypingPanel({ displayedText }) {
  return (
    <>
      <Keyboard displayedText={displayedText} />
      <Tracker />
    </>
  );
}
