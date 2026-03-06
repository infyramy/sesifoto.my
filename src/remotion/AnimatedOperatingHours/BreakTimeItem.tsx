import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { getCardMotion } from "./motion";

type BreakTimeItemProps = {
  name: string;
  schedule: string;
  delay: number;
};

export const BreakTimeItem: React.FC<BreakTimeItemProps> = ({
  name,
  schedule,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const motion = getCardMotion({
    frame,
    delay,
    durationInFrames,
    outroOffset: -6,
  });

  return (
    <div
      style={{
        transform: motion.transform,
        opacity: motion.opacity,
        backgroundColor: "#0B0D14",
        border: "1px solid #242A38",
        borderRadius: 14,
        padding: "16px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h4 style={{ margin: 0, color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>
          {name}
        </h4>
        <p style={{ margin: "5px 0 0 0", color: "#A6AEBD", fontSize: 14 }}>
          {schedule}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ color: "#BAC2D2", fontSize: 14 }}>Visible</span>
        <div
          style={{
            width: 52,
            height: 30,
            borderRadius: 999,
            backgroundColor: "#E57522",
            padding: 3,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 999,
              backgroundColor: "#04060B",
            }}
          />
        </div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E24B2A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6M14 11v6" />
        </svg>
      </div>
    </div>
  );
};

