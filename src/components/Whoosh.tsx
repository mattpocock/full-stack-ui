import { Audio } from 'remotion';
import whoosh from '../assets/whoosh.wav';

export const Whoosh = () => {
	return <Audio src={whoosh} startFrom={10} endAt={100} volume={0.3} />;
};
