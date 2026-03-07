import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import bookingLaptop from "../card3/Frame.svg";
import bookingPhone from "../card3/Frame-1.svg";

const inOutProgress = (
	frame: number,
	startIn: number,
	endIn: number,
	startOut: number,
	endOut: number,
) => {
	const intro = interpolate(frame, [startIn, endIn], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
		easing: Easing.bezier(0.16, 1, 0.3, 1),
	});

	const outro = interpolate(frame, [startOut, endOut], [1, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
		easing: Easing.bezier(0.4, 0, 0.2, 1),
	});

	return intro * outro;
};

export const AntimatedBookingPage: React.FC = () => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

	const stageProgress = inOutProgress(frame, 0, 20, durationInFrames - 24, durationInFrames - 2);
	const laptopProgress = inOutProgress(frame, 0, 24, durationInFrames - 22, durationInFrames - 4);
	const phoneProgress = inOutProgress(frame, 16, 42, durationInFrames - 32, durationInFrames - 10);

	const floatY = Math.sin((frame / 180) * Math.PI * 2) * 5;
	const laptopFloatY = Math.sin((frame / 150) * Math.PI * 2) * 4;
	const phoneFloatY = Math.sin(((frame + 26) / 150) * Math.PI * 2) * 6;

	return (
		<AbsoluteFill
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#c55d06",
			}}
		>
			<div
				style={{
					width: 1080,
					height: 1000,
					borderRadius: 36,
					overflow: "hidden",
					position: "relative",
					background:
						"radial-gradient(120% 120% at 15% 0%, #dd7a12 0%, #c76506 62%, #a94e03 100%)",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: -120,
						left: -120,
						width: 560,
						height: 560,
						borderRadius: "50%",
						filter: "blur(90px)",
						backgroundColor: "rgba(247, 156, 72, 0.34)",
					}}
				/>

				<div
					style={{
						position: "absolute",
						inset: 0,
						opacity: stageProgress,
						transform: `translateY(${interpolate(stageProgress, [0, 1], [12, 0]) + floatY}px) scale(${interpolate(
							stageProgress,
							[0, 1],
							[0.988, 1],
						)})`,
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "60.5%",
							top: "70%",
							width: 630,
							height: 74,
							borderRadius: "50%",
							transform: `translate(-50%, -50%) scale(${interpolate(laptopProgress, [0, 1], [0.88, 1])})`,
							filter: "blur(36px)",
							backgroundColor: "rgba(34, 18, 5, 0.22)",
							opacity: laptopProgress,
							zIndex: 1,
						}}
					/>

					<Img
						src={bookingLaptop}
						style={{
							position: "absolute",
							width: 850,
							left: "60.5%",
							top: "50%",
							opacity: laptopProgress,
							transform: `translate(-50%, -50%) translateY(${
								interpolate(laptopProgress, [0, 1], [32, 0]) + laptopFloatY
							}px) scale(${interpolate(laptopProgress, [0, 1], [0.965, 1])})`,
							transformOrigin: "center center",
							filter: "drop-shadow(0 20px 26px rgba(25, 11, 2, 0.18))",
							zIndex: 2,
						}}
					/>

					<div
						style={{
							position: "absolute",
							left: 292,
							top: "91%",
							width: 318,
							height: 70,
							borderRadius: "50%",
							transform: `translate(-50%, -50%) scale(${interpolate(phoneProgress, [0, 1], [0.88, 1])})`,
							filter: "blur(34px)",
							backgroundColor: "rgba(34, 16, 3, 0.2)",
							opacity: phoneProgress,
							zIndex: 3,
						}}
					/>

					<Img
						src={bookingPhone}
						style={{
							position: "absolute",
							left: 70,
							top: "50%",
							height: 900,
							opacity: phoneProgress,
							transform: `translateX(${interpolate(phoneProgress, [0, 1], [-118, 0])}px) translateY(-50%) translateY(${
								interpolate(phoneProgress, [0, 1], [18, 0]) + phoneFloatY
							}px) rotate(${interpolate(phoneProgress, [0, 1], [-2.1, -0.4])}deg) scale(${interpolate(
								phoneProgress,
								[0, 1],
								[0.968, 1],
							)})`,
							transformOrigin: "center center",
							filter: "drop-shadow(0 16px 24px rgba(24, 9, 2, 0.15))",
							zIndex: 4,
						}}
					/>
				</div>
			</div>
		</AbsoluteFill>
	);
};
