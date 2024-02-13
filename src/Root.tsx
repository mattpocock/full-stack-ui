import { Composition } from 'remotion';
import { BoxComposition } from './components/Box';
import './style.css';
import { CodeComposition } from './components/Code';

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
		</>
	);
};
