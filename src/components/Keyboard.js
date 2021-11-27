import "../css/Keyboard.css";
// import { useEffect } from "react";
export default function Keyboard() {
  const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const topRowKeys = topRow.map((key, index) => (
    <span className="keyboard--key" key={index}>
      {key}
    </span>
  ));
  const midRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const midRowKeys = midRow.map((key, index) => (
    <span className="keyboard--key" key={index}>
      {key}
    </span>
  ));
  const botRow = ["Z", "X", "C", "V", "B", "N", "M"];
  const botRowKeys = botRow.map((key, index) => (
    <span className="keyboard--key" key={index}>
      {key}
    </span>
  ));

  return (
    <div className="keyboard--container">
      <div className="keyboard--top--row">{topRowKeys}</div>
      <div className="keyboard--mid--row">{midRowKeys}</div>
      <div className="keyboard--bot--row">{botRowKeys}</div>
    </div>
  );
}

//   useEffect(() => {
//     const keys = document.querySelectorAll(".keyboard--key");
//     keys.forEach((key) => {
//       key.addEventListener("keydown", () => {
//         console.log(key);
//       });
//     });
//   });
