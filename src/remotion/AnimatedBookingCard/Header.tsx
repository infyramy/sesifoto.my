import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";

export const Header: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const outroShift = 12; // Exit earliest (top section first)

    // Slide down and fade in
    const yOffset = interpolate(frame - delay, [0, 15], [-20, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const outroProgress = interpolate(frame, [durationInFrames - 20 - outroShift, durationInFrames - outroShift], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
    });
    const outroOpacity = interpolate(outroProgress, [0, 1], [1, 0]);
    const outroYOffset = interpolate(outroProgress, [0, 1], [0, 10]);
    const finalOpacity = opacity * outroOpacity;
    const finalYOffset = yOffset + outroYOffset;

    return (
        <div
            style={{
                transform: `translateY(${finalYOffset}px)`,
                opacity: finalOpacity,
                fontFamily: "'Satoshi', 'Inter', sans-serif",
                padding: "48px 48px 0px 48px",
            }}
        >
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#9ca3af", fontSize: 14, marginBottom: 16 }}>
                <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>Bookings</span>
                <span>›</span>
                <span>Booking Details</span>
            </div>

            {/* Title */}
            <h1 style={{ color: "#ffffff", fontSize: 32, fontWeight: 700, margin: "0 0 12px 0" }}>
                #RY2026-7536
            </h1>

            {/* Date Created */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#9ca3af", fontSize: 14 }}>
                <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Created on 26 Feb 2026, 06:33 pm
            </div>
        </div>
    );
};
