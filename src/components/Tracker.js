import "../css/Tracker.css";
export default function Tracker({ wordsArray }) {
  return (
    <div className="tracker--panel--container">
      <div className="speed--panel">
        Typed: <br />
        <span className="word--count">
          {wordsArray.completedWords.length}/{wordsArray.totalWords}
        </span>
      </div>
      <div className="speed--panel">Speed</div>
      <div className="accuracy--panel">Accuracy</div>
    </div>
  );
}
