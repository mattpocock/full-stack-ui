import { Img } from 'remotion';
import { GridItem } from './Grid';

export const Avatar = (props: { x: number; y: number }) => {
	return (
		<GridItem x={props.x} y={props.y}>
			<GridItem x={4} y={0} width={1} height={1}>
				<Img src="https://avatars.githubusercontent.com/u/28293365?v=4"></Img>
			</GridItem>
			<GridItem
				x={0}
				y={0}
				width={4}
				height={1}
				className=" text-gray-200 bg-gray-900"
			>
				<h1 className="text-5xl text-gray-200 font-light tracking-tight m-0">
					From Matt Pocock
				</h1>
			</GridItem>
		</GridItem>
	);
};
