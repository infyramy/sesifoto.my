import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";

export const AddonsSection: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const outroShift = 0; // Exit last (bottom section)

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
        transform: `scale(${finalScale}) translateY(${finalTranslateY}px)`,
        opacity: finalOpacity,
        fontFamily: "'Satoshi', 'Inter', sans-serif",
        padding: "24px",
        margin: "0 48px 48px 48px",
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
        marginBottom: 20,
    };

    const itemBadgeStyle: React.CSSProperties = {
        backgroundColor: "#2a2a2a",
        color: "#d1d5db",
        fontSize: 12,
        padding: "4px 12px",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
    };

    const sectionLabelStyle: React.CSSProperties = {
        color: "#9ca3af",
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
    };

    const itemBoxStyle: React.CSSProperties = {
        backgroundColor: "#0e0d0f",
        borderRadius: 8,
        border: "1px solid #1f1f22",
        padding: "16px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const itemNameStyle: React.CSSProperties = {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: 600,
        margin: "0 0 4px 0",
    };

    const itemQtyStyle: React.CSSProperties = {
        color: "#9ca3af",
        fontSize: 12,
    };

    const itemPriceStyle: React.CSSProperties = {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: 700,
    };

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg style={{ width: 18, height: 18, color: "#9ca3af" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Add-ons & Extras
                </div>
                <div style={itemBadgeStyle}>3 Items</div>
            </div>

            <div>
                <div style={sectionLabelStyle}>
                    <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ORIGINAL BOOKING ITEMS
                </div>

                <div style={itemBoxStyle}>
                    <div>
                        <h4 style={itemNameStyle}>Frame Size M — 16x24</h4>
                        <div style={itemQtyStyle}>Qty: <span style={{ color: "#ffffff", fontWeight: 500 }}>1</span></div>
                    </div>
                    <div style={itemPriceStyle}>RM 149.00</div>
                </div>
            </div>
        </div>
    );
};
