import { Sequence } from 'remotion';
import { CursorHighlightText } from './Cursor';
import { Grid, GridItem, VerticalGrid } from './Grid';
import { SingleMarkdownFile } from './MarkdownFile';
import { Title } from './Title';
import { WipeIn, WipeInAndOut } from './Transitions';
import { createSlideTimings } from './createSlideTimings';
import { Chillhop } from './BgMusic';

export const { slides, durationInFrames } = createSlideTimings({
	intro: 240,
	arraySyntax: 120,
	arraySyntaxCode: 120,
	cursorHighlightArraySyntax: 200,
	squareBracketSyntax: 120,
	squareBracketSyntaxCode: 120,
	cursorHighlightSquareBracketSyntax: 200,
});

export const VerticalPlayground = () => {
	return (
		<VerticalGrid>
			<Chillhop />
			<WipeInAndOut durationInFrames={slides.intro.duration}>
				<GridItem x={1} y={3} height={2} width={7}>
					<Title className="text-8xl font-mono">{`Array<T> vs T[]`}</Title>
				</GridItem>
			</WipeInAndOut>
			<Sequence from={slides.arraySyntax.from}>
				<WipeIn>
					<GridItem x={1} y={1} width={7} height={3}>
						<Title className="font-mono">Array{`<T>`}</Title>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.arraySyntaxCode.from}>
				<WipeIn>
					<GridItem x={1} y={4} width={7} height={3}>
						<SingleMarkdownFile
							slug="arrays"
							index={0}
							className="text-[29px]"
						></SingleMarkdownFile>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.cursorHighlightArraySyntax.from}>
				<CursorHighlightText
					startX={5.7}
					endX={6.7}
					y={5.7}
					durationInFrames={slides.cursorHighlightArraySyntax.duration}
				/>
			</Sequence>
			<Sequence from={slides.squareBracketSyntax.from}>
				<WipeIn>
					<GridItem x={1} y={8} width={7} height={3}>
						<Title className="font-mono">T[]</Title>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.squareBracketSyntaxCode.from}>
				<WipeIn>
					<GridItem x={1} y={11} width={7} height={3}>
						<SingleMarkdownFile slug="arrays" index={1}></SingleMarkdownFile>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.cursorHighlightSquareBracketSyntax.from}>
				<CursorHighlightText
					startX={5.5}
					endX={6.7}
					y={12.7}
					durationInFrames={slides.cursorHighlightSquareBracketSyntax.duration}
				/>
			</Sequence>
		</VerticalGrid>
	);
};
