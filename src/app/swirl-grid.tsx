// swirl-grid.tsx
import React from "react";

type SwirlGridProps = {
  x: number;
  y: number;
  size?: number;       // swirl size in px
  gap?: number;        // negative gap = overlap
  rows?: number;
  cols?: number;
  opacity?: number;
};

const SwirlGrid: React.FC<SwirlGridProps> = ({
                                               x,
                                               y,
                                               size = 47,
                                               gap = -20,
                                               rows = 4,
                                               cols = 4,
                                               opacity = 0.15,
                                             }) => {
  // Calculate total width and height based on overlap
  const cellSpacing = size + gap;
  const gridWidth = cols * cellSpacing + (cellSpacing / 2); // extra for staggered offset
  const gridHeight = rows * cellSpacing;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: y,
        left: x,
        width: gridWidth,
        height: gridHeight,
      }}
    >
      {Array.from({ length: rows }).map((_, rowIdx) =>
        Array.from({ length: cols }).map((_, colIdx) => {
          const offsetX = rowIdx % 2 === 1 ? cellSpacing / 2 : 0;
          const top = rowIdx * cellSpacing;
          const left = colIdx * cellSpacing + offsetX;

          return (
            <img
              key={`${rowIdx}-${colIdx}`}
              src="/swirl.svg"
              width={size}
              height={size}
              style={{
                position: "absolute",
                top,
                left,
                opacity,
              }}
              alt=""
              aria-hidden="true"
            />
          );
        })
      )}
    </div>
  );
};


export default SwirlGrid;
