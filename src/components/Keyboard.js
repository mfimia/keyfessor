import "../css/Keyboard.css";

// export default function Keyboard() {
//   const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
//   const topRowKeys = topRow.map((key, index) => (
//     <span className="keyboard--key" key={index}>
//       {key}
//     </span>
//   ));
//   const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
//   const midRowKeys = midRow.map((key, index) => (
//     <span className="keyboard--key" key={index}>
//       {key}
//     </span>
//   ));
//   const botRow = ["Z", "X", "C", "V", "B", "N", "M"];
//   const botRowKeys = botRow.map((key, index) => (
//     <span className="keyboard--key" key={index}>
//       {key}
//     </span>
//   ));

//   return (
//     <div className="keyboard--container">
//       <div className="keyboard--top--row">{topRowKeys}</div>
//       <div className="keyboard--mid--row">{midRowKeys}</div>
//       <div className="keyboard--bot--row">{botRowKeys}</div>
//     </div>
//   );
// }

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
