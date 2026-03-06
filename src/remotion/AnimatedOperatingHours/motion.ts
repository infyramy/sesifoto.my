import { Easing, interpolate } from "remotion";

type MotionOptions = {
  frame: number;
  delay: number;
  durationInFrames: number;
  outroOffset?: number;
};

export const getCardMotion = ({
  frame,
  delay,
  durationInFrames,
  outroOffset = 0,
}: MotionOptions) => {
  const intro = interpolate(frame - delay, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const introScale = interpolate(intro, [0, 1], [0.95, 1]);
  const introOpacity = interpolate(intro, [0, 1], [0, 1]);
  const introTranslateY = interpolate(intro, [0, 1], [24, 0]);
  const introTranslateX = interpolate(intro, [0, 1], [42, 0]);

  const outro = interpolate(
    frame,
    [durationInFrames - 34 + outroOffset, durationInFrames - 4 + outroOffset],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.4, 0, 1, 1),
    },
  );

  const outroScale = interpolate(outro, [0, 1], [1, 0.97]);
  const outroOpacity = interpolate(outro, [0, 1], [1, 0]);
  const outroTranslateY = interpolate(outro, [0, 1], [0, 26]);
  const outroTranslateX = interpolate(outro, [0, 1], [0, -24]);

  return {
    opacity: introOpacity * outroOpacity,
    transform: `translate3d(${introTranslateX + outroTranslateX}px, ${introTranslateY + outroTranslateY}px, 0) scale(${introScale * outroScale})`,
  };
};

