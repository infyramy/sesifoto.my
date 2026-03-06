import { AbsoluteFill } from "remotion";
import React from "react";

export const Background: React.FC = () => {
    return (
        <AbsoluteFill
            style={{
                background: "radial-gradient(circle at center, #f56e18 0%, #1a0800 100%)",
            }}
        />
    );
};
