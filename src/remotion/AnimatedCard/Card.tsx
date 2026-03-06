import React from "react";
import { Tabs } from "./Tabs";
import { ListItem, ListItemProps } from "./ListItem";
import { Arrow } from "./Arrow";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// Inject Satoshi font if available, fallback to sans-serif
const cardStyle: React.CSSProperties = {
    backgroundColor: "#0e0d0f",
    width: 550, // Increased width
    minHeight: 650, // Added min-height for bigger feel
    borderRadius: 28, // Slightly softer corners for larger size
    padding: "40px 32px", // Increased padding
    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)",
    border: "1px solid #262626",
    fontFamily: "'Satoshi', 'Inter', sans-serif",
    position: "relative",
};

const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28, // Increased margin
};

const headerTitleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: 22, // Increased font size
    fontWeight: 600,
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: 12,
};

const iconStyle: React.CSSProperties = {
    color: "#a3a3a3",
    width: 20,
    height: 20,
};

const mockData: ListItemProps[] = [
    {
        title: "Booking Confirmed - SDTK-...",
        email: "nfarhaniaida@gmail.com",
        time: "5 Mar, 10:01 pm",
        status: "Sent",
    },
    {
        title: "Booking Confirmed - SDTK-...",
        email: "nfarhaniaida@gmail.com",
        time: "5 Mar, 06:39 pm",
        status: "Sent",
    },
    {
        title: "Booking Confirmed - SDTK...",
        email: "nfarhaniaida@gmail.com",
        time: "5 Mar, 02:23 pm",
        status: "Failed",
        errorMessage:
            "Plunk API error: 403 - Project is disabled due to security violations. All write operations are blocked.",
    },
];

export const Card: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Floating animation for the whole card
    const yOffset = Math.sin(frame / (fps * 2) * Math.PI) * 10;

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
            `}
            </style>
            <div style={{ ...cardStyle, transform: `translateY(${yOffset}px) scale(1.05)` }}>
                <div style={headerStyle}>
                    <h2 style={headerTitleStyle}>
                        <svg
                            style={iconStyle}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        Notification Logs
                    </h2>
                    <svg
                        style={iconStyle}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                    </svg>
                </div>

                <Tabs />

                <div style={{ position: "relative" }}>
                    {mockData.map((item, index) => {
                        // Staggered entrance animation
                        const delay = index * 10;
                        const translateY = interpolate(frame - delay, [0, 15], [20, 0], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                        });
                        const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                        });

                        return (
                            <div
                                key={index}
                                style={{
                                    transform: `translateY(${translateY}px)`,
                                    opacity,
                                }}
                            >
                                <ListItem {...item} />
                                {/* Only show arrow on the failed item, appearing after the item itself */}
                                {item.status === "Failed" && frame > delay + 20 && (
                                    <div style={{ position: "absolute", bottom: -20, left: -40 }}>
                                        <Arrow />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
