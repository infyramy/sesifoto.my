import { Composition } from "remotion";
import { AnimatedDashboard } from "./AnimatedDashboard";
import { AnimatedBookingCard } from "./AnimatedBookingCard";
import { AnimatedOperatingHours } from "./AnimatedOperatingHours";
import { AnimatedNotificationViews } from "./AnimatedNotificationViews";
import { AntimatedBookingPage } from "./AntimatedBookingPage";

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
        width={1080}
        height={1000}
      />
      {/* The Booking Details View */}
      <Composition
        id="AnimatedBookingCard"
        component={AnimatedBookingCard}
        durationInFrames={180} // 6 Seconds looping sequence
        fps={30}
        width={1080}
        height={1000}
      />
      <Composition
        id="AnimatedOperatingHours"
        component={AnimatedOperatingHours}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1000}
      />
      <Composition
        id="AnimatedNotificationViews"
        component={AnimatedNotificationViews}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1000}
      />
      <Composition
        id="AntimatedBookingPage"
        component={AntimatedBookingPage}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1000}
      />
    </>
  );
};
