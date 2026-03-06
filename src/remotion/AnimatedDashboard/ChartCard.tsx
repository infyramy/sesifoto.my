import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";
import { AnimatedChart } from "./AnimatedChart";

export const ChartCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    // Shadcn-style entrance: subtle scale, slide up, and fade in
    const progress = interpolate(frame - delay, [0, 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
    });
    const scale = interpolate(progress, [0, 1], [0.95, 1]);
    const opacity = interpolate(progress, [0, 1], [0, 1]);
    const translateY = interpolate(progress, [0, 1], [10, 0]);
    const outroProgress = interpolate(frame, [durationInFrames - 20, durationInFrames], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
    });
    const outroScale = interpolate(outroProgress, [0, 1], [1, 0.95]);
    const outroOpacity = interpolate(outroProgress, [0, 1], [1, 0]);
    const outroTranslateY = interpolate(outroProgress, [0, 1], [0, 10]);
    const finalScale = scale * outroScale;
    const finalOpacity = opacity * outroOpacity;
    const finalTranslateY = translateY + outroTranslateY;

    const cardStyle: React.CSSProperties = {
        backgroundColor: "#17171a",
        borderRadius: 16,
        padding: "28px 32px",
        paddingBottom: 48,
        marginTop: 24,
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        border: "1px solid #2a2a2a",
        fontFamily: "'Satoshi', sans-serif",
        transform: `scale(${finalScale}) translateY(${finalTranslateY}px)`,
        opacity: finalOpacity,
    };

    const headerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 32,
    };

    const titleStyle: React.CSSProperties = {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: 700,
        margin: "0 0 8px 0",
        display: "flex",
        alignItems: "center",
        gap: 12,
    };

    const subtitleStyle: React.CSSProperties = {
        color: "#9ca3af",
        fontSize: 18,
        margin: 0,
    };

    const legendStyle: React.CSSProperties = {
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        fontSize: 18,
        fontWeight: 500,
        gap: 12,
    };

    // Generate grid lines
    const gridLines = ["RM 4,000", "RM 3,000", "RM 2,000", "RM 1,000", "RM 0"];
    const dates = ["15 Feb", "25 Feb", "7 Mar", "17 Mar", "27 Mar", "6 Apr"];

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <div>
                    <h2 style={titleStyle}>
                        <svg style={{ width: 24, height: 24, color: "#f78c41" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Sales Overview
                    </h2>
                    <p style={subtitleStyle}>Revenue performance over time</p>
                </div>
                <div style={legendStyle}>
                    <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#f78c41" }} />
                    Revenue
                </div>
            </div>

            {/* Chart Canvas Area */}
            <div style={{ position: "relative", height: 520, display: "flex" }}>
                {/* Y Axis Labels */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: 24, color: "#9ca3af", textAlign: "right", width: 100, fontSize: 16 }}>
                    {gridLines.map((val) => (
                        <span key={val}>{val}</span>
                    ))}
                </div>

                {/* Grid and Graph */}
                <div style={{ flex: 1, position: "relative" }}>
                    {/* Horizontal Grid Lines */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        {gridLines.map((_, i) => (
                            <div key={i} style={{ borderBottom: "1px solid #2a2a2a", width: "100%", height: 1 }} />
                        ))}
                    </div>

                    {/* SVG Line Graph overlay */}
                    <div style={{ position: "absolute", top: 10, left: 0, right: 0, bottom: -10 }}>
                        {/* We pass a delay to ensure the line sequence begins after the card has slid up */}
                        <AnimatedChart width={700} height={520} delay={delay + 15} />
                    </div>

                    {/* X Axis Date Labels */}
                    <div style={{ position: "absolute", bottom: -40, left: 0, right: 0, display: "flex", justifyContent: "space-between", paddingLeft: 40, color: "#9ca3af", fontSize: 16 }}>
                        {dates.map((date) => (
                            <span key={date}>{date}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
