import React from "react";
import { AbsoluteFill } from "remotion";
import { Header } from "./Header";
import { SessionHighlights } from "./SessionHighlights";
import { CustomerInfo } from "./CustomerInfo";
import { PhotographerInfo } from "./PhotographerInfo";
import { AddonsSection } from "./AddonsSection";

const cardSize = 1080;

export const AnimatedBookingCard: React.FC = () => {
    return (
        <AbsoluteFill
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#c55d06",
            }}
        >
            <div
                style={{
                    width: cardSize,
                    height: cardSize,
                    borderRadius: 36,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "none",
                    background:
                        "radial-gradient(120% 120% at 15% 0%, #dd7a12 0%, #c76506 62%, #a94e03 100%)",
                }}
            >
                {/* Inner Dark Dashboard Card properly indented from top left per mockup */}
                <div
                    style={{
                        backgroundColor: "#0e0d0f",
                        borderRadius: "40px 0 0 0",
                        width: "calc(100% - 100px)",
                        marginLeft: 100,
                        marginTop: 100,
                        display: "flex",
                        flexDirection: "column",
                        gap: 24, // Spacing between major sections
                        fontFamily: "'Satoshi', 'Inter', sans-serif",
                        minHeight: 800,
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <Header delay={0} />

                    <SessionHighlights delay={15} />

                    <div style={{ display: "flex", gap: 24, margin: "0 40px" }}>
                        <CustomerInfo delay={30} />
                        <PhotographerInfo delay={45} />
                    </div>

                    <AddonsSection delay={60} />
                </div>
            </div>
        </AbsoluteFill>
    );
};
