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
	userType: 60,
	userTypeCursor: 160,
	updateUserFunction: 200,
	updateUserCursor: 160,
	thisShouldError: 400,
	addReadonlyToUser: 40,
	addReadonlyToUserCursor: 200,
	newCommentOnUser: 200,
	newCommentOnUserCursor: 200,
	outro: 400,
});

export const ReadonlyProperties = () => {
	return (
		<VerticalGrid>
			<Chillhop />
			<VoiceOver slug="readonly-properties" startFrom={40} />
			<Sequence from={slides.intro.from}>
				<WipeInAndOut durationInFrames={slides.intro.duration}>
					<GridItem x={0} y={2} height={3} width={9}>
						<Title className="text-8xl">Readonly Properties</Title>
					</GridItem>
					<Avatar x={2} y={6} />
				</WipeInAndOut>
			</Sequence>
			<Sequence from={slides.userType.from}>
				<GridItem x={0} y={1} height={4} width={9}>
					<WipeIn>
						<SingleMarkdownFile
							index={0}
							slug="readonly-properties"
							className="text-[48px] px-10 p-0 pt-0 pb-0"
						/>
					</WipeIn>
				</GridItem>
			</Sequence>
			<Sequence from={slides.userTypeCursor.from}>
				<CursorHighlightText
					adjustStartX={40}
					durationInFrames={slides.userTypeCursor.duration}
					getElement={() => getCodeNodesContainingText('User')[0]}
				></CursorHighlightText>
			</Sequence>

			<Sequence from={slides.updateUserFunction.from}>
				<WipeIn>
					<GridItem x={0} y={6} height={5} width={9}>
						<SingleMarkdownFile
							index={1}
							slug="readonly-properties"
							className="text-[44px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>

			<Sequence from={slides.updateUserCursor.from}>
				<CursorHighlightText
					adjustStartX={120}
					durationInFrames={slides.updateUserCursor.duration}
					getElement={() => getCodeNodesContainingText(`id`)[1]?.parentElement}
				></CursorHighlightText>
			</Sequence>

			<Sequence from={slides.addReadonlyToUser.from}>
				<WipeIn>
					<GridItem x={0} y={1} height={4} width={9}>
						<SingleMarkdownFile
							index={2}
							slug="readonly-properties"
							className="text-[48px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>

			<Sequence from={slides.addReadonlyToUserCursor.from}>
				<CursorHighlightText
					adjustStartX={120}
					durationInFrames={slides.addReadonlyToUserCursor.duration}
					getElement={() => getCodeNodesContainingText(`readonly`)[0]}
				></CursorHighlightText>
			</Sequence>

			<Sequence from={slides.newCommentOnUser.from}>
				<WipeIn>
					<GridItem x={0} y={6} height={5} width={9}>
						<SingleMarkdownFile
							index={3}
							slug="readonly-properties"
							className="text-[44px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>

			{/* 

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

			<Sequence from={slides.readonly - propertiesCode.from}>
				<WipeIn>
					<GridItem x={0} y={6} height={5} width={9}>
						<SingleMarkdownFile
							index={2}
							slug="readonly-properties"
							className="text-[41px] px-10 p-0 pt-0 pb-0"
						/>
					</GridItem>
				</WipeIn>
			</Sequence>
			<Sequence from={slides.readonly - propertiesTypeHelperCursor.from}>
				<CursorHighlightText
					durationInFrames={
						slides.readonly - propertiesTypeHelperCursor.duration
					}
					getElement={() => getCodeNodesContainingText(`ReadonlyProperties`)[2]}
				></CursorHighlightText>
			</Sequence>
			<Sequence from={slides.readonly - propertiesOptionsAndOptionsCursor.from}>
				<CursorHighlightText
					adjustStartX={40}
					durationInFrames={
						slides.readonly - propertiesOptionsAndOptionsCursor.duration
					}
					getElement={() => getCodeNodesContainingText(`Options`)[0]}
				></CursorHighlightText>
				<CursorHighlightText
					adjustStartX={40}
					durationInFrames={
						slides.readonly - propertiesOptionsAndOptionsCursor.duration
					}
					getElement={() =>
						getCodeNodesContainingText(`ReadonlyPropertiesOptions`)[1]
					}
					hideAudio
				></CursorHighlightText>
			</Sequence> */}
		</VerticalGrid>
	);
};
