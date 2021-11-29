import "../css/Text.css";

export default function Text({ displayedText, currentLetter }) {
  const dynamicText = displayedText.split("").map((letter, index) => {
    return (
      <span
        key={index}
        className={
          index >= currentLetter ? "remaining--letter" : "previous--letter"
        }
      >
        {letter}
      </span>
    );
  });

  return (
    <div className="text">
      <p>{dynamicText}</p>
    </div>
  );
}
