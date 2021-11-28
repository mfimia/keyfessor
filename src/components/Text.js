import "../css/Text.css";

export default function Text({ displayedText, currentLetter }) {
  const dynamicText = displayedText.split("").map((letter, index) => {
    return (
      <span
        key={index}
        className={
          index === currentLetter ? "current--letter" : "normal--letter"
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
