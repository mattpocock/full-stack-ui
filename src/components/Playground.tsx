import { Sequence } from 'remotion';
import { Chillhop } from './BgMusic';
import { CursorHighlightText, getCodeNodeContainingText } from './Cursor';
import { Grid, GridItem } from './Grid';
import { MarkdownCodeSequence } from './MarkdownFile';
import { Title } from './Title';
import { WipeIn, WipeInAndOut } from './Transitions';
import { createSlideTimings } from './createSlideTimings';

// export const { slides, durationInFrames } = createSlideTimings({
// 	intro: 240,
// 	empty: 120,
// 	arraySyntax: 120,
// 	arraySyntaxCode: 120,
// 	cursorHighlightArraySyntax: 200,
// 	squareBracketSyntax: 120,
// 	squareBracketSyntaxCode: 120,
// 	cursorHighlightSquareBracketSyntax: 200,
// });

// export const Playground1 = () => {
// 	return (
// 		<Grid>
// 			<WipeInAndOut durationInFrames={slides.intro.duration}>
// 				<GridItem x={2} y={3} height={3} width={12}>
// 					<Title className="text-8xl">Array Syntax In TypeScript</Title>
// 				</GridItem>
// 			</WipeInAndOut>
// 			<Sequence from={slides.arraySyntax.from}>
// 				<WipeIn>
// 					<GridItem x={1} y={1} width={6} height={3}>
// 						<Title className="font-mono">Array{`<T>`}</Title>
// 					</GridItem>
// 				</WipeIn>
// 			</Sequence>
// 			<Sequence from={slides.arraySyntaxCode.from}>
// 				<WipeIn>
// 					<GridItem x={7} y={1} width={8} height={3}>
// 						<SingleMarkdownFile slug="arrays" index={0}></SingleMarkdownFile>
// 					</GridItem>
// 				</WipeIn>
// 			</Sequence>
// 			<Sequence from={slides.cursorHighlightArraySyntax.from}>
// 				<CursorHighlightText
// 					startX={12.5}
// 					endX={13.5}
// 					y={2.7}
// 					durationInFrames={slides.cursorHighlightArraySyntax.duration}
// 				/>
// 			</Sequence>
// 			<Sequence from={slides.squareBracketSyntax.from}>
// 				<WipeIn>
// 					<GridItem x={1} y={5} width={6} height={3}>
// 						<Title className="font-mono">T[]</Title>
// 					</GridItem>
// 				</WipeIn>
// 			</Sequence>
// 			<Sequence from={slides.squareBracketSyntaxCode.from}>
// 				<WipeIn>
// 					<GridItem x={7} y={5} width={8} height={3}>
// 						<SingleMarkdownFile slug="arrays" index={1}></SingleMarkdownFile>
// 					</GridItem>
// 				</WipeIn>
// 			</Sequence>
// 			<Sequence from={slides.cursorHighlightSquareBracketSyntax.from}>
// 				<CursorHighlightText
// 					startX={11.5}
// 					endX={12.5}
// 					y={6.7}
// 					durationInFrames={slides.cursorHighlightSquareBracketSyntax.duration}
// 				/>
// 			</Sequence>
// 		</Grid>
// 	);
// };

export const { slides, durationInFrames } = createSlideTimings({
	intro: 200,
	omitCode: 100,
	omitCursor: 200,
	afterOmit: 100,
	excludeCode: 100,
	excludeCursor: 200,
	afterExclude: 100,
});

export const Playground = () => {
	return (
		<Grid>
			<Chillhop />
			<WipeInAndOut durationInFrames={slides.intro.duration}>
				<GridItem x={1} y={3} height={3} width={14}>
					<Title className="text-9xl font-mono">{`Omit<T> vs Exclude<T>`}</Title>
				</GridItem>
			</WipeInAndOut>

			<Sequence from={slides.omitCode.from}>
				<WipeIn>
					<GridItem x={1} y={1} height={7} width={14}>
						<MarkdownCodeSequence
							slug="omit-vs-exclude"
							className="text-[50px]"
							durations={[
								slides.omitCode.duration +
									slides.omitCursor.duration +
									slides.afterOmit.duration,
								slides.excludeCode.duration +
									slides.excludeCursor.duration +
									slides.afterExclude.duration,
							]}
						/>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.omitCursor.from}>
				<CursorHighlightText
					getElement={() => getCodeNodeContainingText('works on')}
					durationInFrames={slides.omitCursor.duration}
				></CursorHighlightText>
			</Sequence>
			<Sequence from={slides.excludeCursor.from}>
				<CursorHighlightText
					getElement={() => getCodeNodeContainingText('works on')}
					durationInFrames={slides.excludeCursor.duration}
				></CursorHighlightText>
			</Sequence>
		</Grid>
	);
};
