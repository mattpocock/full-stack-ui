import { Composition } from 'remotion';
import { BoxComposition } from './components/Box';
import './style.css';
import { CodeComposition } from './components/Code';
import * as Playground from './components/Playground';
import * as VerticalPlayground from './components/VerticalPlayground';
import * as Omit from './videos/Omit';
import * as Partial from './videos/Partial';
import * as ReadonlyProperties from './videos/ReadonlyProperties';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				component={BoxComposition}
				id="BoxComposition"
				fps={60}
				height={1080}
				width={1920}
				durationInFrames={480}
			/>
			<Composition
				component={CodeComposition}
				id="CodeComposition"
				fps={60}
				height={1080}
				width={1920}
				durationInFrames={480}
			/>
			<Composition
				component={Playground.Playground}
				id="Playground"
				fps={60}
				height={1080}
				width={1920}
				durationInFrames={Playground.durationInFrames}
			/>
			<Composition
				component={VerticalPlayground.VerticalPlayground}
				id="VerticalPlayground"
				fps={60}
				width={1080}
				height={1920}
				durationInFrames={VerticalPlayground.durationInFrames}
			/>
			<Composition
				component={Omit.Omit}
				id="Omit"
				fps={60}
				width={1080}
				height={1920}
				durationInFrames={Omit.durationInFrames}
			/>
			<Composition
				component={Partial.Partial}
				id="Partial"
				fps={60}
				width={1080}
				height={1920}
				durationInFrames={Partial.durationInFrames}
			/>
			<Composition
				component={ReadonlyProperties.ReadonlyProperties}
				id="ReadonlyProperties"
				fps={60}
				width={1080}
				height={1920}
				durationInFrames={ReadonlyProperties.durationInFrames}
			/>
		</>
	);
};
