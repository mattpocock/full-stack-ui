import { Grid, GridItem } from './Grid';

export const Box = (props: { children?: React.ReactNode }) => {
	return null;
};

export const BoxComposition = () => {
	return (
		<Grid>
			<GridItem
				x={3}
				y={3}
				width={10}
				height={2}
				className="bg-gray-900 text-white"
			>
				<h1 className="text-9xl tracking-tighter font-semibold">
					Full Stack UI
				</h1>
			</GridItem>

			<GridItem
				x={3}
				y={5}
				width={10}
				height={1}
				className="bg-gray-900 text-gray-200"
			>
				<h1 className="text-4xl uppercase tracking-wider text-gray-300">
					Awesome Videos On Full Stack Development
				</h1>
			</GridItem>

			<GridItem
				x={6}
				y={6}
				width={4}
				height={1}
				className="bg-gray-900 text-white"
			>
				<h1 className="text-4xl tracking-tighter">From Matt Pocock</h1>
			</GridItem>
		</Grid>
	);
};
