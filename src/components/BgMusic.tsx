import { Audio } from 'remotion';
import chillhop from '../assets/chillhop.mp3';

export const Chillhop = () => {
	return <Audio src={chillhop} volume={0.04} startFrom={40} />;
};
