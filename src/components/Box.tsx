import { Sequence, Img } from 'remotion';
import { Grid, GridItem } from './Grid';

export const BoxComposition = () => {
	return (
		<Grid>
			<GridItem x={3} y={3}>
				<Sequence from={0}>
					<GridItem
						x={0}
						y={0}
						width={10}
						height={2}
						className="bg-gray-900 text-white"
					>
						<h1 className="text-8xl font-extralight tracking-widest  uppercase">
							Total TypeScript
						</h1>
					</GridItem>
				</Sequence>

				<Sequence from={90}>
					<GridItem
						x={0}
						y={2}
						width={10}
						height={1}
						className="bg-gray-900 text-gray-100"
					>
						<h1 className="text-4xl uppercase font-thin tracking-wider text-gray-300">
							Become a TypeScript Wizard
						</h1>
					</GridItem>
				</Sequence>
			</GridItem>

			<Sequence from={180}>
				<GridItem x={10} y={7}>
					<GridItem x={4} y={0} width={1} height={1}>
						<Img src="https://avatars.githubusercontent.com/u/28293365?v=4"></Img>
					</GridItem>
					<GridItem x={0} y={0} width={4} height={1} className=" text-gray-200">
						<h1 className="text-3xl tracking-wider uppercase font-thin m-0">
							From Matt Pocock
						</h1>
					</GridItem>
				</GridItem>
			</Sequence>
		</Grid>
	);
};
