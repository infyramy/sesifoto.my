import React from "react";
import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import { Card } from "./Card";

export const AnimatedCard: React.FC = () => {
    return (
        <AbsoluteFill
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Background />
            <Card />
        </AbsoluteFill>
    );
};
