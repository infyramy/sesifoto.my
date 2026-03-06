import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const Arrow: React.FC = () => {
    const frame = useCurrentFrame();

    // Draw the arrow over a duration of ~20 frames
    const drawingProgress = interpolate(frame, [0, 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // Calculate the path length (approximate)
    const pathLength = 150;
    const strokeDashoffset = pathLength - drawingProgress * pathLength;

    return (
        <div
            style={{
                width: 120,
                height: 80,
            }}
        >
            <svg
                viewBox="0 0 100 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                }}
            >
                <path
                    d="M 10 30 Q 50 40 90 20"
                    stroke="#ffd5b5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={pathLength}
                    strokeDashoffset={strokeDashoffset}
                />
                {/* Arrow head pointing right towards the button */}
                <path
                    d="M 75 10 L 93 19 L 80 35"
                    stroke="#ffd5b5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={pathLength}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>
        </div>
    );
};
