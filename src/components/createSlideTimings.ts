export const createSlideTimings = <T extends Record<string, number>>(
	config: T
) => {
	let total = 0;

	const slides = Object.entries(config).reduce(
		(acc, [key, value]) => {
			(acc as any)[key] = {
				duration: value,
				from: total,
			};

			total += value;

			return acc;
		},
		{} as Record<
			keyof T,
			{
				duration: number;
				from: number;
			}
		>
	);

	return {
		slides,
		durationInFrames: total,
	};
};
