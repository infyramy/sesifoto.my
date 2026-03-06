import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";

export const SessionHighlights: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const outroShift = 8; // Exit after header

    // Shadcn style: subtle scale up, slide up, and fade in
    const progress = interpolate(frame - delay, [0, 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
    });

    const scale = interpolate(progress, [0, 1], [0.95, 1]);
    const opacity = interpolate(progress, [0, 1], [0, 1]);
    const translateY = interpolate(progress, [0, 1], [10, 0]);
    const outroProgress = interpolate(frame, [durationInFrames - 20 - outroShift, durationInFrames - outroShift], [0, 1], {
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
        border: "1px solid #2a2a2a",
        margin: "0 48px",
        transform: `scale(${finalScale}) translateY(${finalTranslateY}px)`,
        opacity: finalOpacity,
        fontFamily: "'Satoshi', 'Inter', sans-serif",
        overflow: "hidden", // Important for the bottom border on columns
    };

    const headerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 24px",
        borderBottom: "1px solid #2a2a2a",
    };

    const titleStyle: React.CSSProperties = {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 700,
        margin: 0,
        display: "flex",
        alignItems: "center",
        gap: 12,
    };

    const badgeStyle: React.CSSProperties = {
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        color: "#4ade80",
        padding: "4px 12px",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 600,
    };

    const columnsContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
    };

    const columnStyle: React.CSSProperties = {
        flex: 1,
        padding: "24px",
        borderRight: "1px solid #2a2a2a",
    };

    const labelStyle: React.CSSProperties = {
        color: "#9ca3af",
        fontSize: 12,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        marginBottom: 8,
    };

    const mainValueStyle: React.CSSProperties = {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 700,
        margin: "0 0 4px 0",
    };

    const subValueStyle: React.CSSProperties = {
        color: "#9ca3af",
        fontSize: 14,
    };

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <h2 style={titleStyle}>
                    <svg style={{ width: 20, height: 20, color: "#ce6b11" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Session Highlights
                </h2>
                <div style={{ display: "flex", gap: 8 }}>
                    <span style={badgeStyle}>Completed</span>
                    <span style={badgeStyle}>Paid</span>
                </div>
            </div>

            <div style={columnsContainerStyle}>
                <div style={columnStyle}>
                    <div style={labelStyle}>Date</div>
                    <h3 style={mainValueStyle}>1 Mar 2026</h3>
                    <div style={subValueStyle}>Sunday</div>
                </div>
                <div style={columnStyle}>
                    <div style={labelStyle}>Time</div>
                    <h3 style={mainValueStyle}>02:00 PM - 02:20 PM</h3>
                    <div style={subValueStyle}>20 mins session</div>
                </div>
                <div style={{ ...columnStyle, borderRight: "none" }}>
                    <div style={labelStyle}>Theme</div>
                    <h3 style={mainValueStyle}>Neon City Night</h3>
                    <div style={subValueStyle}>2 pax included</div>
                </div>
            </div>
        </div>
    );
};
