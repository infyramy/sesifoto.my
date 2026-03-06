import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";

export const PhotographerInfo: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const outroShift = 4; // Exit after top sections

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
        flex: 1, // Will share space with CustomerInfo
        transform: `scale(${finalScale}) translateY(${finalTranslateY}px)`,
        opacity: finalOpacity,
        fontFamily: "'Satoshi', 'Inter', sans-serif",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
    };

    const headerStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: 12,
        color: "#ffffff",
        fontWeight: 700,
        fontSize: 16,
        borderBottom: "1px dashed #2a2a2a",
        paddingBottom: 16,
    };

    const profileRowStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: 16,
    };

    const avatarStyle: React.CSSProperties = {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "rgba(206, 107, 17, 0.1)", // Faded orange
        color: "#ce6b11",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const nameStyle: React.CSSProperties = {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 700,
        margin: "0 0 4px 0",
    };

    const phoneStyle: React.CSSProperties = {
        color: "#9ca3af",
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        gap: 4,
    };

    const metricsContainerStyle: React.CSSProperties = {
        display: "flex",
        backgroundColor: "#0e0d0f",
        borderRadius: 8,
        border: "1px solid #1f1f22",
        marginTop: "auto", // Push to bottom to align with Customer details height
    };

    const metricStyle: React.CSSProperties = {
        flex: 1,
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const labelStyle: React.CSSProperties = {
        color: "#9ca3af",
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        marginBottom: 4,
    };

    const valueStyle: React.CSSProperties = {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: 700,
    };

    const incomeValueStyle: React.CSSProperties = {
        ...valueStyle,
        color: "#4ade80", // Green income color
    };

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <svg style={{ width: 18, height: 18, color: "#9ca3af" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Photographer
            </div>

            <div style={profileRowStyle}>
                <div style={avatarStyle}>
                    <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div>
                    <h3 style={nameStyle}>Daniel Hakim</h3>
                    <div style={phoneStyle}>
                        <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +60112233445
                    </div>
                </div>
            </div>

            <div style={metricsContainerStyle}>
                <div style={{ ...metricStyle, borderRight: "1px solid #1f1f22" }}>
                    <div style={labelStyle}>RATE</div>
                    <div style={valueStyle}>RM 40.00</div>
                </div>
                <div style={metricStyle}>
                    <div style={labelStyle}>INCOME</div>
                    <div style={incomeValueStyle}>RM 40.00</div>
                </div>
            </div>
        </div>
    );
};
