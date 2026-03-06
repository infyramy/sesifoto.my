import React from "react";

type ScheduleCardShellProps = {
  title: string;
  subtitle: string;
  actionLabel: string;
  actionIcon?: React.ReactNode;
  style?: React.CSSProperties;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export const ScheduleCardShell: React.FC<ScheduleCardShellProps> = ({
  title,
  subtitle,
  actionLabel,
  actionIcon,
  style,
  children,
  footer,
}) => {
  return (
    <div
      style={{
        width: 760,
        background: "linear-gradient(180deg, #090B11 0%, #07080D 100%)",
        border: "1px solid #262A35",
        borderRadius: 28,
        boxShadow:
          "0 30px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(242, 125, 29, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
        padding: "28px 28px 30px 28px",
        color: "#FFFFFF",
        fontFamily: "'Satoshi', sans-serif",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          marginBottom: 22,
          alignItems: "flex-start",
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: 42 / 2, fontWeight: 700 }}>{title}</h3>
          <p
            style={{
              margin: "6px 0 0 0",
              color: "#A1A8B8",
              fontSize: 31 / 2,
              lineHeight: 1.25,
            }}
          >
            {subtitle}
          </p>
        </div>
        <button
          type="button"
          style={{
            background: "#06070B",
            border: "1px solid #2E3341",
            color: "#F6F7FA",
            borderRadius: 12,
            padding: "12px 18px",
            fontSize: 18,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 10,
            minWidth: 206,
            justifyContent: "center",
          }}
        >
          {actionIcon}
          {actionLabel}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>{children}</div>

      {footer ? (
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>{footer}</div>
      ) : null}
    </div>
  );
};
