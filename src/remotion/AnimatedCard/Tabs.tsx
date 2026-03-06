import React from "react";

const tabsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1c1c1c", // Slightly lighter than background
    borderRadius: 8,
    padding: 4,
    marginBottom: 24,
};

const tabStyle: React.CSSProperties = {
    flex: 1,
    padding: "8px 0",
    textAlign: "center",
    color: "#a3a3a3",
    fontSize: 14,
    fontWeight: 500,
    borderRadius: 6,
    fontFamily: "sans-serif",
};

const activeTabStyle: React.CSSProperties = {
    ...tabStyle,
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "1px solid #333333",
    boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
};

export const Tabs: React.FC = () => {
    return (
        <div style={tabsContainerStyle}>
            <div style={tabStyle}>All (4)</div>
            <div style={tabStyle}>WhatsApp ...</div>
            <div style={activeTabStyle}>Email (3)</div>
        </div>
    );
};
