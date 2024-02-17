import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import clsx from 'clsx';
import dedent from 'dedent';
import { Sequence } from 'remotion';
import { codeToHtml } from 'shikiji';
import { Grid, GridItem } from './Grid';
import { Title } from './Title';
import { useAsyncResource } from './useAsyncResource';

const DEFAULT_LANG = 'ts';

export const Code = (props: {
	lang?: string;
	code: string;
	className?: string;
	filename?: string;
	showHeader?: boolean;
}) => {
	const html = useAsyncResource(() =>
		codeToHtml(props.code, {
			lang: props.lang ?? DEFAULT_LANG,
			theme: 'dark-plus',
			mergeWhitespaces: true,
		})
	);

	if (!html) return null;

	return (
		<div className="flex-1 h-full w-full flex flex-col relative">
			{props.showHeader && (
				<div className="bg-gray-800 flex items-center space-x-10 h-[120px]">
					<div className="flex items-center space-x-5">
						<div className="size-8 rounded-full bg-red-500"></div>
						<div className="size-8 rounded-full bg-yellow-500"></div>
						<div className="size-8 rounded-full bg-green-600"></div>
					</div>
					{props.filename && (
						<span className="text-3xl leading-2 text-gray-300 mt-[-6px]">
							{props.filename}
						</span>
					)}
				</div>
			)}
			<div className="flex-1 flex items-center justify-start bg-[#1E1E1E] ">
				<div
					dangerouslySetInnerHTML={{
						__html: html,
					}}
					className={clsx('text-[34px]', 'p-20 py-14', props.className)}
				></div>
			</div>
		</div>
	);
};

const code = `
	<AwesomeStuff>
		<AnotherComponent />
		<AnotherComponent />
		<AnotherComponent />
	</AwesomeStuff>
`;

const code2 = `
	<AwesomeStuff>
		<GreatStuff />
		<GreatStuff />
		<GreatStuff />
	</AwesomeStuff>
`;

export const CodeComposition = () => {
	return (
		<Grid>
			<Sequence>
				<GridItem x={1} y={3} width={8} height={4}>
					<TransitionSeries>
						<TransitionSeries.Sequence durationInFrames={120}>
							<Code code={code} lang="tsx"></Code>
						</TransitionSeries.Sequence>
						<TransitionSeries.Transition
							timing={linearTiming({ durationInFrames: 15 })}
							presentation={fade({})}
						/>
						<TransitionSeries.Sequence durationInFrames={120}>
							<Code code={code2} lang="tsx"></Code>
						</TransitionSeries.Sequence>
					</TransitionSeries>
				</GridItem>
			</Sequence>
			<Sequence from={60}>
				<GridItem x={1} y={2} width={8} height={1}>
					<Title>JSX is composable</Title>
				</GridItem>
			</Sequence>
		</Grid>
	);
};
