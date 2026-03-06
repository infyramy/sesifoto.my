import { Composition } from "remotion";
import { AnimatedDashboard } from "./AnimatedDashboard";
import { AnimatedBookingCard } from "./AnimatedBookingCard";
import { AnimatedOperatingHours } from "./AnimatedOperatingHours";
import { AnimatedNotificationViews } from "./AnimatedNotificationViews";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* The Cinematic Epic Intro */}
      {/* The Notification Logs SaaS Card */}
      {/* The Animated Sales Dashboard */}
      <Composition
        id="AnimatedDashboard"
        component={AnimatedDashboard}
        durationInFrames={180} // 6 Seconds looping animation
        fps={30}
        width={1080} // Square format matching the reference
        height={1080}
      />
      {/* The Booking Details View */}
      <Composition
        id="AnimatedBookingCard"
        component={AnimatedBookingCard}
        durationInFrames={180} // 6 Seconds looping sequence
        fps={30}
        width={1080} // Square format
        height={1080}
      />
      <Composition
        id="AnimatedOperatingHours"
        component={AnimatedOperatingHours}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="AnimatedNotificationViews"
        component={AnimatedNotificationViews}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
