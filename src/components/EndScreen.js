import "../css/EndScreen.css";
export default function EndScreen({ resetGame, laps }) {
  const timeResults = laps.map((lap, index) => {
    return (
      <div className="end--laps" key={index}>
        Text {index + 1}:{" "}
        <b>
          {Math.floor(lap.time)}s | {lap.speed} WPM | {lap.accuracy}%
        </b>
      </div>
    );
  });
  return (
    <div className="end">
      <h2 className="congrats">Great job! 🎉</h2>
      <br />
      <h4 className="end--results--title">Check out your results:</h4>
      <br />
      <div className="end--results">{timeResults}</div>
      <br />
      <button className="end--reset" onClick={resetGame}>
        Go again?
      </button>
    </div>
  );
}
