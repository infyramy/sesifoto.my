import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, useCurrentFrame } from "remotion";
import customerBadge from "../card1/1.svg";
import customerTitle from "../card1/2.svg";
import customerPanel from "../card1/3.svg";
import ownerBadge from "../card2/Frame 23.svg";
import ownerTitle from "../card2/Incoming Booking Alert.svg";
import ownerPanel from "../card2/iPhone 14.svg";

const inOutProgress = (localFrame: number, startIn: number, endIn: number, startOut: number, endOut: number) => {
  const enter = interpolate(localFrame, [startIn, endIn], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const exit = interpolate(localFrame, [startOut, endOut], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  return Math.min(enter, exit);
};

const OwnerScene: React.FC<{ localFrame: number }> = ({ localFrame }) => {
  const badgeProgress = inOutProgress(localFrame, 0, 20, 100, 119);
  const titleProgress = inOutProgress(localFrame, 8, 30, 96, 119);
  const phoneProgress = inOutProgress(localFrame, 16, 44, 92, 119);

  return (
    <>
      <Img
        src={ownerBadge}
        style={{
          position: "absolute",
          left: "50%",
          top: 58,
          width: 335,
          height: 44,
          transform: `translateX(-50%) translateY(${interpolate(badgeProgress, [0, 1], [16, 0])}px) scale(${interpolate(badgeProgress, [0, 1], [0.96, 1])})`,
          opacity: badgeProgress,
        }}
      />
      <Img
        src={ownerTitle}
        style={{
          position: "absolute",
          left: "50%",
          top: 121,
          width: 643,
          height: 64,
          transform: `translateX(-50%) translateY(${interpolate(titleProgress, [0, 1], [18, 0])}px)`,
          opacity: titleProgress,
        }}
      />
      <Img
        src={ownerPanel}
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          width: "auto",
          height: 760,
          transform: `translateX(-50%) translateY(${interpolate(phoneProgress, [0, 1], [230, 0])}px)`,
          transformOrigin: "center bottom",
          opacity: phoneProgress,
        }}
      />
    </>
  );
};

export const AnimatedNotificationViews: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneSwitchStart = 120;
  const customerLocalFrame = frame;
  const ownerLocalFrame = Math.max(0, frame - sceneSwitchStart);
  const customerBadgeProgress = inOutProgress(customerLocalFrame, 0, 20, 100, 119);
  const customerTitleProgress = inOutProgress(customerLocalFrame, 8, 30, 96, 119);
  const customerPanelProgress = inOutProgress(customerLocalFrame, 16, 44, 92, 119);
  const customerOpacity = frame < sceneSwitchStart ? 1 : 0;
  const ownerOpacity = frame >= sceneSwitchStart ? 1 : 0;

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
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Satoshi', sans-serif",
        }}
      >
        <div
          style={{
            width: 1000,
            height: 1000,
            borderRadius: 38,
            background:
              "radial-gradient(120% 120% at 15% 0%, #d97916 0%, #c76506 62%, #ae5202 100%)",
            boxShadow: "0 40px 100px -20px rgba(0,0,0,0.8)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: customerOpacity,
            }}
          >
            <Img
              src={customerBadge}
              style={{
                position: "absolute",
                left: "50%",
                top: 58,
                width: 140,
                height: 44,
                transform: `translateX(-50%) translateY(${interpolate(customerBadgeProgress, [0, 1], [16, 0])}px) scale(${interpolate(customerBadgeProgress, [0, 1], [0.96, 1])})`,
                opacity: customerBadgeProgress,
              }}
            />
            <Img
              src={customerTitle}
              style={{
                position: "absolute",
                left: "50%",
                top: 121,
                width: 835,
                height: 57,
                transform: `translateX(-50%) translateY(${interpolate(customerTitleProgress, [0, 1], [18, 0])}px)`,
                opacity: customerTitleProgress,
              }}
            />
            <Img
              src={customerPanel}
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                width: "auto",
                height: 790,
                transform: `translateX(-50%) scale(${interpolate(customerPanelProgress, [0, 1], [0.96, 1])})`,
                transformOrigin: "center bottom",
                opacity: customerPanelProgress,
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: ownerOpacity,
            }}
          >
            <OwnerScene localFrame={ownerLocalFrame} />
          </div>
        </div>
      </AbsoluteFill>
    </>
  );
};
