import "../css/Tracker.css";
export default function Tracker({ lettersArray, currentLetter }) {
  const accuracy = Math.floor(
    100 - (lettersArray.errors / lettersArray.totalLetters) * 100
  );

  return (
    <div className="tracker--panel--container">
      <div className="speed--panel">
        Typed: <br />
        <span className="panel--metric">
          {currentLetter}/{lettersArray.totalLetters}
        </span>
      </div>
      <div className="speed--panel">Speed</div>
      <div className="accuracy--panel">
        Accuracy: <br />
        <span className="panel--metric">{accuracy}%</span>
      </div>
    </div>
  );
}
