import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const AnimatedChart: React.FC<{
    width: number;
    height: number;
    delay?: number;
}> = ({ width, height, delay = 0 }) => {
    const frame = useCurrentFrame();

    // Draw the SVG path over 60 frames
    const drawingProgress = interpolate(frame - delay, [0, 60], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // A hardcoded SVG path that roughly matches the "Sales Overview" image's shape
    // M = Move to, Q/L = Curve/Line to
    const linePath = `
    M 0 320 
    Q 10 320, 15 315 
    L 20 220 
    L 30 300 
    L 40 230 
    L 55 240 
    L 65 310
    L 75 315 
    L 85 280 
    L 110 50 
    L 125 300 
    L 140 310
    L 155 290 
    L 170 320 
    L 700 320
  `;

    // Provide a fill area underneath the line using the exact same path + closing coordinates
    const fillPath = `
    ${linePath}
    L 700 350
    L 0 350
    Z
  `;

    // Approximate total length of the SVG path line to use for the dash offset trick
    const pathLength = 1200;
    const strokeDashoffset = pathLength - drawingProgress * pathLength;

    // The gradient fill under the line fades in slightly later than the line itself
    const fillOpacity = interpolate(frame - delay - 20, [0, 30], [0, 0.4], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <svg width={width} height={height} viewBox={`0 0 700 350`}>
            <defs>
                <linearGradient id="gradientFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f78c41" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>

            {/* The fading background gradient under the curve */}
            <path
                d={fillPath}
                fill="url(#gradientFill)"
                opacity={fillOpacity}
            />

            {/* The main orange line drawing itself */}
            <path
                d={linePath}
                fill="none"
                stroke="#f78c41"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={pathLength}
                strokeDashoffset={strokeDashoffset}
            />
        </svg>
    );
};
