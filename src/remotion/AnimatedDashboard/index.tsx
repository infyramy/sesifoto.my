import React from "react";
import { AbsoluteFill } from "remotion";
import { KpiCard } from "./KpiCard";
import { ChartCard } from "./ChartCard";
const cardWidth = 1080;
const cardHeight = 1000;

const containerStyle: React.CSSProperties = {
    paddingTop: 44,
    paddingRight: 44,
    paddingBottom: 44,
    paddingLeft: 44,
    width: cardWidth,
    height: cardHeight,
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Satoshi', sans-serif",
    borderRadius: 36,
    boxShadow: "none",
    background:
        "radial-gradient(120% 120% at 15% 0%, #dd7a12 0%, #c76506 62%, #a94e03 100%)",
    position: "relative",
    overflow: "hidden",
};

const topRowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    height: 200, // Fixed height for KPI cards
};

export const AnimatedDashboard: React.FC = () => {
    return (
        <>
            <style>
                {`
          @font-face {
            font-family: 'Satoshi';
            src: url('https://cdn.fontshare.com/wf/TTX2Z3MT3PZTZTO3N2VXR7X7I2OZHG6R/7O7B7X7V3I3WZ3O7X7R7A7H7A7Y7I7D/WT7V7X7Y7Z3O3X7R7MT7U7G7E7O7L6A.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Satoshi';
            src: url('https://cdn.fontshare.com/wf/HTR2X3OTV3I3HZTU3O2AXR7X7I2U3H7T/7O7B7X7V3I3WZ3O7X7R7A7H7A7Y7I7D/WT7V7X7Y7Z3O3X7R7MT7U7G7E7O7L6A.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Satoshi';
            src: url('https://cdn.fontshare.com/wf/HTR2X3OTV3I3HZTU3O2AXR7X7I2U3H7T/7O7B7X7V3I3WZ3O7X7R7A7H7A7Y7I7D/WT7V7X7Y7Z3O3X7R7MT7U7G7E7O7L6A.woff2') format('woff2');
            font-weight: 600;
            font-style: normal;
          }
           @font-face {
            font-family: 'Satoshi';
            src: url('https://cdn.fontshare.com/wf/HTR2X3OTV3I3HZTU3O2AXR7X7I2U3H7T/7O7B7X7V3I3WZ3O7X7R7A7H7A7Y7I7D/WT7V7X7Y7Z3O3X7R7MT7U7G7E7O7L6A.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
          }
        `}
            </style>
            <AbsoluteFill
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#c55d06",
                }}
            >
                <div style={containerStyle}>
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div style={topRowStyle}>
                            {/* Delay 0: Pops in first */}
                            <KpiCard
                                title="Total Sales"
                                value={15663.00}
                                prefix="RM "
                                trend="↗ 100%"
                                icon={
                                    <div style={{ backgroundColor: "rgba(247, 140, 65, 0.1)", padding: 8, borderRadius: 20 }}>
                                        <svg style={{ width: 24, height: 24, color: "#f78c41" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                }
                                delay={0}
                            />
                            {/* Delay 15: Pops in shortly after the first card */}
                            <KpiCard
                                title="Total Slot Booked"
                                value={435}
                                trend="↗ 100%"
                                icon={
                                    <div style={{ backgroundColor: "rgba(59, 130, 246, 0.1)", padding: 8, borderRadius: 20 }}>
                                        <svg style={{ width: 24, height: 24, color: "#3b82f6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                }
                                delay={15}
                            />
                        </div>
                        {/* ChartCard slides in after both KPI cards have popped */}
                        <ChartCard delay={30} />
                    </div>
                </div>
            </AbsoluteFill>
        </>
    );
};
