import React from "react";

export type ListItemProps = {
    title: string;
    email: string;
    time: string;
    status: "Sent" | "Failed";
    errorMessage?: string;
};

const containerStyle: React.CSSProperties = {
    backgroundColor: "#161616",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    border: "1px solid #2a2a2a",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    fontFamily: "Inter, sans-serif",
};

const iconContainerStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1c2230",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    flexShrink: 0,
};

const mailIconStyle: React.CSSProperties = {
    color: "#2f6feb",
    width: 20,
    height: 20,
};

const contentStyle: React.CSSProperties = {
    flex: 1,
};

const headerRowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
};

const titleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 600,
    margin: 0,
};

const badgeBaseStyle: React.CSSProperties = {
    padding: "4px 8px",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
};

const badgeSentStyle: React.CSSProperties = {
    ...badgeBaseStyle,
    backgroundColor: "#01c97b",
    color: "#ffffff",
};

const badgeFailedStyle: React.CSSProperties = {
    ...badgeBaseStyle,
    backgroundColor: "#e12d39",
    color: "#ffffff",
};

const metaRowStyle: React.CSSProperties = {
    color: "#8a8a8a",
    fontSize: 13,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
};

const dotStyle: React.CSSProperties = {
    margin: "0 8px",
    fontSize: 10,
};

const errorBoxStyle: React.CSSProperties = {
    marginTop: 12,
    padding: "12px",
    backgroundColor: "rgba(225, 45, 57, 0.05)",
    border: "1px solid rgba(225, 45, 57, 0.2)",
    borderRadius: 8,
    color: "#e12d39",
    fontSize: 13,
    lineHeight: 1.4,
};

const retryButtonStyle: React.CSSProperties = {
    marginTop: 16,
    padding: "8px 16px",
    backgroundColor: "transparent",
    border: "1px solid #444",
    borderRadius: 8,
    color: "#fff",
    fontSize: 13,
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "fit-content",
};

export const ListItem: React.FC<ListItemProps> = ({
    title,
    email,
    time,
    status,
    errorMessage,
}) => {
    return (
        <div style={containerStyle}>
            <div style={iconContainerStyle}>
                <svg
                    style={mailIconStyle}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            </div>

            <div style={contentStyle}>
                <div style={headerRowStyle}>
                    <h4 style={titleStyle}>{title}</h4>
                    <div style={status === "Sent" ? badgeSentStyle : badgeFailedStyle}>
                        {status}
                    </div>
                </div>

                <div style={metaRowStyle}>
                    <span>{email}</span>
                    <span style={dotStyle}>•</span>
                    <span>{time}</span>
                </div>

                {status === "Failed" && errorMessage && (
                    <div style={errorBoxStyle}>{errorMessage}</div>
                )}

                {status === "Failed" && (
                    <div style={retryButtonStyle}>
                        <svg
                            style={{ width: 14, height: 14, marginRight: 6 }}
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
                        Retry Send
                    </div>
                )}
            </div>
        </div>
    );
};
