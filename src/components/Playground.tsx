import { Sequence, Series } from 'remotion';
import { Grid, GridItem } from './Grid';
import { SingleMarkdownFile } from './MarkdownFile';
import { Title } from './Title';
import { WipeIn, WipeInAndOut } from './Transitions';
import { createSlideTimings } from './createSlideTimings';

export const { slides, durationInFrames } = createSlideTimings({
	intro: 240,
	empty: 120,
	arraySyntax: 120,
	arraySyntax2: 240,
	squareBracketSyntax: 120,
	squareBracketSyntax2: 120,
});

export const Playground = () => {
	return (
		<Grid>
			<WipeInAndOut durationInFrames={slides.intro.duration}>
				<GridItem x={2} y={3} height={3} width={12}>
					<Title className="text-8xl">Array Syntax In TypeScript</Title>
				</GridItem>
			</WipeInAndOut>
			<Sequence from={slides.arraySyntax.from}>
				<WipeIn>
					<GridItem x={1} y={1} width={6} height={3}>
						<Title className="font-mono">Array{`<T>`}</Title>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.arraySyntax2.from}>
				<WipeIn>
					<GridItem x={7} y={1} width={8} height={3}>
						<SingleMarkdownFile slug="arrays" index={0}></SingleMarkdownFile>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.squareBracketSyntax.from}>
				<WipeIn>
					<GridItem x={1} y={5} width={6} height={3}>
						<Title className="font-mono">T[]</Title>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.squareBracketSyntax2.from}>
				<WipeIn>
					<GridItem x={7} y={5} width={8} height={3}>
						<SingleMarkdownFile slug="arrays" index={1}></SingleMarkdownFile>
					</GridItem>
				</WipeIn>
			</Sequence>
		</Grid>
	);
};
