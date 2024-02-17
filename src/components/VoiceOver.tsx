import { Audio, staticFile } from 'remotion';

export const VoiceOver = (props: { slug: string; startFrom: number }) => {
	return (
		<Audio
			src={staticFile(`vo/${props.slug}.mp3`)}
			volume={2.5}
			startFrom={props.startFrom}
			allowAmplificationDuringRender
		/>
	);
};
