import { useCurrentScale } from 'remotion';

export const useScale = () => {
	const inverseScale = useInverseScale();
	const scale = 1 / inverseScale;

	return scale;
};

export const useInverseScale = () => {
	const scale =
		useCurrentScale({
			dontThrowIfOutsideOfRemotion: true,
		}) ?? 1;

	return scale;
};
