import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BlackoutDatesCard } from "./BlackoutDatesCard";
import { BreakTimesCard } from "./BreakTimesCard";
import { SpecialOperatingHoursCard } from "./SpecialOperatingHoursCard";

export const AnimatedOperatingHours: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const floatY = Math.sin((frame / (fps * 3.2)) * Math.PI * 2) * 8;
  const cardSize = 1080;

  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'Satoshi';
            src: url('https://cdn.fontshare.com/wf/TTX2Z3MT3PZTZTO3N2VXR7X7I2OZHG6R/7O7B7X7V3I3WZ3O7X7R7A7H7A7Y7I7D/WT7V7X7Y7Z3O3X7R7MT7U7G7E7O7L6A.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Satoshi';
            src: url('https://cdn.fontshare.com/wf/HTR2X3OTV3I3HZTU3O2AXR7X7I2U3H7T/7O7B7X7V3I3WZ3O7X7R7A7H7A7Y7I7D/WT7V7X7Y7Z3O3X7R7MT7U7G7E7O7L6A.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Satoshi';
            src: url('https://cdn.fontshare.com/wf/HTR2X3OTV3I3HZTU3O2AXR7X7I2U3H7T/7O7B7X7V3I3WZ3O7X7R7A7H7A7Y7I7D/WT7V7X7Y7Z3O3X7R7MT7U7G7E7O7L6A.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
          }
        `}
      </style>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#b45708",
          fontFamily: "'Satoshi', sans-serif",
        }}
      >
        <div
          style={{
            width: cardSize,
            height: cardSize,
            borderRadius: 36,
            background:
              "radial-gradient(120% 120% at 0% 0%, #D87415 0%, #A34A06 68%, #7A3202 100%)",
            boxShadow: "none",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -70,
              left: -90,
              width: 640,
              height: 640,
              borderRadius: "50%",
              filter: "blur(100px)",
              backgroundColor: "rgba(252, 171, 84, 0.45)",
            }}
          />

          <div
            style={{
              position: "relative",
              width: 940,
              height: 790,
              transform: `translateX(70px) translateY(${floatY + 62}px) scale(1.15)`,
              transformOrigin: "center",
            }}
          >
            <div style={{ position: "absolute", left: 42, top: 36, zIndex: 1 }}>
              <BreakTimesCard delay={0} />
            </div>
            <div style={{ position: "absolute", left: 110, top: 204, zIndex: 2 }}>
              <BlackoutDatesCard delay={12} />
            </div>
            <div style={{ position: "absolute", left: 176, top: 374, zIndex: 3 }}>
              <SpecialOperatingHoursCard delay={24} />
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </>
  );
};
