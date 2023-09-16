import "./three-dots-wave.scss";
import type { JSX } from "preact";

export default function ThreeDotsWave(): JSX.Element {
  return (
    <div id="wave">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </div>
  );
}
