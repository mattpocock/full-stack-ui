import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { wipe } from '@remotion/transitions/wipe';
import { Easing, staticFile } from 'remotion';
import { Code } from './Code';
import { useAsyncResource } from './useAsyncResource';

const useMarkdownCodeBlocks = (slug: string) => {
	const fileContents = useAsyncResource(async () => {
		const res = await fetch(staticFile(`${slug}.md`));

		if (!res.ok) throw new Error(`Failed to fetch ${slug}`);
		return res.text();
	});

	if (!fileContents) return null;

	const codeBlocks = fileContents
		.split('```')
		.filter((_, i) => i % 2 === 1)
		.map((codeBlock) => {
			const [lang, ...code] = codeBlock.split('\n');
			return {
				lang,
				code: code.join('\n'),
			};
		});

	return codeBlocks;
};

export const MarkdownCodeSequence = (props: {
	slug: string;
	durations: number[];
	showHeader?: boolean;
	className?: string;
}) => {
	const codeBlocks = useMarkdownCodeBlocks(props.slug);

	if (!codeBlocks) return null;
	return (
		<TransitionSeries>
			{codeBlocks.flatMap((codeBlock, index) => {
				return [
					index === 0 ? (
						<TransitionSeries.Transition
							key={`wipe-${index}`}
							timing={linearTiming({
								durationInFrames: 20,
								easing: Easing.inOut(Easing.ease),
							})}
							presentation={wipe({
								direction: 'from-left',
							})}
						></TransitionSeries.Transition>
					) : (
						<TransitionSeries.Transition
							key={`fade-${index}`}
							timing={linearTiming({ durationInFrames: 15 })}
							presentation={fade({})}
						></TransitionSeries.Transition>
					),
					<TransitionSeries.Sequence
						durationInFrames={props.durations[index] ?? 120}
						key={`code-${index}`}
					>
						<Code
							showHeader={props.showHeader}
							key={`code-${index}`}
							code={codeBlock.code}
							lang={codeBlock.lang}
							className={props.className}
						></Code>
					</TransitionSeries.Sequence>,
					...(index === codeBlocks.length - 1
						? [
								<TransitionSeries.Transition
									key={`fade-end`}
									timing={linearTiming({
										durationInFrames: 20,
										easing: Easing.inOut(Easing.ease),
									})}
									presentation={wipe({ direction: 'from-right' })}
								></TransitionSeries.Transition>,
						  ]
						: []),
				];
			})}
		</TransitionSeries>
	);
};

export const SingleMarkdownFile = (props: {
	slug: string;
	index: number;
	showHeader?: boolean;
	className?: string;
}) => {
	const codeBlocks = useMarkdownCodeBlocks(props.slug);

	if (!codeBlocks) return null;

	return (
		<Code
			className={props.className}
			code={codeBlocks[props.index].code}
			lang={codeBlocks[props.index].lang}
			showHeader={props.showHeader}
		/>
	);
};
