import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { BreakTimeItem } from "./BreakTimeItem";
import { getCardMotion } from "./motion";
import { ScheduleCardShell } from "./ScheduleCardShell";

export const BreakTimesCard: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const motion = getCardMotion({
    frame,
    delay,
    durationInFrames,
    outroOffset: -8,
  });

  return (
    <div style={{ transform: motion.transform, opacity: motion.opacity }}>
      <ScheduleCardShell
        title="Break Times"
        subtitle="Set regular break times (e.g., lunch breaks)"
        actionLabel="Add Break"
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
        <BreakTimeItem
          name="BERBUKA"
          schedule="6:30 PM - 8:00 PM • Every day"
          delay={delay + 10}
        />
        <BreakTimeItem
          name="Solat Jumaat"
          schedule="1:00 PM - 2:30 PM • Fri"
          delay={delay + 16}
        />
      </ScheduleCardShell>
    </div>
  );
};

