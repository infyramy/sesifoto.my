import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";

export type KpiCardProps = {
    title: string;
    value: number;
    prefix?: string;
    suffix?: string;
    trend: string;
    icon: React.ReactNode;
    delay?: number;
};

const cardStyle: React.CSSProperties = {
    backgroundColor: "#17171a",
    borderRadius: 16,
    paddingTop: 28,
    paddingRight: 36,
    paddingBottom: 30,
    paddingLeft: 36,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    border: "1px solid #2a2a2a",
    fontFamily: "'Satoshi', sans-serif",
};

const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#d1d5db",
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "0.05em",
};

const valueGroupStyle: React.CSSProperties = {
    marginTop: 0,
};

const valueStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: 42,
    fontWeight: 700,
    margin: "0 0 12px 0",
};

const trendBadgeStyle: React.CSSProperties = {
    backgroundColor: "rgba(34, 197, 94, 0.15)",
    color: "#4ade80",
    padding: "4px 8px",
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    marginRight: 8,
};

const trendTextStyle: React.CSSProperties = {
    color: "#9ca3af",
    fontSize: 14,
};

export const KpiCard: React.FC<KpiCardProps> = ({
    title,
    value,
    prefix = "",
    suffix = "",
    trend,
    icon,
    delay = 0,
}) => {
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

    // Number counter animation
    const displayValue = interpolate(
        frame - delay - 5, // Start counting shortly after scale begins
        [0, 45],
        [0, value],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        }
    );

    // Format the number (e.g., 15663.00 -> 15,663.00)
    const formattedValue = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: value % 1 !== 0 ? 2 : 0,
        maximumFractionDigits: 2,
    }).format(displayValue);

    return (
        <div style={{ ...cardStyle, transform: `scale(${finalScale}) translateY(${finalTranslateY}px)`, opacity: finalOpacity }}>
            <div style={headerStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {title.toUpperCase()}
                    <svg style={{ width: 16, height: 16, color: "#6b7280" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                {icon}
            </div>

            <div style={valueGroupStyle}>
                <h3 style={valueStyle}>
                    {prefix}{formattedValue}{suffix}
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={trendBadgeStyle}>
                        <svg style={{ width: 14, height: 14, marginRight: 4 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                        </svg>
                        {trend}
                    </div>
                    <span style={trendTextStyle}>vs last period</span>
                </div>
            </div>
        </div>
    );
};
