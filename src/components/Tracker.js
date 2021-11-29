import "../css/Tracker.css";
export default function Tracker({
  lettersArray,
  currentLetter,
  laps,
  elapsedTime,
}) {
  const accuracy = Math.floor(
    100 - (lettersArray.errors / lettersArray.totalLetters) * 100
  );
  const averageLengthWord =
    lettersArray.totalLetters /
    lettersArray.remainingLetters.join("").split(" ").length;
  const minutes = elapsedTime / 60;
  const wordsPerMinute =
    Math.floor(currentLetter / averageLengthWord / minutes) || 0;
  return (
    <div className="tracker--panel--container">
      <div className="speed--panel">
        Typed: <br />
        <span className="panel--metric">
          {currentLetter}/{lettersArray.totalLetters}
        </span>
      </div>
      <div className="speed--panel">
        Speed: <br />
        <span className="panel--metric">{wordsPerMinute} wpm</span>
      </div>
      <div className="accuracy--panel">
        Accuracy: <br />
        <span className="panel--metric">{accuracy}%</span>
      </div>
    </div>
  );
}
