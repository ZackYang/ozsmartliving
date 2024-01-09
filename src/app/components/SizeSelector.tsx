import { useState } from "react";

export default function SizeSelector({
  maxWidth = 1000,
  maxHeight = 1000,
}: {
  maxWidth?: number;
  maxHeight?: number;
}) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(1000);

  return (
    <div>
      <label>
        Width:
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          max={maxWidth}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          max={maxHeight}
        />
      </label>
      <button onClick={() => window.resizeTo(width, height)}>Resize</button>
    </div>
  );
}