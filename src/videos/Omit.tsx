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
	firstCode: 80,
	firstCodeCursor: 200,
	breakAfterCursor: 60,
	secondCode: 60,
	secondCodeCursor: 200,
	thirdCode: 60,
	thirdCodeCursor: 200,
	outro: 490,
});

export const Omit = () => {
	return (
		<VerticalGrid>
			<Chillhop />
			<VoiceOver slug="omit" startFrom={40} />
			<Sequence from={slides.intro.from}>
				<WipeInAndOut durationInFrames={slides.intro.duration}>
					<GridItem x={0} y={2} height={3} width={9}>
						<Title className="text-8xl">Omit in TypeScript</Title>
					</GridItem>
				</WipeInAndOut>
				<WipeInAndOut durationInFrames={slides.intro.duration}>
					<Avatar x={2} y={6} />
				</WipeInAndOut>
			</Sequence>
			<Sequence from={slides.firstCode.from}>
				<WipeIn>
					<GridItem x={0} y={1} height={5} width={9}>
						<SingleMarkdownFile
							index={0}
							slug="omit"
							className="text-[48px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.firstCodeCursor.from}>
				<CursorHighlightText
					durationInFrames={slides.firstCodeCursor.duration}
					getElement={() => getCodeNodesContainingText('User')[1]}
				></CursorHighlightText>
			</Sequence>

			<Sequence from={slides.secondCode.from}>
				<WipeIn>
					<GridItem x={0} y={7} height={3} width={9}>
						<SingleMarkdownFile
							index={1}
							slug="omit"
							className="text-[48px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>

			<Sequence from={slides.secondCodeCursor.from}>
				<CursorHighlightText
					durationInFrames={slides.secondCodeCursor.duration}
					getElement={() => getCodeNodesContainingText(`Omit`)[1]}
				></CursorHighlightText>
			</Sequence>

			<Sequence from={slides.thirdCode.from}>
				<WipeIn>
					<GridItem x={0} y={11} height={4} width={9}>
						<SingleMarkdownFile
							index={2}
							slug="omit"
							className="text-[48px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.thirdCodeCursor.from}>
				<CursorHighlightText
					durationInFrames={slides.thirdCodeCursor.duration}
					getElement={() => getCodeNodesContainingText(`WithoutId`)[1]}
				></CursorHighlightText>
			</Sequence>
		</VerticalGrid>
	);
};
