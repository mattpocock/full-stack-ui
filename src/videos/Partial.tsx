import { Sequence } from 'remotion';
import { Avatar } from '../components/Avatar';
import { Chillhop } from '../components/BgMusic';
import {
	CursorHighlightText,
	getCodeNodesContainingText,
} from '../components/Cursor';
import { GridItem, VerticalGrid } from '../components/Grid';
import { SingleMarkdownFile } from '../components/MarkdownFile';
import { Title } from '../components/Title';
import { WipeIn, WipeInAndOut } from '../components/Transitions';
import { VoiceOver } from '../components/VoiceOver';
import { createSlideTimings } from '../components/createSlideTimings';

export const { slides, durationInFrames } = createSlideTimings({
	intro: 160,
	options: 60,
	optionsCursor: 160,
	firstPartialOptions: 60,
	firstPartialOptionsCursor: 200,
	pause: 200,
	useIframeCursor: 200,
	pause2: 100,
	partialCode: 150,
	partialTypeHelperCursor: 200,
	pause3: 200,
	partialOptionsAndOptionsCursor: 300,
	outro: 20,
});

export const Partial = () => {
	return (
		<VerticalGrid>
			<Chillhop />
			<VoiceOver slug="partial" startFrom={40} />
			<Sequence from={slides.intro.from}>
				<WipeInAndOut durationInFrames={slides.intro.duration}>
					<GridItem x={0} y={2} height={3} width={9}>
						<Title className="text-8xl">Partial in TypeScript</Title>
					</GridItem>
				</WipeInAndOut>
				<WipeInAndOut durationInFrames={slides.intro.duration}>
					<Avatar x={2} y={6} />
				</WipeInAndOut>
			</Sequence>
			<Sequence from={slides.options.from}>
				<WipeIn>
					<GridItem x={0} y={1} height={4} width={9}>
						<SingleMarkdownFile
							index={0}
							slug="partial"
							className="text-[48px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.optionsCursor.from}>
				<CursorHighlightText
					adjustStartX={40}
					durationInFrames={slides.optionsCursor.duration}
					getElement={() => getCodeNodesContainingText('Options')[0]}
				></CursorHighlightText>
			</Sequence>

			<Sequence from={slides.firstPartialOptions.from}>
				<WipeIn>
					<GridItem x={0} y={6} height={5} width={9}>
						<SingleMarkdownFile
							index={1}
							slug="partial"
							className="text-[48px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>

			<Sequence from={slides.firstPartialOptionsCursor.from}>
				<CursorHighlightText
					adjustStartX={40}
					durationInFrames={slides.firstPartialOptionsCursor.duration}
					getElement={() => getCodeNodesContainingText(`PartialOptions`)[0]}
				></CursorHighlightText>
			</Sequence>
			<Sequence from={slides.useIframeCursor.from}>
				<CursorHighlightText
					adjustStartX={120}
					durationInFrames={slides.useIframeCursor.duration}
					getElement={() => getCodeNodesContainingText(`useIframe`)[0]}
				></CursorHighlightText>
				<CursorHighlightText
					adjustStartX={120}
					durationInFrames={slides.useIframeCursor.duration}
					getElement={() => getCodeNodesContainingText(`useIframe`)[1]}
					hideAudio
				></CursorHighlightText>
			</Sequence>

			<Sequence from={slides.partialCode.from}>
				<WipeIn>
					<GridItem x={0} y={6} height={5} width={9}>
						<SingleMarkdownFile
							index={2}
							slug="partial"
							className="text-[41px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.partialTypeHelperCursor.from}>
				<CursorHighlightText
					durationInFrames={slides.partialTypeHelperCursor.duration}
					getElement={() => getCodeNodesContainingText(`Partial`)[2]}
				></CursorHighlightText>
			</Sequence>
			<Sequence from={slides.partialOptionsAndOptionsCursor.from}>
				<CursorHighlightText
					adjustStartX={40}
					durationInFrames={slides.partialOptionsAndOptionsCursor.duration}
					getElement={() => getCodeNodesContainingText(`Options`)[0]}
				></CursorHighlightText>
				<CursorHighlightText
					adjustStartX={40}
					durationInFrames={slides.partialOptionsAndOptionsCursor.duration}
					getElement={() => getCodeNodesContainingText(`PartialOptions`)[1]}
					hideAudio
				></CursorHighlightText>
			</Sequence>
		</VerticalGrid>
	);
};
