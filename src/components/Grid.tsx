import { AbsoluteFill } from 'remotion';
import clsx from 'clsx';

const COLS = 16;
const ROWS = 9;

const GRID_ITEM_WIDTH = 1920 / COLS;

// A number between 0 and 16
type GridX = number;

// A number between 0 and 9
type GridY = number;

export const getGridLayout = (props: {
	x: GridX;
	y: GridY;
	width: number;
	height: number;
}) => {
	return {
		left: props.x * GRID_ITEM_WIDTH,
		top: props.y * GRID_ITEM_WIDTH,
		width: props.width * GRID_ITEM_WIDTH - 2,
		height: props.height * GRID_ITEM_WIDTH - 2,
	};
};

export const GridItem = (props: {
	children?: React.ReactNode;
	x: GridX;
	y: GridY;
	width: number;
	height: number;
	className?: string;
}) => {
	return (
		<div
			className={clsx(
				'flex items-center justify-center absolute',
				props.className
			)}
			style={{
				...getGridLayout(props),
			}}
		>
			{props.children}
		</div>
	);
};

export const Grid = (props: { children?: React.ReactNode }) => {
	return (
		<AbsoluteFill className="bg-gray-900 flex items-center justify-center">
			<div
				className="grid w-full"
				style={{
					gridTemplateColumns: `repeat(${COLS}, 1fr)`,
					gridTemplateRows: `repeat(${ROWS}, 1fr)`,
				}}
			>
				{new Array(COLS * ROWS).fill(0).map((_, i) => {
					const row = Math.floor(i / COLS);
					const col = i % COLS;

					return (
						<div
							key={i}
							className={clsx(
								'border-2 border-gray-800 aspect-square text-gray-700 flex items-center justify-center',
								row !== 0 && 'border-t-0',
								col !== 0 && 'border-l-0'
							)}
							style={{
								width: GRID_ITEM_WIDTH,
							}}
						>
							<span className="text-4xl">
								{col}/{row}
							</span>
						</div>
					);
				})}
			</div>
			{props.children}
		</AbsoluteFill>
	);
};
