import { Series, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { GridItem } from './Grid';
import { createSlideTimings } from './createSlideTimings';
import { Whoosh } from './Whoosh';

export const CursorHighlightText = (props: {
	startX: number;
	endX: number;
	y: number;
	durationInFrames: number;
}) => {
	if (props.durationInFrames < 100) {
		throw new Error(`props.durationInFrames must be greater than 100`);
	}

	const { slides } = createSlideTimings({
		flyIn: 30,
		pause: 30,
		slide: props.durationInFrames - 100,
		pause2: 20,
		flyOut: 20,
	});

	// const x = spring({
	// 	fps,
	// 	frame,
	// 	durationInFrames: slides.slide.duration,
	// 	delay: slides.slide.from,
	// 	from: props.startX,
	// 	to: props.endX,
	// 	config: {
	// 		mass: 1.2,
	// 		damping: 130,
	// 	},
	// });

	return (
		<Series>
			<Series.Sequence durationInFrames={slides.flyIn.duration}>
				<Whoosh />
				<Move
					durationInFrames={slides.flyIn.duration}
					startX={16}
					endX={props.startX}
					endY={props.y}
					startY={9}
				>
					<Cursor />
				</Move>
			</Series.Sequence>
			<Series.Sequence durationInFrames={slides.pause.duration}>
				<GridItem x={props.startX} y={props.y}>
					<Cursor />
				</GridItem>
			</Series.Sequence>
			<Series.Sequence durationInFrames={slides.slide.duration}>
				<Move
					durationInFrames={slides.slide.duration}
					startX={props.startX}
					endX={props.endX}
					endY={props.y}
					startY={props.y}
				>
					<Cursor />
				</Move>
			</Series.Sequence>
			<Series.Sequence durationInFrames={slides.pause2.duration}>
				<GridItem x={props.endX} y={props.y}>
					<Cursor />
				</GridItem>
			</Series.Sequence>
			<Series.Sequence durationInFrames={slides.flyOut.duration}>
				<Move
					durationInFrames={slides.flyOut.duration}
					startX={props.endX}
					endX={16}
					endY={9}
					startY={props.y}
				>
					<Cursor />
				</Move>
			</Series.Sequence>
		</Series>
	);
};

const Move = (props: {
	durationInFrames: number;
	startX: number;
	endX: number;
	startY: number;
	endY: number;
	children: React.ReactNode;
}) => {
	const frame = useCurrentFrame();

	const fps = useVideoConfig().fps;

	const x = spring({
		fps,
		frame: frame,
		durationInFrames: props.durationInFrames,
		from: props.startX,
		to: props.endX,
		config: {
			mass: 1.2,
			damping: 130,
		},
	});

	const y = spring({
		fps,
		frame: frame,
		durationInFrames: props.durationInFrames,
		from: props.startY,
		to: props.endY,
		config: {
			mass: 1.2,
			damping: 130,
		},
	});

	return (
		<GridItem x={x} y={y}>
			{props.children}
		</GridItem>
	);
};

const Cursor = () => {
	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="7.5 5 28 28"
			enableBackground="new 0 0 28 28"
			xmlSpace="preserve"
			className="size-24 text-gray-200"
		>
			<polygon
				className="fill-current"
				points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
			/>
			<polygon
				className="fill-current"
				points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "
			/>
			<rect
				x="12.5"
				y="13.6"
				transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
				width="2"
				height="8"
				className="fill-current text-black "
			/>
			<polygon
				points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "
				className="fill-current text-black "
			/>
		</svg>
	);
};
