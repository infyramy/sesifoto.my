import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { getCardMotion } from "./motion";
import { ScheduleCardShell } from "./ScheduleCardShell";

export const BlackoutDatesCard: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const motion = getCardMotion({
    frame,
    delay,
    durationInFrames,
    outroOffset: -4,
  });

  return (
    <div style={{ transform: motion.transform, opacity: motion.opacity }}>
      <ScheduleCardShell
        title="Blackout Dates"
        subtitle="Block specific dates when studio is closed"
        actionLabel="Add Blackout Date"
        actionIcon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        }
      >
        <div
          style={{
            backgroundColor: "#0B0D14",
            border: "1px solid #242A38",
            borderRadius: 14,
            padding: "16px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E24B2A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18M9 15l2 2 4-4" />
            </svg>
            <div>
              <h4
                style={{ margin: 0, color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}
              >
                Cuti
              </h4>
              <p style={{ margin: "5px 0 0 0", color: "#A6AEBD", fontSize: 14 }}>
                1 Mar 2026
              </p>
            </div>
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E24B2A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
          </svg>
        </div>
      </ScheduleCardShell>
    </div>
  );
};

