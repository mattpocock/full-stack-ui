import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { wipe } from '@remotion/transitions/wipe';
import { Easing } from 'remotion';

export const WipeIn = (props: { children?: React.ReactNode }) => {
	return (
		<TransitionSeries>
			<TransitionSeries.Transition
				timing={linearTiming({
					durationInFrames: 50,
					easing: Easing.inOut(Easing.ease),
				})}
				presentation={wipe({ direction: 'from-left' })}
			/>
			<TransitionSeries.Sequence durationInFrames={2000}>
				{props.children}
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};

export const WipeInAndOut = (props: {
	children?: React.ReactNode;
	durationInFrames: number;
}) => {
	return (
		<TransitionSeries>
			<TransitionSeries.Transition
				timing={linearTiming({
					durationInFrames: 50,
					easing: Easing.inOut(Easing.ease),
				})}
				presentation={wipe({ direction: 'from-left' })}
			/>
			<TransitionSeries.Sequence durationInFrames={props.durationInFrames}>
				{props.children}
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({
					durationInFrames: 50,
					easing: Easing.inOut(Easing.ease),
				})}
				presentation={wipe({ direction: 'from-left' })}
			/>
		</TransitionSeries>
	);
};
