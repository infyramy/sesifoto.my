import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";

export const CustomerInfo: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
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
        flex: 1, // Will share space with PhotographerInfo in flex row
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
        justifyContent: "space-between",
        alignItems: "center",
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

    const newBadgeStyle: React.CSSProperties = {
        backgroundColor: "#2a2a2a",
        color: "#d1d5db",
        fontSize: 10,
        padding: "2px 8px",
        borderRadius: 4,
        display: "inline-block",
    };

    const contactRowStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0e0d0f",
        padding: "12px 16px",
        borderRadius: 8,
        border: "1px solid #1f1f22",
        color: "#d1d5db",
        fontSize: 14,
    };

    const iconWrapperStyle = (color: string, bg: string): React.CSSProperties => ({
        backgroundColor: bg,
        color: color,
        width: 24,
        height: 24,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    });

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg style={{ width: 18, height: 18, color: "#9ca3af" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Customer
                </div>
                <svg style={{ width: 16, height: 16, color: "#9ca3af" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </div>

            <div style={profileRowStyle}>
                <div style={avatarStyle}>
                    <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div>
                    <h3 style={nameStyle}>Sofia Rahman</h3>
                    <span style={newBadgeStyle}>Returning Customer</span>
                </div>
            </div>

            <div>
                <div style={{ ...contactRowStyle, marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={iconWrapperStyle("#22c55e", "rgba(34, 197, 94, 0.1)")}>
                            <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        +60129876543
                    </div>
                    <svg style={{ width: 16, height: 16, color: "#9ca3af" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </div>

                <div style={contactRowStyle}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={iconWrapperStyle("#3b82f6", "rgba(59, 130, 246, 0.1)")}>
                            <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        sofia.rahman@example.com
                    </div>
                    <svg style={{ width: 16, height: 16, color: "#9ca3af" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
