import { Sequence } from 'remotion';
import { CursorHighlightText } from './Cursor';
import { Grid, GridItem } from './Grid';
import { SingleMarkdownFile } from './MarkdownFile';
import { Title } from './Title';
import { WipeIn, WipeInAndOut } from './Transitions';
import { createSlideTimings } from './createSlideTimings';

export const { slides, durationInFrames } = createSlideTimings({
	intro: 240,
	empty: 120,
	arraySyntax: 120,
	arraySyntaxCode: 120,
	cursorHighlightArraySyntax: 200,
	squareBracketSyntax: 120,
	squareBracketSyntaxCode: 120,
	cursorHighlightSquareBracketSyntax: 200,
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
			<Sequence from={slides.arraySyntaxCode.from}>
				<WipeIn>
					<GridItem x={7} y={1} width={8} height={3}>
						<SingleMarkdownFile slug="arrays" index={0}></SingleMarkdownFile>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.cursorHighlightArraySyntax.from}>
				<CursorHighlightText
					startX={12.5}
					endX={13.5}
					y={2.7}
					durationInFrames={slides.cursorHighlightArraySyntax.duration}
				/>
			</Sequence>
			<Sequence from={slides.squareBracketSyntax.from}>
				<WipeIn>
					<GridItem x={1} y={5} width={6} height={3}>
						<Title className="font-mono">T[]</Title>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.squareBracketSyntaxCode.from}>
				<WipeIn>
					<GridItem x={7} y={5} width={8} height={3}>
						<SingleMarkdownFile slug="arrays" index={1}></SingleMarkdownFile>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.cursorHighlightSquareBracketSyntax.from}>
				<CursorHighlightText
					startX={11.5}
					endX={12.5}
					y={6.7}
					durationInFrames={slides.cursorHighlightSquareBracketSyntax.duration}
				/>
			</Sequence>
		</Grid>
	);
};
