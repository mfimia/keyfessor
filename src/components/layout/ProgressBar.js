import "../css/ProgressBar.css";

export default function ProgressBar(props) {
  const { value, max } = props;
  return <progress className="text--progress" value={value} max={max} />;
}
