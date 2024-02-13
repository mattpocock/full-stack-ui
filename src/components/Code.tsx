import clsx from 'clsx';
import dedent from 'dedent';
import { useCallback, useEffect, useState } from 'react';
import { Sequence, cancelRender, continueRender, delayRender } from 'remotion';
import { codeToHtml } from 'shikiji';
import { Grid, GridItem } from './Grid';
import { Title } from './Title';

const useAsyncResource = <T,>(fetcher: () => Promise<T>) => {
	const [data, setData] = useState<T | null>(null);
	const [handle] = useState(() => delayRender());

	const fetchData = useCallback(async () => {
		try {
			setData(await fetcher());

			continueRender(handle);
		} catch (err) {
			cancelRender(err);
		}
	}, [handle]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return data;
};

const DEFAULT_LANG = 'ts';

export const Code = (props: {
	lang?: string;
	code: string;
	className?: string;
	filename?: string;
	showHeader?: boolean;
}) => {
	const html = useAsyncResource(() =>
		codeToHtml(dedent(props.code), {
			lang: props.lang ?? DEFAULT_LANG,
			theme: 'dark-plus',
			mergeWhitespaces: true,
		})
	);

	if (!html) return null;

	return (
		<div className="flex-1 h-full w-full flex flex-col relative">
			{props.showHeader && (
				<div className="bg-gray-800 flex items-center space-x-10 h-[120px] px-12">
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
			<div className="flex-1 flex items-center justify-start p-20 py-14 bg-[#1E1E1E] ">
				<div
					dangerouslySetInnerHTML={{
						__html: html,
					}}
					className={clsx('text-[34px]', props.className)}
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

export const CodeComposition = () => {
	// return (
	// 	<TwoColumnLayout
	// 		left={
	// 			<Sequence>
	// 				<Code code={code} lang="ts" className="text-[34px]" />
	// 			</Sequence>
	// 		}
	// 		right={
	// 			<Sequence className="">
	// 				<Code code={code} lang="ts" className="text-[34px]" />
	// 			</Sequence>
	// 		}
	// 	></TwoColumnLayout>
	// );

	return (
		<Grid>
			<Sequence>
				<GridItem x={1} y={3} width={8} height={4}>
					<Code code={code} lang="tsx"></Code>
				</GridItem>
			</Sequence>
			<Sequence from={120}>
				<GridItem x={1} y={2} width={8} height={1}>
					<Title>JSX is composable</Title>
				</GridItem>
			</Sequence>
		</Grid>
	);
};
