import "../css/Keyboard.css";

export default function Keyboard() {
  const keys = [
    {
      keys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      className: "keyboard--top--row",
    },
    {
      keys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      className: "keyboard--mid--row",
    },
    {
      keys: ["Z", "X", "C", "V", "B", "N", "M"],
      className: "keyboard--bot--row",
    },
  ];

  const keyboard = keys.map((row, index) => {
    return (
      <div className={row.className} key={index}>
        {row.keys.map((rowKey, keyIndex) => {
          return (
            <span className="keyboard--key" key={keyIndex}>
              {rowKey}
            </span>
          );
        })}
      </div>
    );
  });

  return <div className="keyboard--container">{keyboard}</div>;
}
