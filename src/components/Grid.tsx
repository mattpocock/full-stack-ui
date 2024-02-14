import clsx from 'clsx';
import React from 'react';
import { AbsoluteFill } from 'remotion';

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
	width?: number;
	height?: number;
}) => {
	return {
		left: props.x * GRID_ITEM_WIDTH,
		top: props.y * GRID_ITEM_WIDTH,
		width: (props.width ?? 0) * GRID_ITEM_WIDTH - 1,
		height: (props.height ?? 0) * GRID_ITEM_WIDTH - 1,
	};
};

export const GridItem = (props: {
	children?: React.ReactNode;
	x: GridX;
	y: GridY;
	width?: number;
	height?: number;
	className?: string;
}) => {
	return (
		<div
			className={clsx(
				'flex items-center justify-center absolute overflow-hidden',
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
		<AbsoluteFill className="bg-gray-900 flex items-center justify-center text-white">
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
								'border-2 border-gray-800 aspect-square text-gray-700 flex items-center justify-center pointer-events-none',
								row !== 0 && 'border-t-0',
								col !== 0 && 'border-l-0'
							)}
							style={{
								width: GRID_ITEM_WIDTH,
							}}
						>
							{/* <span className="text-4xl">
								{col}/{row}
							</span> */}
						</div>
					);
				})}
			</div>
			{props.children}
		</AbsoluteFill>
	);
};

export const VerticalGrid = (props: { children?: React.ReactNode }) => {
	return (
		<AbsoluteFill className="bg-gray-900 flex items-center justify-center text-white">
			<div
				className="grid w-full"
				style={{
					gridTemplateColumns: `repeat(${ROWS}, 1fr)`,
					gridTemplateRows: `repeat(${COLS}, 1fr)`,
				}}
			>
				{new Array(COLS * ROWS).fill(0).map((_, i) => {
					const row = Math.floor(i / COLS);
					const col = i % COLS;

					return (
						<div
							key={i}
							className={clsx(
								'border-2 border-gray-800 aspect-square text-gray-700 flex items-center justify-center pointer-events-none',
								row !== 0 && 'border-t-0',
								col !== 0 && 'border-l-0'
							)}
							style={{
								width: GRID_ITEM_WIDTH,
							}}
						>
							{/* <span className="text-4xl">
								{col}/{row}
							</span> */}
						</div>
					);
				})}
			</div>
			{props.children}
		</AbsoluteFill>
	);
};

export const TwoColumnLayout = (props: {
	left?: React.ReactNode;
	right?: React.ReactNode;
}) => {
	return (
		<Grid>
			<GridItem x={1} y={1} width={7} height={7}>
				{props.left}
			</GridItem>
			<GridItem x={8} y={1} width={7} height={7}>
				{props.right}
			</GridItem>
		</Grid>
	);
};

export const FullLayout = (props: { children?: React.ReactNode }) => {
	return (
		<Grid>
			<GridItem x={1} y={1} width={14} height={7}>
				{props.children}
			</GridItem>
		</Grid>
	);
};
